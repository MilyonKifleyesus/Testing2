import { Component, input, output, signal, inject, HostListener, effect, ElementRef, Renderer2, OnDestroy, HostBinding, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WarRoomService } from '../../../../../shared/services/war-room.service';

import { A11yModule } from '@angular/cdk/a11y';

export interface CompanyFormData {
  companyName: string;
  location: string;
  sourceCompanyName?: string;
  sourceLocation?: string;
  status: 'ACTIVE' | 'PAUSED';
  description?: string;
  logo?: string | ArrayBuffer | null;
  logoFile?: File;
  subLocations?: SubLocationFormData[];
}

export interface SubLocationFormData {
  name: string;
  location: string;
  status: 'ACTIVE' | 'PAUSED' | 'MAINTENANCE';
}

@Component({
  selector: 'app-add-company-modal',
  imports: [CommonModule, FormsModule, A11yModule],
  templateUrl: './add-company-modal.component.html',
  styleUrl: './add-company-modal.component.scss',
})
export class AddCompanyModalComponent implements OnDestroy {
  // Inputs
  isVisible = input<boolean>(false);
  /** When true, overlay is positioned over the map area only (no moveToBody, absolute positioning) */
  useMapPositioning = input<boolean>(false);

  // Outputs
  companyAdded = output<CompanyFormData>();
  companyAddedComplete = output<void>();
  close = output<void>();

  // Services
  private warRoomService = inject(WarRoomService);
  private elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);

  // Form data
  companyName = signal<string>('');
  location = signal<string>('');
  companyStatus = signal<'ACTIVE' | 'PAUSED'>('ACTIVE');
  sourceCompanyName = signal<string>('');
  sourceLocation = signal<string>('');
  description = signal<string>('');
  logoFile = signal<File | null>(null);
  logoPreview = signal<string | null>(null);
  subLocations = signal<SubLocationFormData[]>([]);
  subLocationName = signal<string>('');
  subLocationLocation = signal<string>('');
  subLocationIsActive = signal<boolean>(true);

  readonly canAddSubLocation = computed(() => {
    return !!this.subLocationName().trim() && !!this.subLocationLocation().trim();
  });

  // Form state
  // Async UI state required by UX spec (kept local to the modal).
  loading = signal<boolean>(false);
  errorMessage = signal<string | null>(null);
  successMessage = signal<string | null>(null);
  submissionState = signal<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE');
  isSubmitting = computed(() => this.loading());

  @HostBinding('class.map-positioned') get isMapPositioned(): boolean {
    return this.useMapPositioning();
  }

  constructor() {
    // Move modal to body when visible and NOT using map positioning
    effect(() => {
      const visible = this.isVisible();
      const mapPos = this.useMapPositioning();
      if (visible && !mapPos) {
        setTimeout(() => this.moveToBody(), 0);
      }

      // Accessibility: Focus first input when modal opens
      if (visible) {
        setTimeout(() => this.focusFirstInput(), 100);
      }
    });
  }

  ngOnDestroy(): void {
    const element = this.elementRef.nativeElement;
    if (element.parentNode === document.body) {
      this.renderer.removeChild(document.body, element);
    }
  }

  private moveToBody(): void {
    const element = this.elementRef.nativeElement;
    if (element.parentNode !== document.body) {
      this.renderer.appendChild(document.body, element);
    }
  }

  /**
   * Handle escape key to close modal
   */
  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.isVisible() && !this.isSubmitting()) {
      this.onClose();
    }
  }

  /**
   * Handle file selection for logo
   */
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      // Check if it's an image file (SVG, PNG, JPG, JPEG, GIF, WEBP)
      const validImageTypes = [
        'image/svg+xml',
        'image/png',
        'image/jpeg',
        'image/gif',
        'image/webp'
      ];

      const validExtensions = ['.svg', '.png', '.jpg', '.jpeg', '.gif', '.webp'];
      const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));

      if (validImageTypes.includes(file.type) || validExtensions.includes(fileExtension)) {
        this.logoFile.set(file);

        // Create preview
        const reader = new FileReader();
        const handleReadError = (message: string): void => {
          this.logoPreview.set(null);
          this.errorMessage.set(message);
          setTimeout(() => this.errorMessage.set(null), 3000);
        };

        reader.onload = (e) => {
          const result = e.target?.result;
          if (typeof result === 'string') {
            this.logoPreview.set(result);
          } else {
            handleReadError('Unable to preview the selected logo file');
          }
        };
        reader.onerror = () => handleReadError('Failed to read the selected logo file');
        reader.onabort = () => handleReadError('Logo upload was interrupted');
        reader.readAsDataURL(file);
      } else {
        this.errorMessage.set('Please select an image file (SVG, PNG, JPG, GIF, or WEBP)');
        setTimeout(() => this.errorMessage.set(null), 3000);
      }
    }
  }

  /**
   * Remove selected logo
   */
  removeLogo(): void {
    this.logoFile.set(null);
    this.logoPreview.set(null);
  }

  /**
   * Validate form
   */
  private validateForm(): boolean {
    if (!this.companyName().trim()) {
      this.errorMessage.set('Target company name is required');
      return false;
    }

    if (!this.location().trim()) {
      this.errorMessage.set('Target company primary location is required');
      return false;
    }

    const sourceCompany = this.sourceCompanyName().trim();
    const sourceLocation = this.sourceLocation().trim();
    if (sourceCompany && !sourceLocation) {
      this.errorMessage.set('Your location is required when providing a source company');
      return false;
    }
    if (!sourceCompany && sourceLocation) {
      this.errorMessage.set('Your company name is required when providing a source location');
      return false;
    }

    return true;
  }

  /**
   * Parse location input (coordinates or address)
   */
  private async parseLocation(locationInput: string): Promise<{ latitude: number | null; longitude: number | null; city: string; needsGeocoding?: boolean } | null> {
    const trimmed = locationInput.trim();

    // Extract city from input (everything after the coordinates if coordinates are provided)
    let city = trimmed;

    // Try to parse as coordinates (format: "lat, lng" or "lat,lng")
    const coordinateMatch = trimmed.match(/^(-?\d+\.?\d*)\s*,\s*(-?\d+\.?\d*)(?:\s*,\s*(.+))?$/);
    if (coordinateMatch) {
      const latitude = parseFloat(coordinateMatch[1]);
      const longitude = parseFloat(coordinateMatch[2]);
      city = coordinateMatch[3] ? coordinateMatch[3].trim() : trimmed;

      // Validate coordinate ranges
      if (latitude >= -90 && latitude <= 90 && longitude >= -180 && longitude <= 180) {
        return { latitude, longitude, city: city || 'Unknown' };
      } else {
        throw new Error('Invalid coordinates. Latitude must be between -90 and 90, longitude between -180 and 180');
      }
    }

    // Check if it's a "City, Province" format (e.g., "Toronto, Ontario")
    // Pattern: text, text (at least one comma with text on both sides, not coordinates)
    const cityProvinceMatch = trimmed.match(/^([^,]+),\s*([^,]+)$/);
    if (cityProvinceMatch && !coordinateMatch) {
      // Valid "City, Province" format - accept it even if geocoding isn't available
      // Return null coordinates with needsGeocoding flag so downstream consumers can detect this
      city = trimmed;
      return { latitude: null, longitude: null, city: trimmed, needsGeocoding: true };
    }

    // If not coordinates or city/province format, try geocoding service
    try {
      this.logDebug(`[AddCompanyModalComponent] Geocoding location: "${trimmed}"`);
      const coords = await this.warRoomService.parseLocationInput(trimmed);
      // Use the input as city name if it's an address
      return { ...coords, city: trimmed };
    } catch (error) {
      this.logWarn(`[AddCompanyModalComponent] Geocoding failed for "${trimmed}":`, error);
      // If geocoding fails but it looks like a valid location string, accept it
      // This allows "City, Province" format to work even without geocoding
      if (trimmed.length > 2 && !trimmed.match(/^-?\d+\.?\d*\s*,\s*-?\d+\.?\d*$/)) {
        // Not coordinates, treat as location string (e.g., "Toronto, Ontario")
        return { latitude: null, longitude: null, city: trimmed, needsGeocoding: true };
      }
      throw error instanceof Error ? error : new Error('Could not parse location. Please enter coordinates in format "latitude, longitude" or a location like "City, Province"');
    }
  }

  /**
   * Handle form submission
   */
  async onSubmit(): Promise<void> {
    // Guard against duplicate submissions while an async request is in-flight.
    if (this.isSubmitting()) {
      return;
    }

    // Clear previous errors
    this.errorMessage.set(null);
    this.successMessage.set(null);

    // Validate form
    if (!this.validateForm()) {
      setTimeout(() => this.errorMessage.set(null), 3000);
      return;
    }

    // Keep modal open while loading to avoid user confusion.
    this.loading.set(true);
    this.submissionState.set('SUBMITTING');

    try {
      const locationValue = this.location().trim();
      // Parse location
      const locationData = await this.parseLocation(locationValue);
      if (!locationData) {
        throw new Error('Failed to parse location');
      }

      // Prepare form data
      const formData: CompanyFormData = {
        companyName: this.companyName().trim(),
        location: locationValue,
        sourceCompanyName: this.sourceCompanyName().trim(),
        sourceLocation: this.sourceLocation().trim(),
        status: this.companyStatus(),
        description: this.description().trim() || undefined,
        logo: this.logoPreview(),
        logoFile: this.logoFile() || undefined,
        subLocations: this.subLocations(),
      };

      // Emit company added event
      this.companyAdded.emit(formData);

      // Wait for parent to signal completion via companyAddedComplete event
      // The parent should call closeAfterSuccess() or emit companyAddedComplete when done
    } catch (error) {
      console.error('Error in onSubmit:', error);
      const errorMsg = error instanceof Error ? error.message : 'An error occurred while processing the form';
      this.handleError(errorMsg);
      console.error('Error message set:', errorMsg);
      // Don't auto-hide error - let user see it and fix the issue
    }
  }

  /**
   * Reset form
   */
  private resetForm(): void {
    this.companyName.set('');
    this.location.set('');
    this.companyStatus.set('ACTIVE');
    this.sourceCompanyName.set('');
    this.sourceLocation.set('');
    this.description.set('');
    this.logoFile.set(null);
    this.logoPreview.set(null);
    this.subLocations.set([]);
    this.resetSubLocationForm();
    this.errorMessage.set(null);
    this.successMessage.set(null);
    this.loading.set(false);
    this.submissionState.set('IDLE');
  }

  /**
   * Handle close button click
   */
  onClose(): void {
    if (this.isSubmitting()) {
      return;
    }
    this.resetForm();
    this.close.emit();
  }

  /**
   * Focus first input for accessibility
   * @private
   */
  private focusFirstInput(): void {
    const firstInput = this.elementRef.nativeElement.querySelector('#target-company-name');
    if (firstInput) {
      firstInput.focus();
    }
  }

  /**
   * Handle successful submission
   */
  handleSuccess(message?: string): void {
    // Success is the ONLY time we close the modal automatically.
    this.loading.set(false);
    this.errorMessage.set(null);
    this.successMessage.set(
      message || `${this.companyName().trim() || 'Company'} registered. Sync complete.`
    );
    this.submissionState.set('SUCCESS');
  }

  /**
   * Handle submission error
   */
  handleError(message: string): void {
    const fallback = 'Failed to add subsidiary. Please try again.';
    this.errorMessage.set(message?.trim() ? message : fallback);
    this.successMessage.set(null);
    this.loading.set(false);
    this.submissionState.set('ERROR');
  }

  /**
   * Close modal after successful company addition
   * Called by parent when processing is complete
   */
  closeAfterSuccess(): void {
    setTimeout(() => {
      this.onClose();
    }, 2000); // Give user time to see the success message
  }

  /**
   * Handle backdrop click
   */
  onBackdropClick(event: MouseEvent): void {
    if (this.isSubmitting()) {
      return;
    }
    // Only close if clicking the backdrop itself, not the modal content
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.onClose();
    }
  }

  /**
   * Stop event propagation for modal content clicks
   */
  stopPropagation(event: MouseEvent): void {
    event.stopPropagation();
  }

  addSubLocation(): void {
    if (!this.canAddSubLocation()) {
      this.errorMessage.set('Sub-location name and location are required');
      setTimeout(() => this.errorMessage.set(null), 2500);
      return;
    }

    const status: SubLocationFormData['status'] = this.subLocationIsActive() ? 'ACTIVE' : 'PAUSED';
    const newLocation: SubLocationFormData = {
      name: this.subLocationName().trim(),
      location: this.subLocationLocation().trim(),
      status,
    };

    this.subLocations.update((current) => [...current, newLocation]);
    this.resetSubLocationForm();
  }

  removeSubLocation(index: number): void {
    this.subLocations.update((current) => current.filter((_, i) => i !== index));
  }

  toggleSubLocationStatus(index: number, checked: boolean): void {
    this.subLocations.update((current) =>
      current.map((item, i) =>
        i === index ? { ...item, status: checked ? 'ACTIVE' : 'PAUSED' } : item
      )
    );
  }

  loadSampleData(): void {
    this.errorMessage.set(null);
    this.companyName.set('Nova Bus');
    this.description.set(
      'STATUS: ACTIVE + INACTIVE // LOCATION: SAINT-EUSTACHE, QUEBEC // MIXED-SCHEDULE BUILDOUT'
    );
    this.companyStatus.set('ACTIVE');
    this.resetSubLocationForm();
  }

  resetSubLocationForm(): void {
    this.subLocationName.set('');
    this.subLocationLocation.set('');
    this.subLocationIsActive.set(true);
  }

  getSubLocationStatusClass(status: SubLocationFormData['status']): string {
    if (status === 'ACTIVE') return 'status-active';
    if (status === 'PAUSED') return 'status-paused';
    return 'status-maintenance';
  }

  getSubLocationStatusLabel(status: SubLocationFormData['status']): string {
    return status === 'ACTIVE' ? 'ACTIVE' : 'INACTIVE';
  }

  private logDebug(message: string, ...args: any[]): void {
    console.log(message, ...args);
  }

  private logWarn(message: string, ...args: any[]): void {
    console.warn(message, ...args);
  }
}
