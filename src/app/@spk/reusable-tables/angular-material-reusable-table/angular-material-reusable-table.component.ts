import { Component, Directive, Input, ViewChild } from '@angular/core';
import { MaterialModuleModule } from '../../../material-module/material-module.module';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable, ReplaySubject } from 'rxjs';
import { ELEMENT_DATA1, ELEMENT_DATA2, ELEMENT_DATA3, ELEMENT_DATA4, ELEMENT_DATA5, ELEMENT_DATA6, PeriodicElement, PeriodicElement2, PeriodicElement3, PeriodicElement4, PeriodicElement5, PeriodicElement6, PeriodicElements } from '../../../components/apps/tables/angular-material/data';
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
@Component({
  selector: 'app-angular-material-reusable-table',
  standalone: true,
  imports: [MaterialModuleModule],
  templateUrl: './angular-material-reusable-table.component.html',
  styleUrl: './angular-material-reusable-table.component.scss'
})
export class AngularMaterialReusableTableComponent {
  @Input() displayedColumns: string[] = [];
  @Input() dataSource!: MatTableDataSource<any>; 
  @Input() showPaginator: boolean = false;
  @Input() showFilter: boolean = false;
  @Input() basicTable: boolean = false;
  @Input() wideTable: boolean = false;
  @Input() addremovebuttons: boolean = false;
  @Input() matsatheader: any = false;

  columns: any = ['position', 'name', 'weight', 'symbol','email','date','category'];
  sortableColumns: string[] = ['position', 'name'];
  dataSource1 = new MatTableDataSource<PeriodicElements>(ELEMENT_DATA2);
  //Sorting table
  displayedColumns2: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource2 = new MatTableDataSource<PeriodicElement2>(ELEMENT_DATA3);
  //table slide
  displayedColumns3: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource3 = new MatTableDataSource<PeriodicElement3>(ELEMENT_DATA4);
  //table fixed header
displayedColumns5: string[] = [
  'position',
  'name',
  'weight',
  'symbol',
  'cost',
];
dataSource5 = new MatTableDataSource<PeriodicElement4>(ELEMENT_DATA5);
//*Wide table/
displayedColumns4: string[] = [
  'position',
  'name',
  'weight',
  'symbol',
  'email',
  'date',
  'category',
];
dataSource4 = new MatTableDataSource<PeriodicElement5>(ELEMENT_DATA6);
//Hidden table
displayedColumns6: string[] = [
  'position',
  'name',
  'weight',
  'symbol',
  'email',
  'date',
  'category',
];
dataSource6= new MatTableDataSource<PeriodicElement6>(ELEMENT_DATA1);


//paginators

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild('paginator1') paginator1!: MatPaginator;
@ViewChild('paginator2') paginator2!: MatPaginator;
@ViewChild('paginator3') paginator3!: MatPaginator;
@ViewChild('paginator5') paginator5!: MatPaginator;
@ViewChild('paginator4') paginator4!: MatPaginator;
@ViewChild('paginator6') paginator6!: MatPaginator;
table: any;

//Sorting
constructor() {}
@ViewChild('sort1') sort1!: MatSort;
@ViewChild('sort2') sort2!: MatSort;
@ViewChild('sort4') sort4!: MatSort;
@ViewChild('sort5') sort5!: MatSort;
@ViewChild('sort6') sort6!: MatSort;
@ViewChild('sort7') sort7!: MatSort;
  @Input() pageSizeOptions: number[] = [5, 10, 20];

  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    if (this.showPaginator) {
      this.dataSource2.paginator = this.paginator;
    }
    this.dataSource2.sort = this.sort;
    this.dataSource = this.getConfiguration(); 
  }
  filterValue: string = '';
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource2.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource2.paginator) {
      this.dataSource2.paginator.firstPage();
    }
  }
  ngAfterViewInit() {
    this.dataSource2.paginator = this.paginator;
  
    // search Table
    this.dataSource1.paginator = this.paginator1;
  
    // sorting Table
    this.dataSource2.paginator = this.paginator2;
    this.dataSource2.sort = this.sort1;
    //table slide
    this.dataSource3.paginator = this.paginator3;
    this.dataSource3.sort = this.sort2;
    //table Fixed header
    this.dataSource5.paginator = this.paginator5;
    this.dataSource5.sort = this.sort4;

    //Wide table/
    this.dataSource4.paginator = this.paginator4;
    this.dataSource4.sort = this.sort5;
    //slide table/ 
    this.dataSource6.paginator = this.paginator6;
    this.dataSource6.sort = this.sort5;
  
  }
  getConfiguration(): MatTableDataSource<any> { // Specify the correct type for your data
    if (this.showPaginator) {
      return this.dataSource2;  // Returns dataSource2 if pagination is enabled
    } 
  
    // if (this.showFilter) {
    //   return this.dataSource2; // Returns dataSource2 for filtering
    // }
    if (this.wideTable) {
      this.displayedColumns2 = [
        'position',
        'name',
        'weight',
        'symbol',
        'cost',
        'category',
        'date',
        'email',
      ];
    } else {
      this.displayedColumns2 = ['position', 'name', 'weight', 'symbol'];
    }
  
    return this.dataSource; // Fallback to the default data source
  }
  dataToDisplay = [...ELEMENT_DATA];

  dataSource7 = [...ELEMENT_DATA];

  @ViewChild(MatTable) table1!: MatTable<PeriodicElement>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource7.push(ELEMENT_DATA[randomElementIndex]);
    this.table1.renderRows();
  }

  removeData() {
    this.dataSource7.pop();
    this.table1.renderRows();
  }
}

@Directive()
class ExampleDataSource extends DataSource<PeriodicElement> {
  private _dataStream = new ReplaySubject<PeriodicElement[]>();

  constructor(initialData: PeriodicElement[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<PeriodicElement[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: PeriodicElement[]) {
    this._dataStream.next(data);
  }
  ngOnInit(): void {}
}
