import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule } from '@angular/router';
import { GalleryModule, Image } from '@ks89/angular-modal-gallery';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SpkReusableTablesComponent } from "../../../@spk/reusable-tables/spk-reusable-tables/spk-reusable-tables.component";
import { SpkNgSelectComponent } from '../../../@spk/reusable-plugins/spk-ng-select/spk-ng-select.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [SharedModule, NgSelectModule, RouterModule, GalleryModule, NgbModule, NgbNavModule, SpkReusableTablesComponent,SpkNgSelectComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  Quantity=[
    {label:'1',value:1},
    {label:'2',value:2},
    {label:'3',value:3},
    {label:'4',value:4},
  ]
  productDetails = [
    { key: 'Category', value: 'Watches' },
    { key: 'Brand', value: 'Willful' },
    { key: 'Color', value: 'White' },
    { key: 'Connections', value: 'Bluetooth' },
    { key: 'Application', value: 'Messages, Phone, Pedometer, Heart Rate Monitor' },
    { key: 'Supported', value: 'Fitness Tracker, Sleep Monitor, Reminders' },
    { key: 'Warranty Summary', value: '1 Year' },
  ];
  imagesRect: Image[] = [

    new Image( 1, { img: './assets/images/pngs/24.png', },
      { img: './assets/images/pngs/24.png',
    }
    ),
    new Image(2, { img: './assets/images/pngs/26.png' },{ img: './assets/images/pngs/26.png' }),
    new Image(
      3,
      {
        img: './assets/images/pngs/25.png',
       
      },
      {
        img: './assets/images/pngs/25.png',
     
      }
    ),
    new Image(
      4,
      {
        img: './assets/images/pngs/23.png',
       
      },
      { img: './assets/images/pngs/23.png',
      }
    ),
   
  ];
}
