let list = `[
  {
     type: 'outline-success',
     message: 'A simple outline primary alert—check it out!',
    },
    ...
]`;
export let alertreuse = 
`  <ngb-alert  [type]="variant" [dismissible]="isDismissible"  >
<ng-content >
</ng-content>
</ngb-alert>`;
export let alertTS = 
`<ngb-alert
type="warning"
class="alert alert-warning alert-dismissible fade show"
role="alert"
>
<strong>Holy guacamole!</strong> You should check in on some of those
fields below.
<button
type="button"
class="btn-close"
data-bs-dismiss="alert"
aria-label="Close"
>
<i class="bi bi-x"></i>
</button>
</ngb-alert>`;
export let alertTS1 = `  @for (livealert of livealerts; track livealert; let i = $index) {
  <div id="liveAlertPlaceholder">
    <div
      id="row"
      class="alert mb-2 alert-success alert-dismissible"
      role="alert"
    >
      <div>{{ livealert.message }}</div>
      <button
        type="button"
        class="btn-close"
        (click)="closeAlerts('row')"
        data-bs-dismiss="alert"
        aria-label="Close"
      >
        <i class="bi bi-x"></i>
      </button>
    </div>
  </div>
  }
  <button
    type="button"
    (click)="showAlert()"
    class="btn btn-primary"
    id="liveAlertBtn"
  >
    Show live alert
  </button>`;
export let alertData2 = `  
  import * as PrismCode from '../../../shared/prismData/alert';
  import * as tsCode from '../../../shared/prismData/alert';
  livealerts: { message: string; show: boolean }[] = [];

  showAlert() {
    // Add a new alert to the array
    this.livealerts.push({
      message: 'Nice, you triggered this alert message!',
      show: true,
    });
  }
  closeAlerts(rowId: string) {
    const rowElement = document.getElementById(rowId);
    if (rowElement) {
      rowElement.remove();
    }
  }
  `
export let alertData1 = `  
  import * as PrismCode from '../../../shared/prismData/alert';
  import * as tsCode from '../../../shared/prismData/alert';
  interface SolidAlert {
    type: string;
    message: string;
    bg:string;
  }
  solidAlerts: SolidAlert[] = solidALERTS;
  const solidALERTS: SolidAlert[] = [
    {
      type: 'solid-primary',
      message: ' A simple solid primary alert—check it out!',
      bg:''
    },
    {
      type: 'solid-secondary',
      message: 'A simple solid secondary alert—check it out!',
      bg:''
    },
    {
      type: 'solid-info',
      message: 'A simple solid info alert—check it out!',
      bg:''
    },
    {
      type: 'solid-warning',
      message: 'A simple solid warning alert—check it out!',
      bg:''
    },
    {
      type: 'solid-success',
      message: 'A simple solid success alert—check it out!',
      bg:''
    },
    {
      type: 'solid-danger',
      message: 'A simple solid danger alert—check it out!',
      bg:''
    },
    {
      type: 'solid-light',
      message: 'A simple solid light alert—check it out!',
      bg:'text-dark'
    },
    {
      type: 'solid-dark',
      message: 'A simple solid dark alert—check it out!',
      bg:'text-white'
    },
  ];
  `
export let alertData3 = `
  import * as PrismCode from '../../../shared/prismData/alert';
  import * as tsCode from '../../../shared/prismData/alert';
  interface Alert {
  type: string;
  message: string;
  bg:string;
  }
 solidroundedAlerts: Alert[] = solidRoundedALERTS;
      const solidRoundedALERTS: Alert[] = [
      {
        type: 'solid-primary',
        message: '  A simple solid rounded primary alert—check it out!',
      },
      {
        type: 'solid-secondary',
        message: 'A simple solid rounded secondary alert—check it out!',
      },
      {
        type: 'solid-warning',
        message: '  A simple solid rounded warning alert—check it out!',
      },
      {
        type: 'solid-danger',
        message: 'A simple solid rounded danger alert—check it out!',
      },
    ];
    solidroundedClose(index: number) {
      // Remove the alert from the array based on the index
      this.solidroundedAlerts.splice(index, 1);
    }`
export let alertData4 = `
  import * as PrismCode from '../../../shared/prismData/alert';
  import * as tsCode from '../../../shared/prismData/alert';
  interface Alert {
  type: string;
  message: string;
  bg:string;
  }
  roundedoutlineAlerts: Alert[] = roundedOutlineALERTS;
  const roundedOutlineALERTS: Alert[] = [
    {
      type: 'outline-primary',
      message: ' A simple outline primary alert—check it out!',
    },
    {
      type: 'outline-secondary',
      message: 'A simple outline secondary alert—check it out!',
    },
    {
      type: 'outline-info',
      message: 'A simple outline info alert—check it out!',
    },
    {
      type: 'outline-warning',
      message: 'A simple outline warning alert—check it out!',
    },
  ];
  roundedoutlineClose(index: number) {
    // Remove the alert from the array based on the index
    this.roundedoutlineAlerts.splice(index, 1);
  }`
export let alertData5 = `
  import * as PrismCode from '../../../shared/prismData/alert';
  import * as tsCode from '../../../shared/prismData/alert';
  interface Alert {
  type: string;
  message: string;
  bg:string;
  }
  solidShadowsAlerts: Alert[] = solidShadowsALERTS;
  const solidShadowsALERTS: Alert[] = [
    {
      type: 'solid-primary',
      message: 'A simple solid primary alert with normal shadow—check it out!',
    },
    {
      type: 'solid-primary',
      message: 'A simple solid primary alert with normal shadow—check it out!',
    },
    {
      type: 'solid-primary',
      message: 'A simple solid primary alert with normal shadow—check it out!',
    },
    {
      type: 'solid-secondary',
      message: 'A simple solid secondary alert with normal shadow—check it out!',
    },
    {
      type: 'solid-secondary',
      message: ' A simple solid secondary alert with normal shadow—check it out!',
    },
    {
      type: 'solid-secondary',
      message: 'A simple solid secondary alert with normal shadow—check it out!',
    },
  ];
  solidShadowsAlertsClose(index: number) {
    // Remove the alert from the array based on the index
    this.solidShadowsAlerts.splice(index, 1);
  }`
  export let alertData6 = `
  import * as PrismCode from '../../../shared/prismData/alert';
  import * as tsCode from '../../../shared/prismData/alert';
  interface Alert {
  type: string;
  message: string;
  bg:string;
  }
  roundeDefaultAlerts: Alert[] = roundeDefaultALERTS;
  const roundeDefaultALERTS: Alert[] = [
    {
      type: 'primary',
      message: ' A simple rounded primary alert—check it out!',
    },
    {
      type: 'secondary',
      message: 'A simple rounded secondary alert—check it out!',
    },
    {
      type: 'info',
      message: 'A simple rounded info alert—check it out!',
    },
    {
      type: 'warning',
      message: 'A simple rounded warning alert—check it out!',
    },
  ];
  roundeDefaultClose(index: number) {
    // Remove the alert from the array based on the index
    this.roundeDefaultAlerts.splice(index, 1);
  }`
  export let alertData7 = `
  import * as PrismCode from '../../../shared/prismData/alert';
  import * as tsCode from '../../../shared/prismData/alert';
  interface Alert {
  type: string;
  message: string;
  bg:string;
  }
  const CustomeButtonALERTS: Alert[] = [
    {
      type: 'primary',
      message: ' A simple rounded primary alert—check it out!',
    },
    {
      type: 'secondary',
      message: 'A simple rounded secondary alert—check it out!',
    },
    {
      type: 'info',
      message: 'A simple rounded info alert—check it out!',
    },
    {
      type: 'warning',
      message: 'A simple rounded warning alert—check it out!',
    },
  ];
  CustomeButtonClose(index: number) {
    // Remove the alert from the array based on the index
    this.CustomeButtonAlerts.splice(index, 1);
  }`
  export let alertData8 = `
  import * as PrismCode from '../../../shared/prismData/alert';
  import * as tsCode from '../../../shared/prismData/alert';
  interface Alert {
  type: string;
  message: string;
  bg:string;
  }
  CustomizedButtonAlerts: Alert1[] = CustomizedButtonALERTS;
  const CustomizedButtonALERTS: Alert1[] = [
    {
      type: 'outline-primary',
      icon:'  <svg  class="svg-primary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000" > <path d="M0 0h24v24H0z" fill="none" /> <path   d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/> </svg>',
      message: ' A customized primary alert with an icon ',
      
    },
    {
      type: 'outline-secondary',
      message: 'A customized secondary alert with an icon ',
      icon:' <svg class="svg-secondary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>'
    },
    {
      type: 'outline-info',
      message: ' A customized warning alert with an icon ',
      icon:'<svg class="svg-warning" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>'
    },
    {
      type: 'outline-warning',
      message: ' A customized danger alert with an icon ',
      icon:'<svg class="svg-danger" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"/></svg>'
    },
  ];
  customizedAlertclose(index: number) {
    // Remove the alert from the array based on the index
    this.CustomizedButtonAlerts.splice(index, 1);
  }`
export let alertTS2 = `  

@for (alert of outlineAlerts; track alert; let i = $index) {
  <div
    class="alert alert-{{ alert.type }} alert-dismissible fade show my-2"
  >
    {{ alert.message }}
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
      (click)="OutlineClose(i)"
    >
      <i class="bi bi-x {{ alert.bg }}"></i>
    </button>
  </div>
  }`;
export let alertData = `  
  import * as PrismCode from '../../../shared/prismData/alert';
  import * as tsCode from '../../../shared/prismData/alert';
  interface OutlineAlert {
    type: string;
    message: string;
    bg:string;
  }
  outlineAlerts: OutlineAlert[] = outlineALERTS;

  const outlineALERTS: OutlineAlert[] = [
    {
      type: 'outline-primary',
      message: 'A simple outline primary alert—check it out!',
      bg:''
    },
    {
      type: 'outline-secondary',
      message: 'A simple outline secondary alert—check it out!',
      bg:''
    },
    {
      type: 'outline-info',
      message: 'A simple outline info alert—check it out!',
      bg:''
    },
    {
      type: 'outline-warning',
      message: 'A simple outline warning alert—check it out!',
      bg:''
    },
    {
      type: 'outline-success',
      message: 'A simple outline success alert—check it out!',
      bg:''
    },
    {
      type: 'outline-danger',
      message: 'A simple outline danger alert—check it out!',
      bg:''
    },
    {
      type: 'outline-light',
      message: 'A simple outline light alert—check it out!',
      bg:'text-dark'
    },
    {
      type: 'outline-dark',
      message: 'A simple outline dark alert—check it out!',
      bg:'text-dark'
    },
  ];
`;
export let alertTS3 = `    
@for (alert of solidShadowsAlerts; track alert; let i = $index) {
<div
  class="alert alert-{{
    alert.type
  }} shadow-sm alert-dismissible fade show my-2"
>
  A simple solid primary alert with small shadow—check it out!
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="alert"
    (click)="solidShadowsAlertsClose(i)"
    aria-label="Close"
  >
    <i class="bi bi-x"></i>
  </button>
</div>
}`;
export let alertTS4 =
`   <div class="alert alert-primary shadow-sm">A simple primary alert with small shadow—check it out!</div>
  <div class="alert alert-primary shadow">A simple primary alert with normal shadow—check it out!</div>
  <div class="alert alert-primary shadow-lg">A simple primary alert with large shadow—check it out!</div>
  <div class="alert alert-secondary shadow-sm">A simple secondary alert with small shadow—check it out!
  </div>
  <div class="alert alert-secondary shadow">A simple secondary alert with normal shadow—check it out!
  </div>
  <div class="alert alert-secondary shadow-lg">A simple secondary alert with large shadow—check it out!
  </div>`;
export let alertTS5 = ` <div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
<div class="alert alert-secondary" role="alert">
  A simple secondary alert—check it out!
</div>
<div class="alert alert-success" role="alert">
  A simple success alert—check it out!
</div>
<div class="alert alert-danger" role="alert">
  A simple danger alert—check it out!
</div>
<div class="alert alert-warning" role="alert">
  A simple warning alert—check it out!
</div>
<div class="alert alert-info" role="alert">
  A simple info alert—check it out!
</div>
<div class="alert alert-light" role="alert">
  A simple light alert—check it out!
</div>
<div class="alert alert-dark" role="alert">
  A simple dark alert—check it out!
</div>`;
export let alertTS6 = ` <div class="alert alert-primary" role="alert">
A simple primary alert with <a href="javascript:void(0);" class="alert-link">an example
  link</a>.
Give it a click if you like.
</div>
<div class="alert alert-secondary" role="alert">
A simple secondary alert with <a href="javascript:void(0);" class="alert-link">an example
  link</a>. Give it a click if you like.
</div>
<div class="alert alert-success" role="alert">
A simple success alert with <a href="javascript:void(0);" class="alert-link">an example
  link</a>.
Give it a click if you like.
</div>
<div class="alert alert-danger" role="alert">
A simple danger alert with <a href="javascript:void(0);" class="alert-link">an example
  link</a>.
Give it a click if you like.
</div>
<div class="alert alert-warning" role="alert">
A simple warning alert with <a href="javascript:void(0);" class="alert-link">an example
  link</a>.
Give it a click if you like.
</div>
<div class="alert alert-info" role="alert">
A simple info alert with <a href="javascript:void(0);" class="alert-link">an example link</a>.
Give it a click if you like.
</div>
<div class="alert alert-light" role="alert">
A simple light alert with <a href="javascript:void(0);" class="alert-link">an example
  link</a>.
Give it a click if you like.
</div>
<div class="alert alert-dark" role="alert">
A simple dark alert with <a href="javascript:void(0);" class="alert-link">an example link</a>.
Give it a click if you like.
</div>`;
export let alertTS7 = `      @for (alert of solidAlerts; track alert; let i = $index) {
  <div
    class="alert alert-{{ alert.type }} alert-dismissible fade show my-2 {{
      alert.bg
    }}"
  >
    {{ alert.message }}
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
      (click)="solidClose(i)"
    >
      <i class="bi bi-x {{ alert.bg }}"></i>
    </button>
  </div>
  } `;
export let alertTS8 = `  
@for (alert of roundedoutlineAlerts; track alert; let i = $index) {
<div
  class="alert alert-{{
    alert.type
  }} rounded-pill alert-dismissible fade show my-2"
>
  {{ alert.message }}
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close"
    (click)="roundedoutlineClose(i)"
  >
    <i class="bi bi-x"></i>
  </button>
</div>
}
    `;
export let alertTS9 =
`   @for (alert of roundeDefaultAlerts; track alert; let i = $index) {
<div
  class="alert alert-{{
    alert.type
  }} rounded-pill alert-dismissible fade show my-2"
>
  {{ alert.message }}
  <button
    type="button"
    class="btn-close"
    (click)="roundeDefaultClose(i)"
    data-bs-dismiss="alert"
    aria-label="Close"
  >
    <i class="bi bi-x"></i>
  </button>
</div>
} `;
export let alertTS10 =
`  @for (alert of CustomeButtonAlerts; track alert; let i = $index) {
<div
  class="alert alert-{{
    alert.type
  }} rounded-pill alert-dismissible fade show my-2"
>
  {{ alert.message }}
  <button
    type="button"
    (click)="CustomeButtonClose(i)"
    class="btn-close custom-close"
    data-bs-dismiss="alert"
    aria-label="Close"
  >
    <i class="bi bi-x"></i>
  </button>
</div>
}  `;
export let alertTS11 = `      @for (alert of CustomizedButtonAlerts; track alert; let i = $index) {
<div
  class="alert alert-{{
    alert.type
  }} alert-dismissible fade show custom-alert-icon shadow-sm my-2"
  role="alert"
>
  <span [innerHTML]="getSanitizedSVG(alert.icon)"></span>

  {{ alert.message }}
  <button
    type="button"
    class="btn-close"
    (click)="customizedAlertclose(i)"
    data-bs-dismiss="alert"
    aria-label="Close"
  >
    <i class="bi bi-x"></i>
  </button>
</div>
}  `;
export let alertTS12 =
`   <div
class="alert alert-primary d-flex align-items-center my-2"
role="alert"
>
<svg
 class="flex-shrink-0 me-2 svg-primary"
 xmlns="http://www.w3.org/2000/svg"
 height="1.5rem"
 viewBox="0 0 24 24"
 width="1.5rem"
 fill="#000000"
>
 <path d="M0 0h24v24H0V0z" fill="none" />
 <path
   d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
 />
</svg>
<div>An example alert with an icon</div>
</div>
<div
class="alert alert-success d-flex align-items-center my-2"
role="alert"
>
<svg
 class="flex-shrink-0 me-2 svg-success"
 xmlns="http://www.w3.org/2000/svg"
 height="1.5rem"
 viewBox="0 0 24 24"
 width="1.5rem"
 fill="#000000"
>
 <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
 <path
   d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
 />
</svg>
<div>An example success alert with an icon</div>
</div>
<div
class="alert alert-warning d-flex align-items-center my-2"
role="alert"
>
<svg
 class="flex-shrink-0 me-2 svg-warning"
 xmlns="http://www.w3.org/2000/svg"
 enable-background="new 0 0 24 24"
 height="1.5rem"
 viewBox="0 0 24 24"
 width="1.5rem"
 fill="#000000"
>
 <g><rect fill="none" height="24" width="24" /></g>
 <g>
   <g>
     <g>
       <path
         d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z"
       />
       <polygon points="13,16 11,16 11,18 13,18" />
       <polygon points="13,10 11,10 11,15 13,15" />
     </g>
   </g>
 </g>
</svg>
<div>An example warning alert with an icon</div>
</div>
<div
class="alert alert-danger d-flex align-items-center my-2"
role="alert"
>
<svg
 class="flex-shrink-0 me-2 svg-danger"
 xmlns="http://www.w3.org/2000/svg"
 enable-background="new 0 0 24 24"
 height="1.5rem"
 viewBox="0 0 24 24"
 width="1.5rem"
 fill="#000000"
>
 <g><rect fill="none" height="24" width="24" /></g>
 <g>
   <g>
     <g>
       <path
         d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z"
       />
       <rect height="6" width="2" x="11" y="7" />
       <rect height="2" width="2" x="11" y="15" />
     </g>
   </g>
 </g>
</svg>
<div>An example danger alert with an icon</div>
</div> `;
export let alertTS13 = `      <div
id="rowA"
class="alert alert-img alert-primary alert-dismissible fase show rounded-pill flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3 avatar-rounded">
<img src="./assets/images/faces/3.jpg" alt="img" />
</div>
<div>A simple primary alert with image—check it out!</div>
<button
(click)="removeRow('rowA')"
type="button"
class="btn-close"
data-bs-dismiss="alert"
aria-label="Close"
>
<i class="bi bi-x"></i>
</button>
</div>
<div
id="rowB"
class="alert alert-img alert-secondary alert-dismissible fase show rounded-pill flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3 avatar-rounded">
<img src="./assets/images/faces/5.jpg" alt="img" />
</div>
<div>A simple secondary alert with image—check it out!</div>
<button
(click)="removeRow('rowB')"
type="button"
class="btn-close"
data-bs-dismiss="alert"
aria-label="Close"
>
<i class="bi bi-x"></i>
</button>
</div>
<div
id="rowC"
class="alert alert-img alert-warning alert-dismissible fase show rounded-pill flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3 avatar-rounded">
<img src="./assets/images/faces/8.jpg" alt="img" />
</div>
<div>A simple warning alert with image—check it out!</div>
<button
(click)="removeRow('rowC')"
type="button"
class="btn-close"
data-bs-dismiss="alert"
aria-label="Close"
>
<i class="bi bi-x"></i>
</button>
</div>
<div
id="rowD"
class="alert alert-img alert-danger alert-dismissible fase show rounded-pill flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3 avatar-rounded">
<img src="./assets/images/faces/11.jpg" alt="img" />
</div>
<div>A simple danger alert with image—check it out!</div>
<button
(click)="removeRow('rowD')"
type="button"
class="btn-close"
data-bs-dismiss="alert"
aria-label="Close"
>
<i class="bi bi-x"></i>
</button>
</div>
<div
id="rowE"
class="alert alert-img alert-info alert-dismissible fase show rounded-pill flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3 avatar-rounded">
<img src="./assets/images/faces/13.jpg" alt="img" />
</div>
<div>A simple info alert with image—check it out!</div>
<button
(click)="removeRow('rowE')"
type="button"
class="btn-close"
data-bs-dismiss="alert"
aria-label="Close"
>
<i class="bi bi-x"></i>
</button>
</div>
<div
id="rowF"
class="alert alert-img alert-light alert-dismissible fase show rounded-pill flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3 avatar-rounded">
<img src="./assets/images/faces/10.jpg" alt="img" />
</div>
<div>A simple light alert with image—check it out!</div>
<button
(click)="removeRow('rowF')"
type="button"
class="btn-close"
data-bs-dismiss="alert"
aria-label="Close"
>
<i class="bi bi-x"></i>
</button>
</div>
<div
id="rowG"
class="alert alert-img alert-dark alert-dismissible fase show rounded-pill flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3 avatar-rounded">
<img src="./assets/images/faces/15.jpg" alt="img" />
</div>
<div>A simple dark alert with image—check it out!</div>
<button
(click)="removeRow('rowG')"
type="button"
class="btn-close"
data-bs-dismiss="alert"
aria-label="Close"
>
<i class="bi bi-x text-muted"></i>
</button>
</div>`;
export let alertTS14 = `          <div
id="row1"
class="alert alert-img alert-primary alert-dismissible fase show flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-xs me-3">
<img src="./assets/images/faces/3.jpg" alt="img" />
</div>
<div>A simple primary alert with image—check it out!</div>
<button
(click)="removeRow('row1')"
type="button"
class="btn-close"
data-bs-dismiss="alert"
aria-label="Close"
>
<i class="bi bi-x"></i>
</button>
</div>
<div
id="row2"
class="alert alert-img alert-secondary alert-dismissible fase show flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3">
<img src="./assets/images/faces/5.jpg" alt="img" />
</div>
<div>A simple secondary alert with image—check it out!</div>
<button
(click)="removeRow('row2')"
type="button"
class="btn-close"
data-bs-dismiss="alert"
aria-label="Close"
>
<i class="bi bi-x"></i>
</button>
</div>
<div
id="row3"
class="alert alert-img alert-warning alert-dismissible fase show flex-wrap my-2"
role="alert"
>
<div class="avatar me-3">
<img src="./assets/images/faces/8.jpg" alt="img" />
</div>
<div>A simple warning alert with image—check it out!</div>
<button
(click)="removeRow('row3')"
type="button"
class="btn-close"
data-bs-dismiss="alert"
aria-label="Close"
>
<i class="bi bi-x"></i>
</button>
</div>
<div
id="row4"
class="alert alert-img alert-danger alert-dismissible fase show flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-md me-3">
<img src="./assets/images/faces/11.jpg" alt="img" />
</div>
<div>A simple danger alert with image—check it out!</div>
<button
(click)="removeRow('row4')"
type="button"
class="btn-close"
data-bs-dismiss="alert"
aria-label="Close"
>
<i class="bi bi-x"></i>
</button>
</div>
<div
id="row5"
class="alert alert-img alert-info alert-dismissible fase show flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-lg me-3">
<img src="./assets/images/faces/13.jpg" alt="img" />
</div>
<div>A simple info alert with image—check it out!</div>
<button
(click)="removeRow('row5')"
type="button"
class="btn-close"
data-bs-dismiss="alert"
aria-label="Close"
>
<i class="bi bi-x"></i>
</button>
</div>
<div
id="row6"
class="alert alert-img alert-dark alert-dismissible fase show flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-xl me-3">
<img src="./assets/images/faces/14.jpg" alt="img" />
</div>
<div>A simple info alert with image—check it out!</div>
<button
(click)="removeRow('row6')"
type="button"
class="btn-close"
data-bs-dismiss="alert"
aria-label="Close"
>
<i class="bi bi-x text-muted"></i>
</button>
</div>   `;
export let alertTS15 = ` @for (alert11 of contentsalerts; track alert11.type) {
  <div class="col-xl-6">
          <ngb-alert [type]="alert11.type" (closed)="close11(alert11)">
              
                  <div [class]="alert11.class">
                  <h6 class="aletr-heading mb-0 text-fixed-white"> {{ alert11.message}}</h6>
                 
              </div>  <hr class="my-0">
              <div class="p-3">
                  <p class="mb-0">We appreciate you to let us know the bug in the template and for warning us about future consequences <a href="javascript:void(0);" class="fw-medium text-decoration-underline">Visit for support for queries ?</a></p>
              </div>  </ngb-alert>
        </div>
     
      }   `;
export let alertTS16 = ` 
@for (alert of solidroundedAlerts; track alert; let i = $index) {
<div
  class="alert alert-{{
    alert.type
  }} rounded-pill alert-dismissible fade show mb-2"
>
  {{ alert.message }}
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close"
    (click)="solidroundedClose(i)"
  >
    <i class="bi bi-x"></i>
  </button>
</div>
}   `;
export let alertTS17 = ` <div class="row gy-3">
<div class="col-xl-6">
  <div
    class="alert alert-primary overflow-hidden p-0"
    role="alert"
    [(ngbCollapse)]="isClosedA"
  >
    <div
      class="p-3 bg-primary text-fixed-white d-flex justify-content-between"
    >
      <h6 class="alert-heading mb-0 text-fixed-white">
        Thank you for reporting this.
      </h6>
      <button
        type="button"
        class="btn-close p-0 text-fixed-white"
        data-bs-dismiss="alert"
        aria-label="Close"
        (click)="Closetoggle('A')"
        [attr.aria-expanded]="!isClosedA"
      >
        <i class="bi bi-x"></i>
      </button>
    </div>
    <hr class="my-0" />
    <div class="p-3">
      <p class="mb-0">
        We appreciate you to let us know the bug in the template and
        for warning us about future consequences
        <a
          href="javascript:void(0);"
          class="fw-semibold text-decoration-underline"
          >Visit for support for queries ?</a
        >
      </p>
    </div>
  </div>
</div>
<div class="col-xl-6">
  <div
    class="alert alert-secondary overflow-hidden p-0"
    role="alert"
    [(ngbCollapse)]="isClosedB"
  >
    <div
      class="p-3 bg-secondary text-fixed-white d-flex justify-content-between"
    >
      <h6 class="alert-heading mb-0 text-fixed-white">
        Thank you for reporting this.
      </h6>
      <button
        type="button"
        class="btn-close p-0 text-fixed-white"
        data-bs-dismiss="alert"
        aria-label="Close"
        (click)="Closetoggle('B')"
        [attr.aria-expanded]="!isClosedB"
      >
        <i class="bi bi-x"></i>
      </button>
    </div>
    <hr class="my-0" />
    <div class="p-3">
      <p class="mb-0">
        We appreciate you to let us know the bug in the template and
        for warning us about future consequences
        <a
          href="javascript:void(0);"
          class="fw-semibold text-decoration-underline"
          >Visit for support for queries ?</a
        >
      </p>
    </div>
  </div>
</div>
<div class="col-xl-6">
  <div
    class="alert alert-success overflow-hidden p-0"
    role="alert"
    [(ngbCollapse)]="isClosedC"
  >
    <div
      class="p-3 bg-success text-fixed-white d-flex justify-content-between"
    >
      <h6 class="alert-heading mb-0 text-fixed-white">
        Thank you for reporting this.
      </h6>
      <button
        type="button"
        class="btn-close p-0 text-fixed-white"
        data-bs-dismiss="alert"
        aria-label="Close"
        (click)="Closetoggle('C')"
        [attr.aria-expanded]="!isClosedC"
      >
        <i class="bi bi-x"></i>
      </button>
    </div>
    <hr class="my-0" />
    <div class="p-3">
      <p class="mb-0">
        We appreciate you to let us know the bug in the template and
        for warning us about future consequences
        <a
          href="javascript:void(0);"
          class="fw-semibold text-decoration-underline"
          >Visit for support for queries ?</a
        >
      </p>
    </div>
  </div>
</div>
<div class="col-xl-6">
  <div
    class="alert alert-warning overflow-hidden p-0"
    role="alert"
    [(ngbCollapse)]="isClosedD"
  >
    <div
      class="p-3 bg-warning text-fixed-white d-flex justify-content-between"
    >
      <h6 class="alert-heading mb-0 text-fixed-white">
        Thank you for reporting this.
      </h6>
      <button
        type="button"
        class="btn-close p-0 text-fixed-white"
        data-bs-dismiss="alert"
        aria-label="Close"
        (click)="Closetoggle('D')"
        [attr.aria-expanded]="!isClosedD"
      >
        <i class="bi bi-x"></i>
      </button>
    </div>
    <hr class="my-0" />
    <div class="p-3">
      <p class="mb-0">
        We appreciate you to let us know the bug in the template and
        for warning us about future consequences
        <a
          href="javascript:void(0);"
          class="fw-semibold text-decoration-underline"
          >Visit for support for queries ?</a
        >
      </p>
    </div>
  </div>
</div>
</div> `;