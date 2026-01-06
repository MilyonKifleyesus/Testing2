import {
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR
} from "./chunk-XCUGCCSF.js";
import {
  NgTemplateOutlet
} from "./chunk-37IJTNUX.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  InjectionToken,
  NgModule,
  TemplateRef,
  booleanAttribute,
  computed,
  contentChild,
  forwardRef,
  inject,
  input,
  model,
  numberAttribute,
  output,
  setClassMetadata,
  signal,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuerySignal,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-IOBWKMFY.js";
import "./chunk-R46UXVFS.js";
import "./chunk-D6YGKQ4W.js";
import "./chunk-L5ZQUDYH.js";
import "./chunk-ZYKX7RMX.js";
import {
  __spreadValues
} from "./chunk-AJH3MT3R.js";

// node_modules/ngx-bar-rating/fesm2022/ngx-bar-rating.mjs
function BarRating_For_3_Case_2_ng_template_0_Template(rf, ctx) {
}
function BarRating_For_3_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, BarRating_For_3_Case_2_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    let tmp_16_0;
    const ctx_r3 = ɵɵnextContext(2);
    const fractionTemplate_r5 = ɵɵreference(6);
    ɵɵproperty("ngTemplateOutlet", ((tmp_16_0 = ctx_r3.customFractionRating()) == null ? null : tmp_16_0.template) || fractionTemplate_r5);
  }
}
function BarRating_For_3_Case_3_ng_template_0_Template(rf, ctx) {
}
function BarRating_For_3_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, BarRating_For_3_Case_3_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    let tmp_16_0;
    const ctx_r3 = ɵɵnextContext(2);
    const inactiveTemplate_r6 = ɵɵreference(10);
    ɵɵproperty("ngTemplateOutlet", ((tmp_16_0 = ctx_r3.customInActiveRating()) == null ? null : tmp_16_0.template) || inactiveTemplate_r6);
  }
}
function BarRating_For_3_Case_4_ng_template_0_Template(rf, ctx) {
}
function BarRating_For_3_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, BarRating_For_3_Case_4_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    let tmp_16_0;
    const ctx_r3 = ɵɵnextContext(2);
    const activeTemplate_r7 = ɵɵreference(8);
    ɵɵproperty("ngTemplateOutlet", ((tmp_16_0 = ctx_r3.customActiveRating()) == null ? null : tmp_16_0.template) || activeTemplate_r7);
  }
}
function BarRating_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵdeclareLet(0);
    ɵɵelementStart(1, "div", 7);
    ɵɵlistener("mouseenter", function BarRating_For_3_Template_div_mouseenter_1_listener() {
      ɵɵrestoreView(_r2);
      const value_r3 = ɵɵreadContextLet(0);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.hoveredIndex.set(value_r3));
    });
    ɵɵtemplate(2, BarRating_For_3_Case_2_Template, 1, 1, null, 8)(3, BarRating_For_3_Case_3_Template, 1, 1, null, 8)(4, BarRating_For_3_Case_4_Template, 1, 1, null, 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_16_0;
    const unit_r8 = ctx.$implicit;
    const ɵ$index_5_r9 = ctx.$index;
    const ctx_r3 = ɵɵnextContext();
    const value_r10 = ɵɵstoreLet(ɵ$index_5_r9 + 1);
    ɵɵadvance();
    ɵɵattribute("data-value", value_r10);
    ɵɵadvance();
    ɵɵconditional((tmp_16_0 = unit_r8) === ctx_r3.UNITS.fraction ? 2 : tmp_16_0 === ctx_r3.UNITS.inactive ? 3 : 4);
  }
}
function BarRating_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r3.ratingText());
  }
}
function BarRating_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 9);
  }
}
function BarRating_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 10);
  }
}
function BarRating_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 11);
  }
}
var ActiveRating = class _ActiveRating {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.ɵfac = function ActiveRating_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ActiveRating)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _ActiveRating,
      selectors: [["", "ratingActive", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActiveRating, [{
    type: Directive,
    args: [{
      selector: "[ratingActive]"
    }]
  }], null, null);
})();
var InactiveRating = class _InactiveRating {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.ɵfac = function InactiveRating_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InactiveRating)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _InactiveRating,
      selectors: [["", "ratingInactive", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InactiveRating, [{
    type: Directive,
    args: [{
      selector: "[ratingInactive]"
    }]
  }], null, null);
})();
var FractionRating = class _FractionRating {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.ɵfac = function FractionRating_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FractionRating)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _FractionRating,
      selectors: [["", "ratingFraction", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FractionRating, [{
    type: Directive,
    args: [{
      selector: "[ratingFraction]"
    }]
  }], null, null);
})();
var defaultOptions = {
  theme: "default",
  maxValue: 5,
  showText: false,
  readonly: false
};
var BAR_RATING_OPTIONS = new InjectionToken("BAR_RATING_OPTIONS", {
  providedIn: "root",
  factory: () => defaultOptions
});
function provideBarRatingOptions(options) {
  return {
    provide: BAR_RATING_OPTIONS,
    useValue: __spreadValues(__spreadValues({}, defaultOptions), options)
  };
}
var RATING_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BarRating),
  multi: true
};
var RATING_VALUE_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => BarRating),
  multi: true
};
var BarRatingUnitStateEnum;
(function(BarRatingUnitStateEnum2) {
  BarRatingUnitStateEnum2["active"] = "active";
  BarRatingUnitStateEnum2["inactive"] = "inactive";
  BarRatingUnitStateEnum2["selected"] = "selected";
  BarRatingUnitStateEnum2["fraction"] = "fraction";
})(BarRatingUnitStateEnum || (BarRatingUnitStateEnum = {}));
var BarRating = class _BarRating {
  constructor() {
    this.defaultOptions = inject(BAR_RATING_OPTIONS);
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
    this.UNITS = BarRatingUnitStateEnum;
    this.rate = model();
    this.max = input(this.defaultOptions.maxValue, {
      transform: numberAttribute
    });
    this.readonly = input(this.defaultOptions.readonly, {
      transform: booleanAttribute,
      alias: "readonly"
    });
    this.theme = input(this.defaultOptions.theme);
    this.showText = input(this.defaultOptions.showText, {
      transform: booleanAttribute
    });
    this.titles = input([]);
    this.required = input(false, {
      transform: booleanAttribute
    });
    this.tabIndex = input(0, {
      transform: numberAttribute
    });
    this.hoveredIndex = signal(null);
    this.contexts = computed(() => {
      const length = this.max();
      const currentRate = this.rate();
      const hovered = this.hoveredIndex();
      return Array.from({
        length
      }, (_, i) => {
        if (hovered) {
          return i + 1 <= hovered ? BarRatingUnitStateEnum.active : BarRatingUnitStateEnum.inactive;
        }
        if (i + 1 <= currentRate) {
          return BarRatingUnitStateEnum.selected;
        }
        if ((i + 1 === Math.round(currentRate) && currentRate % 1) >= 0.5) {
          return BarRatingUnitStateEnum.fraction;
        }
        return BarRatingUnitStateEnum.inactive;
      });
    });
    this.ratingText = computed(() => {
      const value = this.hoveredIndex() || this.rate();
      return this.titles()[value] || value;
    });
    this.barClick = output();
    this.customActiveRating = contentChild(ActiveRating);
    this.customInActiveRating = contentChild(InactiveRating);
    this.customFractionRating = contentChild(FractionRating);
  }
  updateRating(value) {
    this.rate.set(value);
    this.onChange(value);
  }
  /**
   * This is the initial value set to the component
   */
  writeValue(value) {
    if (value !== null) {
      this.rate.set(value);
    }
  }
  validate(c) {
    return this.required() && !c.value ? {
      required: true
    } : null;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  handleKeydown(event) {
    if (this.readonly() || this.disabled) return;
    const currentRating = this.rate();
    let newRating = currentRating;
    switch (event.key) {
      case "ArrowRight":
        newRating = Math.min(currentRating + 1, this.max());
        event.preventDefault();
        break;
      case "ArrowLeft":
        newRating = Math.max(currentRating - 1, 1);
        event.preventDefault();
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        break;
      default:
        return;
    }
    if (newRating !== currentRating) {
      this.updateRating(newRating);
      this.barClick.emit(newRating);
      this.hoveredIndex.set(newRating);
    }
  }
  handleClick(event) {
    if (this.readonly() || this.disabled) return;
    const target = event.target;
    const unitElement = target.closest(".br-unit");
    const value = unitElement?.getAttribute("data-value");
    if (value) {
      const rating = parseInt(value, 10);
      this.updateRating(rating);
      this.barClick.emit(rating);
    }
  }
  static {
    this.ɵfac = function BarRating_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BarRating)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BarRating,
      selectors: [["bar-rating"]],
      contentQueries: function BarRating_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.customActiveRating, ActiveRating, 5);
          ɵɵcontentQuerySignal(dirIndex, ctx.customInActiveRating, InactiveRating, 5);
          ɵɵcontentQuerySignal(dirIndex, ctx.customFractionRating, FractionRating, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance(3);
        }
      },
      inputs: {
        rate: [1, "rate"],
        max: [1, "max"],
        readonly: [1, "readonly"],
        theme: [1, "theme"],
        showText: [1, "showText"],
        titles: [1, "titles"],
        required: [1, "required"],
        tabIndex: [1, "tabIndex"]
      },
      outputs: {
        rate: "rateChange",
        barClick: "barClick"
      },
      features: [ɵɵProvidersFeature([RATING_VALUE_ACCESSOR, RATING_VALUE_VALIDATOR])],
      decls: 11,
      vars: 9,
      consts: [["fractionTemplate", ""], ["activeTemplate", ""], ["inactiveTemplate", ""], ["role", "button", 3, "focusout", "click", "keydown"], [1, "br-units", 3, "mouseleave"], [1, "br-unit"], [1, "br-text"], [1, "br-unit", 3, "mouseenter"], [3, "ngTemplateOutlet"], [1, "br-unit-inner", "br-fraction"], [1, "br-unit-inner", "br-active"], [1, "br-unit-inner", "br-inactive"]],
      template: function BarRating_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "div", 3);
          ɵɵlistener("focusout", function BarRating_Template_div_focusout_0_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onTouched());
          })("click", function BarRating_Template_div_click_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.handleClick($event));
          })("keydown", function BarRating_Template_div_keydown_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.handleKeydown($event));
          });
          ɵɵelementStart(1, "div", 4);
          ɵɵlistener("mouseleave", function BarRating_Template_div_mouseleave_1_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.hoveredIndex.set(0));
          });
          ɵɵrepeaterCreate(2, BarRating_For_3_Template, 5, 3, "div", 5, ɵɵrepeaterTrackByIndex);
          ɵɵelementEnd();
          ɵɵtemplate(4, BarRating_Conditional_4_Template, 2, 1, "div", 6);
          ɵɵelementEnd();
          ɵɵtemplate(5, BarRating_ng_template_5_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(7, BarRating_ng_template_7_Template, 1, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor)(9, BarRating_ng_template_9_Template, 1, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵclassMapInterpolate1("br br-", ctx.customInActiveRating() ? "" : ctx.theme(), "");
          ɵɵclassProp("br-readonly", ctx.readonly())("br-disabled", ctx.disabled);
          ɵɵattribute("tabindex", ctx.disabled || ctx.readonly() ? -1 : ctx.tabIndex());
          ɵɵadvance(2);
          ɵɵrepeater(ctx.contexts());
          ɵɵadvance(2);
          ɵɵconditional(ctx.showText() ? 4 : -1);
        }
      },
      dependencies: [NgTemplateOutlet],
      styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box}[_nghost-%COMP%]{--_br-font-size: var(--br-font-size, 16px);--_br-gap: var(--br-gap, 0);--_br-active-color: var(--br-active-color, #EDB867);--_br-inactive-color: var(--br-inactive-color, #D2D2D2);--_br-effect-scale: var(--br-effect-scale, 1.5);--_br-effect-duration: var(--br-effect-duration, .4s);--_br-effect-ease: var(--br-effect-ease, ease-out)}.br[_ngcontent-%COMP%]{position:relative}.br-units[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;gap:var(--_br-gap)}.br-unit[_ngcontent-%COMP%]{font-size:var(--_br-font-size);cursor:pointer;-webkit-font-smoothing:antialiased;text-rendering:auto}.br-unit-inner[_ngcontent-%COMP%]{position:relative}.br-readonly[_ngcontent-%COMP%]   .br-unit[_ngcontent-%COMP%], .br-disabled[_ngcontent-%COMP%]   .br-unit[_ngcontent-%COMP%]{cursor:default;pointer-events:none}.br-unit-clone[_ngcontent-%COMP%]{position:absolute;pointer-events:none;transform-origin:center;animation:_ngcontent-%COMP%_scale-fade-out var(--_br-effect-duration) var(--_br-effect-ease)}@keyframes _ngcontent-%COMP%_scale-fade-out{0%{transform:scale(1);opacity:1}to{transform:scale(var(--_br-effect-scale));opacity:0}}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BarRating, [{
    type: Component,
    args: [{
      selector: "bar-rating",
      providers: [RATING_VALUE_ACCESSOR, RATING_VALUE_VALIDATOR],
      imports: [NgTemplateOutlet],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div class="br br-{{ customInActiveRating() ? '' : theme() }}"\r
     [class.br-readonly]="readonly()"\r
     [class.br-disabled]="disabled"\r
     role="button"\r
     [attr.tabindex]="disabled || readonly() ? -1 : tabIndex()"\r
     (focusout)="onTouched()"\r
     (click)="handleClick($event)"\r
     (keydown)="handleKeydown($event)">\r
\r
  <div class="br-units"\r
       (mouseleave)="hoveredIndex.set(0)">\r
    @for (unit of contexts(); let i = $index; track i) {\r
      @let value = i + 1;\r
      <div class="br-unit"\r
           [attr.data-value]="value"\r
           (mouseenter)="hoveredIndex.set(value)">\r
        @switch (unit) {\r
          @case (UNITS.fraction) {\r
            <ng-template [ngTemplateOutlet]="customFractionRating()?.template || fractionTemplate"/>\r
          }\r
          @case (UNITS.inactive) {\r
            <ng-template [ngTemplateOutlet]="customInActiveRating()?.template || inactiveTemplate"/>\r
          }\r
          @default {\r
            <ng-template [ngTemplateOutlet]="customActiveRating()?.template || activeTemplate"/>\r
          }\r
        }\r
      </div>\r
    }\r
  </div>\r
\r
  @if (showText()) {\r
    <div class="br-text">{{ ratingText() }}</div>\r
  }\r
</div>\r
\r
<ng-template #fractionTemplate>\r
  <div class="br-unit-inner br-fraction"></div>\r
</ng-template>\r
\r
<ng-template #activeTemplate>\r
  <div class="br-unit-inner br-active"></div>\r
</ng-template>\r
\r
<ng-template #inactiveTemplate>\r
  <div class="br-unit-inner br-inactive"></div>\r
</ng-template>\r
`,
      styles: ["*{box-sizing:border-box}:host{--_br-font-size: var(--br-font-size, 16px);--_br-gap: var(--br-gap, 0);--_br-active-color: var(--br-active-color, #EDB867);--_br-inactive-color: var(--br-inactive-color, #D2D2D2);--_br-effect-scale: var(--br-effect-scale, 1.5);--_br-effect-duration: var(--br-effect-duration, .4s);--_br-effect-ease: var(--br-effect-ease, ease-out)}.br{position:relative}.br-units{display:flex;flex-wrap:nowrap;gap:var(--_br-gap)}.br-unit{font-size:var(--_br-font-size);cursor:pointer;-webkit-font-smoothing:antialiased;text-rendering:auto}.br-unit-inner{position:relative}.br-readonly .br-unit,.br-disabled .br-unit{cursor:default;pointer-events:none}.br-unit-clone{position:absolute;pointer-events:none;transform-origin:center;animation:scale-fade-out var(--_br-effect-duration) var(--_br-effect-ease)}@keyframes scale-fade-out{0%{transform:scale(1);opacity:1}to{transform:scale(var(--_br-effect-scale));opacity:0}}\n"]
    }]
  }], null, null);
})();
var BarRatingEffect = class _BarRatingEffect {
  constructor() {
    this.barRating = inject(BarRating, {
      host: true,
      self: true
    });
    const originalHandleClick = this.barRating.handleClick.bind(this.barRating);
    this.barRating.handleClick = (event) => {
      originalHandleClick(event);
      this.handleClickWithEffect(event);
    };
  }
  handleClickWithEffect(event) {
    const target = event.target;
    const unitElement = target.closest(".br-unit");
    const clone = unitElement.cloneNode(true);
    const rect = unitElement.getBoundingClientRect();
    const parentRect = event.currentTarget.getBoundingClientRect();
    clone.classList.add("br-unit-clone");
    clone.style.left = `${rect.left - parentRect.left}px`;
    clone.style.top = `${rect.top - parentRect.top}px`;
    clone.style.width = `${rect.width}px`;
    clone.style.height = `${rect.height}px`;
    const parentElement = event.currentTarget;
    parentElement.appendChild(clone);
    clone.addEventListener("animationend", () => {
      parentElement.removeChild(clone);
    });
  }
  static {
    this.ɵfac = function BarRatingEffect_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BarRatingEffect)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _BarRatingEffect,
      selectors: [["bar-rating", "effect", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BarRatingEffect, [{
    type: Directive,
    args: [{
      selector: "bar-rating[effect]"
    }]
  }], () => [], null);
})();
var BarRatingModule = class _BarRatingModule {
  static {
    this.ɵfac = function BarRatingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BarRatingModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _BarRatingModule,
      imports: [BarRating, BarRatingEffect, ActiveRating, InactiveRating, FractionRating],
      exports: [BarRating, BarRatingEffect, ActiveRating, InactiveRating, FractionRating]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BarRatingModule, [{
    type: NgModule,
    args: [{
      imports: [BarRating, BarRatingEffect, ActiveRating, InactiveRating, FractionRating],
      exports: [BarRating, BarRatingEffect, ActiveRating, InactiveRating, FractionRating]
    }]
  }], null, null);
})();
export {
  ActiveRating,
  BAR_RATING_OPTIONS,
  BarRating,
  BarRatingEffect,
  BarRatingModule,
  FractionRating,
  InactiveRating,
  provideBarRatingOptions
};
//# sourceMappingURL=ngx-bar-rating.js.map
