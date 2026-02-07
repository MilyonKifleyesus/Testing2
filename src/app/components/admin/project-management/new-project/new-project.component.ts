import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-new-project',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {
  projectForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.projectForm = this.formBuilder.group({
      projectName: ['', Validators.required],
      client: ['', Validators.required],
      assessmentType: ['', Validators.required],
      location: ['', Validators.required],
      manufacturer: ['', Validators.required],
      description: ['']
    });
  }

  get f() {
    return this.projectForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.projectForm.invalid) {
      return;
    }

    // TODO: Save project to API
    console.log('Project Data:', this.projectForm.value);
    
    // Navigate back to project list
    this.router.navigate(['/admin/projects/list']);
  }

  onCancel(): void {
    this.router.navigate(['/admin/projects/list']);
  }
}
