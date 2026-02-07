import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import * as chartData from '../../../shared/data/dashboard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedProjectBudgetChartComponent } from '../../../shared/charts/shared-project-budget-chart.component';
import { SharedTodayTasksChartComponent } from '../../../shared/charts/shared-today-tasks-chart.component';
import { SharedWebsiteDesignChartComponent } from '../../../shared/charts/shared-website-design-chart.component';
import { SharedTicketsBarChartComponent } from '../../../shared/charts/shared-tickets-bar-chart.component';
import { SharedOngoingProjectsChartComponent } from '../../../shared/charts/shared-ongoing-projects-chart.component';
import { SharedOngoingProjects2ChartComponent } from '../../../shared/charts/shared-ongoing-projects2-chart.component';
import { SpkDashboardComponent } from '../../../@spk/reusable-dashboard/spk-dashboard/spk-dashboard.component';
import { SpkReusableTablesComponent } from '../../../@spk/reusable-tables/spk-reusable-tables/spk-reusable-tables.component';
import { CommonModule } from '@angular/common';
// Milli made a change: add WarRoomComponent to dashboard imports.
import { WarRoomComponent } from '../../../shared/features/war-room/war-room.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SharedModule,
    NgbModule,
    NgSelectModule,
    NgCircleProgressModule,
    NgApexchartsModule,
    SpkDashboardComponent,
    SpkReusableTablesComponent,
    CommonModule,
    SharedProjectBudgetChartComponent,
    SharedTodayTasksChartComponent,
    SharedWebsiteDesignChartComponent,
    SharedTicketsBarChartComponent,
    SharedOngoingProjectsChartComponent,
    SharedOngoingProjects2ChartComponent,
    WarRoomComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor() {}

  ngOnInit(): void {  }
  //line Chart
  public ChartOptions = chartData.ChartOptions;
  public ChartOptions1 = chartData.ChartOptions1;
  public ChartOptions2 = chartData.ChartOptions2;


  //Bar chart
  public barChartOptions = chartData.barChartOptions;
  public barChartType = chartData.barChartType;
  public barChartData = chartData.barChartData;
  circleOptions={
    series: [1854, 250],
	labels: ["Bitcoin", "Ethereum"],
	chart: {
	  height: 73,
	  width: 50,
		type: 'donut',
	},
	dataLabels: {
		enabled: false,
	},
  
	legend: {
		show: false,
	},
	stroke: {
		show: true,
		curve: 'smooth',
		lineCap: 'round',
		colors: "#fff",
		width: 0,
		dashArray: 0,
	},
	plotOptions: {
  
		pie: {
			expandOnClick: false,
			donut: {
				size: '75%',
				background: 'transparent',
				labels: {
					show: false,
					name: {
						show: true,
						fontSize: '20px',
						color: '#495057',
						offsetY: -4
					},
					value: {
						show: true,
						fontSize: '18px',
						color: undefined,
						offsetY: 8,
						formatter: function (val: string) {
							return val + "%"
						}
					},
					total: {
						show: true,
						showAlways: true,
						label: 'Total',
						fontSize: '22px',
						fontWeight: 600,
						color: '#495057',
					}
  
				}
			}
		}
	},
	colors: ["var(--primary-color)", "rgba(var(--primary-rgb), 0.2)"],
  
  }
  circleOptions1={
    series: [1754, 544],
    labels: ["Bitcoin", "Ethereum"],
    chart: {
      height: 73,
      width: 50,
      type: 'donut',
    },
    dataLabels: {
      enabled: false,
    },
    
    legend: {
      show: false,
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'round',
      colors: "#fff",
      width: 0,
      dashArray: 0,
    },
    plotOptions: {
    
      pie: {
        expandOnClick: false,
        donut: {
          size: '75%',
          background: 'transparent',
          labels: {
            show: false,
            name: {
              show: true,
              fontSize: '20px',
              color: '#495057',
              offsetY: -4
            },
            value: {
              show: true,
              fontSize: '18px',
              color: undefined,
              offsetY: 8,
              // formatter: function (val: string) {
              //   return val + "%"
              // }
            },
            total: {
              show: true,
              showAlways: true,
              label: 'Total',
              fontSize: '22px',
              fontWeight: 600,
              color: '#495057',
            }
    
          }
        }
      }
    },
    colors: ["var(--primary-color)", "rgba(var(--primary-rgb), 0.2)"],
  }
  cards = [
    {
      svg: `<svg class="text-primary" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"> <g> <rect height="14" opacity=".3" width="14" x="5" y="5"></rect> <g> <rect fill="none" height="24" width="24"></rect> <g> <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z"></path> <rect height="5" width="2" x="7" y="12"></rect> <rect height="10" width="2" x="15" y="7"></rect> <rect height="3" width="2" x="11" y="14"></rect> <rect height="2" width="2" x="11" y="10"></rect> </g> </g> </g> </svg>`,
      title: 'Total Revenue',
      subtitle: 'Previous month vs this month',
      value: '$5,900.00',
      percentage: '55% ',
      percentage1: ' higher',
      percentageClass: 'text-success',
    },
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"> <path d="M0 0h24v24H0V0z" fill="none"></path> <path d="M12 4c-4.41 0-8 3.59-8 8 0 1.82.62 3.49 1.64 4.83 1.43-1.74 4.9-2.33 6.36-2.33s4.93.59 6.36 2.33C19.38 15.49 20 13.82 20 12c0-4.41-3.59-8-8-8zm0 9c-1.94 0-3.5-1.56-3.5-3.5S10.06 6 12 6s3.5 1.56 3.5 3.5S13.94 13 12 13z" opacity=".3"></path> <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"></path> </svg>`,
      title: 'New Employees',
      subtitle: 'Employees joined this month',
      value: '15',
      percentage: '5%',
      percentage1: 'Increased',
      percentageClass: 'text-success',
    },
    {
      svg: `<svg class="text-primary" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"> <path d="M0 0h24v24H0V0z" fill="none"></path> <path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1.23 13.33V19H10.9v-1.69c-1.5-.31-2.77-1.28-2.86-2.97h1.71c.09.92.72 1.64 2.32 1.64 1.71 0 2.1-.86 2.1-1.39 0-.73-.39-1.41-2.34-1.87-2.17-.53-3.66-1.42-3.66-3.21 0-1.51 1.22-2.48 2.72-2.81V5h2.34v1.71c1.63.39 2.44 1.63 2.49 2.97h-1.71c-.04-.97-.56-1.64-1.94-1.64-1.31 0-2.1.59-2.1 1.43 0 .73.57 1.22 2.34 1.67 1.77.46 3.66 1.22 3.66 3.42-.01 1.6-1.21 2.48-2.74 2.77z" opacity=".3"></path> <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"></path> </svg>`,
      title: 'Total Expenses',
      subtitle: 'Previous month vs this month',
      value: '$8,500',
      percentage: '12% ',
      percentage1: 'Decreased',
      percentageClass: 'text-danger',
    },
  ];
  transactions = [
    {
      avatar: './assets/images/faces/5.jpg',
      name: 'Flicker',
      description: 'App improvement',
      amount: '$45.234',
      date: '12 Jan 2020',
      trendClass: 'up-alt text-success'
    },
    {
      avatar: './assets/images/faces/6.jpg',
      name: 'Intoxica',
      description: 'Milestone',
      amount: '$23.452',
      date: '23 Jan 2020',
      trend: 'down',
      trendClass: 'down-alt text-danger'
    },
    {
      avatar: './assets/images/faces/7.jpg',
      name: 'Digiwatt',
      description: 'Sales executive',
      amount: '$78.001',
      date: '4 Apr 2020',
      trend: 'down',
      trendClass: 'down-alt text-danger'
    },
    {
      avatar: './assets/images/faces/8.jpg',
      name: 'Flicker',
      description: 'Milestone2',
      amount: '$37.285',
      date: '4 Apr 2020',
      trendClass: 'up-alt text-success'
    },
    {
      avatar: './assets/images/faces/4.jpg',
      name: 'Flicker',
      description: 'App improvement',
      amount: '$25.341',
      date: '4 Apr 2020',
      trendClass: 'down-alt text-danger',
      cell:'pb-0'
    }
  ];
  taskColumns=[
    {header:'Task',field:'Task',tableHeadColumn:'wd-lg-20p'},
    {header:'Team',field:'Team',tableHeadColumn:'wd-lg-20p text-center'},
    {header:'Open task',field:'Task',tableHeadColumn:'wd-lg-20p text-center'},
    {header:'Priority',field:'Priority',tableHeadColumn:'wd-lg-20p'},
    {header:'Status',field:'Status',tableHeadColumn:'wd-lg-20p'},
  ]
  tasks = [
    {
      name: 'Evaluating the design',
      checked: true,
      avatars: ['./assets/images/faces/1.jpg', './assets/images/faces/2.jpg', './assets/images/faces/3.jpg', './assets/images/faces/4.jpg'],
      comments: 18,
      priority: 'High',
      priorityClass: 'text-primary',
      status: 'Completed',
      statusClass: 'bg-primary-transparent'
    },
    {
      name: 'Generate ideas for design',
      checked: false,
      avatars: ['./assets/images/faces/5.jpg', './assets/images/faces/6.jpg', './assets/images/faces/7.jpg', './assets/images/faces/8.jpg'],
      comments: 34,
      priority: 'Normal',
      priorityClass: 'text-secondary',
      status: 'Pending',
      statusClass: 'bg-warning-transparent'
    },
    {
      name: 'Define the problem',
      checked: true,
      avatars: ['./assets/images/faces/11.jpg', './assets/images/faces/12.jpg', './assets/images/faces/9.jpg', './assets/images/faces/10.jpg'],
      comments: 25,
      priority: 'Low',
      priorityClass: 'text-warning',
      status: 'Completed',
      statusClass: 'bg-primary-transparent'
    },
    {
      name: 'Empathize with users',
      checked: false,
      avatars: ['./assets/images/faces/7.jpg', './assets/images/faces/9.jpg', './assets/images/faces/11.jpg', './assets/images/faces/12.jpg'],
      comments: 37,
      priority: 'High',
      priorityClass: 'text-primary',
      status: 'Rejected',
      statusClass: 'bg-danger-transparent'
    }
  ];

  // Tickets horizontal bar chart (inhouse ApexCharts wrapper)
  ticketsBarOptions = {
    chart: {
      type: 'bar',
      height: 320,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '60%',
        borderRadius: 4,
      }
    },
    dataLabels: {
      enabled: true,
      style: { colors: ['#6c757d'] },
      formatter: function (val: number) { return val + ''; }
    },
    xaxis: {
      categories: ['Open', 'In Progress', 'Resolved', 'Closed', 'Escalated'],
      labels: { style: { colors: '#6c757d' } }
    },
    series: [
      {
        name: 'Tickets',
        data: [42, 28, 36, 24, 8]
      }
    ],
    colors: ['var(--primary-color)'],
    grid: {
      borderColor: 'rgba(0,0,0,0.08)'
    },
    tooltip: {
      y: {
        formatter: function (val: number) { return val + ' tickets'; }
      }
    },
    legend: { show: false }
  };
}
