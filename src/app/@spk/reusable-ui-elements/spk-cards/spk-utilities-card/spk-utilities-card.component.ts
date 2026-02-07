import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-utilities-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-utilities-card.component.html',
  styleUrl: './spk-utilities-card.component.scss'
})
export class SpkUtilitiesCardComponent {
  @Input() widthClass:string = '';  
  @Input() title:string = '';  
  @Input() discription:string = ''; 
}
