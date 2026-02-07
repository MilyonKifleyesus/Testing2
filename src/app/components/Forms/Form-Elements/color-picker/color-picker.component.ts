import { colorpickerTS } from './../../../../shared/components/prismData/color-pickers';
import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { MaterialModuleModule } from '../../../../material-module/material-module.module';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxColorsModule, validColorValidator } from 'ngx-colors';
import * as prismCodeData from '../../../../shared/prismData/color-picker';
import { ShowcodeCardComponent } from '../../../../shared/components/showcode-card/showcode-card.component';

@Component({
  selector: 'app-color-picker',
  standalone: true,
  imports: [SharedModule,MaterialModuleModule,FormsModule,ReactiveFormsModule,NgxColorsModule,ShowcodeCardComponent],
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.scss'
})
export class ColorPickerComponent {
  prismCode = prismCodeData;
  constructor() {}
  
  public color1 = `#a68e5e`;

  public exampleForm: FormGroup = new FormGroup(
    {
      inputCtrl: new FormControl("rgb(79, 195, 255)", validColorValidator()),
      pickerCtrl: new FormControl("rgb(79, 195, 255)"),
    },
    { updateOn: "change" }
  );

  ngOnInit(): void {
    this.exampleForm.controls["inputCtrl"].valueChanges.subscribe((color) => {
      if (this.exampleForm.controls["pickerCtrl"].valid) {
        this.exampleForm.controls["pickerCtrl"].setValue(color, {
          emitEvent: false,
        });
      }
    });
    this.exampleForm.controls["pickerCtrl"].valueChanges.subscribe((color) =>
      this.exampleForm.controls["inputCtrl"].setValue(color, {
        emitEvent: false,
      })
    );
  }

 color:string = '#EC407A';
 color2:string = '#EC407B';


}
