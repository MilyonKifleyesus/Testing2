import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { SpkReusableTablesComponent } from "../../../@spk/reusable-tables/spk-reusable-tables/spk-reusable-tables.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [SharedModule, RouterModule, SpkReusableTablesComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartColums=[
    {header:'Product',field:'Product'},
    {header:'',field:''},
    {header:'Quantity',field:'Quantity',tableHeadColumn:'wd-120'},
    {header:'Price',field:'Price',tableHeadColumn:'wd-120'},
    {header:'Action',field:'Action',tableHeadColumn:'text-center'},
  ]
  products=[
  {
    id:1,
    src:"./assets/images/pngs/14.png",
    color:"Black Color",
    status:'Out of Stock',
    price:"$26.00",
    name:"COLLEGE BAG" ,
    statuscolor:'danger'  
  },
  {
    id:2,
    src:"./assets/images/pngs/15.png",
    name:"Party Wear Shoes"   ,
    color:"pink",
    status:'In Stock',
    price:"$23.00"   ,
    statuscolor:'success'  
  } ,
  {
    id:3,
    src:"./assets/images/pngs/19.png",
    name:"SAMSUNG A2"   ,
    color:"Black Color",
    status:'Out of Stock',
    price:"$38.00"   ,
    statuscolor:'danger'  
  },
   {
    id:4,
    src:"./assets/images/pngs/16.png",
    name:"FLOWER POT"   ,
    color:"Green and Black Color",
    status:'In Stock',
    price:"$56.00"   ,
    statuscolor:'success'  
  } ,
  {
    id:5,
    src:"./assets/images/pngs/17.png",
    name:"CHAIR"   ,
    color:"Green and Black Color",
    status:'In Stock',
    price:"$24.00"  ,
    statuscolor:'success'   
  },
  {
    id:6,
    src:"./assets/images/pngs/18.png",
    name:"WATCH"   ,
    color:"Green and Black Color",
    status:'Out of Stock',
    price:"$34.00"   ,
    statuscolor:'danger'  
  } ,
]
click(id:number){
  const data = this.products.filter((x: { id: number }) => {
    return x.id != id;

  })
  this.products = data;
}

ngAfterViewInit() {
  const plusButtons = document.querySelectorAll('.product-quantity-plus');
  const minusButtons = document.querySelectorAll('.product-quantity-minus');

  function perfectChart() {
    plusButtons.forEach((plusButton: any) => {
      plusButton.addEventListener('click', () => {
        const parentDiv = plusButton.closest('.quantity');
        const quantityInput = parentDiv.querySelector('.qty');

        if (quantityInput) {
          quantityInput.value = String(Number(quantityInput.value) + 1);
        }
      });
    });

    minusButtons.forEach((minusButton: any) => {
      minusButton.addEventListener('click', () => {
        const parentDiv = minusButton.closest('.quantity');
        const quantityInput = parentDiv.querySelector('.qty');

        if (quantityInput && quantityInput.value > 0) {
          quantityInput.value = String(Number(quantityInput.value) - 1);
        }
      });
    });
  }

  perfectChart();
}
}
