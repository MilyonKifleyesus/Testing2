import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
  {path:'charts',children:[
    {
      path: 'apex-charts/area-charts',
      loadComponent: () =>
        import('./apex-charts/area-charts/area-charts.component').then(
          (m) => m.AreaChartsComponent
        ),
    },
    {
      path: 'apex-charts/line-charts',
      loadComponent: () =>
        import('./apex-charts/line-charts/line-charts.component').then(
          (m) => m.LineChartsComponent
        ),
    },
    {
      path: 'apex-charts/column-charts',
      loadComponent: () =>
        import('./apex-charts/column-charts/column-charts.component').then(
          (m) => m.ColumnChartsComponent
        ),
    },
    {
      path: 'apex-charts/bar-charts',
      loadComponent: () =>
        import('./apex-charts/bar-charts/bar-charts.component').then(
          (m) => m.BarChartsComponent
        ),
    },
    {
      path: 'apex-charts/mixed-charts',
      loadComponent: () =>
        import('./apex-charts/mixed-charts/mixed-charts.component').then(
          (m) => m.MixedChartsComponent
        ),
    },
    {
      path: 'apex-charts/range-area-charts',
      loadComponent: () =>
        import('./apex-charts/range-area-charts/range-area-charts.component').then(
          (m) => m.RangeAreaChartsComponent
        ),
    },
    {
      path: 'apex-charts/timeline-charts',
      loadComponent: () =>
        import('./apex-charts/timeline-charts/timeline-charts.component').then(
          (m) => m.TimelineChartsComponent
        ),
    },
    {
      path: 'apex-charts/funnel-charts',
      loadComponent: () =>
        import('./apex-charts/funnel-charts/funnel-charts.component').then(
          (m) => m.FunnelChartsComponent
        ),
    },
    {
      path: 'apex-charts/candlestick-charts',
      loadComponent: () =>
        import('./apex-charts/candlestick-charts/candlestick-charts.component').then(
          (m) => m.CandlestickChartsComponent
        ),
    },
    {
      path: 'apex-charts/boxplot-charts',
      loadComponent: () =>
        import('./apex-charts/boxplot-charts/boxplot-charts.component').then(
          (m) => m.BoxplotChartsComponent
        ),
    },
    {
      path: 'apex-charts/bubble-charts',
      loadComponent: () =>
        import('./apex-charts/bubble-charts/bubble-charts.component').then(
          (m) => m.BubbleChartsComponent
        ),
    },
    {
      path: 'apex-charts/scatter-charts',
      loadComponent: () =>
        import('./apex-charts/scatter-charts/scatter-charts.component').then(
          (m) => m.ScatterChartsComponent
        ),
    },
    {
      path: 'apex-charts/heatmap-charts',
      loadComponent: () =>
        import('./apex-charts/heatmap-charts/heatmap-charts.component').then(
          (m) => m.HeatmapChartsComponent
        ),
    },
    {
      path: 'apex-charts/treemap-charts',
      loadComponent: () =>
        import('./apex-charts/treemap-charts/treemap-charts.component').then(
          (m) => m.TreemapChartsComponent
        ),
    },
    {
      path: 'apex-charts/pie-charts',
      loadComponent: () =>
        import('./apex-charts/pie-charts/pie-charts.component').then(
          (m) => m.PieChartsComponent
        ),
    },
    {
      path: 'apex-charts/radialbar-charts',
      loadComponent: () =>
        import('./apex-charts/radialbar-charts/radialbar-charts.component').then(
          (m) => m.RadialbarChartsComponent
        ),
    },
    {
      path: 'apex-charts/radar-charts',
      loadComponent: () =>
        import('./apex-charts/radar-charts/radar-charts.component').then(
          (m) => m.RadarChartsComponent
        ),
    },
    {
      path: 'apex-charts/polararea-charts',
      loadComponent: () =>
        import('./apex-charts/polararea-charts/polararea-charts.component').then(
          (m) => m.PolarareaChartsComponent
        ),
    },
    {
      path: 'apex-charts/slope-charts',
      loadComponent: () =>
        import('./apex-charts/slope-charts/slope-charts.component').then(
          (m) => m.SlopeChartsComponent
        ),
    },
    {
      path: 'chartjs-charts',
      loadComponent: () =>
        import('./chartjs-charts/chartjs-charts.component').then(
          (m) => m.ChartjsChartsComponent
        ),
    },
    {
      path: 'echart-charts',
      loadComponent: () =>
        import('./echart-charts/echart-charts.component').then(
          (m) => m.EchartChartsComponent
        ),
    },
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class chartsRoutingModule {
  static routes = admin;
}