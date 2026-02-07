import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone?: string;
  role: string;
  client?: string;
  manufacturer?: string;
  status: 'active' | 'inactive' | 'suspended';
  createdDate: string;
  lastLogin?: string;
  address?: string;
  permissions: string[];
}

@Component({
  selector: 'app-user-view',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  userId: number | null = null;
  user: User | null = null;
  activeTab = 'profile';

  tabs = [
    { key: 'profile', label: 'Profile', icon: 'ti-user' },
    { key: 'permissions', label: 'Permissions', icon: 'ti-shield-check' },
    { key: 'activity', label: 'Activity Log', icon: 'ti-history' }
  ];

  activityLogs = [
    { date: '2026-01-14 10:30 AM', action: 'Logged In', details: 'User logged in from IP 192.168.1.100', type: 'login' },
    { date: '2026-01-14 09:15 AM', action: 'Updated Profile', details: 'Changed phone number', type: 'update' },
    { date: '2026-01-13 03:45 PM', action: 'Viewed Project', details: 'Accessed Project #234', type: 'view' },
    { date: '2026-01-13 02:20 PM', action: 'Created Ticket', details: 'Created ticket #5420-W787', type: 'create' },
    { date: '2026-01-13 11:00 AM', action: 'Logged In', details: 'User logged in from IP 192.168.1.100', type: 'login' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.userId = idParam ? Number(idParam) : null;
    this.loadUserData();
  }

  loadUserData(): void {
    // Sample user data
    this.user = {
      id: this.userId || 923,
      name: 'Shakeeb Ahmed',
      username: 'shakeeb',
      email: 'shakeeb@buspulse.com',
      phone: '+1 (416) 555-0123',
      role: 'Admin',
      client: undefined,
      manufacturer: undefined,
      status: 'active',
      createdDate: '2024-06-15',
      lastLogin: '2026-01-14 10:30 AM',
      address: '123 Main Street, Toronto, ON M5H 2N2',
      permissions: [
        'View Dashboard',
        'Manage Users',
        'Manage Projects',
        'Manage Vehicles',
        'Manage Tickets',
        'Manage Inspections',
        'View Reports',
        'Export Data',
        'System Settings'
      ]
    };
  }

  setTab(tabKey: string): void {
    this.activeTab = tabKey;
  }

  getUserInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  }

  getStatusClass(status: string): string {
    const classes: { [key: string]: string } = {
      'active': 'bg-success',
      'inactive': 'bg-secondary',
      'suspended': 'bg-danger'
    };
    return classes[status] || 'bg-secondary';
  }

  getRoleClass(role: string): string {
    const classes: { [key: string]: string } = {
      'Admin': 'bg-danger-transparent text-danger',
      'Manager': 'bg-warning-transparent text-warning',
      'Inspector': 'bg-info-transparent text-info',
      'Client User': 'bg-primary-transparent text-primary',
      'Viewer': 'bg-secondary-transparent text-secondary'
    };
    return classes[role] || 'bg-secondary-transparent';
  }

  getActivityIcon(type: string): string {
    const icons: { [key: string]: string } = {
      'login': 'ti-login',
      'logout': 'ti-logout',
      'update': 'ti-edit',
      'view': 'ti-eye',
      'create': 'ti-plus',
      'delete': 'ti-trash'
    };
    return icons[type] || 'ti-point';
  }

  getActivityClass(type: string): string {
    const classes: { [key: string]: string } = {
      'login': 'bg-success-transparent text-success',
      'logout': 'bg-secondary-transparent text-secondary',
      'update': 'bg-warning-transparent text-warning',
      'view': 'bg-info-transparent text-info',
      'create': 'bg-primary-transparent text-primary',
      'delete': 'bg-danger-transparent text-danger'
    };
    return classes[type] || 'bg-secondary-transparent';
  }

  editUser(): void {
    // Navigate to edit page or open modal
    console.log('Edit user:', this.userId);
  }

  suspendUser(): void {
    if (confirm('Are you sure you want to suspend this user?')) {
      if (this.user) {
        this.user.status = 'suspended';
      }
    }
  }

  activateUser(): void {
    if (this.user) {
      this.user.status = 'active';
    }
  }

  resetPassword(): void {
    if (confirm('Send password reset email to ' + this.user?.email + '?')) {
      alert('Password reset email sent successfully!');
    }
  }

  deleteUser(): void {
    if (confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
      console.log('Delete user:', this.userId);
      // Navigate back to user list
    }
  }
}
