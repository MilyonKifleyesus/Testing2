export let toastsReuse=
`@if(content1){
  <ngb-toast [class]="buttonClass" [autohide]="autohide" role="alert" aria-live="assertive"
  aria-atomic="true">
  <div class="d-flex">
      {{content1}}
    <button class="btn-close {{btnClass}} me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"
      (click)="show9 = true"></button>
  </div>
  <ng-content></ng-content>
</ngb-toast>
}
@else {

  <ngb-toast
 [delay]="5000"
 [autohide]="autohide"
 [header]="header"
 [ngClass]="buttonClass"
 (hide)="show = false" 
 >
     <ng-content>
         <ng-template ngbToastHeader (hide)="show = true;">
             <img
               class="bd-placeholder-img rounded me-2"
               src="./assets/images/brand-logos/favicon.ico"
               alt="Your Image"
               />
               <strong class="me-auto">Spruha</strong>
               <small>11 mins ago</small>
         </ng-template>
         {{content}}
     </ng-content>
     <!-- <button aria-label="Close" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
     >
     <span aria-hidden="true"></span>
   </button> -->
 </ngb-toast> 
}
`
export let toasts1 = `<button type="button" class="btn btn-primary btn-wave" id="liveToastBtn" (click)="showToast()" >Show live
toast</button>
<div class="toast-container position-fixed top-0 end-0 p-3">

@for (toast of toasts; track toasts) {
<ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToast(toast)"  [class.bg-warning]="!toast.autohide">
<div class="toast-header text-default">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/favicon.ico"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>`,
toasts2 = `@if (show6){
    <ngb-toast  class="toast align-items-center text-bg-primary  border-0 fade show  mb-4" [autohide]="false">
        <div
          class="align-items-center show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="false"
        >
          <div class="d-flex">
            <div class="text-white">
              Hello, world! This is the Primary toast message
            </div>
            <button
              aria-label="Close"
              class="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              (click)="show6 = false"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </ngb-toast>
   }
   @if (show7){
    <ngb-toast  class="toast align-items-center text-bg-secondary border-0 fade show mb-4" [autohide]="false">
        <div
          class="align-items-center show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="false"
        >
          <div class="d-flex">
            <div class="text-white">
                Hello, world! This is the Secondary toast.
            </div>
            <button
              aria-label="Close"
              class="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              (click)="show7 = false"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </ngb-toast>
   }
   @if (show8){
    <ngb-toast  class="toast align-items-center text-bg-warning border-0 fade show mb-4" [autohide]="false">
        <div
          class="align-items-center show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="false"
        >
          <div class="d-flex">
            <div class="text-white">
                Hello, world! This is the  warning toast message.
            </div>
            <button
              aria-label="Close"
              class="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              (click)="show8 = false"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </ngb-toast>
   }
   @if (show9){
    <ngb-toast  class="toast align-items-center text-bg-info border-0 fade show" [autohide]="false">
        <div
          class="align-items-center show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="false"
        >
          <div class="d-flex">
            <div class="text-white">
                Hello, world! This is the info toast message.
            </div>
            <button
              aria-label="Close"
              class="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              (click)="show9 = false"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </ngb-toast>
   }`,
toasts3 = `@if (show) {
    <ngb-toast [autohide]="false" (hidden)="show = false">
        <ng-template ngbToastHeader>
            <div class="me-auto">
                <img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/favicon.ico" alt="...">
                <strong class="mx-1 ">Udon</strong>
            </div>
            <small>11 mins ago</small>
        </ng-template>
        Hello, world! This is a toast message.
    </ngb-toast>
}`,
toasts4 = `<div class="toast-container position-static">
@if (show1) {
    <ngb-toast [autohide]="false" (hidden)="show1 = false">
        <ng-template ngbToastHeader>
            <div class="me-auto">
                <img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/favicon.ico" alt="...">
                <strong class="mx-1 ">Udon</strong>
            </div>
            <small>just now</small>
        </ng-template>
        See? Just like this.
    </ngb-toast>
}
@if (show2) {
    <ngb-toast [autohide]="false" (hidden)="show1 = false">
        <ng-template ngbToastHeader>
            <div class="me-auto">
                <img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/favicon.ico" alt="...">
                <strong class="mx-1 ">Udon</strong>
            </div>
            <small>2 seconds ago</small>
        </ng-template>
        Heads up, toasts will stack automatically
    </ngb-toast>
}

</div>`,
toasts5 = `@if (show3) {
    <ngb-toast [autohide]="false" (hidden)="show3 = false">
        <ng-template ngbToastHeader>
            <div class="me-auto">
                <img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/favicon.ico" alt="...">
                <strong class="mx-1 ">Udon</strong>
            </div>
            <small>11 mins ago</small>
        </ng-template>
        Hello, world! This is a toast message.
    </ngb-toast>
}`,
toasts6 = ` @if (show10){
    <ngb-toast  class="toast align-items-center  mb-2 fade show" [autohide]="false">
        <div
          class="align-items-center show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="false"
        >
          <div class="d-flex">
            <div class="text-black">
                Hello, world! This is a toast message.
            </div>
            <button
              aria-label="Close"
              class="btn-close  me-2 m-auto"
              data-bs-dismiss="toast"
              (click)="show10 = false"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </ngb-toast>
   }
<div>
    <span class="my-4 text-muted">
        Alternatively, you can also add additional controls and components to
        toasts.
    </span>
</div>
@if (show11){
<ngb-toast
[autohide]="false"
class="toast fade show mt-2"
role="alert"
aria-live="assertive"
aria-atomic="true"
>
<div class="toast-body">
  Hello, world! This is a toast message.
  <div class="mt-2 pt-2 me-2 border-top">
    <button type="button" class="btn btn-primary btn-sm btn-wave">
      Take action
    </button>
    <button
      type="button"
      class="btn btn-secondary btn-sm btn-wave"
      data-bs-dismiss="toast"
      (click)="show11 = false"
    >
      Close
    </button>
  </div>
</div>
</ngb-toast>
}`,
toasts7 = `<div class="btn-list">
<button type="button" class="btn btn-primary-light me-2 btn-wave" id="primaryToastBtn" data-bs-dismiss="toast"
                            aria-label="Close"  (click)="showToastprimary()" >Primary</button>
<button type="button" class="btn btn-secondary-light me-2 btn-wave" id="secondaryToastBtn" (click)="showToastseconday()"
>secondary</button>
<button type="button" class="btn btn-warning-light me-2 btn-wave" id="warningToastBtn"  (click)="showToastwarning()"
>warning</button>
<button type="button" class="btn btn-info-light me-2 btn-wave" id="infoToastBtn"  (click)="showToastinfo()"
>info</button>
<button type="button" class="btn btn-success-light me-2 btn-wave" id="successToastBtn"  (click)="showToastsuccess()"
>success</button>
<button type="button" class="btn btn-danger-light me-2 btn-wave" id="dangerToastBtn"  (click)="showToastdanger()"
>danger</button>
</div>
<div class="toast-container position-fixed top-0 end-0 p-3">
@for (toast of toasts1; track toasts1) {
    <ngb-toast 
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastprimary(toast)"  [class.bg-primary-transparent]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/favicon.ico"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideToastprimary(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Your,toast message here.</div>
</ngb-toast>
}
@for (toast of toasts2; track toasts2) {
    <ngb-toast 
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastsecondary(toast)"  [class.bg-secondary-transparent]="!toast.autohide">
<div class="toast-header bg-secondary text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideToastsecondary(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Your,toast message here.</div>
</ngb-toast>
}
@for (toast of toasts3; track toasts3) {
    <ngb-toast 
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastwarning(toast)"  [class.bg-warning-transparent]="!toast.autohide">
<div class="toast-header bg-warning text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideToastwarning(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Your,toast message here.</div>
</ngb-toast>
}

@for (toast of toasts4; track toasts4) {
    <ngb-toast 
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastinfo(toast)"  [class.bg-info-transparent]="!toast.autohide">
<div class="toast-header bg-info text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideToastinfo(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Your,toast message here.</div>
</ngb-toast>
}

@for (toast of toasts5; track toasts5) {
    <ngb-toast 
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastsuccess(toast)"  [class.bg-success-transparent]="!toast.autohide">
<div class="toast-header bg-success text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideToastsuccess(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Your,toast message here.</div>
</ngb-toast>
}
@for (toast of toasts6; track toasts6) {
    <ngb-toast 
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastdanger(toast)"  [class.bg-danger-transparent]="!toast.autohide">
<div class="toast-header bg-danger text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideToastdanger(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Your,toast message here.</div>
</ngb-toast>
}
</div>`,
toasts8 = `<div class="btn-list">
<button type="button" class="btn btn-primary me-2 btn-wave" id="solidprimaryToastBtn"  (click)="SolidToastprimary()">Primary</button>
<button type="button" class="btn btn-secondary me-2 btn-wave" id="solidsecondaryToastBtn"  (click)="SolidToastsecondary()">secondary</button>
<button type="button" class="btn btn-warning me-2 btn-wave" id="solidwarningToastBtn"  (click)="SolidToastwarning()">warning</button>
<button type="button" class="btn btn-info me-2 btn-wave" id="solidinfoToastBtn"  (click)="SolidToastinfo()">info</button>
<button type="button" class="btn btn-success me-2 btn-wave" id="solidsuccessToastBtn"  (click)="SolidToastsuccess()">success</button>
<button type="button" class="btn btn-danger me-2 btn-wave" id="soliddangerToastBtn"  (click)="SolidToastdanger()">danger</button>
</div>
<div class="toast-container position-fixed top-0 end-0 p-3">

@for (toast of toastsA; track toastsA) {
    <ngb-toast id="solid-primaryToast"
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastprimary(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideSolidToastprimary(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body bg-primary text-fixed-white">Your,toast message here.</div>
</ngb-toast>
}

@for (toast of toastsB; track toastsB) {
    <ngb-toast id="solid-secondaryToast"
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastsecondary(toast)"  [class.bg-secondary]="!toast.autohide">
<div class="toast-header bg-secondary text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideSolidToastsecondary(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body bg-secondary text-fixed-white">Your,toast message here.</div>
</ngb-toast>
}


@for (toast of toastsC; track toastsC) {
    <ngb-toast id="solid-warningToast"
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastwarning(toast)"  [class.bg-warning]="!toast.autohide">
<div class="toast-header bg-warning text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideSolidToastwarning(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body bg-warning text-fixed-white">Your,toast message here.</div>
</ngb-toast>
}

@for (toast of toastsD; track toastsD) {
    <ngb-toast id="solid-infoToast"
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastinfo(toast)"  [class.bg-info]="!toast.autohide">
<div class="toast-header bg-info text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideSolidToastinfo(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body bg-info text-fixed-white">Your,toast message here.</div>
</ngb-toast>
}
@for (toast of toastsE; track toastsE) {
    <ngb-toast id="solid-successToast"
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastsuccess(toast)"  [class.bg-success]="!toast.autohide">
<div class="toast-header bg-success text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideSolidToastsuccess(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body bg-success text-fixed-white">Your,toast message here.</div>
</ngb-toast>
}
@for (toast of toastsF; track toastsF) {
    <ngb-toast id="solid-dangerToast"
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastdanger(toast)"  [class.bg-danger]="!toast.autohide">
<div class="toast-header bg-danger text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideSolidToastdanger(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body bg-danger text-fixed-white">Your,toast message here.</div>
</ngb-toast>
}
</div>`,
toasts9 = `<div class="btn-list">
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="topleftToastBtn" (click)="TopLeft()">Top Left</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="topcenterToastBtn" (click)="TopCenter()">Top Center</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="toprightToastBtn" (click)="TopRight()">Top Right</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="middleleftToastBtn" (click)="MiddleLeft()">Middle Left</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="middlecenterToastBtn" (click)="MiddleCenter()">Middle Center</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="middlerightToastBtn" (click)="MiddleRight()">Middle Right</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="bottomleftToastBtn" (click)="BottomLeft()">Bottom Left</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="bottomcenterToastBtn" (click)="BottomCenter()">Bottom Center</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="bottomrightToastBtn" (click)="BottomRight()">Bottom Right</button>
</div>
<div class="toast-container position-fixed top-0 start-0 p-3">
@for (toast of toasts7; track toasts7) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="toplefthideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="toplefthideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed top-0 start-50  translate-middle-x p-3">
@for (toast of toasts8; track toasts8) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="TopCenterhideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="TopCenterhideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed top-0 end-0 p-3">
@for (toast of toasts9; track toasts9) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="TopRighthideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="TopRighthideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed top-50 start-0 translate-middle-y p-3">
@for (toast of toasts10; track toasts10) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="MiddleLefthideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="MiddleLefthideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed top-50 start-50 translate-middle">
@for (toast of toasts11; track toasts11) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="MiddleCenterhideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="MiddleCenterhideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed top-50 end-0 translate-middle-y p-3">
@for (toast of toasts12; track toasts12) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="MiddleRighthideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="MiddleRighthideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed bottom-0 start-0 p-3">
@for (toast of toasts13; track toasts13) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="BottomLefthideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="BottomLefthideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed bottom-0 start-50 translate-middle-x p-3">
@for (toast of toasts14; track toasts14) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="BottomCenterthideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="BottomCenterthideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed bottom-0 end-0 p-3">
@for (toast of toasts15; track toasts15) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="BottomRighthideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="BottomRighthideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>`,
toasts10 = `<div class="bd-example bg-light bd-example-toasts d-flex p-0">
<div aria-live="polite" aria-atomic="true"
    class="d-flex justify-content-center align-items-center w-100">
    
        @if (show5) {
            <ngb-toast class="shadow-lg fade" [autohide]="false" (hidden)="show5 = false">
                <ng-template ngbToastHeader>
                    <div class="me-auto">
                        <img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/favicon.ico" alt="...">
                        <strong class="mx-1 ">Udon</strong>
                    </div>
                    <small>11 mins ago</small>
                </ng-template>
                Hello, world! This is a toast message.
            </ngb-toast>
        }
</div>
</div>`;