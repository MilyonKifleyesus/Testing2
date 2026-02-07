import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { Options } from '@angular-slider/ngx-slider';
import * as prismCodeData from '../../../../shared/prismData/range-slider';
import { ShowcodeCardComponent } from '../../../../shared/components/showcode-card/showcode-card.component';

interface SimpleSliderModel {
  value: number;
  options: Options;
}
interface SimpleSliderModel {
  value5: number;
  options6: Options;
}
interface RangeSliderModel {
  minValue: number;
  maxValue: number;
  options: Options;
}
@Component({
  selector: 'app-range-slider',
  standalone: true,
  imports: [SharedModule, NgxSliderModule,NouisliderModule,FormsModule,ReactiveFormsModule,ShowcodeCardComponent],
  templateUrl: './range-slider.component.html',
  styleUrl: './range-slider.component.scss'
})
export class RangeSliderComponent {
  prismCode = prismCodeData;
  public someRange: number[] = [0, 7];
  public someRange1: number[] = [3, 7];
  public someRange2: number[] = [4];
  public someRange3: number[] = [3];
  public someRange4: number[] = [4, 8];
  public someRange5: number[] = [4, 8];
  public someRange6: number[] = [4, 7];
  public someMin: number = -10;
  public someValue: number = 5;
  public someMax: number = 10;
  public someStep: number = 1;
  public form1: FormGroup | any;
  public form2: FormGroup | any;
  public form3: FormGroup | any;

  value2 = 100;
  value3 = 20;
  value4 = 60;

  value7 = 50;
  value8 = 50;
  value9 = 20;
  value10 = 40;
  value11 = 60;
  value12 = 50;
  value13 = 50;
  value14 = 50;
  minValue = 10;
  maxValue = 90;
  minValue1 = 10;
  maxValue1 = 90;
  minValue2 = 10;
  maxValue2 = 90;
  minValue3 = 15;
  maxValue3 = 85;
  minValue4 = 15;
  maxValue4 = 85;

  red = 0;
  green = 0;
  blue = 0;

  updateColor(): void {
    // No changes required for this method
  }

  getColor(): string {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }

  @ViewChild('result') resultElement!: ElementRef;
  @ViewChild('slider1') slider1!: ElementRef;
  @ViewChild('slider2') slider2!: ElementRef;
  @ViewChild('slider3') slider3!: ElementRef;

  ngOnInit() {

  }

  sliderControl: FormControl = new FormControl(100);
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 0,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#5a66f1',
      to: '#5a66f1',
    },
  };
  value6 = 6;
  options1: Options = {
    floor: 0,
    ceil: 12,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#5a66f1',
      to: '#5a66f1',
    },
    getSelectionBarColor: (value: any): string => {
      if (value <= 3) {
        return 'red';
      }
      if (value <= 6) {
        return 'orange';
      }
      if (value <= 9) {
        return 'yellow';
      }
      return '#2AE02A';
    },
  };



  options3: Options = {
    floor: 0,
    ceil: 100,
    showTicksValues: true,
    tickStep: 10,
    tickValueStep: 10,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#5a66f1',
      to: '#5a66f1',
    },
  };
  options4: Options = {
    floor: 0,
    ceil: 100,
    showTicksValues: true,
    ticksArray: [25, 50],
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#5a66f1',
      to: '#5a66f1',
    },
  };
  minValue5 = 15;
  maxValue5 = 85;
  value1: number = 6;
    options5: Options = {
      floor: 0,
      ceil: 12,
      showSelectionBar: true,
      getSelectionBarColor: (value: number): string => {
        if (value <= 3) {
          return 'red';
        }
        if (value <= 6) {
          return 'orange';
        }
        if (value <= 9) {
          return 'yellow';
        }
        return '#2AE02A';
      },
    };
  minValue6 = 15;
  maxValue6 = 85;
  options6: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#60a5fa',
      to: '#60a5fa',
    },
  };
  minValue7 = 15;
  maxValue7 = 85;
  options7: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#eab308',
      to: '#eab308',
    },
  };
  minValue8 = 15;
  maxValue8 = 85;
  options8: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#4c75cf',
      to: '#4c75cf',
    },
  };
  minValue9 = 15;
  maxValue9 = 85;
  options9: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#22c55e',
      to: '#22c55e',
    },
  };
  minValue10 = 15;
  maxValue10 = 85;
  options10: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#f43f5e',
      to: '#f43f5e',
    },
  };
  minValue17 = 20;
  maxValue17 = 60;
  options17: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#db555d',
      to: '#db555d',
    },
  };
  minValue12 = 20;
  maxValue12 = 60;
  options12: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#f1388b',
      to: '#f1388b',
    },
  };
  minValue13 = 20;
  maxValue13 = 60;
  options13: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#ff9b21',
      to: '#ff9b21',
    },
  };
  minValue14 = 20;
  maxValue14 = 60;
  options14: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#01b8ff',
      to: '#01b8ff',
    },
  };
  minValue15 = 20;
  maxValue15 = 60;
  options15: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#19b159',
      to: '#19b159',
    },
  };
  minValue16 = 20;
  maxValue16 = 60;
  options16: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#fd6074',
      to: '#fd6074',
    },
  };
  verticalSlider1: SimpleSliderModel = {
    value5: 5,
    options6: {
      floor: 0,
      ceil: 5,
      vertical: true,
    },
    value: 0,
    options: new Options
  };

  disabled = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 20;

  public someKeyboard: number[] = [3];
  public someKeyboardConfig: any = {
    behaviour: 'drag',
    connect: true,
    start: [0, 5],
    keyboard: true,
    step: 0.1,
    pageSteps: 10, // number of page steps, defaults to 10
    range: {
      min: 0,
      max: 5,
    },
    pips: {
      mode: 'count',
      density: 2,
      values: 6,
      stepped: true,
    },
  };

  public keyupLabelOn: boolean = false;
  public keydownLabelOn: boolean = false;
  blinkKeyupLabel() {
    this.keyupLabelOn = true;
    setTimeout(() => {
      this.keyupLabelOn = false;
    }, 450);
  }

  blinkKeydownLabel() {
    this.keydownLabelOn = true;
    setTimeout(() => {
      this.keydownLabelOn = false;
    }, 450);
  }
  minValue11 = 15;
  options11: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#6259ca',
      to: '#6259ca',
    },
  };

  public someKeyboard2: number[] = [1, 3];
  public someKeyboardConfig2: any = {
    behaviour: 'drag',
    connect: true,
    start: [0, 5],
    step: 0.1,
    range: {
      min: 0,
      max: 5,
    },
    pips: {
      mode: 'count',
      density: 2,
      values: 6,
      stepped: true,
    },
    keyboard: true,
  };
  onChange(value: any) {
    // console.log('Value changed to', value);
  }
  
}
