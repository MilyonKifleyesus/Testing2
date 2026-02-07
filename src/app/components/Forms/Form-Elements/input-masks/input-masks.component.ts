import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { InputMaskModule, createMask } from '@ngneat/input-mask';
import Inputmask from 'inputmask';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
@Component({
  selector: 'app-input-masks',
  standalone: true,
  imports: [SharedModule,InputMaskModule,FormsModule,ReactiveFormsModule,NgxMaskDirective],
  providers: [
    provideNgxMask(),
],
  templateUrl: './input-masks.component.html',
  styleUrl: './input-masks.component.scss'
})
export class InputMasksComponent {
  dateInputMask = createMask<Date>({
    alias: 'datetime',
    inputFormat: 'dd-mm-yyyy',
    parser: (value: string) => {
      const values = value.split('-');
      const year = +values[2];
      const month = +values[1] - 1;
      const date = +values[0];
      return new Date(year, month, date);
    }
  });
  ngOnInit(): void {
    const timeInput:any = document.querySelector('.time-format-1');
    const mask = new Inputmask('99:99:99'); // Mask for hh:mm:ss format
    mask.mask(timeInput);
  }
  toUpperCase(event: any, field: string) {
    
    if (field === 'formattedValue') {
      const value = event.target.value;
      this[field] = value.toUpperCase();
      // this.formattedValue = 'PREFIX-' + this.formattedValue.toUpperCase();
  } else if (field === 'formattedValue1') {
      this.formattedValue1 = this.formattedValue1.toUpperCase();
  } else if (field === 'formattedValue2') {
      this.formattedValue2 = this.formattedValue2.toUpperCase();
  } else if (field === 'formattedValue3') {
      this.formattedValue3 = this.formattedValue3.toUpperCase();
  }
   
  }
  dateInputMask1 = createMask<Date>({
    alias: 'datetime',
    inputFormat: 'mm-dd-yyyy',
    parser: (value: string) => {
      const values = value.split('-');
      const year = +values[2];
      const month = +values[1] - 1;
      const date = +values[0];
      return new Date(year, month, date);
    }
  });
  dateInputMask2 = createMask<Date>({
    alias: 'datetime',
    inputFormat: 'mm-yy',
    parser: (value: string) => {
      const values = value.split('-');
      const year = +values[2];
      const month = +values[1] - 1;
      const date = +values[0];
      return new Date(year, month, date);
    }
  });
  formattedValue: string = 'Prefix -';
  formattedValue1: string = '';
  formattedValue2: string = '';
  formattedValue3: string = '';
  currencyInputMask = createMask({
    alias: 'numeric',
    groupSeparator: ',',
    placeholder: 'Number Here'
  });
  prefix: string = 'Prefix-';

  alphabetsInputMask = createMask({
    // alias: 'alphabetic',
    groupSeparator: ',',
    placeholder: 'Number Here'
  });
  licensePlateInputMask = createMask('[9-]AAA-999');
  phoneInputMask = createMask({ mask: '(9999-99)|(+(99) 9999-99-9999)', keepStatic: true });
  phoneFC = new FormControl('');

  ipAddressMask = createMask({ alias: 'ip' });
  ipAddress = new FormControl('');
  dateFC = new FormControl('');

}
