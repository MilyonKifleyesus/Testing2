import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-collapse-card',
  standalone: true,
  imports: [],
  templateUrl: './spk-collapse-card.component.html',
  styleUrl: './spk-collapse-card.component.scss'
})
export class SpkCollapseCardComponent {
  @Input() title: string = 'Card Title';
  @Input() collapseClass?: string = '';
  @Input() subtitle?: string = '';
  @Input() content?: string = 'Default card content';
  @Input() fullscreenContent?: string = 'Default card content';
  @Input() isCollapsible: boolean = false;
  @Input() isClosable: boolean = false;
  @Input() isFullscreenable: boolean = false;
  isCollapsed: boolean = false;
  isClosed: boolean = false;
  isFullscreen: boolean = false;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  closeCard() {
    this.isClosed = true;
  }

  toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
  }
}
