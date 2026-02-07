import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule } from '@angular/router';
import { SpkNgSelectComponent } from '../../../@spk/reusable-plugins/spk-ng-select/spk-ng-select.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SharedModule,NgSelectModule,RouterModule,SpkNgSelectComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  Mens=[
    {label:'Foot wear',value:1},
    {label:'Top wear',value:2},
    {label:'Bottom wear',value:3},
    {label:'Men\'s Groming',value:4},
    {label:'Accessories',value:5},
  ]
  Women=[
    {label:'Western wear',value:2},
    {label:'Foot wear',value:1},
    {label:'Top wear',value:3},
    {label:'Bottom wear',value:4},
    {label:'Beauty Groming',value:5},
    {label:'Accessories',value:6},
    {label:'jewellery',value:5},
  ]
  Kids=[
    {label:'Boys clothing',value:2},
    {label:'girls Clothing',value:1},
    {label:'Toys',value:3},
    {label:'Baby Care',value:4},
    {label:'Kids footwear',value:5},
  ]
  Electronics=[
    {label:'Mobiles',value:2},
    {label:'Laptops',value:1},
    {label:'Gaming & Accessories',value:3},
    {label:'Health care Appliances',value:4},
  ]
  Books=[
    {label:'Stationery',value:2},
    {label:'Books',value:1},
    {label:'Gaming',value:3},
    {label:'Music',value:4},
    {label:'Exercise & fitness',value:5},
  ]
}
