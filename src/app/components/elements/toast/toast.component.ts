import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ToastService } from './toast.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as prismcodeData from '../../../shared/prismData/toast';
import * as reuseCode from '../../../shared/prismData/toast';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
import { SpkToastComponent } from '../../../@spk/reusable-ui-elements/spk-toast/spk-toast.component';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [SharedModule,ToastrModule,NgbModule,ShowcodeCardComponent,SpkToastComponent],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  prismCode = prismcodeData;
  reusableCode: any = reuseCode;

  show = true;
  show1 = true;
  showContent = true;
  show2 = true;
  show3 = true;
  show4 = true;
  show5 = true;
  show6 = true;
  show7 = true;
  show8 = true;
  show9 = true;
  show10 = true;
  show11 = true;
  show12 = true;
  show13 = true;
  show14 = true;
  show15 = true;
  show16 = true;
  isclose = true;

  public isCollapsed = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;
  public isCollapsed4 = true;
  public isCollapsed5 = true;
  public isCollapsed6 = true;
  public isCollapsed7 = true;
  preventClose(event: any): void {
    event.stopPropagation();
  }
   @ViewChild('toastContainer') toastContainer!: ElementRef;

  show0 = false;
  autohide = true;

  constructor(
  ) {}

  ngOnInit(): void {}

  toasts: { autohide: boolean }[] = [];
  toasts1: { autohide: boolean }[] = [];
  toasts2: { autohide: boolean }[] = [];
  toasts3: { autohide: boolean }[] = [];
  toasts4: { autohide: boolean }[] = [];
  toasts5: { autohide: boolean }[] = [];
  toasts6: { autohide: boolean }[] = [];
  toastsA: { autohide: boolean }[] = [];
  toastsB: { autohide: boolean }[] = [];
  toastsC: { autohide: boolean }[] = [];
  toastsD: { autohide: boolean }[] = [];
  toastsE: { autohide: boolean }[] = [];
  toastsF: { autohide: boolean }[] = [];
  toastsG: { autohide: boolean }[] = [];
  toastsH: { autohide: boolean }[] = [];
  toastsI: { autohide: boolean }[] = [];
  toastsJ: { autohide: boolean }[] = [];
  toastsK: { autohide: boolean }[] = [];
  toasts7: { autohide: boolean }[] = [];
  toasts8: { autohide: boolean }[] = [];
  toasts9: { autohide: boolean }[] = [];
  toasts10: { autohide: boolean }[] = [];
  toasts11: { autohide: boolean }[] = [];
  toasts12: { autohide: boolean }[] = [];
  toasts13: { autohide: boolean }[] = [];
  toasts14: { autohide: boolean }[] = [];
  toasts15: { autohide: boolean }[] = [];
  toasts16: { autohide: boolean }[] = [];
  toasts17: { autohide: boolean }[] = [];
  toasts18: { autohide: boolean }[] = [];

  showToast() {
    const newToast = { autohide: true };
    this.toasts.push(newToast);
  }

  //
  showToastprimary() {
    const newToast = { autohide: true };
    this.toasts1.push(newToast);
  }
  showToastprimary1() {
    const newToast = { autohide: true };
    this.toasts16.push(newToast);
  }
  showToastprimary2() {
    const newToast = { autohide: true };
    this.toasts17.push(newToast);
  }
  showToastprimary3() {
    const newToast = { autohide: true };
    this.toasts18.push(newToast);
  }
  showToastseconday() {
    const newToast = { autohide: true };
    this.toasts2.push(newToast);
  }
  
  showToastwarning() {
    const newToast = { autohide: true };
    this.toasts3.push(newToast);
  }

  showToastinfo() {
    const newToast = { autohide: true };
    this.toasts4.push(newToast);
  }

  showToastsuccess() {
    const newToast = { autohide: true };
    this.toasts5.push(newToast);
  }
  showToastdanger() {
    const newToast = { autohide: true };
    this.toasts6.push(newToast);
  }

  hideToastprimary(toast1: { autohide: boolean }) {
    this.toasts1 = this.toasts1.filter((t) => t !== toast1);
  }
  hideToastprimary1(toast16: { autohide: boolean }) {
    this.toasts16 = this.toasts16.filter((t) => t !== toast16);
  }
  hideToastprimary2(toast17: { autohide: boolean }) {
    this.toasts17 = this.toasts17.filter((t) => t !== toast17);
  }
  hideToastprimary3(toast18: { autohide: boolean }) {
    this.toasts18 = this.toasts18.filter((t) => t !== toast18);
  }
  hideToastsecondary(toast: { autohide: boolean }) {
    this.toasts2 = this.toasts2.filter((t) => t !== toast);
  }
  hideToastwarning(toast: { autohide: boolean }) {
    this.toasts3 = this.toasts3.filter((t) => t !== toast);
  }
  hideToastinfo(toast: { autohide: boolean }) {
    this.toasts4 = this.toasts4.filter((t) => t !== toast);
  }
  hideToastsuccess(toast: { autohide: boolean }) {
    this.toasts5 = this.toasts5.filter((t) => t !== toast);
  }
  hideToastdanger(toast: { autohide: boolean }) {
    this.toasts6 = this.toasts6.filter((t) => t !== toast);
  }
  hidehedaer = [
    { message:' Hello, world! This is the Primary toast message.',bgColor:'text-bg-primary mb-4'},
    { message:' Hello, world! This is the Primary toast message.',bgColor:'text-bg-secondary mb-4'},
    { message:' Hello, world! This is the Primary toast message.',bgColor:'text-bg-warning mb-4'},
    { message:' Hello, world! This is the Primary toast message.',bgColor:'text-bg-info'},
  ]
  //solid toast
  SolidToastprimary() {
    const newToast = { autohide: true };
    this.toastsA.push(newToast);
  }
  SolidToastprimary1() {
    const newToast = { autohide: true };
    this.toastsH.push(newToast);
  }
  //solid toast
  SolidToastjs() {
    const newToast = { autohide: true };
    this.toastsK.push(newToast);
  }
  SolidToastprimary2() {
    const newToast = { autohide: true };
    this.toastsI.push(newToast);
  }
  SolidToastprimary3() {
    const newToast = { autohide: true };
    this.toastsJ.push(newToast);
  }
  

  SolidToastsecondary() {
    const newToast = { autohide: true };
    this.toastsB.push(newToast);
  }
  SolidToastwarning() {
    const newToast = { autohide: true };
    this.toastsC.push(newToast);
  }
  SolidToastinfo() {
    const newToast = { autohide: true };
    this.toastsD.push(newToast);
  }
  SolidToastsuccess() {
    const newToast = { autohide: true };
    this.toastsE.push(newToast);
  }
  SolidToastdanger() {
    const newToast = { autohide: true };
    this.toastsF.push(newToast);
  }

  hideToast(toast: { autohide: boolean }) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  hideSolidToastprimary(toastA: { autohide: boolean }) {
    this.toastsA = this.toastsA.filter((t) => t !== toastA);
  }
  hideSolidToastprimary1(toastH: { autohide: boolean }) {
    this.toastsH = this.toastsH.filter((t) => t !== toastH);
  }
  hideSolidToastprimary2(toastI: { autohide: boolean }) {
    this.toastsI = this.toastsI.filter((t) => t !== toastI);
  }
  hideSolidToastprimary3(toastJ: { autohide: boolean }) {
    this.toastsJ = this.toastsJ.filter((t) => t !== toastJ);
  }
  hideSolidToastsecondary(toast: { autohide: boolean }) {
    this.toastsB = this.toastsB.filter((t) => t !== toast);
  }
  hideSolidToastwarning(toast: { autohide: boolean }) {
    this.toastsC = this.toastsC.filter((t) => t !== toast);
  }
  hideSolidToastinfo(toast: { autohide: boolean }) {
    this.toastsD = this.toastsD.filter((t) => t !== toast);
  }
  hideSolidToastsuccess(toast: { autohide: boolean }) {
    this.toastsE = this.toastsE.filter((t) => t !== toast);
  }
  hideSolidToastdanger(toast: { autohide: boolean }) {
    this.toastsF = this.toastsF.filter((t) => t !== toast);
  }

  hidden = () => {
    this.show9 = false;
  };
  

  handleToastClose() {
    this.showContent = false;  // Set showContent to false to hide the toast
    }
  handleToastClose1() {
    this.show11 = false; 
  } 
   handleToastClose2() {
    this.show12 = false; 
  }  
  handleToastClose3() {
    this.show13 = false;
  } 
   handleToastClose4() {
    this.show14 = false;  
  }
  contentClose() {
    this.show10 = false;
  }

  close() {
    this.isclose = false;
    setTimeout(() => (this.isclose = true), 3000);
  }
 

  //Top Placements
  TopLeft() {
    const newToast = { autohide: true };
    this.toasts7.push(newToast);
  }
  TopCenter() {
    const newToast = { autohide: true };
    this.toasts8.push(newToast);
  }
  TopCenterhideToast(toast7: { autohide: boolean }) {
    this.toasts8 = this.toastsA.filter((t) => t !== toast7);
  }
  TopRight() {
    const newToast = { autohide: true };
    this.toasts9.push(newToast);
  }
  TopRighthideToast(toast7: { autohide: boolean }) {
    this.toasts9 = this.toastsA.filter((t) => t !== toast7);
  }
  MiddleLeft() {
    const newToast = { autohide: true };
    this.toasts10.push(newToast);
  }
  MiddleLefthideToast(toast7: { autohide: boolean }) {
    this.toasts10 = this.toastsA.filter((t) => t !== toast7);
  }
  MiddleCenter() {
    const newToast = { autohide: true };
    this.toasts11.push(newToast);
  }
  MiddleCenterhideToast(toast7: { autohide: boolean }) {
    this.toasts11 = this.toastsA.filter((t) => t !== toast7);
  }
  MiddleRight() {
    const newToast = { autohide: true };
    this.toasts12.push(newToast);
  }
  MiddleRighthideToast(toast7: { autohide: boolean }) {
    this.toasts12 = this.toastsA.filter((t) => t !== toast7);
  }
  BottomLeft() {
    const newToast = { autohide: true };
    this.toasts13.push(newToast);
  }
  BottomLefthideToast(toast7: { autohide: boolean }) {
    this.toasts13 = this.toastsA.filter((t) => t !== toast7);
  }
  BottomCenter() {
    const newToast = { autohide: true };
    this.toasts14.push(newToast);
  }
  BottomCenterthideToast(toast7: { autohide: boolean }) {
    this.toasts14 = this.toastsA.filter((t) => t !== toast7);
  }
  BottomRight() {
    const newToast = { autohide: true };
    this.toasts15.push(newToast);
  }
  BottomRighthideToast(toast7: { autohide: boolean }) {
    this.toasts15 = this.toastsA.filter((t) => t !== toast7);
  }
  showToastBasic: boolean = false;
  showToastStack1: boolean = false;
  showToastStack2: boolean = false;

  showBasicToast() {
    this.showToastBasic = true;
  }

  showStackToasts() {
    this.showToastStack1 = true;
    setTimeout(() => this.showToastStack2 = true, 1000); // Show second toast after 1 second
  }
  solidtoasts=[
    {buttonClass:"toast colored-toast bg-primary text-fixed-white",autohide:true},
    {buttonClass:"toast colored-toast bg-secondary text-fixed-white",autohide:true},
    {buttonClass:"toast colored-toast bg-primary text-fixed-white",autohide:true},
    {buttonClass:"toast colored-toast bg-primary text-fixed-white",autohide:true},
    {buttonClass:"toast colored-toast bg-primary text-fixed-white"},
  ]
}
