import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { MaterialModuleModule } from '../../../material-module/material-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {
  StepperOrientation,
  MatStepperModule,
} from '@angular/material/stepper';
import { BreakpointObserver } from '@angular/cdk/layout';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { AsyncPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SpkNgSelectComponent } from '../../../@spk/reusable-plugins/spk-ng-select/spk-ng-select.component';
@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [SharedModule,MaterialModuleModule,FormsModule,ReactiveFormsModule,NgbModule,NgSelectModule,RouterModule,SpkNgSelectComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  active = 1;
  
  constructor(
    private toaster: ToastrService,
    // public _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
   
  }
  public finish() {
    this.toaster.success('Successfully Done!');
  }

  input = 2;

  minus() {
    this.input++;
  }

  plus = () => {
    if (this.input > 0) {
      this.input--;
    }
  };
  _formBuilder!: any;

  stepperOrientation: Observable<StepperOrientation>;

  input1 = 1;

  minus1() {
    this.input1++;
  }
  navigateToTab(tabIndex: number, nav: any): void {
    nav.select(tabIndex); // Programmatically select the tab
  }
  plus1 = () => {
    if (this.input1 > 0) {
      this.input1--;
    }
  };

  ngAfterViewInit() {
    const plusButtons = document.querySelectorAll('.product-quantity-plus');
    const minusButtons = document.querySelectorAll('.product-quantity-minus');
  
    function perfectChart() {
      plusButtons.forEach((plusButton: any) => {
        plusButton.addEventListener('click', () => {
          const parentDiv = plusButton.closest('.quantity');
          const quantityInput = parentDiv.querySelector('.qty');
  
          if (quantityInput) {
            quantityInput.value = String(Number(quantityInput.value) + 1);
          }
        });
      });
  
      minusButtons.forEach((minusButton: any) => {
        minusButton.addEventListener('click', () => {
          const parentDiv = minusButton.closest('.quantity');
          const quantityInput = parentDiv.querySelector('.qty');
  
          if (quantityInput && quantityInput.value > 0) {
            quantityInput.value = String(Number(quantityInput.value) - 1);
          }
        });
      });
    }
  
    perfectChart();
  }
  Country=[
    {label:'USA',value:1},
    {label:'Italy',value:2},
    {label:'Australia',value:3},
    {label:'England',value:4},
    {label:'Spain',value:5},
  ]
  State=[
    {label:'California',value:1},
    {label:'Alaska',value:2},
    {label:'Colorado',value:3},
    {label:'Arizona',value:4},
    {label:'Delaware',value:5},
  ]
}
