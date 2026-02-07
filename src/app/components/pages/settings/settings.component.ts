import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SpkSettingsComponent } from '../../../@spk/reusable-pages/spk-settings/spk-settings.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [SharedModule,SpkSettingsComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  cards = [
    {
      icon: 'ti-home',
      title: 'Dashboard',
      description:
        'Dashboard Settings such as sidemenu, header, and main page can be Controlled.',
      switchId: 'switch-md1',
      isChecked: false,
    },
    {
      icon: 'ti-layout-grid2',
      title: 'Web Apps',
      description:
        'Web apps settings such as Apps, Elements, Advanced Ui & Mail can be Controlled.',
      switchId: 'switch-md2',
      isChecked: true,
    },
    {
      icon: 'ti-pencil',
      title: 'General',
      description:
        'General settings such as Icons, Charts, Ecommerce can be Controlled.',
      switchId: 'switch-md3',
      isChecked: true,
    },
    {
      icon: 'ti-flag-alt-2',
      title: 'Language & Region',
      description:
        'In this settings we can change the region and language manually.',
      switchId: 'switch-md4',
      isChecked: false,
    },
    {
      icon: 'ti-bell',
      title: 'Notification',
      description:
        'Notification settings we can control the notification privacy and security.',
      switchId: 'switch-md5',
      isChecked: true,
    },
    {
      icon: 'ti-settings',
      title: 'Blog',
      description:
        'In this settings we can modify all Blog related settings in this template.',
      switchId: 'switch-md6',
      isChecked: false,
    },
    {
      icon: 'ti-lock',
      title: 'Privacy & Security',
      description: 'In this we can control the privacy related settings.',
      switchId: 'switch-md7',
      isChecked: false,
    },
    {
      icon: 'ti-info-alt',
      title: 'Help & Support',
      description: 'In this we can know about how to change settings.',
      switchId: 'switch-md8',
      isChecked: true,
    },
  ];
}
