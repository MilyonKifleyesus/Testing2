import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {
  productdata=[
    {
      id:1,
      src:"./assets/images/ecommerce/jpg/15.jpg",
      name:"Men's Shoes",
      oldprice:"$49.00",
      newprice:"$39.00",
      rating:25
    },
    {
      id:2,
      src:"./assets/images/ecommerce/jpg/12.jpg",
      name:"Hand Bag",
      oldprice:"$30.00",
      newprice:"$21.00",
      rating:14
    },
    {
      id:3,
      src:"./assets/images/ecommerce/jpg/14.jpg",
      name:"Wrist Watch",
      oldprice:"$29.00",
      newprice:"$15.00",
      rating:22
    },
    {
      id:4,
      src:"./assets/images/pngs/9.png",
      name:"Long Frock",
      oldprice:"$32.00",
      newprice:"$22.00",
      rating:22
    },
    {
      id:5,
      src:"./assets/images/ecommerce/jpg/7.jpg",
      name:"Girls Sandals",
      oldprice:"$30.00",
      newprice:"$21.00",
      rating:14
    },
    {
      id:6,
      src:"./assets/images/ecommerce/jpg/11.jpg",
      name:"Sofa Chair",
      oldprice:"$29.00",
      newprice:"$15.00",
      rating:22
    },
    {
      id:7,
      src:"./assets/images/ecommerce/jpg/8.jpg",
      name:"Laptop",
      oldprice:"$200.00",
      newprice:"$149.00",
      rating:19
    },
    {
      id:8,
      src:"./assets/images/ecommerce/jpg/13.jpg",
      name:"Soft Toy",
      oldprice:"$49.00",
      newprice:"$39.00",
      rating:25
    }
  ]
  click = (id:number)=>{
    const data = this.productdata.filter(x =>{
      return x.id != id;
    });
    this.productdata = data;
  };
}
