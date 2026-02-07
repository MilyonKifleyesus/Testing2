import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appSidemenuToggle]',
  standalone:false,
})
export class SidemenuToggleDirective {
  private body:any = document.querySelector('body');
  constructor() { }

  @HostListener('click') toggleSidemenu(){
    if (this.body !=  !this.body) {
     if(innerWidth >= 992){
      document.querySelector('body')?.classList.toggle('main-sidebar-hide');
      document.querySelector('body')?.classList.remove('main-sidebar-show');
    }
    else if(document.body.classList.contains('horizontalmenu')){
      document.querySelector('body')?.classList.toggle('main-navbar-show');
      document.querySelector('body')?.classList.remove('main-sidebar-show');
      document.querySelector('body')?.classList.remove('main-sidebar-hide');
     }
     else{
      document.querySelector('body')?.classList.toggle('main-sidebar-show');
      document.querySelector('body')?.classList.remove('main-sidebar-hide');
     }
    }
  }
}
