import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
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
  status: string;
  address?: string;
}

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  userId: number | null = null;
  user: User = {
    id: 0,
    name: '',
    username: '',
    email: '',
    phone: '',
    role: 'Viewer',
    status: 'active',
    address: ''
  };

  roles = ['Admin', 'Manager', 'Inspector', 'Client User', 'Viewer'];
  clients = ['', 'TTC', 'GO Transit', 'MiWay', 'Brampton Transit', 'BoltBus'];
  manufacturers = ['', 'Mercedes-Benz', 'Volvo', 'BYD', 'Hyundai', 'Nova Bus'];
  statuses = ['active', 'inactive', 'suspended'];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.userId = idParam ? Number(idParam) : null;
    if (this.userId) {
      this.loadUserData();
    }
  }

  loadUserData(): void {
    // Load existing user data
    this.user = {
      id: this.userId || 0,
      name: 'Shakeeb Ahmed',
      username: 'shakeeb',
      email: 'shakeeb@buspulse.com',
      phone: '+1 (416) 555-0123',
      role: 'Admin',
      client: '',
      manufacturer: '',
      status: 'active',
      address: '123 Main Street, Toronto, ON M5H 2N2'
    };
  }

  saveUser(): void {
    if (this.validateForm()) {
      console.log('Saving user:', this.user);
      alert('User saved successfully!');
      this.router.navigate(['/admin/users/view', this.userId]);
    }
  }

  validateForm(): boolean {
    if (!this.user.name || !this.user.username || !this.user.email) {
      alert('Please fill in all required fields');
      return false;
    }
    if (!this.isValidEmail(this.user.email)) {
      alert('Please enter a valid email address');
      return false;
    }
    return true;
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  cancel(): void {
    if (confirm('Are you sure you want to cancel? All unsaved changes will be lost.')) {
      this.router.navigate(['/admin/users']);
    }
  }
}
