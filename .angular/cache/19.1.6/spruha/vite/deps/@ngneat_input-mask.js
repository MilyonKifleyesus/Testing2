import {
  require_inputmask
} from "./chunk-TTZJI3F5.js";
import {
  NgControl
} from "./chunk-XCUGCCSF.js";
import {
  isPlatformServer
} from "./chunk-37IJTNUX.js";
import {
  Directive,
  ElementRef,
  HostListener,
  Inject,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Optional,
  PLATFORM_ID,
  Renderer2,
  Self,
  setClassMetadata,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵlistener
} from "./chunk-IOBWKMFY.js";
import "./chunk-R46UXVFS.js";
import "./chunk-D6YGKQ4W.js";
import "./chunk-L5ZQUDYH.js";
import "./chunk-ZYKX7RMX.js";
import {
  __objRest,
  __spreadValues,
  __toESM
} from "./chunk-AJH3MT3R.js";

// node_modules/@ngneat/input-mask/fesm2020/ngneat-input-mask.mjs
var import_inputmask = __toESM(require_inputmask(), 1);
var InputMaskConfig = class {
  constructor() {
    this.isAsync = false;
    this.inputSelector = "input";
  }
};
var INPUT_MASK_CONFIG = new InjectionToken("InputMaskConfig");
var InputmaskConstructor = import_inputmask.default.default || import_inputmask.default;
var InputMaskDirective = class {
  constructor(platformId, elementRef, renderer, ngControl, config, ngZone) {
    this.platformId = platformId;
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.ngControl = ngControl;
    this.ngZone = ngZone;
    this.inputMaskPlugin = null;
    this.nativeInputElement = null;
    this.defaultInputMaskConfig = new InputMaskConfig();
    this.inputMaskOptions = null;
    this.onChange = () => {
    };
    this.mutationObserver = null;
    this.onInput = (_) => {
    };
    this.onTouched = (_) => {
    };
    this.validate = (control) => !control.value || !this.inputMaskPlugin || this.inputMaskPlugin.isValid() ? null : {
      inputMask: true
    };
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
    this.setNativeInputElement(config);
  }
  /**
   * Helps you to create input-mask based on https://github.com/RobinHerbots/Inputmask
   * Supports form-validation out-of-the box.
   * Visit https://github.com/ngneat/input-mask for more info.
   */
  set inputMask(inputMask) {
    if (inputMask) {
      this.inputMaskOptions = inputMask;
      this.updateInputMask();
    }
  }
  ngOnInit() {
    if (this.control) {
      this.control.setValidators(this.control.validator ? [this.control.validator, this.validate] : [this.validate]);
      this.control.updateValueAndValidity();
    }
  }
  ngOnDestroy() {
    this.removeInputMaskPlugin();
    this.mutationObserver?.disconnect();
  }
  writeValue(value) {
    const formatter = this.inputMaskOptions?.formatter;
    if (this.nativeInputElement) {
      this.renderer.setProperty(this.nativeInputElement, "value", formatter && value ? formatter(value) : value ?? "");
    }
  }
  registerOnChange(onChange) {
    this.onChange = onChange;
    const parser = this.inputMaskOptions?.parser;
    this.onInput = (value) => {
      this.onChange(parser && value ? parser(value) : value);
    };
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(disabled) {
    if (this.nativeInputElement) {
      this.renderer.setProperty(this.nativeInputElement, "disabled", disabled);
    }
  }
  updateInputMask() {
    this.removeInputMaskPlugin();
    this.createInputMaskPlugin();
    this.registerOnChange(this.onChange);
  }
  createInputMaskPlugin() {
    const {
      nativeInputElement,
      inputMaskOptions
    } = this;
    if (isPlatformServer(this.platformId) || !nativeInputElement || inputMaskOptions === null || Object.keys(inputMaskOptions).length === 0) {
      return;
    }
    const _a = inputMaskOptions, {
      parser,
      formatter
    } = _a, options = __objRest(_a, [
      "parser",
      "formatter"
    ]);
    this.inputMaskPlugin = this.ngZone.runOutsideAngular(() => new InputmaskConstructor(options).mask(nativeInputElement));
    if (this.control) {
      setTimeout(() => {
        this.control.updateValueAndValidity();
      });
    }
  }
  get control() {
    return this.ngControl?.control;
  }
  setNativeInputElement(config) {
    if (this.elementRef.nativeElement.tagName === "INPUT") {
      this.nativeInputElement = this.elementRef.nativeElement;
    } else {
      this.defaultInputMaskConfig = __spreadValues(__spreadValues({}, this.defaultInputMaskConfig), config);
      if (this.defaultInputMaskConfig.isAsync) {
        this.mutationObserver = new MutationObserver((mutationsList) => {
          for (const mutation of mutationsList) {
            if (mutation.type === "childList") {
              const nativeInputElement = this.elementRef.nativeElement.querySelector(this.defaultInputMaskConfig.inputSelector);
              if (nativeInputElement) {
                this.nativeInputElement = nativeInputElement;
                this.mutationObserver?.disconnect();
                this.createInputMaskPlugin();
              }
            }
          }
        });
        this.mutationObserver.observe(this.elementRef.nativeElement, {
          childList: true,
          subtree: true
        });
      } else {
        this.nativeInputElement = this.elementRef.nativeElement.querySelector(this.defaultInputMaskConfig.inputSelector);
      }
    }
  }
  removeInputMaskPlugin() {
    this.inputMaskPlugin?.remove();
    this.inputMaskPlugin = null;
  }
};
InputMaskDirective.ɵfac = function InputMaskDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || InputMaskDirective)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgControl, 10), ɵɵdirectiveInject(INPUT_MASK_CONFIG), ɵɵdirectiveInject(NgZone));
};
InputMaskDirective.ɵdir = ɵɵdefineDirective({
  type: InputMaskDirective,
  selectors: [["", "inputMask", ""]],
  hostBindings: function InputMaskDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("input", function InputMaskDirective_input_HostBindingHandler($event) {
        return ctx.onInput($event.target.value);
      })("blur", function InputMaskDirective_blur_HostBindingHandler($event) {
        return ctx.onTouched($event.target.value);
      });
    }
  },
  inputs: {
    inputMask: "inputMask"
  },
  standalone: false
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputMaskDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[inputMask]"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: NgControl,
      decorators: [{
        type: Optional
      }, {
        type: Self
      }]
    }, {
      type: InputMaskConfig,
      decorators: [{
        type: Inject,
        args: [INPUT_MASK_CONFIG]
      }]
    }, {
      type: NgZone
    }];
  }, {
    inputMask: [{
      type: Input
    }],
    onInput: [{
      type: HostListener,
      args: ["input", ["$event.target.value"]]
    }],
    onTouched: [{
      type: HostListener,
      args: ["blur", ["$event.target.value"]]
    }]
  });
})();
var InputMaskModule = class _InputMaskModule {
  static forRoot(config) {
    return {
      ngModule: _InputMaskModule,
      providers: [{
        provide: INPUT_MASK_CONFIG,
        useValue: config
      }]
    };
  }
};
InputMaskModule.ɵfac = function InputMaskModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || InputMaskModule)();
};
InputMaskModule.ɵmod = ɵɵdefineNgModule({
  type: InputMaskModule,
  declarations: [InputMaskDirective],
  exports: [InputMaskDirective]
});
InputMaskModule.ɵinj = ɵɵdefineInjector({
  providers: [{
    provide: INPUT_MASK_CONFIG,
    useClass: InputMaskConfig
  }]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputMaskModule, [{
    type: NgModule,
    args: [{
      declarations: [InputMaskDirective],
      exports: [InputMaskDirective],
      providers: [{
        provide: INPUT_MASK_CONFIG,
        useClass: InputMaskConfig
      }]
    }]
  }], null, null);
})();
var createMask = (options) => typeof options === "string" ? {
  mask: options
} : options;
export {
  InputMaskDirective,
  InputMaskModule,
  createMask
};
//# sourceMappingURL=@ngneat_input-mask.js.map
