import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-error404',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './error404.component.html',
  styleUrl: './error404.component.scss'
})
export class Error404Component {
  constructor(
    @Inject(DOCUMENT) private document: Document,private elementRef: ElementRef,
    private renderer: Renderer2,private sanitizer: DomSanitizer
  ) {}
  ngOnInit(): void {
 
    this.renderer.addClass(this.document.body, 'error-1');
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'error-1');
}
}
