import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutConfigService {
  private config = {
    DirectionsChangeltr: 'ltr',
    theme: 'light',
    NavigationChange: 'vertical',
  };

  getConfig() {
    return this.config;
  }

  updateLayout(newLayout: any) {
    this.config = newLayout;
  }


}
