import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { NgbModal, NgbModalRef, NgbModule } from '@ng-bootstrap/ng-bootstrap';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  role: string;
  client?: string;
  manufacturer?: string;
  status?: string;
  createdDate?: string;
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, SpkDropdownsComponent, NgbModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  confirmModalRef: NgbModalRef | null = null;
  confirmAction: (() => void) | null = null;
  confirmMessage: string = '';
  confirmTitle: string = '';

  constructor(private modalService: NgbModal) {}
  
  filteredUsers: User[] = [];
  allUsers: User[] = [];
  Math = Math;
  
  // Pagination properties
  pageSize: number = 10;
  currentPage: number = 1;
  totalCount: number = 0;
  
  // Filter properties
  selectedClient: string = 'all';
  selectedManufacturer: string = 'all';
  selectedRole: string = 'all';
  searchTerm: string = '';

  // Filter options
  clients: string[] = ['TTC', 'GO Transit', 'MiWay', 'Brampton Transit'];
  manufacturers: string[] = ['Mercedes-Benz', 'Volvo', 'BYD', 'Hyundai'];
  roles: string[] = ['Admin', 'Client User', 'Inspector', 'Manager', 'Viewer'];

  ngOnInit() {
    this.initializeDemoUsers();
  }

  initializeDemoUsers() {
    this.allUsers = [
      {
        id: 923,
        name: 'Shakeeb',
        username: 'shakeeb',
        email: 'shakeeb@example.com',
        role: 'Admin',
        client: undefined,
        manufacturer: undefined
      },
      {
        id: 924,
        name: 'Fabian',
        username: 'fabian',
        email: 'fabian@example.com',
        role: 'Admin',
        client: undefined,
        manufacturer: undefined
      },
      {
        id: 931,
        name: 'BoltBus Admin',
        username: 'BoltBusAdmin',
        email: 'admin@boltbus.com',
        role: 'Client User',
        client: 'BoltBus',
        manufacturer: undefined
      },
      {
        id: 932,
        name: 'TTC Admin',
        username: 'TTCAdmin',
        email: 'admin@ttc.ca',
        role: 'Client User',
        client: 'TTC',
        manufacturer: undefined
      },
      {
        id: 933,
        name: 'MetroLinx Admin',
        username: 'MetroLinxAdmin',
        email: 'admin@metrolinx.ca',
        role: 'Client User',
        client: 'GO Transit',
        manufacturer: undefined
      },
      {
        id: 934,
        name: 'Rick Baltzer',
        username: 'rick',
        email: 'rick@example.com',
        role: 'Inspector',
        client: undefined,
        manufacturer: undefined
      },
      {
        id: 935,
        name: 'DRT Admin',
        username: 'DRTAdmin',
        email: 'admin@drt.ca',
        role: 'Client User',
        client: 'DIRT',
        manufacturer: 'Mercedes-Benz'
      },
      {
        id: 936,
        name: 'TransLink',
        username: 'translinkladmin',
        email: 'admin@translink.ca',
        role: 'Client User',
        client: 'TransLink',
        manufacturer: 'Volvo'
      },
      {
        id: 937,
        name: 'YRT Client',
        username: 'ytadmin',
        email: 'admin@yrt.ca',
        role: 'Client User',
        client: 'YRT',
        manufacturer: 'BYD'
      },
      {
        id: 938,
        name: 'Jane Smith',
        username: 'jsmith',
        email: 'jane.smith@example.com',
        role: 'Manager',
        client: 'TTC',
        manufacturer: undefined
      },
      {
        id: 939,
        name: 'John Inspector',
        username: 'john.inspector',
        email: 'john@example.com',
        role: 'Inspector',
        client: 'MiWay',
        manufacturer: 'Hyundai'
      },
      {
        id: 940,
        name: 'Sarah Viewer',
        username: 'sviewer',
        email: 'sarah@example.com',
        role: 'Viewer',
        client: 'Brampton Transit',
        manufacturer: undefined
      }
    ];

    this.filterUsers();
  }

  filterUsers() {
    const filtered = this.allUsers.filter(user => {
      const matchesSearch = !this.searchTerm ||
        user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesClient = this.selectedClient === 'all' ||
        (user.client && user.client.toLowerCase() === this.selectedClient);

      const matchesManufacturer = this.selectedManufacturer === 'all' ||
        (user.manufacturer && user.manufacturer.toLowerCase() === this.selectedManufacturer);

      const matchesRole = this.selectedRole === 'all' ||
        user.role.toLowerCase() === this.selectedRole;

      return matchesSearch && matchesClient && matchesManufacturer && matchesRole;
    });

    this.totalCount = filtered.length;
    this.currentPage = 1; // Reset to first page on filter change
    this.loadUsers(filtered);
  }

  loadUsers(users: User[]) {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.filteredUsers = users.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.getTotalPages()) {
      this.currentPage++;
      this.applyPagination();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.applyPagination();
    }
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.getTotalPages()) {
      this.currentPage = page;
      this.applyPagination();
    }
  }

  getTotalPages(): number {
    return Math.ceil(this.totalCount / this.pageSize);
  }

  getPageNumbers(): number[] {
    const totalPages = this.getTotalPages();
    const maxPagesToShow = 5;
    let pages: number[] = [];

    if (totalPages <= maxPagesToShow) {
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      const startPage = Math.max(1, this.currentPage - Math.floor(maxPagesToShow / 2));
      const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
      pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    }

    return pages;
  }

  applyPagination() {
    const filtered = this.allUsers.filter(user => {
      const matchesSearch = !this.searchTerm ||
        user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesClient = this.selectedClient === 'all' ||
        (user.client && user.client.toLowerCase() === this.selectedClient);

      const matchesManufacturer = this.selectedManufacturer === 'all' ||
        (user.manufacturer && user.manufacturer.toLowerCase() === this.selectedManufacturer);

      const matchesRole = this.selectedRole === 'all' ||
        user.role.toLowerCase() === this.selectedRole;

      return matchesSearch && matchesClient && matchesManufacturer && matchesRole;
    });

    this.loadUsers(filtered);
  }

  getUserInitials(name: string): string {
    return name
      .split(' ')
      .map((word: string) => word.charAt(0).toUpperCase())
      .join('')
      .substring(0, 2);
  }

  getRoleClass(role: string): string {
    const roleClassMap: { [key: string]: string } = {
      'admin': 'bg-primary',
      'client user': 'bg-info',
      'inspector': 'bg-warning',
      'manager': 'bg-success',
      'viewer': 'bg-secondary'
    };
    return roleClassMap[role.toLowerCase()] || 'bg-secondary';
  }

  openConfirmModal(message: string, title: string, action: () => void, modalContent: any) {
    this.confirmMessage = message;
    this.confirmTitle = title;
    this.confirmAction = action;
    this.confirmModalRef = this.modalService.open(modalContent, { centered: true });
  }

  confirmModalYes() {
    if (this.confirmAction) {
      this.confirmAction();
    }
    if (this.confirmModalRef) {
      this.confirmModalRef.close();
    }
  }

  confirmModalNo() {
    if (this.confirmModalRef) {
      this.confirmModalRef.dismiss();
    }
  }

  resetPassword(user: User, modalContent: any): void {
    this.openConfirmModal(
      `Send password reset email to ${user.email}?`,
      'Reset Password',
      () => {
        console.log('Reset password for user:', user.id);
        alert('Password reset email sent successfully!');
      },
      modalContent
    );
  }

  deleteUser(user: User, modalContent: any): void {
    this.openConfirmModal(
      `Are you sure you want to delete user "${user.name}"? This action cannot be undone.`,
      'Delete User',
      () => {
        this.allUsers = this.allUsers.filter(u => u.id !== user.id);
        this.filterUsers();
        alert('User deleted successfully!');
      },
      modalContent
    );
  }
}
