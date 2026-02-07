import { Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule, NgbScrollSpyService } from '@ng-bootstrap/ng-bootstrap';
import * as prismCodeData from '../../../shared/prismData/scrollspy';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
@Component({
  selector: 'app-scrollspy',
  standalone: true,
  imports: [SharedModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './scrollspy.component.html',
  styleUrl: './scrollspy.component.scss'
})
export class ScrollspyComponent {
  prismCode = prismCodeData;
  
  isDropdownActive = false;

  // Get reference to NgbScrollSpyMenuDirective


}
