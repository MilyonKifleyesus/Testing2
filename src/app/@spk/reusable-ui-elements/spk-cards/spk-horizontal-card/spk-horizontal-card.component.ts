import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-horizontal-card',
  standalone: true,
  imports: [],
  templateUrl: './spk-horizontal-card.component.html',
  styleUrl: './spk-horizontal-card.component.scss'
})
export class SpkHorizontalCardComponent {
  @Input() image:string = '';  
  @Input() title?:boolean ; 
  @Input() subtitle?:string = ''; 
  @Input() headerTitle?:string = ''; 
  @Input() discription:string = ''; 
  @Input() status?:string = ''; 
  @Input() imagePlacementStart: boolean = false;
  @Input() imagePlacementEnd?: boolean = false;
  @Input() bodyText?: boolean = false;
}
