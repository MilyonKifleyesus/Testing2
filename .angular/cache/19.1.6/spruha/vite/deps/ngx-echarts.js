import {
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Output,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject
} from "./chunk-IOBWKMFY.js";
import "./chunk-R46UXVFS.js";
import "./chunk-D6YGKQ4W.js";
import {
  Observable,
  ReplaySubject,
  Subject,
  Subscription,
  asyncScheduler,
  switchMap,
  throttleTime
} from "./chunk-L5ZQUDYH.js";
import "./chunk-ZYKX7RMX.js";
import {
  __async
} from "./chunk-AJH3MT3R.js";

// node_modules/ngx-echarts/fesm2022/ngx-echarts.mjs
var ChangeFilterV2 = class {
  constructor() {
    this.subject = new ReplaySubject(1);
    this.subscriptions = new Subscription();
  }
  doFilter(changes) {
    this.subject.next(changes);
  }
  dispose() {
    this.subscriptions.unsubscribe();
  }
  notEmpty(key, handler) {
    this.subscriptions.add(this.subject.subscribe((changes) => {
      if (changes[key]) {
        const value = changes[key].currentValue;
        if (value !== void 0 && value !== null) {
          handler(value);
        }
      }
    }));
  }
  has(key, handler) {
    this.subscriptions.add(this.subject.subscribe((changes) => {
      if (changes[key]) {
        const value = changes[key].currentValue;
        handler(value);
      }
    }));
  }
  notFirst(key, handler) {
    this.subscriptions.add(this.subject.subscribe((changes) => {
      if (changes[key] && !changes[key].isFirstChange()) {
        const value = changes[key].currentValue;
        handler(value);
      }
    }));
  }
  notFirstAndEmpty(key, handler) {
    this.subscriptions.add(this.subject.subscribe((changes) => {
      if (changes[key] && !changes[key].isFirstChange()) {
        const value = changes[key].currentValue;
        if (value !== void 0 && value !== null) {
          handler(value);
        }
      }
    }));
  }
};
var NGX_ECHARTS_CONFIG = new InjectionToken("NGX_ECHARTS_CONFIG");
var NgxEchartsDirective = class _NgxEchartsDirective {
  constructor(config, el, ngZone) {
    this.el = el;
    this.ngZone = ngZone;
    this.options = null;
    this.theme = null;
    this.initOpts = null;
    this.merge = null;
    this.autoResize = true;
    this.loading = false;
    this.loadingType = "default";
    this.loadingOpts = null;
    this.chartInit = new EventEmitter();
    this.optionsError = new EventEmitter();
    this.chartClick = this.createLazyEvent("click");
    this.chartDblClick = this.createLazyEvent("dblclick");
    this.chartMouseDown = this.createLazyEvent("mousedown");
    this.chartMouseMove = this.createLazyEvent("mousemove");
    this.chartMouseUp = this.createLazyEvent("mouseup");
    this.chartMouseOver = this.createLazyEvent("mouseover");
    this.chartMouseOut = this.createLazyEvent("mouseout");
    this.chartGlobalOut = this.createLazyEvent("globalout");
    this.chartContextMenu = this.createLazyEvent("contextmenu");
    this.chartHighlight = this.createLazyEvent("highlight");
    this.chartDownplay = this.createLazyEvent("downplay");
    this.chartSelectChanged = this.createLazyEvent("selectchanged");
    this.chartLegendSelectChanged = this.createLazyEvent("legendselectchanged");
    this.chartLegendSelected = this.createLazyEvent("legendselected");
    this.chartLegendUnselected = this.createLazyEvent("legendunselected");
    this.chartLegendLegendSelectAll = this.createLazyEvent("legendselectall");
    this.chartLegendLegendInverseSelect = this.createLazyEvent("legendinverseselect");
    this.chartLegendScroll = this.createLazyEvent("legendscroll");
    this.chartDataZoom = this.createLazyEvent("datazoom");
    this.chartDataRangeSelected = this.createLazyEvent("datarangeselected");
    this.chartGraphRoam = this.createLazyEvent("graphroam");
    this.chartGeoRoam = this.createLazyEvent("georoam");
    this.chartTreeRoam = this.createLazyEvent("treeroam");
    this.chartTimelineChanged = this.createLazyEvent("timelinechanged");
    this.chartTimelinePlayChanged = this.createLazyEvent("timelineplaychanged");
    this.chartRestore = this.createLazyEvent("restore");
    this.chartDataViewChanged = this.createLazyEvent("dataviewchanged");
    this.chartMagicTypeChanged = this.createLazyEvent("magictypechanged");
    this.chartGeoSelectChanged = this.createLazyEvent("geoselectchanged");
    this.chartGeoSelected = this.createLazyEvent("geoselected");
    this.chartGeoUnselected = this.createLazyEvent("geounselected");
    this.chartAxisAreaSelected = this.createLazyEvent("axisareaselected");
    this.chartBrush = this.createLazyEvent("brush");
    this.chartBrushEnd = this.createLazyEvent("brushend");
    this.chartBrushSelected = this.createLazyEvent("brushselected");
    this.chartGlobalCursorTaken = this.createLazyEvent("globalcursortaken");
    this.chartRendered = this.createLazyEvent("rendered");
    this.chartFinished = this.createLazyEvent("finished");
    this.animationFrameID = null;
    this.chart$ = new ReplaySubject(1);
    this.resize$ = new Subject();
    this.changeFilter = new ChangeFilterV2();
    this.resizeObFired = false;
    this.echarts = config.echarts;
    this.theme = config.theme || null;
  }
  ngOnChanges(changes) {
    this.changeFilter.doFilter(changes);
  }
  ngOnInit() {
    if (!window.ResizeObserver) {
      throw new Error("please install a polyfill for ResizeObserver");
    }
    this.resizeSub = this.resize$.pipe(throttleTime(100, asyncScheduler, {
      leading: false,
      trailing: true
    })).subscribe(() => this.resize());
    if (this.autoResize) {
      this.resizeOb = this.ngZone.runOutsideAngular(() => new window.ResizeObserver((entries) => {
        for (const entry of entries) {
          if (entry.target === this.el.nativeElement) {
            if (!this.resizeObFired) {
              this.resizeObFired = true;
            } else {
              this.animationFrameID = window.requestAnimationFrame(() => {
                this.resize$.next();
              });
            }
          }
        }
      }));
      this.resizeOb.observe(this.el.nativeElement);
    }
    this.changeFilter.notFirstAndEmpty("options", (opt) => this.onOptionsChange(opt));
    this.changeFilter.notFirstAndEmpty("merge", (opt) => this.setOption(opt));
    this.changeFilter.has("loading", (v) => this.toggleLoading(!!v));
    this.changeFilter.notFirst("theme", () => this.refreshChart());
  }
  ngOnDestroy() {
    window.clearTimeout(this.initChartTimer);
    if (this.resizeSub) {
      this.resizeSub.unsubscribe();
    }
    if (this.animationFrameID) {
      window.cancelAnimationFrame(this.animationFrameID);
    }
    if (this.resizeOb) {
      this.resizeOb.unobserve(this.el.nativeElement);
    }
    if (this.loadingSub) {
      this.loadingSub.unsubscribe();
    }
    this.changeFilter.dispose();
    this.dispose();
  }
  ngAfterViewInit() {
    this.initChartTimer = window.setTimeout(() => this.initChart());
  }
  dispose() {
    if (this.chart) {
      if (!this.chart.isDisposed()) {
        this.chart.dispose();
      }
      this.chart = null;
    }
  }
  /**
   * resize chart
   */
  resize() {
    if (this.chart) {
      this.chart.resize();
    }
  }
  toggleLoading(loading) {
    if (this.chart) {
      loading ? this.chart.showLoading(this.loadingType, this.loadingOpts) : this.chart.hideLoading();
    } else {
      this.loadingSub = this.chart$.subscribe((chart) => loading ? chart.showLoading(this.loadingType, this.loadingOpts) : chart.hideLoading());
    }
  }
  setOption(option, opts) {
    if (this.chart) {
      try {
        this.chart.setOption(option, opts);
      } catch (e) {
        console.error(e);
        this.optionsError.emit(e);
      }
    }
  }
  /**
   * dispose old chart and create a new one.
   */
  refreshChart() {
    return __async(this, null, function* () {
      this.dispose();
      yield this.initChart();
    });
  }
  createChart() {
    const dom = this.el.nativeElement;
    if (window && window.getComputedStyle) {
      const prop = window.getComputedStyle(dom, null).getPropertyValue("height");
      if ((!prop || prop === "0px") && (!dom.style.height || dom.style.height === "0px")) {
        dom.style.height = "400px";
      }
    }
    return this.ngZone.runOutsideAngular(() => {
      const load = typeof this.echarts === "function" ? this.echarts : () => Promise.resolve(this.echarts);
      return load().then(({
        init
      }) => init(dom, this.theme, this.initOpts));
    });
  }
  initChart() {
    return __async(this, null, function* () {
      yield this.onOptionsChange(this.options);
      if (this.merge && this.chart) {
        this.setOption(this.merge);
      }
    });
  }
  onOptionsChange(opt) {
    return __async(this, null, function* () {
      if (!opt) {
        return;
      }
      if (this.chart) {
        this.setOption(this.options, true);
      } else {
        this.chart = yield this.createChart();
        this.chart$.next(this.chart);
        this.chartInit.emit(this.chart);
        this.setOption(this.options, true);
      }
    });
  }
  // allows to lazily bind to only those events that are requested through the `@Output` by parent components
  // see https://stackoverflow.com/questions/51787972/optimal-reentering-the-ngzone-from-eventemitter-event for more info
  createLazyEvent(eventName) {
    return this.chartInit.pipe(switchMap((chart) => new Observable((observer) => {
      chart.on(eventName, (data) => this.ngZone.run(() => observer.next(data)));
      return () => {
        if (this.chart) {
          if (!this.chart.isDisposed()) {
            chart.off(eventName);
          }
        }
      };
    })));
  }
  static {
    this.ɵfac = function NgxEchartsDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxEchartsDirective)(ɵɵdirectiveInject(NGX_ECHARTS_CONFIG), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgxEchartsDirective,
      selectors: [["echarts"], ["", "echarts", ""]],
      inputs: {
        options: "options",
        theme: "theme",
        initOpts: "initOpts",
        merge: "merge",
        autoResize: "autoResize",
        loading: "loading",
        loadingType: "loadingType",
        loadingOpts: "loadingOpts"
      },
      outputs: {
        chartInit: "chartInit",
        optionsError: "optionsError",
        chartClick: "chartClick",
        chartDblClick: "chartDblClick",
        chartMouseDown: "chartMouseDown",
        chartMouseMove: "chartMouseMove",
        chartMouseUp: "chartMouseUp",
        chartMouseOver: "chartMouseOver",
        chartMouseOut: "chartMouseOut",
        chartGlobalOut: "chartGlobalOut",
        chartContextMenu: "chartContextMenu",
        chartHighlight: "chartHighlight",
        chartDownplay: "chartDownplay",
        chartSelectChanged: "chartSelectChanged",
        chartLegendSelectChanged: "chartLegendSelectChanged",
        chartLegendSelected: "chartLegendSelected",
        chartLegendUnselected: "chartLegendUnselected",
        chartLegendLegendSelectAll: "chartLegendLegendSelectAll",
        chartLegendLegendInverseSelect: "chartLegendLegendInverseSelect",
        chartLegendScroll: "chartLegendScroll",
        chartDataZoom: "chartDataZoom",
        chartDataRangeSelected: "chartDataRangeSelected",
        chartGraphRoam: "chartGraphRoam",
        chartGeoRoam: "chartGeoRoam",
        chartTreeRoam: "chartTreeRoam",
        chartTimelineChanged: "chartTimelineChanged",
        chartTimelinePlayChanged: "chartTimelinePlayChanged",
        chartRestore: "chartRestore",
        chartDataViewChanged: "chartDataViewChanged",
        chartMagicTypeChanged: "chartMagicTypeChanged",
        chartGeoSelectChanged: "chartGeoSelectChanged",
        chartGeoSelected: "chartGeoSelected",
        chartGeoUnselected: "chartGeoUnselected",
        chartAxisAreaSelected: "chartAxisAreaSelected",
        chartBrush: "chartBrush",
        chartBrushEnd: "chartBrushEnd",
        chartBrushSelected: "chartBrushSelected",
        chartGlobalCursorTaken: "chartGlobalCursorTaken",
        chartRendered: "chartRendered",
        chartFinished: "chartFinished"
      },
      exportAs: ["echarts"],
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxEchartsDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "echarts, [echarts]",
      exportAs: "echarts"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [NGX_ECHARTS_CONFIG]
    }]
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    options: [{
      type: Input
    }],
    theme: [{
      type: Input
    }],
    initOpts: [{
      type: Input
    }],
    merge: [{
      type: Input
    }],
    autoResize: [{
      type: Input
    }],
    loading: [{
      type: Input
    }],
    loadingType: [{
      type: Input
    }],
    loadingOpts: [{
      type: Input
    }],
    chartInit: [{
      type: Output
    }],
    optionsError: [{
      type: Output
    }],
    chartClick: [{
      type: Output
    }],
    chartDblClick: [{
      type: Output
    }],
    chartMouseDown: [{
      type: Output
    }],
    chartMouseMove: [{
      type: Output
    }],
    chartMouseUp: [{
      type: Output
    }],
    chartMouseOver: [{
      type: Output
    }],
    chartMouseOut: [{
      type: Output
    }],
    chartGlobalOut: [{
      type: Output
    }],
    chartContextMenu: [{
      type: Output
    }],
    chartHighlight: [{
      type: Output
    }],
    chartDownplay: [{
      type: Output
    }],
    chartSelectChanged: [{
      type: Output
    }],
    chartLegendSelectChanged: [{
      type: Output
    }],
    chartLegendSelected: [{
      type: Output
    }],
    chartLegendUnselected: [{
      type: Output
    }],
    chartLegendLegendSelectAll: [{
      type: Output
    }],
    chartLegendLegendInverseSelect: [{
      type: Output
    }],
    chartLegendScroll: [{
      type: Output
    }],
    chartDataZoom: [{
      type: Output
    }],
    chartDataRangeSelected: [{
      type: Output
    }],
    chartGraphRoam: [{
      type: Output
    }],
    chartGeoRoam: [{
      type: Output
    }],
    chartTreeRoam: [{
      type: Output
    }],
    chartTimelineChanged: [{
      type: Output
    }],
    chartTimelinePlayChanged: [{
      type: Output
    }],
    chartRestore: [{
      type: Output
    }],
    chartDataViewChanged: [{
      type: Output
    }],
    chartMagicTypeChanged: [{
      type: Output
    }],
    chartGeoSelectChanged: [{
      type: Output
    }],
    chartGeoSelected: [{
      type: Output
    }],
    chartGeoUnselected: [{
      type: Output
    }],
    chartAxisAreaSelected: [{
      type: Output
    }],
    chartBrush: [{
      type: Output
    }],
    chartBrushEnd: [{
      type: Output
    }],
    chartBrushSelected: [{
      type: Output
    }],
    chartGlobalCursorTaken: [{
      type: Output
    }],
    chartRendered: [{
      type: Output
    }],
    chartFinished: [{
      type: Output
    }]
  });
})();
var provideEchartsCore = (config) => {
  return {
    provide: NGX_ECHARTS_CONFIG,
    useValue: config
  };
};
var NgxEchartsModule = class _NgxEchartsModule {
  static forRoot(config) {
    return {
      ngModule: _NgxEchartsModule,
      providers: [provideEchartsCore(config)]
    };
  }
  static forChild() {
    return {
      ngModule: _NgxEchartsModule
    };
  }
  static {
    this.ɵfac = function NgxEchartsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxEchartsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgxEchartsModule,
      imports: [NgxEchartsDirective],
      exports: [NgxEchartsDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxEchartsModule, [{
    type: NgModule,
    args: [{
      imports: [NgxEchartsDirective],
      exports: [NgxEchartsDirective]
    }]
  }], null, null);
})();
export {
  NGX_ECHARTS_CONFIG,
  NgxEchartsDirective,
  NgxEchartsModule,
  provideEchartsCore
};
//# sourceMappingURL=ngx-echarts.js.map
