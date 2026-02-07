import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-taskcard',
  imports: [],
  templateUrl: './spk-taskcard.component.html',
  styleUrl: './spk-taskcard.component.scss'
})
export class SpkTaskcardComponent {
  @Input() avatar: string = '';
  @Input() userName: string = '';
  @Input() userRole: string = '';
  @Input() tasks: { 
    iconClass: string; 
    title: string; 
    date: string; 
    description: string; 
    link: string; 
  }[] = [];
}
