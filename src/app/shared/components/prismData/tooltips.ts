export
let tooltips1 = `<div class="btn-list">
<button type="button" class="btn btn-primary btn-wave" data-bs-toggle="tooltip" placement="top"
    ngbTooltip="Tooltip on top">
    Tooltip on top
</button>
<button type="button" class="btn btn-primary btn-wave" data-bs-toggle="tooltip" placement="end"
    ngbTooltip="Tooltip on right">
    Tooltip on right
</button>
<button type="button" class="btn btn-primary btn-wave" data-bs-toggle="tooltip" placement="bottom"
    ngbTooltip="Tooltip on bottom">
    Tooltip on bottom
</button>
<button type="button" class="btn btn-primary btn-wave" data-bs-toggle="tooltip" placement="start"
    ngbTooltip="Tooltip on left">
    Tooltip on left
</button>
</div>`,
tooltips2 = `<div class="btn-list">
<button type="button" class="btn btn-primary btn-wave" data-bs-toggle="tooltip"
    tooltipClass="tooltip-primary" placement="top" ngbTooltip="Primary Tooltip">
    Primary Tooltip
</button>
<button type="button" class="btn btn-secondary btn-wave" data-bs-toggle="tooltip"
    tooltipClass="tooltip-secondary" placement="end" ngbTooltip="Secondary Tooltip">
    Secondary Tooltip
</button>

<button type="button" class="btn btn-warning btn-wave" data-bs-toggle="tooltip"
    tooltipClass="tooltip-warning" placement="bottom" ngbTooltip="Warning Tooltip">
    Warning Tooltip
</button>
<button type="button" class="btn btn-info btn-wave" data-bs-toggle="tooltip" tooltipClass="tooltip-info"
    placement="start" ngbTooltip="Info Tooltip">
    Info Tooltip
</button>
<button type="button" class="btn btn-success btn-wave" data-bs-toggle="tooltip"
    tooltipClass="tooltip-success" placement="top" ngbTooltip="Success Tooltip">
    Success Tooltip
</button>
<button type="button" class="btn btn-danger btn-wave" data-bs-toggle="tooltip"
    tooltipClass="tooltip-danger" placement="bottom" ngbTooltip="Danger Tooltip">
    Danger Tooltip
</button>
<button type="button" class="btn btn-light btn-wave" data-bs-toggle="tooltip"
    tooltipClass="tooltip-light" placement="bottom" ngbTooltip="Light Tooltip">
    Light Tooltip
</button>
<button type="button" class="btn btn-dark text-white btn-wave" data-bs-toggle="tooltip"
    tooltipClass="tooltip-dark" placement="bottom" ngbTooltip="Dark Tooltip">
    Dark Tooltip
</button>
</div>`,
tooltips3 = ` <p class="text-muted mb-0">
Hover on the link to view the <a href="javascript:void(0);" data-bs-toggle="tooltip"
    tooltipClass="tooltip-primary" ngbTooltip="Link Tooltip" class="text-primary">Tooltip</a>
</p>`,
tooltips4 = `<a href="javascript:void(0);" data-bs-toggle="tooltip" ngbTooltip="Home" tooltipClass="tooltip-primary"
class="me-3 svg-primary">
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
</svg>
</a>
<a href="javascript:void(0);" data-bs-toggle="tooltip" ngbTooltip="Message" tooltipClass="tooltip-secondary"
class="me-3 svg-secondary">
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path
        d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
</svg>
</a>
<a href="javascript:void(0);" data-bs-toggle="tooltip" ngbTooltip="Add User" tooltipClass="tooltip-warning"
class="me-3 svg-warning">
<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px"
    viewBox="0 0 24 24" width="24px" fill="#000000">
    <g>
        <rect fill="none" height="24" width="24" />
    </g>
    <g>
        <path
            d="M20,9V6h-2v3h-3v2h3v3h2v-3h3V9H20z M9,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S5,5.79,5,8C5,10.21,6.79,12,9,12z M9,6 c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2S7,9.1,7,8C7,6.9,7.9,6,9,6z M15.39,14.56C13.71,13.7,11.53,13,9,13c-2.53,0-4.71,0.7-6.39,1.56 C1.61,15.07,1,16.1,1,17.22V20h16v-2.78C17,16.1,16.39,15.07,15.39,14.56z M15,18H3v-0.78c0-0.38,0.2-0.72,0.52-0.88 C4.71,15.73,6.63,15,9,15c2.37,0,4.29,0.73,5.48,1.34C14.8,16.5,15,16.84,15,17.22V18z" />
    </g>
</svg>
</a>
<a href="javascript:void(0);" data-bs-toggle="tooltip" ngbTooltip="Send File" tooltipClass="tooltip-info"
class="me-3 svg-info">
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path
        d="M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z" />
</svg>
</a>
<a href="javascript:void(0);" data-bs-toggle="tooltip" ngbTooltip="Action" tooltipClass="tooltip-success"
class="me-3 svg-success">
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path
        d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
</svg>
</a>`,
tooltips5 = `<span class="d-inline-block" tabindex="0" data-bs-toggle="tooltip" ngbTooltip="Disabled tooltip">
<button class="btn btn-primary" type="button" disabled="">Disabled
    button
</button>
</span>`,
tooltips6 = `<a href="javascript:void(0);" data-bs-toggle="tooltip" ngbTooltip="Alex Carey"
tooltipClass="tooltip-primary" class="avatar avatar-md me-2 online avatar-rounded">
<img src="./assets/images/faces/12.jpg" alt="img">
</a>
<a href="javascript:void(0);" data-bs-toggle="tooltip" ngbTooltip="Marina Kai"
tooltipClass="tooltip-primary" class="avatar avatar-lg me-2 online avatar-rounded">
<img src="./assets/images/faces/3.jpg" alt="img">
</a>
<a href="javascript:void(0);" data-bs-toggle="tooltip" ngbTooltip="Tim Cook" tooltipClass="tooltip-primary"
class="avatar avatar-xl me-2 offline avatar-rounded">
<img src="./assets/images/faces/15.jpg" alt="img">
</a>`;