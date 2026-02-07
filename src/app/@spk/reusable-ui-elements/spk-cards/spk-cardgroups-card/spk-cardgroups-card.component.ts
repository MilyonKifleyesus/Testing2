import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-cardgroups-card',
  standalone: true,
  imports: [],
  templateUrl: './spk-cardgroups-card.component.html',
  styleUrl: './spk-cardgroups-card.component.scss'
})
export class SpkCardgroupsCardComponent {
  @Input() image:string = '';  
  @Input() title:string = ''; 
  @Input() discription:string = ''; 
  @Input() status:string = ''; 
}
