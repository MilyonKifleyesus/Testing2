import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import * as prismCodeData from '../../../shared/prismData/form-layouts';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
import { SpkNgSelectComponent } from '../../../@spk/reusable-plugins/spk-ng-select/spk-ng-select.component';

@Component({
  selector: 'app-form-layouts',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent,SpkNgSelectComponent],
  templateUrl: './form-layouts.component.html',
  styleUrl: './form-layouts.component.scss'
})
export class FormLayoutsComponent {
  prismCode = prismCodeData;
  Preference=[
    {label:'Choose...',value:1},
    {label:'One',value:2},
    {label:'Two',value:3},
    {label:'Three',value:4},
  ]
}
