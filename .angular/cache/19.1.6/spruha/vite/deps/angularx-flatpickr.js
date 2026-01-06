import {
  esm_default
} from "./chunk-HEMVQW33.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-XCUGCCSF.js";
import {
  isPlatformBrowser
} from "./chunk-37IJTNUX.js";
import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Output,
  PLATFORM_ID,
  Renderer2,
  forwardRef,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵlistener
} from "./chunk-IOBWKMFY.js";
import "./chunk-R46UXVFS.js";
import "./chunk-D6YGKQ4W.js";
import "./chunk-L5ZQUDYH.js";
import "./chunk-ZYKX7RMX.js";
import "./chunk-AJH3MT3R.js";

// node_modules/angularx-flatpickr/fesm2022/angularx-flatpickr.mjs
var FlatpickrDefaults = class _FlatpickrDefaults {
  constructor() {
    this.altFormat = "F j, Y";
    this.altInput = false;
    this.altInputClass = "";
    this.allowInput = false;
    this.allowInvalidPreload = false;
    this.appendTo = void 0;
    this.ariaDateFormat = "F j, Y";
    this.clickOpens = true;
    this.dateFormat = "Y-m-d";
    this.defaultHour = 12;
    this.defaultMinute = 0;
    this.defaultSeconds = 0;
    this.disable = [];
    this.disableMobile = false;
    this.enableTime = false;
    this.enableSeconds = false;
    this.formatDate = void 0;
    this.hourIncrement = 1;
    this.inline = false;
    this.maxDate = void 0;
    this.minDate = void 0;
    this.maxTime = void 0;
    this.minTime = void 0;
    this.minuteIncrement = 5;
    this.mode = "single";
    this.nextArrow = ">";
    this.noCalendar = false;
    this.now = /* @__PURE__ */ new Date();
    this.prevArrow = "<";
    this.shorthandCurrentMonth = false;
    this.static = false;
    this.time24hr = false;
    this.utc = false;
    this.weekNumbers = false;
    this.wrap = false;
    this.plugins = [];
    this.locale = "default";
    this.convertModelValue = false;
    this.showMonths = 1;
    this.monthSelectorType = "static";
    this.ignoredFocusElements = [];
  }
  static {
    this.ɵfac = function FlatpickrDefaults_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FlatpickrDefaults)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _FlatpickrDefaults,
      factory: _FlatpickrDefaults.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlatpickrDefaults, [{
    type: Injectable
  }], null, null);
})();
var FLATPICKR_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FlatpickrDirective),
  multi: true
};
var FlatpickrDirective = class _FlatpickrDirective {
  constructor(elm, defaults, renderer, platformId) {
    this.elm = elm;
    this.defaults = defaults;
    this.renderer = renderer;
    this.platformId = platformId;
    this.options = {};
    this.ignoredFocusElements = [];
    this.flatpickrReady = new EventEmitter();
    this.flatpickrChange = new EventEmitter();
    this.flatpickrValueUpdate = new EventEmitter();
    this.flatpickrOpen = new EventEmitter();
    this.flatpickrClose = new EventEmitter();
    this.flatpickrMonthChange = new EventEmitter();
    this.flatpickrYearChange = new EventEmitter();
    this.flatpickrDayCreate = new EventEmitter();
    this.isDisabled = false;
    this.onChangeFn = () => {
    };
    this.onTouchedFn = () => {
    };
  }
  ngAfterViewInit() {
    const options = {
      altFormat: this.altFormat,
      altInput: this.altInput,
      altInputClass: this.altInputClass,
      allowInput: this.allowInput,
      allowInvalidPreload: this.allowInvalidPreload,
      appendTo: this.appendTo,
      ariaDateFormat: this.ariaDateFormat,
      clickOpens: this.clickOpens,
      dateFormat: this.dateFormat,
      defaultHour: this.defaultHour,
      defaultMinute: this.defaultMinute,
      defaultSeconds: this.defaultSeconds,
      disable: this.disable,
      disableMobile: this.disableMobile,
      enable: this.enable,
      enableTime: this.enableTime,
      enableSeconds: this.enableSeconds,
      formatDate: this.formatDate,
      hourIncrement: this.hourIncrement,
      defaultDate: this.initialValue,
      inline: this.inline,
      maxDate: this.maxDate,
      minDate: this.minDate,
      maxTime: this.maxTime,
      minTime: this.minTime,
      minuteIncrement: this.minuteIncrement,
      mode: this.mode,
      nextArrow: this.nextArrow,
      noCalendar: this.noCalendar,
      now: this.now,
      parseDate: this.parseDate,
      prevArrow: this.prevArrow,
      shorthandCurrentMonth: this.shorthandCurrentMonth,
      showMonths: this.showMonths,
      monthSelectorType: this.monthSelectorType,
      static: this.static,
      time24hr: this.time24hr,
      weekNumbers: this.weekNumbers,
      getWeek: this.getWeek,
      wrap: this.wrap,
      plugins: this.plugins,
      locale: this.locale,
      ignoredFocusElements: this.ignoredFocusElements,
      onChange: (selectedDates, dateString, instance) => {
        this.flatpickrChange.emit({
          selectedDates,
          dateString,
          instance
        });
      },
      onOpen: (selectedDates, dateString, instance) => {
        this.flatpickrOpen.emit({
          selectedDates,
          dateString,
          instance
        });
      },
      onClose: (selectedDates, dateString, instance) => {
        this.flatpickrClose.emit({
          selectedDates,
          dateString,
          instance
        });
      },
      onMonthChange: (selectedDates, dateString, instance) => {
        this.flatpickrMonthChange.emit({
          selectedDates,
          dateString,
          instance
        });
      },
      onYearChange: (selectedDates, dateString, instance) => {
        this.flatpickrYearChange.emit({
          selectedDates,
          dateString,
          instance
        });
      },
      onReady: (selectedDates, dateString, instance) => {
        this.flatpickrReady.emit({
          selectedDates,
          dateString,
          instance
        });
      },
      onValueUpdate: (selectedDates, dateString, instance) => {
        this.flatpickrValueUpdate.emit({
          selectedDates,
          dateString,
          instance
        });
      },
      onDayCreate: (selectedDates, dateString, instance, dayElement) => {
        this.flatpickrDayCreate.emit({
          selectedDates,
          dateString,
          instance,
          dayElement
        });
      }
    };
    Object.keys(options).forEach((key) => {
      if (typeof options[key] === "undefined") {
        if (typeof this.options[key] !== "undefined") {
          options[key] = this.options[key];
        } else {
          options[key] = this.defaults[key];
        }
      }
    });
    options.time_24hr = options.time24hr;
    options.altInputClass = (options.altInputClass || "") + " " + this.elm.nativeElement.className;
    if (!options.enable) {
      delete options.enable;
    }
    if (isPlatformBrowser(this.platformId)) {
      this.instance = esm_default(this.elm.nativeElement, options);
      this.setDisabledState(this.isDisabled);
    }
  }
  ngOnChanges(changes) {
    if (this.instance) {
      Object.keys(changes).forEach((inputKey) => {
        this.instance.set(inputKey, this[inputKey]);
      });
    }
  }
  ngOnDestroy() {
    if (this.instance) {
      this.instance.destroy();
    }
  }
  writeValue(value) {
    let convertedValue = value;
    if (this.convertModelValue && this.mode === "range" && value) {
      convertedValue = [value.from, value.to];
    }
    if (this.instance) {
      this.instance.setDate(convertedValue);
    } else {
      this.initialValue = convertedValue;
    }
  }
  registerOnChange(fn) {
    this.onChangeFn = fn;
  }
  registerOnTouched(fn) {
    this.onTouchedFn = fn;
  }
  setDisabledState(isDisabled) {
    this.isDisabled = isDisabled;
    if (this.instance) {
      if (this.isDisabled) {
        this.renderer.setProperty(this.instance._input, "disabled", "disabled");
      } else {
        this.renderer.removeAttribute(this.instance._input, "disabled");
      }
    }
  }
  inputChanged() {
    const value = this.elm.nativeElement.value;
    if (this.convertModelValue && typeof value === "string") {
      switch (this.mode) {
        case "multiple":
          const dates = value.split("; ").map((str) => this.instance.parseDate(str, this.instance.config.dateFormat, !this.instance.config.enableTime));
          this.onChangeFn(dates);
          break;
        case "range":
          const [from, to] = value.split(this.instance.l10n.rangeSeparator).map((str) => this.instance.parseDate(str, this.instance.config.dateFormat, !this.instance.config.enableTime));
          this.onChangeFn({
            from,
            to
          });
          break;
        case "single":
        default:
          this.onChangeFn(this.instance.parseDate(value, this.instance.config.dateFormat, !this.instance.config.enableTime));
      }
    } else {
      this.onChangeFn(value);
    }
  }
  static {
    this.ɵfac = function FlatpickrDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FlatpickrDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(FlatpickrDefaults), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(PLATFORM_ID));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _FlatpickrDirective,
      selectors: [["", "mwlFlatpickr", ""]],
      hostBindings: function FlatpickrDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("blur", function FlatpickrDirective_blur_HostBindingHandler() {
            return ctx.onTouchedFn();
          })("input", function FlatpickrDirective_input_HostBindingHandler() {
            return ctx.inputChanged();
          });
        }
      },
      inputs: {
        options: "options",
        altFormat: "altFormat",
        altInput: "altInput",
        altInputClass: "altInputClass",
        allowInput: "allowInput",
        allowInvalidPreload: "allowInvalidPreload",
        appendTo: "appendTo",
        ariaDateFormat: "ariaDateFormat",
        clickOpens: "clickOpens",
        dateFormat: "dateFormat",
        defaultHour: "defaultHour",
        defaultMinute: "defaultMinute",
        defaultSeconds: "defaultSeconds",
        disable: "disable",
        disableMobile: "disableMobile",
        enable: "enable",
        enableTime: "enableTime",
        enableSeconds: "enableSeconds",
        formatDate: "formatDate",
        hourIncrement: "hourIncrement",
        inline: "inline",
        maxDate: "maxDate",
        minDate: "minDate",
        maxTime: "maxTime",
        minTime: "minTime",
        minuteIncrement: "minuteIncrement",
        mode: "mode",
        nextArrow: "nextArrow",
        noCalendar: "noCalendar",
        now: "now",
        parseDate: "parseDate",
        prevArrow: "prevArrow",
        shorthandCurrentMonth: "shorthandCurrentMonth",
        showMonths: "showMonths",
        static: "static",
        time24hr: "time24hr",
        weekNumbers: "weekNumbers",
        getWeek: "getWeek",
        wrap: "wrap",
        plugins: "plugins",
        locale: "locale",
        convertModelValue: "convertModelValue",
        monthSelectorType: "monthSelectorType",
        ignoredFocusElements: "ignoredFocusElements"
      },
      outputs: {
        flatpickrReady: "flatpickrReady",
        flatpickrChange: "flatpickrChange",
        flatpickrValueUpdate: "flatpickrValueUpdate",
        flatpickrOpen: "flatpickrOpen",
        flatpickrClose: "flatpickrClose",
        flatpickrMonthChange: "flatpickrMonthChange",
        flatpickrYearChange: "flatpickrYearChange",
        flatpickrDayCreate: "flatpickrDayCreate"
      },
      exportAs: ["mwlFlatpickr"],
      features: [ɵɵProvidersFeature([FLATPICKR_CONTROL_VALUE_ACCESSOR]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlatpickrDirective, [{
    type: Directive,
    args: [{
      selector: "[mwlFlatpickr]",
      providers: [FLATPICKR_CONTROL_VALUE_ACCESSOR],
      exportAs: "mwlFlatpickr",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: FlatpickrDefaults
  }, {
    type: Renderer2
  }, {
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], {
    options: [{
      type: Input
    }],
    altFormat: [{
      type: Input
    }],
    altInput: [{
      type: Input
    }],
    altInputClass: [{
      type: Input
    }],
    allowInput: [{
      type: Input
    }],
    allowInvalidPreload: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    ariaDateFormat: [{
      type: Input
    }],
    clickOpens: [{
      type: Input
    }],
    dateFormat: [{
      type: Input
    }],
    defaultHour: [{
      type: Input
    }],
    defaultMinute: [{
      type: Input
    }],
    defaultSeconds: [{
      type: Input
    }],
    disable: [{
      type: Input
    }],
    disableMobile: [{
      type: Input
    }],
    enable: [{
      type: Input
    }],
    enableTime: [{
      type: Input
    }],
    enableSeconds: [{
      type: Input
    }],
    formatDate: [{
      type: Input
    }],
    hourIncrement: [{
      type: Input
    }],
    inline: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxTime: [{
      type: Input
    }],
    minTime: [{
      type: Input
    }],
    minuteIncrement: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    nextArrow: [{
      type: Input
    }],
    noCalendar: [{
      type: Input
    }],
    now: [{
      type: Input
    }],
    parseDate: [{
      type: Input
    }],
    prevArrow: [{
      type: Input
    }],
    shorthandCurrentMonth: [{
      type: Input
    }],
    showMonths: [{
      type: Input
    }],
    static: [{
      type: Input
    }],
    time24hr: [{
      type: Input
    }],
    weekNumbers: [{
      type: Input
    }],
    getWeek: [{
      type: Input
    }],
    wrap: [{
      type: Input
    }],
    plugins: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    convertModelValue: [{
      type: Input
    }],
    monthSelectorType: [{
      type: Input
    }],
    ignoredFocusElements: [{
      type: Input
    }],
    flatpickrReady: [{
      type: Output
    }],
    flatpickrChange: [{
      type: Output
    }],
    flatpickrValueUpdate: [{
      type: Output
    }],
    flatpickrOpen: [{
      type: Output
    }],
    flatpickrClose: [{
      type: Output
    }],
    flatpickrMonthChange: [{
      type: Output
    }],
    flatpickrYearChange: [{
      type: Output
    }],
    flatpickrDayCreate: [{
      type: Output
    }],
    onTouchedFn: [{
      type: HostListener,
      args: ["blur"]
    }],
    inputChanged: [{
      type: HostListener,
      args: ["input"]
    }]
  });
})();
var USER_DEFAULTS = new InjectionToken("flatpickr defaults");
function provideFlatpickrDefaults(userDefaults = {}) {
  return [{
    provide: USER_DEFAULTS,
    useValue: userDefaults
  }, {
    provide: FlatpickrDefaults,
    useFactory() {
      const defaults = new FlatpickrDefaults();
      Object.assign(defaults, userDefaults);
      return defaults;
    },
    deps: [USER_DEFAULTS]
  }];
}
var FlatpickrModule = class _FlatpickrModule {
  static forRoot(userDefaults = {}) {
    return {
      ngModule: _FlatpickrModule,
      providers: provideFlatpickrDefaults(userDefaults)
    };
  }
  static {
    this.ɵfac = function FlatpickrModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FlatpickrModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _FlatpickrModule,
      imports: [FlatpickrDirective],
      exports: [FlatpickrDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlatpickrModule, [{
    type: NgModule,
    args: [{
      imports: [FlatpickrDirective],
      exports: [FlatpickrDirective]
    }]
  }], null, null);
})();
export {
  FlatpickrDefaults,
  FlatpickrDirective,
  FlatpickrModule,
  USER_DEFAULTS,
  provideFlatpickrDefaults
};
//# sourceMappingURL=angularx-flatpickr.js.map
