import { ChartConfiguration, ChartType } from 'chart.js';

export let ApexData1 = {
  chart: {
    type: 'area',
    height: 60,
    width: 160,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      blur: 3,
      opacity: 0.2,
    },
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 2,
    dashArray: 0,
  },
  fill: {
    gradient: {
      enabled: false,
    },
  },
  series: [
    {
      name: 'Total Revenue',
      data: [
        0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
        61, 27, 54, 43, 19, 46,
      ],
    },
  ],
  yaxis: {
    min: 0,
  },
  colors: ['#fa057a'],
};

export let ApexData2 = {
  chart: {
    type: 'area',
    height: 60,
    width: 160,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      blur: 3,
      opacity: 0.2,
    },
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 2,
    dashArray: 0,
  },
  fill: {
    gradient: {
      enabled: false,
    },
  },
  series: [
    {
      name: 'Unique Visitors',
      data: [
        0, 45, 93, 53, 61, 27, 54, 43, 19, 46, 54, 38, 56, 24, 65, 31, 37, 39,
        62, 51, 35, 41, 35, 27,
      ],
    },
  ],
  yaxis: {
    min: 0,
  },
  colors: ['#2dce89'],
};

export let ApexData3 = {
  chart: {
    type: 'area',
    height: 60,
    width: 160,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      blur: 3,
      opacity: 0.2,
    },
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 2,
    dashArray: 0,
  },
  fill: {
    gradient: {
      enabled: false,
    },
  },
  series: [
    {
      name: 'Expenses',
      data: [
        0, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 45, 54, 38, 56, 24,
        65, 31, 37, 39, 62, 51,
      ],
    },
  ],
  yaxis: {
    min: 0,
  },
  colors: ['#ff5b51'],
};

export let ApexData4 = {
  chart: {
    type: 'area',
    height: 60,
    width: 160,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      blur: 3,
      opacity: 0.2,
    },
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 2,
    dashArray: 0,
  },
  fill: {
    gradient: {
      enabled: false,
    },
  },
  series: [
    {
      name: 'Expenses',
      data: [
        0, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 45, 54, 38, 56, 24,
        65, 31, 37, 39, 62, 51,
      ],
    },
  ],
  yaxis: {
    min: 0,
  },
  colors: ['#ff5b51'],
};

export let ApexSparklines1 = {
  series: [
    {
      data: [
        2, 4, 3, 4, 5, 4, 5, 3, 4, 5, 2, 4, 5, 4, 3, 5, 4, 3, 4, 5, 4, 5, 4, 3,
        5, 4, 3, 4, 5,
      ],
    },
  ],
  colors: ['#fa057a'],
  chart: {
    type: 'bar',
    widht: 250,
    height: 50,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '35%',
    },
  },

  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName: any) {
          return '';
        },
      },
    },
    marker: {
      show: true,
    },
  },
};

export let ApexSparklines2 = {
  series: [
    {
      data: [
        3, 5, 4, 4, 5, 4, 5, 3, 4, 5, 3, 4, 5, 4, 3, 5, 4, 3, 4, 5, 4, 5, 4, 3,
        5, 4, 3, 4, 5,
      ],
    },
  ],
  colors: ['#f7346b'],
  chart: {
    type: 'bar',
    widht: 250,
    height: 50,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '35%',
    },
  },

  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName: any) {
          return '';
        },
      },
    },
    marker: {
      show: true,
    },
  },
};

export let ApexSparklines3 = {
  series: [
    {
      data: [
        3, 5, 4, 4, 5, 4, 5, 3, 4, 5, 3, 4, 5, 4, 3, 5, 4, 3, 4, 5, 4, 5, 4, 3,
        5, 4, 3, 4, 5,
      ],
    },
  ],
  colors: ['#2dce89'],
  chart: {
    type: 'bar',
    widht: 250,
    height: 50,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '35%',
    },
  },

  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName: any) {
          return '';
        },
      },
    },
    marker: {
      show: true,
    },
  },
};

export let ApexSparklines4 = {
  series: [
    {
      data: [
        3, 5, 4, 4, 5, 4, 5, 3, 4, 5, 3, 4, 5, 4, 3, 5, 4, 3, 4, 5, 4, 5, 4, 3,
        5, 4, 3, 4, 5,
      ],
    },
  ],
  colors: ['#45aaf2'],
  chart: {
    type: 'bar',
    widht: 250,
    height: 50,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '35%',
    },
  },

  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName: any) {
          return '';
        },
      },
    },
    marker: {
      show: true,
    },
  },
};

//Crypto Charts
export let lineChartOptions: ChartConfiguration['options'] = {
  maintainAspectRatio: false,

  responsive: true,

  scales: {
    x: {
      grid: {
        color: 'transparent',
      },
      ticks: {
        sampleSize: 2,
        color: 'transparent',
      },
    },
    y: {
      display: false,
      ticks: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      mode: 'index',
      caretSize: 12,
      titleColor: '#7886a0',
      bodyColor: '#7886a0',
      backgroundColor: '#fff',
      cornerRadius: 3,
      intersect: false,
    },
    title: {
      display: false,
    },
  },
  elements: {
    line: {
      borderWidth: 3,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

export let lineChartType: ChartType = 'line';
export let lineChartLegend = true;
// export let lineChartColors: Color[] = [
//     {
//         backgroundColor: 'rgba(68, 84, 195,0.06)',
//         borderColor: 'rgba(68, 84, 195,0.6)',
//         // borderWidth: 3,
//         pointBorderColor: 'transparent',
//         pointBackgroundColor: 'transparent'
//     }
// ]
export let lineChartData: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [83, 56, 89, 73, 61, 75, 86, 56],
      label: 'Bitcoin',
    },
  ],
  labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
};

export let lineChartData1: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [45, 78, 67, 78, 36, 78, 89, 84],
      label: 'Nem',
    },
  ],
  labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
};
export let lineChartData2: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [56, 78, 36, 78, 29, 78, 37, 56],
      label: 'Ripple',
    },
  ],
  labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
};
export let lineChartData3: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [45, 78, 98, 34, 67, 28, 89, 45],
      label: 'Neo',
    },
  ],
  labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
};
