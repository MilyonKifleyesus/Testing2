import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SpkReusableTablesComponent } from "../../../@spk/reusable-tables/spk-reusable-tables/spk-reusable-tables.component";

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [SharedModule, SpkReusableTablesComponent],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss'
})
export class InvoiceComponent {
  invoiceColumn=[
    {header:'Product',field:"Product",tableHeadColumn:"wd-20p"},
    {header:'Description',field:"Description",tableHeadColumn:"wd-40p"},
    {header:'QNTY',field:"QNTY",tableHeadColumn:"tx-center"},
    {header:'Unit',field:"Unit",tableHeadColumn:"tx-right"},
    {header:'Amount',field:"Amount",tableHeadColumn:"tx-right"},
  ]
  items = [
    {
      description: 'Logo Creation',
      details: 'Logo and business cards design',
      quantity: 2,
      unitPrice: 60.0,
      totalPrice: 120.0
    },
    {
      description: 'Online Store Design & Development',
      details: 'Design/Development for all popular modern browsers',
      quantity: 3,
      unitPrice: 80.0,
      totalPrice: 240.0
    },
    {
      description: 'App Design',
      details: 'Promotional mobile application',
      quantity: 1,
      unitPrice: 40.0,
      totalPrice: 40.0
    }
  ];

  notes = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`;

  subTotal = 484;
  taxPercentage = 3;
  discountPercentage = 10;

  get taxAmount() {
    return (this.subTotal * this.taxPercentage) / 100;
  }

  get discountAmount() {
    return (this.subTotal * this.discountPercentage) / 100;
  }

  get totalDue() {
    return this.subTotal + this.taxAmount - this.discountAmount;
  }
}
