import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-image-card',
  standalone: true,
  imports: [],
  templateUrl: './spk-image-card.component.html',
  styleUrl: './spk-image-card.component.scss'
})
export class SpkImageCardComponent {
  @Input() image:string = '';  
  @Input() title?:string = ''; 
  @Input() headertitle?:string = ''; 
  @Input() imageClass?:string = ''; 
  @Input() footertext?:boolean ; 
  @Input() discription:string = ''; 
  @Input() discriptionClass?:string = ''; 
  @Input() status?:string = ''; 
  @Input() TopImagePlacement: boolean = false;
  @Input() bottomImagePlacement?: boolean = false;
  @Input() bottomImagePlacement1?: boolean = false;
  @Input() customStatusPlacement: boolean = false;
  @Input() BottomStatusPlacement: boolean = false;
}
