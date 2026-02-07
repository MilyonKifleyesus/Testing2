import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

interface Project {
  id: number;
  projectName: string;
  client: string;
  assessmentType: string;
  location: string;
  manufacturer: string;
  totalAssets: number;
  userAccess: string[];
  status: 'Active' | 'Closed';
}

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Mock data - replace with actual API call
    this.projects = [
      {
        id: 1,
        projectName: 'Bus Fleet Inspection 2024',
        client: 'City Transit Authority',
        assessmentType: 'Full Inspection',
        location: 'New York',
        manufacturer: 'Mercedes-Benz',
        totalAssets: 150,
        userAccess: ['inspector1@example.com', 'admin@example.com'],
        status: 'Active'
      },
      {
        id: 2,
        projectName: 'Electric Bus Evaluation',
        client: 'Green Transport Inc',
        assessmentType: 'Technical Assessment',
        location: 'California',
        manufacturer: 'BYD',
        totalAssets: 75,
        userAccess: ['inspector2@example.com', 'client@example.com'],
        status: 'Active'
      },
      {
        id: 3,
        projectName: 'Maintenance Check Q1',
        client: 'Metro Transit',
        assessmentType: 'Routine Maintenance',
        location: 'Chicago',
        manufacturer: 'Volvo',
        totalAssets: 200,
        userAccess: ['inspector1@example.com', 'inspector3@example.com'],
        status: 'Active'
      }
    ];
  }

  viewProjectDetails(projectId: number): void {
    this.router.navigate(['/admin/projects/view', projectId]);
  }

  goToTickets(projectId: number): void {
    this.router.navigate(['/admin/tickets'], { queryParams: { projectId } });
  }

  closeProject(projectId: number): void {
    const project = this.projects.find(p => p.id === projectId);
    if (!project || project.status === 'Closed') return;
    if (confirm('Are you sure you want to close this project?')) {
      project.status = 'Closed';
      console.log('Project closed:', projectId);
    }
  }

  deleteProject(projectId: number): void {
    if (confirm('Are you sure you want to delete this project?')) {
      this.projects = this.projects.filter(p => p.id !== projectId);
    }
  }
}
