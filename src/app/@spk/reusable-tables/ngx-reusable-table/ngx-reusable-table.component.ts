import { ChangeDetectionStrategy,Input, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import {
  API,
  APIDefinition,
  Columns,
  Config,
  DefaultConfig,
  TableModule,
} from 'ngx-easy-table';
import { Company, data } from '../../../shared/data/tables/ngx-table';
@Component({
  selector: 'app-ngx-reusable-table',
  standalone: true,
  imports: [TableModule],
  templateUrl: './ngx-reusable-table.component.html',
  styleUrl: './ngx-reusable-table.component.scss'
})
export class NgxReusableTableComponent {
  @Input() tableId: string = '';         // Dynamic table ID
  @Input() tableClass: string = '';      // Dynamic class for the table
  @Input() configuration!: Config;           // Configuration object for ngx-table
  @Input() data: Company[] = [];             // Table data array
  @Input() columns: Columns[] = [];          // Column definitions array
  @Input() showSearch: boolean = false; 
  @Input() paginationEnabled: boolean = false;
  @Input() basicTable: boolean = false;


  
  isCollapsed = false; 
  
  // public configuration!: Config;
  public configuration1!: Config;
  public configuration2!: Config;
  @ViewChild('table')
  table!: APIDefinition;
  // paginationEnabled: boolean = true;

  ngOnInit(): void {
    this.columns = [
      { key: 'level', title: 'Level' },
      { key: 'age', title: 'Age' },
      { key: 'company', title: 'Company' },
      { key: 'name', title: 'Name' },
      { key: 'isActive', title: 'STATUS' },
    ];

    this.data = data;
    this.configuration = { ...DefaultConfig };
    this.configuration.paginationEnabled = false;

    this.configuration1 = { ...DefaultConfig };
   
    this.configuration2 = { ...DefaultConfig };
    this.configuration2.rowReorder = true;
    this.configuration2.columnReorder = true;
    this.configuration2.fixedColumnWidth = false
  }
  onChange(event: Event): void {
    this.table.apiEvent({
      type: API.onGlobalSearch,
      value: (event.target as HTMLInputElement).value,
    });
  }

  sortByLastName(asc: boolean): void {}

  sortByLevel(asc: boolean): void {}

  eventEmitted($event: { event: string; value: any }): void {}
  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit2(): void {
    this.columns = [
      { key: 'level', title: 'Level' },
      { key: 'age', title: 'Age' },
      { key: 'company', title: 'Company' },
      { key: 'name', title: 'Name' },
      { key: 'isActive', title: 'STATUS' },
    ];

    
    this.data = data;
    this.configuration = { ...DefaultConfig };
    this.configuration.infiniteScroll = true;
    this.configuration.paginationEnabled = false;
    this.configuration.infiniteScrollThrottleTime = 5;
    this.configuration.rows = 5;
  }
  
  onEvent($event: { event: Event | string; value: any }): void {
    if ($event.event === 'onInfiniteScrollEnd') {
      // Handle onInfiniteScrollEnd event
      this.data = [...this.data, ...this.data];
      this.cdr.detectChanges();
    }
    
  }
    

  getConfiguration(): Config {
    if (this.paginationEnabled) {
      return this.configuration1; 
    } else if (this.basicTable) { // New condition for basicTable
      return this.configuration; 
    } else if (this.showSearch) {
      return this.configuration; 
    }
    return this.configuration2; 
  }
  
}

