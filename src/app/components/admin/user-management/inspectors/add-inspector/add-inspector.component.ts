import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

interface Inspector {
  fullName: string;
  shortName: string;
  email: string;
  phone: string;
  location: string;
  badgeId: string;
  yearsExperience: number;
  specialization: string;
  notes: string;
  primaryClient: string;
  serviceArea: string;
  shiftPreference: string;
  maxInspectionsPerDay: number;
  status: string;
  role: string;
  allowOvertime: boolean;
  sendNotifications: boolean;
}

@Component({
  selector: 'app-add-inspector',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './add-inspector.component.html',
  styleUrls: ['./add-inspector.component.scss']
})
export class AddInspectorComponent {
  
  inspector: Inspector = {
    fullName: '',
    shortName: '',
    email: '',
    phone: '',
    location: '',
    badgeId: '',
    yearsExperience: 0,
    specialization: '',
    notes: '',
    primaryClient: '',
    serviceArea: '',
    shiftPreference: '',
    maxInspectionsPerDay: 8,
    status: 'active',
    role: 'Inspector',
    allowOvertime: false,
    sendNotifications: true
  };

  selectedCertifications: string[] = [];

  constructor(private router: Router) {}

  saveInspector() {
    // Validate required fields
    if (!this.inspector.fullName || !this.inspector.shortName || !this.inspector.email || !this.inspector.location) {
      alert('Please fill in all required fields (marked with *)');
      return;
    }

    // Here you would typically call a service to save the inspector
    console.log('Inspector Data:', {
      ...this.inspector,
      certifications: this.selectedCertifications
    });

    alert('Inspector saved successfully!');
    this.router.navigate(['/admin/users/inspectors']);
  }

  goBack() {
    this.router.navigate(['/admin/users/inspectors']);
  }
}
