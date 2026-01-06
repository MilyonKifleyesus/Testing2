import {
  Gallery,
  GalleryComponent,
  GalleryModule,
  ImageItem
} from "./chunk-4QM5XLC4.js";
import {
  DomSanitizer
} from "./chunk-MZRIAPJR.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-UD22DZG5.js";
import "./chunk-LFQYYB2F.js";
import {
  Overlay
} from "./chunk-RDR5N5VV.js";
import {
  ConfigurableFocusTrapFactory,
  ESCAPE,
  LEFT_ARROW,
  RIGHT_ARROW
} from "./chunk-DRZBCJZT.js";
import "./chunk-OWWKAO5H.js";
import {
  ComponentPortal
} from "./chunk-DEENFF35.js";
import "./chunk-EJQER4H7.js";
import "./chunk-2IGW2ZRF.js";
import "./chunk-DXX27NYX.js";
import "./chunk-BDV2V2K5.js";
import {
  DOCUMENT
} from "./chunk-37IJTNUX.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  Host,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Optional,
  Renderer2,
  Self,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵsanitizeHtml,
  ɵɵsyntheticHostListener,
  ɵɵsyntheticHostProperty
} from "./chunk-IOBWKMFY.js";
import "./chunk-R46UXVFS.js";
import {
  fromEvent
} from "./chunk-D6YGKQ4W.js";
import {
  EMPTY,
  Subject,
  Subscription,
  debounceTime,
  finalize,
  from,
  map,
  switchMap,
  tap
} from "./chunk-L5ZQUDYH.js";
import "./chunk-ZYKX7RMX.js";
import {
  __spreadValues
} from "./chunk-AJH3MT3R.js";

// node_modules/ng-gallery/fesm2022/ng-gallery-lightbox.mjs
var _c0 = (a0, a1) => ({
  startAnimationTime: a0,
  exitAnimationTime: a1
});
var _c1 = (a0, a1) => ({
  value: a0,
  params: a1
});
var LIGHTBOX_CONFIG = new InjectionToken("LIGHTBOX_CONFIG");
var lightboxAnimation = trigger("lightbox", [state("void, exit", style({
  opacity: 0,
  transform: "scale(0.7)"
})), state("enter", style({
  transform: "none"
})), transition("* => enter", animate("{{startAnimationTime}}ms cubic-bezier(0, 0, 0.2, 1)", style({
  transform: "none",
  opacity: 1
}))), transition("* => void, * => exit", animate("{{exitAnimationTime}}ms cubic-bezier(0.4, 0.0, 0.2, 1)", style({
  opacity: 0
})))]);
var LightboxComponent = class _LightboxComponent {
  constructor(_document, _focusTrapFactory, _elementRef) {
    this._document = _document;
    this._focusTrapFactory = _focusTrapFactory;
    this._elementRef = _elementRef;
    this.state = "enter";
    this._savePreviouslyFocusedElement();
  }
  /** Callback, invoked whenever an animation on the host completes. */
  onAnimationDone(event) {
    if (event.toState === "enter") {
      this._trapFocus();
    } else {
      this.overlayRef.dispose();
      this._restoreFocus();
    }
  }
  /** Moves the focus inside the focus trap. */
  _trapFocus() {
    if (!this._focusTrap) {
      this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
    }
    this._focusTrap.focusInitialElementWhenReady();
  }
  /** Saves a reference to the element that was focused before the lightbox was opened. */
  _savePreviouslyFocusedElement() {
    if (this._document) {
      this._elementFocusedBeforeDialogWasOpened = this._document.activeElement;
      if (this._elementRef.nativeElement.focus) {
        Promise.resolve().then(() => this._elementRef.nativeElement.focus());
      }
    }
  }
  /** Restores focus to the element that was focused before the lightbox opened. */
  _restoreFocus() {
    const toFocus = this._elementFocusedBeforeDialogWasOpened;
    if (toFocus && typeof toFocus.focus === "function") {
      toFocus.focus();
    }
    if (this._focusTrap) {
      this._focusTrap.destroy();
    }
  }
  static {
    this.ɵfac = function LightboxComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LightboxComponent)(ɵɵdirectiveInject(DOCUMENT, 8), ɵɵdirectiveInject(ConfigurableFocusTrapFactory), ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _LightboxComponent,
      selectors: [["lightbox"]],
      hostAttrs: ["tabindex", "-1", "aria-modal", "true"],
      hostVars: 12,
      hostBindings: function LightboxComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵsyntheticHostListener("@lightbox.done", function LightboxComponent_animation_lightbox_done_HostBindingHandler($event) {
            return ctx.onAnimationDone($event);
          });
        }
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@lightbox", ɵɵpureFunction2(9, _c1, ctx.state, ɵɵpureFunction2(6, _c0, ctx.startAnimationTime, ctx.exitAnimationTime)));
          ɵɵattribute("id", "lightbox-" + ctx.id)("role", ctx.role)("aria-labelledby", ctx.ariaLabel ? null : ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("aria-describedby", ctx.ariaDescribedBy || null);
        }
      },
      decls: 2,
      vars: 4,
      consts: [["aria-label", "Close", 1, "g-btn-close", 3, "click", "innerHTML"], [3, "id", "destroyRef", "skipInitConfig"]],
      template: function LightboxComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "i", 0);
          ɵɵlistener("click", function LightboxComponent_Template_i_click_0_listener() {
            return ctx.overlayRef.detach();
          });
          ɵɵelementEnd();
          ɵɵelement(1, "gallery", 1);
        }
        if (rf & 2) {
          ɵɵproperty("innerHTML", ctx.closeIcon, ɵɵsanitizeHtml);
          ɵɵadvance();
          ɵɵproperty("id", ctx.id)("destroyRef", false)("skipInitConfig", true);
        }
      },
      dependencies: [GalleryComponent],
      styles: ["lightbox{position:relative;display:block;width:1100px;height:800px;max-width:94vw;max-height:90vh;border-radius:4px;overflow:hidden;box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f}  lightbox:focus{outline:none}  lightbox gallery{height:100%;width:100%;overflow:hidden;margin:0}  lightbox gallery gallery-core{height:100%!important}  .g-backdrop{background-color:#00000052}  .fullscreen{width:100%}  .fullscreen   lightbox{max-width:unset;max-height:unset;position:fixed;inset:0;height:100%;width:100%;border-radius:0}  .g-overlay{margin:auto}@media only screen and (max-width: 480px){  .g-overlay{width:100%}  .g-overlay   lightbox{max-width:unset;max-height:unset;position:fixed;inset:0;height:100%;width:100%;border-radius:0}}  .g-btn-close{position:absolute;right:.9em;top:.9em;z-index:60;cursor:pointer;width:20px;height:20px}@media only screen and (max-width: 480px){  .g-btn-close{right:.7em;top:.7em}}  .g-btn-close svg{width:100%;height:100%;opacity:.6;transition:opacity linear .15s;filter:drop-shadow(0px 0px 2px rgba(0,0,0,.8))}  .g-btn-close svg:hover{opacity:1}"],
      data: {
        animation: [lightboxAnimation]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LightboxComponent, [{
    type: Component,
    args: [{
      selector: "lightbox",
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [lightboxAnimation],
      template: `
    <i class="g-btn-close" aria-label="Close" [innerHTML]="closeIcon" (click)="overlayRef.detach()"></i>
    <gallery [id]="id" [destroyRef]="false" [skipInitConfig]="true"></gallery>
  `,
      host: {
        "tabindex": "-1",
        "aria-modal": "true",
        "[attr.id]": '"lightbox-" + id',
        "[attr.role]": "role",
        "[attr.aria-labelledby]": "ariaLabel ? null : ariaLabelledBy",
        "[attr.aria-label]": "ariaLabel",
        "[attr.aria-describedby]": "ariaDescribedBy || null",
        "[@lightbox]": "{ value: state, params: { startAnimationTime: startAnimationTime, exitAnimationTime: exitAnimationTime } }",
        "(@lightbox.done)": "onAnimationDone($event)"
      },
      standalone: true,
      imports: [GalleryComponent],
      styles: ["::ng-deep lightbox{position:relative;display:block;width:1100px;height:800px;max-width:94vw;max-height:90vh;border-radius:4px;overflow:hidden;box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f}::ng-deep lightbox:focus{outline:none}::ng-deep lightbox gallery{height:100%;width:100%;overflow:hidden;margin:0}::ng-deep lightbox gallery gallery-core{height:100%!important}::ng-deep .g-backdrop{background-color:#00000052}::ng-deep .fullscreen{width:100%}::ng-deep .fullscreen ::ng-deep lightbox{max-width:unset;max-height:unset;position:fixed;inset:0;height:100%;width:100%;border-radius:0}::ng-deep .g-overlay{margin:auto}@media only screen and (max-width: 480px){::ng-deep .g-overlay{width:100%}::ng-deep .g-overlay ::ng-deep lightbox{max-width:unset;max-height:unset;position:fixed;inset:0;height:100%;width:100%;border-radius:0}}::ng-deep .g-btn-close{position:absolute;right:.9em;top:.9em;z-index:60;cursor:pointer;width:20px;height:20px}@media only screen and (max-width: 480px){::ng-deep .g-btn-close{right:.7em;top:.7em}}::ng-deep .g-btn-close svg{width:100%;height:100%;opacity:.6;transition:opacity linear .15s;filter:drop-shadow(0px 0px 2px rgba(0,0,0,.8))}::ng-deep .g-btn-close svg:hover{opacity:1}\n"]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: ConfigurableFocusTrapFactory
  }, {
    type: ElementRef
  }], null);
})();
var defaultConfig = {
  backdropClass: "g-backdrop",
  panelClass: "g-overlay",
  hasBackdrop: true,
  keyboardShortcuts: true,
  role: "lightbox",
  startAnimationTime: 150,
  exitAnimationTime: 75,
  closeIcon: `<?xml version="1.0" encoding="UTF-8"?>
<svg width="512px" height="512px" enable-background="new 0 0 47.971 47.971" version="1.1" viewBox="0 0 47.971 47.971" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
	<path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" fill="#fff"/>
</svg>
`
};
var Lightbox = class _Lightbox {
  constructor(config, _gallery, _overlay, _sanitizer) {
    this._gallery = _gallery;
    this._overlay = _overlay;
    this._sanitizer = _sanitizer;
    this.opened = new Subject();
    this.closed = new Subject();
    this._config = config ? __spreadValues(__spreadValues({}, defaultConfig), config) : defaultConfig;
  }
  /**
   * Set Lightbox Config
   * @param config - LightboxConfig
   */
  setConfig(config) {
    this._config = __spreadValues(__spreadValues({}, this._config), config);
  }
  /**
   * Open Lightbox Overlay
   * @param i - Current Index
   * @param id - Gallery ID
   * @param config - Lightbox Config
   */
  open(i = 0, id = "lightbox", config) {
    const _config = config ? __spreadValues(__spreadValues({}, this._config), config) : this._config;
    const overlayConfig = {
      backdropClass: _config.backdropClass,
      panelClass: _config.panelClass,
      hasBackdrop: _config.hasBackdrop,
      positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
      scrollStrategy: this._overlay.scrollStrategies.block(),
      disposeOnNavigation: true
    };
    const galleryRef = this._gallery.ref(id);
    galleryRef.set(i);
    this._overlayRef = this._overlay.create(overlayConfig);
    this._overlayRef.attachments().subscribe(() => this.opened.next(id));
    this._overlayRef.detachments().subscribe(() => this.closed.next(id));
    const galleryPortal = new ComponentPortal(LightboxComponent);
    const lightboxRef = this._overlayRef.attach(galleryPortal);
    lightboxRef.instance.id = id;
    lightboxRef.instance.overlayRef = this._overlayRef;
    lightboxRef.instance.closeIcon = this._sanitizer.bypassSecurityTrustHtml(this._config.closeIcon);
    lightboxRef.instance.role = this._config.role;
    lightboxRef.instance.ariaLabel = this._config.ariaLabel;
    lightboxRef.instance.ariaLabelledBy = this._config.ariaLabelledBy;
    lightboxRef.instance.ariaDescribedBy = this._config.ariaDescribedBy;
    lightboxRef.instance.startAnimationTime = this._config.startAnimationTime;
    lightboxRef.instance.exitAnimationTime = this._config.exitAnimationTime;
    if (_config.hasBackdrop) {
      this._overlayRef.backdropClick().subscribe(() => this.close());
    }
    if (_config.keyboardShortcuts) {
      this._overlayRef.keydownEvents().subscribe((event) => {
        switch (event.keyCode) {
          case LEFT_ARROW:
            galleryRef.prev();
            break;
          case RIGHT_ARROW:
            galleryRef.next();
            break;
          case ESCAPE:
            this.close();
        }
      });
    }
  }
  /**
   * Close Lightbox Overlay
   */
  close() {
    if (this._overlayRef.hasAttached()) {
      this._overlayRef.detach();
    }
  }
  static {
    this.ɵfac = function Lightbox_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Lightbox)(ɵɵinject(LIGHTBOX_CONFIG, 8), ɵɵinject(Gallery), ɵɵinject(Overlay), ɵɵinject(DomSanitizer));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _Lightbox,
      factory: _Lightbox.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Lightbox, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [LIGHTBOX_CONFIG]
    }]
  }, {
    type: Gallery
  }, {
    type: Overlay
  }, {
    type: DomSanitizer
  }], null);
})();
var GallerizeDirective = class _GallerizeDirective {
  constructor(_zone, _el, _gallery, _lightbox, _document, _galleryCmp) {
    this._zone = _zone;
    this._el = _el;
    this._gallery = _gallery;
    this._lightbox = _lightbox;
    this._document = _document;
    this._galleryCmp = _galleryCmp;
    this._galleryId = "lightbox";
    this.selector = "img";
    this._mode = _galleryCmp ? "gallery" : "detector";
  }
  ngOnInit() {
    this._zone.runOutsideAngular(() => {
      this._galleryId = this.gallerize || this._galleryId;
      const ref = this._gallery.ref(this._galleryId);
      switch (this._mode) {
        case "detector":
          this.detectorMode(ref);
          break;
        case "gallery":
          this.galleryMode(ref);
      }
    });
  }
  ngOnDestroy() {
    switch (this._mode) {
      case "detector":
        this._detector$.complete();
        this._observer$.disconnect();
        break;
      case "gallery":
        this._itemClick$.unsubscribe();
        this._itemChange$.unsubscribe();
    }
  }
  /** Gallery mode: means `gallerize` directive is used on `<gallery>` component
   * Adds a click event to each gallery item so it opens in lightbox */
  galleryMode(galleryRef) {
    this._itemClick$ = this._galleryCmp.galleryRef.itemClick.subscribe((i) => this._lightbox.open(i, this._galleryId));
    this._itemChange$ = this._galleryCmp.galleryRef.itemsChanged.subscribe((state2) => galleryRef.load(state2.items));
  }
  /** Detector mode: means `gallerize` directive is used on a normal HTMLElement
   *  Detects images and adds a click event to each image, so it opens in the lightbox */
  detectorMode(galleryRef) {
    this._detector$ = new Subject();
    this._detector$.pipe(debounceTime(300), switchMap(() => {
      const imageElements = this._el.nativeElement.querySelectorAll(this.selector);
      if (imageElements && imageElements.length) {
        const images = [];
        return from(imageElements).pipe(map((el, i) => {
          el.style.cursor = "pointer";
          el.addEventListener("click", () => {
            this._zone.run(() => this._lightbox.open(i, this._galleryId));
          });
          if (el instanceof HTMLImageElement) {
            return {
              src: el.getAttribute("imageSrc") || el.src,
              thumb: el.getAttribute("thumbSrc") || el.src
            };
          } else {
            const elStyle = this._document.defaultView.getComputedStyle(el, null);
            const background = elStyle.backgroundImage.slice(4, -1).replace(/"/g, "");
            return {
              src: el.getAttribute("imageSrc") || background,
              thumb: el.getAttribute("thumbSrc") || background
            };
          }
        }), tap((data) => images.push(new ImageItem(data))), finalize(() => galleryRef.load(images)));
      } else {
        return EMPTY;
      }
    })).subscribe();
    this._observer$ = new MutationObserver(() => this._detector$.next());
    this._observer$.observe(this._el.nativeElement, {
      childList: true,
      subtree: true
    });
  }
  static {
    this.ɵfac = function GallerizeDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GallerizeDirective)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Gallery), ɵɵdirectiveInject(Lightbox), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(GalleryComponent, 11));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _GallerizeDirective,
      selectors: [["", "gallerize", ""]],
      inputs: {
        gallerize: "gallerize",
        selector: "selector"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GallerizeDirective, [{
    type: Directive,
    args: [{
      selector: "[gallerize]",
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: Gallery
  }, {
    type: Lightbox
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: GalleryComponent,
    decorators: [{
      type: Host
    }, {
      type: Self
    }, {
      type: Optional
    }]
  }], {
    gallerize: [{
      type: Input
    }],
    selector: [{
      type: Input
    }]
  });
})();
var LightboxDirective = class _LightboxDirective {
  constructor(_lightbox, _el, _renderer) {
    this._lightbox = _lightbox;
    this._el = _el;
    this._renderer = _renderer;
    this.clickEvent = Subscription.EMPTY;
    this.index = 0;
    this.id = "root";
  }
  ngOnInit() {
    this._renderer.setStyle(this._el.nativeElement, "cursor", "pointer");
    this.clickEvent = fromEvent(this._el.nativeElement, "click").pipe(tap(() => this._lightbox.open(this.index, this.id))).subscribe();
  }
  ngOnDestroy() {
    this.clickEvent.unsubscribe();
  }
  static {
    this.ɵfac = function LightboxDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LightboxDirective)(ɵɵdirectiveInject(Lightbox), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _LightboxDirective,
      selectors: [["", "lightbox", ""]],
      inputs: {
        index: [0, "lightbox", "index"],
        id: [0, "gallery", "id"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LightboxDirective, [{
    type: Directive,
    args: [{
      selector: "[lightbox]",
      standalone: true
    }]
  }], () => [{
    type: Lightbox
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    index: [{
      type: Input,
      args: ["lightbox"]
    }],
    id: [{
      type: Input,
      args: ["gallery"]
    }]
  });
})();
var LightboxModule = class _LightboxModule {
  static {
    this.ɵfac = function LightboxModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LightboxModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _LightboxModule,
      imports: [GalleryModule, LightboxDirective, GallerizeDirective],
      exports: [GalleryModule, LightboxDirective, GallerizeDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [GalleryModule, GalleryModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LightboxModule, [{
    type: NgModule,
    args: [{
      imports: [GalleryModule, LightboxDirective, GallerizeDirective],
      exports: [GalleryModule, LightboxDirective, GallerizeDirective]
    }]
  }], null, null);
})();
export {
  GallerizeDirective,
  LIGHTBOX_CONFIG,
  Lightbox,
  LightboxComponent,
  LightboxDirective,
  LightboxModule
};
//# sourceMappingURL=ng-gallery_lightbox.js.map
