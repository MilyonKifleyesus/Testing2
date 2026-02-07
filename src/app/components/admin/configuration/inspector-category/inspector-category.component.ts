import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inspector-category',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="main-container container-fluid px-0">
      <div class="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <div>
          <h1 class="page-title fw-semibold fs-20 mb-0">Inspector Category</h1>
          <p class="mb-0 text-muted fs-13">Manage inspector categories</p>
        </div>
      </div>
      <div class="card custom-card">
        <div class="card-body">
          <p>Inspector Category configuration coming soon...</p>
        </div>
      </div>
    </div>
  `
})
export class InspectorCategoryComponent {}
