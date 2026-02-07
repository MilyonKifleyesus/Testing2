import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as prismcodeData from '../../../shared/prismData/pagination';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [SharedModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  prismCode = prismcodeData;
	page = 2;
	page1 = 4;
  page2 = 3;
  page3 = 3;
  page4 = 3;
  page5 = 3;
  page6 = 3;
  page7 = 3;
  page8 = 3;
  page9 = 21;
	getPageSymbol(current: number) {
		return ['1', '2','3'][current - 1];
	}
}
