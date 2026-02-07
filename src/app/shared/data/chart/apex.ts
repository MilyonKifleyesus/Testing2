//Apex Radialbar Charts
//BASIC PIE CHART
export let BasicPieChartData = {
    series: [70],
    chart: {
      height: 300,
      type: 'radialBar',
    },
    colors: ["#6259ca"],
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%',
        },
      },
    },
    labels: ['Cricket'],
  };
  
  //Multiple Radialbar Chart
  export let multipleradialBarChart = {
    series: [44, 55, 67, 83],
    chart: {
      height: 300,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function () {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 249;
            },
          },
        },
      },
    },
    colors: ["#6259ca", "#01b8ff", "#ff9b21", "#fd6074"],
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
  };
  
  //Circle Chart - Custom Angle
  export let CustomAngleChartData = {
    series: [76, 67, 61, 90],
    chart: {
      height: 320,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: '30%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
      },
    },
    colors: ['#6259ca', '#01b8ff', '#ff9b21', '#fd6074'],
    labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
    legend: {
      show: true,
      floating: true,
      fontSize: '14px',
      position: 'left',
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0,
      },
      formatter: function (
        seriesName: string,
        opts: {
          w: { globals: { series: { [x: string]: string } } };
          seriesIndex: string | number;
        }
      ) {
        return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex];
      },
      itemMargin: {
        vertical: 3,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false,
          },
        },
      },
    ],
  };
  
  //Gradient Circle Chart
  export let GradientCircleChartData = {
    series: [75],
    chart: {
      height: 320,
      type: 'radialBar',
      toolbar: {
        show: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: '70%',
          background: '#fff',
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: 'front',
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24,
          },
        },
        track: {
          background: '#fff',
          strokeWidth: '67%',
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35,
          },
        },
  
        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: '#888',
            fontSize: '17px',
          },
          value: {
            formatter: function (val: string) {
              return parseInt(val);
            },
            color: '#111',
            fontSize: '36px',
            show: true,
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#00b9ff'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: 'round',
    },
    labels: ['Percent'],
  };
  
  //Stroked Circular Gauge
  export let StrokedCircularGaugeData = {
    series: [67],
    chart: {
      height: 320,
      type: 'radialBar',
      offsetY: -10,
    },
    colors: ["#6259ca"],
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: '16px',
            color: undefined,
            offsetY: 120,
          },
          value: {
            offsetY: 76,
            fontSize: '22px',
            color: undefined,
            formatter: function (val: string) {
              return val + '%';
            },
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    stroke: {
      dashArray: 4,
    },
    labels: ['Median Ratio'],
  };
  
  //Circle Chart With Image
  export let CircleImageChartData = {
    series: [65],
    chart: {
      height: 300,
      type: 'radialBar',
      toolbar: {
        show: true,
      },
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: '70%',
          imageWidth: 32,
          imageHeight: 32,
          imageClipped: false,
        },
        dataLabels: {
          name: {
            show: false,
            color: '#fff',
          },
          value: {
            show: true,
            color: '#333',
            offsetY: 10,
            fontSize: '22px',
          },
        },
      },
    },
    fill: {
      type: 'image',
      image: {
        src: ['./assets/images/media/media-64.jpg'],
      },
    },
    stroke: {
      lineCap: 'round',
    },
    labels: ['Volatility'],
  };
  
  //Semi Circular Gauge
  export let SemiCircularGaugeData = {
    series: [76],
    chart: {
      type: 'radialBar',
      offsetY: -20,
      height: 320,
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: '#fff',
          strokeWidth: '97%',
          margin: 5, // margin is in pixels
          dropShadow: {
            enabled: false,
            top: 2,
            left: 0,
            color: '#999',
            opacity: 1,
            blur: 2,
          },
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: '22px',
          },
        },
      },
    },
    colors: ["#6259ca"],
    grid: {
      padding: {
        top: -10,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91],
      },
    },
    labels: ['Average Results'],
  };

  //Apex Polar Area Charts
//BASIC POLAR AREA CHART
export let PolarAreaChartData = {
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    chart: {
      type: 'polarArea',
      // width: 380,
      height: 300
    },
    stroke: {
      colors: ['#fff'],
    },
    fill: {
      opacity: 0.8,
    },
    legend: {
      position: 'bottom',
    },
    colors: ["#6259ca", "#01b8ff", "#ff9b21", "#49b6f5", "#fd6074", "#19b159", "#a65e76", "#49b6f5", "#5b67c7"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            // width: 200,
          },
        },
      },
    ],
  };
  
  //Polar Area Monochrome Chart
  export let PolarAreaMonochromeChart = {
    series: [42, 47, 52, 58, 65],
    chart: {
      height: 300,
      type: 'polarArea',
    },
    labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
    fill: {
      opacity: 1,
    },
    stroke: {
      width: 1,
      colors: undefined,
    },
    yaxis: {
      show: false,
    },
    legend: {
      position: 'bottom',
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0,
        },
        spokes: {
          strokeWidth: 0,
        },
      },
    },
    theme: {
      monochrome: {
        enabled: true,
        shadeTo: 'light',
        shadeIntensity: 0.6,
        color: "#6259ca",
      },
    },
  };