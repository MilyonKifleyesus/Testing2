import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface SnagRow {
  number: string;
  project: string;
  vehicle: string;
  category: string;
  description: string;
  inspector: string;
  area: string;
  safetyCritical: boolean;
  repeater: boolean;
  hasImages: boolean;
  selected?: boolean;
}

@Component({
  selector: 'app-snags',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="main-container container-fluid px-0">
      <!-- Page Header -->
      <div class="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <div>
          <h1 class="page-title fw-semibold fs-20 mb-1">Snags</h1>
          <p class="text-muted mb-0 fs-13">Monitor, triage, and act on snags across projects and vehicles.</p>
        </div>
        <div class="btn-list">
          <button class="btn btn-success-light btn-wave">
            <i class="ti ti-download me-2"></i>Export
          </button>
          <button class="btn btn-primary btn-wave">
            <i class="ti ti-plus me-2"></i>New Snag
          </button>
        </div>
      </div>

      <div class="row g-3">
        <!-- Filters -->
        <div class="col-xxl-8">
          <div class="card custom-card">
            <div class="card-body">
              <div class="row g-3">
                <div class="col-lg-6">
                  <label class="form-label">Project</label>
                  <select class="form-select" [(ngModel)]="filters.project">
                    <option value="">All projects</option>
                    <option *ngFor="let p of projects" [value]="p">{{p}}</option>
                  </select>
                </div>
                <div class="col-lg-6">
                  <label class="form-label">Vehicle</label>
                  <select class="form-select" [(ngModel)]="filters.vehicle">
                    <option value="">All vehicles</option>
                    <option *ngFor="let v of vehicles" [value]="v">{{v}}</option>
                  </select>
                </div>
                <div class="col-lg-6">
                  <label class="form-label">Inspector</label>
                  <select class="form-select" [(ngModel)]="filters.inspector">
                    <option value="">All inspectors</option>
                    <option *ngFor="let i of inspectors" [value]="i">{{i}}</option>
                  </select>
                </div>
                <div class="col-lg-6">
                  <label class="form-label">Area</label>
                  <select class="form-select" [(ngModel)]="filters.area">
                    <option value="">All areas</option>
                    <option *ngFor="let a of areas" [value]="a">{{a}}</option>
                  </select>
                </div>
                <div class="col-12 d-flex align-items-center mt-1">
                  <input class="form-check-input me-2" type="checkbox" id="includeImages" [(ngModel)]="filters.includeImages">
                  <label class="form-check-label" for="includeImages">Include images only</label>
                  <div class="ms-auto" style="max-width: 260px;">
                    <div class="input-group">
                      <span class="input-group-text"><i class="ti ti-search"></i></span>
                      <input class="form-control" placeholder="Search snag, vehicle, project..." [(ngModel)]="filters.search">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Highlights -->
        <div class="col-xxl-4">
          <div class="row g-3 h-100">
            <div class="col-sm-6 col-12">
              <div class="highlight-card bg-primary-01">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <p class="text-muted mb-1">Total Snags</p>
                    <h3 class="mb-0">{{filteredSnags.length}}</h3>
                  </div>
                  <div class="icon-badge bg-primary">
                    <i class="ti ti-alert-triangle"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-12">
              <div class="highlight-card bg-danger-01">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <p class="text-muted mb-1">Safety Critical</p>
                    <h3 class="mb-0">{{safetyCriticalCount}}</h3>
                  </div>
                  <div class="icon-badge bg-danger">
                    <i class="ti ti-shield-lock"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="highlight-card bg-success-01">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <p class="text-muted mb-1">Selected</p>
                    <h3 class="mb-0">{{selectedCount}}</h3>
                  </div>
                  <div class="d-flex gap-2">
                    <button class="btn btn-sm btn-success" (click)="checkAll()"><i class="ti ti-check me-1"></i>Check All</button>
                    <button class="btn btn-sm btn-outline-secondary" (click)="uncheckAll()">Uncheck</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Table Card -->
      <div class="card custom-card mt-3">
        <div class="card-header flex-wrap gap-2">
          <div class="card-title mb-0">Snag Register</div>
          <div class="ms-auto d-flex gap-2 flex-wrap">
            <button class="btn btn-sm btn-light" (click)="uncheckAll()">Uncheck All</button>
            <button class="btn btn-sm btn-success" (click)="checkAll()">Check All</button>
            <button class="btn btn-sm btn-outline-primary"><i class="ti ti-printer me-1"></i>Print</button>
          </div>
        </div>
        <div class="card-body p-0">
          <div class="table-responsive">
            <table class="table table-hover align-middle mb-0">
              <thead>
                <tr>
                  <th style="width: 48px;" class="text-center"><input type="checkbox" class="form-check-input" [checked]="allSelected" (change)="toggleAll($event)"></th>
                  <th>Snag #</th>
                  <th>Inspector</th>
                  <th>Project</th>
                  <th>Vehicle</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Area</th>
                  <th>Safety</th>
                  <th>Repeater</th>
                  <th>Images</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let row of filteredSnags" [class.table-active]="row.selected">
                  <td class="text-center">
                    <input type="checkbox" class="form-check-input" [(ngModel)]="row.selected" (change)="updateSelection()">
                  </td>
                  <td class="fw-semibold">{{row.number}}</td>
                  <td>{{row.inspector}}</td>
                  <td><span class="badge bg-info-transparent">{{row.project}}</span></td>
                  <td class="text-muted">{{row.vehicle}}</td>
                  <td><span class="badge bg-secondary-transparent">{{row.category}}</span></td>
                  <td class="text-truncate" style="max-width: 260px;" title="{{row.description}}">{{row.description}}</td>
                  <td>{{row.area}}</td>
                  <td>
                    <span class="badge" [class.bg-danger-transparent]="row.safetyCritical" [class.bg-success-transparent]="!row.safetyCritical">
                      {{row.safetyCritical ? 'Critical' : 'Normal'}}
                    </span>
                  </td>
                  <td>
                    <span class="badge" [class.bg-warning-transparent]="row.repeater" [class.bg-light]="!row.repeater">
                      {{row.repeater ? 'Repeater' : 'First' }}
                    </span>
                  </td>
                  <td>
                    <i class="ti" [ngClass]="row.hasImages ? 'ti-photo text-primary' : 'ti-photo-off text-muted'"></i>
                  </td>
                </tr>
                <tr *ngIf="filteredSnags.length === 0">
                  <td colspan="11" class="text-center py-4 text-muted">No snags match your filters.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .highlight-card {
      border-radius: 12px;
      padding: 14px;
      border: 1px solid var(--default-border);
      box-shadow: 0 8px 20px rgba(0,0,0,0.04);
    }
    .icon-badge {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      box-shadow: 0 4px 10px rgba(0,0,0,0.12);
    }
    .bg-primary-01 { background: rgba(var(--primary-rgb), 0.08); }
    .bg-danger-01 { background: rgba(var(--danger-rgb), 0.08); }
    .bg-success-01 { background: rgba(var(--success-rgb), 0.08); }
  `]
})
export class SnagsComponent {
  projects = ['Arboc 23FT', 'Metro X', 'Cargo Lite'];
  vehicles = ['5045-W784', '4098-K221', '3301-Z900'];
  inspectors = ['All inspectors', 'Lena Okafor', 'Jordan Carter', 'Mei Chen'];
  areas = ['UnderCarriage', 'Interior', 'Exterior', 'Roof', 'Function', 'Water', 'Road Test', 'Engine', 'Buybacks', 'Final Walk'];

  filters = {
    project: '',
    vehicle: '',
    inspector: '',
    area: '',
    includeImages: false,
    search: ''
  };

  snags: SnagRow[] = [
    { number: 'SN-1201', project: 'Arboc 23FT', vehicle: '5045-W784', category: 'Electrical', description: 'Interior light flickering intermittently', inspector: 'Lena Okafor', area: 'Interior', safetyCritical: false, repeater: false, hasImages: true },
    { number: 'SN-1202', project: 'Arboc 23FT', vehicle: '5045-W784', category: 'Roof', description: 'Minor leak trace near roof vent', inspector: 'Jordan Carter', area: 'Roof', safetyCritical: true, repeater: true, hasImages: true },
    { number: 'SN-1203', project: 'Metro X', vehicle: '4098-K221', category: 'Engine', description: 'Oil seepage observed at rear main seal area', inspector: 'Mei Chen', area: 'Engine', safetyCritical: true, repeater: false, hasImages: false },
    { number: 'SN-1204', project: 'Cargo Lite', vehicle: '3301-Z900', category: 'Function', description: 'Door sensor occasionally fails to register close state', inspector: 'Jordan Carter', area: 'Function', safetyCritical: false, repeater: true, hasImages: true },
    { number: 'SN-1205', project: 'Metro X', vehicle: '4098-K221', category: 'UnderCarriage', description: 'Surface corrosion on crossmember; needs cleaning and coat', inspector: 'Lena Okafor', area: 'UnderCarriage', safetyCritical: false, repeater: false, hasImages: false }
  ];

  get filteredSnags(): SnagRow[] {
    return this.snags.filter(s => {
      const matchesProject = !this.filters.project || s.project === this.filters.project;
      const matchesVehicle = !this.filters.vehicle || s.vehicle === this.filters.vehicle;
      const matchesInspector = !this.filters.inspector || s.inspector === this.filters.inspector;
      const matchesArea = !this.filters.area || s.area === this.filters.area;
      const matchesImages = !this.filters.includeImages || s.hasImages;
      const search = this.filters.search?.toLowerCase() || '';
      const matchesSearch = !search ||
        s.number.toLowerCase().includes(search) ||
        s.project.toLowerCase().includes(search) ||
        s.vehicle.toLowerCase().includes(search) ||
        s.description.toLowerCase().includes(search);
      return matchesProject && matchesVehicle && matchesInspector && matchesArea && matchesImages && matchesSearch;
    });
  }

  get safetyCriticalCount(): number {
    return this.filteredSnags.filter(s => s.safetyCritical).length;
  }

  get selectedCount(): number {
    return this.filteredSnags.filter(s => s.selected).length;
  }

  get allSelected(): boolean {
    return this.filteredSnags.length > 0 && this.filteredSnags.every(s => s.selected);
  }

  toggleAll(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    this.filteredSnags.forEach(s => s.selected = checked);
  }

  checkAll(): void {
    this.filteredSnags.forEach(s => s.selected = true);
  }

  uncheckAll(): void {
    this.filteredSnags.forEach(s => s.selected = false);
  }

  updateSelection(): void {
    // Trigger change detection for derived getters
    this.snags = [...this.snags];
  }
}
