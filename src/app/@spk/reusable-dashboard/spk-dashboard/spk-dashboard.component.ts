import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'spk-dashboard',
  imports: [],
  templateUrl: './spk-dashboard.component.html',
  styleUrl: './spk-dashboard.component.scss'
})
export class SpkDashboardComponent {
  @Input() card:any
  constructor(private sanitizer: DomSanitizer) {}
    sanitizeHtml(html: string): SafeHtml {
      return this.sanitizer.bypassSecurityTrustHtml(html);
    }
    sanitizeIcon(svg: string): SafeHtml {
      return this.sanitizer.bypassSecurityTrustHtml(svg);
    }
}
