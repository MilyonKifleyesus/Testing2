import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import * as prismCodeData from '../../../shared/prismData/placeholders';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-placeholders',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent,CommonModule],
  templateUrl: './placeholders.component.html',
  styleUrl: './placeholders.component.scss'
})
export class PlaceholdersComponent {
  prismCode = prismCodeData;
 
}
