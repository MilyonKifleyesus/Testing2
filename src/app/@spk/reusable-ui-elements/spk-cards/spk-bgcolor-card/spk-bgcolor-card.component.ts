import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-bgcolor-card',
  standalone: true,
  imports: [],
  templateUrl: './spk-bgcolor-card.component.html',
  styleUrl: './spk-bgcolor-card.component.scss'
})
export class SpkBgcolorCardComponent {
  @Input() image:string = '';  
  @Input() status:string = ''; 
  @Input() BgColor:string = ''; 
  @Input() name:string = ''; 
  @Input() textColor:string = ''; 
  @Input() textClass1?:string = ''; 
  @Input() icon:boolean = false; 

}
