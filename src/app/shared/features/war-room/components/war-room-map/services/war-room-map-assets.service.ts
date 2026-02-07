import { Injectable } from '@angular/core';
import { Node as WarRoomNode } from '../../../../../models/war-room.interface';

@Injectable({ providedIn: 'root' })
export class WarRoomMapAssetsService {
  getCompanyDisplayName(node: WarRoomNode): string {
    return node.company || node.name || node.city || 'Company';
  }

  getCompanyDescription(node: WarRoomNode): string {
    const customDescription = node.description?.trim();
    if (customDescription) {
      return customDescription;
    }
    const location = node.country ? `${node.city}, ${node.country}` : node.city;
    const displayName = this.getCompanyDisplayName(node);
    if (!location) {
      return displayName ? `${displayName} location pending.` : 'Location pending.';
    }
    return displayName ? `${displayName} located in ${location}.` : `Located in ${location}.`;
  }

  getTypeLabel(node: WarRoomNode): string {
    const level = node.level || 'factory';
    if (level === 'parent') return 'Hub / Group HQ';
    if (level === 'subsidiary') return 'Subsidiary / Regional Hub';
    return 'Factory / Production Site';
  }

  getTooltipStatusClass(status?: string | null): string {
    if (!status) return '';
    return `status-${status.toLowerCase().replace(/\s+/g, '-')}`;
  }

  getLogoImagePaths(logoSource: string, baseUrl: string): string[] {
    const trimmed = logoSource.trim();
    if (!trimmed) return [];

    if (trimmed.startsWith('data:') || trimmed.startsWith('blob:')) {
      return [trimmed];
    }

    if (
      trimmed.startsWith('http://') ||
      trimmed.startsWith('https://') ||
      trimmed.startsWith('/') ||
      trimmed.startsWith('./') ||
      trimmed.startsWith('../')
    ) {
      return [trimmed];
    }

    return [
      `${baseUrl}/assets/images/${trimmed}`,
      `/assets/images/${trimmed}`,
      `./assets/images/${trimmed}`,
      `assets/images/${trimmed}`,
    ];
  }

  getLogoFallbackPath(): string {
    return '/assets/images/svgs/user.svg';
  }

  getPreferredLogoPath(logoSource: string, baseUrl: string, failures?: Set<string>): string {
    const paths = this.getLogoImagePaths(logoSource, baseUrl);
    const failureSet = failures ?? new Set<string>();
    return paths.find((path) => !failureSet.has(path)) || this.getLogoFallbackPath();
  }

  getNextLogoPath(logoSource: string, baseUrl: string, currentIndex: number, failures?: Set<string>): string {
    const paths = this.getLogoImagePaths(logoSource, baseUrl);
    const failureSet = failures ?? new Set<string>();
    for (let i = currentIndex + 1; i < paths.length; i += 1) {
      if (!failureSet.has(paths[i])) {
        return paths[i];
      }
    }
    return this.getLogoFallbackPath();
  }
}
