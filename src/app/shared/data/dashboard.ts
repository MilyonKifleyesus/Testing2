import { ChartConfiguration, ChartType } from 'chart.js';

//Chart js
export let ChartOptions:any= {
	series: [{
		name: "Total Budget",
		data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80]
	}, {
		name: "Amount Used",
		data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89]
	}],
	chart: {
		height: 320,
		type: 'line',
		zoom: {
			enabled: false
		},
		dropShadow: {
			enabled: true,
			enabledOnSeries: undefined,
			top: 5,
			left: 0,
			blur: 3,
			color: '#000',
			opacity: 0.1
		},
	},
	dataLabels: {
		enabled: false
	},
	legend: {
		position: 'top',
		fontSize: '14px',
		fontWeight: 500,
		fontFamily: 'Poppins, sans-serif',
		markers: {
		  width: 5,
		  height: 5,
		  size:6,
		  strokeWidth: 0,
		  strokeColor: '#fff',
		  fillColors: undefined,
		  radius: 5,
		  customHTML: undefined,
		  onClick: undefined,
		  offsetX: 0,
		  offsetY: 0
		},
	},
	stroke: {
		curve: 'smooth',
		width: '3',
		dashArray: [0, 5],
	},
	grid: {
		borderColor: '#f2f6f7',
	},
	colors: ["var(--primary-color)", "rgba(var(--primary-rgb), 0.3)"],
	yaxis: {
		title: {
			text: '',
			style: {
				color: '#adb5be',
				fontSize: '14px',
				fontFamily: 'poppins, sans-serif',
				fontWeight: 600,
				cssClass: 'apexcharts-yaxis-label',
			},
		}
	},
	xaxis: {
		type: 'month',
		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		axisBorder: {
			show: false,
			color: 'rgba(119, 119, 142, 0.05)',
			offsetX: 0,
			offsetY: 0,
		},
		axisTicks: {
			show: true,
			borderType: 'solid',
			color: 'rgba(119, 119, 142, 0.05)',
			width: 6,
			offsetX: 0,
			offsetY: 0
		},
		labels: {
			rotate: -90
		}
	}
};
export let ChartOptions1:any= {
  chart: {
	  height: 100,
	  type: "radialBar"
	},
	
	series: [50],
	
	colors: ["var(--primary-color)"],

	states: {
		normal: {
			filter: {
				type: 'none',
			}
		},
		hover: {
			filter: {
				type: 'none',
			}
		},
		active: {
			filter: {
				type: 'none',
			}
		},
	},
	
	plotOptions: {
	  radialBar: {
		hollow: {
		  size: "60%"
		},
	   
		dataLabels: {
		  showOn: "always",
		  name: {
			offsetY: -10,
			show: false,
			color: "#888",
			fontSize: "13px"
		  },
		  value: {
			offsetY: 5,
			color: "#111",
			fontSize: "18px",
			fontWeight: 'bold',
			show: true
		  }
		}
	  }
	},

	grid: {
		padding: {
			top: -20,
			right: -25,
			bottom: -20,
			left: -25
		},
	},
  
	stroke: {
	  lineCap: "round",
	},
	labels: [""]
}
export let ChartOptions2:any= {
  series: [{
		name: 'Total Projects',
		data: [44, 42, 57, 86, 58, 55, 70],
	}, {
		name: 'On Going',
		data: [-34, -22, -37, -56, -21, -35, -60],
	}],
	chart: {
		stacked: true,
		type: 'bar',
		height: 192,
	},
	grid: {
		show: false,
		borderColor: '#f2f6f7',
	},
	colors: ["var(--primary-color)", "var(--primary-color)"],                        
	plotOptions: {
		bar: {
			columnWidth: '15%',
			borderRadius: 5,
			borderRadiusApplication: 'end',
			borderRadiusWhenStacked: 'all',
			colors: {
				ranges: [{
					from: -100,
					to: -46,
					color: 'var(--primary-color)'
				}, {
					from: -45,
					to: 0,
					color: 'var(--primary-color)'
				}]
			},
			
		}
	},
	dataLabels: {
		enabled: false,
	},
	legend: {
		show: false,
		position: 'top',
	},
	yaxis: {
		Show: false,
		labels: {
			show: false,
		}
	},
	xaxis: {
		show: false,
		type: 'day',
		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
		axisBorder: {
			show: false,
			color: 'rgba(119, 119, 142, 0.05)',
			offsetX: 0,
			offsetY: 0,
		},
	}
}
//Bar Charts

export let barChartOptions: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  aspectRatio: 6,
  responsive: true,
  scales: {
    grid: {
      display: false,
    },
    x: {
      stacked: true,
      grid:{
        display: false,
      }
    },
    y: {
      stacked: true,
      display: false,
      grid: {
        display: false,
    
      },
      type: 'linear',
    },
  },
  plugins:{
    legend: {
      position: 'bottom',
      display: false,
    },
  }
};
export let barChartType: ChartType = 'bar';
export let barChartData: ChartConfiguration['data'] = {
  datasets: [
    {
      label: 'Total Project',
      backgroundColor: '#6259ca',
      borderColor: '#6259ca',
      data: [89, 59, 76, 56, 58, 73, 59, 87, 45, 54, 59, 76, 56],
      barThickness: 6,
      barPercentage: 4,
      categoryPercentage: 4,
      borderRadius: 50
    },
    {
      label: 'On Going',
      backgroundColor: 'rgba(204, 204, 204,0.2)',
      borderColor: 'rgba(204, 204, 204,0.2)',
      data: [66, 59, 76, 56, 58, 65, 59, 85, 23, 32, 59, 76, 56],
      barThickness: 6,
      barPercentage: 4,
      categoryPercentage: 4,
      borderRadius: 50
    },
  ],
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
  ],
};
// export let barChartColors: Color[] = [
//     {
//         backgroundColor: '#6259ca',
//         borderColor: '#6259ca',
//     },
//     {
//         backgroundColor: "rgba(204, 204, 204,0.2)",
// 		borderColor: "rgba(204, 204, 204,0.2)",
//     }

// ]
