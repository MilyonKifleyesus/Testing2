import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
import * as PrismCode from '../../../shared/prismData/buttons';
@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {
  buttons=[
    {class:'btn btn-primary btn-wave',text:'Primary'},
    {class:'btn btn-secondary btn-wave',text:'Secondary'},
    {class:'btn btn-success btn-wave',text:'Success'},
    {class:'btn btn-danger btn-wave',text:'Danger'},
    {class:'btn btn-warning btn-wave',text:'Warning'},
    {class:'btn btn-info btn-wave',text:'Info'},
    {class:'btn btn-light btn-wave',text:'Light'},
    {class:'btn btn-dark btn-wave text-white',text:'Dark'},
    {class:'btn btn-link btn-wave',text:'Link'},
  ]
  lightButtons=[
    {class:'btn btn-primary-light btn-wave',text:'Primary'},
    {class:'btn btn-secondary-light btn-wave',text:'Secondary'},
    {class:'btn btn-success-light btn-wave',text:'Success'},
    {class:'btn btn-danger-light btn-wave',text:'Danger'},
    {class:'btn btn-warning-light btn-wave',text:'Warning'},
    {class:'btn btn-info-light btn-wave',text:'Info'},
    {class:'btn btn-purple-light btn-wave',text:'Purple'},
    {class:'btn btn-teal-light btn-wave',text:'Teal'},
    {class:'btn btn-orange-light btn-wave',text:'Orange'},
  ]
  lightRoundedButtons=[
    {class:'btn btn-primary-light rounded-pill btn-wave',text:'Primary'},
    {class:'btn btn-secondary-light  rounded-pill btn-wave',text:'Secondary'},
    {class:'btn btn-success-light rounded-pill btn-wave',text:'Success'},
    {class:'btn btn-danger-light rounded-pill btn-wave',text:'Danger'},
    {class:'btn btn-warning-light rounded-pill btn-wave',text:'Warning'},
    {class:'btn btn-info-light rounded-pill btn-wave',text:'Info'},
    {class:'btn btn-purple-light rounded-pill btn-wave',text:'Purple'},
    {class:'btn btn-teal-light rounded-pill btn-wave',text:'Teal'},
    {class:'btn btn-orange-light rounded-pill btn-wave',text:'Orange'},
  ]
  roundedButtons=[
    {class:'btn btn-primary rounded-pill btn-wave',text:'Primary'},
    {class:'btn btn-secondary rounded-pill btn-wave',text:'Secondary'},
    {class:'btn btn-success rounded-pill btn-wave',text:'Success'},
    {class:'btn btn-danger rounded-pill btn-wave',text:'Danger'},
    {class:'btn btn-warning rounded-pill btn-wave',text:'Warning'},
    {class:'btn btn-info rounded-pill btn-wave',text:'Info'},
    {class:'btn btn-light rounded-pill btn-wave',text:'Light'},
    {class:'btn btn-dark rounded-pill btn-wave text-white',text:'Dark'},
    {class:'btn btn-link rounded-pill btn-wave',text:'Link'},
  ]
 outlineButtons=[
    {class:'btn btn-outline-primary btn-wave',text:'Primary'},
    {class:'btn btn-outline-secondary btn-wave',text:'Secondary'},
    {class:'btn btn-outline-success btn-wave',text:'Success'},
    {class:'btn btn-outline-danger btn-wave',text:'Danger'},
    {class:'btn btn-outline-warning btn-wave',text:'Warning'},
    {class:'btn btn-outline-info btn-wave',text:'Info'},
    {class:'btn btn-outline-light btn-wave',text:'Light'},
    {class:'btn btn-outline-dark btn-wave',text:'Dark'},
  ]
  roundedOutlineButtons=[
     {class:'btn btn-outline-primary rounded-pill btn-wave',text:'Primary'},
     {class:'btn btn-outline-secondary rounded-pill btn-wave',text:'Secondary'},
     {class:'btn btn-outline-success rounded-pill btn-wave',text:'Success'},
     {class:'btn btn-outline-danger rounded-pill btn-wave',text:'Danger'},
     {class:'btn btn-outline-warning rounded-pill btn-wave',text:'Warning'},
     {class:'btn btn-outline-info rounded-pill btn-wave',text:'Info'},
     {class:'btn btn-outline-light rounded-pill btn-wave',text:'Light'},
     {class:'btn btn-outline-dark rounded-pill btn-wave',text:'Dark'},
   ]
   gradientButtons=[
    {class:'btn btn-primary-gradient btn-wave',text:'Primary'},
    {class:'btn btn-secondary-gradient btn-wave',text:'Secondary'},
    {class:'btn btn-success-gradient btn-wave',text:'Success'},
    {class:'btn btn-danger-gradient btn-wave',text:'Danger'},
    {class:'btn btn-warning-gradient btn-wave',text:'Warning'},
    {class:'btn btn-info-gradient btn-wave',text:'Info'},
    {class:'btn btn-orange-gradient btn-wave',text:'Orange'},
    {class:'btn btn-purple-gradient btn-wave',text:'Purple'},
    {class:'btn btn-teal-gradient btn-wave',text:'Teal'},
  ]
  roundedGradientButtons=[
    {class:'btn btn-primary-gradient rounded-pill btn-wave',text:'Primary'},
    {class:'btn btn-secondary-gradient rounded-pill btn-wave',text:'Secondary'},
    {class:'btn btn-success-gradient rounded-pill btn-wave',text:'Success'},
    {class:'btn btn-danger-gradient rounded-pill btn-wave',text:'Danger'},
    {class:'btn btn-warning-gradient rounded-pill btn-wave',text:'Warning'},
    {class:'btn btn-info-gradient rounded-pill btn-wave',text:'Info'},
    {class:'btn btn-orange-gradient rounded-pill btn-wave',text:'Orange'},
    {class:'btn btn-purple-gradient rounded-pill btn-wave',text:'Purple'},
    {class:'btn btn-teal-gradient rounded-pill btn-wave',text:'Teal'},
  ]
  ghostButtons=[
    {class:'btn btn-primary-ghost btn-wave',text:'Primary'},
    {class:'btn btn-secondary-ghost btn-wave',text:'Secondary'},
    {class:'btn btn-success-ghost btn-wave',text:'Success'},
    {class:'btn btn-danger-ghost btn-wave',text:'Danger'},
    {class:'btn btn-warning-ghost btn-wave',text:'Warning'},
    {class:'btn btn-info-ghost btn-wave',text:'Info'},
    {class:'btn btn-orange-ghost btn-wave',text:'Orange'},
    {class:'btn btn-purple-ghost btn-wave',text:'Purple'},
    {class:'btn btn-teal-ghost btn-wave',text:'Teal'},
  ]
  disabledButtons=[
    {class: 'btn btn-primary',text:'Primary button'},
    {class: 'btn btn-secondary',text:'Button'},
    {class: 'btn btn-outline-primary',text:'Primary button'},
    {class: 'btn btn-outline-secondary',text:'Button'},
  ]
  toggleButtons=[
    {class: 'btn btn-primary btn-wave',text:'Toggle button',disabled:false},
    {class: 'btn btn-secondary active btn-wave',text:'Active toggle button',disabled:false},
    {class: 'btn btn-teal btn-wave',text:'Disabled toggle button',disabled:true},
  ]
  toggleButtons2=[
    {class: 'btn btn-primary btn-wave',text:'Toggle link',disabled:false},
    {class: 'btn btn-secondary active btn-wave',text:'Active toggle link',disabled:false},
    {class: 'btn btn-teal btn-wave',text:'Disabled toggle link',disabled:true},
  ]
  loadingButtons=[
    {class:'btn btn-primary btn-loader',icon:'ri-loader-2-fill fs-16',text:'Loading',disabled:false},
    {class:'btn btn-outline-secondary btn-loader',icon:'ri-loader-2-fill fs-16',text:'Loading',disabled:false},
    {class:'btn btn-info-light btn-loader',icon:'ri-loader-4-line fs-16',text:'Loading',disabled:false},
    {class:'btn btn-warning-light btn-loader',icon:'ri-loader-5-line fs-16',text:'Loading',disabled:false},
    {class:'btn btn-success btn-loader',icon:'ri-refresh-line fs-16',text:'Disabled',disabled:true},
  ]
  iconButtons=[
    {class:'btn btn-icon btn-primary btn-wave',icon:'ri-bank-fill'},
    {class:'btn btn-icon btn-info btn-wave',icon:'ri-medal-fill'},
    {class:'btn btn-icon btn-danger btn-wave',icon:'ri-archive-line'},
    {class:'btn btn-icon btn-warning btn-wave me-5',icon:'ri-calendar-2-line'},
  ]
  iconButtons2=[
    {class:'btn btn-icon btn-primary-light rounded-pill btn-wave',icon:'ri-home-smile-line'},
    {class:'btn btn-icon btn-secondary-transparent rounded-pill btn-wave',icon:'ri-delete-bin-line'},
    {class:'btn btn-icon btn-success-light rounded-pill btn-wave',icon:'ri-notification-3-line'},
    {class:'btn btn-icon btn-danger-light rounded-pill btn-wave me-5',icon:'ri-chat-settings-line'},
  ]
  iconButtons3=[
    {class:'btn btn-icon btn-outline-primary rounded-pill btn-wave',icon:'ri-phone-line'},
    {class:'btn btn-icon btn-outline-teal rounded-pill btn-wave',icon:'ri-customer-service-2-line'},
    {class:'btn btn-icon btn-outline-success rounded-pill btn-wave',icon:'ri-live-line'},
    {class:'btn btn-icon btn-outline-secondary rounded-pill btn-wave',icon:'ri-save-line'},
  ]
  iconButtonsSizes=[
    {class:'btn btn-sm btn-icon btn-primary btn-wave',icon:'ri-bank-fill'},
    {class:'btn btn-icon btn-info btn-wave',icon:'ri-medal-fill'},
    {class:'btn btn-lg btn-icon btn-danger btn-wave',icon:'ri-archive-line'},
  ]
  iconButtonsSizes1=[
    {class:'btn btn-sm btn-icon btn-primary-light rounded-pill btn-wave',icon:'ri-home-smile-line'},
    {class:'btn btn-icon btn-secondary-transparent rounded-pill btn-wave',icon:'ri-delete-bin-line'},
    {class:'btn btn-lg btn-icon btn-success-light rounded-pill btn-wave',icon:'ri-notification-3-line'},
  ]
  iconButtonsSizes2=[
    {class:'btn btn-sm btn-icon btn-outline-primary rounded-pill btn-wave',icon:'ri-phone-line'},
    {class:'btn btn-icon btn-outline-teal rounded-pill btn-wave',icon:'ri-customer-service-2-line'},
    {class:'btn btn-lg btn-icon btn-outline-success rounded-pill btn-wave',icon:'ri-live-line'},
  ]
  socialButtons=[
    {class:'btn btn-icon btn-facebook btn-wave',icon:'ri-facebook-line'},
    {class:'btn btn-icon btn-twitter btn-wave',icon:'ri-twitter-x-line'},
    {class:'btn btn-icon btn-instagram btn-wave',icon:'ri-instagram-line'},
    {class:'btn btn-icon btn-github btn-wave',icon:'ri-github-line'},
    {class:'btn btn-icon btn-youtube btn-wave',icon:'ri-youtube-line'},
    {class:'btn btn-icon btn-google btn-wave',icon:'ri-google-line'},
  ]
  sizesButtons=[
    {class:'btn btn-primary btn-sm btn-wave',buttonText:'Small button'},
    {class:'btn btn-secondary  btn-wave',buttonText:'Default button'},
    {class:'btn btn-success btn-lg btn-wave',buttonText:'Large button'},
  ]
  buttonWidths=[
    {class:'btn btn-primary btn-w-xs btn-wave',size:'XS'},
    {class:'btn btn-secondary btn-w-sm btn-wave',size:'SM'},
    {class:'btn btn-warning btn-w-md btn-wave',size:'MD'},
    {class:'btn btn-info btn-w-lg btn-wave',size:'LG'},
  ]
  shadowButtons=[
    {class:'btn btn-primary shadow-sm btn-wave'},
    {class:'btn btn-primary shadow btn-wave'},
    {class:'btn btn-primary shadow-lg btn-wave'},
  ]
  shadowButtons1=[
    {class:'btn btn-secondary btn-sm shadow-sm btn-wave'},
    {class:'btn btn-info shadow btn-wave'},
    {class:'btn btn-lg btn-success shadow-lg btn-wave'},
  ]
  coloredButtons=[
    {class:'btn btn-primary shadow-primary btn-wave'},
    {class:'btn btn-secondary shadow-secondary btn-wave'},
    {class:'btn btn-success shadow-success btn-wave'},
    {class:'btn btn-info shadow-info btn-wavee'},
    {class:'btn btn-warning shadow-warning btn-wave'},
    {class:'btn btn-danger shadow-danger btn-wave'},
    {class:'btn btn-purple shadow-purple btn-wave'},
    {class:'btn btn-orange shadow-orange btn-wave'},
  ]
  raisedButtons=[
    {class:'btn btn-primary btn-raised-shadow btn-wave'},
    {class:'btn btn-secondary btn-raised-shadow btn-wave'},
    {class:'btn btn-success btn-raised-shadow btn-wave'},
    {class:'btn btn-info btn-raised-shadow btn-wavee'},
    {class:'btn btn-warning btn-raised-shadow btn-wave'},
    {class:'btn btn-danger btn-raised-shadow btn-wave'},
    {class:'btn btn-purple btn-raised-shadow btn-wave'},
    {class:'btn btn-orange btn-raised-shadow btn-wave'},
  ]
  labelButtons=[
    {class:'btn btn-primary label-btn',icon:'ri-chat-smile-line label-btn-icon me-2',text:'Primary'},
    {class:'btn btn-secondary label-btn',icon:'ri-settings-4-line label-btn-icon me-2',text:'Secondary'},
    {class:'btn btn-info label-btn rounded-pill',icon:'ri-phone-line label-btn-icon me-2 rounded-pill',text:'Info'},
    {class:'btn btn-success label-btn label-end',icon:'ri-thumb-up-line label-btn-icon ms-2',text:'Success'},
    {class:'btn btn-danger label-btn label-end rounded-pill',icon:'ri-close-line label-btn-icon ms-2 rounded-pill',text:'Cancel'},
    {class:'btn btn-warning label-btn rounded-pill',icon:'ri-spam-2-line label-btn-icon me-2 rounded-pill',text:'Warning'},
  ]
  customButtons=[
    {class:'btn btn-info custom-button rounded-pill',icon:'ri-twitter-x-line text-info',text:'Twitter'},
    {class:'btn btn-teal-light btn-border-down',text:'Border'},
    {class:'btn btn-secondary-light btn-border-start',text:'Border'},
    {class:'btn btn-purple-light btn-border-end',text:'Border'},
    {class:'btn btn-warning-light btn-border-top',text:'Border'},
    {class:'btn btn-success btn-glare',text:'Glare Button'},
    {class:'btn btn-danger btn-hover btn-hover-animate',text:'Like'},
    {class:'btn btn-success btn-darken-hover',text:'Hover'},
    {class:'btn btn-orange btn-custom-border',text:'Hover'},
  ]
  prsimCodeData: any = PrismCode;
  Blockbutton = [
    {id:1, class:"Button", color:"btn btn-primary w-100" },
    {id:2, class:"Button", color:"btn btn-secondary w-100"},
  ]
  
  Blockbutton1 = [
    {id:1, class:"Button", color:"btn btn-info"},
    {id:2, class:"Button", color:"btn btn-success"},
  ]
  
  Blockbutton2 = [
    {id:2, class:"Button", color:"btn btn-danger"},
    {id:1, class:"Button", color:"btn btn-warning"},
  ]
  Blockbutton3 = [
    {id:1, class:"Button", color:"btn btn-teal"},
    {id:2, class:"Button", color:"btn btn-purple"},
  ]
}
