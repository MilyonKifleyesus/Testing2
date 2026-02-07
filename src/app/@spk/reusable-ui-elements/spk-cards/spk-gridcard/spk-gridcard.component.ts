import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-gridcard',
  standalone: true,
  imports: [],
  templateUrl: './spk-gridcard.component.html',
  styleUrl: './spk-gridcard.component.scss'
})
export class SpkGridcardComponent {
  @Input() image:string = '';  
  @Input() title:string = ''; 
  @Input() discription:string = ''; 
  @Input() discription1:string = ''; 
  @Input() status:string = ''; 
  @Input() button:boolean = false; 
}
