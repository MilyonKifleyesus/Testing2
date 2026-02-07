import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import * as prismCodeData from '../../../../shared/prismData/checks';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShowcodeCardComponent } from '../../../../shared/components/showcode-card/showcode-card.component';
import { ToggleBtnDirective } from '../../../../shared/directives/toggle-btn.directive';

@Component({
  selector: 'app-checks-radios',
  standalone: true,
  imports: [SharedModule,FormsModule,ReactiveFormsModule,CommonModule,ShowcodeCardComponent,ToggleBtnDirective],
  templateUrl: './checks-radios.component.html',
  styleUrl: './checks-radios.component.scss'
})
export class ChecksRadiosComponent {
  prismCode = prismCodeData;

  status1: boolean = true;
  status2: boolean = true;
  status3: boolean = true;
  status4: boolean = true;
  status5: boolean = true;
  status6: boolean = true;
  status7: boolean = true;
  status8: boolean = true;
  status9: boolean = true;
  status10: boolean = true;
  status11: boolean = true;

  clickEvent1() {
    document.querySelector('.toggle-primary')?.classList.toggle('on')
  }
  clickEvent2() {
    document.querySelector('.toggle-secondary')?.classList.toggle('on');
  }
  clickEvent3() {
    document.querySelector('.toggle-warning')?.classList.toggle('on');
  }
  clickEvent4() {
    document.querySelector('.toggle-info ')?.classList.toggle('on');
  }
  clickEvent5() {
    document.querySelector('.toggle-success')?.classList.toggle('on');
  }
  clickEvent6() {
    document.querySelector('.toggle-danger')?.classList.toggle('on');
  }
  clickEvent7() {
    document.querySelector('.toggle-light')?.classList.toggle('on');
  } 
  clickEvent8() {
    document.querySelector('.toggle-2')?.classList.toggle('on');
  } 
 
  clickEvent9() {
    document.querySelector('.toggle-sm')?.classList.toggle('on');
  }
  clickEvent10() {
    document.querySelector('.toggle-1')?.classList.toggle('on');
  }
   clickEvent11() {
     document.querySelector('.toggle-lg')?.classList.toggle('on');
   }
   scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
