import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-content-layout',
  standalone:false,
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document,private elementRef: ElementRef,
    private renderer: Renderer2,private sanitizer: DomSanitizer
  ) {}
  ngOnInit(): void {
 
    this.renderer.addClass(this.document.body, 'error-1');
    this.renderer.removeClass(this.document.body, 'app');
    this.renderer.removeClass(this.document.body, 'sidebar-min');

  }
  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'error-1');
    this.renderer.addClass(this.document.body, 'app');
    this.renderer.addClass(this.document.body, 'sidebar-min');
}


}
