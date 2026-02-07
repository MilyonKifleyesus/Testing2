import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SpkReusableTablesComponent } from "../../../@spk/reusable-tables/spk-reusable-tables/spk-reusable-tables.component";

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [SharedModule, SpkReusableTablesComponent],
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss'
})
export class DisplayComponent {
  displayColumns=[
    {header:'Class',field:'Class',tableHeadColumn:'wd-30p'},
    {header:'Description',field:'Description',tableHeadColumn:'wd-70p'},
  ]
  displayClasses = [
    { class: '.d-inline', description: 'Set an inline display property of an element.' },
    { class: '.d-inline-block', description: 'Set an inline-block display property of an element.' },
    { class: '.d-block', description: 'Set a block display property of an element.' },
  ];
  displayColumns1=[
    {header:'Class',field:'Class',tableHeadColumn:'wd-40p'},
    {header:'Screen Size',field:'Screen Size',tableHeadColumn:'wd-60p'},
  ]
  visibilityClasses = [
    { class: '.d-none', description: 'Hidden on all' },
    { class: '.d-none .d-sm-block', description: 'Hidden only on xs' },
    { class: '.d-sm-none .d-md-block', description: 'Hidden only on sm' },
    { class: '.d-md-none .d-lg-block', description: 'Hidden only on md' },
    { class: '.d-lg-none .d-xl-block', description: 'Hidden only on lg' },
    { class: '.d-xl-none', description: 'Hidden only on xl' },
    { class: '.d-block', description: 'Visible on all' },
    { class: '.d-block .d-sm-none', description: 'Visible only on xs' },
    { class: '.d-none .d-sm-block .d-md-none', description: 'Visible only on sm' },
    { class: '.d-none .d-md-block .d-lg-none', description: 'Visible only on md' },
    { class: '.d-none .d-lg-block .d-xl-none', description: 'Visible only on lg' },
    { class: '.d-none .d-xl-block', description: 'Visible only on xl' },
  ];
}
