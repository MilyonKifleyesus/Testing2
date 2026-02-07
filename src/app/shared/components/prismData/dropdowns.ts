export let dropdownsTS = ` <div class="btn-list d-flex align-items-center flex-wrap">
<div class="dropdown" ngbDropdown >
    <button class="btn btn-primary dropdown-toggle" ngbDropdownToggle type="button"
        id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown button
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu  aria-labelledby="dropdownMenuButton1">
        <li><a  ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    </ul>
</div>
<div class="dropdown" ngbDropdown>
    <a class="btn btn-secondary dropdown-toggle"ngbDropdownToggle  href="javascript:void(0);" role="button"
        id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown link
    </a>
    <ul class="dropdown-menu" ngbDropdownMenu aria-labelledby="dropdownMenuLink">
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    </ul>
</div>
</div>`;
export let dropdownsReuse=`
<div [class]="Customclass"    ngbDropdown>
      @if(splitbutton){
        <button type="button" class="{{splitbuttonClass}}">{{splitTitle}}</button>
      }
        <button ngbDropdownToggle class="btn {{class}}" [id]="Id" > {{title}}  
          @if(iconPosition === 'before'){
              <ng-container>
               @if(Imagetag){
                   <img  [src]="Imagesrc" [alt]="Imagename" [class]="Imageclass">
               }
               @if(Icon){
                   <i  [class]="IconClass"></i>
               }
                 {{ Toggletext }}
               </ng-container>
          } 
          @if(iconPosition !== 'before'){
  
              <ng-container>
                {{ Toggletext }}
                @if(Imagetag){
                   <img  [src]="Imagesrc" [alt]="Imagename" [class]="Imageclass">
               }
               @if(Icon){
                   <i  [class]="IconClass"></i>
               }
              </ng-container>
          }
          @if(Arrowicon){
  
              <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
          }
          @if(Svg){ 
              <svg  xmlns="http://www.w3.org/2000/svg" [class]="SvgClass" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="Svgicon"/>
              </svg>
          }
          @if(Badgetag){
  
              <span class="badge" >{{ Badgetext }}</span>
          }
          @if(splitbuttonEnd){
            <button type="button" class="{{splitbuttonClass}}">{{splitTitle}}</button>
          }
        </button>   
      <ul [class]="Menuclass" ngbDropdownMenu [attr.aria-labelledby]="Menulabel">
        <ng-content></ng-content>
      </ul>
  </div>
  

  
`
export let dropdownsTS1 = `  <div class="btn-list">
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-primary dropdown-toggle"
    ngbDropdownToggle  data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu"ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem  class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-secondary dropdown-toggle" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-success dropdown-toggle" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu"ngbDropdownMenu >
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-info dropdown-toggle" ngbDropdownToggle data-bs-toggle="dropdown"
        aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-warning dropdown-toggle" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-danger dropdown-toggle" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
</div>`;
export let dropdownsTS2 = `  <div class="btn-list">
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-primary dropdown-toggle  rounded-pill"
    ngbDropdownToggle   data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-secondary dropdown-toggle rounded-pill"
    ngbDropdownToggle   data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-success dropdown-toggle rounded-pill" 
     ngbDropdownToggle  data-bs-toggle="dropdown"
        aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem  class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-info dropdown-toggle rounded-pill" 
     ngbDropdownToggle  data-bs-toggle="dropdown"
        aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem  class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-warning dropdown-toggle rounded-pill"
    ngbDropdownToggle   data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-danger dropdown-toggle rounded-pill"
    ngbDropdownToggle   data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
</div>`;
export let dropdownsTS3 = ` <div class="btn-list">
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-outline-primary dropdown-toggle"
    ngbDropdownToggle  data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-outline-secondary dropdown-toggle"
    ngbDropdownToggle   data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-outline-success dropdown-toggle"
    ngbDropdownToggle   data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-outline-info dropdown-toggle"  ngbDropdownToggle data-bs-toggle="dropdown"
        aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group"ngbDropdown >
    <button type="button" class="btn btn-outline-warning dropdown-toggle"
    ngbDropdownToggle   data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-outline-danger dropdown-toggle"
    ngbDropdownToggle  data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
</div>`;
export let dropdownsTS4 = `  <div class="btn-list">
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-outline-primary dropdown-toggle rounded-pill"
    ngbDropdownToggle  data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-outline-secondary dropdown-toggle rounded-pill"
    ngbDropdownToggle   data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-outline-success dropdown-toggle rounded-pill"
    ngbDropdownToggle   data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-outline-info dropdown-toggle rounded-pill" ngbDropdownToggle data-bs-toggle="dropdown"
        aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-outline-warning dropdown-toggle rounded-pill"
    ngbDropdownToggle   data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-outline-danger dropdown-toggle rounded-pill"
    ngbDropdownToggle  data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
</div>`;
export let dropdownsTS5 = `<div class="btn-group my-1" ngbDropdown>
<button type="button" class="btn btn-primary">Action</button>
<button type="button"
    class="btn btn-primary dropdown-toggle dropdown-toggle-split me-2" ngbDropdownToggle
    data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
</button>
<ul class="dropdown-menu" ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    <li>
        <hr class="dropdown-divider">
    </li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
</ul>
</div>
<div class="btn-group my-1" ngbDropdown>
<button type="button" class="btn btn-secondary">Action</button>
<button type="button"
    class="btn btn-secondary dropdown-toggle dropdown-toggle-split me-2"
    ngbDropdownToggle  data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
</button>
<ul class="dropdown-menu" ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    <li>
        <hr class="dropdown-divider">
    </li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
</ul>
</div>
<div class="btn-group my-1" ngbDropdown>
<button type="button" class="btn btn-info">Action</button>
<button type="button"
    class="btn btn-info dropdown-toggle dropdown-toggle-split me-2"
    ngbDropdownToggle data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
</button>
<ul class="dropdown-menu" ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    <li>
        <hr class="dropdown-divider">
    </li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
</ul>
</div>
<div class="btn-group my-1" ngbDropdown>
<button type="button" class="btn btn-success">Action</button>
<button type="button"
    class="btn btn-success dropdown-toggle dropdown-toggle-split me-2"
    ngbDropdownToggle data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
</button>
<ul class="dropdown-menu" ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    <li>
        <hr class="dropdown-divider">
    </li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
</ul>
</div>
<div class="btn-group my-1" ngbDropdown>
<button type="button" class="btn btn-warning">Action</button>
<button type="button"
    class="btn btn-warning dropdown-toggle dropdown-toggle-split me-2"
    ngbDropdownToggle data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
</button>
<ul class="dropdown-menu" ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    <li>
        <hr class="dropdown-divider">
    </li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
</ul>
</div>
<div class="btn-group my-1" ngbDropdown>
<button type="button" class="btn btn-danger">Action</button>
<button type="button"
    class="btn btn-danger dropdown-toggle dropdown-toggle-split me-2"
    ngbDropdownToggle  data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
</button>
<ul class="dropdown-menu" ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    <li>
        <hr class="dropdown-divider">
    </li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
</ul>
</div>`;
export let dropdownsTS6 = ` <div class="btn-group my-1 me-2" ngbDropdown>
<button class="btn btn-primary btn-lg dropdown-toggle" type="button"
ngbDropdownToggle data-bs-toggle="dropdown" aria-expanded="false">
    Large button
</button>
<ul class="dropdown-menu" ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    <li>
        <hr class="dropdown-divider">
    </li>
    <li><a  ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
</ul>
</div>
<div class="btn-group my-1 me-2" ngbDropdown>
<button class="btn btn-light btn-lg" type="button">
    Large split button
</button>
<button type="button"
    class="btn btn-lg btn-light dropdown-toggle dropdown-toggle-split"
    ngbDropdownToggle   data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
</button>
<ul class="dropdown-menu" ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    <li>
        <hr class="dropdown-divider">
    </li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
</ul>
</div>
<div class="btn-group my-1 me-2" ngbDropdown>
<button class="btn btn-primary btn-sm dropdown-toggle" type="button"
ngbDropdownToggle  data-bs-toggle="dropdown" aria-expanded="false">
    Small button
</button>
<ul class="dropdown-menu" ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    <li>
        <hr class="dropdown-divider">
    </li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
</ul>
</div>
<div class="btn-group my-1" ngbDropdown>
<button class="btn btn-light btn-sm" type="button">
    Small split button
</button>
<button type="button"
    class="btn btn-sm btn-light dropdown-toggle dropdown-toggle-split"
    ngbDropdownToggle   data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
</button>
<ul class="dropdown-menu" ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    <li>
        <hr class="dropdown-divider">
    </li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
</ul>
</div>`;
export let dropdownsTS7 = `  <div ngbDropdown placement="top-end" class="btn-group dropup my-1">
<button type="button" class="btn btn-primary dropdown-toggle"
ngbDropdownToggle   data-bs-toggle="dropdown" aria-expanded="false">
    Dropup
</button>
<ul class="dropdown-menu" ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    <li>
        <hr class="dropdown-divider">
    </li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
</ul>
</div>
<div class="btn-group dropup my-1" ngbDropdown placement="top-end">
<button type="button" class="btn btn-info">
    Split dropup
</button>
<button type="button"
    class="btn btn-info dropdown-toggle dropdown-toggle-split"
    ngbDropdownToggle   data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
</button>
<ul class="dropdown-menu"  ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    <li>
        <hr  class="dropdown-divider">
    </li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
</ul>
</div>`;
export let dropdownsTS8 = `  <div class="btn-group dropend my-1" ngbDropdown placement="right-top">
<button type="button" class="btn btn-primary dropdown-toggle"
ngbDropdownToggle   data-bs-toggle="dropdown" aria-expanded="false">
    Dropright
</button>
<ul class="dropdown-menu" ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    <li>
        <hr class="dropdown-divider">
    </li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
</ul>
</div>
<div class="btn-group dropend my-1" ngbDropdown placement="right-top">
<button type="button" class="btn btn-info">
    Split dropend
</button>
<button type="button"
    class="btn btn-info dropdown-toggle dropdown-toggle-split"
    ngbDropdownToggle  data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropright</span>
</button>
<ul class="dropdown-menu" ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    <li>
        <hr class="dropdown-divider">
    </li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
</ul>
</div>`;
export let dropdownsTS9 = `  <div ngbDropdown>  
<button type="button" class="btn btn-primary dropdown-toggle"
ngbDropdownToggle  data-bs-toggle="dropdown" aria-expanded="false">
    Dropstart
</button>
<ul class="dropdown-menu" ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Regular link</a></li>
    <li><a ngbDropdownItem class="dropdown-item active" href="javascript:void(0);" aria-current="true">Active
            link</a>
    </li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another link</a></li>
</ul>
</div>`;
export let dropdownsTS10 = `<div class="btn-group dropstart my-1"  ngbDropdown placement="left-top">
<button type="button" class="btn btn-primary dropdown-toggle"
ngbDropdownToggle  data-bs-toggle="dropdown" aria-expanded="false">
    Dropleft
</button>
<ul class="dropdown-menu" ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    <li>
        <hr class="dropdown-divider">
    </li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
</ul>
</div>
<div class="btn-group">
<div class="btn-group dropstart my-1" ngbDropdown placement="left-top" role="group">
    <button type="button"
        class="btn btn-info dropdown-toggle dropdown-toggle-split"
        ngbDropdownToggle  data-bs-toggle="dropdown" aria-expanded="false">
        <span class="visually-hidden">Toggle Dropstart</span>
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
<button type="button" class="btn btn-info my-1">
    Split dropleft
</button>
</div>`;
export let dropdownsTS11 = `  <div ngbDropdown>  
<button type="button" class="btn btn-primary dropdown-toggle"
ngbDropdownToggle  data-bs-toggle="dropdown" aria-expanded="false">
    Dropstart
</button>
<ul class="dropdown-menu" ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Regular link</a></li>
    <li><a ngbDropdownItem class="dropdown-item active" href="javascript:void(0);" aria-current="true">Active
            link</a>
    </li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another link</a></li>
</ul>
</div>`;
export let dropdownsTS12 = ` <div class="btn-list">
<div class="btn-group" ngbDropdown>
    <button class="btn btn-primary dropdown-toggle" type="button"
        id="defaultDropdown" data-bs-toggle="dropdown" ngbDropdownToggle data-bs-auto-close="true"
        aria-expanded="false">
        Default dropdown
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu aria-labelledby="defaultDropdown">
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button class="btn btn-secondary dropdown-toggle" type="button"
        id="dropdownMenuClickableOutside" ngbDropdownToggle data-bs-toggle="dropdown"
        data-bs-auto-close="inside" aria-expanded="false">
        Clickable outside
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu aria-labelledby="dropdownMenuClickableOutside">
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button class="btn btn-info dropdown-toggle" type="button"
        id="dropdownMenuClickableInside" ngbDropdownToggle data-bs-toggle="dropdown"
        data-bs-auto-close="outside" aria-expanded="false">
        Clickable inside
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu aria-labelledby="dropdownMenuClickableInside">
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button class="btn btn-warning dropdown-toggle" type="button"
        id="dropdownMenuClickable"  ngbDropdownToggle data-bs-toggle="dropdown"
        data-bs-auto-close="false" aria-expanded="false">
        Manual close
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu aria-labelledby="dropdownMenuClickable">
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
    </ul>
</div>
</div>`;
export let dropdownsTS13 = ` <div ngbDropdown>
<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2"
    ngbDropdownToggle  data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown
    </button>
    <div class="dropdown-menu" ngbDropdownMenu>
        <form class="px-4 py-3">
            <div class="mb-3">
                <label for="exampleDropdownFormEmail1" class="form-label">Email
                    address</label>
                <input type="email" class="form-control" id="exampleDropdownFormEmail1"
                    placeholder="email@example.com">
            </div>
            <div class="mb-3">
                <label for="exampleDropdownFormPassword1"
                    class="form-label">Password</label>
                <input type="password" class="form-control"
                    id="exampleDropdownFormPassword1" placeholder="Password">
            </div>
            <div class="mb-3">
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="dropdownCheck">
                    <label class="form-check-label" for="dropdownCheck">
                        Remember me
                    </label>
                </div>
            </div>
            <button class="btn btn-primary">Sign in</button>
        </form>
        <div class="dropdown-divider"></div>
        <a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">New around here? Sign up</a>
        <a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Forgot password?</a>
    </div>
</div>`;
export let dropdownsTS14 = `<p class="card-title mb-3">Use <code>.dropdown-center</code> on the parent element.
</p>
<div ngbDropdown class="dropdown-center">
    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownCenterBtn" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        Centered dropdown
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu aria-labelledby="dropdownCenterBtn">
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action two</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action three</a></li>
    </ul>
</div>`;
export let dropdownsTS15 = `<p class="card-title mb-3">Use <code>.dropup-center</code>
on the parent element.
</p>
<div class="dropup-center dropup" ngbDropdown placement="top-end">
<button class="btn btn-secondary dropdown-toggle" type="button" id="dropupCenterBtn" ngbDropdownToggle
    data-bs-toggle="dropdown" aria-expanded="false">
    Centered dropup
</button>
<ul class="dropdown-menu" ngbDropdownMenu aria-labelledby="dropupCenterBtn">
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action two</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action three</a></li>
</ul>
</div>`;
export let dropdownsTS16 = `<p class="card-title mb-3">You can use <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code> as
dropdown items.</p>
<div ngbDropdown class="dropdown">
<button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenu1" ngbDropdownToggle
    data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
</button>
<ul class="dropdown-menu" ngbDropdownMenu aria-labelledby="dropdownMenu1">
    <li><button ngbDropdownItem class="dropdown-item" type="button">Action</button></li>
    <li><button ngbDropdownItem class="dropdown-item" type="button">Another action</button>
    </li>
    <li><button ngbDropdownItem class="dropdown-item" type="button">Something else
            here</button>
    </li>
</ul>
</div>`;
export let dropdownsTS17 = `<p class="card-title mb-3">Use <code>data-bs-offset</code> or <code>data-bs-reference</code> to change
the location of the dropdown.</p>
<div class="d-flex align-items-center">
<div class="dropdown me-1" ngbDropdown>
    <button type="button" class="btn btn-primary dropdown-toggle" id="dropdownMenuOffset"
        data-bs-toggle="dropdown" aria-expanded="false" ngbDropdownToggle data-bs-offset="10,20">
        Offset
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu aria-labelledby="dropdownMenuOffset">
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a>
        </li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-info">Reference</button>
    <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split"
        id="dropdownMenuReference" data-bs-toggle="dropdown" aria-expanded="false" ngbDropdownToggle
        data-bs-reference="parent">
        <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu aria-labelledby="dropdownMenuReference">
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a>
        </li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
    </ul>
</div>
</div>`;
export let dropdownsTS18 = `<div class="btn-list">
<div class="btn-group" ngbDropdown>
    <button class="btn btn-primary dropdown-toggle mb-0" type="button" id="dropdownMenuButton"
        ngbDropdownToggle data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu aria-labelledby="dropdownMenuButton">
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-secondary dropdown-toggle mb-0" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        Right-aligned menu
    </button>
    <ul class="dropdown-menu  dropdown-menu-end" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-info dropdown-toggle mb-0" ngbDropdownToggle
        data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
        Left-aligned, right-aligned lg
    </button>
    <ul class="dropdown-menu dropdown-menu-lg-end" ngbDropdownMenu placement="left-aligned">
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-warning dropdown-toggle mb-0" ngbDropdownToggle
        data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
        Right-aligned, left-aligned lg
    </button>
    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
    </ul>
</div>
<div class="btn-group dropstart" ngbDropdown placement="left-top">
    <button type="button" class="btn btn-success dropdown-toggle mb-0" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        Dropstart
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
    </ul>
</div>
<div class="btn-group dropend" ngbDropdown placement="right-top">
    <button type="button" class="btn btn-danger dropdown-toggle mb-0" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        Dropend
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
    </ul>
</div>
<div class="btn-group dropup" ngbDropdown placement="top-end" aria-placeholder="">
    <button type="button" class="btn btn-teal dropdown-toggle mb-0" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        Dropup
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
    </ul>
</div>
</div>`;
export let dropdownsTS19 = `<div class="dropdown" ngbDropdown>
<button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton3" ngbDropdownToggle
    data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
</button>
<ul class="dropdown-menu dropdown-menu-dark" ngbDropdownMenu>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
</ul>
</div>`;
export let dropdownsTS20 = `<div class="btn-group" ngbDropdown>
<button type="button" class="btn btn-primary dropdown-toggle" ngbDropdownToggle
    data-bs-toggle="dropdown" aria-expanded="false">
    Right-aligned menu example
</button>
<ul class="dropdown-menu dropdown-menu-end" ngbDropdownMenu>
    <li><button ngbDropdownItem class="dropdown-item" type="button">Action</button>
    </li>
    <li><button ngbDropdownItem class="dropdown-item" type="button">Another
            action</button></li>
    <li><button ngbDropdownItem class="dropdown-item" type="button">Something else
            here</button>
    </li>
</ul>
</div>`;
export let dropdownsTS21 = `<div class="btn-group" ngbDropdown>
<button type="button" class="btn btn-secondary dropdown-toggle text-wrap" ngbDropdownToggle
    data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
    Left-aligned but right aligned when large screen
</button>
<ul class="dropdown-menu dropdown-menu-lg-end" ngbDropdownMenu>
    <li><button ngbDropdownItem class="dropdown-item" type="button">Action</button>
    </li>
    <li><button ngbDropdownItem class="dropdown-item" type="button">Another
            action</button></li>
    <li><button ngbDropdownItem class="dropdown-item" type="button">Something else
            here</button>
    </li>
</ul>
</div>`;
export let dropdownsTS22 = `<div class="btn-group" ngbDropdown>
<button type="button" class="btn btn-info dropdown-toggle text-wrap" ngbDropdownToggle
    data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
    Left-aligned but right aligned when large screen
</button>
<ul class="dropdown-menu dropdown-menu-lg-start" ngbDropdownMenu>
    <li><button ngbDropdownItem class="dropdown-item" type="button">Action</button>
    </li>
    <li><button ngbDropdownItem class="dropdown-item" type="button">Another
            action</button></li>
    <li><button ngbDropdownItem class="dropdown-item" type="button">Something else
            here</button></li>
</ul>
</div>`;
export let dropdownsTS23 = `<div class="btn-list">
<div class="btn-group" ngbDropdown>
    <button class="btn btn-primary dropdown-toggle" type="button" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        Primary
    </button>
    <ul class="dropdown-menu dropdown-menu-primary" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a>
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else
                here</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button class="btn btn-secondary dropdown-toggle" type="button" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        secondary
    </button>
    <ul class="dropdown-menu dropdown-menu-secondary" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a>
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else
                here</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button class="btn btn-warning dropdown-toggle" type="button" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        warning
    </button>
    <ul class="dropdown-menu dropmenu-item-warning" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item active" href="javascript:void(0);">Active</a>
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a>
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else
                here</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button class="btn btn-info dropdown-toggle" type="button" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        info
    </button>
    <ul class="dropdown-menu dropmenu-item-info" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item active" href="javascript:void(0);">Active</a>
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a>
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else
                here</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button class="btn btn-success-light dropdown-toggle" type="button" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        success
    </button>
    <ul class="dropdown-menu dropmenu-light-success" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a>
        </li>
        <li><a ngbDropdownItem class="dropdown-item active" href="javascript:void(0);">Active</a>
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else
                here</a></li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button class="btn btn-danger-light dropdown-toggle" type="button" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        danger
    </button>
    <ul class="dropdown-menu dropmenu-light-danger" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a>
        </li>
        <li><a ngbDropdownItem class="dropdown-item active" href="javascript:void(0);">Active</a>
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else
                here</a></li>
    </ul>
</div>
</div>`;
export let dropdownsTS24 = `<div class="btn-list">
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-primary-ghost dropdown-toggle" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        Primary
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a>
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else
                here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a>
        </li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-secondary-ghost dropdown-toggle" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        Secondary
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a>
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else
                here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a>
        </li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-success-ghost dropdown-toggle" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        Success
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a>
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else
                here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a>
        </li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-info-ghost dropdown-toggle" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        Info
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a>
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else
                here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a>
        </li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-warning-ghost dropdown-toggle" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        Warning
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a>
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else
                here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a>
        </li>
    </ul>
</div>
<div class="btn-group" ngbDropdown>
    <button type="button" class="btn btn-danger-ghost dropdown-toggle" ngbDropdownToggle
        data-bs-toggle="dropdown" aria-expanded="false">
        Danger
    </button>
    <ul class="dropdown-menu" ngbDropdownMenu>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Action</a></li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Another action</a>
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Something else
                here</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a ngbDropdownItem class="dropdown-item" href="javascript:void(0);">Separated link</a>
        </li>
    </ul>
</div>
</div>`;
export let dropdownsTS25 = `<p class="card-title mb-3">Use <code>.dropdown-item-text.</code> to create non-interactive dropdown
items.</p>
<div class="bd-example">
<ul class="dropdown-menu">
    <li><span class="dropdown-item-text">Dropdown item text</span>
    </li>
    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a>
    </li>
</ul>
</div>`;
export let dropdownsTS26 = `<p class="card-titlte mb-3">Add a <code>.dropdown-header</code> to label sections of actions in any
dropdown menu.</p>
<div class="bd-example">
<ul class="dropdown-menu">
    <li>
        <h6 class="dropdown-header">Dropdown header</h6>
    </li>
    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
</ul>
</div>`;
export let dropdownsTS27 = `<div class="bd-example">
<ul class="dropdown-menu">
    <li><a class="dropdown-header" href="javascript:void(0);">Heading</a></li>
    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
    <li>
        <hr class="dropdown-divider">
    </li>
    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
</ul>
</div>`;
export let dropdownsTS28 = `<div class="bd-example">
<div class="dropdown-menu p-4 text-muted" style="max-width: 200px;">
    <p>
        Some example text that's free-flowing within the dropdown menu.
    </p>
    <p class="mb-0">
        And this is more example text.
    </p>
</div>
</div>`;