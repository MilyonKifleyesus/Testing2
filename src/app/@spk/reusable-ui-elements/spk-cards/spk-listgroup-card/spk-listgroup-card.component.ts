import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-listgroup-card',
  standalone: true,
  imports: [],
  templateUrl: './spk-listgroup-card.component.html',
  styleUrl: './spk-listgroup-card.component.scss'
})
export class SpkListgroupCardComponent {
  @Input() header: string = ''; 
  @Input() items: string[] = [];
  @Input() footer: string = ''; 
}
