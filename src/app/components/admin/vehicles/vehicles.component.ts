import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({ 
  selector: 'app-vehicles', 
  standalone: true, 
  imports: [],
  template: ``
})
export class VehiclesComponent implements OnInit {
  constructor(private router: Router) {}
  
  ngOnInit() {
    // Redirect to vehicle list
    this.router.navigate(['/admin/vehicles/list']);
  }
}
