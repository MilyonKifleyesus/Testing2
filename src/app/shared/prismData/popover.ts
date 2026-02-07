export let popoverReuse = `
<button type="button"
      type="button"
      class="{{class}}"
      [ngbPopover]="content"
      [popoverTitle]="title"
      [placement]="placement"
      [popoverClass]="popoverClass"
      [autoClose]="autoClose"
      
    >
      {{ buttonText }}
    </button>`
export let popover1 = `<div class="btn-list">
<a tabindex="0" class="btn btn-outline-primary btn-wave" role="button" data-bs-toggle="popover"
    placement="top" popoverTitle="Popover on top"
    ngbPopover="And here's some amazing content. It's very engaging. Right?">Popover
    Top
</a>
<a tabindex="0" class="btn btn-outline-primary btn-wave" role="button" data-bs-toggle="popover"
    placement="end" popoverTitle="Popover Right"
    ngbPopover="And here's some amazing content. It's very engaging. Right?">Popover
    Right</a>
<a tabindex="0" class="btn btn-outline-primary btn-wave" role="button" data-bs-toggle="popover"
    placement="bottom" popoverTitle="Popover Bottom"
    ngbPopover="And here's some amazing content. It's very engaging. Right?">Popover
    Bottom</a>
<a tabindex="0" class="btn btn-outline-primary btn-wave" role="button" data-bs-toggle="popover"
    placement="start" popoverTitle="Popover Left"
    ngbPopover="And here's some amazing content. It's very engaging. Right?">Popover
    Left</a>
</div>`,
popover2 = `<div class="btn-list">
<button type="button" class="btn btn-outline-primary btn-wave" data-bs-toggle="popover"
    data-bs-placement="top" popoverClass="header-primary" popoverTitle="Color Header"
    ngbPopover="Popover with primary header.">
    Header Primary
</button>
<button type="button" class="btn btn-outline-secondary btn-wave" data-bs-toggle="popover"
    placement="end" popoverClass="header-secondary" popoverTitle="Color Header"
    ngbPopover="Popover with secondary header.">
    Header Secondary
</button>
<button type="button" class="btn btn-outline-info btn-wave" placement="start" placement="bottom"
    popoverClass="header-info" popoverTitle="Color Header" ngbPopover="Popover with info header.">
    Header Info
</button>
<button type="button" class="btn btn-outline-warning btn-wave" data-bs-toggle="popover"
    placement="start" popoverClass="header-warning" popoverTitle="Color Header"
    ngbPopover="Popover with warning header.">
    Header Warning
</button>
<button type="button" class="btn btn-outline-success btn-wave" data-bs-toggle="popover" placement="top"
    popoverClass="header-success" popoverTitle="Color Header" ngbPopover="Popover with success header.">
    Header Success
</button>
<button type="button" class="btn btn-outline-danger btn-wave" data-bs-toggle="popover" placement="top"
    popoverClass="header-danger" popoverTitle="Color Header" ngbPopover="Popover with danger header.">
    Header Danger
</button>
</div>`,
popover3 = `<div class="btn-list">
<button type="button" class="btn btn-primary btn-wave" placement="top" popoverClass="popover-primary"
    popoverTitle="Color Background" ngbPopover="Popover with primary background.">
    Primary
</button>
<button type="button" class="btn btn-secondary btn-wave" placement="start"
    popoverClass="popover-secondary" popoverTitle="Color Background"
    ngbPopover="Popover with secondary background.">
    Secondary
</button>
<button type="button" class="btn btn-info btn-wave" data-bs-toggle="popover" placement="bottom"
    popoverClass="popover-info" popoverTitle="Color Background"
    ngbPopover="Popover with info background.">
    Info
</button>
<button type="button" class="btn btn-warning btn-wave" data-bs-toggle="popover" placement="start"
    popoverClass="popover-warning" popoverTitle="Color Background"
    ngbPopover="Popover with warning background.">
    Warning
</button>
<button type="button" class="btn btn-success btn-wave" data-bs-toggle="popover" placement="top"
    popoverClass="popover-success" popoverTitle="Color Background"
    ngbPopover="Popover with success background.">
    Success
</button>
<button type="button" class="btn btn-danger btn-wave" data-bs-toggle="popover" placement="end"
    popoverClass="popover-danger" popoverTitle="Color Background"
    ngbPopover="Popover with danger background.">
    Danger
</button>
<button type="button" class="btn btn-teal btn-wave" data-bs-toggle="popover" placement="bottom"
    popoverClass="popover-teal" popoverTitle="Color Background"
    ngbPopover="Popover with teal background.">
    Teal
</button>
<button type="button" class="btn btn-purple btn-wave" data-bs-toggle="popover" placement="start"
    popoverClass="popover-purple" popoverTitle="Color Background"
    ngbPopover="Popover with purple background.">
    Purple
</button>
</div>`,
popover4 = `<div class="btn-list">
<button type="button" class="btn btn-primary-light btn-wave" data-bs-toggle="popover" placement="top"
    popoverClass="popover-primary-light" popoverTitle="Light Background"
    ngbPopover="Popover with light primary background.">
    Primary
</button>
<button type="button" class="btn btn-secondary-light btn-wave" data-bs-toggle="popover" placement="end"
    popoverClass="popover-secondary-light" popoverTitle="Light Background"
    ngbPopover="Popover with light secondary background.">
    Secondary
</button>
<button type="button" class="btn btn-info-light btn-wave" data-bs-toggle="popover" placement="bottom"
    popoverClass="popover-info-light" popoverTitle="Light Background"
    ngbPopover="Popover with light info background.">
    Info
</button>
<button type="button" class="btn btn-warning-light btn-wave" data-bs-toggle="popover" placement="start"
    popoverClass="popover-warning-light" popoverTitle="Light Background"
    ngbPopover="Popover with light warning background.">
    Warning
</button>
<button type="button" class="btn btn-success-light btn-wave" data-bs-toggle="popover" placement="top"
    popoverClass="popover-success-light" popoverTitle="Light Background"
    ngbPopover="Popover with light success background.">
    Success
</button>
<button type="button" class="btn btn-danger-light btn-wave" data-bs-toggle="popover" placement="end"
    popoverClass="popover-danger-light" popoverTitle="Light Background"
    ngbPopover="Popover with light danger background.">
    Danger
</button>
<button type="button" class="btn btn-teal-light btn-wave" data-bs-toggle="popover"
    data-bs-placement="bottom" popoverClass="popover-teal-light" popoverTitle="Light Background"
    ngbPopover="Popover with light teal background.">
    Teal
</button>
<button type="button" class="btn btn-purple-light btn-wave" data-bs-toggle="popover" placement="start"
    popoverClass="popover-purple-light" popoverTitle="Light Background"
    ngbPopover="Popover with light purple background.">
    Purple
</button>
</div>`,
popover5 = `<a tabindex="0" class="btn btn-primary m-1" role="button" data-bs-toggle="popover" triggers="focus"
placement="top" popoverTitle="Dismissible popover"
ngbPopover="And here's some amazing content. It's very engaging. Right?">Popover Dismiss
</a>
<a tabindex="0" class="btn btn-secondary m-1" role="button" data-bs-toggle="popover" triggers="focus"
placement="end" popoverTitle="Dismissible popover"
ngbPopover="And here's some amazing content. It's very engaging. Right?">Popover Dismiss
</a>
<a tabindex="0" class="btn btn-info m-1" role="button" data-bs-toggle="popover" triggers="focus"
placement="bottom" popoverTitle="Dismissible popover"
ngbPopover="And here's some amazing content. It's very engaging. Right?">Popover Dismiss
</a>
<a tabindex="0" class="btn btn-warning m-1" role="button" data-bs-toggle="popover" triggers="focus"
placement="start" popoverTitle="Dismissible popover"
ngbPopover="And here's some amazing content. It's very engaging. Right?">Popover Dismiss
</a>`,
popover6 = `<span class="d-inline-block" tabindex="0" data-bs-toggle="popover" triggers="hover focus" placement="end"
ngbPopover="Disabled popover">
<button class="btn btn-primary" type="button" disabled>Disabled
    button</button>
</span>`,
popover7 = `<a class="me-4 svg-primary" href="javascript:void(0)" data-bs-toggle="popover" placement="top"
popoverClass="popover-primary only-body"
ngbPopover="This popover is used to provide details about this icon.">
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path
        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
</svg>
</a>
<a class="me-4 svg-secondary" href="javascript:void(0)" data-bs-toggle="popover" placement="start"
popoverClass="popover-secondary only-body"
ngbPopover="This popover is used to provide information about this icon.">
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path
        d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
</svg>
</a>`;