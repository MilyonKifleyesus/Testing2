import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  standalone:false,
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  @Input() title!: string;
  @Input() title1!: any[];
  @Input() activeitem!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
