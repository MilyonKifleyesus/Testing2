import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
// declare var require:any
// const Swal = require('sweetalert2');
@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [SharedModule, NgbModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {
  constructor(private toastr: ToastrService) {
  
  }

 ngOnInit(): void {
 }
 toastsK: { autohide: boolean }[] = [];
 show15 = true;
 showDefault() {
   this.toastr.info(`<div id="awn-toast-container" class="awn-bottom-right default-notification"><div id="awn-toast-1738219755362" class="awn-toast awn-toast-tip" style="animation-duration: 0.3s;"><div class="awn-toast-wrapper"><div class="awn-toast-progress-bar" style="animation-duration:5s;"></div><b class="awn-toast-label">Tip</b><div class="awn-toast-content">This is an example of tip</div><span class="awn-toast-icon"><i class="fa fas fa-fw fa-question-circle"></i></span></div></div></div>`,'', {
     timeOut: 1500,
     positionClass: 'toast-bottom-right',
     enableHtml: true, 
     
    
   });
 }
 showSuccess() {
   this.toastr.success(`<div id="awn-toast-container" class="awn-bottom-right"><div id="awn-toast-1738220857295" class="awn-toast awn-toast-success" style="animation-duration: 0.3s;"><div class="awn-toast-wrapper"><div class="awn-toast-progress-bar" style="animation-duration:5s;"></div><b class="awn-toast-label">Success</b><div class="awn-toast-content">This Is An Example Of Success</div><span class="awn-toast-icon"><i class="fa fas fa-fw fa-check-circle"></i></span></div></div></div>`, '', {
     timeOut: 3000,
     positionClass: 'toast-bottom-right',
     enableHtml: true, 
   });
 }
 
 showError() {
   this.toastr.error(`<div id="awn-toast-container" class="awn-bottom-right"><div id="awn-toast-1738227076130" class="awn-toast awn-toast-alert awn-toast-progress-bar-paused" style="animation-duration: 0.3s;"><div class="awn-toast-wrapper"><div class="awn-toast-progress-bar" style="animation-duration:5s;"></div><b class="awn-toast-label">Error</b><div class="awn-toast-content">some error</div><span class="awn-toast-icon"><i class="fa fas fa-fw fa-exclamation-triangle"></i></span></div></div></div>`, '', {
     timeOut: 2000,
     positionClass: 'toast-bottom-right',
     enableHtml: true, 
   });
 }

 showInfo() {
  this.toastr.info(
    `<div id="awn-toast-1738218799275" class="awn-toast awn-toast-info awn-toast-progress-bar-paused" style="animation-duration: 0.3s;">
    <div class="awn-toast-wrapper"><div class="awn-toast-progress-bar" style="animation-duration:5s;"></div><b class="awn-toast-label">Info</b><div class="awn-toast-content">This Is An Example Of Info</div><span class="awn-toast-icon"><i class="fa fas fa-fw fa-info-circle"></i></span></div></div>`, 
    '',
    {
      timeOut: 1500,
      positionClass: 'toast-bottom-right',
      enableHtml: true, // Enables HTML rendering inside the toast message
    }
  );
 }

 ShowWarning() {
   this.toastr.warning(`<div id="awn-toast-container" class="awn-bottom-right"><div id="awn-toast-1738226471159" class="awn-toast awn-toast-warning awn-toast-progress-bar-paused" style="animation-duration: 0.3s;"><div class="awn-toast-wrapper"><div class="awn-toast-progress-bar" style="animation-duration:5s;"></div><b class="awn-toast-label">Attention</b><div class="awn-toast-content">This Is An Example Of Warning</div><span class="awn-toast-icon"><i class="fa fas fa-fw fa-exclamation-circle"></i></span></div></div></div>`, '', {
     timeOut: 1500,
     positionClass: 'toast-bottom-right',
     enableHtml: true,
   });
 }

 Notification() {
   this.toastr.info('This is an example of tip', 'TIP', {
     timeOut: 1500,
     positionClass: 'toast-top-center',
   });
 }
 Info() {
    Swal.fire({
      html: `
        <div id="awn-popup-wrapper" style="animation-duration: 0.3s;">
          <div class="awn-popup-body awn-popup-confirm">
            <i class="fa fas fa-fw fa-exclamation-triangle" style="color: #f39c12; font-size: 24px;"></i>
            <div class="awn-popup-title" style="font-weight: bold; margin-top: 10px;">Confirmation required</div>
            <div class="awn-popup-content" style="margin-top: 5px;">Are you sure you want to reset the password?</div>
            <div class="awn-buttons awn-buttons-2" style="margin-top: 15px;">
              <button class="awn-btn awn-btn-success swal-confirm-btn" id="awn-confirm-ok">OK</button>
              <button class="awn-btn awn-btn-cancel swal-cancel-btn" id="awn-confirm-cancel">Cancel</button>
            </div>
          </div>
        </div>
      `,
      didOpen: () => {
        document.getElementById('awn-confirm-ok')?.addEventListener('click', () => {
          Swal.close();
          console.log('OK button clicked');
        });
  
        document.getElementById('awn-confirm-cancel')?.addEventListener('click', () => {
          Swal.close();
          console.log('Cancel button clicked');
        });
      }
    });
  }
  
}
