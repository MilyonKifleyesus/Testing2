import {
  DomSanitizer
} from "./chunk-MZRIAPJR.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-UD22DZG5.js";
import {
  Dir,
  Directionality
} from "./chunk-2IGW2ZRF.js";
import {
  Platform,
  RtlScrollAxisType,
  coerceCssPixelValue,
  getRtlScrollAxisType
} from "./chunk-BDV2V2K5.js";
import {
  AsyncPipe,
  CommonModule,
  DOCUMENT,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgTemplateOutlet
} from "./chunk-37IJTNUX.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
  booleanAttribute,
  numberAttribute,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-IOBWKMFY.js";
import {
  animationFrameScheduler,
  firstValueFrom,
  fromEvent,
  merge
} from "./chunk-D6YGKQ4W.js";
import {
  BehaviorSubject,
  EMPTY,
  Observable,
  Subject,
  combineLatest,
  debounceTime,
  delay,
  distinctUntilChanged,
  expand,
  filter,
  finalize,
  map,
  mergeMap,
  of,
  startWith,
  switchMap,
  take,
  takeUntil,
  takeWhile,
  tap
} from "./chunk-L5ZQUDYH.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-AJH3MT3R.js";

// node_modules/ng-gallery/fesm2022/ng-gallery.mjs
function GalleryBulletsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵlistener("click", function GalleryBulletsComponent_div_0_Template_div_click_0_listener() {
      const i_r2 = ɵɵrestoreView(_r1).index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.config.disableBullets ? null : ctx_r2.gallery.ref(ctx_r2.galleryId).set(i_r2));
    });
    ɵɵelement(1, "div", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵstyleProp("width", ctx_r2.config == null ? null : ctx_r2.config.bulletSize, "px")("height", ctx_r2.config == null ? null : ctx_r2.config.bulletSize, "px");
    ɵɵclassProp("g-bullet-active", i_r2 === ctx_r2.state.currIndex);
  }
}
function GalleryNavComponent_i_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "i", 2);
    ɵɵlistener("click", function GalleryNavComponent_i_0_Template_i_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.gallery.ref(ctx_r1.id).prev(ctx_r1.config.scrollBehavior));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("innerHtml", ctx_r1.navIcon, ɵɵsanitizeHtml);
  }
}
function GalleryNavComponent_i_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "i", 3);
    ɵɵlistener("click", function GalleryNavComponent_i_1_Template_i_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.gallery.ref(ctx_r1.id).next(ctx_r1.config.scrollBehavior));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("innerHtml", ctx_r1.navIcon, ɵɵsanitizeHtml);
  }
}
var _c0 = ["iframe"];
function GalleryIframeComponent_iframe_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "iframe", 3, 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("src", ctx_r0.iframeSrc, ɵɵsanitizeResourceUrl);
    ɵɵattribute("loading", ctx_r0.loadingAttr);
  }
}
function GalleryIframeComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "iframe", 4, 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("src", ctx_r0.iframeSrc, ɵɵsanitizeResourceUrl);
    ɵɵattribute("loading", ctx_r0.loadingAttr);
  }
}
var _c1 = ["video"];
function GalleryVideoComponent_ng_container_2_source_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "source", 5);
  }
  if (rf & 2) {
    const src_r2 = ɵɵnextContext().$implicit;
    ɵɵproperty("src", src_r2 == null ? null : src_r2.url, ɵɵsanitizeUrl)("type", src_r2.type);
  }
}
function GalleryVideoComponent_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "source", 6);
  }
  if (rf & 2) {
    const src_r2 = ɵɵnextContext().$implicit;
    ɵɵproperty("src", src_r2 == null ? null : src_r2.url, ɵɵsanitizeUrl);
  }
}
function GalleryVideoComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, GalleryVideoComponent_ng_container_2_source_1_Template, 1, 2, "source", 4)(2, GalleryVideoComponent_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const src_r2 = ctx.$implicit;
    const noType_r3 = ɵɵreference(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", src_r2 == null ? null : src_r2.type)("ngIfElse", noType_r3);
  }
}
function GalleryImageComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "img", 8);
    ɵɵlistener("load", function GalleryImageComponent_ng_container_1_Template_img_load_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.state = "success");
    })("error", function GalleryImageComponent_ng_container_1_Template_img_error_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      ctx_r1.state = "failed";
      return ɵɵresetView(ctx_r1.error.emit($event));
    });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵstyleProp("visibility", ctx_r1.state === "success" ? "visible" : "hidden");
    ɵɵproperty("@fadeIn", ctx_r1.state)("src", ctx_r1.src, ɵɵsanitizeUrl);
    ɵɵattribute("alt", ctx_r1.alt)("loading", ctx_r1.loadingAttr);
  }
}
function GalleryImageComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "img", 9);
    ɵɵlistener("load", function GalleryImageComponent_ng_template_2_Template_img_load_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.state = "success");
    })("error", function GalleryImageComponent_ng_template_2_Template_img_error_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      ctx_r1.state = "failed";
      return ɵɵresetView(ctx_r1.error.emit($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("visibility", ctx_r1.state === "success" ? "visible" : "hidden");
    ɵɵproperty("galleryImage", ctx_r1.index)("@fadeIn", ctx_r1.state)("src", ctx_r1.src, ɵɵsanitizeUrl);
    ɵɵattribute("alt", ctx_r1.alt)("loading", ctx_r1.loadingAttr);
  }
}
function GalleryImageComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 12);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("innerHTML", ctx_r1.errorTemplate, ɵɵsanitizeHtml);
  }
}
function GalleryImageComponent_div_4_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "h4");
    ɵɵelement(2, "div", 13);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵproperty("innerHTML", ctx_r1.errorSvg, ɵɵsanitizeHtml);
  }
}
function GalleryImageComponent_div_4_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h2");
    ɵɵelement(1, "div", 14);
    ɵɵelementEnd();
    ɵɵelementStart(2, "p");
    ɵɵtext(3, "Unable to load the image!");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("innerHTML", ctx_r1.errorSvg, ɵɵsanitizeHtml);
  }
}
function GalleryImageComponent_div_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, GalleryImageComponent_div_4_ng_template_2_ng_container_0_Template, 3, 1, "ng-container", 5)(1, GalleryImageComponent_div_4_ng_template_2_ng_template_1_Template, 4, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const isLarge_r4 = ɵɵreference(2);
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r1.isThumbnail)("ngIfElse", isLarge_r4);
  }
}
function GalleryImageComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtemplate(1, GalleryImageComponent_div_4_div_1_Template, 1, 1, "div", 11)(2, GalleryImageComponent_div_4_ng_template_2_Template, 3, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const defaultError_r5 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.errorTemplate)("ngIfElse", defaultError_r5);
  }
}
function GalleryImageComponent_ng_container_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 16);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("innerHTML", ctx_r1.loaderTemplate, ɵɵsanitizeHtml);
  }
}
function GalleryImageComponent_ng_container_5_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 18);
  }
}
function GalleryImageComponent_ng_container_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, GalleryImageComponent_ng_container_5_ng_template_2_div_0_Template, 1, 0, "div", 17);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r1.isThumbnail);
  }
}
function GalleryImageComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, GalleryImageComponent_ng_container_5_div_1_Template, 1, 1, "div", 15)(2, GalleryImageComponent_ng_container_5_ng_template_2_Template, 1, 1, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const defaultLoader_r6 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.loaderTemplate)("ngIfElse", defaultLoader_r6);
  }
}
function GalleryItemComponent_ng_container_0_ng_container_1_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function GalleryItemComponent_ng_container_0_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, GalleryItemComponent_ng_container_0_ng_container_1_div_2_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.config.imageTemplate)("ngTemplateOutletContext", ctx_r1.imageContext);
  }
}
function GalleryItemComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "gallery-image", 7);
    ɵɵlistener("error", function GalleryItemComponent_ng_container_0_ng_container_1_Template_gallery_image_error_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.error.emit($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(2, GalleryItemComponent_ng_container_0_ng_container_1_div_2_Template, 2, 2, "div", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("src", ctx_r1.imageData.src)("alt", ctx_r1.imageData.alt)("index", ctx_r1.index)("loadingAttr", ctx_r1.config.loadingAttr)("loadingIcon", ctx_r1.config.loadingIcon)("loadingError", ctx_r1.config.loadingError);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.config.imageTemplate);
  }
}
function GalleryItemComponent_ng_container_0_gallery_video_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "gallery-video", 11);
    ɵɵlistener("error", function GalleryItemComponent_ng_container_0_gallery_video_2_Template_gallery_video_error_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.error.emit($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("src", ctx_r1.videoData.src)("mute", ctx_r1.videoData.mute)("poster", ctx_r1.videoData.poster)("controls", ctx_r1.videoData.controls)("controlsList", ctx_r1.videoData.controlsList)("disablePictureInPicture", ctx_r1.videoData.disablePictureInPicture)("play", ctx_r1.isAutoPlay)("pause", ctx_r1.currIndex !== ctx_r1.index);
  }
}
function GalleryItemComponent_ng_container_0_gallery_iframe_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "gallery-iframe", 12);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("src", ctx_r1.youtubeSrc)("autoplay", ctx_r1.isAutoPlay)("loadingAttr", ctx_r1.config.loadingAttr)("pause", ctx_r1.currIndex !== ctx_r1.index);
  }
}
function GalleryItemComponent_ng_container_0_gallery_iframe_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "gallery-iframe", 12);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("src", ctx_r1.vimeoSrc)("autoplay", ctx_r1.isAutoPlay)("loadingAttr", ctx_r1.config.loadingAttr)("pause", ctx_r1.currIndex !== ctx_r1.index);
  }
}
function GalleryItemComponent_ng_container_0_gallery_iframe_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "gallery-iframe", 13);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("src", ctx_r1.data.src)("loadingAttr", ctx_r1.config.loadingAttr);
  }
}
function GalleryItemComponent_ng_container_0_ng_container_6_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function GalleryItemComponent_ng_container_0_ng_container_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, GalleryItemComponent_ng_container_0_ng_container_6_div_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.config.itemTemplate)("ngTemplateOutletContext", ctx_r1.itemContext);
  }
}
function GalleryItemComponent_ng_container_0_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, GalleryItemComponent_ng_container_0_ng_container_6_div_1_Template, 2, 2, "div", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.config.itemTemplate);
  }
}
function GalleryItemComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 1);
    ɵɵtemplate(1, GalleryItemComponent_ng_container_0_ng_container_1_Template, 3, 7, "ng-container", 2)(2, GalleryItemComponent_ng_container_0_gallery_video_2_Template, 1, 8, "gallery-video", 3)(3, GalleryItemComponent_ng_container_0_gallery_iframe_3_Template, 1, 4, "gallery-iframe", 4)(4, GalleryItemComponent_ng_container_0_gallery_iframe_4_Template, 1, 4, "gallery-iframe", 4)(5, GalleryItemComponent_ng_container_0_gallery_iframe_5_Template, 1, 2, "gallery-iframe", 5)(6, GalleryItemComponent_ng_container_0_ng_container_6_Template, 2, 1, "ng-container", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngSwitch", ctx_r1.type);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.Types.Image);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.Types.Video);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.Types.Youtube);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.Types.Vimeo);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.Types.Iframe);
  }
}
var _c2 = ["slider"];
var _c3 = ["*"];
function GallerySliderComponent_gallery_item_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "gallery-item", 5);
    ɵɵlistener("activeIndexChange", function GallerySliderComponent_gallery_item_5_Template_gallery_item_activeIndexChange_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onActiveIndexChange($event));
    })("click", function GallerySliderComponent_gallery_item_5_Template_gallery_item_click_0_listener() {
      const i_r4 = ɵɵrestoreView(_r2).index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.itemClick.emit(i_r4));
    })("error", function GallerySliderComponent_gallery_item_5_Template_gallery_item_error_0_listener($event) {
      const i_r4 = ɵɵrestoreView(_r2).index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.error.emit({
        itemIndex: i_r4,
        error: $event
      }));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("type", item_r5.type)("config", ctx_r2.config)("data", item_r5.data)("currIndex", ctx_r2.state.currIndex)("index", i_r4)("count", ctx_r2.state.items.length)("itemIntersectionObserverDisabled", ctx_r2.isScrolling || ctx_r2.isSliding || ctx_r2.isResizing)("adapter", ctx_r2.adapter);
    ɵɵattribute("galleryId", ctx_r2.galleryId);
  }
}
function GallerySliderComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6)(1, "div", 7);
    ɵɵtext(2, "RESIZING");
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 8);
    ɵɵtext(4, "SCROLLING");
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 9);
    ɵɵtext(6, "SLIDING");
    ɵɵelementEnd()();
  }
}
function GalleryThumbComponent_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function GalleryThumbComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtemplate(1, GalleryThumbComponent_div_1_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.config.thumbTemplate)("ngTemplateOutletContext", ctx_r0.imageContext);
  }
}
function GalleryThumbsComponent_gallery_thumb_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "gallery-thumb", 4);
    ɵɵlistener("click", function GalleryThumbsComponent_gallery_thumb_5_Template_gallery_thumb_click_0_listener() {
      const i_r3 = ɵɵrestoreView(_r2).index;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.config.disableThumbs ? null : ctx_r3.thumbClick.emit(i_r3));
    })("error", function GalleryThumbsComponent_gallery_thumb_5_Template_gallery_thumb_error_0_listener($event) {
      const i_r3 = ɵɵrestoreView(_r2).index;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.error.emit({
        itemIndex: i_r3,
        error: $event
      }));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("type", item_r5.type)("config", ctx_r3.config)("data", item_r5.data)("currIndex", ctx_r3.state.currIndex)("index", i_r3)("count", ctx_r3.state.items.length);
    ɵɵattribute("galleryId", ctx_r3.galleryId);
  }
}
var _c4 = (a0, a1) => ({
  state: a0,
  config: a1
});
function GalleryCoreComponent_gallery_thumbs_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "gallery-thumbs", 7);
    ɵɵlistener("thumbClick", function GalleryCoreComponent_gallery_thumbs_0_Template_gallery_thumbs_thumbClick_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.thumbClick.emit($event));
    })("error", function GalleryCoreComponent_gallery_thumbs_0_Template_gallery_thumbs_error_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.error.emit($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("state", ctx_r1.state)("config", ctx_r1.config)("galleryId", ctx_r1.galleryId);
  }
}
function GalleryCoreComponent_gallery_nav_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "gallery-nav", 8);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("state", ctx_r1.state)("config", ctx_r1.config)("galleryId", ctx_r1.galleryId);
  }
}
function GalleryCoreComponent_gallery_bullets_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "gallery-bullets", 8);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("state", ctx_r1.state)("config", ctx_r1.config)("galleryId", ctx_r1.galleryId);
  }
}
function GalleryCoreComponent_gallery_counter_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "gallery-counter", 9);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("state", ctx_r1.state);
  }
}
function GalleryCoreComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var GalleryAction;
(function(GalleryAction2) {
  GalleryAction2["INITIALIZED"] = "initialized";
  GalleryAction2["ITEMS_CHANGED"] = "itemsChanged";
  GalleryAction2["INDEX_CHANGED"] = "indexChanged";
  GalleryAction2["PLAY"] = "play";
  GalleryAction2["STOP"] = "stop";
})(GalleryAction || (GalleryAction = {}));
var ImageSize;
(function(ImageSize2) {
  ImageSize2["Cover"] = "cover";
  ImageSize2["Contain"] = "contain";
})(ImageSize || (ImageSize = {}));
var LoadingStrategy;
(function(LoadingStrategy2) {
  LoadingStrategy2["Preload"] = "preload";
  LoadingStrategy2["Lazy"] = "lazy";
  LoadingStrategy2["Default"] = "default";
})(LoadingStrategy || (LoadingStrategy = {}));
var LoadingAttr;
(function(LoadingAttr2) {
  LoadingAttr2["Eager"] = "eager";
  LoadingAttr2["Lazy"] = "lazy";
})(LoadingAttr || (LoadingAttr = {}));
var ThumbnailsPosition;
(function(ThumbnailsPosition2) {
  ThumbnailsPosition2["Top"] = "top";
  ThumbnailsPosition2["Left"] = "left";
  ThumbnailsPosition2["Right"] = "right";
  ThumbnailsPosition2["Bottom"] = "bottom";
})(ThumbnailsPosition || (ThumbnailsPosition = {}));
var BulletsPosition;
(function(BulletsPosition2) {
  BulletsPosition2["Top"] = "top";
  BulletsPosition2["Bottom"] = "bottom";
})(BulletsPosition || (BulletsPosition = {}));
var CounterPosition;
(function(CounterPosition2) {
  CounterPosition2["Top"] = "top";
  CounterPosition2["Bottom"] = "bottom";
})(CounterPosition || (CounterPosition = {}));
var Orientation;
(function(Orientation2) {
  Orientation2["Horizontal"] = "horizontal";
  Orientation2["Vertical"] = "vertical";
})(Orientation || (Orientation = {}));
var GalleryItemTypes;
(function(GalleryItemTypes2) {
  GalleryItemTypes2["Image"] = "image";
  GalleryItemTypes2["Video"] = "video";
  GalleryItemTypes2["Youtube"] = "youtube";
  GalleryItemTypes2["Vimeo"] = "vimeo";
  GalleryItemTypes2["Iframe"] = "iframe";
})(GalleryItemTypes || (GalleryItemTypes = {}));
var defaultState = {
  action: GalleryAction.INITIALIZED,
  isPlaying: false,
  hasNext: false,
  hasPrev: false,
  currIndex: 0,
  items: []
};
var defaultConfig = {
  nav: true,
  loop: false,
  bullets: false,
  thumbs: false,
  debug: false,
  bulletSize: 6,
  counter: false,
  autoplay: false,
  thumbWidth: 120,
  thumbHeight: 90,
  disableBullets: false,
  disableThumbs: false,
  disableScroll: false,
  disableThumbScroll: false,
  disableMouseScroll: false,
  disableThumbMouseScroll: false,
  autoplayInterval: 3e3,
  scrollDuration: 468,
  scrollEase: {
    x1: 0.42,
    y1: 0,
    x2: 0.58,
    y2: 1
  },
  thumbCentralized: false,
  thumbAutosize: false,
  itemAutosize: false,
  autoHeight: false,
  scrollBehavior: "smooth",
  resizeDebounceTime: 0,
  loadingAttr: LoadingAttr.Lazy,
  imageSize: ImageSize.Contain,
  thumbImageSize: ImageSize.Cover,
  bulletPosition: BulletsPosition.Bottom,
  counterPosition: CounterPosition.Top,
  thumbPosition: ThumbnailsPosition.Bottom,
  loadingStrategy: LoadingStrategy.Preload,
  orientation: Orientation.Horizontal,
  navIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"/></svg>`,
  // navIcon: `<?xml version="1.0" encoding="UTF-8"?><svg width="512px" height="512px" enable-background="new 0 0 240.823 240.823" version="1.1" viewBox="0 0 240.823 240.823" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m183.19 111.82l-108.3-108.26c-4.752-4.74-12.451-4.74-17.215 0-4.752 4.74-4.752 12.439 0 17.179l99.707 99.671-99.695 99.671c-4.752 4.74-4.752 12.439 0 17.191 4.752 4.74 12.463 4.74 17.215 0l108.3-108.26c4.68-4.691 4.68-12.511-0.012-17.19z"></svg>`,
  loadingIcon: `<?xml version="1.0" encoding="UTF-8"?><svg stroke="#fff" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>`
};
var ImageItem = class {
  constructor(data) {
    this.data = data;
    this.type = GalleryItemTypes.Image;
  }
};
var VideoItem = class {
  constructor(data) {
    this.data = data;
    this.type = GalleryItemTypes.Video;
  }
};
var IframeItem = class {
  constructor(data) {
    this.data = data;
    this.type = GalleryItemTypes.Iframe;
  }
};
var YoutubeItem = class {
  constructor(data) {
    this.data = __spreadValues(__spreadValues({}, data), {
      src: `https://youtube.com/embed/${data.src}`,
      thumb: data.thumb ? data.thumb : `//img.youtube.com/vi/${data.src}/default.jpg`
    });
    this.type = GalleryItemTypes.Youtube;
  }
};
var VimeoItem = class {
  constructor(data) {
    this.data = __spreadValues(__spreadValues({}, data), {
      src: `https://player.vimeo.com/video/${data.src}`,
      thumb: data.thumb ? data.thumb : this.getVimeoThumb(data.src)
    });
    this.type = GalleryItemTypes.Vimeo;
  }
  getVimeoThumb(videoId) {
    return `//vumbnail.com/${videoId}.jpg`;
  }
};
var filterActions = (actions) => {
  return filter((state) => actions.indexOf(state.action) > -1);
};
var GalleryRef = class {
  get stateSnapshot() {
    return this._state.value;
  }
  get configSnapshot() {
    return this._config.value;
  }
  /** Stream that emits when gallery is initialized/reset */
  get initialized() {
    return this.state.pipe(filterActions([GalleryAction.INITIALIZED]));
  }
  /** Stream that emits when items is changed (items loaded, item added, item removed) */
  get itemsChanged() {
    return this.state.pipe(filterActions([GalleryAction.ITEMS_CHANGED]));
  }
  /** Stream that emits when current item is changed */
  get indexChanged() {
    return this.state.pipe(filterActions([GalleryAction.INDEX_CHANGED]));
  }
  /** Stream that emits when the player should start or stop */
  get playingChanged() {
    return this.state.pipe(filterActions([GalleryAction.PLAY, GalleryAction.STOP]));
  }
  constructor(config, deleteInstance) {
    this.deleteInstance = deleteInstance;
    this.itemClick = new Subject();
    this.thumbClick = new Subject();
    this.error = new Subject();
    this._state = new BehaviorSubject(defaultState);
    this._config = new BehaviorSubject(config);
    this.state = this._state.asObservable();
    this.config = this._config.asObservable();
  }
  /**
   * Set gallery state
   */
  setState(state) {
    this._state.next(__spreadValues(__spreadValues({}, this.stateSnapshot), state));
  }
  /**
   * Set gallery config
   */
  setConfig(config) {
    this._config.next(__spreadValues(__spreadValues({}, this._config.value), config));
  }
  /**
   * Add gallery item
   */
  add(item, active) {
    const items = [...this.stateSnapshot.items, item];
    this.setState({
      action: GalleryAction.ITEMS_CHANGED,
      items,
      hasNext: items.length > 1,
      currIndex: active ? items.length - 1 : this.stateSnapshot.currIndex
    });
  }
  /**
   * Add image item
   */
  addImage(data, active) {
    this.add(new ImageItem(data), active);
  }
  /**
   * Add video item
   */
  addVideo(data, active) {
    this.add(new VideoItem(data), active);
  }
  /**
   * Add iframe item
   */
  addIframe(data, active) {
    this.add(new IframeItem(data), active);
  }
  /**
   * Add Youtube item
   */
  addYoutube(data, active) {
    this.add(new YoutubeItem(data), active);
  }
  /**
   * Add Vimeo item
   */
  addVimeo(data, active) {
    this.add(new VimeoItem(data), active);
  }
  /**
   * Remove gallery item
   */
  remove(i) {
    const state = this.stateSnapshot;
    const items = [...state.items.slice(0, i), ...state.items.slice(i + 1, state.items.length)];
    this.setState({
      action: GalleryAction.ITEMS_CHANGED,
      currIndex: i < 1 ? state.currIndex : i - 1,
      items,
      hasNext: items.length > 1,
      hasPrev: i > 0
    });
  }
  /**
   * Load items and reset the state
   */
  load(items) {
    if (items) {
      this.setState({
        action: GalleryAction.ITEMS_CHANGED,
        items,
        hasNext: items.length > 1,
        hasPrev: false
      });
    }
  }
  /**
   * Set active item
   */
  set(i, behavior = this._config.value.scrollBehavior) {
    if (i < 0 || i >= this.stateSnapshot.items.length) {
      console.error(`[NgGallery]: Unable to set the active item because the given index (${i}) is outside the items range!`);
      return;
    }
    if (i !== this.stateSnapshot.currIndex) {
      this.setState({
        behavior,
        action: GalleryAction.INDEX_CHANGED,
        currIndex: i,
        hasNext: i < this.stateSnapshot.items.length - 1,
        hasPrev: i > 0
      });
    }
  }
  /**
   * Next item
   */
  next(behavior = this._config.value.scrollBehavior, loop = true) {
    if (this.stateSnapshot.hasNext) {
      this.set(this.stateSnapshot.currIndex + 1, behavior);
    } else if (loop && this._config.value.loop) {
      this.set(0, behavior);
    }
  }
  /**
   * Prev item
   */
  prev(behavior = this._config.value.scrollBehavior, loop = true) {
    if (this.stateSnapshot.hasPrev) {
      this.set(this.stateSnapshot.currIndex - 1, behavior);
    } else if (loop && this._config.value.loop) {
      this.set(this.stateSnapshot.items.length - 1, behavior);
    }
  }
  /**
   * Start gallery player
   */
  play(interval) {
    if (interval) {
      this.setConfig({
        autoplayInterval: interval
      });
    }
    this.setState({
      action: GalleryAction.PLAY,
      behavior: "auto",
      isPlaying: true
    });
  }
  /**
   * Stop gallery player
   */
  stop() {
    this.setState({
      action: GalleryAction.STOP,
      isPlaying: false
    });
  }
  /**
   * Reset gallery to initial state
   */
  reset() {
    this.setState(defaultState);
  }
  /**
   * Destroy gallery
   */
  destroy() {
    this._state.complete();
    this._config.complete();
    this.itemClick.complete();
    this.thumbClick.complete();
    this.deleteInstance();
  }
};
var GALLERY_CONFIG = new InjectionToken("GALLERY_CONFIG");
var Gallery = class _Gallery {
  constructor(config) {
    this._instances = /* @__PURE__ */ new Map();
    this.config = config ? __spreadValues(__spreadValues({}, defaultConfig), config) : defaultConfig;
  }
  /**
   * Get or create gallery by ID
   * @param id
   * @param config
   */
  ref(id = "root", config) {
    if (this._instances.has(id)) {
      const galleryRef = this._instances.get(id);
      if (config) {
        galleryRef.setConfig(config);
      }
      return galleryRef;
    } else {
      return this._instances.set(id, new GalleryRef(__spreadValues(__spreadValues({}, this.config), config), this.deleteInstance(id))).get(id);
    }
  }
  /**
   * Destroy all gallery instances
   */
  destroyAll() {
    this._instances.forEach((ref) => ref.destroy());
  }
  /**
   * Reset all gallery instances
   */
  resetAll() {
    this._instances.forEach((ref) => ref.reset());
  }
  /**
   * Logger for debugging
   */
  debugConsole(...data) {
    if (this.config.debug) {
      console.log(...data);
    }
  }
  /**
   * A destroyer function for each gallery instance
   */
  deleteInstance(id) {
    return () => {
      if (this._instances.has(id)) {
        this._instances.delete(id);
      }
    };
  }
  static {
    this.ɵfac = function Gallery_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Gallery)(ɵɵinject(GALLERY_CONFIG, 8));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _Gallery,
      factory: _Gallery.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Gallery, [{
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
      args: [GALLERY_CONFIG]
    }]
  }], null);
})();
var GalleryCounterComponent = class _GalleryCounterComponent {
  static {
    this.ɵfac = function GalleryCounterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GalleryCounterComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _GalleryCounterComponent,
      selectors: [["gallery-counter"]],
      inputs: {
        state: "state"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "g-counter"]],
      template: function GalleryCounterComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵtext(1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵtextInterpolate(ctx.state.currIndex + 1 + " / " + ctx.state.items.length);
        }
      },
      styles: [".g-counter[_ngcontent-%COMP%]{font-weight:700;-webkit-user-select:none;user-select:none;opacity:.6;transition:opacity linear .15s;z-index:50;position:absolute;left:50%;transform:translate(-50%) perspective(1px);font-size:12px;padding:4px 10px;color:var(--g-font-color);background-color:var(--g-overlay-color);box-shadow:var(--g-box-shadow);top:var(--counter-top);bottom:var(--counter-bottom);border-radius:var(--counter-border-radius)}.g-counter[_ngcontent-%COMP%]:hover{opacity:.8}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryCounterComponent, [{
    type: Component,
    args: [{
      selector: "gallery-counter",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div class="g-counter">{{ (state.currIndex + 1) + ' / ' + state.items.length }}</div>
  `,
      standalone: true,
      styles: [".g-counter{font-weight:700;-webkit-user-select:none;user-select:none;opacity:.6;transition:opacity linear .15s;z-index:50;position:absolute;left:50%;transform:translate(-50%) perspective(1px);font-size:12px;padding:4px 10px;color:var(--g-font-color);background-color:var(--g-overlay-color);box-shadow:var(--g-box-shadow);top:var(--counter-top);bottom:var(--counter-bottom);border-radius:var(--counter-border-radius)}.g-counter:hover{opacity:.8}\n"]
    }]
  }], null, {
    state: [{
      type: Input
    }]
  });
})();
var GalleryBulletsComponent = class _GalleryBulletsComponent {
  constructor(gallery) {
    this.gallery = gallery;
  }
  static {
    this.ɵfac = function GalleryBulletsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GalleryBulletsComponent)(ɵɵdirectiveInject(Gallery));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _GalleryBulletsComponent,
      selectors: [["gallery-bullets"]],
      inputs: {
        galleryId: "galleryId",
        state: "state",
        config: "config"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "g-bullet", 3, "g-bullet-active", "width", "height", "click", 4, "ngFor", "ngForOf"], [1, "g-bullet", 3, "click"], [1, "g-bullet-inner"]],
      template: function GalleryBulletsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, GalleryBulletsComponent_div_0_Template, 2, 6, "div", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngForOf", ctx.state.items);
        }
      },
      dependencies: [CommonModule, NgForOf],
      styles: ["[_nghost-%COMP%]{position:absolute;left:50%;z-index:99;transform:translate(-50%);display:flex;gap:6px;top:var(--bullets-top);bottom:var(--bullets-bottom)}[_nghost-%COMP%], .g-bullet[_ngcontent-%COMP%], .g-bullet-inner[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.g-bullet[_ngcontent-%COMP%]{cursor:var(--bullets-cursor);z-index:20}.g-bullet[_ngcontent-%COMP%]:hover   .g-bullet-inner[_ngcontent-%COMP%]{opacity:var(--bullets-hover-opacity)}.g-bullet-active[_ngcontent-%COMP%]   .g-bullet-inner[_ngcontent-%COMP%]{opacity:var(--bullets-active-opacity)}.g-bullet-inner[_ngcontent-%COMP%]{background-color:var(--g-overlay-color);opacity:var(--bullets-opacity);width:100%;height:100%;border-radius:50%;transition:opacity linear .15s}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryBulletsComponent, [{
    type: Component,
    args: [{
      selector: "gallery-bullets",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div class="g-bullet"
         *ngFor="let item of state.items; let i = index"
         [class.g-bullet-active]="i === state.currIndex"
         [style.width.px]="config?.bulletSize"
         [style.height.px]="config?.bulletSize"
         (click)="config.disableBullets ? null : gallery.ref(this.galleryId).set(i)">
      <div class="g-bullet-inner"></div>
    </div>
  `,
      standalone: true,
      imports: [CommonModule],
      styles: [":host{position:absolute;left:50%;z-index:99;transform:translate(-50%);display:flex;gap:6px;top:var(--bullets-top);bottom:var(--bullets-bottom)}:host,.g-bullet,.g-bullet-inner{display:flex;justify-content:center;align-items:center}.g-bullet{cursor:var(--bullets-cursor);z-index:20}.g-bullet:hover .g-bullet-inner{opacity:var(--bullets-hover-opacity)}.g-bullet-active .g-bullet-inner{opacity:var(--bullets-active-opacity)}.g-bullet-inner{background-color:var(--g-overlay-color);opacity:var(--bullets-opacity);width:100%;height:100%;border-radius:50%;transition:opacity linear .15s}\n"]
    }]
  }], () => [{
    type: Gallery
  }], {
    galleryId: [{
      type: Input
    }],
    state: [{
      type: Input
    }],
    config: [{
      type: Input
    }]
  });
})();
var GalleryNavComponent = class _GalleryNavComponent {
  constructor(gallery, _sanitizer, dir) {
    this.gallery = gallery;
    this._sanitizer = _sanitizer;
    this.dir = dir;
  }
  ngOnInit() {
    this.navIcon = this._sanitizer.bypassSecurityTrustHtml(this.config.navIcon);
  }
  rightButton() {
  }
  leftButton() {
  }
  static {
    this.ɵfac = function GalleryNavComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GalleryNavComponent)(ɵɵdirectiveInject(Gallery), ɵɵdirectiveInject(DomSanitizer), ɵɵdirectiveInject(Directionality));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _GalleryNavComponent,
      selectors: [["gallery-nav"]],
      inputs: {
        id: [0, "galleryId", "id"],
        state: "state",
        config: "config"
      },
      decls: 2,
      vars: 2,
      consts: [["class", "g-nav-prev", "aria-label", "Previous", "role", "button", 3, "innerHtml", "click", 4, "ngIf"], ["class", "g-nav-next", "aria-label", "Next", "role", "button", 3, "innerHtml", "click", 4, "ngIf"], ["aria-label", "Previous", "role", "button", 1, "g-nav-prev", 3, "click", "innerHtml"], ["aria-label", "Next", "role", "button", 1, "g-nav-next", 3, "click", "innerHtml"]],
      template: function GalleryNavComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, GalleryNavComponent_i_0_Template, 1, 1, "i", 0)(1, GalleryNavComponent_i_1_Template, 1, 1, "i", 1);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.config.loop || ctx.state.hasPrev);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.config.loop || ctx.state.hasNext);
        }
      },
      dependencies: [CommonModule, NgIf],
      styles: [".g-nav-next[_ngcontent-%COMP%], .g-nav-prev[_ngcontent-%COMP%]{position:absolute;top:50%;display:flex;padding:16px 8px;cursor:pointer;z-index:999;opacity:.6;transition:opacity linear .15s,right linear .15s,left linear .15s}.g-nav-next[_ngcontent-%COMP%]:hover, .g-nav-prev[_ngcontent-%COMP%]:hover{opacity:1}.g-nav-next[_ngcontent-%COMP%]     svg, .g-nav-prev[_ngcontent-%COMP%]     svg{filter:var(--g-nav-drop-shadow);width:28px;height:28px;fill:#fff}.g-nav-next[_ngcontent-%COMP%]{left:var(--nav-next-left);right:var(--nav-next-right);transform:var(--nav-next-transform)}.g-nav-next[_ngcontent-%COMP%]:hover{left:var(--nav-next-hover-left);right:var(--nav-next-hover-right)}.g-nav-prev[_ngcontent-%COMP%]{left:var(--nav-prev-left);right:var(--nav-prev-right);transform:var(--nav-prev-transform)}.g-nav-prev[_ngcontent-%COMP%]:hover{left:var(--nav-prev-hover-left);right:var(--nav-prev-hover-right)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryNavComponent, [{
    type: Component,
    args: [{
      selector: "gallery-nav",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <i *ngIf="config.loop || state.hasPrev"
       class="g-nav-prev"
       aria-label="Previous"
       role="button"
       (click)="gallery.ref(this.id).prev(config.scrollBehavior)"
       [innerHtml]="navIcon"></i>

    <i *ngIf="config.loop || state.hasNext"
       class="g-nav-next"
       aria-label="Next"
       role="button"
       (click)="gallery.ref(this.id).next(config.scrollBehavior)"
       [innerHtml]="navIcon"></i>
  `,
      standalone: true,
      imports: [CommonModule],
      styles: [".g-nav-next,.g-nav-prev{position:absolute;top:50%;display:flex;padding:16px 8px;cursor:pointer;z-index:999;opacity:.6;transition:opacity linear .15s,right linear .15s,left linear .15s}.g-nav-next:hover,.g-nav-prev:hover{opacity:1}.g-nav-next ::ng-deep svg,.g-nav-prev ::ng-deep svg{filter:var(--g-nav-drop-shadow);width:28px;height:28px;fill:#fff}.g-nav-next{left:var(--nav-next-left);right:var(--nav-next-right);transform:var(--nav-next-transform)}.g-nav-next:hover{left:var(--nav-next-hover-left);right:var(--nav-next-hover-right)}.g-nav-prev{left:var(--nav-prev-left);right:var(--nav-prev-right);transform:var(--nav-prev-transform)}.g-nav-prev:hover{left:var(--nav-prev-hover-left);right:var(--nav-prev-hover-right)}\n"]
    }]
  }], () => [{
    type: Gallery
  }, {
    type: DomSanitizer
  }, {
    type: Directionality
  }], {
    id: [{
      type: Input,
      args: ["galleryId"]
    }],
    state: [{
      type: Input
    }],
    config: [{
      type: Input
    }]
  });
})();
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;
var HorizontalAdapter = class {
  get scrollValue() {
    return this.slider.scrollLeft;
  }
  get clientSize() {
    return this.slider.clientWidth;
  }
  get isContentLessThanContainer() {
    return this.clientSize >= this.slider.firstElementChild.clientWidth;
  }
  constructor(slider, config) {
    this.slider = slider;
    this.config = config;
    this.hammerDirection = DIRECTION_LEFT | DIRECTION_RIGHT;
    this.scrollSnapType = "x mandatory";
  }
  getScrollToValue(el, behavior) {
    const position = el.offsetLeft - (this.clientSize - el.clientWidth) / 2;
    return {
      behavior,
      start: position
    };
  }
  getRootMargin() {
    return `1000px 1px 1000px 1px`;
  }
  getElementRootMargin(viewport, el) {
    const rootMargin = -1 * ((viewport.clientWidth - el.clientWidth) / 2) + 1;
    return `0px ${rootMargin}px 0px ${rootMargin}px`;
  }
  getCentralizerStartSize() {
    if (this.isContentLessThanContainer) {
      const size = this.clientSize - this.slider.firstElementChild.clientWidth;
      return size / 2;
    }
    return this.clientSize / 2 - this.slider.firstElementChild.firstElementChild?.clientWidth / 2;
  }
  getCentralizerEndSize() {
    if (this.isContentLessThanContainer) {
      const size = this.clientSize - this.slider.firstElementChild.clientWidth;
      return size / 2;
    }
    return this.clientSize / 2 - this.slider.firstElementChild.lastElementChild?.clientWidth / 2;
  }
  getHammerVelocity(e) {
    return e.velocityX;
  }
  getHammerValue(value, e, behavior) {
    return {
      behavior,
      left: value - e.deltaX
    };
  }
};
var VerticalAdapter = class {
  get scrollValue() {
    return this.slider.scrollTop;
  }
  get clientSize() {
    return this.slider.clientHeight;
  }
  get isContentLessThanContainer() {
    return this.clientSize >= this.slider.firstElementChild.clientHeight;
  }
  constructor(slider, config) {
    this.slider = slider;
    this.config = config;
    this.hammerDirection = DIRECTION_UP | DIRECTION_DOWN;
    this.scrollSnapType = "y mandatory";
  }
  getScrollToValue(el, behavior) {
    const position = el.offsetTop - (this.clientSize - el.clientHeight) / 2;
    return {
      behavior,
      top: position
    };
  }
  getRootMargin() {
    return `1px 1000px 1px 1000px`;
  }
  getElementRootMargin(viewport, el) {
    const rootMargin = -1 * ((viewport.clientHeight - el.clientHeight) / 2) + 1;
    return `${rootMargin}px 0px ${rootMargin}px 0px`;
  }
  getCentralizerStartSize() {
    if (this.isContentLessThanContainer) {
      const size = this.clientSize - this.slider.firstElementChild.clientHeight;
      return size / 2;
    }
    return this.clientSize / 2 - this.slider.firstElementChild.firstElementChild?.clientHeight / 2;
  }
  getCentralizerEndSize() {
    if (this.isContentLessThanContainer) {
      const size = this.clientSize - this.slider.firstElementChild.clientHeight;
      return size / 2;
    }
    return this.clientSize / 2 - this.slider.firstElementChild.lastElementChild?.clientHeight / 2;
  }
  getHammerVelocity(e) {
    return e.velocityY;
  }
  getHammerValue(value, e, behavior) {
    return {
      behavior,
      top: value - e.deltaY
    };
  }
};
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 1e-3;
var SUBDIVISION_PRECISION = 1e-7;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1 / (kSplineTableSize - 1);
var float32ArraySupported = typeof Float32Array === "function";
function A(aA1, aA2) {
  return 1 - 3 * aA2 + 3 * aA1;
}
function B(aA1, aA2) {
  return 3 * aA2 - 6 * aA1;
}
function C(aA1) {
  return 3 * aA1;
}
function calcBezier(aT, aA1, aA2) {
  return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
}
function getSlope(aT, aA1, aA2) {
  return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
}
function binarySubdivide(aX, aA, aB, mX1, mX2) {
  let currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (let i = 0; i < NEWTON_ITERATIONS; ++i) {
    let currentSlope = getSlope(aGuessT, mX1, mX2);
    if (currentSlope === 0) {
      return aGuessT;
    }
    let currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }
  return aGuessT;
}
function LinearEasing(x) {
  return x;
}
function bezier(mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error("bezier x values must be in [0, 1] range");
  }
  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  }
  let sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  for (let i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }
  function getTForX(aX) {
    let intervalStart = 0;
    let currentSample = 1;
    let lastSample = kSplineTableSize - 1;
    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;
    let dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    let guessForT = intervalStart + dist * kSampleStepSize;
    let initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }
  return function BezierEasing(x) {
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
}
var SmoothScroll = class _SmoothScroll {
  get _w() {
    return this._document.defaultView;
  }
  /**
   * Timing method
   */
  get _now() {
    return this._w.performance?.now?.bind(this._w.performance) || Date.now;
  }
  set smoothScroll(value) {
    if (value) {
      this._zone.runOutsideAngular(() => {
        this.scrollTo(value);
      });
    }
  }
  constructor(_document, _zone, _dir, _el) {
    this._document = _document;
    this._zone = _zone;
    this._dir = _dir;
    this._scrollController = new Subject();
    this._finished = new Subject();
    this.isScrollingChange = new EventEmitter();
    this._el = _el.nativeElement;
  }
  ngOnInit() {
    this._subscription = this._scrollController.pipe(switchMap((context) => {
      this._zone.run(() => {
        this.isScrollingChange.emit(true);
      });
      this._el.classList.add("g-scrolling");
      this._el.style.setProperty("--slider-scroll-snap-type", "none");
      return of(null).pipe(expand(() => this._step(context).pipe(takeWhile((currContext) => this._isFinished(currContext)), takeUntil(this._finished))), finalize(() => this.resetElement()), takeUntil(this._interrupted()));
    })).subscribe();
  }
  ngOnDestroy() {
    this._subscription?.unsubscribe();
    this._scrollController.complete();
  }
  /**
   * changes scroll position inside an element
   */
  _scrollElement(x, y) {
    this._el.scrollLeft = x;
    this._el.scrollTop = y;
  }
  resetElement() {
    this._zone.run(() => {
      this.isScrollingChange.emit(false);
    });
    this._el.classList.remove("g-scrolling");
    if (!this._isInterruptedByMouse) {
      this._el.style.setProperty("--slider-scroll-snap-type", this.adapter.scrollSnapType);
    }
    this._isInterruptedByMouse = false;
  }
  /**
   * Checks if smooth scroll has reached, cleans up the smooth scroll stream and resolves its promise
   */
  _isFinished(context) {
    if (context.currentX !== context.x || context.currentY !== context.y) {
      return true;
    }
    this._finished.next();
    return false;
  }
  /**
   * Terminates an ongoing smooth scroll
   */
  _interrupted() {
    let interrupt$;
    if (this.interruptOnMousemove && typeof Hammer !== "undefined") {
      this._hammer = new Hammer(this._el, {
        inputClass: Hammer.MouseInput
      });
      this._hammer.get("pan").set({
        direction: this.adapter.hammerDirection
      });
      interrupt$ = merge(new Observable((subscriber) => {
        this._hammer.on("panstart", () => {
          this._isInterruptedByMouse = true;
          subscriber.next();
          subscriber.complete();
        });
        return () => {
          this._hammer.destroy();
        };
      }), fromEvent(this._el, "wheel", {
        passive: true,
        capture: true
      }), fromEvent(this._el, "touchmove", {
        passive: true,
        capture: true
      }));
    } else {
      interrupt$ = merge(fromEvent(this._el, "wheel", {
        passive: true,
        capture: true
      }), fromEvent(this._el, "touchmove", {
        passive: true,
        capture: true
      }));
    }
    return interrupt$.pipe(take(1));
  }
  /**
   * A function called recursively that, given a context, steps through scrolling
   */
  _step(context) {
    return new Observable((subscriber) => {
      let elapsed = (this._now() - context.startTime) / context.duration;
      elapsed = elapsed > 1 ? 1 : elapsed;
      const value = context.easing(elapsed);
      context.currentX = context.startX + (context.x - context.startX) * value;
      context.currentY = context.startY + (context.y - context.startY) * value;
      this._scrollElement(context.currentX, context.currentY);
      requestAnimationFrame(() => {
        subscriber.next(context);
        subscriber.complete();
      });
    });
  }
  _applyScrollToOptions(options) {
    if (!options.duration) {
      this._scrollElement(options.left, options.top);
    }
    const context = {
      scrollable: this._el,
      startTime: this._now(),
      startX: this._el.scrollLeft,
      startY: this._el.scrollTop,
      x: options.left == null ? this._el.scrollLeft : ~~options.left,
      y: options.top == null ? this._el.scrollTop : ~~options.top,
      duration: options.duration,
      easing: bezier(options.easing.x1, options.easing.y1, options.easing.x2, options.easing.y2)
    };
    this._scrollController.next(context);
  }
  /**
   * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
   * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param params specified the offsets to scroll to.
   */
  scrollTo(params) {
    const isRtl = this._dir.value === "rtl";
    const rtlScrollAxisType = getRtlScrollAxisType();
    const options = __spreadProps(__spreadValues(__spreadValues({}, params), {
      // Rewrite start & end offsets as right or left offsets.
      left: params.left == null ? isRtl ? params.end : params.start : params.left,
      right: params.right == null ? isRtl ? params.start : params.end : params.right
    }), {
      duration: params.behavior === "smooth" ? this.config.scrollDuration : 0,
      easing: this.config.scrollEase
    });
    if (options.bottom != null) {
      options.top = this._el.scrollHeight - this._el.clientHeight - options.bottom;
    }
    if (isRtl && rtlScrollAxisType !== RtlScrollAxisType.NORMAL) {
      if (options.left != null) {
        options.right = this._el.scrollWidth - this._el.clientWidth - options.left;
      }
      if (rtlScrollAxisType === RtlScrollAxisType.INVERTED) {
        options.left = options.right;
      } else if (rtlScrollAxisType === RtlScrollAxisType.NEGATED) {
        options.left = options.right ? -options.right : options.right;
      }
    } else {
      if (options.right != null) {
        options.left = this._el.scrollWidth - this._el.clientWidth - options.right;
      }
    }
    return this._applyScrollToOptions(options);
  }
  static {
    this.ɵfac = function SmoothScroll_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmoothScroll)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Dir), ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _SmoothScroll,
      selectors: [["", "smoothScroll", ""]],
      inputs: {
        smoothScroll: "smoothScroll",
        adapter: "adapter",
        config: "config",
        interruptOnMousemove: [0, "smoothScrollInterruptOnMousemove", "interruptOnMousemove"]
      },
      outputs: {
        isScrollingChange: "isScrollingChange"
      },
      features: [ɵɵProvidersFeature([Dir])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmoothScroll, [{
    type: Directive,
    args: [{
      selector: "[smoothScroll]",
      standalone: true,
      providers: [Dir]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: NgZone
  }, {
    type: Dir
  }, {
    type: ElementRef
  }], {
    smoothScroll: [{
      type: Input
    }],
    adapter: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    interruptOnMousemove: [{
      type: Input,
      args: ["smoothScrollInterruptOnMousemove"]
    }],
    isScrollingChange: [{
      type: Output
    }]
  });
})();
var HammerSliding = class _HammerSliding {
  get _viewport() {
    return this._el.nativeElement;
  }
  constructor(_document, _el, _dir, _platform, _zone) {
    this._document = _document;
    this._el = _el;
    this._dir = _dir;
    this._platform = _platform;
    this._zone = _zone;
    this.activeIndexChange = new EventEmitter();
    this.isSlidingChange = new EventEmitter();
  }
  ngOnChanges(changes) {
    if (changes.enabled && changes.enabled?.currentValue !== changes.enabled?.previousValue) {
      this.enabled ? this._subscribe() : this._unsubscribe();
    }
    if (!changes.adapter?.firstChange && changes.adapter?.currentValue !== changes.adapter?.previousValue) {
      this.enabled ? this._subscribe() : this._unsubscribe();
    }
  }
  ngOnDestroy() {
    this._unsubscribe();
  }
  _subscribe() {
    this._unsubscribe();
    if (!this._platform.ANDROID && !this._platform.IOS && typeof Hammer !== "undefined") {
      this._zone.runOutsideAngular(() => {
        const direction = this.adapter.hammerDirection;
        this._hammer = new Hammer(this._el.nativeElement, {
          inputClass: Hammer.MouseInput
        });
        this._hammer.get("pan").set({
          direction
        });
        let offset;
        this._hammer.on("panstart", () => {
          this._zone.run(() => {
            this.isSlidingChange.emit(true);
          });
          offset = this.adapter.scrollValue;
          this._viewport.classList.add("g-sliding");
          this._viewport.style.setProperty("--slider-scroll-snap-type", "none");
        });
        this._hammer.on("panmove", (e) => this._viewport.scrollTo(this.adapter.getHammerValue(offset, e, "auto")));
        this._hammer.on("panend", (e) => {
          this._document.onselectstart = null;
          this._viewport.classList.remove("g-sliding");
          const index = this.getIndexOnMouseUp(e);
          this._zone.run(() => {
            this.isSlidingChange.emit(false);
            this.activeIndexChange.emit(index);
          });
        });
      });
    }
  }
  _unsubscribe() {
    this._hammer?.destroy();
  }
  getIndexOnMouseUp(e) {
    const currElement = this.items[this.state.currIndex].nativeElement;
    const elementAtCenter = this.getElementFromViewportCenter();
    if (elementAtCenter && elementAtCenter !== currElement) {
      return +elementAtCenter.getAttribute("galleryIndex");
    }
    const velocity = this.adapter.getHammerVelocity(e);
    if (Math.abs(velocity) > 0.3) {
      if (this.config.orientation === Orientation.Horizontal) {
        if (velocity > 0) {
          return this._dir.value === "rtl" ? this.state.currIndex + 1 : this.state.currIndex - 1;
        }
        return this._dir.value === "rtl" ? this.state.currIndex - 1 : this.state.currIndex + 1;
      } else {
        return velocity > 0 ? this.state.currIndex - 1 : this.state.currIndex + 1;
      }
    }
    return -1;
  }
  getElementFromViewportCenter() {
    const sliderRect = this._viewport.getBoundingClientRect();
    const centerElements = this._document.elementsFromPoint(sliderRect.x + sliderRect.width / 2, sliderRect.y + sliderRect.height / 2);
    return centerElements.find((element) => {
      return element.getAttribute("galleryId") === this.galleryId;
    });
  }
  static {
    this.ɵfac = function HammerSliding_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HammerSliding)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Directionality), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NgZone));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _HammerSliding,
      selectors: [["", "hammerSliding", ""]],
      inputs: {
        enabled: [0, "hammerSliding", "enabled"],
        galleryId: "galleryId",
        items: "items",
        adapter: "adapter",
        state: "state",
        config: "config"
      },
      outputs: {
        activeIndexChange: "activeIndexChange",
        isSlidingChange: "isSlidingChange"
      },
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HammerSliding, [{
    type: Directive,
    args: [{
      selector: "[hammerSliding]",
      standalone: true
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: ElementRef
  }, {
    type: Directionality
  }, {
    type: Platform
  }, {
    type: NgZone
  }], {
    enabled: [{
      type: Input,
      args: ["hammerSliding"]
    }],
    galleryId: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    adapter: [{
      type: Input
    }],
    state: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    activeIndexChange: [{
      type: Output
    }],
    isSlidingChange: [{
      type: Output
    }]
  });
})();
var ActiveItemObserver = class {
  observe(root, elements, rootMargin) {
    return createIntersectionObserver(root, elements, rootMargin).pipe(map((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("g-item-highlight");
        return +entry.target.getAttribute("galleryIndex");
      } else {
        entry.target.classList.remove("g-item-highlight");
        return -1;
      }
    }), filter((index) => index !== -1));
  }
};
function createIntersectionObserver(root, elements, rootMargin) {
  return new Observable((observer) => {
    const intersectionObserver = new IntersectionObserver((entries) => observer.next(entries), {
      root,
      rootMargin,
      threshold: 1
    });
    elements.forEach((element) => intersectionObserver.observe(element));
    return () => {
      elements.forEach((element) => intersectionObserver.unobserve(element));
      intersectionObserver.disconnect();
    };
  }).pipe(mergeMap((entries) => entries));
}
var SliderIntersectionObserver = class _SliderIntersectionObserver {
  get _viewport() {
    return this._el.nativeElement;
  }
  constructor(_zone, _el) {
    this._zone = _zone;
    this._el = _el;
    this._sensor = new ActiveItemObserver();
    this.activeIndexChange = new EventEmitter();
  }
  ngOnChanges() {
    this.config.itemAutosize || this.disabled ? this._unsubscribe() : this._subscribe();
  }
  ngOnDestroy() {
    this._unsubscribe();
  }
  _subscribe() {
    this._unsubscribe();
    if (!!this.adapter && !!this.items?.length) {
      const rootMargin = this.adapter.getRootMargin();
      if (this.config.debug) {
        this._viewport.style.setProperty("--intersection-margin", `"INTERSECTION(${rootMargin})"`);
      }
      this._zone.runOutsideAngular(() => {
        this._currentSubscription = this._sensor.observe(this._viewport, this.items.map((item) => item.nativeElement), rootMargin).subscribe((index) => {
          this._zone.run(() => this.activeIndexChange.emit(index));
        });
      });
    }
  }
  _unsubscribe() {
    this._currentSubscription?.unsubscribe();
  }
  static {
    this.ɵfac = function SliderIntersectionObserver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SliderIntersectionObserver)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _SliderIntersectionObserver,
      selectors: [["", "sliderIntersectionObserver", ""]],
      inputs: {
        adapter: "adapter",
        items: "items",
        config: "config",
        disabled: [0, "sliderIntersectionObserverDisabled", "disabled"]
      },
      outputs: {
        activeIndexChange: "activeIndexChange"
      },
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderIntersectionObserver, [{
    type: Directive,
    args: [{
      selector: "[sliderIntersectionObserver]",
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }], {
    adapter: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: ["sliderIntersectionObserverDisabled"]
    }],
    activeIndexChange: [{
      type: Output
    }]
  });
})();
function resizeObservable(el, setter) {
  return new Observable((subscriber) => {
    const resizeObserver = new ResizeObserver((entries) => subscriber.next(entries));
    resizeObserver.observe(el);
    if (setter) {
      setter(resizeObserver);
    }
    return () => resizeObserver.disconnect();
  }).pipe(mergeMap((entries) => entries));
}
var GalleryIframeComponent = class _GalleryIframeComponent {
  set src(src) {
    this.videoSrc = src;
    this.iframeSrc = this._sanitizer.bypassSecurityTrustResourceUrl(src);
  }
  set pauseVideo(shouldPause) {
    if (this.iframe?.nativeElement) {
      if (shouldPause) {
        const iframe = this.iframe.nativeElement;
        iframe.src = null;
        if (!this.autoplay && this.videoSrc) {
          this.iframeSrc = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoSrc);
        }
      }
    }
  }
  constructor(_sanitizer) {
    this._sanitizer = _sanitizer;
  }
  static {
    this.ɵfac = function GalleryIframeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GalleryIframeComponent)(ɵɵdirectiveInject(DomSanitizer));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _GalleryIframeComponent,
      selectors: [["gallery-iframe"]],
      viewQuery: function GalleryIframeComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.iframe = _t.first);
        }
      },
      inputs: {
        src: "src",
        pauseVideo: [0, "pause", "pauseVideo"],
        autoplay: "autoplay",
        loadingAttr: "loadingAttr"
      },
      decls: 3,
      vars: 2,
      consts: [["default", ""], ["iframe", ""], ["allowfullscreen", "", "allow", "", "style", "border:none", 3, "src", 4, "ngIf", "ngIfElse"], ["allowfullscreen", "", "allow", "", 2, "border", "none", 3, "src"], ["allowfullscreen", "", 2, "border", "none", 3, "src"]],
      template: function GalleryIframeComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, GalleryIframeComponent_iframe_0_Template, 2, 2, "iframe", 2)(1, GalleryIframeComponent_ng_template_1_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const default_r2 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.autoplay)("ngIfElse", default_r2);
        }
      },
      dependencies: [NgIf],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryIframeComponent, [{
    type: Component,
    args: [{
      selector: "gallery-iframe",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <iframe *ngIf="autoplay; else default"
            #iframe
            [attr.loading]="loadingAttr"
            allowfullscreen
            allow
            style="border:none"
            [src]="iframeSrc">
    </iframe>
    <ng-template #default>
      <iframe #iframe
              [attr.loading]="loadingAttr"
              allowfullscreen
              style="border:none"
              [src]="iframeSrc">
      </iframe>
    </ng-template>
  `,
      standalone: true,
      imports: [NgIf]
    }]
  }], () => [{
    type: DomSanitizer
  }], {
    src: [{
      type: Input,
      args: ["src"]
    }],
    pauseVideo: [{
      type: Input,
      args: ["pause"]
    }],
    autoplay: [{
      type: Input
    }],
    loadingAttr: [{
      type: Input
    }],
    iframe: [{
      type: ViewChild,
      args: ["iframe"]
    }]
  });
})();
var GalleryVideoComponent = class _GalleryVideoComponent {
  constructor() {
    this.error = new EventEmitter();
  }
  set pauseVideo(shouldPause) {
    if (this.video.nativeElement) {
      const video = this.video.nativeElement;
      if (shouldPause && !video.paused) {
        video.pause();
      }
    }
  }
  set playVideo(shouldPlay) {
    if (this.video.nativeElement) {
      const video = this.video.nativeElement;
      if (shouldPlay) {
        video.play();
      }
    }
  }
  ngOnInit() {
    if (this.src instanceof Array) {
      this.videoSources = [...this.src];
    } else {
      this.videoSources = [{
        url: this.src
      }];
    }
  }
  static {
    this.ɵfac = function GalleryVideoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GalleryVideoComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _GalleryVideoComponent,
      selectors: [["gallery-video"]],
      viewQuery: function GalleryVideoComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c1, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.video = _t.first);
        }
      },
      inputs: {
        src: "src",
        poster: "poster",
        mute: "mute",
        loop: "loop",
        controls: "controls",
        controlsList: "controlsList",
        disableRemotePlayback: "disableRemotePlayback",
        disablePictureInPicture: "disablePictureInPicture",
        pauseVideo: [0, "pause", "pauseVideo"],
        playVideo: [0, "play", "playVideo"]
      },
      outputs: {
        error: "error"
      },
      decls: 3,
      vars: 8,
      consts: [["video", ""], ["noType", ""], [3, "error", "disableRemotePlayback", "controls", "loop", "poster"], [4, "ngFor", "ngForOf"], [3, "src", "type", 4, "ngIf", "ngIfElse"], [3, "src", "type"], [3, "src"]],
      template: function GalleryVideoComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "video", 2, 0);
          ɵɵlistener("error", function GalleryVideoComponent_Template_video_error_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.error.emit($event));
          });
          ɵɵtemplate(2, GalleryVideoComponent_ng_container_2_Template, 4, 2, "ng-container", 3);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("disableRemotePlayback", ctx.disableRemotePlayback)("controls", ctx.controls)("loop", ctx.loop)("poster", ctx.poster, ɵɵsanitizeUrl);
          ɵɵattribute("mute", ctx.mute)("controlsList", ctx.controlsList)("disablePictureInPicture", ctx.disablePictureInPicture);
          ɵɵadvance(2);
          ɵɵproperty("ngForOf", ctx.videoSources);
        }
      },
      dependencies: [NgForOf, NgIf],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryVideoComponent, [{
    type: Component,
    args: [{
      selector: "gallery-video",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <video #video
           [attr.mute]="mute"
           [attr.controlsList]="controlsList"
           [attr.disablePictureInPicture]="disablePictureInPicture"
           [disableRemotePlayback]="disableRemotePlayback"
           [controls]="controls"
           [loop]="loop"
           [poster]="poster"
           (error)="error.emit($event)">
      <ng-container *ngFor="let src of videoSources">
        <source *ngIf="src?.type; else noType" [src]="src?.url" [type]="src.type"/>
        <ng-template #noType>
          <source [src]="src?.url"/>
        </ng-template>
      </ng-container>
    </video>
  `,
      standalone: true,
      imports: [NgForOf, NgIf]
    }]
  }], null, {
    src: [{
      type: Input
    }],
    poster: [{
      type: Input
    }],
    mute: [{
      type: Input
    }],
    loop: [{
      type: Input
    }],
    controls: [{
      type: Input
    }],
    controlsList: [{
      type: Input
    }],
    disableRemotePlayback: [{
      type: Input
    }],
    disablePictureInPicture: [{
      type: Input
    }],
    pauseVideo: [{
      type: Input,
      args: ["pause"]
    }],
    playVideo: [{
      type: Input,
      args: ["play"]
    }],
    error: [{
      type: Output
    }],
    video: [{
      type: ViewChild,
      args: ["video", {
        static: true
      }]
    }]
  });
})();
var imageFailedSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="100" height="100" version="1.1" viewBox="0 0 256 256" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
 <g transform="translate(1.4066 1.4066) scale(2.81)">
	<path d="m74.453 48.627c-5.538 0-11.075-2.107-15.291-6.324-6.11-6.11-7.768-14.99-5.024-22.629h-48.08c-3.346 1e-3 -6.058 2.713-6.058 6.059v16.322l23.834 20.315c2.278 1.942 5.573 2.119 8.047 0.434l14.382-9.801c2.33-1.588 5.408-1.531 7.677 0.141l27.15 20.001v-25.574c-2.156 0.692-4.394 1.056-6.637 1.056z" fill="#c1e5f4" stroke-linecap="round"/>
 <circle cx="27.942" cy="37.942" r="6.072" fill="#fff0a9"/>
 <path d="m85.446 16.02c-6.061-6.061-15.922-6.061-21.983 0s-6.061 15.923 0 21.984c3.031 3.031 7.011 4.546 10.992 4.546 3.98 0 7.962-1.515 10.992-4.545 2.936-2.937 4.553-6.841 4.553-10.993s-1.617-8.056-4.554-10.992zm-3.555 3.555c1.987 1.986 3.081 4.627 3.081 7.436 0 1.95-0.538 3.813-1.525 5.438l-14.428-14.428c4.043-2.442 9.384-1.934 12.872 1.554zm-14.873 14.874c-3.486-3.487-3.997-8.829-1.554-12.873l14.426 14.427c-4.043 2.443-9.385 1.932-12.872-1.554z" fill="#e29393" stroke-linecap="round"/>
 <path d="m0 40.043v32.425c0 3.346 2.712 6.058 6.058 6.058h68.974c3.346 0 6.058-2.712 6.058-6.058v-1.335l-27.15-20.001c-2.27-1.672-5.348-1.729-7.677-0.141l-14.383 9.801c-2.473 1.686-5.769 1.508-8.047-0.434l-23.833-20.315z" fill="#96ea9c" stroke-linecap="round"/>
</g>
</svg>
`;
var ImgManager = class _ImgManager {
  constructor() {
    this.trigger$ = new BehaviorSubject(null);
    this.images = /* @__PURE__ */ new Map();
  }
  getActiveItem(state$) {
    return this.trigger$.pipe(switchMap(() => state$.pipe(switchMap((state) => {
      const img = this.images.get(state.currIndex);
      if (img) {
        return img.state.pipe(filter((state2) => state2 !== "loading"), map(() => img.target));
      }
      return EMPTY;
    }))));
  }
  addItem(index, payload) {
    this.images.set(index, payload);
    this.trigger$.next();
  }
  deleteItem(index) {
    if (this.images.has(index)) {
      this.images.delete(index);
      this.trigger$.next();
    }
  }
  static {
    this.ɵfac = function ImgManager_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ImgManager)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ImgManager,
      factory: _ImgManager.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImgManager, [{
    type: Injectable
  }], null, null);
})();
var ImgRecognizer = class _ImgRecognizer {
  onLoad() {
    this.item.state$.next("success");
  }
  onError() {
    this.item.state$.next("failed");
  }
  constructor(el, manager, item) {
    this.el = el;
    this.manager = manager;
    this.item = item;
    if (item) {
      item.isItemContainImage = true;
    } else {
      throw new Error("[NgGallery]: galleryImage directive should be only used inside gallery item templates!");
    }
  }
  ngOnInit() {
    this.manager.addItem(this.index, {
      state: this.item.state$.asObservable(),
      target: this.el.nativeElement
    });
  }
  ngOnDestroy() {
    this.manager.deleteItem(this.index);
  }
  static {
    this.ɵfac = function ImgRecognizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ImgRecognizer)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ImgManager), ɵɵdirectiveInject(GalleryItemComponent));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _ImgRecognizer,
      selectors: [["img", "galleryImage", ""]],
      hostBindings: function ImgRecognizer_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("load", function ImgRecognizer_load_HostBindingHandler($event) {
            return ctx.onLoad($event);
          })("error", function ImgRecognizer_error_HostBindingHandler($event) {
            return ctx.onError($event);
          });
        }
      },
      inputs: {
        index: [0, "galleryImage", "index"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImgRecognizer, [{
    type: Directive,
    args: [{
      selector: "img[galleryImage]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ImgManager
  }, {
    type: GalleryItemComponent
  }], {
    index: [{
      type: Input,
      args: ["galleryImage"]
    }],
    onLoad: [{
      type: HostListener,
      args: ["load", ["$event"]]
    }],
    onError: [{
      type: HostListener,
      args: ["error", ["$event"]]
    }]
  });
})();
var GalleryImageComponent = class _GalleryImageComponent {
  get imageState() {
    return this.state;
  }
  constructor(_sanitizer) {
    this._sanitizer = _sanitizer;
    this.state = "loading";
    this.errorIcon = imageFailedSvg;
    this.error = new EventEmitter();
  }
  ngOnInit() {
    if (this.loadingIcon) {
      this.loaderTemplate = this._sanitizer.bypassSecurityTrustHtml(this.loadingIcon);
    }
    if (this.loadingError) {
      this.errorTemplate = this._sanitizer.bypassSecurityTrustHtml(this.loadingError);
    }
    if (this.errorIcon) {
      this.errorSvg = this._sanitizer.bypassSecurityTrustHtml(this.errorIcon);
    }
  }
  static {
    this.ɵfac = function GalleryImageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GalleryImageComponent)(ɵɵdirectiveInject(DomSanitizer));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _GalleryImageComponent,
      selectors: [["gallery-image"]],
      hostVars: 1,
      hostBindings: function GalleryImageComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("imageState", ctx.imageState);
        }
      },
      inputs: {
        isThumbnail: "isThumbnail",
        index: "index",
        loadingAttr: "loadingAttr",
        alt: "alt",
        src: "src",
        loadingIcon: "loadingIcon",
        loadingError: "loadingError",
        errorIcon: "errorIcon"
      },
      outputs: {
        error: "error"
      },
      decls: 6,
      vars: 5,
      consts: [["main", ""], ["defaultError", ""], ["isLarge", ""], ["defaultLoader", ""], [3, "ngSwitch"], [4, "ngIf", "ngIfElse"], ["class", "g-image-error-message", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [1, "g-image-item", 3, "load", "error", "src"], [1, "g-image-item", 3, "load", "error", "galleryImage", "src"], [1, "g-image-error-message"], [3, "innerHTML", 4, "ngIf", "ngIfElse"], [3, "innerHTML"], [1, "gallery-thumb-error", 3, "innerHTML"], [1, "gallery-image-error", 3, "innerHTML"], ["class", "g-loading", 3, "innerHTML", 4, "ngIf", "ngIfElse"], [1, "g-loading", 3, "innerHTML"], ["class", "g-thumb-loading", 4, "ngIf"], [1, "g-thumb-loading"]],
      template: function GalleryImageComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementContainerStart(0, 4);
          ɵɵtemplate(1, GalleryImageComponent_ng_container_1_Template, 2, 6, "ng-container", 5)(2, GalleryImageComponent_ng_template_2_Template, 1, 7, "ng-template", null, 0, ɵɵtemplateRefExtractor)(4, GalleryImageComponent_div_4_Template, 4, 2, "div", 6)(5, GalleryImageComponent_ng_container_5_Template, 4, 2, "ng-container", 7);
          ɵɵelementContainerEnd();
        }
        if (rf & 2) {
          const main_r7 = ɵɵreference(3);
          ɵɵproperty("ngSwitch", ctx.state);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.isThumbnail)("ngIfElse", main_r7);
          ɵɵadvance(3);
          ɵɵproperty("ngSwitchCase", "failed");
          ɵɵadvance();
          ɵɵproperty("ngSwitchCase", "loading");
        }
      },
      dependencies: [NgSwitch, NgSwitchCase, NgIf, ImgRecognizer],
      styles: ['[_nghost-%COMP%]{display:flex;width:100%;height:100%;max-height:100%;max-width:100%;transition:opacity .3s cubic-bezier(.5,0,.5,1);opacity:var(--g-thumb-opacity)}[imageState=success][_nghost-%COMP%]{align-self:center}[_nghost-%COMP%]     svg{width:100%;height:100%}.gallery-image-error[_ngcontent-%COMP%]{width:100px;height:100px}.gallery-thumb-error[_ngcontent-%COMP%]{width:40px;height:40px}img.g-image-item[_ngcontent-%COMP%]{object-fit:var(--image-object-fit);width:100%;height:100%;pointer-events:none;max-height:100%;max-width:100%}.g-image-error-message[_ngcontent-%COMP%]{position:absolute;z-index:10;inset:0;color:#fff;display:flex;align-items:center;justify-content:center;flex-direction:column}h2[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{color:coral;margin:0}h2[_ngcontent-%COMP%]{font-size:3.5em;margin-bottom:.3em}h4[_ngcontent-%COMP%]{font-size:1.6em}.g-loading[_ngcontent-%COMP%]{position:absolute;transform:translate3d(-50%,-50%,0);left:50%;top:50%;width:80px;height:80px}.g-active-thumb[_ngcontent-%COMP%]   .g-thumb-loading[_ngcontent-%COMP%]{background-color:#464646}.g-thumb-loading[_ngcontent-%COMP%]{position:relative;overflow:hidden;width:100%;height:100%;background-color:#262626}.g-thumb-loading[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0 0 0 50%;z-index:1;width:500%;margin-left:-250%;animation:_ngcontent-%COMP%_phAnimation .8s linear infinite;background:linear-gradient(to right,#fff0 46%,#ffffff59,#fff0 54%) 50% 50%}@keyframes _ngcontent-%COMP%_phAnimation{0%{transform:translate3d(-30%,0,0)}to{transform:translate3d(30%,0,0)}}'],
      data: {
        animation: [trigger("fadeIn", [transition("* => success", [style({
          opacity: 0
        }), animate("300ms ease-in", style({
          opacity: 1
        }))])])]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryImageComponent, [{
    type: Component,
    args: [{
      selector: "gallery-image",
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [trigger("fadeIn", [transition("* => success", [style({
        opacity: 0
      }), animate("300ms ease-in", style({
        opacity: 1
      }))])])],
      template: `
    <ng-container [ngSwitch]="state">

      <ng-container *ngIf="isThumbnail; else main">
        <img [@fadeIn]="state"
             [src]="src"
             [attr.alt]="alt"
             [attr.loading]="loadingAttr"
             [style.visibility]="state === 'success' ? 'visible' : 'hidden'"
             class="g-image-item"
             (load)="state = 'success'"
             (error)="state = 'failed'; error.emit($event)"/>
      </ng-container>
      <ng-template #main>
        <img [galleryImage]="index"
             [@fadeIn]="state"
             [src]="src"
             [attr.alt]="alt"
             [attr.loading]="loadingAttr"
             [style.visibility]="state === 'success' ? 'visible' : 'hidden'"
             class="g-image-item"
             (load)="state = 'success'"
             (error)="state = 'failed'; error.emit($event)"/>
      </ng-template>

      <div *ngSwitchCase="'failed'"
           class="g-image-error-message">
        <div *ngIf="errorTemplate; else defaultError"
             [innerHTML]="errorTemplate"></div>
        <ng-template #defaultError>
          <ng-container *ngIf="isThumbnail; else isLarge">
            <h4>
              <div class="gallery-thumb-error" [innerHTML]="errorSvg"></div>
            </h4>
          </ng-container>
          <ng-template #isLarge>
            <h2>
              <div class="gallery-image-error" [innerHTML]="errorSvg"></div>
            </h2>
            <p>Unable to load the image!</p>
          </ng-template>
        </ng-template>
      </div>

      <ng-container *ngSwitchCase="'loading'">
        <div *ngIf="loaderTemplate; else defaultLoader"
             class="g-loading"
             [innerHTML]="loaderTemplate">
        </div>
        <ng-template #defaultLoader>
          <div *ngIf="isThumbnail" class="g-thumb-loading"></div>
        </ng-template>
      </ng-container>
    </ng-container>
  `,
      standalone: true,
      imports: [NgSwitch, NgSwitchCase, NgIf, ImgRecognizer],
      styles: [':host{display:flex;width:100%;height:100%;max-height:100%;max-width:100%;transition:opacity .3s cubic-bezier(.5,0,.5,1);opacity:var(--g-thumb-opacity)}:host[imageState=success]{align-self:center}:host ::ng-deep svg{width:100%;height:100%}.gallery-image-error{width:100px;height:100px}.gallery-thumb-error{width:40px;height:40px}img.g-image-item{object-fit:var(--image-object-fit);width:100%;height:100%;pointer-events:none;max-height:100%;max-width:100%}.g-image-error-message{position:absolute;z-index:10;inset:0;color:#fff;display:flex;align-items:center;justify-content:center;flex-direction:column}h2,h4{color:coral;margin:0}h2{font-size:3.5em;margin-bottom:.3em}h4{font-size:1.6em}.g-loading{position:absolute;transform:translate3d(-50%,-50%,0);left:50%;top:50%;width:80px;height:80px}.g-active-thumb .g-thumb-loading{background-color:#464646}.g-thumb-loading{position:relative;overflow:hidden;width:100%;height:100%;background-color:#262626}.g-thumb-loading:before{content:"";position:absolute;inset:0 0 0 50%;z-index:1;width:500%;margin-left:-250%;animation:phAnimation .8s linear infinite;background:linear-gradient(to right,#fff0 46%,#ffffff59,#fff0 54%) 50% 50%}@keyframes phAnimation{0%{transform:translate3d(-30%,0,0)}to{transform:translate3d(30%,0,0)}}\n']
    }]
  }], () => [{
    type: DomSanitizer
  }], {
    isThumbnail: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    loadingAttr: [{
      type: Input
    }],
    alt: [{
      type: Input
    }],
    src: [{
      type: Input
    }],
    loadingIcon: [{
      type: Input
    }],
    loadingError: [{
      type: Input
    }],
    errorIcon: [{
      type: Input
    }],
    error: [{
      type: Output
    }],
    imageState: [{
      type: HostBinding,
      args: ["attr.imageState"]
    }]
  });
})();
var GalleryItemComponent = class _GalleryItemComponent {
  get isActive() {
    return this.index === this.currIndex;
  }
  get isIndexAttr() {
    return this.index;
  }
  get itemState() {
    return this.state$.value;
  }
  get imageContext() {
    return {
      $implicit: this.imageData,
      index: this.index,
      type: this.type,
      active: this.isActive,
      count: this.count,
      first: this.index === 0,
      last: this.index === this.count - 1
    };
  }
  get itemContext() {
    return {
      $implicit: this.data,
      index: this.index,
      type: this.type,
      active: this.isActive,
      count: this.count,
      first: this.index === 0,
      last: this.index === this.count - 1
    };
  }
  get nativeElement() {
    return this.el.nativeElement;
  }
  get isAutoPlay() {
    if (this.isActive) {
      if (this.type === GalleryItemTypes.Video || this.type === GalleryItemTypes.Youtube || this.type === GalleryItemTypes.Vimeo) {
        return this.videoData.autoplay;
      }
    }
  }
  get youtubeSrc() {
    let autoplay = 0;
    if (this.isActive && this.type === GalleryItemTypes.Youtube && this.data.autoplay) {
      autoplay = 1;
    }
    const url = new URL(this.data.src);
    url.search = new URLSearchParams(__spreadProps(__spreadValues({
      wmode: "transparent"
    }, this.data.params), {
      autoplay
    })).toString();
    return url.href;
  }
  get vimeoSrc() {
    let autoplay = 0;
    if (this.isActive && this.type === GalleryItemTypes.Vimeo) {
      if (this.data.autoplay) {
        autoplay = 1;
      }
    }
    const url = new URL(this.data.src);
    url.search = new URLSearchParams(__spreadProps(__spreadValues({}, this.data.params), {
      autoplay
    })).toString();
    return url.href;
  }
  get load() {
    switch (this.config.loadingStrategy) {
      case LoadingStrategy.Preload:
        return true;
      case LoadingStrategy.Lazy:
        return this.currIndex === this.index;
      default:
        return this.currIndex === this.index || this.currIndex === this.index - 1 || this.currIndex === this.index + 1;
    }
  }
  get imageData() {
    return this.data;
  }
  get videoData() {
    return this.data;
  }
  constructor(el) {
    this.el = el;
    this.Types = GalleryItemTypes;
    this.state$ = new BehaviorSubject("loading");
    this.error = new EventEmitter();
  }
  ngAfterViewInit() {
    if (!this.isItemContainImage) {
      this.state$.next("success");
    }
  }
  static {
    this.ɵfac = function GalleryItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GalleryItemComponent)(ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _GalleryItemComponent,
      selectors: [["gallery-item"]],
      hostVars: 4,
      hostBindings: function GalleryItemComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("galleryIndex", ctx.isIndexAttr)("itemState", ctx.itemState);
          ɵɵclassProp("g-active-item", ctx.isActive);
        }
      },
      inputs: {
        config: "config",
        index: "index",
        count: "count",
        currIndex: "currIndex",
        type: "type",
        data: "data"
      },
      outputs: {
        error: "error"
      },
      decls: 1,
      vars: 1,
      consts: [[3, "ngSwitch", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "src", "mute", "poster", "controls", "controlsList", "disablePictureInPicture", "play", "pause", "error", 4, "ngSwitchCase"], [3, "src", "autoplay", "loadingAttr", "pause", 4, "ngSwitchCase"], [3, "src", "loadingAttr", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "error", "src", "alt", "index", "loadingAttr", "loadingIcon", "loadingError"], ["class", "g-template g-item-template", 4, "ngIf"], [1, "g-template", "g-item-template"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "error", "src", "mute", "poster", "controls", "controlsList", "disablePictureInPicture", "play", "pause"], [3, "src", "autoplay", "loadingAttr", "pause"], [3, "src", "loadingAttr"]],
      template: function GalleryItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, GalleryItemComponent_ng_container_0_Template, 7, 6, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.load);
        }
      },
      dependencies: [CommonModule, NgIf, NgTemplateOutlet, NgSwitch, NgSwitchCase, NgSwitchDefault, GalleryImageComponent, GalleryVideoComponent, GalleryIframeComponent],
      styles: ["[_nghost-%COMP%]{cursor:var(--g-item-cursor);height:var(--g-item-height);width:var(--g-item-width);max-height:var(--g-item-max-height);max-width:var(--slider-width);z-index:10;position:relative;overflow:hidden;display:flex;flex-direction:column;flex:0 0 auto;scroll-snap-align:center;-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}[itemState=loading][_nghost-%COMP%]{width:var(--slider-width);height:var(--slider-height)}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{height:100%}[_nghost-%COMP%]     video, [_nghost-%COMP%]     iframe{width:100%;height:100%}gallery-image[_ngcontent-%COMP%]{width:var(--g-item-width);height:var(--g-item-height)}.g-template[_ngcontent-%COMP%]{position:absolute;z-index:10;inset:0;color:#fff;display:flex;align-items:center;justify-content:center;flex-direction:column}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryItemComponent, [{
    type: Component,
    args: [{
      selector: "gallery-item",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ng-container *ngIf="load" [ngSwitch]="type">
      <ng-container *ngSwitchCase="Types.Image">
        <gallery-image [src]="imageData.src"
                       [alt]="imageData.alt"
                       [index]="index"
                       [loadingAttr]="config.loadingAttr"
                       [loadingIcon]="config.loadingIcon"
                       [loadingError]="config.loadingError"
                       (error)="error.emit($event)"></gallery-image>

        <div *ngIf="config.imageTemplate" class="g-template g-item-template">
          <ng-container *ngTemplateOutlet="config.imageTemplate; context: imageContext"></ng-container>
        </div>
      </ng-container>

      <gallery-video *ngSwitchCase="Types.Video"
                     [src]="videoData.src"
                     [mute]="videoData.mute"
                     [poster]="videoData.poster"
                     [controls]="videoData.controls"
                     [controlsList]="videoData.controlsList"
                     [disablePictureInPicture]="videoData.disablePictureInPicture"
                     [play]="isAutoPlay"
                     [pause]="currIndex !== index"
                     (error)="error.emit($event)"></gallery-video>

      <gallery-iframe *ngSwitchCase="Types.Youtube"
                      [src]="youtubeSrc"
                      [autoplay]="isAutoPlay"
                      [loadingAttr]="config.loadingAttr"
                      [pause]="currIndex !== index"></gallery-iframe>

      <gallery-iframe *ngSwitchCase="Types.Vimeo"
                      [src]="vimeoSrc"
                      [autoplay]="isAutoPlay"
                      [loadingAttr]="config.loadingAttr"
                      [pause]="currIndex !== index"></gallery-iframe>

      <gallery-iframe *ngSwitchCase="Types.Iframe"
                      [src]="data.src"
                      [loadingAttr]="config.loadingAttr"></gallery-iframe>

      <ng-container *ngSwitchDefault>
        <div *ngIf="config.itemTemplate" class="g-template g-item-template">
          <ng-container *ngTemplateOutlet="config.itemTemplate; context: itemContext"></ng-container>
        </div>
      </ng-container>
    </ng-container>
  `,
      standalone: true,
      imports: [CommonModule, GalleryImageComponent, GalleryVideoComponent, GalleryIframeComponent],
      styles: [":host{cursor:var(--g-item-cursor);height:var(--g-item-height);width:var(--g-item-width);max-height:var(--g-item-max-height);max-width:var(--slider-width);z-index:10;position:relative;overflow:hidden;display:flex;flex-direction:column;flex:0 0 auto;scroll-snap-align:center;-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}:host[itemState=loading]{width:var(--slider-width);height:var(--slider-height)}:host>*{height:100%}:host ::ng-deep video,:host ::ng-deep iframe{width:100%;height:100%}gallery-image{width:var(--g-item-width);height:var(--g-item-height)}.g-template{position:absolute;z-index:10;inset:0;color:#fff;display:flex;align-items:center;justify-content:center;flex-direction:column}\n"]
    }]
  }], () => [{
    type: ElementRef
  }], {
    config: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    count: [{
      type: Input
    }],
    currIndex: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    error: [{
      type: Output
    }],
    isActive: [{
      type: HostBinding,
      args: ["class.g-active-item"]
    }],
    isIndexAttr: [{
      type: HostBinding,
      args: ["attr.galleryIndex"]
    }],
    itemState: [{
      type: HostBinding,
      args: ["attr.itemState"]
    }]
  });
})();
var ItemIntersectionObserver = class _ItemIntersectionObserver {
  get _viewport() {
    return this._item.nativeElement.parentElement.parentElement;
  }
  constructor(_zone, _item) {
    this._zone = _zone;
    this._item = _item;
    this._sensor = new ActiveItemObserver();
    this.activeIndexChange = new EventEmitter();
  }
  ngOnChanges() {
    this.config.itemAutosize && !this.disabled ? this._subscribe() : this._unsubscribe();
  }
  ngOnDestroy() {
    this._unsubscribe();
  }
  _subscribe() {
    this._unsubscribe();
    if (!!this.adapter) {
      this._zone.runOutsideAngular(() => {
        this._currentSubscription = combineLatest([resizeObservable(this._viewport), resizeObservable(this._item.nativeElement)]).pipe(switchMap(() => this._item.state$), filter((state) => state !== "loading"), switchMap(() => {
          const rootMargin = this.adapter.getElementRootMargin(this._viewport, this._item.nativeElement);
          if (this.config.debug) {
            this._item.nativeElement.style.setProperty("--item-intersection-margin", `"VIEWPORT(${this._viewport.clientWidth}x${this._viewport.clientHeight}) ITEM(${this._item.nativeElement.clientWidth}x${this._item.nativeElement.clientHeight}) INTERSECTION(${rootMargin})"`);
          }
          return this._sensor.observe(this._viewport, [this._item.nativeElement], rootMargin);
        })).subscribe((index) => {
          this._zone.run(() => this.activeIndexChange.emit(index));
        });
      });
    }
  }
  _unsubscribe() {
    this._currentSubscription?.unsubscribe();
  }
  static {
    this.ɵfac = function ItemIntersectionObserver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ItemIntersectionObserver)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(GalleryItemComponent));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _ItemIntersectionObserver,
      selectors: [["", "itemIntersectionObserver", ""]],
      inputs: {
        adapter: "adapter",
        config: "config",
        disabled: [0, "itemIntersectionObserverDisabled", "disabled"]
      },
      outputs: {
        activeIndexChange: "activeIndexChange"
      },
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemIntersectionObserver, [{
    type: Directive,
    args: [{
      selector: "[itemIntersectionObserver]",
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: GalleryItemComponent
  }], {
    adapter: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: ["itemIntersectionObserverDisabled"]
    }],
    activeIndexChange: [{
      type: Output
    }]
  });
})();
var SliderResizeObserver = class _SliderResizeObserver {
  get _viewport() {
    return this._el.nativeElement;
  }
  get _galleryCore() {
    return this._el.nativeElement.parentElement.parentElement.parentElement;
  }
  get _isAutoHeight() {
    return this.config.autoHeight && !this.config.itemAutosize && this.config.orientation === "horizontal" && (this.config.thumbPosition === "top" || this.config.thumbPosition === "bottom");
  }
  constructor(_el, _zone, _gallery, _imgManager) {
    this._el = _el;
    this._zone = _zone;
    this._gallery = _gallery;
    this._imgManager = _imgManager;
    this.isResizingChange = new EventEmitter();
  }
  ngOnInit() {
    const galleryRef = this._gallery.ref(this.galleryId);
    const transitionDuration = getComputedStyle(this._viewport).getPropertyValue("transition-duration");
    if (parseFloat(transitionDuration) === 0) {
      this._afterHeightChanged$ = of(null);
    } else {
      this._afterHeightChanged$ = fromEvent(this._viewport, "transitionend");
    }
    this._zone.runOutsideAngular(() => {
      this._resizeSubscription = resizeObservable(this._viewport, (observer) => this._resizeObserver = observer).pipe(
        // Check if resize should skip due to re-observing the slider
        filter(() => !this._shouldSkip || !(this._shouldSkip = false)),
        // Immediately set visibility to hidden to avoid changing the active item caused by appearance of other items when size is expanded
        tap(() => this.setResizingState()),
        debounceTime(this.config.resizeDebounceTime, animationFrameScheduler),
        tap((entry) => __async(this, null, function* () {
          this.updateSliderSize();
          if (this._isAutoHeight) {
            const img = yield firstValueFrom(this._imgManager.getActiveItem(galleryRef.state));
            if (img.height === this._viewport.clientHeight) {
              this.resetResizingState();
            } else {
              this.setResizingState({
                unobserve: true
              });
              this._galleryCore.style.setProperty("--slider-height", `${img.height}px`);
              yield firstValueFrom(this._afterHeightChanged$);
              this.resetResizingState({
                // Mark to skip first emit after re-observing the slider if height content rect height and client height are identical
                shouldSkip: entry.contentRect.height === this._viewport.clientHeight,
                observe: true
              });
            }
          } else {
            requestAnimationFrame(() => this.resetResizingState({
              shouldSkip: true
            }));
          }
        }))
      ).subscribe();
    });
  }
  ngOnChanges() {
    this._isAutoHeight ? this._subscribeAutoHeight() : this._unsubscribeAutoHeight();
  }
  ngOnDestroy() {
    this._resizeSubscription?.unsubscribe();
    this._unsubscribeAutoHeight();
  }
  ngAfterViewChecked() {
    this.updateSliderSize();
  }
  updateSliderSize() {
    this._galleryCore.style.setProperty("--slider-width", `${this._viewport.clientWidth}px`);
    if (!this.config.autoHeight) {
      this._galleryCore.style.setProperty("--slider-height", `${this._viewport.clientHeight}px`);
    }
    this.updateCentralizeCSSVariables();
  }
  updateCentralizeCSSVariables() {
    if (this.config.itemAutosize) {
      this._galleryCore.style.setProperty("--slider-centralize-start-size", `${this.adapter.getCentralizerStartSize()}px`);
      this._galleryCore.style.setProperty("--slider-centralize-end-size", `${this.adapter.getCentralizerEndSize()}px`);
    }
  }
  _subscribeAutoHeight() {
    this._unsubscribeAutoHeight();
    this._shouldSkip = false;
    this._zone.runOutsideAngular(() => {
      const galleryRef = this._gallery.ref(this.galleryId);
      const state = galleryRef.state.pipe(distinctUntilChanged((a, b) => a.currIndex === b.currIndex));
      this._autoHeightSubscription = this._imgManager.getActiveItem(state).pipe(switchMap((img) => {
        this.setResizingState({
          unobserve: true
        });
        this._galleryCore.style.setProperty("--slider-height", `${img.clientHeight}px`);
        if (img.height === this._viewport.clientHeight) {
          this.resetResizingState({
            shouldSkip: true,
            observe: true
          });
          return EMPTY;
        }
        return this._afterHeightChanged$.pipe(tap(() => this.resetResizingState({
          shouldSkip: true,
          observe: true
        })), take(1));
      })).subscribe();
    });
  }
  _unsubscribeAutoHeight() {
    this._autoHeightSubscription?.unsubscribe();
  }
  setResizingState({
    unobserve
  } = {}) {
    this._zone.run(() => {
      this.isResizingChange.emit(true);
    });
    this._viewport.classList.add("g-resizing");
    if (unobserve) {
      this._resizeObserver.unobserve(this._viewport);
    }
  }
  resetResizingState({
    shouldSkip,
    observe
  } = {}) {
    this._zone.run(() => {
      this.isResizingChange.emit(false);
    });
    this._viewport.classList.remove("g-resizing");
    this._shouldSkip = shouldSkip;
    if (observe) {
      this._resizeObserver.observe(this._viewport);
    }
  }
  static {
    this.ɵfac = function SliderResizeObserver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SliderResizeObserver)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Gallery), ɵɵdirectiveInject(ImgManager));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _SliderResizeObserver,
      selectors: [["", "sliderResizeObserver", ""]],
      inputs: {
        galleryId: "galleryId",
        adapter: "adapter",
        config: "config"
      },
      outputs: {
        isResizingChange: "isResizingChange"
      },
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderResizeObserver, [{
    type: Directive,
    args: [{
      selector: "[sliderResizeObserver]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: Gallery
  }, {
    type: ImgManager
  }], {
    galleryId: [{
      type: Input
    }],
    adapter: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    isResizingChange: [{
      type: Output
    }]
  });
})();
var GallerySliderComponent = class _GallerySliderComponent {
  get slider() {
    return this.sliderEl.nativeElement;
  }
  constructor(_gallery) {
    this._gallery = _gallery;
    this.position$ = new Subject();
    this.itemClick = new EventEmitter();
    this.error = new EventEmitter();
    this.items = new QueryList();
  }
  ngOnChanges(changes) {
    if (changes.config) {
      if (changes.config.currentValue?.orientation !== changes.config.previousValue?.orientation) {
        switch (this.config.orientation) {
          case Orientation.Horizontal:
            this.adapter = new HorizontalAdapter(this.slider, this.config);
            break;
          case Orientation.Vertical:
            this.adapter = new VerticalAdapter(this.slider, this.config);
            break;
        }
      }
      if (!changes.config.firstChange) {
        requestAnimationFrame(() => {
          this.scrollToIndex(this.state.currIndex, "auto");
        });
      }
    }
    if (changes.state) {
      if (changes.state.currentValue?.currIndex !== changes.state.previousValue?.currIndex) {
        requestAnimationFrame(() => {
          this.scrollToIndex(this.state.currIndex, changes.state.firstChange ? "auto" : this.state.behavior);
        });
      }
    }
  }
  ngAfterViewInit() {
    this.items.notifyOnChanges();
    this.items$ = this.items.changes.pipe(
      // In some cases, items is not notified at first, need to force start the stream
      startWith(null),
      map(() => this.items.toArray())
    );
  }
  trackByFn(index, item) {
    return item.type;
  }
  onActiveIndexChange(index) {
    if (index === -1) {
      this.scrollToIndex(this.state.currIndex, "smooth");
    } else {
      this._gallery.ref(this.galleryId).set(index, "smooth");
    }
  }
  scrollToIndex(index, behavior) {
    const el = this.items.get(index)?.nativeElement;
    if (el) {
      const pos = this.adapter.getScrollToValue(el, behavior || this.config.scrollBehavior);
      this.position$.next(pos);
    }
  }
  static {
    this.ɵfac = function GallerySliderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GallerySliderComponent)(ɵɵdirectiveInject(Gallery));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _GallerySliderComponent,
      selectors: [["gallery-slider"]],
      viewQuery: function GallerySliderComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c2, 7);
          ɵɵviewQuery(GalleryItemComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sliderEl = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
        }
      },
      inputs: {
        galleryId: "galleryId",
        state: "state",
        config: "config"
      },
      outputs: {
        itemClick: "itemClick",
        error: "error"
      },
      features: [ɵɵNgOnChangesFeature],
      ngContentSelectors: _c3,
      decls: 8,
      vars: 17,
      consts: [["slider", ""], ["sliderIntersectionObserver", "", "sliderResizeObserver", "", 1, "g-slider", 3, "isScrollingChange", "isSlidingChange", "activeIndexChange", "isResizingChange", "smoothScroll", "smoothScrollInterruptOnMousemove", "sliderIntersectionObserverDisabled", "hammerSliding", "adapter", "items", "config", "state", "galleryId"], [1, "g-slider-content"], ["itemIntersectionObserver", "", 3, "type", "config", "data", "currIndex", "index", "count", "itemIntersectionObserverDisabled", "adapter", "activeIndexChange", "click", "error", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "g-slider-debug", 4, "ngIf"], ["itemIntersectionObserver", "", 3, "activeIndexChange", "click", "error", "type", "config", "data", "currIndex", "index", "count", "itemIntersectionObserverDisabled", "adapter"], [1, "g-slider-debug"], [1, "g-slider-resizing"], [1, "g-slider-scrolling"], [1, "g-slider-sliding"]],
      template: function GallerySliderComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef();
          ɵɵelementStart(0, "div", 1, 0);
          ɵɵpipe(2, "async");
          ɵɵpipe(3, "async");
          ɵɵlistener("isScrollingChange", function GallerySliderComponent_Template_div_isScrollingChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.isScrolling = $event);
          })("isSlidingChange", function GallerySliderComponent_Template_div_isSlidingChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.isSliding = $event);
          })("activeIndexChange", function GallerySliderComponent_Template_div_activeIndexChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onActiveIndexChange($event));
          })("isResizingChange", function GallerySliderComponent_Template_div_isResizingChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.isResizing = $event);
          });
          ɵɵelementStart(4, "div", 2);
          ɵɵtemplate(5, GallerySliderComponent_gallery_item_5_Template, 1, 9, "gallery-item", 3);
          ɵɵelementEnd();
          ɵɵtemplate(6, GallerySliderComponent_div_6_Template, 7, 0, "div", 4);
          ɵɵelementEnd();
          ɵɵprojection(7);
        }
        if (rf & 2) {
          ɵɵproperty("smoothScroll", ɵɵpipeBind1(2, 13, ctx.position$))("smoothScrollInterruptOnMousemove", !ctx.config.disableMouseScroll)("sliderIntersectionObserverDisabled", ctx.isScrolling || ctx.isSliding || ctx.isResizing)("hammerSliding", !ctx.config.disableMouseScroll)("adapter", ctx.adapter)("items", ɵɵpipeBind1(3, 15, ctx.items$))("config", ctx.config)("state", ctx.state)("galleryId", ctx.galleryId);
          ɵɵattribute("centralised", ctx.config.itemAutosize);
          ɵɵadvance(5);
          ɵɵproperty("ngForOf", ctx.state.items)("ngForTrackBy", ctx.trackByFn);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.config.debug);
        }
      },
      dependencies: [CommonModule, NgForOf, NgIf, AsyncPipe, GalleryItemComponent, SmoothScroll, HammerSliding, SliderIntersectionObserver, ItemIntersectionObserver, SliderResizeObserver],
      styles: ['[_nghost-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;order:1;flex:1}.g-slider[_ngcontent-%COMP%]{display:flex;align-items:center;transition:var(--g-height-transition);min-height:100%;min-width:100%;max-height:100%;max-width:100%;height:var(--slider-height, 100%);width:var(--slider-width, 100%);overflow:var(--slider-overflow);scroll-snap-type:var(--slider-scroll-snap-type);flex-direction:var(--slider-flex-direction);scrollbar-width:none}.g-slider[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.g-slider.g-sliding[_ngcontent-%COMP%]   .g-slider-content[_ngcontent-%COMP%], .g-slider.g-scrolling[_ngcontent-%COMP%]   .g-slider-content[_ngcontent-%COMP%]{pointer-events:none}.g-slider[centralised=true][_ngcontent-%COMP%]:before, .g-slider[centralised=true][_ngcontent-%COMP%]:after{content:""}.g-slider[centralised=true][_ngcontent-%COMP%]:before{flex:0 0 var(--slider-centralize-start-size)}.g-slider[centralised=true][_ngcontent-%COMP%]:after{flex:0 0 var(--slider-centralize-end-size)}.g-slider-content[_ngcontent-%COMP%]{flex:0 0 auto;display:flex;align-items:center;gap:1px;width:var(--slider-content-width, unset);height:var(--slider-content-height, unset);flex-direction:var(--slider-flex-direction)}'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GallerySliderComponent, [{
    type: Component,
    args: [{
      selector: "gallery-slider",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div #slider
         class="g-slider"
         [attr.centralised]="config.itemAutosize"
         [smoothScroll]="position$ | async"
         [smoothScrollInterruptOnMousemove]="!config.disableMouseScroll"
         sliderIntersectionObserver
         [sliderIntersectionObserverDisabled]="isScrolling || isSliding || isResizing"
         [hammerSliding]="!config.disableMouseScroll"
         [adapter]="adapter"
         [items]="items$ | async"
         [config]="config"
         [state]="state"
         [galleryId]="galleryId"
         (isScrollingChange)="isScrolling = $event"
         (isSlidingChange)="isSliding = $event"
         (activeIndexChange)="onActiveIndexChange($event)"
         (isResizingChange)="isResizing = $event"
         sliderResizeObserver>
      <div class="g-slider-content">
        <gallery-item *ngFor="let item of state.items; trackBy: trackByFn index as i"
                      [attr.galleryId]="galleryId"
                      [type]="item.type"
                      [config]="config"
                      [data]="item.data"
                      [currIndex]="state.currIndex"
                      [index]="i"
                      [count]="state.items.length"
                      itemIntersectionObserver
                      [itemIntersectionObserverDisabled]="isScrolling || isSliding || isResizing"
                      [adapter]="adapter"
                      (activeIndexChange)="onActiveIndexChange($event)"
                      (click)="itemClick.emit(i)"
                      (error)="error.emit({ itemIndex: i, error: $event })"/>
      </div>

      <div *ngIf="config.debug" class="g-slider-debug">
        <div class="g-slider-resizing">RESIZING</div>
        <div class="g-slider-scrolling">SCROLLING</div>
        <div class="g-slider-sliding">SLIDING</div>
      </div>
    </div>
    <ng-content></ng-content>
  `,
      standalone: true,
      imports: [CommonModule, GalleryItemComponent, SmoothScroll, HammerSliding, SliderIntersectionObserver, ItemIntersectionObserver, SliderResizeObserver],
      styles: [':host{position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;order:1;flex:1}.g-slider{display:flex;align-items:center;transition:var(--g-height-transition);min-height:100%;min-width:100%;max-height:100%;max-width:100%;height:var(--slider-height, 100%);width:var(--slider-width, 100%);overflow:var(--slider-overflow);scroll-snap-type:var(--slider-scroll-snap-type);flex-direction:var(--slider-flex-direction);scrollbar-width:none}.g-slider::-webkit-scrollbar{display:none}.g-slider.g-sliding .g-slider-content,.g-slider.g-scrolling .g-slider-content{pointer-events:none}.g-slider[centralised=true]:before,.g-slider[centralised=true]:after{content:""}.g-slider[centralised=true]:before{flex:0 0 var(--slider-centralize-start-size)}.g-slider[centralised=true]:after{flex:0 0 var(--slider-centralize-end-size)}.g-slider-content{flex:0 0 auto;display:flex;align-items:center;gap:1px;width:var(--slider-content-width, unset);height:var(--slider-content-height, unset);flex-direction:var(--slider-flex-direction)}\n']
    }]
  }], () => [{
    type: Gallery
  }], {
    galleryId: [{
      type: Input
    }],
    state: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    error: [{
      type: Output
    }],
    sliderEl: [{
      type: ViewChild,
      args: ["slider", {
        static: true
      }]
    }],
    items: [{
      type: ViewChildren,
      args: [GalleryItemComponent]
    }]
  });
})();
var GalleryThumbComponent = class _GalleryThumbComponent {
  get isActive() {
    return this.index === this.currIndex;
  }
  get isIndexAttr() {
    return this.index;
  }
  get imageContext() {
    return {
      $implicit: this.data,
      index: this.index,
      type: this.type,
      active: this.isActive,
      count: this.count,
      first: this.index === 0,
      last: this.index === this.count - 1
    };
  }
  get nativeElement() {
    return this.el.nativeElement;
  }
  constructor(el) {
    this.el = el;
    this.error = new EventEmitter();
  }
  static {
    this.ɵfac = function GalleryThumbComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GalleryThumbComponent)(ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _GalleryThumbComponent,
      selectors: [["gallery-thumb"]],
      hostVars: 3,
      hostBindings: function GalleryThumbComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("galleryIndex", ctx.isIndexAttr);
          ɵɵclassProp("g-active-thumb", ctx.isActive);
        }
      },
      inputs: {
        config: "config",
        index: "index",
        count: "count",
        currIndex: "currIndex",
        type: "type",
        data: "data"
      },
      outputs: {
        error: "error"
      },
      decls: 2,
      vars: 6,
      consts: [[3, "error", "src", "alt", "isThumbnail", "loadingIcon", "loadingError"], ["class", "g-template g-thumb-template", 4, "ngIf"], [1, "g-template", "g-thumb-template"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function GalleryThumbComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "gallery-image", 0);
          ɵɵlistener("error", function GalleryThumbComponent_Template_gallery_image_error_0_listener($event) {
            return ctx.error.emit($event);
          });
          ɵɵelementEnd();
          ɵɵtemplate(1, GalleryThumbComponent_div_1_Template, 2, 2, "div", 1);
        }
        if (rf & 2) {
          ɵɵproperty("src", ctx.data.thumb)("alt", ctx.data.alt + "-thumbnail")("isThumbnail", true)("loadingIcon", ctx.config.thumbLoadingIcon)("loadingError", ctx.config.thumbLoadingError);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.config.thumbTemplate);
        }
      },
      dependencies: [CommonModule, NgIf, NgTemplateOutlet, GalleryImageComponent],
      styles: ["[_nghost-%COMP%]{cursor:var(--g-thumb-cursor);height:var(--g-thumb-height);width:var(--g-thumb-width);max-height:var(--g-thumb-height);max-width:var(--g-thumb-width);align-self:center;background:#000;position:relative;display:flex;overflow:hidden;flex-direction:column;flex:0 0 auto;scroll-snap-align:center;-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-webkit-tap-highlight-color:rgba(0,0,0,0);--g-thumb-opacity: .5}.g-active-thumb[_nghost-%COMP%]{--g-thumb-opacity: 1}.g-template[_ngcontent-%COMP%]{position:absolute;z-index:10;inset:0;color:#fff;display:flex;align-items:center;justify-content:center;flex-direction:column}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryThumbComponent, [{
    type: Component,
    args: [{
      selector: "gallery-thumb",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <gallery-image [src]="data.thumb"
                   [alt]="data.alt + '-thumbnail'"
                   [isThumbnail]="true"
                   [loadingIcon]="config.thumbLoadingIcon"
                   [loadingError]="config.thumbLoadingError"
                   (error)="error.emit($event)"></gallery-image>

    <div *ngIf="config.thumbTemplate" class="g-template g-thumb-template">
      <ng-container *ngTemplateOutlet="config.thumbTemplate; context: imageContext"></ng-container>
    </div>
  `,
      standalone: true,
      imports: [CommonModule, GalleryImageComponent],
      styles: [":host{cursor:var(--g-thumb-cursor);height:var(--g-thumb-height);width:var(--g-thumb-width);max-height:var(--g-thumb-height);max-width:var(--g-thumb-width);align-self:center;background:#000;position:relative;display:flex;overflow:hidden;flex-direction:column;flex:0 0 auto;scroll-snap-align:center;-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-webkit-tap-highlight-color:rgba(0,0,0,0);--g-thumb-opacity: .5}:host.g-active-thumb{--g-thumb-opacity: 1}.g-template{position:absolute;z-index:10;inset:0;color:#fff;display:flex;align-items:center;justify-content:center;flex-direction:column}\n"]
    }]
  }], () => [{
    type: ElementRef
  }], {
    config: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    count: [{
      type: Input
    }],
    currIndex: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    error: [{
      type: Output
    }],
    isActive: [{
      type: HostBinding,
      args: ["class.g-active-thumb"]
    }],
    isIndexAttr: [{
      type: HostBinding,
      args: ["attr.galleryIndex"]
    }]
  });
})();
var ThumbResizeObserver = class _ThumbResizeObserver {
  get _viewport() {
    return this._el.nativeElement;
  }
  constructor(_el, _zone) {
    this._el = _el;
    this._zone = _zone;
    this.resized = new EventEmitter();
  }
  ngOnInit() {
    this._zone.runOutsideAngular(() => {
      this._resizeSubscription = resizeObservable(this._viewport).pipe(debounceTime(this.config.resizeDebounceTime, animationFrameScheduler), tap(() => {
        this.updateSliderSize();
        this.resized.emit();
      })).subscribe();
    });
  }
  ngOnChanges(changes) {
    if (!changes.config.firstChange) {
      this.updateSliderSize();
    }
  }
  ngOnDestroy() {
    this._resizeSubscription?.unsubscribe();
  }
  updateSliderSize() {
    this._viewport.style.setProperty("--thumb-centralize-start-size", this.adapter.getCentralizerStartSize() + "px");
    this._viewport.style.setProperty("--thumb-centralize-end-size", this.adapter.getCentralizerEndSize() + "px");
  }
  static {
    this.ɵfac = function ThumbResizeObserver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ThumbResizeObserver)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _ThumbResizeObserver,
      selectors: [["", "thumbResizeObserver", ""]],
      inputs: {
        config: "config",
        adapter: "adapter"
      },
      outputs: {
        resized: "thumbResizeObserver"
      },
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThumbResizeObserver, [{
    type: Directive,
    args: [{
      selector: "[thumbResizeObserver]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }], {
    config: [{
      type: Input
    }],
    adapter: [{
      type: Input
    }],
    resized: [{
      type: Output,
      args: ["thumbResizeObserver"]
    }]
  });
})();
var GalleryThumbsComponent = class _GalleryThumbsComponent {
  constructor() {
    this.position$ = new Subject();
    this.thumbClick = new EventEmitter();
    this.error = new EventEmitter();
    this.items = new QueryList();
  }
  get slider() {
    return this.sliderEl.nativeElement;
  }
  ngOnChanges(changes) {
    if (changes.config) {
      if (changes.config.currentValue?.thumbPosition !== changes.config.previousValue?.thumbPosition) {
        switch (this.config.thumbPosition) {
          case ThumbnailsPosition.Right:
          case ThumbnailsPosition.Left:
            this.adapter = new VerticalAdapter(this.slider, this.config);
            break;
          case ThumbnailsPosition.Top:
          case ThumbnailsPosition.Bottom:
            this.adapter = new HorizontalAdapter(this.slider, this.config);
            break;
        }
        if (!changes.config.firstChange) {
          requestAnimationFrame(() => {
            this.scrollToIndex(this.state.currIndex, "auto");
          });
        }
      }
    }
    if (changes.state && (changes.state.firstChange || !this.config.detachThumbs)) {
      if (changes.state.currentValue?.currIndex !== changes.state.previousValue?.currIndex) {
        requestAnimationFrame(() => {
          this.scrollToIndex(this.state.currIndex, changes.state?.firstChange ? "auto" : "smooth");
        });
      }
    }
  }
  ngAfterViewInit() {
    this.items.notifyOnChanges();
    this.items$ = this.items.changes.pipe(
      // In some cases, items is not notified at first, need to force start the stream
      startWith(null),
      map(() => this.items.toArray())
    );
  }
  trackByFn(index, item) {
    return item.type;
  }
  onActiveIndexChange(index) {
    if (index === -1) {
      this.scrollToIndex(this.state.currIndex, "smooth");
    } else {
      this.scrollToIndex(index, "smooth");
    }
  }
  scrollToIndex(value, behavior) {
    const el = this.items.get(value)?.nativeElement;
    if (el) {
      const pos = this.adapter.getScrollToValue(el, behavior);
      this.position$.next(pos);
    }
  }
  static {
    this.ɵfac = function GalleryThumbsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GalleryThumbsComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _GalleryThumbsComponent,
      selectors: [["gallery-thumbs"]],
      viewQuery: function GalleryThumbsComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c2, 7);
          ɵɵviewQuery(GalleryThumbComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sliderEl = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
        }
      },
      inputs: {
        galleryId: "galleryId",
        state: "state",
        config: "config"
      },
      outputs: {
        thumbClick: "thumbClick",
        error: "error"
      },
      features: [ɵɵNgOnChangesFeature],
      decls: 6,
      vars: 15,
      consts: [["slider", ""], [1, "g-slider", 3, "thumbResizeObserver", "activeIndexChange", "smoothScroll", "smoothScrollInterruptOnMousemove", "hammerSliding", "galleryId", "items", "state", "config", "adapter"], [1, "g-slider-content"], [3, "type", "config", "data", "currIndex", "index", "count", "click", "error", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "click", "error", "type", "config", "data", "currIndex", "index", "count"]],
      template: function GalleryThumbsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "div", 1, 0);
          ɵɵpipe(2, "async");
          ɵɵpipe(3, "async");
          ɵɵlistener("thumbResizeObserver", function GalleryThumbsComponent_Template_div_thumbResizeObserver_0_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.scrollToIndex(ctx.state.currIndex, "auto"));
          })("activeIndexChange", function GalleryThumbsComponent_Template_div_activeIndexChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onActiveIndexChange($event));
          });
          ɵɵelementStart(4, "div", 2);
          ɵɵtemplate(5, GalleryThumbsComponent_gallery_thumb_5_Template, 1, 7, "gallery-thumb", 3);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵproperty("smoothScroll", ɵɵpipeBind1(2, 11, ctx.position$))("smoothScrollInterruptOnMousemove", !ctx.config.disableThumbMouseScroll)("hammerSliding", !ctx.config.disableThumbMouseScroll)("galleryId", ctx.galleryId)("items", ɵɵpipeBind1(3, 13, ctx.items$))("state", ctx.state)("config", ctx.config)("adapter", ctx.adapter);
          ɵɵattribute("centralised", ctx.config.thumbCentralized || ctx.adapter.isContentLessThanContainer);
          ɵɵadvance(5);
          ɵɵproperty("ngForOf", ctx.state.items)("ngForTrackBy", ctx.trackByFn);
        }
      },
      dependencies: [CommonModule, NgForOf, AsyncPipe, GalleryThumbComponent, SmoothScroll, HammerSliding, ThumbResizeObserver],
      styles: ['[_nghost-%COMP%]{max-height:100%;max-width:100%;display:block;z-index:100}.g-slider[_ngcontent-%COMP%]{display:flex;align-items:center;transition:var(--g-height-transition);max-height:100%;min-width:100%;height:var(--thumb-slider-height);width:var(--thumb-slider-width);top:var(--thumb-slider-top);left:var(--thumb-slider-left);overflow:var(--thumb-slider-overflow);scroll-snap-type:var(--slider-scroll-snap-type);flex-direction:var(--thumb-slider-flex-direction);scrollbar-width:none}.g-slider[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.g-slider.g-sliding[_ngcontent-%COMP%]   .g-slider-content[_ngcontent-%COMP%]{pointer-events:none}.g-slider[centralised=true][_ngcontent-%COMP%]:before, .g-slider[centralised=true][_ngcontent-%COMP%]:after{content:""}.g-slider[centralised=true][_ngcontent-%COMP%]:before{flex:0 0 var(--thumb-centralize-start-size)}.g-slider[centralised=true][_ngcontent-%COMP%]:after{flex:0 0 var(--thumb-centralize-end-size)}.g-slider-content[_ngcontent-%COMP%]{flex:0 0 auto;display:flex;flex-direction:var(--thumb-slider-flex-direction);align-items:center;gap:1px}'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryThumbsComponent, [{
    type: Component,
    args: [{
      selector: "gallery-thumbs",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div #slider
         class="g-slider"
         [smoothScroll]="position$ | async"
         [smoothScrollInterruptOnMousemove]="!config.disableThumbMouseScroll"
         [attr.centralised]="config.thumbCentralized || adapter.isContentLessThanContainer"
         [hammerSliding]="!config.disableThumbMouseScroll"
         [galleryId]="galleryId"
         [items]="items$ | async"
         [state]="state"
         [config]="config"
         [adapter]="adapter"
         (thumbResizeObserver)="scrollToIndex(state.currIndex, 'auto')"
         (activeIndexChange)="onActiveIndexChange($event)">
      <div class="g-slider-content">
        <gallery-thumb *ngFor="let item of state.items; trackBy: trackByFn; index as i"
                       [attr.galleryId]="galleryId"
                       [type]="item.type"
                       [config]="config"
                       [data]="item.data"
                       [currIndex]="state.currIndex"
                       [index]="i"
                       [count]="state.items.length"
                       (click)="config.disableThumbs ? null : thumbClick.emit(i)"
                       (error)="error.emit({ itemIndex: i, error: $event })"/>
      </div>
    </div>
  `,
      standalone: true,
      imports: [CommonModule, GalleryThumbComponent, SmoothScroll, HammerSliding, ThumbResizeObserver],
      styles: [':host{max-height:100%;max-width:100%;display:block;z-index:100}.g-slider{display:flex;align-items:center;transition:var(--g-height-transition);max-height:100%;min-width:100%;height:var(--thumb-slider-height);width:var(--thumb-slider-width);top:var(--thumb-slider-top);left:var(--thumb-slider-left);overflow:var(--thumb-slider-overflow);scroll-snap-type:var(--slider-scroll-snap-type);flex-direction:var(--thumb-slider-flex-direction);scrollbar-width:none}.g-slider::-webkit-scrollbar{display:none}.g-slider.g-sliding .g-slider-content{pointer-events:none}.g-slider[centralised=true]:before,.g-slider[centralised=true]:after{content:""}.g-slider[centralised=true]:before{flex:0 0 var(--thumb-centralize-start-size)}.g-slider[centralised=true]:after{flex:0 0 var(--thumb-centralize-end-size)}.g-slider-content{flex:0 0 auto;display:flex;flex-direction:var(--thumb-slider-flex-direction);align-items:center;gap:1px}\n']
    }]
  }], null, {
    galleryId: [{
      type: Input
    }],
    state: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    thumbClick: [{
      type: Output
    }],
    error: [{
      type: Output
    }],
    sliderEl: [{
      type: ViewChild,
      args: ["slider", {
        static: true
      }]
    }],
    items: [{
      type: ViewChildren,
      args: [GalleryThumbComponent]
    }]
  });
})();
var GalleryCoreComponent = class _GalleryCoreComponent {
  /** Set thumbnails position */
  get thumbPosition() {
    return this.config.thumbPosition;
  }
  /** Set sliding direction */
  get orientation() {
    return this.config.orientation;
  }
  /** Disable thumbnails' clicks */
  get disableThumb() {
    return this.config.disableThumbs;
  }
  /** Set bullets' clicks */
  get bulletDisabled() {
    return this.config.disableBullets;
  }
  /** Set gallery bullets position */
  get bulletPosition() {
    return this.config.bulletPosition;
  }
  /** Set gallery image size property */
  get imageSize() {
    return this.config.imageSize;
  }
  /** Set gallery thumb image size property */
  get thumbImageSize() {
    return this.config.thumbImageSize;
  }
  /** Set gallery counter position */
  get counterPosition() {
    return this.config.counterPosition;
  }
  /** Disable sliding using sliding via touchpad, mousewheel and gestures */
  get scrollDisabled() {
    return this.config.disableScroll;
  }
  /** Disable thumb sliding using sliding via touchpad, mousewheel and gestures */
  get thumbScrollDisabled() {
    return this.config.disableThumbScroll;
  }
  /** Set items autosize styles  */
  get itemAutosize() {
    return this.config.itemAutosize;
  }
  /** Set gallery autoHeight styles  */
  get autoHeight() {
    return this.config.autoHeight;
  }
  /** Set gallery thumb autosize styles  */
  get thumbAutosize() {
    return this.config.thumbAutosize;
  }
  /** Set direction  */
  get direction() {
    return this.dir.value;
  }
  /** Set debug style  */
  get debug() {
    return this.config.debug;
  }
  constructor(el, dir) {
    this.el = el;
    this.dir = dir;
    this.itemClick = new EventEmitter();
    this.thumbClick = new EventEmitter();
    this.error = new EventEmitter();
  }
  ngOnChanges(changes) {
    if (changes.config) {
      if (changes.config.currentValue?.thumbWidth !== changes.config.previousValue?.thumbWidth) {
        this.el.nativeElement.style.setProperty("--g-thumb-width", coerceCssPixelValue(changes.config.currentValue.thumbWidth));
      }
      if (changes.config.currentValue?.thumbHeight !== changes.config.previousValue?.thumbHeight) {
        this.el.nativeElement.style.setProperty("--g-thumb-height", coerceCssPixelValue(changes.config.currentValue.thumbHeight));
      }
    }
  }
  static {
    this.ɵfac = function GalleryCoreComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GalleryCoreComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Directionality));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _GalleryCoreComponent,
      selectors: [["gallery-core"]],
      hostVars: 15,
      hostBindings: function GalleryCoreComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("thumbPosition", ctx.thumbPosition)("orientation", ctx.orientation)("thumbDisabled", ctx.disableThumb)("bulletDisabled", ctx.bulletDisabled)("bulletPosition", ctx.bulletPosition)("imageSize", ctx.imageSize)("thumbImageSize", ctx.thumbImageSize)("counterPosition", ctx.counterPosition)("scrollDisabled", ctx.scrollDisabled)("thumbScrollDisabled", ctx.thumbScrollDisabled)("itemAutosize", ctx.itemAutosize)("autoHeight", ctx.autoHeight)("thumbAutosize", ctx.thumbAutosize)("dir", ctx.direction)("debug", ctx.debug);
        }
      },
      inputs: {
        galleryId: "galleryId",
        state: "state",
        config: "config"
      },
      outputs: {
        itemClick: "itemClick",
        thumbClick: "thumbClick",
        error: "error"
      },
      features: [ɵɵNgOnChangesFeature],
      decls: 8,
      vars: 14,
      consts: [[3, "state", "config", "galleryId", "thumbClick", "error", 4, "ngIf"], [1, "g-box"], [3, "itemClick", "error", "state", "config", "galleryId"], [3, "state", "config", "galleryId", 4, "ngIf"], [3, "state", 4, "ngIf"], [1, "g-box-template"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "thumbClick", "error", "state", "config", "galleryId"], [3, "state", "config", "galleryId"], [3, "state"]],
      template: function GalleryCoreComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, GalleryCoreComponent_gallery_thumbs_0_Template, 1, 3, "gallery-thumbs", 0);
          ɵɵelementStart(1, "div", 1)(2, "gallery-slider", 2);
          ɵɵlistener("itemClick", function GalleryCoreComponent_Template_gallery_slider_itemClick_2_listener($event) {
            return ctx.itemClick.emit($event);
          })("error", function GalleryCoreComponent_Template_gallery_slider_error_2_listener($event) {
            return ctx.error.emit($event);
          });
          ɵɵtemplate(3, GalleryCoreComponent_gallery_nav_3_Template, 1, 3, "gallery-nav", 3);
          ɵɵelementEnd();
          ɵɵtemplate(4, GalleryCoreComponent_gallery_bullets_4_Template, 1, 3, "gallery-bullets", 3)(5, GalleryCoreComponent_gallery_counter_5_Template, 1, 1, "gallery-counter", 4);
          ɵɵelementStart(6, "div", 5);
          ɵɵtemplate(7, GalleryCoreComponent_ng_container_7_Template, 1, 0, "ng-container", 6);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.config.thumbs);
          ɵɵadvance(2);
          ɵɵclassProp("g-debug", ctx.config.debug);
          ɵɵproperty("state", ctx.state)("config", ctx.config)("galleryId", ctx.galleryId);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.config.nav && ctx.state.items.length > 1);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.config.bullets);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.config.counter);
          ɵɵadvance(2);
          ɵɵproperty("ngTemplateOutlet", ctx.config.boxTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(11, _c4, ctx.state, ctx.config));
        }
      },
      dependencies: [CommonModule, NgIf, NgTemplateOutlet, GalleryThumbsComponent, GallerySliderComponent, GalleryNavComponent, GalleryBulletsComponent, GalleryCounterComponent],
      styles: ["[_nghost-%COMP%]{position:relative;overflow:hidden;display:flex;gap:var(--g-gutter-size);width:100%;height:500px;min-height:100%;max-height:100%;--image-object-fit: unset;--slider-thumb-height: unset;--slider-thumb-width: unset;--thumb-slider-left: unset;--thumb-slider-overflow: unset;--thumb-slider-flex-direction: unset;--g-thumb-width: unset;--g-thumb-height: unset;--g-thumb-cursor: pointer;--slider-scroll-snap-type: unset;--slider-overflow: unset;--slider-flex-direction: unset;--slider-width: unset;--slider-height: unset;--slider-content-width: unset;--slider-content-height: unset;--g-item-width: unset;--g-item-height: unset;--g-item-max-height: var(--slider-height);--bullets-top: unset;--bullets-bottom: unset;--bullets-cursor: pointer;--bullets-opacity: .4;--bullets-hover-opacity: 1;--bullets-active-opacity: 1;--counter-top: unset;--counter-bottom: unset;--counter-border-radius: unset;--nav-space: 8px;--nav-hover-space: 6.4px;--nav-next-right: unset;--nav-next-hover-right: unset;--nav-next-left: unset;--nav-next-hover-left: unset}[thumbPosition=top][_nghost-%COMP%]{flex-direction:column}[thumbPosition=left][_nghost-%COMP%]{flex-direction:row}[thumbPosition=right][_nghost-%COMP%]{flex-direction:row-reverse}[thumbPosition=bottom][_nghost-%COMP%]{flex-direction:column-reverse}[autoHeight=true][itemAutoSize=false][orientation=horizontal][thumbPosition=top][_nghost-%COMP%], [autoHeight=true][itemAutoSize=false][orientation=horizontal][thumbPosition=bottom][_nghost-%COMP%]{height:fit-content;--g-item-height: auto !important;--g-item-max-height: auto}[imageSize=contain][_nghost-%COMP%]   gallery-slider[_ngcontent-%COMP%], [thumbImageSize=contain][_nghost-%COMP%]   gallery-thumbs[_ngcontent-%COMP%]{--image-object-fit: contain}[imageSize=cover][_nghost-%COMP%]   gallery-slider[_ngcontent-%COMP%], [thumbImageSize=cover][_nghost-%COMP%]   gallery-thumbs[_ngcontent-%COMP%]{--image-object-fit: cover}[thumbPosition=top][_nghost-%COMP%], [thumbPosition=bottom][_nghost-%COMP%]{--thumb-slider-top: 0;--thumb-slider-overflow: auto hidden;--thumb-slider-flex-direction: row;--g-thumb-height: 100%}[thumbPosition=top][thumbAutosize=true][_nghost-%COMP%], [thumbPosition=bottom][thumbAutosize=true][_nghost-%COMP%]{--g-thumb-width: auto !important}[thumbPosition=left][_nghost-%COMP%], [thumbPosition=right][_nghost-%COMP%]{--thumb-slider-left: 0;--thumb-slider-overflow: hidden auto;--thumb-slider-flex-direction: column;--g-thumb-width: 100%}[thumbPosition=left][thumbAutosize=true][_nghost-%COMP%], [thumbPosition=right][thumbAutosize=true][_nghost-%COMP%]{--g-thumb-height: auto !important}[thumbDisbled=true][_nghost-%COMP%]{--g-thumb-cursor: default}[thumbScrollDisabled=true][_nghost-%COMP%]{--thumb-slider-overflow: hidden !important}[orientation=horizontal][_nghost-%COMP%]{--slider-overflow: auto hidden;--slider-scroll-snap-type: x mandatory;--slider-flex-direction: row;--slider-content-height: 100%}[orientation=vertical][_nghost-%COMP%]{--slider-overflow: hidden auto;--slider-scroll-snap-type: y mandatory;--slider-flex-direction: column;--slider-content-width: 100%}[scrollDisabled=true][_nghost-%COMP%]{--slider-overflow: hidden !important}[orientation=horizontal][_nghost-%COMP%]{--g-item-width: var(--slider-width);--g-item-height: 100%}[orientation=horizontal][itemAutoSize=true][_nghost-%COMP%]{--g-item-width: auto}[orientation=vertical][_nghost-%COMP%]{--g-item-width: 100%;--g-item-height: var(--slider-height)}[orientation=vertical][itemAutoSize=true][_nghost-%COMP%]{--g-item-height: auto}[bulletPosition=top][_nghost-%COMP%]{--bullets-top: 15px}[bulletPosition=bottom][_nghost-%COMP%]{--bullets-bottom: 15px}[bulletDisabled=true][_nghost-%COMP%]{--bullets-cursor: default;--bullets-hover-opacity: var(--bullets-opacity)}[counterPosition=top][_nghost-%COMP%]{--counter-top: 0;--counter-border-radius: 0 0 4px 4px}[counterPosition=bottom][_nghost-%COMP%]{--counter-bottom: 0;--counter-border-radius: 4px 4px 0 0}[dir=ltr][_nghost-%COMP%]{--nav-next-transform: translateY(-50%) perspective(1px);--nav-next-right: var(--nav-space);--nav-next-hover-right: var(--nav-hover-space);--nav-prev-transform: translateY(-50%) perspective(1px) scale(-1, -1);--nav-prev-left: var(--nav-space);--nav-prev-hover-left: var(--nav-hover-space)}[dir=rtl][_nghost-%COMP%]{--nav-next-transform: translateY(-50%) perspective(1px) scale(-1, -1);--nav-next-left: var(--nav-space);--nav-next-hover-left: var(--nav-hover-space);--nav-prev-transform: translateY(-50%) perspective(1px);--nav-prev-right: var(--nav-space);--nav-prev-hover-right: var(--nav-hover-space)}.g-box[_ngcontent-%COMP%]{overflow:hidden;position:relative;display:flex;flex-direction:column;order:1;flex:1}.g-box-template[_ngcontent-%COMP%]{position:absolute;z-index:10}", '[debug=true][_nghost-%COMP%]     .g-sliding gallery-item.g-item-highlight, [debug=true][_nghost-%COMP%]     .g-resizing gallery-item.g-item-highlight, [debug=true][_nghost-%COMP%]     .g-scrolling gallery-item.g-item-highlight{visibility:hidden}[debug=true][_nghost-%COMP%]     gallery-slider:after, [debug=true][_nghost-%COMP%]     gallery-slider:before{position:absolute;content:"";z-index:12}[debug=true][_nghost-%COMP%]     gallery-slider:before{width:100%;height:0;border-top:1px dashed lime}[debug=true][_nghost-%COMP%]     gallery-slider:after{height:100%;width:0;border-left:1px dashed lime}[debug=true][_nghost-%COMP%]     gallery-slider gallery-item{outline:1px solid darkorange}[debug=true][_nghost-%COMP%]     gallery-slider gallery-item.g-item-highlight:after{content:"";position:absolute;width:100%;height:100%;border:3px solid lime;box-sizing:border-box;z-index:10}[debug=true][_nghost-%COMP%]     .g-sliding .g-slider-sliding{display:block}[debug=true][_nghost-%COMP%]     .g-scrolling .g-slider-scrolling{display:block}[debug=true][_nghost-%COMP%]     .g-resizing .g-slider-resizing{display:block}[debug=true][_nghost-%COMP%]     .g-slider-debug{position:absolute;top:0;left:0;display:flex;gap:5px;padding:10px}[debug=true][_nghost-%COMP%]     .g-slider-debug .g-slider-resizing{background:#f54c28}[debug=true][_nghost-%COMP%]     .g-slider-debug .g-slider-scrolling{background:#ff8524}[debug=true][_nghost-%COMP%]     .g-slider-debug .g-slider-sliding{background:#1f6cb9}[debug=true][_nghost-%COMP%]     .g-slider-debug div, [debug=true][_nghost-%COMP%]     .g-slider-debug:before{display:none;color:#fff;font-family:monospace;z-index:12;padding:2px 6px;border-radius:3px}[debug=true][itemAutoSize=false][_nghost-%COMP%]     .g-slider-debug:before{content:var(--intersection-margin);background:#ecececd6;color:#363636;display:block}[debug=true][itemAutoSize=true][_nghost-%COMP%]     gallery-item:before{position:absolute;margin:10px;content:var(--item-intersection-margin);background:#ecececd6;color:#363636;display:block;width:270px;font-family:monospace;z-index:12;padding:2px 6px;border-radius:3px}'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryCoreComponent, [{
    type: Component,
    args: [{
      selector: "gallery-core",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <gallery-thumbs *ngIf="config.thumbs"
                    [state]="state"
                    [config]="config"
                    [galleryId]="galleryId"
                    (thumbClick)="thumbClick.emit($event)"
                    (error)="error.emit($event)"/>

    <div class="g-box">
      <gallery-slider [class.g-debug]="config.debug"
                      [state]="state"
                      [config]="config"
                      [galleryId]="galleryId"
                      (itemClick)="itemClick.emit($event)"
                      (error)="error.emit($event)">

        <gallery-nav *ngIf="config.nav && state.items.length > 1"
                     [state]="state"
                     [config]="config"
                     [galleryId]="galleryId"/>

      </gallery-slider>

      <gallery-bullets *ngIf="config.bullets"
                       [state]="state"
                       [config]="config"
                       [galleryId]="galleryId"/>

      <gallery-counter *ngIf="config.counter"
                       [state]="state"/>

      <div class="g-box-template">
        <ng-container
          *ngTemplateOutlet="config.boxTemplate; context: { state: state, config: config }"></ng-container>
      </div>
    </div>
  `,
      standalone: true,
      imports: [CommonModule, GalleryThumbsComponent, GallerySliderComponent, GalleryNavComponent, GalleryBulletsComponent, GalleryCounterComponent],
      styles: [":host{position:relative;overflow:hidden;display:flex;gap:var(--g-gutter-size);width:100%;height:500px;min-height:100%;max-height:100%;--image-object-fit: unset;--slider-thumb-height: unset;--slider-thumb-width: unset;--thumb-slider-left: unset;--thumb-slider-overflow: unset;--thumb-slider-flex-direction: unset;--g-thumb-width: unset;--g-thumb-height: unset;--g-thumb-cursor: pointer;--slider-scroll-snap-type: unset;--slider-overflow: unset;--slider-flex-direction: unset;--slider-width: unset;--slider-height: unset;--slider-content-width: unset;--slider-content-height: unset;--g-item-width: unset;--g-item-height: unset;--g-item-max-height: var(--slider-height);--bullets-top: unset;--bullets-bottom: unset;--bullets-cursor: pointer;--bullets-opacity: .4;--bullets-hover-opacity: 1;--bullets-active-opacity: 1;--counter-top: unset;--counter-bottom: unset;--counter-border-radius: unset;--nav-space: 8px;--nav-hover-space: 6.4px;--nav-next-right: unset;--nav-next-hover-right: unset;--nav-next-left: unset;--nav-next-hover-left: unset}:host[thumbPosition=top]{flex-direction:column}:host[thumbPosition=left]{flex-direction:row}:host[thumbPosition=right]{flex-direction:row-reverse}:host[thumbPosition=bottom]{flex-direction:column-reverse}:host[autoHeight=true][itemAutoSize=false][orientation=horizontal][thumbPosition=top],:host[autoHeight=true][itemAutoSize=false][orientation=horizontal][thumbPosition=bottom]{height:fit-content;--g-item-height: auto !important;--g-item-max-height: auto}:host[imageSize=contain] gallery-slider,:host[thumbImageSize=contain] gallery-thumbs{--image-object-fit: contain}:host[imageSize=cover] gallery-slider,:host[thumbImageSize=cover] gallery-thumbs{--image-object-fit: cover}:host[thumbPosition=top],:host[thumbPosition=bottom]{--thumb-slider-top: 0;--thumb-slider-overflow: auto hidden;--thumb-slider-flex-direction: row;--g-thumb-height: 100%}:host[thumbPosition=top][thumbAutosize=true],:host[thumbPosition=bottom][thumbAutosize=true]{--g-thumb-width: auto !important}:host[thumbPosition=left],:host[thumbPosition=right]{--thumb-slider-left: 0;--thumb-slider-overflow: hidden auto;--thumb-slider-flex-direction: column;--g-thumb-width: 100%}:host[thumbPosition=left][thumbAutosize=true],:host[thumbPosition=right][thumbAutosize=true]{--g-thumb-height: auto !important}:host[thumbDisbled=true]{--g-thumb-cursor: default}:host[thumbScrollDisabled=true]{--thumb-slider-overflow: hidden !important}:host[orientation=horizontal]{--slider-overflow: auto hidden;--slider-scroll-snap-type: x mandatory;--slider-flex-direction: row;--slider-content-height: 100%}:host[orientation=vertical]{--slider-overflow: hidden auto;--slider-scroll-snap-type: y mandatory;--slider-flex-direction: column;--slider-content-width: 100%}:host[scrollDisabled=true]{--slider-overflow: hidden !important}:host[orientation=horizontal]{--g-item-width: var(--slider-width);--g-item-height: 100%}:host[orientation=horizontal][itemAutoSize=true]{--g-item-width: auto}:host[orientation=vertical]{--g-item-width: 100%;--g-item-height: var(--slider-height)}:host[orientation=vertical][itemAutoSize=true]{--g-item-height: auto}:host[bulletPosition=top]{--bullets-top: 15px}:host[bulletPosition=bottom]{--bullets-bottom: 15px}:host[bulletDisabled=true]{--bullets-cursor: default;--bullets-hover-opacity: var(--bullets-opacity)}:host[counterPosition=top]{--counter-top: 0;--counter-border-radius: 0 0 4px 4px}:host[counterPosition=bottom]{--counter-bottom: 0;--counter-border-radius: 4px 4px 0 0}:host[dir=ltr]{--nav-next-transform: translateY(-50%) perspective(1px);--nav-next-right: var(--nav-space);--nav-next-hover-right: var(--nav-hover-space);--nav-prev-transform: translateY(-50%) perspective(1px) scale(-1, -1);--nav-prev-left: var(--nav-space);--nav-prev-hover-left: var(--nav-hover-space)}:host[dir=rtl]{--nav-next-transform: translateY(-50%) perspective(1px) scale(-1, -1);--nav-next-left: var(--nav-space);--nav-next-hover-left: var(--nav-hover-space);--nav-prev-transform: translateY(-50%) perspective(1px);--nav-prev-right: var(--nav-space);--nav-prev-hover-right: var(--nav-hover-space)}.g-box{overflow:hidden;position:relative;display:flex;flex-direction:column;order:1;flex:1}.g-box-template{position:absolute;z-index:10}\n", ':host[debug=true] ::ng-deep .g-sliding gallery-item.g-item-highlight,:host[debug=true] ::ng-deep .g-resizing gallery-item.g-item-highlight,:host[debug=true] ::ng-deep .g-scrolling gallery-item.g-item-highlight{visibility:hidden}:host[debug=true] ::ng-deep gallery-slider:after,:host[debug=true] ::ng-deep gallery-slider:before{position:absolute;content:"";z-index:12}:host[debug=true] ::ng-deep gallery-slider:before{width:100%;height:0;border-top:1px dashed lime}:host[debug=true] ::ng-deep gallery-slider:after{height:100%;width:0;border-left:1px dashed lime}:host[debug=true] ::ng-deep gallery-slider gallery-item{outline:1px solid darkorange}:host[debug=true] ::ng-deep gallery-slider gallery-item.g-item-highlight:after{content:"";position:absolute;width:100%;height:100%;border:3px solid lime;box-sizing:border-box;z-index:10}:host[debug=true] ::ng-deep .g-sliding .g-slider-sliding{display:block}:host[debug=true] ::ng-deep .g-scrolling .g-slider-scrolling{display:block}:host[debug=true] ::ng-deep .g-resizing .g-slider-resizing{display:block}:host[debug=true] ::ng-deep .g-slider-debug{position:absolute;top:0;left:0;display:flex;gap:5px;padding:10px}:host[debug=true] ::ng-deep .g-slider-debug .g-slider-resizing{background:#f54c28}:host[debug=true] ::ng-deep .g-slider-debug .g-slider-scrolling{background:#ff8524}:host[debug=true] ::ng-deep .g-slider-debug .g-slider-sliding{background:#1f6cb9}:host[debug=true] ::ng-deep .g-slider-debug div,:host[debug=true] ::ng-deep .g-slider-debug:before{display:none;color:#fff;font-family:monospace;z-index:12;padding:2px 6px;border-radius:3px}:host[debug=true][itemAutoSize=false] ::ng-deep .g-slider-debug:before{content:var(--intersection-margin);background:#ecececd6;color:#363636;display:block}:host[debug=true][itemAutoSize=true] ::ng-deep gallery-item:before{position:absolute;margin:10px;content:var(--item-intersection-margin);background:#ecececd6;color:#363636;display:block;width:270px;font-family:monospace;z-index:12;padding:2px 6px;border-radius:3px}\n']
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Directionality
  }], {
    galleryId: [{
      type: Input
    }],
    state: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    thumbClick: [{
      type: Output
    }],
    error: [{
      type: Output
    }],
    thumbPosition: [{
      type: HostBinding,
      args: ["attr.thumbPosition"]
    }],
    orientation: [{
      type: HostBinding,
      args: ["attr.orientation"]
    }],
    disableThumb: [{
      type: HostBinding,
      args: ["attr.thumbDisabled"]
    }],
    bulletDisabled: [{
      type: HostBinding,
      args: ["attr.bulletDisabled"]
    }],
    bulletPosition: [{
      type: HostBinding,
      args: ["attr.bulletPosition"]
    }],
    imageSize: [{
      type: HostBinding,
      args: ["attr.imageSize"]
    }],
    thumbImageSize: [{
      type: HostBinding,
      args: ["attr.thumbImageSize"]
    }],
    counterPosition: [{
      type: HostBinding,
      args: ["attr.counterPosition"]
    }],
    scrollDisabled: [{
      type: HostBinding,
      args: ["attr.scrollDisabled"]
    }],
    thumbScrollDisabled: [{
      type: HostBinding,
      args: ["attr.thumbScrollDisabled"]
    }],
    itemAutosize: [{
      type: HostBinding,
      args: ["attr.itemAutosize"]
    }],
    autoHeight: [{
      type: HostBinding,
      args: ["attr.autoHeight"]
    }],
    thumbAutosize: [{
      type: HostBinding,
      args: ["attr.thumbAutosize"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    debug: [{
      type: HostBinding,
      args: ["attr.debug"]
    }]
  });
})();
var GalleryImageDef = class _GalleryImageDef {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  // Make sure the template checker knows the type of the context with which the
  // template of this directive will be rendered
  static ngTemplateContextGuard(directive, context) {
    return true;
  }
  static {
    this.ɵfac = function GalleryImageDef_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GalleryImageDef)(ɵɵdirectiveInject(TemplateRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _GalleryImageDef,
      selectors: [["", "galleryImageDef", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryImageDef, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[galleryImageDef]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var GalleryThumbDef = class _GalleryThumbDef {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  // Make sure the template checker knows the type of the context with which the
  // template of this directive will be rendered
  static ngTemplateContextGuard(directive, context) {
    return true;
  }
  static {
    this.ɵfac = function GalleryThumbDef_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GalleryThumbDef)(ɵɵdirectiveInject(TemplateRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _GalleryThumbDef,
      selectors: [["", "galleryThumbDef", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryThumbDef, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[galleryThumbDef]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var GalleryItemDef = class _GalleryItemDef {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  // Make sure the template checker knows the type of the context with which the
  // template of this directive will be rendered
  static ngTemplateContextGuard(directive, context) {
    return true;
  }
  static {
    this.ɵfac = function GalleryItemDef_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GalleryItemDef)(ɵɵdirectiveInject(TemplateRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _GalleryItemDef,
      selectors: [["", "galleryItemDef", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryItemDef, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[galleryItemDef]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var GalleryBoxDef = class _GalleryBoxDef {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  // Make sure the template checker knows the type of the context with which the
  // template of this directive will be rendered
  static ngTemplateContextGuard(directive, context) {
    return true;
  }
  static {
    this.ɵfac = function GalleryBoxDef_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GalleryBoxDef)(ɵɵdirectiveInject(TemplateRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _GalleryBoxDef,
      selectors: [["", "galleryBoxDef", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryBoxDef, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[galleryBoxDef]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var AutoplayDirective = class _AutoplayDirective {
  constructor(_gallery, _imgManager) {
    this._gallery = _gallery;
    this._imgManager = _imgManager;
  }
  ngAfterViewInit() {
    this._galleryRef = this._gallery.ref(this.galleryId);
    this._subscribe();
    if (this.config.autoplay) {
      this._galleryRef.play();
    }
  }
  ngOnChanges(changes) {
    if (this._galleryRef && changes.config?.currentValue.autoplay !== changes.config?.previousValue.autoplay) {
      this.config.autoplay ? this._galleryRef.play() : this._galleryRef.stop();
    }
  }
  ngOnDestroy() {
    this._unsubscribe();
  }
  _subscribe() {
    this._unsubscribe();
    this._currentSubscription = this._galleryRef.playingChanged.pipe(switchMap((state) => {
      if (state.isPlaying) {
        return this._imgManager.getActiveItem(this._galleryRef.state).pipe(switchMap(() => of({}).pipe(delay(this.config.autoplayInterval), tap(() => {
          if (this._galleryRef.stateSnapshot.hasNext) {
            this._galleryRef.next(this.config.scrollBehavior);
          } else {
            this._galleryRef.set(0, this.config.scrollBehavior);
          }
        }))));
      }
      return EMPTY;
    })).subscribe();
  }
  _unsubscribe() {
    this._currentSubscription?.unsubscribe();
  }
  static {
    this.ɵfac = function AutoplayDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AutoplayDirective)(ɵɵdirectiveInject(Gallery), ɵɵdirectiveInject(ImgManager));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _AutoplayDirective,
      selectors: [["gallery-core", "autoplay", ""]],
      inputs: {
        config: "config",
        galleryId: "galleryId"
      },
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoplayDirective, [{
    type: Directive,
    args: [{
      selector: "gallery-core[autoplay]",
      standalone: true
    }]
  }], () => [{
    type: Gallery
  }, {
    type: ImgManager
  }], {
    config: [{
      type: Input
    }],
    galleryId: [{
      type: Input
    }]
  });
})();
var GalleryComponent = class _GalleryComponent {
  constructor(_gallery) {
    this._gallery = _gallery;
    this.id = "root";
    this.nav = this._gallery.config.nav;
    this.bullets = this._gallery.config.bullets;
    this.loop = this._gallery.config.loop;
    this.debug = this._gallery.config.debug;
    this.thumbs = this._gallery.config.thumbs;
    this.counter = this._gallery.config.counter;
    this.detachThumbs = this._gallery.config.detachThumbs;
    this.thumbAutosize = this._gallery.config.thumbAutosize;
    this.itemAutosize = this._gallery.config.itemAutosize;
    this.autoHeight = this._gallery.config.autoHeight;
    this.autoplay = this._gallery.config.autoplay;
    this.disableThumbs = this._gallery.config.disableThumbs;
    this.disableBullets = this._gallery.config.disableBullets;
    this.disableScroll = this._gallery.config.disableScroll;
    this.disableThumbScroll = this._gallery.config.disableThumbScroll;
    this.thumbCentralized = this._gallery.config.thumbCentralized;
    this.disableMouseScroll = this._gallery.config.disableMouseScroll;
    this.disableThumbMouseScroll = this._gallery.config.disableThumbMouseScroll;
    this.bulletSize = this._gallery.config.bulletSize;
    this.thumbWidth = this._gallery.config.thumbWidth;
    this.thumbHeight = this._gallery.config.thumbHeight;
    this.autoplayInterval = this._gallery.config.autoplayInterval;
    this.scrollDuration = this._gallery.config.scrollDuration;
    this.resizeDebounceTime = this._gallery.config.resizeDebounceTime;
    this.scrollBehavior = this._gallery.config.scrollBehavior;
    this.scrollEase = this._gallery.config.scrollEase;
    this.imageSize = this._gallery.config.imageSize;
    this.thumbImageSize = this._gallery.config.thumbImageSize;
    this.bulletPosition = this._gallery.config.bulletPosition;
    this.counterPosition = this._gallery.config.counterPosition;
    this.orientation = this._gallery.config.orientation;
    this.loadingAttr = this._gallery.config.loadingAttr;
    this.loadingStrategy = this._gallery.config.loadingStrategy;
    this.thumbPosition = this._gallery.config.thumbPosition;
    this.destroyRef = true;
    this.skipInitConfig = false;
    this.itemClick = new EventEmitter();
    this.thumbClick = new EventEmitter();
    this.playingChange = new EventEmitter();
    this.indexChange = new EventEmitter();
    this.itemsChange = new EventEmitter();
    this.error = new EventEmitter();
  }
  /** @ignore */
  getConfig() {
    return {
      nav: this.nav,
      bullets: this.bullets,
      loop: this.loop,
      debug: this.debug,
      thumbs: this.thumbs,
      counter: this.counter,
      autoplay: this.autoplay,
      bulletSize: this.bulletSize,
      imageSize: this.imageSize,
      thumbImageSize: this.thumbImageSize,
      scrollBehavior: this.scrollBehavior,
      thumbCentralized: this.thumbCentralized,
      thumbWidth: this.thumbWidth,
      thumbHeight: this.thumbHeight,
      scrollEase: this.scrollEase,
      bulletPosition: this.bulletPosition,
      loadingAttr: this.loadingAttr,
      detachThumbs: this.detachThumbs,
      thumbPosition: this.thumbPosition,
      autoplayInterval: this.autoplayInterval,
      counterPosition: this.counterPosition,
      loadingStrategy: this.loadingStrategy,
      scrollDuration: this.scrollDuration,
      orientation: this.orientation,
      resizeDebounceTime: this.resizeDebounceTime,
      disableBullets: this.disableBullets,
      disableThumbs: this.disableThumbs,
      disableScroll: this.disableScroll,
      disableThumbScroll: this.disableThumbScroll,
      disableMouseScroll: this.disableMouseScroll,
      disableThumbMouseScroll: this.disableThumbMouseScroll,
      thumbAutosize: this.thumbAutosize,
      itemAutosize: this.itemAutosize,
      autoHeight: this.autoHeight
    };
  }
  /** @ignore */
  ngOnChanges(changes) {
    if (this.galleryRef) {
      this.galleryRef.setConfig(this.getConfig());
      if (changes.items && changes.items.currentValue !== changes.items.previousValue) {
        this.load(this.items);
      }
    }
  }
  /** @ignore */
  ngOnInit() {
    if (this.skipInitConfig) {
      this.galleryRef = this._gallery.ref(this.id);
    } else {
      this.galleryRef = this._gallery.ref(this.id, this.getConfig());
    }
    this.load(this.items);
    if (this.indexChange.observed) {
      this._indexChange$ = this.galleryRef.indexChanged.subscribe((state) => this.indexChange.emit(state));
    }
    if (this.itemsChange.observed) {
      this._itemChange$ = this.galleryRef.itemsChanged.subscribe((state) => this.itemsChange.emit(state));
    }
    if (this.playingChange.observed) {
      this._playingChange$ = this.galleryRef.playingChanged.subscribe((state) => this.playingChange.emit(state));
    }
  }
  /** @ignore */
  ngAfterContentInit() {
    const templateConfig = {};
    if (this._galleryItemDef) {
      templateConfig.itemTemplate = this._galleryItemDef.templateRef;
    }
    if (this._galleryImageDef) {
      templateConfig.imageTemplate = this._galleryImageDef.templateRef;
    }
    if (this._galleryThumbDef) {
      templateConfig.thumbTemplate = this._galleryThumbDef.templateRef;
    }
    if (this._galleryBoxDef) {
      templateConfig.boxTemplate = this._galleryBoxDef.templateRef;
    }
    if (Object.keys(templateConfig).length) {
      this.galleryRef.setConfig(templateConfig);
    }
  }
  /** @ignore */
  ngOnDestroy() {
    this._itemClick$?.unsubscribe();
    this._thumbClick$?.unsubscribe();
    this._itemChange$?.unsubscribe();
    this._indexChange$?.unsubscribe();
    this._playingChange$?.unsubscribe();
    if (this.destroyRef) {
      this.galleryRef?.destroy();
    }
  }
  /** @ignore */
  onItemClick(i) {
    this.itemClick.emit(i);
    this.galleryRef.itemClick.next(i);
  }
  /** @ignore */
  onThumbClick(i) {
    this.galleryRef.set(i);
    this.thumbClick.emit(i);
    this.galleryRef.thumbClick.next(i);
  }
  /** @ignore */
  onError(err) {
    this.error.emit(err);
    this.galleryRef.error.next(err);
  }
  /**
   * Load items and reset the state
   */
  load(items) {
    this.galleryRef.load(items);
  }
  /**
   * Add gallery item, it can be any item, suitable to add item with a custom template
   */
  add(item, active) {
    this.galleryRef.add(item, active);
  }
  /**
   * Add image item
   */
  addImage(data, active) {
    this.galleryRef.addImage(data, active);
  }
  /**
   * Add video item
   */
  addVideo(data, active) {
    this.galleryRef.addVideo(data, active);
  }
  /**
   * Add iframe item
   */
  addIframe(data, active) {
    this.galleryRef.addIframe(data, active);
  }
  /**
   * Add Youtube item
   */
  addYoutube(data, active) {
    this.galleryRef.addYoutube(data, active);
  }
  /**
   * Add Vimeo item
   */
  addVimeo(data, active) {
    this.galleryRef.addVimeo(data, active);
  }
  /**
   * Remove gallery item by index
   */
  remove(i) {
    this.galleryRef.remove(i);
  }
  /**
   * Go to next item
   */
  next(behavior, loop) {
    this.galleryRef.next(behavior, loop);
  }
  /**
   * Go to prev item
   */
  prev(behavior, loop) {
    this.galleryRef.prev(behavior, loop);
  }
  /**
   * Set active item
   */
  set(i, behavior) {
    this.galleryRef.set(i, behavior);
  }
  /**
   * Reset to initial state
   */
  reset() {
    this.galleryRef.reset();
  }
  /**
   * Start the player
   */
  play(interval) {
    this.galleryRef.play(interval);
  }
  /**
   * Stop the player
   */
  stop() {
    this.galleryRef.stop();
  }
  static {
    this.ɵfac = function GalleryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GalleryComponent)(ɵɵdirectiveInject(Gallery));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _GalleryComponent,
      selectors: [["gallery"]],
      contentQueries: function GalleryComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, GalleryItemDef, 5);
          ɵɵcontentQuery(dirIndex, GalleryImageDef, 5);
          ɵɵcontentQuery(dirIndex, GalleryThumbDef, 5);
          ɵɵcontentQuery(dirIndex, GalleryBoxDef, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._galleryItemDef = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._galleryImageDef = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._galleryThumbDef = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._galleryBoxDef = _t.first);
        }
      },
      inputs: {
        id: "id",
        items: "items",
        nav: [2, "nav", "nav", booleanAttribute],
        bullets: [2, "bullets", "bullets", booleanAttribute],
        loop: [2, "loop", "loop", booleanAttribute],
        debug: [2, "debug", "debug", booleanAttribute],
        thumbs: [2, "thumbs", "thumbs", booleanAttribute],
        counter: [2, "counter", "counter", booleanAttribute],
        detachThumbs: [2, "detachThumbs", "detachThumbs", booleanAttribute],
        thumbAutosize: [2, "thumbAutosize", "thumbAutosize", booleanAttribute],
        itemAutosize: [2, "itemAutosize", "itemAutosize", booleanAttribute],
        autoHeight: [2, "autoHeight", "autoHeight", booleanAttribute],
        autoplay: [2, "autoplay", "autoplay", booleanAttribute],
        disableThumbs: [2, "disableThumbs", "disableThumbs", booleanAttribute],
        disableBullets: [2, "disableBullets", "disableBullets", booleanAttribute],
        disableScroll: [2, "disableScroll", "disableScroll", booleanAttribute],
        disableThumbScroll: [2, "disableThumbScroll", "disableThumbScroll", booleanAttribute],
        thumbCentralized: [2, "thumbCentralized", "thumbCentralized", booleanAttribute],
        disableMouseScroll: [2, "disableMouseScroll", "disableMouseScroll", booleanAttribute],
        disableThumbMouseScroll: [2, "disableThumbMouseScroll", "disableThumbMouseScroll", booleanAttribute],
        bulletSize: [2, "bulletSize", "bulletSize", numberAttribute],
        thumbWidth: [2, "thumbWidth", "thumbWidth", numberAttribute],
        thumbHeight: [2, "thumbHeight", "thumbHeight", numberAttribute],
        autoplayInterval: [2, "autoplayInterval", "autoplayInterval", numberAttribute],
        scrollDuration: [2, "scrollDuration", "scrollDuration", numberAttribute],
        resizeDebounceTime: [2, "resizeDebounceTime", "resizeDebounceTime", numberAttribute],
        scrollBehavior: "scrollBehavior",
        scrollEase: "scrollEase",
        imageSize: "imageSize",
        thumbImageSize: "thumbImageSize",
        bulletPosition: "bulletPosition",
        counterPosition: "counterPosition",
        orientation: "orientation",
        loadingAttr: "loadingAttr",
        loadingStrategy: "loadingStrategy",
        thumbPosition: "thumbPosition",
        destroyRef: "destroyRef",
        skipInitConfig: "skipInitConfig"
      },
      outputs: {
        itemClick: "itemClick",
        thumbClick: "thumbClick",
        playingChange: "playingChange",
        indexChange: "indexChange",
        itemsChange: "itemsChange",
        error: "error"
      },
      features: [ɵɵProvidersFeature([ImgManager]), ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature],
      decls: 3,
      vars: 7,
      consts: [["autoplay", "", 3, "itemClick", "thumbClick", "error", "galleryId", "state", "config"]],
      template: function GalleryComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "gallery-core", 0);
          ɵɵpipe(1, "async");
          ɵɵpipe(2, "async");
          ɵɵlistener("itemClick", function GalleryComponent_Template_gallery_core_itemClick_0_listener($event) {
            return ctx.onItemClick($event);
          })("thumbClick", function GalleryComponent_Template_gallery_core_thumbClick_0_listener($event) {
            return ctx.onThumbClick($event);
          })("error", function GalleryComponent_Template_gallery_core_error_0_listener($event) {
            return ctx.onError($event);
          });
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("galleryId", ctx.id)("state", ɵɵpipeBind1(1, 3, ctx.galleryRef.state))("config", ɵɵpipeBind1(2, 5, ctx.galleryRef.config));
        }
      },
      dependencies: [CommonModule, AsyncPipe, GalleryCoreComponent, AutoplayDirective],
      styles: ["[_nghost-%COMP%]{position:relative;overflow:hidden;z-index:1;display:flex;justify-content:center;align-items:center;background-color:#000;--g-height-transition: height 468ms cubic-bezier(.42, 0, .58, 1);--g-nav-drop-shadow: drop-shadow(0 0 2px rgba(0, 0, 0, .6));--g-box-shadow: 0 0 3px rgba(0, 0, 0, .6);--g-font-color: #000;--g-overlay-color: #fff;--g-gutter-size: 1px}[gallerize][_nghost-%COMP%]{--g-item-cursor: pointer}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryComponent, [{
    type: Component,
    args: [{
      selector: "gallery",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <gallery-core autoplay
                  [galleryId]="id"
                  [state]="galleryRef.state | async"
                  [config]="galleryRef.config | async"
                  (itemClick)="onItemClick($event)"
                  (thumbClick)="onThumbClick($event)"
                  (error)="onError($event)"/>
  `,
      standalone: true,
      imports: [CommonModule, GalleryCoreComponent, AutoplayDirective],
      providers: [ImgManager],
      styles: [":host{position:relative;overflow:hidden;z-index:1;display:flex;justify-content:center;align-items:center;background-color:#000;--g-height-transition: height 468ms cubic-bezier(.42, 0, .58, 1);--g-nav-drop-shadow: drop-shadow(0 0 2px rgba(0, 0, 0, .6));--g-box-shadow: 0 0 3px rgba(0, 0, 0, .6);--g-font-color: #000;--g-overlay-color: #fff;--g-gutter-size: 1px}:host[gallerize]{--g-item-cursor: pointer}\n"]
    }]
  }], () => [{
    type: Gallery
  }], {
    id: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    nav: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    bullets: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    loop: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    debug: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    thumbs: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    counter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    detachThumbs: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    thumbAutosize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    itemAutosize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoHeight: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoplay: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableThumbs: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableBullets: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableThumbScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    thumbCentralized: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableMouseScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableThumbMouseScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    bulletSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    thumbWidth: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    thumbHeight: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    autoplayInterval: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    scrollDuration: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    resizeDebounceTime: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    scrollBehavior: [{
      type: Input
    }],
    scrollEase: [{
      type: Input
    }],
    imageSize: [{
      type: Input
    }],
    thumbImageSize: [{
      type: Input
    }],
    bulletPosition: [{
      type: Input
    }],
    counterPosition: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    loadingAttr: [{
      type: Input
    }],
    loadingStrategy: [{
      type: Input
    }],
    thumbPosition: [{
      type: Input
    }],
    destroyRef: [{
      type: Input
    }],
    skipInitConfig: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    thumbClick: [{
      type: Output
    }],
    playingChange: [{
      type: Output
    }],
    indexChange: [{
      type: Output
    }],
    itemsChange: [{
      type: Output
    }],
    error: [{
      type: Output
    }],
    _galleryItemDef: [{
      type: ContentChild,
      args: [GalleryItemDef]
    }],
    _galleryImageDef: [{
      type: ContentChild,
      args: [GalleryImageDef]
    }],
    _galleryThumbDef: [{
      type: ContentChild,
      args: [GalleryThumbDef]
    }],
    _galleryBoxDef: [{
      type: ContentChild,
      args: [GalleryBoxDef]
    }]
  });
})();
var GalleryModule = class _GalleryModule {
  static {
    this.ɵfac = function GalleryModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GalleryModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _GalleryModule,
      imports: [GalleryComponent, GalleryItemDef, GalleryImageDef, GalleryThumbDef, GalleryBoxDef],
      exports: [GalleryComponent, GalleryItemDef, GalleryImageDef, GalleryThumbDef, GalleryBoxDef]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [GalleryComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryModule, [{
    type: NgModule,
    args: [{
      imports: [GalleryComponent, GalleryItemDef, GalleryImageDef, GalleryThumbDef, GalleryBoxDef],
      exports: [GalleryComponent, GalleryItemDef, GalleryImageDef, GalleryThumbDef, GalleryBoxDef]
    }]
  }], null, null);
})();

export {
  GalleryAction,
  ImageSize,
  LoadingStrategy,
  LoadingAttr,
  ThumbnailsPosition,
  BulletsPosition,
  CounterPosition,
  Orientation,
  GalleryItemTypes,
  ImageItem,
  VideoItem,
  IframeItem,
  YoutubeItem,
  VimeoItem,
  GalleryRef,
  GALLERY_CONFIG,
  Gallery,
  GalleryIframeComponent,
  GalleryVideoComponent,
  GalleryImageComponent,
  GalleryImageDef,
  GalleryThumbDef,
  GalleryItemDef,
  GalleryBoxDef,
  GalleryComponent,
  GalleryModule
};
//# sourceMappingURL=chunk-4QM5XLC4.js.map
