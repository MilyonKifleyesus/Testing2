import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-settings',
  imports: [],
  templateUrl: './spk-settings.component.html',
  styleUrl: './spk-settings.component.scss'
})
export class SpkSettingsComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() switchId: string = '';
  @Input() isChecked: boolean = false;
}
