import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-notification-sidebar',
  standalone:false,
  templateUrl: './notification-sidebar.component.html',
  styleUrls: ['./notification-sidebar.component.scss']
})
export class NotificationSidebarComponent implements OnInit {
  
  layoutSub: Subscription;
  isOpen: boolean = false;

  @ViewChild('sidebar', {static: false}) sidebar!: ElementRef;
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private layoutService: LayoutService
  ) {
    this.layoutSub = layoutService.SidebarNotifyChangeEmitted.subscribe(
      value => {
        if (this.isOpen) {
          this.renderer.removeClass(this.sidebar.nativeElement, 'sidebar-open');
          this.isOpen = false;
        }
        else {
          this.renderer.addClass(this.sidebar.nativeElement, 'sidebar-open');
          this.isOpen = true;
        }
      }
    );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }
  }

  onClose(){
    this.renderer.removeClass(this.sidebar.nativeElement, 'sidebar-open');
    this.isOpen = false;
  }
  rightSidebarclose(){
    document.querySelector(".right-sidebar-canvas")?.classList.remove("show");
    document.querySelector("body")!.classList.remove("overflow:hidden");
    document.querySelector("body")!.classList.remove("padding-right:4px");
    document.querySelector(".right-backdrop")?.classList.remove("d-block");
    document.querySelector(".right-backdrop")?.classList.add("d-none");

  }
 
}
