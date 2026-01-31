import { AfterViewInit, Component, ElementRef, ViewChild, computed, effect, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActivityLog,
  ParentGroup,
  SubsidiaryCompany,
  FactoryLocation,
  FleetSelection,
  MapViewMode,
  OperationalStatus,
  NodeStatus,
} from '../../../../../shared/models/war-room.interface';

@Component({
  selector: 'app-war-room-activity-log',
  imports: [CommonModule],
  templateUrl: './war-room-activity-log.component.html',
  styleUrl: './war-room-activity-log.component.scss',
})
export class WarRoomActivityLogComponent implements AfterViewInit {
  parentGroups = input.required<ParentGroup[]>();
  activityLogs = input.required<ActivityLog[]>();
  selectedEntity = input<FleetSelection | null>(null);
  editMode = input<boolean>(false);
  mapViewMode = input<MapViewMode>('parent');

  selectionChange = output<FleetSelection>();
  editModeChange = output<boolean>();
  factoryDetailsUpdated = output<{
    factoryId: string;
    name: string;
    location: string;
    description: string;
    status: NodeStatus;
  }>();
  readonly subsidiaryDetailsUpdated = output<{ subsidiaryId: string; name: string; location: string; description: string; status: OperationalStatus }>();
  readonly batchUpdateRequested = output<{
    factories: Array<{ factoryId: string; name: string; location: string; description: string; status: NodeStatus }>;
    subsidiaries: Array<{ subsidiaryId: string; name: string; location: string; description: string; status: OperationalStatus }>;
  }>();
  subsidiaryDeleted = output<string>();
  factoryDeleted = output<string>();

  @ViewChild('logList', { static: false }) logList?: ElementRef<HTMLElement>;
  private viewReady = false;

  readonly expandedParents = signal<string[]>([]);
  readonly expandedSubsidiaries = signal<string[]>([]);

  // Multi-item draft storage
  readonly factoryDrafts = signal<Map<string, { name: string; location: string; description: string; status: NodeStatus }>>(new Map());
  readonly subsidiaryDrafts = signal<Map<string, { name: string; location: string; description: string; status: OperationalStatus }>>(new Map());

  readonly editingFactoryId = signal<string | null>(null);
  readonly editingSubsidiaryId = signal<string | null>(null);

  readonly latestLogByFactory = computed(() => {
    const logs = this.activityLogs();
    const map = new Map<string, ActivityLog>();

    for (const log of logs) {
      const existing = map.get(log.factoryId);
      if (!existing) {
        map.set(log.factoryId, log);
        continue;
      }
      const existingDate = typeof existing.timestamp === 'string' ? new Date(existing.timestamp) : existing.timestamp;
      const logDate = typeof log.timestamp === 'string' ? new Date(log.timestamp) : log.timestamp;
      if (logDate.getTime() > existingDate.getTime()) {
        map.set(log.factoryId, log);
      }
    }

    return map;
  });

  constructor() {
    effect(() => {
      const groups = this.parentGroups();
      if (groups.length > 0 && this.expandedParents().length === 0) {
        this.expandedParents.set(groups.map((group) => group.id));
      }
    });

    effect(() => {
      const selection = this.selectedEntity();
      if (!selection) return;
      this.ensureExpandedForSelection(selection);
      this.scrollToSelection(selection);
    });
  }

  ngAfterViewInit(): void {
    this.viewReady = true;
    const selection = this.selectedEntity();
    if (selection) {
      this.scrollToSelection(selection);
    }
  }

  formatTimestamp(timestamp: Date | string): string {
    const date = typeof timestamp === 'string' ? new Date(timestamp) : timestamp;
    if (Number.isNaN(date.getTime())) {
      return '';
    }
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  isSelected(level: FleetSelection['level'], id: string): boolean {
    const selection = this.selectedEntity();
    return !!selection && selection.level === level && selection.id === id;
  }

  isParentExpanded(parentId: string): boolean {
    return this.expandedParents().includes(parentId);
  }

  isSubsidiaryExpanded(subsidiaryId: string): boolean {
    return this.expandedSubsidiaries().includes(subsidiaryId);
  }

  toggleParent(parentId: string): void {
    this.expandedParents.update((current) =>
      current.includes(parentId) ? current.filter((id) => id !== parentId) : [...current, parentId]
    );
  }

  toggleSubsidiary(subsidiaryId: string): void {
    this.expandedSubsidiaries.update((current) =>
      current.includes(subsidiaryId)
        ? current.filter((id) => id !== subsidiaryId)
        : [...current, subsidiaryId]
    );
  }

  onParentClick(group: ParentGroup): void {
    this.selectionChange.emit({ level: 'parent', id: group.id, parentGroupId: group.id });
  }

  onSubsidiaryClick(subsidiary: SubsidiaryCompany): void {
    if (this.mapViewMode() !== 'subsidiary') {
      return;
    }
    this.selectionChange.emit({
      level: 'subsidiary',
      id: subsidiary.id,
      parentGroupId: subsidiary.parentGroupId,
      subsidiaryId: subsidiary.id,
    });
  }

  onFactoryClick(factory: FactoryLocation): void {
    this.selectionChange.emit({
      level: 'factory',
      id: factory.id,
      parentGroupId: factory.parentGroupId,
      subsidiaryId: factory.subsidiaryId,
      factoryId: factory.id,
    });
  }

  toggleEditMode(): void {
    this.editModeChange.emit(!this.editMode());
    this.cancelEditFactory();
    this.cancelEditSubsidiary();
  }

  isEditingFactory(factoryId: string): boolean {
    return this.editingFactoryId() === factoryId;
  }

  isEditingSubsidiary(subsidiaryId: string): boolean {
    return this.editingSubsidiaryId() === subsidiaryId;
  }

  startEditFactory(factory: FactoryLocation): void {
    const latestLog = this.getLatestLog(factory.id);
    this.editingFactoryId.set(factory.id);

    // Initialize draft if not exists
    if (!this.factoryDrafts().has(factory.id)) {
      this.updateFactoryDraft(factory.id, {
        name: factory.name,
        location: [factory.city, factory.country].filter(Boolean).join(', '),
        description: latestLog?.description || factory.description || '',
        status: factory.status
      });
    }
  }

  startEditSubsidiary(subsidiary: SubsidiaryCompany): void {
    this.editingSubsidiaryId.set(subsidiary.id);

    // Initialize draft if not exists
    if (!this.subsidiaryDrafts().has(subsidiary.id)) {
      this.updateSubsidiaryDraft(subsidiary.id, {
        name: subsidiary.name,
        location: subsidiary.location || this.getSubsidiaryLocation(subsidiary),
        description: subsidiary.description || '',
        status: subsidiary.status
      });
    }
  }

  private updateFactoryDraft(id: string, updates: Partial<{ name: string; location: string; description: string; status: NodeStatus }>): void {
    const drafts = new Map(this.factoryDrafts());
    const existing = drafts.get(id) || { name: '', location: '', description: '', status: 'ACTIVE' };
    drafts.set(id, { ...existing, ...updates });
    this.factoryDrafts.set(drafts);
  }

  private updateSubsidiaryDraft(id: string, updates: Partial<{ name: string; location: string; description: string; status: OperationalStatus }>): void {
    const drafts = new Map(this.subsidiaryDrafts());
    const existing = drafts.get(id) || { name: '', location: '', description: '', status: 'ACTIVE' };
    drafts.set(id, { ...existing, ...updates });
    this.subsidiaryDrafts.set(drafts);
  }

  onNameInput(event: Event, factoryId: string): void {
    const target = event.target as HTMLInputElement | null;
    this.updateFactoryDraft(factoryId, { name: target?.value ?? '' });
  }

  onLocationInput(event: Event, factoryId: string): void {
    const target = event.target as HTMLInputElement | null;
    this.updateFactoryDraft(factoryId, { location: target?.value ?? '' });
  }

  onSubsidiaryNameInput(event: Event, subsidiaryId: string): void {
    const target = event.target as HTMLInputElement | null;
    this.updateSubsidiaryDraft(subsidiaryId, { name: target?.value ?? '' });
  }

  onSubsidiaryLocationInput(event: Event, subsidiaryId: string): void {
    const target = event.target as HTMLInputElement | null;
    this.updateSubsidiaryDraft(subsidiaryId, { location: target?.value ?? '' });
  }

  onSubsidiaryDescriptionInput(event: Event, subsidiaryId: string): void {
    const target = event.target as HTMLTextAreaElement | null;
    this.updateSubsidiaryDraft(subsidiaryId, { description: target?.value ?? '' });
  }

  onFactoryStatusChange(event: Event, factoryId: string): void {
    const target = event.target as HTMLSelectElement | null;
    const value = target?.value as NodeStatus | undefined;
    if (value) {
      this.updateFactoryDraft(factoryId, { status: value });
    }
  }

  onSubsidiaryStatusChange(event: Event, subsidiaryId: string): void {
    const target = event.target as HTMLSelectElement | null;
    const value = target?.value as OperationalStatus | undefined;
    if (value) {
      this.updateSubsidiaryDraft(subsidiaryId, { status: value });
    }
  }

  onDescriptionInput(event: Event, factoryId: string): void {
    const target = event.target as HTMLTextAreaElement | null;
    this.updateFactoryDraft(factoryId, { description: target?.value ?? '' });
  }

  saveFactoryDetails(factoryId: string): void {
    const draft = this.factoryDrafts().get(factoryId);
    if (!draft || !draft.name.trim()) {
      return;
    }

    this.factoryDetailsUpdated.emit({
      factoryId,
      name: draft.name.trim(),
      location: draft.location.trim(),
      description: draft.description.trim(),
      status: draft.status
    });

    this.removeFromDrafts('factory', factoryId);
    this.editingFactoryId.set(null);
  }

  saveSubsidiaryDetails(subsidiaryId: string): void {
    const draft = this.subsidiaryDrafts().get(subsidiaryId);
    if (!draft || !draft.name.trim()) {
      return;
    }

    this.subsidiaryDetailsUpdated.emit({
      subsidiaryId,
      name: draft.name.trim(),
      location: draft.location.trim(),
      description: draft.description.trim(),
      status: draft.status
    });

    this.removeFromDrafts('subsidiary', subsidiaryId);
    this.editingSubsidiaryId.set(null);
  }

  cancelEditFactory(): void {
    if (this.editingFactoryId()) {
      this.removeFromDrafts('factory', this.editingFactoryId()!);
      this.editingFactoryId.set(null);
    }
  }

  cancelEditSubsidiary(): void {
    if (this.editingSubsidiaryId()) {
      this.removeFromDrafts('subsidiary', this.editingSubsidiaryId()!);
      this.editingSubsidiaryId.set(null);
    }
  }

  saveAllDrafts(): void {
    const factoryUpdates = Array.from(this.factoryDrafts().entries())
      .filter(([_, draft]) => draft.name.trim().length > 0)
      .map(([id, draft]) => ({ factoryId: id, ...draft }));

    const subsidiaryUpdates = Array.from(this.subsidiaryDrafts().entries())
      .filter(([_, draft]) => draft.name.trim().length > 0)
      .map(([id, draft]) => ({ subsidiaryId: id, ...draft }));

    if (factoryUpdates.length === 0 && subsidiaryUpdates.length === 0) {
      this.clearAllDrafts();
      return;
    }

    // We emit the batch updates. The parent component will handle the persistence.
    // To satisfy the requirement of preserving drafts on failure, we don't clear them here anymore.
    // Instead, we added a clearDrafts() method for the parent to call.
    this.batchUpdateRequested.emit({ factories: factoryUpdates, subsidiaries: subsidiaryUpdates });
  }

  clearAllDrafts(): void {
    this.factoryDrafts.set(new Map());
    this.subsidiaryDrafts.set(new Map());
    this.editingFactoryId.set(null);
    this.editingSubsidiaryId.set(null);
  }

  private removeFromDrafts(type: 'factory' | 'subsidiary', id: string): void {
    if (type === 'factory') {
      const drafts = new Map(this.factoryDrafts());
      drafts.delete(id);
      this.factoryDrafts.set(drafts);
    } else {
      const drafts = new Map(this.subsidiaryDrafts());
      drafts.delete(id);
      this.subsidiaryDrafts.set(drafts);
    }
  }

  requestDeleteSubsidiary(subsidiaryId: string): void {
    this.subsidiaryDeleted.emit(subsidiaryId);
  }

  requestDeleteFactory(factoryId: string): void {
    this.factoryDeleted.emit(factoryId);
  }

  getLatestLog(factoryId: string): ActivityLog | null {
    return this.latestLogByFactory().get(factoryId) || null;
  }

  getSubsidiaryLocation(subsidiary: SubsidiaryCompany): string {
    const factory = subsidiary.factories[0];
    if (!factory) return '';
    return this.formatLocation(factory.city, factory.country);
  }

  formatLocation(city: string, country?: string): string {
    if (!city && !country) return 'Unknown';
    if (!city) return country || 'Unknown';
    return country ? `${city}, ${country}` : city;
  }

  getStatusClass(status: string): string {
    const normalized = status.trim().toUpperCase();
    if (normalized === 'ACTIVE' || normalized === 'ONLINE') return 'status-active';
    if (normalized === 'WARNING' || normalized === 'MAINTENANCE') return 'status-warning';
    if (normalized === 'PAUSED' || normalized === 'OFFLINE' || normalized === 'INACTIVE') return 'status-paused';
    return 'status-info';
  }

  formatStatusLabel(status: string): string {
    const normalized = status.trim().toUpperCase();
    if (normalized === 'ACTIVE' || normalized === 'ONLINE' || normalized === 'OPTIMAL') {
      return 'ACTIVE';
    }
    return 'INACTIVE';
  }

  private ensureExpandedForSelection(selection: FleetSelection): void {
    if (selection.parentGroupId) {
      this.expandedParents.update((current) =>
        current.includes(selection.parentGroupId!) ? current : [...current, selection.parentGroupId!]
      );
    }

    if (selection.subsidiaryId) {
      this.expandedSubsidiaries.update((current) =>
        current.includes(selection.subsidiaryId!) ? current : [...current, selection.subsidiaryId!]
      );
    }
  }

  private scrollToSelection(selection: FleetSelection): void {
    if (!this.viewReady) return;
    const container = this.logList?.nativeElement;
    if (!container) return;

    const entry = container.querySelector(`[data-entity-id="${selection.level}:${selection.id}"]`) as HTMLElement | null;
    if (!entry) return;

    requestAnimationFrame(() => {
      const containerRect = container.getBoundingClientRect();
      const entryRect = entry.getBoundingClientRect();
      const currentScrollTop = container.scrollTop;
      const entryOffsetTop = entryRect.top - containerRect.top + currentScrollTop;
      const targetScrollTop = entryOffsetTop - container.clientHeight / 2 + entry.clientHeight / 2;
      container.scrollTo({ top: Math.max(0, targetScrollTop), behavior: 'smooth' });
    });
  }
}
