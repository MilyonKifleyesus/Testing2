import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import * as prismCodeData from '../../../shared/prismData/tags';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss'
})
export class TagsComponent {
  prismCode = prismCodeData;

}
