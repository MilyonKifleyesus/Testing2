import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

interface Inspector {
  id?: number;
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
  rating: number;
  busesInspected: number;
  busesAssigned: number;
  tests: { road: number; water: number };
  snags: { total: number; byArea: string; safetyCritical: number };
  avatarBg?: string;
}

@Component({
  selector: 'app-inspector-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './inspector-profile.component.html',
  styleUrls: ['./inspector-profile.component.scss']
})
export class InspectorProfileComponent implements OnInit {
  
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
    sendNotifications: true,
    rating: 0,
    busesInspected: 0,
    busesAssigned: 0,
    tests: { road: 0, water: 0 },
    snags: { total: 0, byArea: '', safetyCritical: 0 }
  };

  editMode = false;
  avatarBg = 'linear-gradient(135deg, #5b8def 0%, #0049b7 100%)';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Get inspector ID from route params and load inspector data
    this.route.params.subscribe(params => {
      const inspectorId = params['id'];
      if (inspectorId) {
        this.loadInspectorData(inspectorId);
      }
    });
  }

  loadInspectorData(id?: string) {
    // Mock inspector data - in a real app, this would come from a service based on ID
    const inspectorDataMap: { [key: string]: Inspector } = {
      'inspector-001': {
        id: 1,
        fullName: 'Jordan Carter',
        shortName: 'J. Carter',
        email: 'jordan@example.com',
        phone: '+1 (206) 555-0123',
        location: 'Seattle, WA',
        badgeId: 'JC-2024-001',
        yearsExperience: 8,
        specialization: 'Engine',
        notes: 'Experienced inspector with focus on engine and powertrain systems. Excellent track record with minimal repeated defects.',
        primaryClient: 'TTC',
        serviceArea: 'North',
        shiftPreference: 'Morning',
        maxInspectionsPerDay: 8,
        status: 'active',
        role: 'Senior Inspector',
        allowOvertime: true,
        sendNotifications: true,
        rating: 5,
        busesInspected: 142,
        busesAssigned: 8,
        tests: { road: 118, water: 24 },
        snags: { total: 63, byArea: 'Engine, Suspension, Interior', safetyCritical: 7 },
        avatarBg: 'linear-gradient(135deg, #5b8def 0%, #0049b7 100%)'
      },
      'inspector-002': {
        id: 2,
        fullName: 'Anika Singh',
        shortName: 'A. Singh',
        email: 'anika@example.com',
        phone: '+1 (512) 555-0124',
        location: 'Austin, TX',
        badgeId: 'AS-2024-002',
        yearsExperience: 6,
        specialization: 'Electrical',
        notes: 'Detail-oriented inspector specializing in electrical and safety systems.',
        primaryClient: 'SATCO',
        serviceArea: 'South',
        shiftPreference: 'Afternoon',
        maxInspectionsPerDay: 7,
        status: 'active',
        role: 'Inspector',
        allowOvertime: false,
        sendNotifications: true,
        rating: 4,
        busesInspected: 128,
        busesAssigned: 6,
        tests: { road: 102, water: 26 },
        snags: { total: 54, byArea: 'Body, Electrical, Doors', safetyCritical: 5 },
        avatarBg: 'linear-gradient(135deg, #f97794 0%, #623aa2 100%)'
      },
      'inspector-003': {
        id: 3,
        fullName: 'Mei Chen',
        shortName: 'M. Chen',
        email: 'mei@example.com',
        phone: '+1 (619) 555-0125',
        location: 'San Diego, CA',
        badgeId: 'MC-2024-003',
        yearsExperience: 7,
        specialization: 'HVAC',
        notes: 'Specialized in climate control and heating systems. Known for thorough documentation.',
        primaryClient: 'SDT',
        serviceArea: 'West',
        shiftPreference: 'Morning',
        maxInspectionsPerDay: 7,
        status: 'active',
        role: 'Senior Inspector',
        allowOvertime: true,
        sendNotifications: true,
        rating: 4,
        busesInspected: 116,
        busesAssigned: 7,
        tests: { road: 94, water: 22 },
        snags: { total: 48, byArea: 'HVAC, Brakes, Interior', safetyCritical: 4 },
        avatarBg: 'linear-gradient(135deg, #2af598 0%, #009efd 100%)'
      },
      'inspector-004': {
        id: 4,
        fullName: 'Diego Alvarez',
        shortName: 'D. Alvarez',
        email: 'diego@example.com',
        phone: '+1 (305) 555-0126',
        location: 'Miami, FL',
        badgeId: 'DA-2024-004',
        yearsExperience: 5,
        specialization: 'Brakes',
        notes: 'Focused on braking system safety and compliance.',
        primaryClient: 'Miami Transit',
        serviceArea: 'Southeast',
        shiftPreference: 'Evening',
        maxInspectionsPerDay: 6,
        status: 'active',
        role: 'Inspector',
        allowOvertime: false,
        sendNotifications: true,
        rating: 4,
        busesInspected: 101,
        busesAssigned: 5,
        tests: { road: 81, water: 20 },
        snags: { total: 39, byArea: 'Cooling, Exterior, Seats', safetyCritical: 3 },
        avatarBg: 'linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)'
      },
      'inspector-005': {
        id: 5,
        fullName: 'Lena Okafor',
        shortName: 'L. Okafor',
        email: 'lena@example.com',
        phone: '+1 (312) 555-0127',
        location: 'Chicago, IL',
        badgeId: 'LO-2024-005',
        yearsExperience: 9,
        specialization: 'Safety',
        notes: 'Senior inspector with expertise in safety compliance and audit procedures.',
        primaryClient: 'CTA',
        serviceArea: 'Midwest',
        shiftPreference: 'Morning',
        maxInspectionsPerDay: 8,
        status: 'active',
        role: 'Lead Inspector',
        allowOvertime: true,
        sendNotifications: true,
        rating: 5,
        busesInspected: 95,
        busesAssigned: 4,
        tests: { road: 76, water: 19 },
        snags: { total: 35, byArea: 'Doors, Lighting, Interior', safetyCritical: 2 },
        avatarBg: 'linear-gradient(135deg, #f8cdda 0%, #1d2b64 100%)'
      },
      'inspector-006': {
        id: 6,
        fullName: 'Sanjay Patel',
        shortName: 'S. Patel',
        email: 'sanjay@example.com',
        phone: '+1 (973) 555-0128',
        location: 'Newark, NJ',
        badgeId: 'SP-2024-006',
        yearsExperience: 4,
        specialization: 'Interior',
        notes: 'Focused on interior components and passenger comfort systems.',
        primaryClient: 'NJ Transit',
        serviceArea: 'Northeast',
        shiftPreference: 'Afternoon',
        maxInspectionsPerDay: 6,
        status: 'active',
        role: 'Inspector',
        allowOvertime: false,
        sendNotifications: true,
        rating: 3,
        busesInspected: 88,
        busesAssigned: 5,
        tests: { road: 69, water: 19 },
        snags: { total: 31, byArea: 'Chassis, HVAC, Roof', safetyCritical: 2 },
        avatarBg: 'linear-gradient(135deg, #fad961 0%, #f76b1c 100%)'
      }
    };

    // Load inspector data or use first one if not found
    if (id && inspectorDataMap[id]) {
      this.inspector = inspectorDataMap[id];
      this.avatarBg = this.inspector.avatarBg || 'linear-gradient(135deg, #5b8def 0%, #0049b7 100%)';
    } else if (id) {
      // Fallback to first inspector if ID not found
      const firstInspector = Object.values(inspectorDataMap)[0];
      this.inspector = firstInspector;
      this.avatarBg = firstInspector.avatarBg || 'linear-gradient(135deg, #5b8def 0%, #0049b7 100%)';
    }
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  saveProfile() {
    // In a real app, call service to update inspector
    console.log('Inspector updated:', this.inspector);
    alert('Inspector profile updated successfully!');
    this.editMode = false;
  }

  goBack() {
    this.router.navigate(['/admin/users/inspectors']);
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map((word: string) => word.charAt(0).toUpperCase())
      .join('')
      .substring(0, 2);
  }

  getStars(rating: number): boolean[] {
    return Array.from({ length: 5 }, (_, i) => i < rating);
  }

  getStatusBadgeClass(status: string): string {
    const statusMap: { [key: string]: string } = {
      'active': 'bg-success',
      'inactive': 'bg-secondary',
      'suspended': 'bg-danger'
    };
    return statusMap[status] || 'bg-secondary';
  }
}
