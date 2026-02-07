import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-navigation-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-navigation-card.component.html',
  styleUrl: './spk-navigation-card.component.scss'
})
export class SpkNavigationCardComponent {
  @Input() tabType:string = '';  
  @Input() title:string = ''; 
  @Input() active:string = ''; 
  @Input() disabled:string = ''; 
  @Input() text:string = ''; 
  @Input() buttonText:string = ''; 
  @Input() label:string = ''; 
  @Input() link:string = ''; 
  @Input() tabs: { label: string; link: string; active: string; disabled: boolean }[] = [];

}
