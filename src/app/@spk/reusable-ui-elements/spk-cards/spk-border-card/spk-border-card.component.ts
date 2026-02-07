import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-border-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-border-card.component.html',
  styleUrl: './spk-border-card.component.scss'
})
export class SpkBorderCardComponent {
  @Input() image:string = '';  
  @Input() title:string = ''; 
  @Input() borderClass:string = ''; 
  @Input() iconClass:string = ''; 
  @Input() status:string = ''; 
  @Input() badges: string[] = [];
  @Input() badgeClasses: string[] = [];
  @Input() avatars: string[] = [];
}
