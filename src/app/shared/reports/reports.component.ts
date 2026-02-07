import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({ 
  selector: 'app-reports', 
  standalone: true, 
  imports: [CommonModule, RouterModule],
  template: `
    <div class="main-container container-fluid px-0">
      <div class="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb" style="margin-top: 2rem !important;">
        <div>
          <h1 class="page-title fw-semibold fs-20 mb-0">Reports</h1>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a [routerLink]="['/admin/dashboard']">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Reports</li>
          </ol>
        </div>
      </div>
      
      <div class="row">
        <!-- Ticket Reports Card -->
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
          <div class="card custom-card">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <div class="flex-grow-1">
                  <h5 class="mb-1">Ticket Reports</h5>
                  <p class="text-muted mb-0">View daily and weekly ticket reports with filters</p>
                </div>
                <div class="ms-3">
                  <div class="avatar avatar-lg bg-primary-transparent">
                    <i class="ti-clipboard fs-4"></i>
                  </div>
                </div>
              </div>
              <a [routerLink]="['/admin/reports/ticket-reports']" class="btn btn-primary btn-sm w-100">
                <i class="ti-eye me-2"></i>View Reports
              </a>
            </div>
          </div>
        </div>

        <!-- Vehicle Reports Card -->
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
          <div class="card custom-card">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <div class="flex-grow-1">
                  <h5 class="mb-1">Vehicle Reports</h5>
                  <p class="text-muted mb-0">Vehicle tickets, station tracker, and final reports</p>
                </div>
                <div class="ms-3">
                  <div class="avatar avatar-lg bg-success-transparent">
                    <i class="ti-truck fs-4"></i>
                  </div>
                </div>
              </div>
              <a [routerLink]="['/admin/reports/vehicle-reports']" class="btn btn-success btn-sm w-100">
                <i class="ti-eye me-2"></i>View Reports
              </a>
            </div>
          </div>
        </div>

        <!-- More reports coming soon -->
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
          <div class="card custom-card">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <div class="flex-grow-1">
                  <h5 class="mb-1">Inspector Reports</h5>
                  <p class="text-muted mb-0">Coming soon...</p>
                </div>
                <div class="ms-3">
                  <div class="avatar avatar-lg bg-secondary-transparent">
                    <i class="ti-user fs-4"></i>
                  </div>
                </div>
              </div>
              <button class="btn btn-secondary btn-sm w-100" disabled>
                <i class="ti-lock me-2"></i>Coming Soon
              </button>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
          <div class="card custom-card">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <div class="flex-grow-1">
                  <h5 class="mb-1">Analytics Dashboard</h5>
                  <p class="text-muted mb-0">Coming soon...</p>
                </div>
                <div class="ms-3">
                  <div class="avatar avatar-lg bg-secondary-transparent">
                    <i class="ti-bar-chart fs-4"></i>
                  </div>
                </div>
              </div>
              <button class="btn btn-secondary btn-sm w-100" disabled>
                <i class="ti-lock me-2"></i>Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .avatar {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
    }
    
    .card.custom-card {
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      }
    }
    
    .btn {
      transition: all 0.3s ease;
    }
  `]
})
export class ReportsComponent {}
