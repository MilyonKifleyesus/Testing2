import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-landingpage-layout',
  standalone:false,
  templateUrl: './landingpage-layout.component.html',
  styleUrls: ['./landingpage-layout.component.scss']
})
export class LandingpageLayoutComponent implements OnInit {
  currentRoute:  string | undefined;
  urlData:  string[] | undefined;
  constructor(  private router:Router, public renderer: Renderer2,
    private elementRef: ElementRef,
    ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
    });
   }

  ngOnInit(): void {
  }

  ngOnDestroy(){
 
    document.body.classList.remove('landing-body');   
    const htmlElement =
    this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, 'data-nav-layout', 'vertical');
    this.renderer.setAttribute(htmlElement, 'data-menu-styles', 'dark');
    this.renderer.removeAttribute(htmlElement, 'data-nav-style')
}
}
