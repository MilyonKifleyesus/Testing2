import { Component } from '@angular/core';
import * as prismCodeData from '../../../../shared/prismData/tables';
import { ShowcodeCardComponent } from '../../../../shared/components/showcode-card/showcode-card.component';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkReusableTablesComponent } from '../../../../@spk/reusable-tables/spk-reusable-tables/spk-reusable-tables.component';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [SharedModule, ShowcodeCardComponent,SpkReusableTablesComponent],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.scss'
})
export class TablesComponent {
  prismCode = prismCodeData;
  basicColumn=[
    {header:"Name",field:"Name"},         
    {header:"Created On",field:"Created On"},
    {header:"Number",field:"Number"},
    {header:"Status",field:"Status"}

  ]
  basicTables=[
    {name:"Mark",date:"21,Dec 2021",contact:"+1234-12340",bg:"primary",status:"Completed"},
    {name:"Monika",date:"29,April 2023",contact:"+1523-12459",bg:"warning",status:"Failed"},
    {name:"Madina",date:"30,Nov 2023",contact:"+1982-16234",bg:"success",status:"Successful"},
    {name:"Bhamako",date:"18,Mar 2023",contact:"+1526-10729",bg:"secondary",status:"Pending"},
 ]
 borderColumn=[
  {header:"User",field:"user"},         
  {header:"Status",field:"status"},
  {header:"Email",field:"email"},
  {header:"Action",field:"action"},
 ]
 borderTables=[
 {src:"./assets/images/faces/13.jpg",bg:"success-transparent",status:"Active",name:"Sukuro Kim",mail:"kimosukuro@gmail.com"},
 {src:"./assets/images/faces/6.jpg",bg:"light text-dark",status:"Inactive",name:"Hasimna",mail:"hasimna2132@gmail.com"},
 {src:"./assets/images/faces/15.jpg",bg:"success-transparent",status:"Active",name:"Azimo Khan",mail:"azimokhan421@gmail.com"},
 {src:"./assets/images/faces/5.jpg",bg:"success-transparent",status:"Active",name:"Samantha Julia",mail:"julianasams143@gmail.com"},
]
borderprimaryColumn=[
  {header:"Order",field:"order"},         
  {header:"Date",field:"date"},
  {header:"Customer",field:"customer"},
  {header:"Action",field:"action"},
 ]
 borderprimaryTables=[
  {id:"#0007",date:"26-04-2022",src:"./assets/images/faces/3.jpg",name:"Mayor Kelly"},
  {id:"#0008",date:"15-02-2022",src:"./assets/images/faces/6.jpg",name:"Wicky Kross"},
  {id:"#0009",date:"23-05-2022",src:"./assets/images/faces/1.jpg",name:"Julia Cam"},
 ]
 bordersuccessColumn=[
  {header:"Order",field:"order"},         
  {header:"Date",field:"date"},
  {header:"Customer",field:"customer"},
  {header:"Status",field:"status"},
 ]
 bordersuccessTables=[
  {id:"#0011",date:"07-01-2022",src:"./assets/images/faces/10.jpg",name:"Helsenky"},
  {id:"#0012",date:"18-05-2022",src:"./assets/images/faces/14.jpg",name:"Brodus"},
  {id:"#0013",date:"19-03-2022",src:"./assets/images/faces/12.jpg",name:"Chikka Alen"},
 ]
 borderwarningColumn=[
  {header:"Order",field:"order"},         
  {header:"Date",field:"date"},
  {header:"Customer",field:"customer"},
  {header:"Action",field:"action"},
 ]
 borderwarningTables=[
  {id:"#0014",date:"21-02-2022",src:"./assets/images/faces/13.jpg",name:"Sukuro Kim"},
  {id:"#0018",date:"26-03-2022",src:"./assets/images/faces/11.jpg",name:"Alex Carey"},
  {id:"#0020",date:"14-03-2022",src:"./assets/images/faces/2.jpg",name:"Pamila Anderson"},
 ]
 borderlessColumn=[
  {header:"User Name",field:"user"},         
  {header:"Transaction Id",field:"transaction"},
  {header:"Created",field:"created"},
  {header:"Status",field:"status"},
 ]
 borderlessTables=[
  {name:"Harshrath",id:"#5182-3467",date:"24 May 2023",bg:"primary",status:"Fixed"},
  {name:"Zozo Hadid",id:"#5182-3412",date:"02 July 2023",bg:"warning",status:"In Progress"},
  {name:"Martiana",id:"#5182-3423",date:"15 April 2023",bg:"success",status:"Completed"},
  {name:"Alex Carey",id:"#5182-3456",date:"17 March 2023",bg:"danger",status:"Pending"},
]
groupColumn=[
  {header:"Product",field:"Product"},         
  {header:"Seller",field:"Seller"},
  {header:"Sale Percentage",field:"Sale Percentage"},
  {header:"Quantity Sold",field:"Quantity Sold"},
 ]
 groupTables=[
  {product:"Smart Watch",seller:"Slowtrack.inc",percent:"24.23%",bg:"success",arrow:"up",quantity:"250/1786"},
  {product:"White Sneakers",seller:"American & Co.inc",percent:"12.45%",bg:"danger",arrow:"down",quantity:"123/985"},
  {product:"Baseball Bat",seller:"Sports Company",percent:"06.64%",bg:"success",arrow:"up",quantity:"124/232"},
  {product:"Black Hoodie",seller:"Renonds Fabrics",percent:"14.42%",bg:"success",arrow:"up",quantity:"192/2456"},
]
stripedrowColumn=[
  {header:"Id",field:"Id"},         
  {header:"Date",field:"date"},
  {header:"Customer",field:"customer"},
  {header:"Action",field:"action"},
 ]
 stripedrowColumnTables=[
  {id:"2022R-01",date:"27-10-2022",customer:"Moracco"},
  {id:"2022R-02",date:"28-10-2022",customer:"Thornton"},
  {id:"2022R-03",date:"22-10-2022",customer:"Larry Bird"},
  {id:"2022R-04",date:"29-09-2022",customer:"Erica Sean"}
 ]
 stripedColumn=[
  {header:"Id",field:"Id"},         
  {header:"Date",field:"date"},
  {header:"Customer",field:"customer"},
  {header:"Action",field:"action"},
 ]
 stripedColumnTables=[
  {id:"2022R-01",date:"27-10-2022",customer:"Moracco"},
  {id:"2022R-02",date:"28-10-2022",customer:"Thornton"},
  {id:"2022R-03",date:"22-10-2022",customer:"Larry Bird"},
  {id:"2022R-04",date:"29-09-2022",customer:"Erica Sean"}
 ]
 bgColorColumn=[
  {header:"#",field:"#"},         
  {header:"First",field:"First"},
  {header:"Last",field:"Last"},
  {header:"Handle",field:"handle"},
 ]
 bgColorTables=[
  {id:"1",name:"Mark",lastname:"Otto",handle:"@mdo"},
  {id:"2",name:"Jacob",lastname:"Thornton",handle:"@fat"},
  {id:"3",name:"Larry the Bird",lastname:"Thornton",handle:"@twitter"},
 ]
 hoverRowColumn=[
  {header:"Product Manager",field:"Product Manager"},         
  {header:"Category",field:"Category"},
  {header:"Team",field:"Team"},
  {header:"Status",field:"status"},
 ]
 hoverRowTables=[
  {src:"./assets/images/faces/10.jpg",name:"Joanna Smith",mail:"joannasmith14@gmail.com",status:"Fashion",bg:"primary",
   images:["./assets/images/faces/2.jpg","./assets/images/faces/8.jpg","./assets/images/faces/2.jpg"],count:5,progress:"52"},
  {src:"./assets/images/faces/2.jpg",name:"Kara Kova",mail:"milesakara@gmail.com",status:"Clothing",bg:"warning",
  images:["./assets/images/faces/4.jpg","./assets/images/faces/6.jpg"],count:6,progress:"40"},
  {src:"./assets/images/faces/16.jpg",name:"Donald Trimb",mail:"donaldo21@gmail.com",status:"Electronics",bg:"dark",
  images:[ "./assets/images/faces/1.jpg", "./assets/images/faces/11.jpg","./assets/images/faces/15.jpg"],count:6,progress:"17"},
  {src:"./assets/images/faces/13.jpg",name:"Justin Gaethje",mail:"justingae@gmail.com",status:"sports",bg:"danger",
  images:[ "./assets/images/faces/4.jpg", "./assets/images/faces/6.jpg"],count:5,progress:"72"},
 ]
 hoverstripedRowColumn=[
  {header:"Invoice",field:"Invoice"},         
  {header:"Customer",field:"Customer"},
  {header:"Status",field:"status"},
  {header:"Date",field:"Date"},
 ]
 hoverstripedRowTables=[
  {id:"IN-2032",icon:'ri-check-fill align-middle me-1',src:"./assets/images/faces/15.jpg",customer:"Mark Cruise",mail:"markcruise24@gmail.com",status:"Paid",bg:"success-transparent",date:"Jul 26,2022"},
  {id:"IN-2022",icon:'ri-check-fill align-middle me-1',src:"./assets/images/faces/12.jpg",customer:"Charanjeep",mail:"charanjeep@gmail.in",status:"Paid",bg:"success-transparent",date:"Mar 14,2022"},
  {id:"IN-2014",icon:'ri-close-fill align-middle me-1',src:"./assets/images/faces/5.jpg",customer:"Samantha Julie",mail:"julie453@gmail.com",status:"Cancelled",bg:"danger-transparent",date:"Feb 1,2022"},
  {id:"IN-2036",icon:'ri-reply-line align-middle me-1',src:"./assets/images/faces/11.jpg",customer:"Simon Cohen",mail:"simon@gmail.com",status:"Refunded",bg:"light text-dark",date:"Apr 24,2022"},
 ]
 headerColumn=[
  {header:"User Name",field:"user"},         
  {header:"Transaction Id",field:"transaction"},
  {header:"Created",field:"created"},
  {header:"Status",field:"status"},
 ]
 headerTables=[
  {name:"Harshrath",id:"#5182-3467",date:"24 May 2023",bg:"primary",status:"Pending"},
  {name:"Zozo Hadid",id:"#5182-3412",date:"02 July 2023",bg:"primary",status:"Pending"},
  {name:"Martiana",id:"#5182-3423",date:"15 April 2023",bg:"danger",status:"Rejected"},
  {name:"Alex Carey",id:"#5182-3456",date:"17 March 2023",bg:"success",status:"Processed"},
]
footerColumn=[
  {header:"S.No",field:"sno"},
  {header:"Team",field:"team"},
  {header:"Matches Won",field:"Matches Won"},
  {header:"Win Ratio",field:"Win Ratio"},
]
footerTables=[
  {sno:"01",team:"Manchester",matches:"232",ratio:"42%"},
  {sno:"02",team:"Barcelona",matches:"175",ratio:"58%"},
  {sno:"03",team:"Portugal",matches:"126",ratio:"32%"}
]
captionColumn=[
  {header:"S.No",field:"sno"},
  {header:"Country",field:"Country"},
  {header:"Medals Won",field:"Medals Won"},
  {header:"No Of Athletes",field:"No Of Athletes"},
]
captionTables=[
  {sno:"01",country:"United States",medals:"2012",athlets:"1823"},
  {sno:"02",country:"United Kingdom",medals:"1012",athlets:"992"},
  {sno:"03",country:"Germany",medals:"914",athlets:"875"}
]
topcaptionColumn=[
  {header:"S.No",field:"sno"},
  {header:"Name",field:"Name"},
  {header:"Revenue",field:"Revenue"},
  {header:"Country",field:"Country"},
]
topcaptionTables=[
  {sno:"01",country:"United States",name:"Microsoft",revenue:"$170"},
  {sno:"02",country:"United States",name:"HP",revenue:"$72"},
  {sno:"03",country:"United States",name:"IBM",revenue:"$60"}
]
activeColumn=[
  {header:"Name",field:"name"},         
  {header:"Created On",field:"created"},
  {header:"Number",field:"number"},
  {header:"Status",field:"status"},
]
activeTables=[
  {name:"Mark",trClass:"table-active",date:"21,Dec 2021",contact:"+1234-12340",bg:"primary",status:"Completed"},
  {name:"Monika",date:"29,April 2023",contact:"+1523-12459",bg:"warning",status:"Failed"},
  {name:"Madina",date:"30,Nov 2023",active:"table-active",contact:"+1982-16234",bg:"success",status:"Successful"},
  {name:"Bhamako",date:"18,Mar 2023",contact:"+1526-10729",bg:"secondary",status:"Pending"},
]
smallColumn=[
  {header:"Invoice",field:"Invoice"},         
  {header:"Created Date",field:"Created Date"},
  {header:"Status",field:"Status"},
  {header:"Action",field:"Action"},
]
smallTables=[
  {name:"Zelensky",date:"25-Apr-2021",bg:"success",status:"Paid",checked:true},
  {name:"Kim Jong",date:"29,April 2022",bg:"danger",status:"Pending",checked:false},
  {name:"Obana",date:"30,Nov 2022",bg:"success",status:"Paid"},
  {name:"Sean Paul",date:"01-Jan-2022",bg:"success",status:"Paid"},
  {name:"Karizma",date:"14-Feb-2022",bg:"danger",status:"Pending"},

]
variantColumn=[
  {header:"Invoice",field:"Invoice"},         
  {header:"Client",field:"Client"},
  {header:"Status",field:"Status"},
  {header:"Quantity",field:"Quantity"},
  {header:"Total Price",field:"Price"},
]
variantTables=[
  {color:"Default",trClass:"",client:"Rita Book",bg:"primary-transparent",status:"Processed",quantity:"22",price:"$2,012"},
  {color:"Primary",client:"Rhoda Report",trClass:"primary",bg:"primary",status:"Processed",quantity:"22",price:"$4,254"},
  {color:"Secondary",client:"Rita Book",trClass:"secondary",bg:"secondary",status:"Processed",quantity:"26",price:"$1,234"},
  {color:"Success",client:"Anne Teak",trClass:"success",bg:"success",status:"Processed",quantity:"42",price:"$2,623"},
  {color:"Danger",client:"Dee End",trClass:"danger",bg:"danger",status:"Processed",quantity:"52",price:"$32,132"},
  {color:"Warning",client:"Lee Nonmi",trClass:"warning",bg:"warning",status:"Processed",quantity:"10",price:"$1,434"},
  {color:"Info",client:"Lynne Gwistic",trClass:"info",bg:"info",status:"Processed",quantity:"63",price:"$1,854"},
  {color:"Light",client:"Fran Tick",trClass:"light",bg:"light text-dark",status:"Processed",quantity:"05",price:"$823"},
  {color:"Dark",client:"Polly Pipe",trClass:"dark",bg:"dark text-white",status:"Processed",quantity:"35",price:"$1,832"},
]
nestingColumn=[
  {header:"#",field:"#"},         
  {header:"First",field:"first"},
  {header:"Last",field:"Last"},
  {header:"Handle",field:"Handle"},
]
nestingsubColumn=[       
  {header:"Alphabets",field:"Alphabets"},
  {header:"Users",field:"Users"},
  {header:"Email",field:"Email"},
]
responsiveColumn=[
  {header:"Team Head",field:"Team Head"},         
  {header:"Category",field:"Category"},
  {header:"Role",field:"Role"},
  {header:"gmail",field:"gmail"},
  {header:"Team",field:"Team"},         
  {header:"Work Progress",field:"Work Progress"},
  {header:"Revenue",field:"Revenue"},
  {header:"Action",field:"Action"},
]
responsiveTables=[
  {src:"./assets/images/faces/3.jpg",progress:"52",revenue:"$10,984.29",
  name:"Mayor Kelly",category:"Manufacturer",bg:"primary",
  role:"Team Lead",mail:"mayorkrlly@gmail.com",
  images:["./assets/images/faces/2.jpg","./assets/images/faces/8.jpg","./assets/images/faces/2.jpg"],count:4},
  {src:"./assets/images/faces/12.jpg",bg:"warning",
  name:"Andrew Garfield",category:"Managing Director",progress:"91",
  role:"Director",mail:"andrewgarfield@gmail.com",revenue:"$1.4billion",
  images:["./assets/images/faces/1.jpg","./assets/images/faces/5.jpg","./assets/images/faces/15.jpg","./assets/images/faces/11.jpg"],count:4},
  {src:"./assets/images/faces/14.jpg",bg:"success",
  name:"Simon Cowel",category:"Service Manager",progress:"45",
  role:"Manager",mail:"simoncowel234@gmail.com",revenue:"$7,123.21",
  images:["./assets/images/faces/6.jpg","./assets/images/faces/16.jpg"],count:10},
  {src:"./assets/images/faces/5.jpg",bg:"danger",
  name:"Mirinda Hers",category:"Recruiter",progress:"21",
  role:"Employee",mail:"mirindahers@gmail.com",revenue:"$2,325.45",
  images:["./assets/images/faces/3.jpg","./assets/images/faces/10.jpg","./assets/images/faces/14.jpg"],count:6}
]
verticalColumn=[
  {header:"Heading 1",field:"Heading 1",tableHeadColumn:"w-25"},         
  {header:"Heading 2",field:"Heading 2",tableHeadColumn:"w-25"},
  {header:"Heading 3",field:"Heading 3",tableHeadColumn:"w-25"},
  {header:"Heading 4",field:"Heading 4",tableHeadColumn:"w-25"},
]
verticalTables=[
  {
    heading1:"This cell inherits",
    code:" vertical-align: middle;",
    heading2:"from the table",
    heading3:`This here is some placeholder text, intended to take up
    quite a
    bit of vertical space, to demonstrate how the vertical
    alignment
    works in the preceding cells.`
  },
  {
    heading1:"This cell inherits",
    code:" vertical-align: bottom;",
    heading2:"from the table row",
    heading3:`This here is some placeholder text, intended to take up
    quite a
    bit of vertical space, to demonstrate how the vertical
    alignment
    works in the preceding cells.`
  },
  {
    tdClass:true,
    heading1:"This cell inherits",
    code:" vertical-align: middle;",
    heading2:"from the table",
    heading3:`This here is some placeholder text, intended to take up
    quite a
    bit of vertical space, to demonstrate how the vertical
    alignment
    works in the preceding cells.`
  },
]
}
