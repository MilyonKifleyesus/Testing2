import { Component } from '@angular/core';
import * as chartData from './chartjs';
import { SpkChartjsComponent } from '../../../@spk/reusable-charts/spk-chartjs/spk-chartjs.component';
import { SharedModule } from '../../../shared/shared.module';


@Component({
  selector: 'app-chartjs-charts',
  standalone: true,
  imports: [SharedModule,SpkChartjsComponent],
  templateUrl: './chartjs-charts.component.html',
  styleUrl: './chartjs-charts.component.scss'
})
export class ChartjsChartsComponent {
 //**LINE CHART*/
  public lineChartOptions = chartData.lineChartOptions;
  public lineChartData = chartData.lineChartData;
  public lineChartType = chartData.lineChartType;
  // Bar Chart 1
  public barChartOptions = chartData.barChartOptions;
  public barChartType = chartData.barChartType;
  public barChartLegend = chartData.barChartLegend;
  // public barChartPlugins = chartData.barChartPlugins;
  public barChartData = chartData.data1;

  //Doughnut and Pie Chart Data
  public PieChartData = chartData.data2;
  public PieChartOptions = chartData.PieChartOptions;
  public PieChartType = chartData.PieChartType;
  public DoughnutChartType = chartData.DoughnutChartType;
  //mixed Chart 2
  public barChart2Options = chartData.barChart2Options;
  public barChart2Type = chartData.barChart2Type;
  public barChart2Legend = chartData.barChart2Legend;
  public barChart2Plugins = chartData.barChart2Plugins;
  public barChart2Data = chartData.barChart2Data;
  //Polar Chart
  public polarChartOptions = chartData.polarChartOptions;
  public polarChartType = chartData.polarChartType;
  public polarChartData = chartData.polarChartData;

  //Radar Chart
  public radarChartOptions = chartData.radarChartOptions;
  public radarChartType = chartData.radarChartType;
  public radarChartData = chartData.radarChartData;

public bubblechartOptions =chartData.bubblechartOptions;
public  bubblechartType =chartData.bubblechartType;
public bubblechartData =chartData.bubblechartData;

// scattered chat
public ScatterchartOptions =chartData.ScatterchartOptions;
public scatterchartData= chartData.scatterchartData;
public ScatterchartType=chartData.ScatterchartType
 
}
