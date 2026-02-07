import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule } from '@angular/router';
import { SpkReusableTablesComponent } from "../../../@spk/reusable-tables/spk-reusable-tables/spk-reusable-tables.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpkNgSelectComponent } from '../../../@spk/reusable-plugins/spk-ng-select/spk-ng-select.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [SharedModule, NgbModule, NgSelectModule, RouterModule, SpkReusableTablesComponent,FormsModule,ReactiveFormsModule,SpkNgSelectComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {
  Country=[
    {label:'India',value:1},
    {label:'USA',value:2},
    {label:'UK',value:3},
    {label:'UAE',value:4},
  ]
  Language=[
    {label:'English',value:1},
    {label:'English (United States)',value:2},
    {label:'English UK',value:3},
    {label:'Arabic',value:4},
  ]
active=1;
url1:string = '';
handleFileInput(event: any): void {
  const file = event.target.files[0];
  if (file) { 
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.url1 = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

click(id:number){
  const data = this.wishlistItems.filter((x: { id: number }) => {
    return x.id != id;

  })
  this.wishlistItems = data;
}

accountColumns=[
  {header:'#',field:'#'},
  {header:'Photo',field:'Photo'},
  {header:'Product',field:'Product'},
  {header:'Qty',field:'Qty'},
  {header:'Price',field:'Price'},
  {header:'Total',field:'Total',tableHeadColumn:'text-end'},
]
wishlistColumns=[
  {header:'#',field:'#'},
  {header:'Photo',field:'Photo'},
  {header:'Product',field:'Product'},
  {header:'Qty',field:'Qty'},
  {header:'Price',field:'Price'},
  {header:'Total',field:'Total'},
  {header:'Action',field:'Action'},
]
products = [
  {
    orderId: '#34350',
    image: './assets/images/pngs/17.png',
    name: 'Plastic Outdoor Chair',
    quantity: 1,
    pricePerUnit: '$200',
    totalPrice: '$200',
  },
  {
    orderId: '#34351',
    image: './assets/images/pngs/18.png',
    name: 'Black Digital Smart Watch',
    quantity: 2,
    pricePerUnit: '$500',
    totalPrice: '$500',
  },
  {
    orderId: '#34352',
    image: './assets/images/pngs/15.png',
    name: 'Women Pink Heels Sandal',
    quantity: 2,
    pricePerUnit: '$400',
    totalPrice: '$400',
  },
  {
    orderId: '#34353',
    image: './assets/images/pngs/19.png',
    name: 'Apple iPhone (Black, 128 GB)',
    quantity: 2,
    pricePerUnit: '$800',
    totalPrice: '$800',
  },
];
wishlistItems = [
  {
    id: 1,
    image: './assets/images/pngs/14.png',
    name: 'Regular waterproof (24 L) Backpack',
    quantity: 1,
    price: '$10',
    totalPrice: '$500',
  },
  {
    id: 2,
    image: './assets/images/pngs/16.png',
    name: 'Designer Hand Decorative flower Pot',
    quantity: 1,
    price: '$20',
    totalPrice: '$200',
  },
  {
    id: 3,
    image: './assets/images/pngs/19.png',
    name: 'Apple iPhone(Black, 128 GB) 8GB RAM',
    quantity: 1,
    price: '$30',
    totalPrice: '$300',
  },
];
}
