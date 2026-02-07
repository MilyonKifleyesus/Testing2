import { Routes } from '@angular/router';
import { roleGuard } from '../../shared/guards/auth.guard';

// Client Routes
export const clientRoutingModule: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    canActivate: [roleGuard],
    data: { roles: ['client', 'user'] },
    loadComponent: () => import('./dashboard/index').then(m => m.ClientDashboardComponent)
  },
  // ========== ASSETS ==========
  {
    path: 'assets',
    canActivate: [roleGuard],
    data: { roles: ['client', 'user'] },
    loadComponent: () => import('../../shared/features/tickets/tickets.component').then(m => m.TicketsComponent)
  },
  // ========== TICKETS ==========
  {
    path: 'tickets',
    canActivate: [roleGuard],
    data: { roles: ['client', 'user'] },
    loadComponent: () => import('../../shared/features/tickets/tickets.component').then(m => m.TicketsComponent)
  },
  // ========== SNAGS ==========
  {
    path: 'snags',
    canActivate: [roleGuard],
    data: { roles: ['client', 'user'] },
    loadComponent: () => import('../../shared/features/snags/snags.component').then(m => m.SnagsComponent)
  },
  // ========== PROJECTS ==========
  {
    path: 'projects',
    canActivate: [roleGuard],
    data: { roles: ['client', 'user'] },
    children: [
      {
        path: 'list',
        loadComponent: () => import('../../shared/features/projects/project-list.component').then(m => m.ProjectListComponent)
      },
      {
        path: 'final-vehicle',
        loadComponent: () => import('../../shared/features/projects/project-list.component').then(m => m.ProjectListComponent)
      }
    ]
  },
  // ========== STATIONS ==========
  {
    path: 'stations',
    canActivate: [roleGuard],
    data: { roles: ['client', 'user'] },
    children: [
      {
        path: 'list',
        loadComponent: () => import('../../shared/features/tickets/tickets.component').then(m => m.TicketsComponent)
      },
      {
        path: 'tracker',
        loadComponent: () => import('../../shared/features/tickets/tickets.component').then(m => m.TicketsComponent)
      }
    ]
  },
  // ========== VEHICLES ==========
  {
    path: 'vehicles',
    canActivate: [roleGuard],
    data: { roles: ['client', 'user'] },
    children: [
      {
        path: 'list',
        loadComponent: () => import('../../shared/features/vehicles/vehicle-list.component').then(m => m.VehicleListComponent)
      },
      {
        path: 'propulsion',
        loadComponent: () => import('../../shared/features/vehicles/vehicle-list.component').then(m => m.VehicleListComponent)
      },
      {
        path: 'mileage',
        loadComponent: () => import('../../shared/features/vehicles/vehicle-list.component').then(m => m.VehicleListComponent)
      }
    ]
  },
  // ========== REPORTS ROUTES (Using Shared Components) ==========
  {
    path: 'reports',
    canActivate: [roleGuard],
    data: { roles: ['client', 'user'] },
    children: [
      {
        path: '',
        loadComponent: () => import('../../shared/reports/reports.component').then(m => m.ReportsComponent)
      },
      {
        path: 'ticket-reports/daily',
        loadComponent: () => import('../../shared/reports/ticket-reports/ticket-reports.component').then(m => m.TicketReportsComponent)
      },
      {
        path: 'ticket-reports/weekly',
        loadComponent: () => import('../../shared/reports/ticket-reports/ticket-reports.component').then(m => m.TicketReportsComponent)
      },
      {
        path: 'ticket-reports',
        redirectTo: 'ticket-reports/daily',
        pathMatch: 'full'
      },
      {
        path: 'vehicle-reports',
        loadComponent: () => import('../../shared/reports/vehicle-reports/vehicle-reports.component').then(m => m.VehicleReportsComponent)
      },
      {
        path: 'vehicle-reports/ticket-report',
        loadComponent: () => import('../../shared/reports/vehicle-ticket-report/vehicle-ticket-report.component').then(m => m.VehicleTicketReportComponent)
      },
      {
        path: 'vehicle-reports/station-tracker',
        loadComponent: () => import('../../shared/reports/vehicle-station-tracker/vehicle-station-tracker.component').then(m => m.VehicleStationTrackerComponent)
      },
      {
        path: 'vehicle-reports/final-reports',
        loadComponent: () => import('../../shared/reports/vehicle-final-reports/vehicle-final-reports.component').then(m => m.VehicleFinalReportsComponent)
      }
    ]
  }
];
