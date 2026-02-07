import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({ 
  selector: 'app-vehicle-reports', 
  standalone: true, 
  imports: [CommonModule, RouterModule],
  template: `
    <div class="main-container container-fluid px-0">
      <div class="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb" style="margin-top: 2rem !important;">
        <div>
          <h1 class="page-title fw-semibold fs-20 mb-0">Vehicle Reports</h1>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a [routerLink]="['/admin/dashboard']">Home</a></li>
            <li class="breadcrumb-item"><a [routerLink]="['/admin/reports']">Reports</a></li>
            <li class="breadcrumb-item active" aria-current="page">Vehicle Reports</li>
          </ol>
        </div>
      </div>
      
      <div class="row">
        <!-- Vehicle Ticket Report Card -->
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
          <div class="card custom-card">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <div class="flex-grow-1">
                  <h5 class="mb-1">Vehicle Ticket Report</h5>
                  <p class="text-muted mb-0">View tickets by project and vehicle</p>
                </div>
                <div class="ms-3">
                  <div class="avatar avatar-lg bg-success-transparent">
                    <i class="ti-clipboard fs-4"></i>
                  </div>
                </div>
              </div>
              <a [routerLink]="['/admin/reports/vehicle-reports/ticket-report']" class="btn btn-success btn-sm w-100">
                <i class="ti-eye me-2"></i>View Reports
              </a>
            </div>
          </div>
        </div>

        <!-- Vehicle Station Tracker Card -->
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
          <div class="card custom-card">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <div class="flex-grow-1">
                  <h5 class="mb-1">Vehicle Station Tracker</h5>
                  <p class="text-muted mb-0">Track vehicle movements across stations</p>
                </div>
                <div class="ms-3">
                  <div class="avatar avatar-lg bg-warning-transparent">
                    <i class="ti-location-pin fs-4"></i>
                  </div>
                </div>
              </div>
              <a [routerLink]="['/admin/reports/vehicle-reports/station-tracker']" class="btn btn-warning btn-sm w-100">
                <i class="ti-eye me-2"></i>View Reports
              </a>
            </div>
          </div>
        </div>

        <!-- Vehicle Final Reports Card -->
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
          <div class="card custom-card">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <div class="flex-grow-1">
                  <h5 class="mb-1">Vehicle Final Reports</h5>
                  <p class="text-muted mb-0">Download vehicle health reports</p>
                </div>
                <div class="ms-3">
                  <div class="avatar avatar-lg bg-info-transparent">
                    <i class="ti-files fs-4"></i>
                  </div>
                </div>
              </div>
              <a [routerLink]="['/admin/reports/vehicle-reports/final-reports']" class="btn btn-info btn-sm w-100">
                <i class="ti-eye me-2"></i>View Reports
              </a>
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
export class VehicleReportsComponent {}
