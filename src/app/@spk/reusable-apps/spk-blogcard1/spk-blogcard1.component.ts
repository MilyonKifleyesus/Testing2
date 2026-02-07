import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-blogcard1',
  imports: [],
  templateUrl: './spk-blogcard1.component.html',
  styleUrl: './spk-blogcard1.component.scss'
})
export class SpkBlogcard1Component {
  @Input() cardData: any;
}
