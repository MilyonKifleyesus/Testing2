import { ApexOptions } from 'apexcharts';

export class CryptoMarketData {
    id?: number;
    img?: string;
    name?: string;
    coinName?: string;
    lastPrice?: number;
    marketPrice?: number;
    changes?: number | any;
}

export const cryptoMarketData: CryptoMarketData[] = [
    { id: 1, img: './assets/img/svgs/crypto-currencies/btc.svg', name: 'Bitcoin', coinName: 'BTC', lastPrice: 10153, marketPrice: 51191183730, changes: +3.49 },
    { id: 2, img: './assets/img/svgs/crypto-currencies/eth.svg', name: 'Ethereum', coinName: 'ETH', lastPrice: 425.25, marketPrice: 448308110, changes: +0.53 },
    { id: 3, img: './assets/img/svgs/crypto-currencies/xrp.svg', name: 'Ripple', coinName: 'XRP', lastPrice: 1.2029, marketPrice: 76380043, changes: +0.26 },
    { id: 4, img: './assets/img/svgs/crypto-currencies/ltc.svg', name: 'litecoin', coinName: 'LTC', lastPrice: 1547.67, marketPrice: 61418730, changes: -0.63 },
    { id: 5, img: './assets/img/svgs/crypto-currencies/neo.svg', name: 'Neo', coinName: 'NEO', lastPrice: 723.48, marketPrice: 190767295, changes: -2.18 },
    { id: 6, img: './assets/img/svgs/crypto-currencies/xmr.svg', name: 'Monero', coinName: 'XMR', lastPrice: 305.16, marketPrice: 4778157533, changes: +3.12 },
    { id: 7, img: './assets/img/svgs/crypto-currencies/eos.svg', name: 'EOS', coinName: 'EOS', lastPrice: 149.18, marketPrice: 84449000, changes: -1.42 },
    { id: 8, img: './assets/img/svgs/crypto-currencies/steem.svg', name: 'Steem', coinName: 'Steem', lastPrice: 0.467813, marketPrice: 8358735080, changes: +3.49 },
    { id: 9, img: './assets/img/svgs/crypto-currencies/miota.svg', name: 'Iota', coinName: 'IOTA', lastPrice: 2.34, marketPrice: 6504100862, changes: -1.05 },
    { id: 10, img: './assets/img/svgs/crypto-currencies/dash.svg', name: 'Dash', coinName: 'DASH', lastPrice: 747.222, marketPrice: 5881413815, changes: +0.94 },
    { id: 11, img: './assets/img/svgs/crypto-currencies/waves.svg', name: 'Waves', coinName: 'NEM', lastPrice: 181.39, marketPrice: 3084108676, changes: -3.23 },
]



export let lineApexChart: ApexOptions | any = {
    chart: {
        type: 'area',
        height: 40,
        width: 50,
        sparkline: {
            enabled: true
        }
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
        type: 'gradient',
        gradient: {
            opacityFrom: 0.8,
            opacityTo: 0.05,
            stops: [0, 98],
        }
    },
    series: [{
        name: 'Value',
        data: [20, 14, 19, 10, 23, 20, 22, 9, 12]
    }],
    yaxis: {
        min: 0,
        show: false,
        axisBorder: {
            show: false
        },
    },
    xaxis: {
        show: false,
        axisBorder: {
            show: false
        },
    },
  //   tooltip: {
  //       enabled: false,
  //   },
    colors: ["rgb(98, 89, 202)"],
}
export let lineApexChart1: ApexOptions | any = {
    chart: {
        type: 'area',
        height: 40,
        width: 50,
        sparkline: {
            enabled: true
        }
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
        type: 'gradient',
        gradient: {
            opacityFrom: 0.8,
            opacityTo: 0.1,
            stops: [0, 98],
        }
    },
    series: [{
        name: 'Value',
        data: [20, 20, 22, 9, 14, 19, 10, 25, 12]
    }],
    yaxis: {
        min: 0,
        show: false,
        axisBorder: {
            show: false
        },
    },
    xaxis: {
        show: false,
        axisBorder: {
            show: false
        },
    },
  //   tooltip: {
  //       enabled: false,
  //   },
    colors: ["rgb(98, 89, 202)"],
}

export let lineApexChart2: ApexOptions | any = {
    chart: {
        type: 'area',
        height: 40,
        width: 50,
        sparkline: {
            enabled: true
        }
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
        type: 'gradient',
        gradient: {
            opacityFrom: 0.8,
            opacityTo: 0.1,
            stops: [0, 98],
        }
    },
    series: [{
        name: 'Value',
        data: [20, 14, 20, 22, 9, 12, 19, 10, 25]
    }],
    yaxis: {
        min: 0,
        show: false,
        axisBorder: {
            show: false
        },
    },
    xaxis: {
        show: false,
        axisBorder: {
            show: false
        },
    },
  //   tooltip: {
  //       enabled: false,
  //   },
    colors: ["rgb(98, 89, 202)"],
}
export let lineApexChart3: ApexOptions | any = {
    chart: {
        type: 'area',
        height: 40,
        width: 50,
        sparkline: {
            enabled: true
        }
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
        type: 'gradient',
        gradient: {
            opacityFrom: 0.8,
            opacityTo: 0.1,
            stops: [0, 98],
        }
    },
    series: [{
        name: 'Value',
        data: [20, 20, 22, 9, 12, 14, 19, 10, 25]
    }],
    yaxis: {
        min: 0,
        show: false,
        axisBorder: {
            show: false
        },
    },
    xaxis: {
        show: false,
        axisBorder: {
            show: false
        },
    },
  //   tooltip: {
  //       enabled: false,
  //   },
    colors: ["rgb(98, 89, 202)"],
  
}