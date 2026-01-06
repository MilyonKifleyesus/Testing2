import {
  DomSanitizer
} from "./chunk-MZRIAPJR.js";
import "./chunk-LFQYYB2F.js";
import {
  Overlay,
  OverlayConfig,
  OverlayModule
} from "./chunk-RDR5N5VV.js";
import "./chunk-DRZBCJZT.js";
import {
  BreakpointObserver,
  Breakpoints
} from "./chunk-OWWKAO5H.js";
import {
  ComponentPortal
} from "./chunk-DEENFF35.js";
import "./chunk-EJQER4H7.js";
import "./chunk-2IGW2ZRF.js";
import "./chunk-DXX27NYX.js";
import "./chunk-BDV2V2K5.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-37IJTNUX.js";
import {
  APP_INITIALIZER,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  Renderer2,
  SecurityContext,
  ViewChild,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵclassMapInterpolate2,
  ɵɵclassProp,
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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵviewQuery
} from "./chunk-IOBWKMFY.js";
import "./chunk-R46UXVFS.js";
import "./chunk-D6YGKQ4W.js";
import {
  Subject,
  filter,
  map,
  switchMap,
  takeUntil,
  timer
} from "./chunk-L5ZQUDYH.js";
import "./chunk-ZYKX7RMX.js";
import "./chunk-AJH3MT3R.js";

// node_modules/@ks89/angular-modal-gallery/fesm2022/ks89-angular-modal-gallery.mjs
var _c0 = (a0, a1) => ({
  width: a0,
  height: a1
});
function CarouselPreviewsComponent_nav_0_ng_container_4_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "img", 8);
    ɵɵlistener("click", function CarouselPreviewsComponent_nav_0_ng_container_4_img_1_Template_img_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const preview_r4 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onImageEvent(preview_r4, $event, ctx_r1.clickAction));
    })("keyup", function CarouselPreviewsComponent_nav_0_ng_container_4_img_1_Template_img_keyup_0_listener($event) {
      ɵɵrestoreView(_r3);
      const preview_r4 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onImageEvent(preview_r4, $event, ctx_r1.keyboardAction));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const preview_r4 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate2("inside preview-image", ctx_r1.isActive(preview_r4) ? " active" : "", "", !(ctx_r1.previewConfig == null ? null : ctx_r1.previewConfig.clickable) ? " unclickable" : "", "");
    ɵɵpropertyInterpolate("alt", ctx_r1.getAlt(preview_r4));
    ɵɵproperty("loading", preview_r4.loading)("src", (preview_r4.plain == null ? null : preview_r4.plain.img) ? preview_r4.plain == null ? null : preview_r4.plain.img : preview_r4.modal.img, ɵɵsanitizeUrl)("fallbackImg", (preview_r4.plain == null ? null : preview_r4.plain.fallbackImg) ? preview_r4.plain == null ? null : preview_r4.plain.fallbackImg : preview_r4.modal.fallbackImg)("sizeConfig", ɵɵpureFunction2(13, _c0, ctx_r1.previewConfig == null ? null : ctx_r1.previewConfig.width, ctx_r1.previewMaxHeight))("title", ctx_r1.getTitle(preview_r4))("tabIndex", 0);
    ɵɵattribute("fetchpriority", preview_r4.fetchpriority)("aria-label", ctx_r1.getAriaLabel(preview_r4));
  }
}
function CarouselPreviewsComponent_nav_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CarouselPreviewsComponent_nav_0_ng_container_4_img_1_Template, 1, 16, "img", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const preview_r4 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", preview_r4 == null ? null : preview_r4.modal == null ? null : preview_r4.modal.img);
  }
}
function CarouselPreviewsComponent_nav_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nav", 1)(1, "a", 2);
    ɵɵlistener("click", function CarouselPreviewsComponent_nav_0_Template_a_click_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onNavigationEvent("left", $event));
    })("keyup", function CarouselPreviewsComponent_nav_0_Template_a_keyup_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onNavigationEvent("left", $event));
    });
    ɵɵelement(2, "div", 3);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 4);
    ɵɵtemplate(4, CarouselPreviewsComponent_nav_0_ng_container_4_Template, 2, 1, "ng-container", 5);
    ɵɵelementEnd();
    ɵɵelementStart(5, "a", 6);
    ɵɵlistener("click", function CarouselPreviewsComponent_nav_0_Template_a_click_5_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onNavigationEvent("right", $event));
    })("keyup", function CarouselPreviewsComponent_nav_0_Template_a_keyup_5_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onNavigationEvent("right", $event));
    });
    ɵɵelement(6, "div", 3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("title", ctx_r1.accessibilityConfig == null ? null : ctx_r1.accessibilityConfig.carouselPreviewsContainerTitle);
    ɵɵattribute("aria-label", ctx_r1.accessibilityConfig == null ? null : ctx_r1.accessibilityConfig.carouselPreviewsContainerAriaLabel);
    ɵɵadvance();
    ɵɵproperty("tabIndex", (ctx_r1.previewConfig == null ? null : ctx_r1.previewConfig.arrows) && ctx_r1.start > 0 ? 0 : -1);
    ɵɵattribute("aria-label", ctx_r1.accessibilityConfig == null ? null : ctx_r1.accessibilityConfig.carouselPreviewScrollPrevAriaLabel);
    ɵɵadvance();
    ɵɵclassMapInterpolate1("inside ", (ctx_r1.previewConfig == null ? null : ctx_r1.previewConfig.arrows) && ctx_r1.start > 0 ? "left-arrow-preview-image" : "empty-arrow-preview-image", "");
    ɵɵproperty("title", ctx_r1.accessibilityConfig == null ? null : ctx_r1.accessibilityConfig.carouselPreviewScrollPrevTitle);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r1.previews)("ngForTrackBy", ctx_r1.trackById);
    ɵɵadvance();
    ɵɵproperty("tabIndex", (ctx_r1.previewConfig == null ? null : ctx_r1.previewConfig.arrows) && ctx_r1.end < ctx_r1.images.length ? 0 : -1);
    ɵɵattribute("aria-label", ctx_r1.accessibilityConfig == null ? null : ctx_r1.accessibilityConfig.carouselPreviewScrollNextAriaLabel);
    ɵɵadvance();
    ɵɵclassMapInterpolate1("inside ", (ctx_r1.previewConfig == null ? null : ctx_r1.previewConfig.arrows) && ctx_r1.end < ctx_r1.images.length ? "right-arrow-preview-image" : "empty-arrow-preview-image", "");
    ɵɵproperty("title", ctx_r1.accessibilityConfig == null ? null : ctx_r1.accessibilityConfig.carouselPreviewScrollNextTitle);
  }
}
var _c1 = (a0) => ({
  "active": a0
});
function DotsComponent_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3);
    ɵɵlistener("click", function DotsComponent_ng_container_1_div_1_Template_div_click_0_listener($event) {
      const index_r2 = ɵɵrestoreView(_r1).index;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onDotEvent(index_r2, $event));
    })("keyup", function DotsComponent_ng_container_1_div_1_Template_div_keyup_0_listener($event) {
      const index_r2 = ɵɵrestoreView(_r1).index;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onDotEvent(index_r2, $event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const index_r2 = ctx.index;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ɵɵpureFunction1(3, _c1, ctx_r2.isActive(index_r2)))("tabIndex", 0);
    ɵɵattribute("aria-label", (ctx_r2.accessibilityConfig == null ? null : ctx_r2.accessibilityConfig.dotAriaLabel) + " " + (index_r2 + 1));
  }
}
function DotsComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DotsComponent_ng_container_1_div_1_Template, 1, 5, "div", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.images)("ngForTrackBy", ctx_r2.trackById);
  }
}
var _c2 = ["*"];
var _c3 = (a0) => ({
  maxWidth: a0,
  maxHeight: ""
});
var _c4 = (a0) => ({
  width: a0,
  height: ""
});
var _c5 = (a0, a1) => ({
  maxWidth: a0,
  maxHeight: a1
});
function CarouselComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function CarouselComponent_figure_3_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 14);
    ɵɵlistener("click", function CarouselComponent_figure_3_a_1_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.onNavigationEvent("left", $event, ctx_r3.clickAction));
    })("keyup", function CarouselComponent_figure_3_a_1_Template_a_keyup_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.onNavigationEvent("left", $event, ctx_r3.keyboardAction));
    });
    ɵɵelement(1, "div", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("tabIndex", ctx_r3.isLastImage && !ctx_r3.carouselSlideInfinite ? -1 : 0);
    ɵɵattribute("aria-label", ctx_r3.accessibilityConfig == null ? null : ctx_r3.accessibilityConfig.carouselPrevImageAriaLabel);
    ɵɵadvance();
    ɵɵclassMapInterpolate1("inside ", ctx_r3.isFirstImage && !ctx_r3.carouselSlideInfinite || !ctx_r3.carouselConfig.showArrows ? "empty-arrow-image" : "left-arrow-image", "");
    ɵɵproperty("title", ctx_r3.accessibilityConfig == null ? null : ctx_r3.accessibilityConfig.carouselPrevImageTitle);
  }
}
function CarouselComponent_figure_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function CarouselComponent_figure_3_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "source", 16);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const source_r5 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("media", source_r5.media)("srcset", source_r5.srcset);
  }
}
function CarouselComponent_figure_3_figcaption_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "figcaption", 17);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("description", ctx_r3.carouselImageConfig == null ? null : ctx_r3.carouselImageConfig.description)("innerHTML", ctx_r3.getDescriptionToDisplay(), ɵɵsanitizeHtml);
  }
}
function CarouselComponent_figure_3_a_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 18);
    ɵɵlistener("click", function CarouselComponent_figure_3_a_7_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.onNavigationEvent("right", $event, ctx_r3.clickAction));
    })("keyup", function CarouselComponent_figure_3_a_7_Template_a_keyup_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.onNavigationEvent("right", $event, ctx_r3.keyboardAction));
    });
    ɵɵelement(1, "div", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("tabIndex", ctx_r3.isLastImage && !ctx_r3.carouselSlideInfinite ? -1 : 0);
    ɵɵattribute("aria-label", ctx_r3.accessibilityConfig == null ? null : ctx_r3.accessibilityConfig.carouselNextImageAriaLabel);
    ɵɵadvance();
    ɵɵclassMapInterpolate1("inside ", ctx_r3.isLastImage && !ctx_r3.carouselSlideInfinite || !ctx_r3.carouselConfig.showArrows ? "empty-arrow-image" : "right-arrow-image", "");
    ɵɵproperty("title", ctx_r3.accessibilityConfig == null ? null : ctx_r3.accessibilityConfig.carouselNextImageTitle);
  }
}
function CarouselComponent_figure_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "figure", 4);
    ɵɵtemplate(1, CarouselComponent_figure_3_a_1_Template, 2, 6, "a", 5)(2, CarouselComponent_figure_3_ng_container_2_Template, 1, 0, "ng-container", 6);
    ɵɵelementStart(3, "picture", 7);
    ɵɵtemplate(4, CarouselComponent_figure_3_ng_container_4_Template, 2, 2, "ng-container", 8);
    ɵɵelementStart(5, "img", 9);
    ɵɵlistener("click", function CarouselComponent_figure_3_Template_img_click_5_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onClickCurrentImage());
    })("swipeleft", function CarouselComponent_figure_3_Template_img_swipeleft_5_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.swipe($event.type));
    })("swiperight", function CarouselComponent_figure_3_Template_img_swiperight_5_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.swipe($event.type));
    });
    ɵɵelementEnd()();
    ɵɵtemplate(6, CarouselComponent_figure_3_figcaption_6_Template, 1, 2, "figcaption", 10)(7, CarouselComponent_figure_3_a_7_Template, 2, 6, "a", 11);
    ɵɵelementStart(8, "div", 12)(9, "ks-dots", 13);
    ɵɵlistener("clickDot", function CarouselComponent_figure_3_Template_ks_dots_clickDot_9_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onClickDot($event));
    });
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    const content_r7 = ɵɵreference(2);
    ɵɵproperty("sizeConfig", ɵɵpureFunction1(23, _c4, ctx_r3.carouselConfig == null ? null : ctx_r3.carouselConfig.maxWidth));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.carouselConfig == null ? null : ctx_r3.carouselConfig.showArrows);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", content_r7);
    ɵɵadvance();
    ɵɵproperty("maxSizeConfig", ɵɵpureFunction2(25, _c5, ctx_r3.carouselConfig == null ? null : ctx_r3.carouselConfig.maxWidth, ctx_r3.carouselConfig == null ? null : ctx_r3.carouselConfig.maxHeight));
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r3.currentImage.modal == null ? null : ctx_r3.currentImage.modal.sources);
    ɵɵadvance();
    ɵɵstyleProp("object-fit", ctx_r3.carouselConfig == null ? null : ctx_r3.carouselConfig.objectFit);
    ɵɵpropertyInterpolate("alt", ctx_r3.currentImage.modal.alt ? ctx_r3.currentImage.modal.alt : ctx_r3.getAltDescriptionByImage());
    ɵɵproperty("id", ctx_r3.currentImage.id)("loading", ctx_r3.currentImage.loading)("maxSizeConfig", ɵɵpureFunction2(28, _c5, ctx_r3.carouselConfig == null ? null : ctx_r3.carouselConfig.maxWidth, ctx_r3.carouselConfig == null ? null : ctx_r3.carouselConfig.maxHeight))("src", ctx_r3.currentImage.modal.img, ɵɵsanitizeUrl)("fallbackImg", ctx_r3.currentImage.modal.fallbackImg)("title", ctx_r3.currentImage.modal.title || ctx_r3.currentImage.modal.title === "" ? ctx_r3.currentImage.modal.title : ctx_r3.getTitleToDisplay())("tabIndex", 0);
    ɵɵattribute("fetchpriority", ctx_r3.currentImage.fetchpriority)("aria-label", ctx_r3.currentImage.modal.ariaLabel);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.getDescriptionToDisplay() !== "");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.carouselConfig == null ? null : ctx_r3.carouselConfig.showArrows);
    ɵɵadvance(2);
    ɵɵproperty("id", ctx_r3.id)("currentImage", ctx_r3.currentImage)("images", ctx_r3.images)("dotsConfig", ctx_r3.carouselDotsConfig);
  }
}
var _c6 = (a0) => ({
  "font-size": a0
});
function UpperButtonsComponent_ng_container_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 3);
    ɵɵlistener("click", function UpperButtonsComponent_ng_container_1_a_1_Template_a_click_0_listener($event) {
      const btn_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onEvent(btn_r2, $event));
    })("keyup", function UpperButtonsComponent_ng_container_1_a_1_Template_a_keyup_0_listener($event) {
      const btn_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onEvent(btn_r2, $event));
    });
    ɵɵelement(1, "div", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const btn_r2 = ctx.$implicit;
    ɵɵproperty("sizeConfig", ɵɵpureFunction2(8, _c0, btn_r2.size == null ? null : btn_r2.size.width, btn_r2.size == null ? null : btn_r2.size.height))("ngStyle", ɵɵpureFunction1(11, _c6, btn_r2.fontSize))("tabIndex", 0);
    ɵɵattribute("aria-label", btn_r2.ariaLabel);
    ɵɵadvance();
    ɵɵclassMapInterpolate1("inside ", btn_r2.className, "");
    ɵɵpropertyInterpolate("title", btn_r2.title);
  }
}
function UpperButtonsComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, UpperButtonsComponent_ng_container_1_a_1_Template, 2, 13, "a", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.buttons)("ngForTrackBy", ctx_r2.trackById);
  }
}
var _c7 = (a0, a1) => ({
  preview: a0,
  defaultTemplate: a1
});
function PreviewsComponent_ng_container_1_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function PreviewsComponent_ng_container_1_ng_container_3_ng_template_3_img_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 10);
  }
  if (rf & 2) {
    const preview_r4 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("inside preview-image ", ctx_r1.isActive(preview_r4) ? "active" : "", "");
    ɵɵpropertyInterpolate("alt", preview_r4.modal.alt ? preview_r4.modal.alt : "");
    ɵɵproperty("loading", preview_r4.loading)("src", (preview_r4.plain == null ? null : preview_r4.plain.img) ? preview_r4.plain == null ? null : preview_r4.plain.img : preview_r4.modal.img, ɵɵsanitizeUrl)("fallbackImg", (preview_r4.plain == null ? null : preview_r4.plain.fallbackImg) ? preview_r4.plain == null ? null : preview_r4.plain.fallbackImg : preview_r4.modal.fallbackImg)("sizeConfig", ɵɵpureFunction2(12, _c0, (ctx_r1.previewConfig == null ? null : ctx_r1.previewConfig.size) ? ctx_r1.previewConfig == null ? null : ctx_r1.previewConfig.size == null ? null : ctx_r1.previewConfig.size.width : ctx_r1.defaultPreviewSize.width, (ctx_r1.previewConfig == null ? null : ctx_r1.previewConfig.size) ? ctx_r1.previewConfig == null ? null : ctx_r1.previewConfig.size == null ? null : ctx_r1.previewConfig.size.height : ctx_r1.defaultPreviewSize.height))("title", preview_r4.modal.title || preview_r4.modal.title === "" ? preview_r4.modal.title : "")("tabIndex", 0);
    ɵɵattribute("fetchpriority", preview_r4.fetchpriority)("aria-label", preview_r4.modal.ariaLabel ? preview_r4.modal.ariaLabel : "");
  }
}
function PreviewsComponent_ng_container_1_ng_container_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PreviewsComponent_ng_container_1_ng_container_3_ng_template_3_img_0_Template, 1, 15, "img", 9);
  }
  if (rf & 2) {
    const preview_r4 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngIf", preview_r4 == null ? null : preview_r4.modal == null ? null : preview_r4.modal.img);
  }
}
function PreviewsComponent_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 7);
    ɵɵlistener("click", function PreviewsComponent_ng_container_1_ng_container_3_Template_div_click_1_listener($event) {
      const preview_r4 = ɵɵrestoreView(_r3).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onImageEvent(preview_r4, $event, ctx_r1.clickAction));
    })("keyup", function PreviewsComponent_ng_container_1_ng_container_3_Template_div_keyup_1_listener($event) {
      const preview_r4 = ɵɵrestoreView(_r3).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onImageEvent(preview_r4, $event, ctx_r1.keyboardAction));
    });
    ɵɵtemplate(2, PreviewsComponent_ng_container_1_ng_container_3_ng_container_2_Template, 1, 0, "ng-container", 8)(3, PreviewsComponent_ng_container_1_ng_container_3_ng_template_3_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const preview_r4 = ctx.$implicit;
    const defaultTemplate_r5 = ɵɵreference(4);
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵclassMapInterpolate1("preview-container ", !(ctx_r1.previewConfig == null ? null : ctx_r1.previewConfig.clickable) ? " unclickable" : "", "");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", !ctx_r1.customTemplate ? defaultTemplate_r5 : ctx_r1.customTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(5, _c7, preview_r4, defaultTemplate_r5));
  }
}
function PreviewsComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "a", 3);
    ɵɵlistener("click", function PreviewsComponent_ng_container_1_Template_a_click_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onNavigationEvent("left", $event));
    })("keyup", function PreviewsComponent_ng_container_1_Template_a_keyup_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onNavigationEvent("left", $event));
    });
    ɵɵelement(2, "div", 4);
    ɵɵelementEnd();
    ɵɵtemplate(3, PreviewsComponent_ng_container_1_ng_container_3_Template, 5, 8, "ng-container", 5);
    ɵɵelementStart(4, "a", 6);
    ɵɵlistener("click", function PreviewsComponent_ng_container_1_Template_a_click_4_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onNavigationEvent("right", $event));
    })("keyup", function PreviewsComponent_ng_container_1_Template_a_keyup_4_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onNavigationEvent("right", $event));
    });
    ɵɵelement(5, "div", 4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("tabIndex", ctx_r1.displayLeftPreviewsArrow() ? 0 : -1);
    ɵɵattribute("aria-label", ctx_r1.accessibilityConfig == null ? null : ctx_r1.accessibilityConfig.previewScrollPrevAriaLabel);
    ɵɵadvance();
    ɵɵclassMapInterpolate1("inside ", ctx_r1.displayLeftPreviewsArrow() ? "left-arrow-preview-image" : "empty-arrow-preview-image", "");
    ɵɵproperty("title", ctx_r1.accessibilityConfig == null ? null : ctx_r1.accessibilityConfig.previewScrollPrevTitle);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.previews)("ngForTrackBy", ctx_r1.trackById);
    ɵɵadvance();
    ɵɵproperty("tabIndex", ctx_r1.displayRightPreviewsArrow() ? 0 : -1);
    ɵɵattribute("aria-label", ctx_r1.accessibilityConfig == null ? null : ctx_r1.accessibilityConfig.previewScrollNextAriaLabel);
    ɵɵadvance();
    ɵɵclassMapInterpolate1("inside ", ctx_r1.displayRightPreviewsArrow() ? "right-arrow-preview-image" : "empty-arrow-preview-image", "");
    ɵɵproperty("title", ctx_r1.accessibilityConfig == null ? null : ctx_r1.accessibilityConfig.previewScrollNextTitle);
  }
}
var _c8 = ".arrow-preview-image[_ngcontent-%COMP%], .right-arrow-preview-image[_ngcontent-%COMP%], .left-arrow-preview-image[_ngcontent-%COMP%], .empty-arrow-preview-image[_ngcontent-%COMP%]{width:15px;height:15px;opacity:.5}.empty-arrow-preview-image[_ngcontent-%COMP%]{background:#000;opacity:0}.left-arrow-preview-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjUgICBjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);background-size:15px;transition:all .5s}.left-arrow-preview-image[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.right-arrow-preview-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjUgICBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXogICAiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);background-size:15px;transition:all .5s}.right-arrow-preview-image[_ngcontent-%COMP%]:hover{transform:scale(1.2)}";
function LoadingSpinnerComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 3);
    ɵɵelement(2, "div", 4)(3, "div", 5)(4, "div", 6);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
}
function LoadingSpinnerComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "div", 7);
    ɵɵelementContainerEnd();
  }
}
function LoadingSpinnerComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "div", 8);
    ɵɵelementContainerEnd();
  }
}
function LoadingSpinnerComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "div", 9);
    ɵɵelementContainerEnd();
  }
}
function LoadingSpinnerComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 10)(2, "div", 11);
    ɵɵelement(3, "span", 12)(4, "span", 13)(5, "span", 14)(6, "span", 15);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
}
function LoadingSpinnerComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 16);
    ɵɵelement(2, "div", 17);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
}
function LoadingSpinnerComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 18);
    ɵɵelement(2, "span")(3, "span")(4, "span")(5, "span");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
}
function CurrentImageComponent_ng_container_4_ng_container_1_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "img", 14);
    ɵɵlistener("click", function CurrentImageComponent_ng_container_4_ng_container_1_img_1_Template_img_click_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onNavigationEvent("left", $event, ctx_r1.clickAction));
    })("keyup", function CurrentImageComponent_ng_container_4_ng_container_1_img_1_Template_img_keyup_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onNavigationEvent("left", $event, ctx_r1.keyboardAction));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const leftPreview_r3 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("alt", leftPreview_r3.modal.alt ? leftPreview_r3.modal.alt : ctx_r1.getAltDescriptionByImage(leftPreview_r3));
    ɵɵproperty("loading", leftPreview_r3.loading)("src", (leftPreview_r3.plain == null ? null : leftPreview_r3.plain.img) ? leftPreview_r3.plain == null ? null : leftPreview_r3.plain.img : leftPreview_r3.modal.img, ɵɵsanitizeUrl)("fallbackImg", (leftPreview_r3.plain == null ? null : leftPreview_r3.plain.fallbackImg) ? leftPreview_r3.plain == null ? null : leftPreview_r3.plain.fallbackImg : leftPreview_r3.modal.fallbackImg)("hidden", ctx_r1.loading)("sizeConfig", ɵɵpureFunction2(10, _c0, ctx_r1.slideConfig == null ? null : ctx_r1.slideConfig.sidePreviews == null ? null : ctx_r1.slideConfig.sidePreviews.size.width, ctx_r1.slideConfig == null ? null : ctx_r1.slideConfig.sidePreviews == null ? null : ctx_r1.slideConfig.sidePreviews.size.height))("title", leftPreview_r3.modal.title || leftPreview_r3.modal.title === "" ? leftPreview_r3.modal.title : ctx_r1.getDescriptionToDisplay(leftPreview_r3))("tabIndex", 0);
    ɵɵattribute("fetchpriority", leftPreview_r3.fetchpriority)("aria-label", leftPreview_r3.modal.ariaLabel);
  }
}
function CurrentImageComponent_ng_container_4_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 15);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("sizeConfig", ɵɵpureFunction2(1, _c0, ctx_r1.slideConfig == null ? null : ctx_r1.slideConfig.sidePreviews == null ? null : ctx_r1.slideConfig.sidePreviews.size.width, ctx_r1.slideConfig == null ? null : ctx_r1.slideConfig.sidePreviews == null ? null : ctx_r1.slideConfig.sidePreviews.size.height));
  }
}
function CurrentImageComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CurrentImageComponent_ng_container_4_ng_container_1_img_1_Template, 1, 13, "img", 13)(2, CurrentImageComponent_ng_container_4_ng_container_1_ng_template_2_Template, 1, 4, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const firstImage_r4 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.isFirstImage)("ngIfElse", firstImage_r4);
  }
}
function CurrentImageComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CurrentImageComponent_ng_container_4_ng_container_1_Template, 4, 2, "ng-container", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.getLeftPreviewImage());
  }
}
function CurrentImageComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "source", 16);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const source_r5 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("media", source_r5.media)("srcset", source_r5.srcset);
  }
}
function CurrentImageComponent_figcaption_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "figcaption", 17);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("description", ctx_r1.currentImageConfig == null ? null : ctx_r1.currentImageConfig.description)("innerHTML", ctx_r1.getDescriptionToDisplay(), ɵɵsanitizeHtml);
  }
}
function CurrentImageComponent_ng_container_11_ng_container_1_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "img", 19);
    ɵɵlistener("click", function CurrentImageComponent_ng_container_11_ng_container_1_img_1_Template_img_click_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onNavigationEvent("right", $event, ctx_r1.clickAction));
    })("keyup", function CurrentImageComponent_ng_container_11_ng_container_1_img_1_Template_img_keyup_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onNavigationEvent("right", $event, ctx_r1.keyboardAction));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const rightPreview_r7 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("alt", rightPreview_r7.modal.alt ? rightPreview_r7.modal.alt : ctx_r1.getAltDescriptionByImage(rightPreview_r7));
    ɵɵproperty("loading", rightPreview_r7.loading)("src", (rightPreview_r7.plain == null ? null : rightPreview_r7.plain.img) ? rightPreview_r7.plain == null ? null : rightPreview_r7.plain.img : rightPreview_r7.modal.img, ɵɵsanitizeUrl)("fallbackImg", (rightPreview_r7.plain == null ? null : rightPreview_r7.plain.fallbackImg) ? rightPreview_r7.plain == null ? null : rightPreview_r7.plain.fallbackImg : rightPreview_r7.modal.fallbackImg)("hidden", ctx_r1.loading)("sizeConfig", ɵɵpureFunction2(10, _c0, ctx_r1.slideConfig == null ? null : ctx_r1.slideConfig.sidePreviews == null ? null : ctx_r1.slideConfig.sidePreviews.size.width, ctx_r1.slideConfig == null ? null : ctx_r1.slideConfig.sidePreviews == null ? null : ctx_r1.slideConfig.sidePreviews.size.height))("title", rightPreview_r7.modal.title || rightPreview_r7.modal.title === "" ? rightPreview_r7.modal.title : ctx_r1.getDescriptionToDisplay(rightPreview_r7))("tabIndex", 0);
    ɵɵattribute("fetchpriority", rightPreview_r7.fetchpriority)("aria-label", rightPreview_r7.modal.ariaLabel);
  }
}
function CurrentImageComponent_ng_container_11_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 20);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("sizeConfig", ɵɵpureFunction2(1, _c0, ctx_r1.slideConfig == null ? null : ctx_r1.slideConfig.sidePreviews == null ? null : ctx_r1.slideConfig.sidePreviews.size.width, ctx_r1.slideConfig == null ? null : ctx_r1.slideConfig.sidePreviews == null ? null : ctx_r1.slideConfig.sidePreviews.size.height));
  }
}
function CurrentImageComponent_ng_container_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CurrentImageComponent_ng_container_11_ng_container_1_img_1_Template, 1, 13, "img", 18)(2, CurrentImageComponent_ng_container_11_ng_container_1_ng_template_2_Template, 1, 4, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const lastImage_r8 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.isLastImage)("ngIfElse", lastImage_r8);
  }
}
function CurrentImageComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CurrentImageComponent_ng_container_11_ng_container_1_Template, 4, 2, "ng-container", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.getRightPreviewImage());
  }
}
function CurrentImageComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "ks-loading-spinner", 21);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("loadingConfig", ctx_r1.currentImageConfig == null ? null : ctx_r1.currentImageConfig.loadingConfig)("accessibilityConfig", ctx_r1.accessibilityConfig);
  }
}
var _c9 = ".arrow-image[_ngcontent-%COMP%], .right-arrow-image[_ngcontent-%COMP%], .left-arrow-image[_ngcontent-%COMP%], .empty-arrow-image[_ngcontent-%COMP%]{width:30px;height:30px;background-size:30px}.empty-arrow-image[_ngcontent-%COMP%]{background:#000;opacity:0}.left-arrow-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjUgICBjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);opacity:.8;transition:all .5s}.left-arrow-image[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.right-arrow-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjUgICBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXogICAiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);opacity:.8;transition:all .5s}.right-arrow-image[_ngcontent-%COMP%]:hover{transform:scale(1.2)}";
function PlainGalleryComponent_ng_container_1_ng_container_1_ng_container_1_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "img", 5);
    ɵɵlistener("click", function PlainGalleryComponent_ng_container_1_ng_container_1_ng_container_1_img_1_Template_img_click_0_listener() {
      ɵɵrestoreView(_r1);
      const imgCol_r2 = ɵɵnextContext(2).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.showModalGalleryByImage(imgCol_r2));
    })("keyup", function PlainGalleryComponent_ng_container_1_ng_container_1_ng_container_1_img_1_Template_img_keyup_0_listener($event) {
      ɵɵrestoreView(_r1);
      const imgCol_r2 = ɵɵnextContext(2).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onNavigationEvent($event, imgCol_r2));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const imgCol_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("alt", (imgCol_r2.plain == null ? null : imgCol_r2.plain.alt) ? imgCol_r2.plain == null ? null : imgCol_r2.plain.alt : ctx_r2.getAltPlainDescriptionByImage(imgCol_r2));
    ɵɵproperty("loading", imgCol_r2.loading)("src", (imgCol_r2.plain == null ? null : imgCol_r2.plain.img) ? imgCol_r2.plain == null ? null : imgCol_r2.plain.img : imgCol_r2.modal.img, ɵɵsanitizeUrl)("fallbackImg", (imgCol_r2.plain == null ? null : imgCol_r2.plain.fallbackImg) ? imgCol_r2.plain == null ? null : imgCol_r2.plain.fallbackImg : imgCol_r2.modal.fallbackImg)("sizeConfig", ɵɵpureFunction2(9, _c0, ctx_r2.size == null ? null : ctx_r2.size.width, ctx_r2.size == null ? null : ctx_r2.size.height))("title", (imgCol_r2.plain == null ? null : imgCol_r2.plain.title) || (imgCol_r2.plain == null ? null : imgCol_r2.plain.title) === "" ? imgCol_r2.plain == null ? null : imgCol_r2.plain.title : ctx_r2.getTitleDisplay(imgCol_r2))("tabIndex", 0);
    ɵɵattribute("fetchpriority", imgCol_r2.fetchpriority)("aria-label", imgCol_r2.plain == null ? null : imgCol_r2.plain.ariaLabel);
  }
}
function PlainGalleryComponent_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PlainGalleryComponent_ng_container_1_ng_container_1_ng_container_1_img_1_Template, 1, 12, "img", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const imgCol_r2 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", imgCol_r2 == null ? null : imgCol_r2.modal == null ? null : imgCol_r2.modal.img);
  }
}
function PlainGalleryComponent_ng_container_1_ng_container_1_ng_template_2_a_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 7);
    ɵɵlistener("click", function PlainGalleryComponent_ng_container_1_ng_container_1_ng_template_2_a_0_Template_a_click_0_listener() {
      ɵɵrestoreView(_r4);
      const imgCol_r2 = ɵɵnextContext(2).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.showModalGalleryByImage(imgCol_r2));
    })("keyup", function PlainGalleryComponent_ng_container_1_ng_container_1_ng_template_2_a_0_Template_a_keyup_0_listener($event) {
      ɵɵrestoreView(_r4);
      const imgCol_r2 = ɵɵnextContext(2).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onNavigationEvent($event, imgCol_r2));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const imgCol_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵstyleMap(ctx_r2.plainGalleryConfig == null ? null : ctx_r2.plainGalleryConfig.advanced == null ? null : ctx_r2.plainGalleryConfig.advanced.additionalBackground);
    ɵɵproperty("image", imgCol_r2)("sizeConfig", ɵɵpureFunction2(7, _c0, ctx_r2.size == null ? null : ctx_r2.size.width, ctx_r2.size == null ? null : ctx_r2.size.height))("title", (imgCol_r2.plain == null ? null : imgCol_r2.plain.title) || (imgCol_r2.plain == null ? null : imgCol_r2.plain.title) === "" ? imgCol_r2.plain == null ? null : imgCol_r2.plain.title : ctx_r2.getTitleDisplay(imgCol_r2))("tabIndex", 0);
    ɵɵattribute("aria-label", imgCol_r2.plain == null ? null : imgCol_r2.plain.ariaLabel);
  }
}
function PlainGalleryComponent_ng_container_1_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PlainGalleryComponent_ng_container_1_ng_container_1_ng_template_2_a_0_Template, 1, 10, "a", 6);
  }
  if (rf & 2) {
    const imgCol_r2 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngIf", imgCol_r2 == null ? null : imgCol_r2.modal == null ? null : imgCol_r2.modal.img);
  }
}
function PlainGalleryComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PlainGalleryComponent_ng_container_1_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 3)(2, PlainGalleryComponent_ng_container_1_ng_container_1_ng_template_2_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const aTags_r5 = ɵɵreference(3);
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !(ctx_r2.plainGalleryConfig == null ? null : ctx_r2.plainGalleryConfig.advanced == null ? null : ctx_r2.plainGalleryConfig.advanced.aTags))("ngIfElse", aTags_r5);
  }
}
function PlainGalleryComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PlainGalleryComponent_ng_container_1_ng_container_1_Template, 4, 2, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const imgRow_r6 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngForOf", imgRow_r6);
  }
}
var ENTER_CODE = "Enter";
var ESC_CODE = "Escape";
var RIGHT_ARROW_CODE = "ArrowRight";
var LEFT_ARROW_CODE = "ArrowLeft";
var UP_ARROW_CODE = "ArrowUp";
var DOWN_ARROW_CODE = "ArrowDown";
var SPACE_CODE = "Space";
var DIRECTION_RIGHT = "right";
var MOUSE_MAIN_BUTTON_CLICK = 0;
var NEXT = 1;
var PREV = -1;
var NOTHING = 0;
var AccessibleComponent = class _AccessibleComponent {
  constructor() {
  }
  /**
   * Method to handle navigation events with both Keyboard and Mouse.
   * @param string direction of the navigation that can be either 'next' or 'prev'
   * @param KeyboardEvent | MouseEvent event payload
   * @returns number -1 for PREV, 1 for NEXT and 0 for NOTHING
   */
  handleNavigationEvent(direction, event) {
    if (!event) {
      return NOTHING;
    }
    if (event instanceof KeyboardEvent) {
      return this.handleKeyboardNavigationEvent(direction, event);
    } else if (event instanceof MouseEvent) {
      return this.handleMouseNavigationEvent(direction, event);
    }
    return NOTHING;
  }
  /**
   * Method to handle events over an image, for instance a keypress with the Keyboard or a Mouse click.
   * @param event KeyboardEvent | MouseEvent payload
   * @returns number 1 for NEXT and 0 for NOTHING
   */
  handleImageEvent(event) {
    if (!event) {
      return NOTHING;
    }
    if (event instanceof KeyboardEvent) {
      return this.handleImageKeyboardEvent(event);
    } else if (event instanceof MouseEvent) {
      return this.handleImageMouseEvent(event);
    }
    return NOTHING;
  }
  /**
   * Private method to handle keyboard events over an image.
   * @param event KeyboardEvent payload
   * @returns number 1 for NEXT and 0 for NOTHING
   */
  handleImageKeyboardEvent(event) {
    const key = event.code;
    if (key === SPACE_CODE || key === ENTER_CODE) {
      return NEXT;
    }
    return NOTHING;
  }
  /**
   * Private method to handle mouse events over an image.
   * @param MouseEvent event payload
   * @returns number 1 for NEXT and 0 for NOTHING
   */
  handleImageMouseEvent(event) {
    const mouseBtn = event.button;
    if (mouseBtn === MOUSE_MAIN_BUTTON_CLICK) {
      return NEXT;
    }
    return NOTHING;
  }
  /**
   * Method to handle events over an image, for instance a keypress with the Keyboard or a Mouse click.
   * @param string direction of the navigation that can be either 'next' or 'prev'
   * @param KeyboardEvent event payload
   * @returns number -1 for PREV, 1 for NEXT and 0 for NOTHING
   */
  handleKeyboardNavigationEvent(direction, event) {
    const key = event.code;
    if (key === SPACE_CODE || key === ENTER_CODE) {
      return direction === DIRECTION_RIGHT ? NEXT : PREV;
    }
    return NOTHING;
  }
  /**
   * Method to handle events over an image, for instance a keypress with the Keyboard or a Mouse click.
   * @param string direction of the navigation that can be either 'next' or 'prev'
   * @param MouseEvent event payload
   * @returns number -1 for PREV, 1 for NEXT and 0 for NOTHING
   */
  handleMouseNavigationEvent(direction, event) {
    const mouseBtn = event.button;
    if (mouseBtn === MOUSE_MAIN_BUTTON_CLICK) {
      return direction === DIRECTION_RIGHT ? NEXT : PREV;
    }
    return NOTHING;
  }
  static {
    this.ɵfac = function AccessibleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccessibleComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AccessibleComponent,
      selectors: [["ks-accessible"]],
      standalone: false,
      decls: 0,
      vars: 0,
      template: function AccessibleComponent_Template(rf, ctx) {
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccessibleComponent, [{
    type: Component,
    args: [{
      selector: "ks-accessible",
      template: ``,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false
    }]
  }], () => [], null);
})();
var Image = class {
  constructor(id, modal, plain, loading = "lazy", fetchpriority = "auto") {
    this.id = id;
    this.modal = modal;
    this.plain = plain;
    this.loading = loading;
    this.fetchpriority = fetchpriority;
  }
};
var ImageEvent = class {
  constructor(galleryId, action, result) {
    this.galleryId = galleryId;
    this.action = action;
    this.result = result;
  }
};
var ImageModalEvent = class extends ImageEvent {
  constructor(galleryId, action, result) {
    super(galleryId, action, result);
  }
};
var Action;
(function(Action2) {
  Action2[Action2["NORMAL"] = 0] = "NORMAL";
  Action2[Action2["CLICK"] = 1] = "CLICK";
  Action2[Action2["KEYBOARD"] = 2] = "KEYBOARD";
  Action2[Action2["SWIPE"] = 3] = "SWIPE";
  Action2[Action2["LOAD"] = 4] = "LOAD";
  Action2[Action2["AUTOPLAY"] = 5] = "AUTOPLAY";
})(Action || (Action = {}));
function getIndex(image, arrayOfImages) {
  if (!image) {
    throw new Error("image must be a valid Image object");
  }
  if (!arrayOfImages) {
    throw new Error("arrayOfImages must be a valid Image[]");
  }
  if (!image.id && image.id !== 0) {
    throw new Error(`A numeric Image 'id' is mandatory`);
  }
  if (image.id < 0) {
    throw new Error(`Image 'id' must be >= 0`);
  }
  return arrayOfImages.findIndex((val) => val.id === image.id);
}
var DescriptionStrategy;
(function(DescriptionStrategy2) {
  DescriptionStrategy2[DescriptionStrategy2["ALWAYS_HIDDEN"] = 1] = "ALWAYS_HIDDEN";
  DescriptionStrategy2[DescriptionStrategy2["ALWAYS_VISIBLE"] = 2] = "ALWAYS_VISIBLE";
  DescriptionStrategy2[DescriptionStrategy2["HIDE_IF_EMPTY"] = 3] = "HIDE_IF_EMPTY";
})(DescriptionStrategy || (DescriptionStrategy = {}));
var KS_DEFAULT_ACCESSIBILITY_CONFIG = {
  backgroundAriaLabel: "Modal gallery full screen background",
  backgroundTitle: "",
  plainGalleryContentAriaLabel: "Plain gallery content",
  plainGalleryContentTitle: "",
  modalGalleryContentAriaLabel: "Modal gallery content",
  modalGalleryContentTitle: "",
  loadingSpinnerAriaLabel: "The current image is loading. Please be patient.",
  loadingSpinnerTitle: "The current image is loading. Please be patient.",
  mainContainerAriaLabel: "Current image and navigation",
  mainContainerTitle: "",
  mainPrevImageAriaLabel: "Previous image",
  mainPrevImageTitle: "Previous image",
  mainNextImageAriaLabel: "Next image",
  mainNextImageTitle: "Next image",
  dotsContainerAriaLabel: "Image navigation dots",
  dotsContainerTitle: "",
  dotAriaLabel: "Navigate to image number",
  previewsContainerAriaLabel: "Image previews",
  previewsContainerTitle: "",
  previewScrollPrevAriaLabel: "Scroll previous previews",
  previewScrollPrevTitle: "Scroll previous previews",
  previewScrollNextAriaLabel: "Scroll next previews",
  previewScrollNextTitle: "Scroll next previews",
  carouselContainerAriaLabel: "Current image and navigation",
  carouselContainerTitle: "",
  carouselPrevImageAriaLabel: "Previous image",
  carouselPrevImageTitle: "Previous image",
  carouselNextImageAriaLabel: "Next image",
  carouselNextImageTitle: "Next image",
  carouselPreviewsContainerAriaLabel: "Image previews",
  carouselPreviewsContainerTitle: "",
  carouselPreviewScrollPrevAriaLabel: "Scroll previous previews",
  carouselPreviewScrollPrevTitle: "Scroll previous previews",
  carouselPreviewScrollNextAriaLabel: "Scroll next previews",
  carouselPreviewScrollNextTitle: "Scroll next previews"
};
var ButtonsStrategy;
(function(ButtonsStrategy2) {
  ButtonsStrategy2[ButtonsStrategy2["DEFAULT"] = 1] = "DEFAULT";
  ButtonsStrategy2[ButtonsStrategy2["SIMPLE"] = 2] = "SIMPLE";
  ButtonsStrategy2[ButtonsStrategy2["ADVANCED"] = 3] = "ADVANCED";
  ButtonsStrategy2[ButtonsStrategy2["FULL"] = 4] = "FULL";
  ButtonsStrategy2[ButtonsStrategy2["CUSTOM"] = 5] = "CUSTOM";
})(ButtonsStrategy || (ButtonsStrategy = {}));
var ButtonType;
(function(ButtonType2) {
  ButtonType2[ButtonType2["DELETE"] = 1] = "DELETE";
  ButtonType2[ButtonType2["EXTURL"] = 2] = "EXTURL";
  ButtonType2[ButtonType2["DOWNLOAD"] = 3] = "DOWNLOAD";
  ButtonType2[ButtonType2["CLOSE"] = 4] = "CLOSE";
  ButtonType2[ButtonType2["CUSTOM"] = 5] = "CUSTOM";
  ButtonType2[ButtonType2["FULLSCREEN"] = 6] = "FULLSCREEN";
})(ButtonType || (ButtonType = {}));
var WHITELIST_BUTTON_TYPES = [ButtonType.FULLSCREEN, ButtonType.DELETE, ButtonType.EXTURL, ButtonType.DOWNLOAD, ButtonType.CLOSE, ButtonType.CUSTOM];
var LineLayout = class {
  constructor(size, breakConfig, justify) {
    this.size = size;
    this.breakConfig = breakConfig;
    this.justify = justify;
  }
};
var GridLayout = class {
  constructor(size, breakConfig) {
    this.size = size;
    this.breakConfig = breakConfig;
  }
};
var PlainGalleryStrategy;
(function(PlainGalleryStrategy2) {
  PlainGalleryStrategy2[PlainGalleryStrategy2["ROW"] = 1] = "ROW";
  PlainGalleryStrategy2[PlainGalleryStrategy2["COLUMN"] = 2] = "COLUMN";
  PlainGalleryStrategy2[PlainGalleryStrategy2["GRID"] = 3] = "GRID";
  PlainGalleryStrategy2[PlainGalleryStrategy2["CUSTOM"] = 4] = "CUSTOM";
})(PlainGalleryStrategy || (PlainGalleryStrategy = {}));
var LoadingType;
(function(LoadingType2) {
  LoadingType2[LoadingType2["STANDARD"] = 1] = "STANDARD";
  LoadingType2[LoadingType2["CIRCULAR"] = 2] = "CIRCULAR";
  LoadingType2[LoadingType2["BARS"] = 3] = "BARS";
  LoadingType2[LoadingType2["DOTS"] = 4] = "DOTS";
  LoadingType2[LoadingType2["CUBE_FLIPPING"] = 5] = "CUBE_FLIPPING";
  LoadingType2[LoadingType2["CIRCLES"] = 6] = "CIRCLES";
  LoadingType2[LoadingType2["EXPLOSING_SQUARES"] = 7] = "EXPLOSING_SQUARES";
})(LoadingType || (LoadingType = {}));
var DEFAULT_PREVIEW_SIZE = {
  height: "50px",
  width: "auto"
};
var DEFAULT_LAYOUT = new LineLayout(DEFAULT_PREVIEW_SIZE, {
  length: -1,
  wrap: false
}, "flex-start");
var DEFAULT_PLAIN_CONFIG = {
  strategy: PlainGalleryStrategy.ROW,
  layout: DEFAULT_LAYOUT,
  advanced: {
    aTags: false,
    additionalBackground: "50% 50%/cover"
  }
};
var DEFAULT_LOADING = {
  enable: true,
  type: LoadingType.STANDARD
};
var DEFAULT_DESCRIPTION_STYLE = {
  bgColor: "rgba(0, 0, 0, .5)",
  textColor: "white",
  marginTop: "0px",
  marginBottom: "0px",
  marginLeft: "0px",
  marginRight: "0px"
};
var DEFAULT_DESCRIPTION = {
  strategy: DescriptionStrategy.ALWAYS_VISIBLE,
  imageText: "Image ",
  numberSeparator: "/",
  beforeTextDescription: " - ",
  style: DEFAULT_DESCRIPTION_STYLE
};
var DEFAULT_CAROUSEL_DESCRIPTION = {
  strategy: DescriptionStrategy.ALWAYS_HIDDEN,
  imageText: "Image ",
  numberSeparator: "/",
  beforeTextDescription: " - ",
  style: DEFAULT_DESCRIPTION_STYLE
};
var DEFAULT_CURRENT_IMAGE_CONFIG = {
  navigateOnClick: true,
  loadingConfig: DEFAULT_LOADING,
  description: DEFAULT_DESCRIPTION,
  downloadable: false,
  invertSwipe: false
};
var DEFAULT_CAROUSEL_IMAGE_CONFIG = {
  description: DEFAULT_CAROUSEL_DESCRIPTION,
  invertSwipe: false
};
var DEFAULT_CURRENT_CAROUSEL_CONFIG = {
  maxWidth: "100%",
  maxHeight: "400px",
  showArrows: true,
  objectFit: "cover",
  keyboardEnable: true,
  modalGalleryEnable: false
};
var DEFAULT_CURRENT_CAROUSEL_PLAY = {
  autoPlay: true,
  interval: 5e3,
  pauseOnHover: true
};
var DEFAULT_CAROUSEL_BREAKPOINTS = {
  xSmall: 100,
  small: 100,
  medium: 150,
  large: 200,
  xLarge: 200
};
var DEFAULT_CAROUSEL_PREVIEWS_CONFIG = {
  visible: true,
  number: 4,
  arrows: true,
  clickable: true,
  width: 100 / 4 + "%",
  maxHeight: "200px",
  breakpoints: DEFAULT_CAROUSEL_BREAKPOINTS
};
var DEFAULT_SLIDE_CONFIG = {
  infinite: false,
  playConfig: {
    autoPlay: false,
    interval: 5e3,
    pauseOnHover: true
  },
  sidePreviews: {
    show: true,
    size: {
      width: "100px",
      height: "auto"
    }
  }
};
var DEFAULT_PREVIEW_CONFIG = {
  visible: true,
  number: 3,
  arrows: true,
  clickable: true,
  size: DEFAULT_PREVIEW_SIZE
};
var DEFAULT_CONFIG = Object.freeze({
  slideConfig: DEFAULT_SLIDE_CONFIG,
  accessibilityConfig: KS_DEFAULT_ACCESSIBILITY_CONFIG,
  previewConfig: DEFAULT_PREVIEW_CONFIG,
  buttonsConfig: {
    visible: true,
    strategy: ButtonsStrategy.DEFAULT
  },
  dotsConfig: {
    visible: true
  },
  plainGalleryConfig: DEFAULT_PLAIN_CONFIG,
  currentImageConfig: DEFAULT_CURRENT_IMAGE_CONFIG,
  keyboardConfig: void 0,
  // by default nothing, because the library uses default buttons automatically
  carouselConfig: DEFAULT_CURRENT_CAROUSEL_CONFIG,
  carouselImageConfig: DEFAULT_CAROUSEL_IMAGE_CONFIG,
  carouselPreviewsConfig: DEFAULT_CAROUSEL_PREVIEWS_CONFIG,
  carouselPlayConfig: DEFAULT_CURRENT_CAROUSEL_PLAY,
  carouselDotsConfig: {
    visible: true
  },
  carouselSlideInfinite: true,
  enableCloseOutside: true
});
var ConfigService = class _ConfigService {
  constructor() {
    this.configMap = /* @__PURE__ */ new Map();
  }
  getConfig(id) {
    this.initIfNotExists(id);
    return this.configMap.get(id);
  }
  setConfig(id, obj) {
    this.initIfNotExists(id);
    if (!obj) {
      return;
    }
    if (!DEFAULT_CONFIG || !DEFAULT_CONFIG.slideConfig || !DEFAULT_CONFIG.slideConfig.sidePreviews || !DEFAULT_CONFIG.previewConfig || !DEFAULT_CONFIG.previewConfig.size || !DEFAULT_CONFIG.previewConfig.number || !DEFAULT_CONFIG.plainGalleryConfig || !DEFAULT_CONFIG.currentImageConfig || !DEFAULT_CONFIG.currentImageConfig || !DEFAULT_CONFIG.currentImageConfig.description || !DEFAULT_CONFIG.carouselImageConfig || !DEFAULT_CONFIG.carouselImageConfig.description || !DEFAULT_CONFIG.carouselPreviewsConfig || !DEFAULT_CONFIG.carouselPreviewsConfig.breakpoints || !DEFAULT_CAROUSEL_PREVIEWS_CONFIG.number) {
      throw new Error("Internal library error - DEFAULT_CONFIG must be fully initialized!!!");
    }
    const newConfig = Object.assign({}, this.configMap.get(id));
    if (obj.slideConfig) {
      let playConfig;
      let sidePreviews;
      let size;
      if (obj.slideConfig.playConfig) {
        playConfig = Object.assign({}, DEFAULT_CONFIG.slideConfig.playConfig, obj.slideConfig.playConfig);
      } else {
        playConfig = DEFAULT_CONFIG.slideConfig.playConfig;
      }
      if (obj.slideConfig.sidePreviews) {
        if (obj.slideConfig.sidePreviews.size) {
          size = Object.assign({}, DEFAULT_CONFIG.slideConfig.sidePreviews.size, obj.slideConfig.sidePreviews.size);
        } else {
          size = DEFAULT_CONFIG.slideConfig.sidePreviews.size;
        }
        sidePreviews = Object.assign({}, DEFAULT_CONFIG.slideConfig.sidePreviews, obj.slideConfig.sidePreviews);
      } else {
        sidePreviews = DEFAULT_CONFIG.slideConfig.sidePreviews;
        size = DEFAULT_CONFIG.slideConfig.sidePreviews.size;
      }
      const newSlideConfig = Object.assign({}, DEFAULT_CONFIG.slideConfig, obj.slideConfig);
      newSlideConfig.playConfig = playConfig;
      newSlideConfig.sidePreviews = sidePreviews;
      newSlideConfig.sidePreviews.size = size;
      newConfig.slideConfig = newSlideConfig;
    }
    if (obj.accessibilityConfig) {
      newConfig.accessibilityConfig = Object.assign({}, DEFAULT_CONFIG.accessibilityConfig, obj.accessibilityConfig);
    }
    if (obj.previewConfig) {
      let size;
      let num;
      if (obj.previewConfig.size) {
        size = Object.assign({}, DEFAULT_CONFIG.previewConfig.size, obj.previewConfig.size);
      } else {
        size = DEFAULT_CONFIG.previewConfig.size;
      }
      if (obj.previewConfig.number) {
        if (obj.previewConfig.number <= 0) {
          num = DEFAULT_CONFIG.previewConfig.number;
        } else {
          num = obj.previewConfig.number;
        }
      } else {
        num = DEFAULT_CONFIG.previewConfig.number;
      }
      const newPreviewConfig = Object.assign({}, DEFAULT_CONFIG.previewConfig, obj.previewConfig);
      newPreviewConfig.size = size;
      newPreviewConfig.number = num;
      newConfig.previewConfig = newPreviewConfig;
    }
    if (obj.buttonsConfig) {
      newConfig.buttonsConfig = Object.assign({}, DEFAULT_CONFIG.buttonsConfig, obj.buttonsConfig);
    }
    if (obj.dotsConfig) {
      newConfig.dotsConfig = Object.assign({}, DEFAULT_CONFIG.dotsConfig, obj.dotsConfig);
    }
    if (obj.plainGalleryConfig) {
      let advanced;
      let layout;
      if (obj.plainGalleryConfig.advanced) {
        advanced = Object.assign({}, DEFAULT_CONFIG.plainGalleryConfig.advanced, obj.plainGalleryConfig.advanced);
      } else {
        advanced = DEFAULT_CONFIG.plainGalleryConfig.advanced;
      }
      if (obj.plainGalleryConfig.layout) {
        layout = obj.plainGalleryConfig.layout;
      } else {
        layout = DEFAULT_CONFIG.plainGalleryConfig.layout;
      }
      const newPlainGalleryConfig = Object.assign({}, DEFAULT_CONFIG.plainGalleryConfig, obj.plainGalleryConfig);
      newPlainGalleryConfig.layout = layout;
      newPlainGalleryConfig.advanced = advanced;
      newConfig.plainGalleryConfig = initPlainGalleryConfig(newPlainGalleryConfig);
    }
    if (obj.currentImageConfig) {
      let loading;
      let description;
      let descriptionStyle;
      if (obj.currentImageConfig.loadingConfig) {
        loading = Object.assign({}, DEFAULT_CONFIG.currentImageConfig.loadingConfig, obj.currentImageConfig.loadingConfig);
      } else {
        loading = DEFAULT_CONFIG.currentImageConfig.loadingConfig;
      }
      if (obj.currentImageConfig.description) {
        description = Object.assign({}, DEFAULT_CONFIG.currentImageConfig.description, obj.currentImageConfig.description);
        if (obj.currentImageConfig.description.style) {
          descriptionStyle = Object.assign({}, DEFAULT_CONFIG.currentImageConfig.description.style, obj.currentImageConfig.description.style);
        } else {
          descriptionStyle = DEFAULT_CONFIG.currentImageConfig.description.style;
        }
      } else {
        description = DEFAULT_CONFIG.currentImageConfig.description;
        descriptionStyle = DEFAULT_CONFIG.currentImageConfig.description.style;
      }
      const newCurrentImageConfig = Object.assign({}, DEFAULT_CONFIG.currentImageConfig, obj.currentImageConfig);
      newCurrentImageConfig.loadingConfig = loading;
      newCurrentImageConfig.description = description;
      newCurrentImageConfig.description.style = descriptionStyle;
      newConfig.currentImageConfig = newCurrentImageConfig;
    }
    if (obj.keyboardConfig) {
      newConfig.keyboardConfig = Object.assign({}, DEFAULT_CONFIG.keyboardConfig, obj.keyboardConfig);
    }
    if (obj.carouselConfig) {
      newConfig.carouselConfig = Object.assign({}, DEFAULT_CONFIG.carouselConfig, obj.carouselConfig);
    }
    if (obj.carouselImageConfig) {
      let description;
      let descriptionStyle;
      if (obj.carouselImageConfig.description) {
        description = Object.assign({}, DEFAULT_CONFIG.carouselImageConfig.description, obj.carouselImageConfig.description);
        if (obj.carouselImageConfig.description.style) {
          descriptionStyle = Object.assign({}, DEFAULT_CONFIG.carouselImageConfig.description.style, obj.carouselImageConfig.description.style);
        } else {
          descriptionStyle = DEFAULT_CONFIG.carouselImageConfig.description.style;
        }
      } else {
        description = DEFAULT_CONFIG.carouselImageConfig.description;
        descriptionStyle = DEFAULT_CONFIG.carouselImageConfig.description.style;
      }
      const newCarouselImageConfig = Object.assign({}, DEFAULT_CONFIG.carouselImageConfig, obj.carouselImageConfig);
      newCarouselImageConfig.description = description;
      newCarouselImageConfig.description.style = descriptionStyle;
      newConfig.carouselImageConfig = newCarouselImageConfig;
    }
    if (obj.carouselPlayConfig) {
      if (obj.carouselPlayConfig.interval <= 0) {
        throw new Error(`Carousel's interval must be a number >= 0`);
      }
      newConfig.carouselPlayConfig = Object.assign({}, DEFAULT_CONFIG.carouselPlayConfig, obj.carouselPlayConfig);
    }
    if (obj.carouselPreviewsConfig) {
      let num;
      let breakpoints;
      if (!obj.carouselPreviewsConfig.number || obj.carouselPreviewsConfig.number <= 0) {
        num = DEFAULT_CAROUSEL_PREVIEWS_CONFIG.number;
      } else {
        num = obj.carouselPreviewsConfig.number;
      }
      if (obj.carouselPreviewsConfig.breakpoints) {
        breakpoints = Object.assign({}, DEFAULT_CONFIG.carouselPreviewsConfig.breakpoints, obj.carouselPreviewsConfig.breakpoints);
      } else {
        breakpoints = DEFAULT_CONFIG.carouselPreviewsConfig.breakpoints;
      }
      newConfig.carouselPreviewsConfig = Object.assign({}, DEFAULT_CONFIG.carouselPreviewsConfig, obj.carouselPreviewsConfig);
      newConfig.carouselPreviewsConfig.number = num;
      newConfig.carouselPreviewsConfig.breakpoints = breakpoints;
      newConfig.carouselPreviewsConfig.width = 100 / newConfig.carouselPreviewsConfig.number + "%";
    }
    if (obj.carouselDotsConfig) {
      newConfig.carouselDotsConfig = Object.assign({}, DEFAULT_CONFIG.carouselDotsConfig, obj.carouselDotsConfig);
    }
    if (obj.carouselSlideInfinite === void 0) {
      newConfig.carouselSlideInfinite = DEFAULT_CONFIG.carouselSlideInfinite;
    } else {
      newConfig.carouselSlideInfinite = obj.carouselSlideInfinite;
    }
    if (obj.enableCloseOutside === void 0) {
      newConfig.enableCloseOutside = DEFAULT_CONFIG.enableCloseOutside;
    } else {
      newConfig.enableCloseOutside = obj.enableCloseOutside;
    }
    this.configMap.set(id, newConfig);
  }
  initIfNotExists(id) {
    if (!this.configMap.has(id)) {
      this.configMap.set(id, DEFAULT_CONFIG);
    }
  }
  static {
    this.ɵfac = function ConfigService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfigService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConfigService,
      factory: _ConfigService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function initPlainGalleryConfig(plainGalleryConfig) {
  const newPlayGalleryConfig = Object.assign({}, DEFAULT_CONFIG.plainGalleryConfig, plainGalleryConfig);
  if (newPlayGalleryConfig.layout instanceof LineLayout) {
    if (newPlayGalleryConfig.strategy !== PlainGalleryStrategy.ROW && newPlayGalleryConfig.strategy !== PlainGalleryStrategy.COLUMN) {
      throw new Error("LineLayout requires either ROW or COLUMN strategy");
    }
    if (!newPlayGalleryConfig.layout || !newPlayGalleryConfig.layout.breakConfig) {
      throw new Error("Both layout and breakConfig must be valid");
    }
  }
  if (newPlayGalleryConfig.layout instanceof GridLayout) {
    if (newPlayGalleryConfig.strategy !== PlainGalleryStrategy.GRID) {
      throw new Error("GridLayout requires GRID strategy");
    }
    if (!newPlayGalleryConfig.layout || !newPlayGalleryConfig.layout.breakConfig) {
      throw new Error("Both layout and breakConfig must be valid");
    }
    newPlayGalleryConfig.layout.breakConfig.wrap = true;
  }
  return newPlayGalleryConfig;
}
var ModalGalleryRef = class {
  constructor(overlayRef) {
    this.overlayRef = overlayRef;
    this.close = new Subject();
    this.close$ = this.close.asObservable();
    this.show = new Subject();
    this.show$ = this.show.asObservable();
    this.firstImage = new Subject();
    this.firstImage$ = this.firstImage.asObservable();
    this.lastImage = new Subject();
    this.lastImage$ = this.lastImage.asObservable();
    this.hasData = new Subject();
    this.hasData$ = this.hasData.asObservable();
    this.buttonBeforeHook = new Subject();
    this.buttonBeforeHook$ = this.buttonBeforeHook.asObservable();
    this.buttonAfterHook = new Subject();
    this.buttonAfterHook$ = this.buttonAfterHook.asObservable();
  }
  /**
   * Close modal dialog, disposing the Overlay.
   */
  closeModal() {
    this.overlayRef.dispose();
  }
  /**
   * Method to emit close event.
   * @param event ImageModalEvent event payload
   */
  emitClose(event) {
    this.close.next(event);
  }
  /**
   * Method to emit show event.
   * @param event ImageModalEvent event payload
   */
  emitShow(event) {
    this.show.next(event);
  }
  /**
   * Method to emit firstImage event.
   * @param event ImageModalEvent event payload
   */
  emitFirstImage(event) {
    this.firstImage.next(event);
  }
  /**
   * Method to emit lastImage event.
   * @param event ImageModalEvent event payload
   */
  emitLastImage(event) {
    this.lastImage.next(event);
  }
  /**
   * Method to emit hasData event.
   * @param event ImageModalEvent event payload
   */
  emitHasData(event) {
    this.hasData.next(event);
  }
  /**
   * Method to emit buttonBeforeHook event.
   * @param event ImageModalEvent event payload
   */
  emitButtonBeforeHook(event) {
    this.buttonBeforeHook.next(event);
  }
  /**
   * Method to emit buttonAfterHook event.
   * @param event ImageModalEvent event payload
   */
  emitButtonAfterHook(event) {
    this.buttonAfterHook.next(event);
  }
};
var DEFAULT_DIALOG_CONFIG = {
  hasBackdrop: true,
  backdropClass: "ks-modal-gallery-backdrop",
  panelClass: "ks-modal-gallery-panel"
};
var ModalGalleryService = class _ModalGalleryService {
  constructor(overlay, configService) {
    this.overlay = overlay;
    this.configService = configService;
    this.updateImages = new Subject();
    this.updateImages$ = this.updateImages.asObservable();
    this.triggerAttachToOverlay = new EventEmitter();
  }
  /**
   * Method to open modal gallery passing the configuration
   * @param config ModalGalleryConfig that contains: id, array of images, current image and optionally the configuration object
   * @return ModalGalleryRef | undefined is the object used to listen for events.
   */
  open(config) {
    const overlayRef = this.createOverlay();
    this.dialogRef = new ModalGalleryRef(overlayRef);
    this.triggerAttachToOverlay.emit({
      overlayRef,
      config,
      dialogRef: this.dialogRef
    });
    overlayRef.backdropClick().subscribe(() => {
      if (this.dialogRef) {
        this.dialogRef.closeModal();
      }
    });
    return this.dialogRef;
  }
  /**
   * Method to close a modal gallery previously opened.
   * @param id Unique identifier of the modal gallery
   * @param clickOutside boolean is true if closed clicking on the modal backdrop, false otherwise.
   */
  close(id, clickOutside) {
    const libConfig = this.configService.getConfig(id);
    if (clickOutside) {
      if (this.dialogRef && libConfig && libConfig.enableCloseOutside) {
        this.dialogRef.closeModal();
      }
    } else {
      if (this.dialogRef) {
        this.dialogRef.closeModal();
      }
    }
  }
  /**
   * Method to update images array.
   * @param images Image[] updated array of images
   */
  updateModalImages(images) {
    this.updateImages.next(images);
  }
  /**
   * Method to emit close event.
   * @param event ImageModalEvent is the event payload
   */
  emitClose(event) {
    if (!this.dialogRef) {
      return;
    }
    this.dialogRef.emitClose(event);
  }
  /**
   * Method to emit show event.
   * @param event ImageModalEvent is the event payload
   */
  emitShow(event) {
    if (!this.dialogRef) {
      return;
    }
    this.dialogRef.emitShow(event);
  }
  /**
   * Method to emit firstImage event.
   * @param event ImageModalEvent is the event payload
   */
  emitFirstImage(event) {
    if (!this.dialogRef) {
      return;
    }
    this.dialogRef.emitFirstImage(event);
  }
  /**
   * Method to emit lastImage event.
   * @param event ImageModalEvent is the event payload
   */
  emitLastImage(event) {
    if (!this.dialogRef) {
      return;
    }
    this.dialogRef.emitLastImage(event);
  }
  /**
   * Method to emit hasData event.
   * @param event ImageModalEvent is the event payload
   */
  emitHasData(event) {
    if (!this.dialogRef) {
      return;
    }
    this.dialogRef.emitHasData(event);
  }
  /**
   * Method to emit buttonBeforeHook event.
   * @param event ButtonEvent is the event payload
   */
  emitButtonBeforeHook(event) {
    if (!this.dialogRef) {
      return;
    }
    this.dialogRef.emitButtonBeforeHook(event);
  }
  /**
   * Method to emit buttonAfterHook event.
   * @param event ButtonEvent is the event payload
   */
  emitButtonAfterHook(event) {
    if (!this.dialogRef) {
      return;
    }
    this.dialogRef.emitButtonAfterHook(event);
  }
  /**
   * Private method to create an Overlay using Angular CDK APIs
   * @private
   */
  createOverlay() {
    const overlayConfig = this.getOverlayConfig();
    return this.overlay.create(overlayConfig);
  }
  /**
   * Private method to create an OverlayConfig instance
   * @private
   */
  getOverlayConfig() {
    const positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();
    return new OverlayConfig({
      hasBackdrop: DEFAULT_DIALOG_CONFIG.hasBackdrop,
      backdropClass: DEFAULT_DIALOG_CONFIG.backdropClass,
      panelClass: DEFAULT_DIALOG_CONFIG.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });
  }
  static {
    this.ɵfac = function ModalGalleryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ModalGalleryService)(ɵɵinject(Overlay), ɵɵinject(ConfigService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ModalGalleryService,
      factory: _ModalGalleryService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalGalleryService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Overlay
  }, {
    type: ConfigService
  }], null);
})();
var SizeDirective = class _SizeDirective {
  constructor(renderer, el) {
    this.renderer = renderer;
    this.el = el;
  }
  /**
   * Method ´ngOnInit´ to apply the style of this directive.
   * This is an Angular lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   */
  ngOnInit() {
    this.applyStyle();
  }
  /**
   * Method ´ngOnChanges´ to apply the style of this directive.
   * This is an Angular lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called when any data-bound property of a directive changes!!!
   */
  ngOnChanges() {
    this.applyStyle();
  }
  /**
   * Private method to change both width and height of an element.
   */
  applyStyle() {
    if (!this.sizeConfig) {
      return;
    }
    if (this.sizeConfig.width) {
      this.renderer.setStyle(this.el.nativeElement, "width", this.sizeConfig.width);
    }
    if (this.sizeConfig.height) {
      this.renderer.setStyle(this.el.nativeElement, "height", this.sizeConfig.height);
    }
  }
  static {
    this.ɵfac = function SizeDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SizeDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _SizeDirective,
      selectors: [["", "ksSize", ""]],
      inputs: {
        sizeConfig: "sizeConfig"
      },
      standalone: false,
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SizeDirective, [{
    type: Directive,
    args: [{
      selector: "[ksSize]",
      standalone: false
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    sizeConfig: [{
      type: Input
    }]
  });
})();
var FallbackImageDirective = class _FallbackImageDirective {
  constructor(renderer, el) {
    this.renderer = renderer;
    this.el = el;
    this.fallbackApplied = new EventEmitter();
  }
  onError() {
    if (!this.fallbackImg) {
      this.fallbackApplied.emit(false);
      return;
    }
    this.renderer.setAttribute(this.el.nativeElement, "src", this.fallbackImg.toString());
    this.fallbackApplied.emit(true);
  }
  static {
    this.ɵfac = function FallbackImageDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FallbackImageDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _FallbackImageDirective,
      selectors: [["", "ksFallbackImage", ""]],
      hostBindings: function FallbackImageDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("error", function FallbackImageDirective_error_HostBindingHandler() {
            return ctx.onError();
          });
        }
      },
      inputs: {
        fallbackImg: "fallbackImg"
      },
      outputs: {
        fallbackApplied: "fallbackApplied"
      },
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FallbackImageDirective, [{
    type: Directive,
    args: [{
      selector: "[ksFallbackImage]",
      standalone: false
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    fallbackImg: [{
      type: Input
    }],
    fallbackApplied: [{
      type: Output
    }],
    onError: [{
      type: HostListener,
      args: ["error"]
    }]
  });
})();
var DEFAULT_MAX_HEIGHT = "200px";
var CarouselPreviewsComponent = class _CarouselPreviewsComponent extends AccessibleComponent {
  constructor(ref, breakpointObserver, sanitizer, configService) {
    super();
    this.ref = ref;
    this.breakpointObserver = breakpointObserver;
    this.sanitizer = sanitizer;
    this.configService = configService;
    this.hostMaxWidth = "100%";
    this.ariaLabel = `Carousel previews`;
    this.clickPreview = new EventEmitter();
    this.clickAction = Action.CLICK;
    this.keyboardAction = Action.KEYBOARD;
    this.previews = [];
    this.previewMaxHeight = DEFAULT_MAX_HEIGHT;
    this.breakpointSubscription = breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge]).subscribe((result) => {
      if (!this.previewConfig || !this.previewConfig.breakpoints) {
        return;
      }
      if (result.breakpoints[Breakpoints.XSmall]) {
        this.updateHeight(this.previewConfig.breakpoints.xSmall);
      } else if (result.breakpoints[Breakpoints.Small]) {
        this.updateHeight(this.previewConfig.breakpoints.small);
      } else if (result.breakpoints[Breakpoints.Medium]) {
        this.updateHeight(this.previewConfig.breakpoints.medium);
      } else if (result.breakpoints[Breakpoints.Large]) {
        this.updateHeight(this.previewConfig.breakpoints.large);
      } else if (result.breakpoints[Breakpoints.XLarge]) {
        this.updateHeight(this.previewConfig.breakpoints.xLarge);
      }
    });
  }
  /**
   * Method to update the height of previews, passing the desired height as input.
   * @param configBreakpointHeight is a number that represent the desired height to set.
   */
  updateHeight(configBreakpointHeight) {
    if (this.previewConfig && this.previewConfig.maxHeight) {
      const heightNum = +this.previewConfig.maxHeight.replace("/px/g", "").replace("/%/g", "");
      this.previewMaxHeight = Math.min(configBreakpointHeight, heightNum) + "px";
    } else {
      const heightNum = +DEFAULT_MAX_HEIGHT.replace("/px/g", "").replace("/%/g", "");
      this.previewMaxHeight = Math.min(configBreakpointHeight, heightNum) + "px";
    }
    this.ref.markForCheck();
  }
  /**
   * Method ´ngOnInit´ to build `configPreview` applying a default value and also to
   * init the `previews` array.
   * This is an angular lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   */
  ngOnInit() {
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig) {
      throw new Error("Internal library error - libConfig must be defined");
    }
    this.carouselConfig = libConfig.carouselConfig;
    this.previewConfig = libConfig.carouselPreviewsConfig;
    this.accessibilityConfig = libConfig.accessibilityConfig;
    if (!this.previewConfig || !this.previewConfig.maxHeight || !this.previewConfig.breakpoints) {
      throw new Error("Internal library error - previewConfig must be defined");
    }
    if (this.carouselConfig && this.carouselConfig.maxWidth !== "100%") {
      this.hostMaxWidth = this.carouselConfig.maxWidth;
    }
    this.previewMaxHeight = this.previewConfig.maxHeight;
    this.initPreviews(this.currentImage, this.images);
    const isXsmallScreen = this.breakpointObserver.isMatched(Breakpoints.XSmall);
    const isSmallScreen = this.breakpointObserver.isMatched(Breakpoints.Small);
    const isMediumScreen = this.breakpointObserver.isMatched(Breakpoints.Medium);
    const isLargeScreen = this.breakpointObserver.isMatched(Breakpoints.Large);
    const isxLargeScreen = this.breakpointObserver.isMatched(Breakpoints.XLarge);
    if (isXsmallScreen) {
      this.updateHeight(this.previewConfig.breakpoints.xSmall);
    } else if (isSmallScreen) {
      this.updateHeight(this.previewConfig.breakpoints.small);
    } else if (isMediumScreen) {
      this.updateHeight(this.previewConfig.breakpoints.medium);
    } else if (isLargeScreen) {
      this.updateHeight(this.previewConfig.breakpoints.large);
    } else if (isxLargeScreen) {
      this.updateHeight(this.previewConfig.breakpoints.xLarge);
    }
  }
  /**
   * Method to check if an image is active (i.e. a preview image).
   * @param InternalLibImage preview is an image to check if it's active or not
   * @returns boolean true if is active, false otherwise
   */
  isActive(preview) {
    if (!preview || !this.currentImage) {
      return false;
    }
    return preview.id === this.currentImage.id;
  }
  /**
   * Method ´ngOnChanges´ to update `previews` array.
   * Also, both `start` and `end` local variables will be updated accordingly.
   * This is an angular lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called when any data-bound property of a directive changes!!!
   */
  ngOnChanges(changes) {
    const simpleChange = changes.currentImage;
    if (!simpleChange) {
      return;
    }
    const prev = simpleChange.previousValue;
    const current = simpleChange.currentValue;
    if (current && changes.images && changes.images.previousValue && changes.images.currentValue) {
      this.initPreviews(current, changes.images.currentValue);
    }
    if (prev && current && prev.id !== current.id) {
      let prevIndex;
      let currentIndex;
      try {
        prevIndex = getIndex(prev, this.images);
        currentIndex = getIndex(current, this.images);
      } catch (err) {
        console.error("Cannot get previous and current image indexes in previews");
        throw err;
      }
      const calc = Math.floor((this.end - this.start) / 2) + this.start;
      if (prevIndex === this.images.length - 1 && currentIndex === 0) {
        this.setBeginningIndexesPreviews();
        this.previews = this.images.filter((img, i) => i >= this.start && i < this.end);
        return;
      }
      if (prevIndex === 0 && currentIndex === this.images.length - 1) {
        this.setEndIndexesPreviews();
        this.previews = this.images.filter((img, i) => i >= this.start && i < this.end);
        return;
      }
      if (this.previewConfig && this.previewConfig.number % 2 === 0) {
        if (calc > currentIndex) {
          this.previous();
        } else {
          this.next();
        }
      } else {
        if (calc > currentIndex) {
          this.previous();
        }
        if (calc < currentIndex) {
          this.next();
        }
      }
    }
  }
  /**
   * Method called by events from both keyboard and mouse on a preview.
   * This will trigger the `clickpreview` output with the input preview as its payload.
   * @param InternalLibImage preview that triggered this method
   * @param KeyboardEvent | MouseEvent event payload
   * @param Action that triggered this event (Action.NORMAL by default)
   */
  onImageEvent(preview, event, action = Action.NORMAL) {
    if (!this.previewConfig || !this.previewConfig.clickable) {
      return;
    }
    const clickedImageIndex = this.images.indexOf(preview);
    const result = super.handleImageEvent(event);
    if (result === NEXT) {
      this.clickPreview.emit({
        action,
        result: clickedImageIndex
      });
    } else if (result === PREV) {
      this.clickPreview.emit({
        action,
        result: clickedImageIndex
      });
    }
  }
  /**
   * Method called by events from both keyboard and mouse on a navigation arrow.
   * @param string direction of the navigation that can be either 'next' or 'prev'
   * @param KeyboardEvent | MouseEvent event payload
   */
  onNavigationEvent(direction, event) {
    const result = super.handleNavigationEvent(direction, event);
    if (result === NEXT) {
      this.next();
    } else if (result === PREV) {
      this.previous();
    }
  }
  /**
   * Method to get aria-label text for a preview image.
   * @param Image is the preview
   */
  getAriaLabel(preview) {
    if (!preview.plain) {
      return preview.modal.ariaLabel || "";
    }
    return preview.plain.ariaLabel || preview.modal.ariaLabel || "";
  }
  /**
   * Method to get title text for a preview image.
   * @param Image is the preview
   */
  getTitle(preview) {
    if (!preview.plain) {
      return preview.modal.title || "";
    }
    return preview.plain.title || preview.modal.title || "";
  }
  /**
   * Method to get alt text for a preview image.
   * @param Image is the preview
   */
  getAlt(preview) {
    if (!preview.plain) {
      return preview.modal.alt || "";
    }
    return preview.plain.alt || preview.modal.alt || "";
  }
  /**
   * Method used in the template to track ids in ngFor.
   * @param number index of the array
   * @param Image item of the array
   * @returns number the id of the item
   */
  trackById(index, item) {
    return item.id;
  }
  /**
   * Method used in template to sanitize an url when you need legacyIE11Mode.
   * In this way you can set an url as background of a div.
   * @param unsafeStyle is a string or a SafeResourceUrl that represents the url to sanitize.
   * @param unsafeStyleFallback is a string or a SafeResourceUrl that represents the fallback url to sanitize.
   * @returns a SafeStyle object that can be used in template without problems.
   */
  sanitizeUrlBgStyle(unsafeStyle, unsafeStyleFallback) {
    let bg = "url(" + unsafeStyle + ")";
    if (!!unsafeStyleFallback) {
      bg += ", url(" + unsafeStyleFallback + ")";
    }
    return this.sanitizer.bypassSecurityTrustStyle(bg);
  }
  /**
   * Method to cleanup resources. In fact, it cleans breakpointSubscription.
   * This is an angular lifecycle hook that is called when this component is destroyed.
   */
  ngOnDestroy() {
    if (this.breakpointSubscription) {
      this.breakpointSubscription.unsubscribe();
    }
  }
  /**
   * Private method to init previews based on the currentImage and the full array of images.
   * The current image in mandatory to show always the current preview (as highlighted).
   * @param InternalLibImage currentImage to decide how to show previews, because I always want to see the current image as highlighted
   * @param InternalLibImage[] images is the array of all images.
   */
  initPreviews(currentImage, images) {
    let index;
    try {
      index = getIndex(currentImage, images);
    } catch (err) {
      throw err;
    }
    switch (index) {
      case 0:
        this.setBeginningIndexesPreviews();
        break;
      case images.length - 1:
        this.setEndIndexesPreviews();
        break;
    }
    this.previews = images.filter((img, i) => i >= this.start && i < this.end);
  }
  /**
   * Private method to init both `start` and `end` to the beginning.
   */
  setBeginningIndexesPreviews() {
    if (!this.previewConfig || this.previewConfig.number === void 0) {
      throw new Error("Internal library error - previewConfig and number must be defined");
    }
    this.start = 0;
    this.end = Math.min(this.previewConfig.number, this.images.length);
  }
  /**
   * Private method to init both `start` and `end` to the end.
   */
  setEndIndexesPreviews() {
    if (!this.previewConfig || this.previewConfig.number === void 0) {
      throw new Error("Internal library error - previewConfig and number must be defined");
    }
    this.start = this.images.length - 1 - (this.previewConfig.number - 1);
    this.end = this.images.length;
  }
  /**
   * Private method to update the visible previews navigating to the right (next).
   */
  next() {
    if (this.isPreventSliding(this.images.length - 1)) {
      return;
    }
    if (this.end === this.images.length) {
      return;
    }
    this.start++;
    this.end = Math.min(this.end + 1, this.images.length);
    this.previews = this.images.filter((img, i) => i >= this.start && i < this.end);
  }
  /**
   * Private method to update the visible previews navigating to the left (previous).
   */
  previous() {
    if (this.isPreventSliding(0)) {
      return;
    }
    if (this.start === 0) {
      return;
    }
    this.start = Math.max(this.start - 1, 0);
    this.end = Math.min(this.end - 1, this.images.length);
    this.previews = this.images.filter((img, i) => i >= this.start && i < this.end);
  }
  /**
   * Private method to block/permit sliding between previews.
   * @param number boundaryIndex is the first or the last index of `images` input array
   * @returns boolean if true block sliding, otherwise not
   */
  isPreventSliding(boundaryIndex) {
    return getIndex(this.currentImage, this.images) === boundaryIndex;
  }
  static {
    this.ɵfac = function CarouselPreviewsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CarouselPreviewsComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(BreakpointObserver), ɵɵdirectiveInject(DomSanitizer), ɵɵdirectiveInject(ConfigService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CarouselPreviewsComponent,
      selectors: [["ks-carousel-previews"]],
      hostVars: 3,
      hostBindings: function CarouselPreviewsComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("aria-label", ctx.ariaLabel);
          ɵɵstyleProp("max-width", ctx.hostMaxWidth);
        }
      },
      inputs: {
        id: "id",
        currentImage: "currentImage",
        images: "images"
      },
      outputs: {
        clickPreview: "clickPreview"
      },
      standalone: false,
      features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
      decls: 1,
      vars: 1,
      consts: [["class", "previews-container", 3, "title", 4, "ngIf"], [1, "previews-container", 3, "title"], ["role", "button", 1, "nav-left", 3, "click", "keyup", "tabIndex"], ["aria-hidden", "true", 3, "title"], [1, "preview-inner-container"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "button", 1, "nav-right", 3, "click", "keyup", "tabIndex"], ["ksFallbackImage", "", "ksSize", "", "role", "img", 3, "loading", "class", "src", "fallbackImg", "sizeConfig", "title", "alt", "tabIndex", "click", "keyup", 4, "ngIf"], ["ksFallbackImage", "", "ksSize", "", "role", "img", 3, "click", "keyup", "loading", "src", "fallbackImg", "sizeConfig", "title", "alt", "tabIndex"]],
      template: function CarouselPreviewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CarouselPreviewsComponent_nav_0_Template, 7, 16, "nav", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.previewConfig == null ? null : ctx.previewConfig.visible);
        }
      },
      dependencies: [NgForOf, NgIf, SizeDirective, FallbackImageDirective],
      styles: ["[_nghost-%COMP%]{position:relative;margin-top:3px;margin-bottom:3px;width:100%}.previews-container[_ngcontent-%COMP%]{align-items:center;animation:fadein-semi-visible08 .8s;display:flex;flex-direction:row;justify-content:center;margin-bottom:0}.previews-container[_ngcontent-%COMP%] > .preview-inner-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;flex-wrap:nowrap;width:100%}.previews-container[_ngcontent-%COMP%] > .preview-inner-container[_ngcontent-%COMP%] > .preview-image[_ngcontent-%COMP%]{cursor:pointer;object-fit:cover}.previews-container[_ngcontent-%COMP%] > .preview-inner-container[_ngcontent-%COMP%] > .preview-image.unclickable[_ngcontent-%COMP%]{cursor:not-allowed}.previews-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%], .previews-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%], .previews-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]{position:absolute;top:calc(50% - 7px);color:#919191;z-index:1000;cursor:pointer;transition:all .5s}.previews-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]:hover, .previews-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]:hover, .previews-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.previews-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]{margin-right:10px;left:10px}.previews-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%] > .left-arrow-preview-image[_ngcontent-%COMP%]{opacity:1}.previews-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]{margin-left:10px;right:10px}.previews-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%] > .right-arrow-preview-image[_ngcontent-%COMP%]{opacity:1}", ".arrow-preview-image[_ngcontent-%COMP%], .right-arrow-preview-image[_ngcontent-%COMP%], .left-arrow-preview-image[_ngcontent-%COMP%], .empty-arrow-preview-image[_ngcontent-%COMP%]{width:15px;height:15px;opacity:.5}.empty-arrow-preview-image[_ngcontent-%COMP%]{background:#000;opacity:0}.left-arrow-preview-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjUgICBjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);background-size:15px;transition:all .5s}.left-arrow-preview-image[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.right-arrow-preview-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjUgICBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXogICAiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);background-size:15px;transition:all .5s}.right-arrow-preview-image[_ngcontent-%COMP%]:hover{transform:scale(1.2)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselPreviewsComponent, [{
    type: Component,
    args: [{
      selector: "ks-carousel-previews",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<nav *ngIf="previewConfig?.visible"
     class="previews-container"
     [attr.aria-label]="accessibilityConfig?.carouselPreviewsContainerAriaLabel"
     [title]="accessibilityConfig?.carouselPreviewsContainerTitle">

  <a class="nav-left"
     [attr.aria-label]="accessibilityConfig?.carouselPreviewScrollPrevAriaLabel"
     [tabIndex]="previewConfig?.arrows && start > 0 ? 0 : -1" role="button"
     (click)="onNavigationEvent('left', $event)" (keyup)="onNavigationEvent('left', $event)">
    <div class="inside {{previewConfig?.arrows && start > 0 ? 'left-arrow-preview-image' : 'empty-arrow-preview-image'}}"
         aria-hidden="true"
         [title]="accessibilityConfig?.carouselPreviewScrollPrevTitle"></div>
  </a>

  <div class="preview-inner-container">
    <ng-container *ngFor="let preview of previews; trackBy: trackById; let index = index">
      <img *ngIf="preview?.modal?.img"
           [loading]="preview.loading"
           [attr.fetchpriority]="preview.fetchpriority"
           class="inside preview-image{{isActive(preview) ? ' active' : ''}}{{!previewConfig?.clickable ? ' unclickable' : ''}}"
           [src]="preview.plain?.img ? preview.plain?.img : preview.modal.img"
           ksFallbackImage [fallbackImg]="preview.plain?.fallbackImg ? preview.plain?.fallbackImg : preview.modal.fallbackImg"
           ksSize [sizeConfig]="{width: previewConfig?.width!,
                                 height: previewMaxHeight}"
           [attr.aria-label]="getAriaLabel(preview)"
           [title]="getTitle(preview)"
           alt="{{getAlt(preview)}}"
           [tabIndex]="0" role="img"
           (click)="onImageEvent(preview, $event, clickAction)" (keyup)="onImageEvent(preview, $event, keyboardAction)"/>
    </ng-container>
  </div>

  <a class="nav-right"
     [attr.aria-label]="accessibilityConfig?.carouselPreviewScrollNextAriaLabel"
     [tabIndex]="previewConfig?.arrows && end < images.length ? 0 : -1" role="button"
     (click)="onNavigationEvent('right', $event)" (keyup)="onNavigationEvent('right', $event)">
    <div class="inside {{previewConfig?.arrows && end < images.length ? 'right-arrow-preview-image' : 'empty-arrow-preview-image'}}"
         aria-hidden="true"
         [title]="accessibilityConfig?.carouselPreviewScrollNextTitle"></div>
  </a>

</nav>
`,
      styles: [":host{position:relative;margin-top:3px;margin-bottom:3px;width:100%}.previews-container{align-items:center;animation:fadein-semi-visible08 .8s;display:flex;flex-direction:row;justify-content:center;margin-bottom:0}.previews-container>.preview-inner-container{display:flex;flex-direction:row;justify-content:center;align-items:center;flex-wrap:nowrap;width:100%}.previews-container>.preview-inner-container>.preview-image{cursor:pointer;object-fit:cover}.previews-container>.preview-inner-container>.preview-image.unclickable{cursor:not-allowed}.previews-container .nav,.previews-container>.nav-right,.previews-container>.nav-left{position:absolute;top:calc(50% - 7px);color:#919191;z-index:1000;cursor:pointer;transition:all .5s}.previews-container .nav:hover,.previews-container>.nav-right:hover,.previews-container>.nav-left:hover{transform:scale(1.1)}.previews-container>.nav-left{margin-right:10px;left:10px}.previews-container>.nav-left>.left-arrow-preview-image{opacity:1}.previews-container>.nav-right{margin-left:10px;right:10px}.previews-container>.nav-right>.right-arrow-preview-image{opacity:1}\n", ".arrow-preview-image,.right-arrow-preview-image,.left-arrow-preview-image,.empty-arrow-preview-image{width:15px;height:15px;opacity:.5}.empty-arrow-preview-image{background:#000;opacity:0}.left-arrow-preview-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjUgICBjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);background-size:15px;transition:all .5s}.left-arrow-preview-image:hover{transform:scale(1.2)}.right-arrow-preview-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjUgICBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXogICAiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);background-size:15px;transition:all .5s}.right-arrow-preview-image:hover{transform:scale(1.2)}\n"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: BreakpointObserver
  }, {
    type: DomSanitizer
  }, {
    type: ConfigService
  }], {
    hostMaxWidth: [{
      type: HostBinding,
      args: ["style.max-width"]
    }],
    ariaLabel: [{
      type: HostBinding,
      args: ["attr.aria-label"]
    }],
    id: [{
      type: Input
    }],
    currentImage: [{
      type: Input
    }],
    images: [{
      type: Input
    }],
    clickPreview: [{
      type: Output
    }]
  });
})();
var DotsComponent = class _DotsComponent extends AccessibleComponent {
  constructor(configService) {
    super();
    this.configService = configService;
    this.clickDot = new EventEmitter();
  }
  /**
   * Method ´ngOnInit´ to build `configDots` applying a default value.
   * This is an angular lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   */
  ngOnInit() {
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig) {
      throw new Error("Internal library error - libConfig must be defined");
    }
    this.accessibilityConfig = libConfig.accessibilityConfig;
    this.configDots = Object.assign({}, this.dotsConfig);
  }
  /**
   * Method ´ngOnChanges´ to change `configDots` if the input dotsConfig is changed.
   * This is an angular lifecycle hook, so its called automatically by Angular itself.
   */
  ngOnChanges(changes) {
    const dotsConfigChanges = changes.dotsConfig;
    if (dotsConfigChanges && dotsConfigChanges.currentValue !== dotsConfigChanges.previousValue) {
      this.configDots = dotsConfigChanges.currentValue;
    }
  }
  /**
   * Method to check if an image is active (i.e. the current image).
   * It checks currentImage and images to prevent errors.
   * @param number index of the image to check if it's active or not
   * @returns boolean true if is active (and input params are valid), false otherwise
   */
  isActive(index) {
    if (!this.currentImage || !this.images || this.images.length === 0) {
      return false;
    }
    let imageIndex;
    try {
      imageIndex = getIndex(this.currentImage, this.images);
    } catch (err) {
      console.error(`Internal error while trying to show the active 'dot'`, err);
      return false;
    }
    return index === imageIndex;
  }
  /**
   * Method called by events from keyboard and mouse.
   * @param number index of the dot
   * @param KeyboardEvent | MouseEvent event payload
   */
  onDotEvent(index, event) {
    const result = super.handleImageEvent(event);
    if (result === NEXT) {
      this.clickDot.emit(index);
    }
  }
  /**
   * Method used in the template to track ids in ngFor.
   * @param number index of the array
   * @param Image item of the array
   * @returns number the id of the item
   */
  trackById(index, item) {
    return item.id;
  }
  static {
    this.ɵfac = function DotsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DotsComponent)(ɵɵdirectiveInject(ConfigService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DotsComponent,
      selectors: [["ks-dots"]],
      inputs: {
        id: "id",
        currentImage: "currentImage",
        images: "images",
        dotsConfig: "dotsConfig"
      },
      outputs: {
        clickDot: "clickDot"
      },
      standalone: false,
      features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
      decls: 2,
      vars: 3,
      consts: [[1, "dots-container", 3, "title"], [4, "ngIf"], ["class", "inside dot", "role", "navigation", 3, "ngClass", "tabIndex", "click", "keyup", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "navigation", 1, "inside", "dot", 3, "click", "keyup", "ngClass", "tabIndex"]],
      template: function DotsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "nav", 0);
          ɵɵtemplate(1, DotsComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("title", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.dotsContainerTitle);
          ɵɵattribute("aria-label", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.dotsContainerAriaLabel);
          ɵɵadvance();
          ɵɵproperty("ngIf", !ctx.dotsConfig || (ctx.dotsConfig == null ? null : ctx.dotsConfig.visible));
        }
      },
      dependencies: [NgClass, NgForOf, NgIf],
      styles: [".dots-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;margin-bottom:30px}.dots-container[_ngcontent-%COMP%] > .dot[_ngcontent-%COMP%]{background:#fff;border-radius:5px;height:10px;margin-left:4px;margin-right:4px;width:10px;cursor:pointer;opacity:.5}.dots-container[_ngcontent-%COMP%] > .dot[_ngcontent-%COMP%]:hover{opacity:.9;transition:all .5s ease;transition-property:opacity}.dots-container[_ngcontent-%COMP%] > .dot.active[_ngcontent-%COMP%]{cursor:pointer;opacity:.9}@keyframes _ngcontent-%COMP%_fadein-semi-visible05{0%{opacity:0}to{opacity:.5}}@keyframes _ngcontent-%COMP%_fadein-semi-visible09{0%{opacity:0}to{opacity:.9}}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DotsComponent, [{
    type: Component,
    args: [{
      selector: "ks-dots",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<nav class="dots-container" [attr.aria-label]="accessibilityConfig?.dotsContainerAriaLabel"
     [title]="accessibilityConfig?.dotsContainerTitle">
  <ng-container *ngIf="!dotsConfig || dotsConfig?.visible">
    <div class="inside dot"
         *ngFor="let img of images; trackBy: trackById; let index = index"
         [ngClass]="{'active': isActive(index)}"
         [attr.aria-label]="accessibilityConfig?.dotAriaLabel + ' ' + (index + 1)"
         [tabIndex]="0" role="navigation"
         (click)="onDotEvent(index, $event)" (keyup)="onDotEvent(index, $event)"></div>
  </ng-container>
</nav>
`,
      styles: [".dots-container{display:flex;flex-direction:row;justify-content:center;margin-bottom:30px}.dots-container>.dot{background:#fff;border-radius:5px;height:10px;margin-left:4px;margin-right:4px;width:10px;cursor:pointer;opacity:.5}.dots-container>.dot:hover{opacity:.9;transition:all .5s ease;transition-property:opacity}.dots-container>.dot.active{cursor:pointer;opacity:.9}@keyframes fadein-semi-visible05{0%{opacity:0}to{opacity:.5}}@keyframes fadein-semi-visible09{0%{opacity:0}to{opacity:.9}}\n"]
    }]
  }], () => [{
    type: ConfigService
  }], {
    id: [{
      type: Input
    }],
    currentImage: [{
      type: Input
    }],
    images: [{
      type: Input
    }],
    dotsConfig: [{
      type: Input
    }],
    clickDot: [{
      type: Output
    }]
  });
})();
var DescriptionDirective = class _DescriptionDirective {
  constructor(renderer, el) {
    this.renderer = renderer;
    this.el = el;
  }
  /**
   * Method ´ngOnInit´ to apply the style of this directive.
   * This is an angular lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   */
  ngOnInit() {
    this.applyStyle();
  }
  /**
   * Method ´ngOnChanges´ to apply the style of this directive.
   * This is an angular lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called when any data-bound property of a directive changes!!!
   */
  ngOnChanges() {
    this.applyStyle();
  }
  /**
   * Private method to change description's style.
   */
  applyStyle() {
    if (!this.description) {
      return;
    }
    if (this.description.style) {
      this.renderer.setStyle(this.el.nativeElement, "background", this.description.style.bgColor);
      this.renderer.setStyle(this.el.nativeElement, "color", this.description.style.textColor);
      if (this.description.style.width) {
        this.renderer.setStyle(this.el.nativeElement, "width", this.description.style.width);
      }
      if (this.description.style.height) {
        this.renderer.setStyle(this.el.nativeElement, "height", this.description.style.height);
      }
      if (this.description.style.position) {
        this.renderer.setStyle(this.el.nativeElement, "position", this.description.style.position);
      }
      if (this.description.style.top) {
        this.renderer.setStyle(this.el.nativeElement, "top", this.description.style.top);
      }
      if (this.description.style.bottom) {
        this.renderer.setStyle(this.el.nativeElement, "bottom", this.description.style.bottom);
      }
      if (this.description.style.left) {
        this.renderer.setStyle(this.el.nativeElement, "left", this.description.style.left);
      }
      if (this.description.style.right) {
        this.renderer.setStyle(this.el.nativeElement, "right", this.description.style.right);
      }
      this.renderer.setStyle(this.el.nativeElement, "margin-top", this.description.style.marginTop ? this.description.style.marginTop : "0px");
      this.renderer.setStyle(this.el.nativeElement, "margin-bottom", this.description.style.marginBottom ? this.description.style.marginBottom : "0px");
      this.renderer.setStyle(this.el.nativeElement, "margin-left", this.description.style.marginLeft ? this.description.style.marginLeft : "0px");
      this.renderer.setStyle(this.el.nativeElement, "margin-right", this.description.style.marginRight ? this.description.style.marginRight : "0px");
    }
  }
  static {
    this.ɵfac = function DescriptionDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DescriptionDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _DescriptionDirective,
      selectors: [["", "ksDescription", ""]],
      inputs: {
        description: "description"
      },
      standalone: false,
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DescriptionDirective, [{
    type: Directive,
    args: [{
      selector: "[ksDescription]",
      standalone: false
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    description: [{
      type: Input
    }]
  });
})();
var MaxSizeDirective = class _MaxSizeDirective {
  constructor(renderer, el) {
    this.renderer = renderer;
    this.el = el;
  }
  /**
   * Method ´ngOnInit´ to apply the style of this directive.
   * This is an angular lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   */
  ngOnInit() {
    this.applyStyle();
  }
  /**
   * Method ´ngOnChanges´ to apply the style of this directive.
   * This is an angular lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called when any data-bound property of a directive changes!!!
   */
  ngOnChanges() {
    this.applyStyle();
  }
  /**
   * Private method to change both max-width and max-height of an element.
   */
  applyStyle() {
    if (!this.maxSizeConfig) {
      return;
    }
    if (this.maxSizeConfig.maxWidth) {
      this.renderer.setStyle(this.el.nativeElement, "max-width", this.maxSizeConfig.maxWidth);
    }
    if (this.maxSizeConfig.maxHeight) {
      this.renderer.setStyle(this.el.nativeElement, "max-height", this.maxSizeConfig.maxHeight);
    }
  }
  static {
    this.ɵfac = function MaxSizeDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MaxSizeDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _MaxSizeDirective,
      selectors: [["", "ksMaxSize", ""]],
      inputs: {
        maxSizeConfig: "maxSizeConfig"
      },
      standalone: false,
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxSizeDirective, [{
    type: Directive,
    args: [{
      selector: "[ksMaxSize]",
      standalone: false
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    maxSizeConfig: [{
      type: Input
    }]
  });
})();
var CarouselComponent = class _CarouselComponent extends AccessibleComponent {
  /**
   * Listener to stop the gallery when the mouse pointer is over the current image.
   */
  onMouseEnter() {
    if (this.id === null || this.id === void 0) {
      throw new Error("Internal library error - id must be defined");
    }
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig) {
      throw new Error("Internal library error - libConfig must be defined");
    }
    if (!libConfig.carouselPlayConfig || !libConfig.carouselPlayConfig.pauseOnHover) {
      return;
    }
    this.stopCarousel();
  }
  /**
   * Listener to play the gallery when the mouse pointer leave the current image.
   */
  onMouseLeave() {
    if (this.id === null || this.id === void 0) {
      throw new Error("Internal library error - id must be defined");
    }
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig) {
      throw new Error("Internal library error - libConfig must be defined");
    }
    if (!libConfig.carouselPlayConfig || !libConfig.carouselPlayConfig.pauseOnHover || !libConfig.carouselPlayConfig.autoPlay) {
      return;
    }
    this.playCarousel();
  }
  /**
   * Listener to navigate carousel images with keyboard (left).
   */
  onKeyDownLeft() {
    if (this.id === null || this.id === void 0) {
      throw new Error("Internal library error - id must be defined");
    }
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig) {
      throw new Error("Internal library error - libConfig must be defined");
    }
    if (!libConfig.carouselConfig || !libConfig.carouselConfig.keyboardEnable) {
      return;
    }
    this.prevImage();
  }
  /**
   * Listener to navigate carousel images with keyboard (right).
   */
  onKeyDownLRight() {
    if (this.id === null || this.id === void 0) {
      throw new Error("Internal library error - id must be defined");
    }
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig) {
      throw new Error("Internal library error - libConfig must be defined");
    }
    if (!libConfig.carouselConfig || !libConfig.carouselConfig.keyboardEnable) {
      return;
    }
    this.nextImage();
  }
  constructor(platformId, ngZone, modalGalleryService, configService, ref) {
    super();
    this.platformId = platformId;
    this.ngZone = ngZone;
    this.modalGalleryService = modalGalleryService;
    this.configService = configService;
    this.ref = ref;
    this.ariaLabel = `Carousel`;
    this.images = [];
    this.clickImage = new EventEmitter();
    this.changeImage = new EventEmitter();
    this.firstImage = new EventEmitter();
    this.lastImage = new EventEmitter();
    this.clickAction = Action.CLICK;
    this.keyboardAction = Action.KEYBOARD;
    this.isFirstImage = false;
    this.isLastImage = false;
    this.start$ = new Subject();
    this.stop$ = new Subject();
  }
  ngOnInit() {
    if (this.id === null || this.id === void 0) {
      throw new Error("Internal library error - id must be defined");
    }
    if (!this.images || this.images.length === 0) {
      throw new Error("Internal library error - images array must be defined and with at least an element");
    }
    this.configService.setConfig(this.id, this.config);
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig) {
      throw new Error("Internal library error - libConfig must be defined");
    }
    this.currentImage = this.images[0];
    this.carouselDotsConfig = libConfig.carouselDotsConfig;
    this.accessibilityConfig = libConfig.accessibilityConfig;
    this.carouselSlideInfinite = libConfig.carouselSlideInfinite;
    this.carouselConfig = libConfig.carouselConfig;
    this.carouselImageConfig = libConfig.carouselImageConfig;
    this.manageSlideConfig();
  }
  ngOnChanges(changes) {
    if (this.id === null || this.id === void 0) {
      throw new Error("Internal library error - id must be defined");
    }
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig) {
      throw new Error("Internal library error - libConfig must be defined");
    }
    const configChange = changes.config;
    if (configChange && !configChange.firstChange && (configChange.previousValue.carouselDotsConfig?.visible !== configChange.currentValue.carouselDotsConfig?.visible || !configChange.previousValue.carouselDotsConfig && !configChange.currentValue.carouselDotsConfig)) {
      this.configService.setConfig(this.id, {
        carouselDotsConfig: configChange.currentValue?.carouselDotsConfig
      });
      this.carouselDotsConfig = configChange.currentValue?.carouselDotsConfig;
      this.ref.markForCheck();
    }
    if (configChange && !configChange.firstChange && (configChange.previousValue.carouselConfig?.showArrows !== configChange.currentValue.carouselConfig?.showArrows || !configChange.previousValue.carouselConfig && !configChange.currentValue.carouselConfig)) {
      this.configService.setConfig(this.id, {
        carouselConfig: configChange.currentValue?.carouselConfig
      });
      this.carouselConfig = configChange.currentValue?.carouselConfig;
      this.ref.markForCheck();
    }
    if (configChange && !configChange.firstChange && (configChange.previousValue.carouselPlayConfig?.autoPlay !== configChange.currentValue.carouselPlayConfig?.autoPlay || !configChange.previousValue.carouselPlayConfig && !configChange.currentValue.carouselPlayConfig)) {
      this.configService.setConfig(this.id, {
        carouselPlayConfig: configChange.currentValue?.carouselPlayConfig
      });
      if (configChange.currentValue.carouselPlayConfig?.autoPlay && !configChange.firstChange) {
        this.start$.next();
      } else {
        this.stopCarousel();
      }
      this.ref.markForCheck();
    }
  }
  ngAfterContentInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.id === null || this.id === void 0) {
        throw new Error("Internal library error - id must be defined");
      }
      const libConfig = this.configService.getConfig(this.id);
      if (!libConfig || !libConfig.carouselPlayConfig) {
        throw new Error("Internal library error - libConfig and carouselPlayConfig must be defined");
      }
      this.ngZone.runOutsideAngular(() => {
        this.start$.pipe(
          map(() => libConfig?.carouselPlayConfig?.interval),
          // tslint:disable-next-line:no-any
          filter((interval) => interval > 0),
          switchMap((interval) => timer(interval).pipe(takeUntil(this.stop$)))
        ).subscribe(() => this.ngZone.run(() => {
          if (libConfig.carouselPlayConfig?.autoPlay) {
            this.nextImage();
          }
          this.ref.markForCheck();
        }));
        this.start$.next();
      });
    }
  }
  /**
   * Method called when a dot is clicked and used to update the current image.
   * @param number index of the clicked dot
   */
  onClickDot(index) {
    this.changeCurrentImage(this.images[index], Action.NORMAL);
  }
  /**
   * Method called by events from both keyboard and mouse on a navigation arrow.
   * @param string direction of the navigation that can be either 'next' or 'prev'
   * @param KeyboardEvent | MouseEvent event payload
   * @param Action action that triggered the event or `Action.NORMAL` if not provided
   */
  onNavigationEvent(direction, event, action = Action.NORMAL) {
    const result = super.handleNavigationEvent(direction, event);
    if (result === NEXT) {
      this.nextImage(action);
    } else if (result === PREV) {
      this.prevImage(action);
    }
  }
  /**
   * Method triggered when you click on the current image.
   * Also, if modalGalleryEnable is true, you can open the modal-gallery.
   */
  onClickCurrentImage() {
    if (this.id === null || this.id === void 0) {
      throw new Error("Internal library error - id must be defined");
    }
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig || !libConfig.carouselConfig || !this.currentImage) {
      throw new Error("Internal library error - libConfig, carouselConfig and currentImage must be defined");
    }
    if (!libConfig.carouselConfig.modalGalleryEnable) {
      return;
    }
    const index = getIndex(this.currentImage, this.images);
    this.clickImage.emit(index);
  }
  /**
   * Method to get the image description based on input params.
   * If you provide a full description this will be the visible description, otherwise,
   * it will be built using the `Description` object, concatenating its fields.
   * @param Image image to get its description. If not provided it will be the current image
   * @returns String description of the image (or the current image if not provided)
   * @throws an Error if description isn't available
   */
  getDescriptionToDisplay(image = this.currentImage) {
    if (this.id === null || this.id === void 0) {
      throw new Error("Internal library error - id must be defined");
    }
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig) {
      throw new Error("Internal library error - libConfig must be defined");
    }
    const configCurrentImageCarousel = libConfig.carouselImageConfig;
    if (!configCurrentImageCarousel || !configCurrentImageCarousel.description) {
      throw new Error("Description input must be a valid object implementing the Description interface");
    }
    if (!image) {
      throw new Error("Internal library error - image must be defined");
    }
    const imageWithoutDescription = !image || !image.modal || !image.modal.description || image.modal.description === "";
    switch (configCurrentImageCarousel.description.strategy) {
      case DescriptionStrategy.HIDE_IF_EMPTY:
        return imageWithoutDescription ? "" : image.modal.description + "";
      case DescriptionStrategy.ALWAYS_HIDDEN:
        return "";
      default:
        return this.buildTextDescription(image, imageWithoutDescription);
    }
  }
  /**
   * Method used by SwipeDirective to support touch gestures (you can also invert the swipe direction with configCurrentImage.invertSwipe).
   * @param action String that represent the direction of the swipe action. 'swiperight' by default.
   */
  swipe(action = "swiperight") {
    if (this.id === null || this.id === void 0) {
      throw new Error("Internal library error - id must be defined");
    }
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig || !libConfig.carouselImageConfig) {
      throw new Error("Internal library error - libConfig and carouselImageConfig must be defined");
    }
    const configCurrentImageCarousel = libConfig.carouselImageConfig;
    switch (action) {
      case "swiperight":
        if (configCurrentImageCarousel.invertSwipe) {
          this.prevImage(Action.SWIPE);
        } else {
          this.nextImage(Action.SWIPE);
        }
        break;
      case "swipeleft":
        if (configCurrentImageCarousel.invertSwipe) {
          this.nextImage(Action.SWIPE);
        } else {
          this.prevImage(Action.SWIPE);
        }
        break;
    }
  }
  /**
   * Method to go back to the previous image.
   * @param action Enum of type `Action` that represents the source
   *  action that moved back to the previous image. `Action.NORMAL` by default.
   */
  prevImage(action = Action.NORMAL) {
    if (this.isPreventSliding(0)) {
      return;
    }
    this.changeCurrentImage(this.getPrevImage(), action);
    this.manageSlideConfig();
    this.start$.next();
  }
  /**
   * Method to go back to the previous image.
   * @param action Enum of type `Action` that represents the source
   *  action that moved to the next image. `Action.NORMAL` by default.
   */
  nextImage(action = Action.NORMAL) {
    if (this.isPreventSliding(this.images.length - 1)) {
      return;
    }
    this.changeCurrentImage(this.getNextImage(), action);
    this.manageSlideConfig();
    this.start$.next();
  }
  /**
   * Method used in the template to track ids in ngFor.
   * @param number index of the array
   * @param Image item of the array
   * @returns number the id of the item
   */
  trackById(index, item) {
    return item.id;
  }
  /**
   * Method called when an image preview is clicked and used to update the current image.
   * @param event an ImageEvent object with the relative action and the index of the clicked preview.
   */
  onClickPreview(event) {
    const imageFound = this.images[event.result];
    if (!!imageFound) {
      this.manageSlideConfig();
      this.changeCurrentImage(imageFound, event.action);
    }
  }
  /**
   * Method to play carousel.
   */
  playCarousel() {
    this.start$.next();
  }
  /**
   * Stops the carousel from cycling through items.
   */
  stopCarousel() {
    this.stop$.next();
  }
  // TODO remove this because duplicated
  /**
   * Method to get `alt attribute`.
   * `alt` specifies an alternate text for an image, if the image cannot be displayed.
   * @param Image image to get its alt description. If not provided it will be the current image
   * @returns String alt description of the image (or the current image if not provided)
   */
  getAltDescriptionByImage(image = this.currentImage) {
    if (!image) {
      return "";
    }
    return image.modal && image.modal.description ? image.modal.description : `Image ${getIndex(image, this.images) + 1}`;
  }
  // TODO remove this because duplicated
  /**
   * Method to get the title attributes based on descriptions.
   * This is useful to prevent accessibility issues, because if DescriptionStrategy is ALWAYS_HIDDEN,
   * it prevents an empty string as title.
   * @param Image image to get its description. If not provided it will be the current image
   * @returns String title of the image based on descriptions
   * @throws an Error if description isn't available
   */
  getTitleToDisplay(image = this.currentImage) {
    if (this.id === null || this.id === void 0) {
      throw new Error("Internal library error - id must be defined");
    }
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig || !libConfig.carouselImageConfig) {
      throw new Error("Internal library error - libConfig and carouselImageConfig must be defined");
    }
    const configCurrentImageCarousel = libConfig.carouselImageConfig;
    if (!configCurrentImageCarousel || !configCurrentImageCarousel.description) {
      throw new Error("Description input must be a valid object implementing the Description interface");
    }
    const imageWithoutDescription = !image || !image.modal || !image.modal.description || image.modal.description === "";
    const description = this.buildTextDescription(image, imageWithoutDescription);
    return description;
  }
  /**
   * Method to reset carousel (force image with index 0 to be the current image and re-init also previews)
   */
  // temporary removed because never tested
  // reset() {
  //   if (this.configPlay && this.configPlay.autoPlay) {
  //     this.stopCarousel();
  //   }
  //   this.currentImage = this.images[0];
  //   this.handleBoundaries(0);
  //   if (this.configPlay && this.configPlay.autoPlay) {
  //     this.playCarousel();
  //   }
  //   this.ref.markForCheck();
  // }
  /**
   * Method to cleanup resources. In fact, this will stop the carousel.
   * This is an angular lifecycle hook that is called when this component is destroyed.
   */
  ngOnDestroy() {
    this.stopCarousel();
  }
  /**
   * Method to change the current image, receiving the new image as input the relative action.
   * @param image an Image object that represents the new image to set as current.
   * @param action Enum of type `Action` that represents the source action that triggered the change.
   */
  changeCurrentImage(image, action) {
    if (this.id === null || this.id === void 0) {
      throw new Error("Internal library error - id must be defined");
    }
    this.currentImage = image;
    const index = getIndex(image, this.images);
    this.emitBoundaryEvent(action, index);
    this.changeImage.emit(new ImageEvent(this.id, action, index + 1));
  }
  /**
   * Private method to get the next index.
   * This is necessary because at the end, when you call next again, you'll go to the first image.
   * That happens because all modal images are shown like in a circle.
   */
  getNextImage() {
    if (!this.currentImage) {
      throw new Error("Internal library error - currentImage must be defined");
    }
    const currentIndex = getIndex(this.currentImage, this.images);
    let newIndex = 0;
    if (currentIndex >= 0 && currentIndex < this.images.length - 1) {
      newIndex = currentIndex + 1;
    } else {
      newIndex = 0;
    }
    return this.images[newIndex];
  }
  /**
   * Private method to get the previous index.
   * This is necessary because at index 0, when you call prev again, you'll go to the last image.
   * That happens because all modal images are shown like in a circle.
   */
  getPrevImage() {
    if (!this.currentImage) {
      throw new Error("Internal library error - currentImage must be defined");
    }
    const currentIndex = getIndex(this.currentImage, this.images);
    let newIndex = 0;
    if (currentIndex > 0 && currentIndex <= this.images.length - 1) {
      newIndex = currentIndex - 1;
    } else {
      newIndex = this.images.length - 1;
    }
    return this.images[newIndex];
  }
  /**
   * Private method to build a text description.
   * This is used also to create titles.
   * @param Image image to get its description. If not provided it will be the current image.
   * @param boolean imageWithoutDescription is a boolean that it's true if the image hasn't a 'modal' description.
   * @returns String description built concatenating image fields with a specific logic.
   */
  buildTextDescription(image, imageWithoutDescription) {
    if (this.id === null || this.id === void 0) {
      throw new Error("Internal library error - id must be defined");
    }
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig || !libConfig.carouselImageConfig) {
      throw new Error("Internal library error - libConfig and carouselImageConfig must be defined");
    }
    const configCurrentImageCarousel = libConfig.carouselImageConfig;
    if (!configCurrentImageCarousel || !configCurrentImageCarousel.description) {
      throw new Error("Description input must be a valid object implementing the Description interface");
    }
    if (!image) {
      throw new Error("Internal library error - image must be defined");
    }
    if (configCurrentImageCarousel.description.customFullDescription && configCurrentImageCarousel.description.customFullDescription !== "") {
      return configCurrentImageCarousel.description.customFullDescription;
    }
    const currentIndex = getIndex(image, this.images);
    const prevDescription = configCurrentImageCarousel.description.imageText ? configCurrentImageCarousel.description.imageText : "";
    const midSeparator = configCurrentImageCarousel.description.numberSeparator ? configCurrentImageCarousel.description.numberSeparator : "";
    const middleDescription = currentIndex + 1 + midSeparator + this.images.length;
    if (imageWithoutDescription) {
      return prevDescription + middleDescription;
    }
    const currImgDescription = image.modal && image.modal.description ? image.modal.description : "";
    const endDescription = configCurrentImageCarousel.description.beforeTextDescription + currImgDescription;
    return prevDescription + middleDescription + endDescription;
  }
  /**
   * Private method to update both `isFirstImage` and `isLastImage` based on
   * the index of the current image.
   * @param number currentIndex is the index of the current image
   */
  handleBoundaries(currentIndex) {
    if (this.images.length === 1) {
      this.isFirstImage = true;
      this.isLastImage = true;
      return;
    }
    switch (currentIndex) {
      case 0:
        this.isFirstImage = true;
        this.isLastImage = false;
        break;
      case this.images.length - 1:
        this.isFirstImage = false;
        this.isLastImage = true;
        break;
      default:
        this.isFirstImage = false;
        this.isLastImage = false;
        break;
    }
  }
  /**
   * Private method to manage boundary arrows and sliding.
   * This is based on the slideConfig input to enable/disable 'infinite sliding'.
   * @param number index of the visible image
   */
  manageSlideConfig() {
    if (this.id === null || this.id === void 0) {
      throw new Error("Internal library error - id must be defined");
    }
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig) {
      throw new Error("Internal library error - libConfig must be defined");
    }
    if (!this.currentImage) {
      throw new Error("Internal library error - currentImage must be defined");
    }
    let index;
    try {
      index = getIndex(this.currentImage, this.images);
    } catch (err) {
      console.error("Cannot get the current image index in current-image");
      throw err;
    }
    if (libConfig.carouselSlideInfinite === true) {
      this.isFirstImage = false;
      this.isLastImage = false;
    } else {
      this.handleBoundaries(index);
    }
  }
  /**
   * Private method to emit events when either the last or the first image are visible.
   * @param action Enum of type Action that represents the source of the event that changed the
   *  current image to the first one or the last one.
   * @param indexToCheck is the index number of the image (the first or the last one).
   */
  emitBoundaryEvent(action, indexToCheck) {
    if (this.id === null || this.id === void 0) {
      return;
    }
    switch (indexToCheck) {
      case 0:
        this.firstImage.emit(new ImageEvent(this.id, action, true));
        break;
      case this.images.length - 1:
        this.lastImage.emit(new ImageEvent(this.id, action, true));
        break;
    }
  }
  /**
   * Private method to check if next/prev actions should be blocked.
   * It checks if carouselSlideInfinite === false and if the image index is equals to the input parameter.
   * If yes, it returns true to say that sliding should be blocked, otherwise not.
   * @param number boundaryIndex that could be either the beginning index (0) or the last index
   *  of images (this.images.length - 1).
   * @returns boolean true if carouselSlideInfinite === false and the current index is
   *  either the first or the last one.
   */
  isPreventSliding(boundaryIndex) {
    if (this.id === null || this.id === void 0) {
      throw new Error("Internal library error - id must be defined");
    }
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig) {
      throw new Error("Internal library error - libConfig must be defined");
    }
    if (!this.currentImage) {
      throw new Error("Internal library error - currentImage must be defined");
    }
    return !libConfig.carouselSlideInfinite && getIndex(this.currentImage, this.images) === boundaryIndex;
  }
  static {
    this.ɵfac = function CarouselComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CarouselComponent)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ModalGalleryService), ɵɵdirectiveInject(ConfigService), ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CarouselComponent,
      selectors: [["ks-carousel"]],
      hostVars: 1,
      hostBindings: function CarouselComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("mouseenter", function CarouselComponent_mouseenter_HostBindingHandler() {
            return ctx.onMouseEnter();
          })("mouseleave", function CarouselComponent_mouseleave_HostBindingHandler() {
            return ctx.onMouseLeave();
          })("keydown.arrowLeft", function CarouselComponent_keydown_arrowLeft_HostBindingHandler() {
            return ctx.onKeyDownLeft();
          })("keydown.arrowRight", function CarouselComponent_keydown_arrowRight_HostBindingHandler() {
            return ctx.onKeyDownLRight();
          });
        }
        if (rf & 2) {
          ɵɵattribute("aria-label", ctx.ariaLabel);
        }
      },
      inputs: {
        id: "id",
        images: "images",
        config: "config"
      },
      outputs: {
        clickImage: "clickImage",
        changeImage: "changeImage",
        firstImage: "firstImage",
        lastImage: "lastImage"
      },
      standalone: false,
      features: [ɵɵProvidersFeature([ConfigService]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
      ngContentSelectors: _c2,
      decls: 5,
      vars: 9,
      consts: [["content", ""], ["id", "carousel-container", "ksMaxSize", "", 3, "title", "maxSizeConfig"], ["class", "current-figure", "ksSize", "", 3, "sizeConfig", 4, "ngIf"], [3, "clickPreview", "id", "images", "currentImage"], ["ksSize", "", 1, "current-figure", 3, "sizeConfig"], ["class", "nav-left", "role", "button", 3, "tabIndex", "click", "keyup", 4, "ngIf"], [4, "ngTemplateOutlet"], ["ksMaxSize", "", 1, "current-image", 3, "maxSizeConfig"], [4, "ngFor", "ngForOf"], ["ksMaxSize", "", "ksFallbackImage", "", "role", "img", 3, "click", "swipeleft", "swiperight", "id", "loading", "maxSizeConfig", "src", "fallbackImg", "title", "alt", "tabIndex"], ["class", "description", "ksDescription", "", 3, "description", "innerHTML", 4, "ngIf"], ["class", "nav-right", "role", "button", 3, "tabIndex", "click", "keyup", 4, "ngIf"], ["id", "dots"], [3, "clickDot", "id", "currentImage", "images", "dotsConfig"], ["role", "button", 1, "nav-left", 3, "click", "keyup", "tabIndex"], ["aria-hidden", "true", 3, "title"], [3, "media", "srcset"], ["ksDescription", "", 1, "description", 3, "description", "innerHTML"], ["role", "button", 1, "nav-right", 3, "click", "keyup", "tabIndex"]],
      template: function CarouselComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef();
          ɵɵelementStart(0, "main", 1);
          ɵɵtemplate(1, CarouselComponent_ng_template_1_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(3, CarouselComponent_figure_3_Template, 10, 31, "figure", 2);
          ɵɵelementEnd();
          ɵɵelementStart(4, "ks-carousel-previews", 3);
          ɵɵlistener("clickPreview", function CarouselComponent_Template_ks_carousel_previews_clickPreview_4_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onClickPreview($event));
          });
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("title", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.carouselContainerTitle)("maxSizeConfig", ɵɵpureFunction1(7, _c3, ctx.carouselConfig == null ? null : ctx.carouselConfig.maxWidth));
          ɵɵattribute("aria-label", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.carouselContainerAriaLabel);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.currentImage && ctx.currentImage.modal);
          ɵɵadvance();
          ɵɵproperty("id", ctx.id)("images", ctx.images)("currentImage", ctx.currentImage);
        }
      },
      dependencies: [NgForOf, NgIf, NgTemplateOutlet, CarouselPreviewsComponent, DotsComponent, SizeDirective, DescriptionDirective, MaxSizeDirective, FallbackImageDirective],
      styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;align-items:center}#carousel-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%]{animation:fadein-visible .8s;text-align:center;margin:0;position:relative}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%], #carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%], #carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]{animation:animatezoom 1s;cursor:pointer;transition:all .5s;top:50%;position:absolute}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]:hover, #carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]:hover, #carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]:hover{transform:scale(1.1)}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]{left:5px}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]{right:5px}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > .current-image[_ngcontent-%COMP%]{display:block}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > .current-image[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:100%;height:auto;display:block}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > figcaption[_ngcontent-%COMP%]{padding:10px;position:absolute;bottom:0;left:0;right:0}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > figcaption[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-weight:700;text-align:center}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > #dots[_ngcontent-%COMP%]{position:absolute;bottom:20px;width:100%}", ".arrow-image[_ngcontent-%COMP%], .right-arrow-image[_ngcontent-%COMP%], .left-arrow-image[_ngcontent-%COMP%], .empty-arrow-image[_ngcontent-%COMP%]{width:30px;height:30px;background-size:30px}.empty-arrow-image[_ngcontent-%COMP%]{background:#000;opacity:0}.left-arrow-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjUgICBjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);opacity:.8;transition:all .5s}.left-arrow-image[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.right-arrow-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjUgICBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXogICAiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);opacity:.8;transition:all .5s}.right-arrow-image[_ngcontent-%COMP%]:hover{transform:scale(1.2)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselComponent, [{
    type: Component,
    args: [{
      selector: "ks-carousel",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ConfigService],
      standalone: false,
      template: `<main id="carousel-container"
      [attr.aria-label]="accessibilityConfig?.carouselContainerAriaLabel"
      [title]="accessibilityConfig?.carouselContainerTitle"
      ksMaxSize [maxSizeConfig]="{maxWidth: carouselConfig?.maxWidth,
                               maxHeight: ''}">


  <!-- Workaround to support 2 ng-content in the same template in 2 ngIf (https://github.com/angular/angular/issues/22972) -->
  <ng-template #content><ng-content></ng-content></ng-template>

  <figure class="current-figure" *ngIf="currentImage && currentImage.modal"
          ksSize [sizeConfig]="{width: carouselConfig?.maxWidth,
                                height: ''}">

    <a class="nav-left" *ngIf="carouselConfig?.showArrows"
       [attr.aria-label]="accessibilityConfig?.carouselPrevImageAriaLabel"
       [tabIndex]="isLastImage && !carouselSlideInfinite ? -1 : 0" role="button"
       (click)="onNavigationEvent('left', $event, clickAction)" (keyup)="onNavigationEvent('left', $event, keyboardAction)">
      <div class="inside {{(isFirstImage && !carouselSlideInfinite) || !carouselConfig.showArrows ? 'empty-arrow-image' : 'left-arrow-image'}}"
           aria-hidden="true"
           [title]="accessibilityConfig?.carouselPrevImageTitle"></div>
    </a>

    <ng-container *ngTemplateOutlet="content"></ng-container>
    <picture class="current-image" ksMaxSize [maxSizeConfig]="{maxWidth: carouselConfig?.maxWidth,
      maxHeight: carouselConfig?.maxHeight}">
      <ng-container *ngFor="let source of currentImage.modal?.sources">
        <source [media]="source.media" [srcset]="source.srcset">
      </ng-container>
      <img [id]="currentImage.id"
          [loading]="currentImage.loading"
          [attr.fetchpriority]="currentImage.fetchpriority"
          [style.object-fit]="carouselConfig?.objectFit"
          ksMaxSize [maxSizeConfig]="{maxWidth: carouselConfig?.maxWidth,
                                    maxHeight: carouselConfig?.maxHeight}"
          [src]="currentImage.modal.img"
          ksFallbackImage [fallbackImg]="currentImage.modal.fallbackImg"
          [attr.aria-label]="currentImage.modal.ariaLabel"
          [title]="(currentImage.modal.title || currentImage.modal.title === '') ? currentImage.modal.title : getTitleToDisplay()"
          alt="{{currentImage.modal.alt ? currentImage.modal.alt : getAltDescriptionByImage()}}"
          [tabIndex]="0" role="img"
          (click)="onClickCurrentImage()"
          (swipeleft)="swipe($event.type)"
          (swiperight)="swipe($event.type)"/>
    </picture>
    <figcaption *ngIf="getDescriptionToDisplay() !== ''"
                class="description"
                ksDescription [description]="carouselImageConfig?.description"
                [innerHTML]="getDescriptionToDisplay()"></figcaption>

    <a class="nav-right" *ngIf="carouselConfig?.showArrows"
       [attr.aria-label]="accessibilityConfig?.carouselNextImageAriaLabel"
       [tabIndex]="isLastImage && !carouselSlideInfinite ? -1 : 0" role="button"
       (click)="onNavigationEvent('right', $event, clickAction)" (keyup)="onNavigationEvent('right', $event, keyboardAction)">
      <div class="inside {{(isLastImage && !carouselSlideInfinite) || !carouselConfig.showArrows ? 'empty-arrow-image' : 'right-arrow-image'}}"
           aria-hidden="true"
           [title]="accessibilityConfig?.carouselNextImageTitle"></div>
    </a>

    <div id="dots">
      <ks-dots [id]="id"
               [currentImage]="currentImage"
               [images]="images"
               [dotsConfig]="carouselDotsConfig"
               (clickDot)="onClickDot($event)"></ks-dots>
    </div>

  </figure>

</main>

<ks-carousel-previews [id]="id"
                      [images]="images"
                      [currentImage]="currentImage"
                      (clickPreview)="onClickPreview($event)"></ks-carousel-previews>
`,
      styles: [":host{display:flex;flex-direction:column;justify-content:flex-start;align-items:center}#carousel-container{display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%}#carousel-container>.current-figure{animation:fadein-visible .8s;text-align:center;margin:0;position:relative}#carousel-container>.current-figure .nav,#carousel-container>.current-figure>.nav-right,#carousel-container>.current-figure>.nav-left{animation:animatezoom 1s;cursor:pointer;transition:all .5s;top:50%;position:absolute}#carousel-container>.current-figure .nav:hover,#carousel-container>.current-figure>.nav-right:hover,#carousel-container>.current-figure>.nav-left:hover{transform:scale(1.1)}#carousel-container>.current-figure>.nav-left{left:5px}#carousel-container>.current-figure>.nav-right{right:5px}#carousel-container>.current-figure>.current-image{display:block}#carousel-container>.current-figure>.current-image>img{width:100%;height:auto;display:block}#carousel-container>.current-figure>figcaption{padding:10px;position:absolute;bottom:0;left:0;right:0}#carousel-container>.current-figure>figcaption .description{font-weight:700;text-align:center}#carousel-container>.current-figure>#dots{position:absolute;bottom:20px;width:100%}\n", ".arrow-image,.right-arrow-image,.left-arrow-image,.empty-arrow-image{width:30px;height:30px;background-size:30px}.empty-arrow-image{background:#000;opacity:0}.left-arrow-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjUgICBjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);opacity:.8;transition:all .5s}.left-arrow-image:hover{transform:scale(1.2)}.right-arrow-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjUgICBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXogICAiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);opacity:.8;transition:all .5s}.right-arrow-image:hover{transform:scale(1.2)}\n"]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: NgZone
  }, {
    type: ModalGalleryService
  }, {
    type: ConfigService
  }, {
    type: ChangeDetectorRef
  }], {
    ariaLabel: [{
      type: HostBinding,
      args: ["attr.aria-label"]
    }],
    id: [{
      type: Input
    }],
    images: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    clickImage: [{
      type: Output
    }],
    changeImage: [{
      type: Output
    }],
    firstImage: [{
      type: Output
    }],
    lastImage: [{
      type: Output
    }],
    onMouseEnter: [{
      type: HostListener,
      args: ["mouseenter"]
    }],
    onMouseLeave: [{
      type: HostListener,
      args: ["mouseleave"]
    }],
    onKeyDownLeft: [{
      type: HostListener,
      args: ["keydown.arrowLeft"]
    }],
    onKeyDownLRight: [{
      type: HostListener,
      args: ["keydown.arrowRight"]
    }]
  });
})();
var KS_DEFAULT_SIZE = {
  height: "auto",
  width: "30px"
};
var KS_DEFAULT_BTN_CLOSE = {
  className: "close-image",
  size: KS_DEFAULT_SIZE,
  type: ButtonType.CLOSE,
  title: "Close this modal image gallery",
  ariaLabel: "Close this modal image gallery"
};
var KS_DEFAULT_BTN_DOWNLOAD = {
  className: "download-image",
  size: KS_DEFAULT_SIZE,
  type: ButtonType.DOWNLOAD,
  title: "Download the current image",
  ariaLabel: "Download the current image"
};
var KS_DEFAULT_BTN_EXTURL = {
  className: "ext-url-image",
  size: KS_DEFAULT_SIZE,
  type: ButtonType.EXTURL,
  title: "Navigate the current image",
  ariaLabel: "Navigate the current image"
};
var KS_DEFAULT_BTN_DELETE = {
  className: "delete-image",
  size: KS_DEFAULT_SIZE,
  type: ButtonType.DELETE,
  title: "Delete the current image",
  ariaLabel: "Delete the current image"
};
var KS_DEFAULT_BTN_FULL_SCREEN = {
  className: "fullscreen-image",
  size: KS_DEFAULT_SIZE,
  type: ButtonType.FULLSCREEN,
  title: "Switch to full-screen",
  ariaLabel: "Switch to full-screen"
};
var UpperButtonsComponent = class _UpperButtonsComponent extends AccessibleComponent {
  constructor(configService) {
    super();
    this.configService = configService;
    this.refresh = new EventEmitter();
    this.delete = new EventEmitter();
    this.navigate = new EventEmitter();
    this.download = new EventEmitter();
    this.closeButton = new EventEmitter();
    this.fullscreen = new EventEmitter();
    this.customEmit = new EventEmitter();
    this.defaultButtonsDefault = [KS_DEFAULT_BTN_CLOSE];
    this.simpleButtonsDefault = [KS_DEFAULT_BTN_DOWNLOAD, ...this.defaultButtonsDefault];
    this.advancedButtonsDefault = [KS_DEFAULT_BTN_EXTURL, ...this.simpleButtonsDefault];
    this.fullButtonsDefault = [KS_DEFAULT_BTN_FULL_SCREEN, KS_DEFAULT_BTN_DELETE, ...this.advancedButtonsDefault];
  }
  /**
   * Method ´ngOnInit´ to build `configButtons` applying a default value and also to
   * init the `buttons` array.
   * This is an angular lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   */
  ngOnInit() {
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig || !libConfig.buttonsConfig) {
      throw new Error("Internal library error - libConfig and buttonsConfig must be defined");
    }
    this.buttonsConfig = libConfig.buttonsConfig;
    switch (this.buttonsConfig.strategy) {
      case ButtonsStrategy.SIMPLE:
        this.buttons = this.addButtonIds(this.simpleButtonsDefault);
        break;
      case ButtonsStrategy.ADVANCED:
        this.buttons = this.addButtonIds(this.advancedButtonsDefault);
        break;
      case ButtonsStrategy.FULL:
        this.buttons = this.addButtonIds(this.fullButtonsDefault);
        break;
      case ButtonsStrategy.CUSTOM:
        this.buttons = this.addButtonIds(this.validateCustomButtons(this.buttonsConfig.buttons));
        break;
      case ButtonsStrategy.DEFAULT:
      default:
        this.buttons = this.addButtonIds(this.defaultButtonsDefault);
        break;
    }
  }
  /**
   * Method called by events from both keyboard and mouse on a button.
   * This will call a private method to trigger an output with the right payload.
   * @param InternalButtonConfig button that called this method
   * @param KeyboardEvent | MouseEvent event payload
   * @param Action action that triggered the source event or `Action.CLICK` if not specified
   * @throws an error if the button type is unknown
   */
  onEvent(button, event, action = Action.CLICK) {
    if (!event) {
      return;
    }
    const dataToEmit = {
      button,
      // current image initialized as null
      // (I'll fill this value inside the parent of this component
      image: null,
      action,
      galleryId: this.id
    };
    switch (button.type) {
      case ButtonType.DELETE:
        this.triggerOnMouseAndKeyboard(this.delete, event, dataToEmit);
        break;
      case ButtonType.EXTURL:
        if (!this.currentImage || !this.currentImage.modal || !this.currentImage.modal.extUrl) {
          return;
        }
        this.triggerOnMouseAndKeyboard(this.navigate, event, dataToEmit);
        break;
      case ButtonType.DOWNLOAD:
        this.triggerOnMouseAndKeyboard(this.download, event, dataToEmit);
        break;
      case ButtonType.CLOSE:
        this.triggerOnMouseAndKeyboard(this.closeButton, event, dataToEmit);
        break;
      case ButtonType.CUSTOM:
        this.triggerOnMouseAndKeyboard(this.customEmit, event, dataToEmit);
        break;
      case ButtonType.FULLSCREEN:
        this.triggerOnMouseAndKeyboard(this.fullscreen, event, dataToEmit);
        break;
      default:
        throw new Error(`Unknown button's type into ButtonConfig`);
    }
  }
  /**
   * Method used in the template to track ids in ngFor.
   * @param number index of the array
   * @param Image item of the array
   * @returns number the id of the item or undefined if the item is not valid
   */
  trackById(index, item) {
    return item ? item.id : void 0;
  }
  /**
   * Private method to emit an event using the specified output as an `EventEmitter`.
   * @param EventEmitter<ButtonEvent> emitter is the output to emit the `ButtonEvent`
   * @param KeyboardEvent | MouseEvent event is the source that triggered this method
   * @param ButtonEvent dataToEmit payload to emit
   */
  triggerOnMouseAndKeyboard(emitter, event, dataToEmit) {
    if (!emitter) {
      throw new Error(`UpperButtonsComponent unknown emitter in triggerOnMouseAndKeyboard`);
    }
    const result = super.handleImageEvent(event);
    if (result === NEXT) {
      emitter.emit(dataToEmit);
    }
  }
  /**
   * Private method to add ids to the array of buttons.
   * It adds ids in a reverse way, to be sure that the last button will always have id = 0.
   * This is really useful in unit testing to be sure that close button always have id = 0, download 1 and so on...
   * It's totally transparent to the user.
   * @param ButtonConfig[] buttons config array
   * @returns ButtonConfig[] the input array with incremental numeric ids
   */
  addButtonIds(buttons) {
    return buttons.map((val, i) => Object.assign(val, {
      id: buttons.length - 1 - i
    }));
  }
  /**
   * Private method to validate custom buttons received as input.
   * @param ButtonConfig[] buttons config array. [] by default.
   * @returns ButtonConfig[] the same input buttons config array
   * @throws an error is exists a button with an unknown type
   */
  validateCustomButtons(buttons = []) {
    buttons.forEach((val) => {
      const indexOfButtonType = WHITELIST_BUTTON_TYPES.findIndex((type) => type === val.type);
      if (indexOfButtonType === -1) {
        throw new Error(`Unknown ButtonType. For custom types use ButtonType.CUSTOM`);
      }
    });
    return buttons;
  }
  static {
    this.ɵfac = function UpperButtonsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UpperButtonsComponent)(ɵɵdirectiveInject(ConfigService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UpperButtonsComponent,
      selectors: [["ks-upper-buttons"]],
      inputs: {
        id: "id",
        currentImage: "currentImage"
      },
      outputs: {
        refresh: "refresh",
        delete: "delete",
        navigate: "navigate",
        download: "download",
        closeButton: "closeButton",
        fullscreen: "fullscreen",
        customEmit: "customEmit"
      },
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 2,
      vars: 1,
      consts: [[1, "buttons-container"], [4, "ngIf"], ["class", "upper-button", "ksSize", "", "role", "button", 3, "sizeConfig", "ngStyle", "tabIndex", "click", "keyup", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ksSize", "", "role", "button", 1, "upper-button", 3, "click", "keyup", "sizeConfig", "ngStyle", "tabIndex"], ["aria-hidden", "true", 3, "title"]],
      template: function UpperButtonsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "header", 0);
          ɵɵtemplate(1, UpperButtonsComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", !ctx.buttonsConfig || (ctx.buttonsConfig == null ? null : ctx.buttonsConfig.visible));
        }
      },
      dependencies: [NgForOf, NgIf, NgStyle, SizeDirective],
      styles: [".buttons-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-end}.buttons-container[_ngcontent-%COMP%] > .upper-button[_ngcontent-%COMP%]{align-self:center;margin-right:30px;margin-top:28px;font-size:50px;text-decoration:none;cursor:pointer;animation:_ngcontent-%COMP%_animatezoom .6s;color:#fff}@keyframes _ngcontent-%COMP%_animatezoom{0%{transform:scale(0)}to{transform:scale(1)}}.base-btn[_ngcontent-%COMP%], .copy[_ngcontent-%COMP%], .refresh-image[_ngcontent-%COMP%], .close-image[_ngcontent-%COMP%], .download-image[_ngcontent-%COMP%], .ext-url-image[_ngcontent-%COMP%], .delete-image[_ngcontent-%COMP%], .fullscreen-image[_ngcontent-%COMP%], .rotate-image[_ngcontent-%COMP%]{width:30px;height:30px;background-size:30px;opacity:.8;transition:all .5s}.base-btn[_ngcontent-%COMP%]:hover, .copy[_ngcontent-%COMP%]:hover, .refresh-image[_ngcontent-%COMP%]:hover, .close-image[_ngcontent-%COMP%]:hover, .download-image[_ngcontent-%COMP%]:hover, .ext-url-image[_ngcontent-%COMP%]:hover, .delete-image[_ngcontent-%COMP%]:hover, .fullscreen-image[_ngcontent-%COMP%]:hover, .rotate-image[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.rotate-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDY0IDY0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTMzLDJjNy43NDYsMCwxNS4wMjgsMy4wMTcsMjAuNTA1LDguNDk0YzEwLjEzOCwxMC4xMzcsMTEuMzEsMjYuMzk2LDIuNzQsMzcuODQ5TDUyLDUyLjU4OVY0NGgtMnYxMWwxLDFoMTF2LTJoLTguNTgyICAgIGw0LjI5Mi00LjI5M2wwLjA5Mi0wLjEwNmM5LjIxMS0xMi4yNDcsNy45NzItMjkuNjY3LTIuODgzLTQwLjUyMUM0OS4wNjQsMy4yMjUsNDEuMjgsMCwzMywwVjJ6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTcuNzU1LDE1LjY1N0wxMiwxMS40MTFWMjBoMlY5bC0xLTFIMnYyaDguNTgyTDYuMjksMTQuMjkzbC0wLjA5MiwwLjEwNkMtMy4wMTMsMjYuNjQ2LTEuNzczLDQ0LjA2Niw5LjA4MSw1NC45MiAgICBDMTQuOTM2LDYwLjc3NSwyMi43Miw2NCwzMSw2NHYtMmMtNy43NDYsMC0xNS4wMjgtMy4wMTctMjAuNTA1LTguNDk0QzAuMzU3LDQzLjM2OS0wLjgxNCwyNy4xMSw3Ljc1NSwxNS42NTd6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=)}.fullscreen-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTMgNTMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUzIDUzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNNTIuOTIzLDAuNjE4Yy0wLjEwMS0wLjI0NC0wLjI5Ni0wLjQzOS0wLjU0MS0wLjU0MUM1Mi4yNiwwLjAyNyw1Mi4xMywwLDUyLDBINDBjLTAuNTUyLDAtMSwwLjQ0OC0xLDFzMC40NDgsMSwxLDFoOS41ODYgICBMMzMuMjkzLDE4LjI5M2MtMC4zOTEsMC4zOTEtMC4zOTEsMS4wMjMsMCwxLjQxNEMzMy40ODgsMTkuOTAyLDMzLjc0NCwyMCwzNCwyMHMwLjUxMi0wLjA5OCwwLjcwNy0wLjI5M0w1MSwzLjQxNFYxMyAgIGMwLDAuNTUyLDAuNDQ4LDEsMSwxczEtMC40NDgsMS0xVjFDNTMsMC44Nyw1Mi45NzMsMC43NCw1Mi45MjMsMC42MTh6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTE4LjI5MywzMy4yOTNMMiw0OS41ODZWNDBjMC0wLjU1Mi0wLjQ0OC0xLTEtMXMtMSwwLjQ0OC0xLDF2MTJjMCwwLjEzLDAuMDI3LDAuMjYsMC4wNzcsMC4zODIgICBjMC4xMDEsMC4yNDQsMC4yOTYsMC40MzksMC41NDEsMC41NDFDMC43NCw1Mi45NzMsMC44Nyw1MywxLDUzaDEyYzAuNTUyLDAsMS0wLjQ0OCwxLTFzLTAuNDQ4LTEtMS0xSDMuNDE0bDE2LjI5My0xNi4yOTMgICBjMC4zOTEtMC4zOTEsMC4zOTEtMS4wMjMsMC0xLjQxNFMxOC42ODQsMzIuOTAyLDE4LjI5MywzMy4yOTN6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTEsMTRjMC41NTIsMCwxLTAuNDQ4LDEtMVYzLjQxNGwxNi4yOTIsMTYuMjkyYzAuMTk1LDAuMTk1LDAuNDUxLDAuMjkzLDAuNzA3LDAuMjkzczAuNTEyLTAuMDk4LDAuNzA3LTAuMjkzICAgYzAuMzkxLTAuMzkxLDAuMzkxLTEuMDIzLDAtMS40MTRMMy40MTQsMkgxM2MwLjU1MiwwLDEtMC40NDgsMS0xcy0wLjQ0OC0xLTEtMUgxQzAuODcsMCwwLjc0LDAuMDI3LDAuNjE4LDAuMDc3ICAgQzAuMzczLDAuMTc5LDAuMTc5LDAuMzczLDAuMDc3LDAuNjE4QzAuMDI3LDAuNzQsMCwwLjg3LDAsMXYxMkMwLDEzLjU1MiwwLjQ0OCwxNCwxLDE0eiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik01MiwzOWMtMC41NTIsMC0xLDAuNDQ4LTEsMXY5LjU4NkwzNC43MDcsMzMuMjkyYy0wLjM5MS0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwcy0wLjM5MSwxLjAyMywwLDEuNDE0TDQ5LjU4Niw1MUg0MCAgIGMtMC41NTIsMC0xLDAuNDQ4LTEsMXMwLjQ0OCwxLDEsMWgxMmMwLjEzLDAsMC4yNi0wLjAyNywwLjM4Mi0wLjA3N2MwLjI0NC0wLjEwMSwwLjQzOS0wLjI5NiwwLjU0MS0wLjU0MSAgIEM1Mi45NzMsNTIuMjYsNTMsNTIuMTMsNTMsNTJWNDBDNTMsMzkuNDQ4LDUyLjU1MiwzOSw1MiwzOXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.delete-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4Ni40IDQ4Ni40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODYuNCA0ODYuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTQ0Niw3MEgzNDQuOFY1My41YzAtMjkuNS0yNC01My41LTUzLjUtNTMuNWgtOTYuMmMtMjkuNSwwLTUzLjUsMjQtNTMuNSw1My41VjcwSDQwLjRjLTcuNSwwLTEzLjUsNi0xMy41LDEzLjUgICAgUzMyLjksOTcsNDAuNCw5N2gyNC40djMxNy4yYzAsMzkuOCwzMi40LDcyLjIsNzIuMiw3Mi4yaDIxMi40YzM5LjgsMCw3Mi4yLTMyLjQsNzIuMi03Mi4yVjk3SDQ0NmM3LjUsMCwxMy41LTYsMTMuNS0xMy41ICAgIFM0NTMuNSw3MCw0NDYsNzB6IE0xNjguNiw1My41YzAtMTQuNiwxMS45LTI2LjUsMjYuNS0yNi41aDk2LjJjMTQuNiwwLDI2LjUsMTEuOSwyNi41LDI2LjVWNzBIMTY4LjZWNTMuNXogTTM5NC42LDQxNC4yICAgIGMwLDI0LjktMjAuMyw0NS4yLTQ1LjIsNDUuMkgxMzdjLTI0LjksMC00NS4yLTIwLjMtNDUuMi00NS4yVjk3aDMwMi45djMxNy4ySDM5NC42eiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0yNDMuMiw0MTFjNy41LDAsMTMuNS02LDEzLjUtMTMuNVYxNTguOWMwLTcuNS02LTEzLjUtMTMuNS0xMy41cy0xMy41LDYtMTMuNSwxMy41djIzOC41ICAgIEMyMjkuNyw0MDQuOSwyMzUuNyw0MTEsMjQzLjIsNDExeiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0xNTUuMSwzOTYuMWM3LjUsMCwxMy41LTYsMTMuNS0xMy41VjE3My43YzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MjA4LjkgICAgQzE0MS42LDM5MC4xLDE0Ny43LDM5Ni4xLDE1NS4xLDM5Ni4xeiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0zMzEuMywzOTYuMWM3LjUsMCwxMy41LTYsMTMuNS0xMy41VjE3My43YzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MjA4LjkgICAgQzMxNy44LDM5MC4xLDMyMy44LDM5Ni4xLDMzMS4zLDM5Ni4xeiIgZmlsbD0iI0ZGRkZGRiIvPjwvZz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.ext-url-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPjxnPjxnPjxnPjxwYXRoIGQ9Ik00ODAsMjg4djExMmMwLDQ0LjE4My0zNS44MTcsODAtODAsODBIMTEyYy00NC4xODMsMC04MC0zNS44MTctODAtODBWMTEyYzAtNDQuMTgzLDM1LjgxNy04MCw4MC04MGg5NlYwaC05NiAgICAgQzUwLjE0NCwwLDAsNTAuMTQ0LDAsMTEydjI4OGMwLDYxLjg1Niw1MC4xNDQsMTEyLDExMiwxMTJoMjg4YzYxLjg1NiwwLDExMi01MC4xNDQsMTEyLTExMlYyODhINDgweiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0xNzYsNDE2aDMyVjI4OGMwLTEyNS43NiwxMDcuNTItMTI4LDExMi0xMjhoMTA1LjQ0bC04NC42NCw4NC42NGwyMi41NiwyMi41NmwxMTItMTEyYzYuMjA0LTYuMjQxLDYuMjA0LTE2LjMxOSwwLTIyLjU2ICAgICBsLTExMi0xMTJsLTIyLjcyLDIyLjcybDg0LjgsODQuNjRIMzIwYy0xLjQ0LDAtMTQ0LDEuNzYtMTQ0LDE2MFY0MTZ6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.download-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3MS4yIDQ3MS4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzEuMiA0NzEuMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTQ1Ny43LDIzMC4xNWMtNy41LDAtMTMuNSw2LTEzLjUsMTMuNXYxMjIuOGMwLDMzLjQtMjcuMiw2MC41LTYwLjUsNjAuNUg4Ny41Yy0zMy40LDAtNjAuNS0yNy4yLTYwLjUtNjAuNXYtMTI0LjggICAgYzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MTI0LjhjMCw0OC4zLDM5LjMsODcuNSw4Ny41LDg3LjVoMjk2LjJjNDguMywwLDg3LjUtMzkuMyw4Ny41LTg3LjV2LTEyMi44ICAgIEM0NzEuMiwyMzYuMjUsNDY1LjIsMjMwLjE1LDQ1Ny43LDIzMC4xNXoiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJNMjI2LjEsMzQ2Ljc1YzIuNiwyLjYsNi4xLDQsOS41LDRzNi45LTEuMyw5LjUtNGw4NS44LTg1LjhjNS4zLTUuMyw1LjMtMTMuOCwwLTE5LjFjLTUuMy01LjMtMTMuOC01LjMtMTkuMSwwbC02Mi43LDYyLjggICAgVjMwLjc1YzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MjczLjlsLTYyLjgtNjIuOGMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xICAgIEwyMjYuMSwzNDYuNzV6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=)}.close-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3NS4yIDQ3NS4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzUuMiA0NzUuMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTQwNS42LDY5LjZDMzYwLjcsMjQuNywzMDEuMSwwLDIzNy42LDBzLTEyMy4xLDI0LjctMTY4LDY5LjZTMCwxNzQuMSwwLDIzNy42czI0LjcsMTIzLjEsNjkuNiwxNjhzMTA0LjUsNjkuNiwxNjgsNjkuNiAgICBzMTIzLjEtMjQuNywxNjgtNjkuNnM2OS42LTEwNC41LDY5LjYtMTY4UzQ1MC41LDExNC41LDQwNS42LDY5LjZ6IE0zODYuNSwzODYuNWMtMzkuOCwzOS44LTkyLjcsNjEuNy0xNDguOSw2MS43ICAgIHMtMTA5LjEtMjEuOS0xNDguOS02MS43Yy04Mi4xLTgyLjEtODIuMS0yMTUuNywwLTI5Ny44QzEyOC41LDQ4LjksMTgxLjQsMjcsMjM3LjYsMjdzMTA5LjEsMjEuOSwxNDguOSw2MS43ICAgIEM0NjguNiwxNzAuOCw0NjguNiwzMDQuNCwzODYuNSwzODYuNXoiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJNMzQyLjMsMTMyLjljLTUuMy01LjMtMTMuOC01LjMtMTkuMSwwbC04NS42LDg1LjZMMTUyLDEzMi45Yy01LjMtNS4zLTEzLjgtNS4zLTE5LjEsMGMtNS4zLDUuMy01LjMsMTMuOCwwLDE5LjEgICAgbDg1LjYsODUuNmwtODUuNiw4NS42Yy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWMyLjYsMi42LDYuMSw0LDkuNSw0czYuOS0xLjMsOS41LTRsODUuNi04NS42bDg1LjYsODUuNmMyLjYsMi42LDYuMSw0LDkuNSw0ICAgIGMzLjUsMCw2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xbC04NS40LTg1LjZsODUuNi04NS42QzM0Ny42LDE0Ni43LDM0Ny42LDEzOC4yLDM0Mi4zLDEzMi45eiIgZmlsbD0iI0ZGRkZGRiIvPjwvZz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.refresh-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4OS43MTEgNDg5LjcxMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDg5LjcxMSA0ODkuNzExOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48Zz48cGF0aCBkPSJNMTEyLjE1Niw5Ny4xMTFjNzIuMy02NS40LDE4MC41LTY2LjQsMjUzLjgtNi43bC01OC4xLDIuMmMtNy41LDAuMy0xMy4zLDYuNS0xMywxNGMwLjMsNy4zLDYuMywxMywxMy41LDEzICAgIGMwLjIsMCwwLjMsMCwwLjUsMGw4OS4yLTMuM2M3LjMtMC4zLDEzLTYuMiwxMy0xMy41di0xYzAtMC4yLDAtMC4zLDAtMC41di0wLjFsMCwwbC0zLjMtODguMmMtMC4zLTcuNS02LjYtMTMuMy0xNC0xMyAgICBjLTcuNSwwLjMtMTMuMyw2LjUtMTMsMTRsMi4xLDU1LjNjLTM2LjMtMjkuNy04MS00Ni45LTEyOC44LTQ5LjNjLTU5LjItMy0xMTYuMSwxNy4zLTE2MCw1Ny4xYy02MC40LDU0LjctODYsMTM3LjktNjYuOCwyMTcuMSAgICBjMS41LDYuMiw3LDEwLjMsMTMuMSwxMC4zYzEuMSwwLDIuMS0wLjEsMy4yLTAuNGM3LjItMS44LDExLjctOS4xLDkuOS0xNi4zQzM2LjY1NiwyMTguMjExLDU5LjA1NiwxNDUuMTExLDExMi4xNTYsOTcuMTExeiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik00NjIuNDU2LDE5NS41MTFjLTEuOC03LjItOS4xLTExLjctMTYuMy05LjljLTcuMiwxLjgtMTEuNyw5LjEtOS45LDE2LjNjMTYuOSw2OS42LTUuNiwxNDIuNy01OC43LDE5MC43ICAgIGMtMzcuMywzMy43LTg0LjEsNTAuMy0xMzAuNyw1MC4zYy00NC41LDAtODguOS0xNS4xLTEyNC43LTQ0LjlsNTguOC01LjNjNy40LTAuNywxMi45LTcuMiwxMi4yLTE0LjdzLTcuMi0xMi45LTE0LjctMTIuMmwtODguOSw4ICAgIGMtNy40LDAuNy0xMi45LDcuMi0xMi4yLDE0LjdsOCw4OC45YzAuNiw3LDYuNSwxMi4zLDEzLjQsMTIuM2MwLjQsMCwwLjgsMCwxLjItMC4xYzcuNC0wLjcsMTIuOS03LjIsMTIuMi0xNC43bC00LjgtNTQuMSAgICBjMzYuMywyOS40LDgwLjgsNDYuNSwxMjguMyw0OC45YzMuOCwwLjIsNy42LDAuMywxMS4zLDAuM2M1NS4xLDAsMTA3LjUtMjAuMiwxNDguNy01Ny40ICAgIEM0NTYuMDU2LDM1Ny45MTEsNDgxLjY1NiwyNzQuODExLDQ2Mi40NTYsMTk1LjUxMXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjwvc3ZnPg==)}.copy[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4OC4zIDQ4OC4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODguMyA0ODguMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTMxNC4yNSw4NS40aC0yMjdjLTIxLjMsMC0zOC42LDE3LjMtMzguNiwzOC42djMyNS43YzAsMjEuMywxNy4zLDM4LjYsMzguNiwzOC42aDIyN2MyMS4zLDAsMzguNi0xNy4zLDM4LjYtMzguNlYxMjQgICAgQzM1Mi43NSwxMDIuNywzMzUuNDUsODUuNCwzMTQuMjUsODUuNHogTTMyNS43NSw0NDkuNmMwLDYuNC01LjIsMTEuNi0xMS42LDExLjZoLTIyN2MtNi40LDAtMTEuNi01LjItMTEuNi0xMS42VjEyNCAgICBjMC02LjQsNS4yLTExLjYsMTEuNi0xMS42aDIyN2M2LjQsMCwxMS42LDUuMiwxMS42LDExLjZWNDQ5LjZ6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTQwMS4wNSwwaC0yMjdjLTIxLjMsMC0zOC42LDE3LjMtMzguNiwzOC42YzAsNy41LDYsMTMuNSwxMy41LDEzLjVzMTMuNS02LDEzLjUtMTMuNWMwLTYuNCw1LjItMTEuNiwxMS42LTExLjZoMjI3ICAgIGM2LjQsMCwxMS42LDUuMiwxMS42LDExLjZ2MzI1LjdjMCw2LjQtNS4yLDExLjYtMTEuNiwxMS42Yy03LjUsMC0xMy41LDYtMTMuNSwxMy41czYsMTMuNSwxMy41LDEzLjVjMjEuMywwLDM4LjYtMTcuMywzOC42LTM4LjYgICAgVjM4LjZDNDM5LjY1LDE3LjMsNDIyLjM1LDAsNDAxLjA1LDB6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpperButtonsComponent, [{
    type: Component,
    args: [{
      selector: "ks-upper-buttons",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<header class="buttons-container">

  <ng-container *ngIf="!buttonsConfig || buttonsConfig?.visible">
    <a *ngFor="let btn of buttons; trackBy: trackById; let index = index"
       class="upper-button"
       ksSize [sizeConfig]="{width: btn.size?.width!, height: btn.size?.height!}"
       [ngStyle]="{'font-size': btn.fontSize}"
       [attr.aria-label]="btn.ariaLabel"
       [tabIndex]="0" role="button"
       (click)="onEvent(btn, $event)" (keyup)="onEvent(btn, $event)">
      <div class="inside {{btn.className}}" aria-hidden="true" title="{{btn.title}}"></div>
    </a>
  </ng-container>
</header>
`,
      styles: [".buttons-container{display:flex;flex-direction:row;justify-content:flex-end}.buttons-container>.upper-button{align-self:center;margin-right:30px;margin-top:28px;font-size:50px;text-decoration:none;cursor:pointer;animation:animatezoom .6s;color:#fff}@keyframes animatezoom{0%{transform:scale(0)}to{transform:scale(1)}}.base-btn,.copy,.refresh-image,.close-image,.download-image,.ext-url-image,.delete-image,.fullscreen-image,.rotate-image{width:30px;height:30px;background-size:30px;opacity:.8;transition:all .5s}.base-btn:hover,.copy:hover,.refresh-image:hover,.close-image:hover,.download-image:hover,.ext-url-image:hover,.delete-image:hover,.fullscreen-image:hover,.rotate-image:hover{transform:scale(1.2)}.rotate-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDY0IDY0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTMzLDJjNy43NDYsMCwxNS4wMjgsMy4wMTcsMjAuNTA1LDguNDk0YzEwLjEzOCwxMC4xMzcsMTEuMzEsMjYuMzk2LDIuNzQsMzcuODQ5TDUyLDUyLjU4OVY0NGgtMnYxMWwxLDFoMTF2LTJoLTguNTgyICAgIGw0LjI5Mi00LjI5M2wwLjA5Mi0wLjEwNmM5LjIxMS0xMi4yNDcsNy45NzItMjkuNjY3LTIuODgzLTQwLjUyMUM0OS4wNjQsMy4yMjUsNDEuMjgsMCwzMywwVjJ6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTcuNzU1LDE1LjY1N0wxMiwxMS40MTFWMjBoMlY5bC0xLTFIMnYyaDguNTgyTDYuMjksMTQuMjkzbC0wLjA5MiwwLjEwNkMtMy4wMTMsMjYuNjQ2LTEuNzczLDQ0LjA2Niw5LjA4MSw1NC45MiAgICBDMTQuOTM2LDYwLjc3NSwyMi43Miw2NCwzMSw2NHYtMmMtNy43NDYsMC0xNS4wMjgtMy4wMTctMjAuNTA1LTguNDk0QzAuMzU3LDQzLjM2OS0wLjgxNCwyNy4xMSw3Ljc1NSwxNS42NTd6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=)}.fullscreen-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTMgNTMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUzIDUzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNNTIuOTIzLDAuNjE4Yy0wLjEwMS0wLjI0NC0wLjI5Ni0wLjQzOS0wLjU0MS0wLjU0MUM1Mi4yNiwwLjAyNyw1Mi4xMywwLDUyLDBINDBjLTAuNTUyLDAtMSwwLjQ0OC0xLDFzMC40NDgsMSwxLDFoOS41ODYgICBMMzMuMjkzLDE4LjI5M2MtMC4zOTEsMC4zOTEtMC4zOTEsMS4wMjMsMCwxLjQxNEMzMy40ODgsMTkuOTAyLDMzLjc0NCwyMCwzNCwyMHMwLjUxMi0wLjA5OCwwLjcwNy0wLjI5M0w1MSwzLjQxNFYxMyAgIGMwLDAuNTUyLDAuNDQ4LDEsMSwxczEtMC40NDgsMS0xVjFDNTMsMC44Nyw1Mi45NzMsMC43NCw1Mi45MjMsMC42MTh6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTE4LjI5MywzMy4yOTNMMiw0OS41ODZWNDBjMC0wLjU1Mi0wLjQ0OC0xLTEtMXMtMSwwLjQ0OC0xLDF2MTJjMCwwLjEzLDAuMDI3LDAuMjYsMC4wNzcsMC4zODIgICBjMC4xMDEsMC4yNDQsMC4yOTYsMC40MzksMC41NDEsMC41NDFDMC43NCw1Mi45NzMsMC44Nyw1MywxLDUzaDEyYzAuNTUyLDAsMS0wLjQ0OCwxLTFzLTAuNDQ4LTEtMS0xSDMuNDE0bDE2LjI5My0xNi4yOTMgICBjMC4zOTEtMC4zOTEsMC4zOTEtMS4wMjMsMC0xLjQxNFMxOC42ODQsMzIuOTAyLDE4LjI5MywzMy4yOTN6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTEsMTRjMC41NTIsMCwxLTAuNDQ4LDEtMVYzLjQxNGwxNi4yOTIsMTYuMjkyYzAuMTk1LDAuMTk1LDAuNDUxLDAuMjkzLDAuNzA3LDAuMjkzczAuNTEyLTAuMDk4LDAuNzA3LTAuMjkzICAgYzAuMzkxLTAuMzkxLDAuMzkxLTEuMDIzLDAtMS40MTRMMy40MTQsMkgxM2MwLjU1MiwwLDEtMC40NDgsMS0xcy0wLjQ0OC0xLTEtMUgxQzAuODcsMCwwLjc0LDAuMDI3LDAuNjE4LDAuMDc3ICAgQzAuMzczLDAuMTc5LDAuMTc5LDAuMzczLDAuMDc3LDAuNjE4QzAuMDI3LDAuNzQsMCwwLjg3LDAsMXYxMkMwLDEzLjU1MiwwLjQ0OCwxNCwxLDE0eiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik01MiwzOWMtMC41NTIsMC0xLDAuNDQ4LTEsMXY5LjU4NkwzNC43MDcsMzMuMjkyYy0wLjM5MS0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwcy0wLjM5MSwxLjAyMywwLDEuNDE0TDQ5LjU4Niw1MUg0MCAgIGMtMC41NTIsMC0xLDAuNDQ4LTEsMXMwLjQ0OCwxLDEsMWgxMmMwLjEzLDAsMC4yNi0wLjAyNywwLjM4Mi0wLjA3N2MwLjI0NC0wLjEwMSwwLjQzOS0wLjI5NiwwLjU0MS0wLjU0MSAgIEM1Mi45NzMsNTIuMjYsNTMsNTIuMTMsNTMsNTJWNDBDNTMsMzkuNDQ4LDUyLjU1MiwzOSw1MiwzOXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.delete-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4Ni40IDQ4Ni40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODYuNCA0ODYuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTQ0Niw3MEgzNDQuOFY1My41YzAtMjkuNS0yNC01My41LTUzLjUtNTMuNWgtOTYuMmMtMjkuNSwwLTUzLjUsMjQtNTMuNSw1My41VjcwSDQwLjRjLTcuNSwwLTEzLjUsNi0xMy41LDEzLjUgICAgUzMyLjksOTcsNDAuNCw5N2gyNC40djMxNy4yYzAsMzkuOCwzMi40LDcyLjIsNzIuMiw3Mi4yaDIxMi40YzM5LjgsMCw3Mi4yLTMyLjQsNzIuMi03Mi4yVjk3SDQ0NmM3LjUsMCwxMy41LTYsMTMuNS0xMy41ICAgIFM0NTMuNSw3MCw0NDYsNzB6IE0xNjguNiw1My41YzAtMTQuNiwxMS45LTI2LjUsMjYuNS0yNi41aDk2LjJjMTQuNiwwLDI2LjUsMTEuOSwyNi41LDI2LjVWNzBIMTY4LjZWNTMuNXogTTM5NC42LDQxNC4yICAgIGMwLDI0LjktMjAuMyw0NS4yLTQ1LjIsNDUuMkgxMzdjLTI0LjksMC00NS4yLTIwLjMtNDUuMi00NS4yVjk3aDMwMi45djMxNy4ySDM5NC42eiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0yNDMuMiw0MTFjNy41LDAsMTMuNS02LDEzLjUtMTMuNVYxNTguOWMwLTcuNS02LTEzLjUtMTMuNS0xMy41cy0xMy41LDYtMTMuNSwxMy41djIzOC41ICAgIEMyMjkuNyw0MDQuOSwyMzUuNyw0MTEsMjQzLjIsNDExeiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0xNTUuMSwzOTYuMWM3LjUsMCwxMy41LTYsMTMuNS0xMy41VjE3My43YzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MjA4LjkgICAgQzE0MS42LDM5MC4xLDE0Ny43LDM5Ni4xLDE1NS4xLDM5Ni4xeiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0zMzEuMywzOTYuMWM3LjUsMCwxMy41LTYsMTMuNS0xMy41VjE3My43YzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MjA4LjkgICAgQzMxNy44LDM5MC4xLDMyMy44LDM5Ni4xLDMzMS4zLDM5Ni4xeiIgZmlsbD0iI0ZGRkZGRiIvPjwvZz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.ext-url-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPjxnPjxnPjxnPjxwYXRoIGQ9Ik00ODAsMjg4djExMmMwLDQ0LjE4My0zNS44MTcsODAtODAsODBIMTEyYy00NC4xODMsMC04MC0zNS44MTctODAtODBWMTEyYzAtNDQuMTgzLDM1LjgxNy04MCw4MC04MGg5NlYwaC05NiAgICAgQzUwLjE0NCwwLDAsNTAuMTQ0LDAsMTEydjI4OGMwLDYxLjg1Niw1MC4xNDQsMTEyLDExMiwxMTJoMjg4YzYxLjg1NiwwLDExMi01MC4xNDQsMTEyLTExMlYyODhINDgweiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0xNzYsNDE2aDMyVjI4OGMwLTEyNS43NiwxMDcuNTItMTI4LDExMi0xMjhoMTA1LjQ0bC04NC42NCw4NC42NGwyMi41NiwyMi41NmwxMTItMTEyYzYuMjA0LTYuMjQxLDYuMjA0LTE2LjMxOSwwLTIyLjU2ICAgICBsLTExMi0xMTJsLTIyLjcyLDIyLjcybDg0LjgsODQuNjRIMzIwYy0xLjQ0LDAtMTQ0LDEuNzYtMTQ0LDE2MFY0MTZ6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.download-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3MS4yIDQ3MS4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzEuMiA0NzEuMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTQ1Ny43LDIzMC4xNWMtNy41LDAtMTMuNSw2LTEzLjUsMTMuNXYxMjIuOGMwLDMzLjQtMjcuMiw2MC41LTYwLjUsNjAuNUg4Ny41Yy0zMy40LDAtNjAuNS0yNy4yLTYwLjUtNjAuNXYtMTI0LjggICAgYzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MTI0LjhjMCw0OC4zLDM5LjMsODcuNSw4Ny41LDg3LjVoMjk2LjJjNDguMywwLDg3LjUtMzkuMyw4Ny41LTg3LjV2LTEyMi44ICAgIEM0NzEuMiwyMzYuMjUsNDY1LjIsMjMwLjE1LDQ1Ny43LDIzMC4xNXoiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJNMjI2LjEsMzQ2Ljc1YzIuNiwyLjYsNi4xLDQsOS41LDRzNi45LTEuMyw5LjUtNGw4NS44LTg1LjhjNS4zLTUuMyw1LjMtMTMuOCwwLTE5LjFjLTUuMy01LjMtMTMuOC01LjMtMTkuMSwwbC02Mi43LDYyLjggICAgVjMwLjc1YzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MjczLjlsLTYyLjgtNjIuOGMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xICAgIEwyMjYuMSwzNDYuNzV6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=)}.close-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3NS4yIDQ3NS4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzUuMiA0NzUuMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTQwNS42LDY5LjZDMzYwLjcsMjQuNywzMDEuMSwwLDIzNy42LDBzLTEyMy4xLDI0LjctMTY4LDY5LjZTMCwxNzQuMSwwLDIzNy42czI0LjcsMTIzLjEsNjkuNiwxNjhzMTA0LjUsNjkuNiwxNjgsNjkuNiAgICBzMTIzLjEtMjQuNywxNjgtNjkuNnM2OS42LTEwNC41LDY5LjYtMTY4UzQ1MC41LDExNC41LDQwNS42LDY5LjZ6IE0zODYuNSwzODYuNWMtMzkuOCwzOS44LTkyLjcsNjEuNy0xNDguOSw2MS43ICAgIHMtMTA5LjEtMjEuOS0xNDguOS02MS43Yy04Mi4xLTgyLjEtODIuMS0yMTUuNywwLTI5Ny44QzEyOC41LDQ4LjksMTgxLjQsMjcsMjM3LjYsMjdzMTA5LjEsMjEuOSwxNDguOSw2MS43ICAgIEM0NjguNiwxNzAuOCw0NjguNiwzMDQuNCwzODYuNSwzODYuNXoiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJNMzQyLjMsMTMyLjljLTUuMy01LjMtMTMuOC01LjMtMTkuMSwwbC04NS42LDg1LjZMMTUyLDEzMi45Yy01LjMtNS4zLTEzLjgtNS4zLTE5LjEsMGMtNS4zLDUuMy01LjMsMTMuOCwwLDE5LjEgICAgbDg1LjYsODUuNmwtODUuNiw4NS42Yy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWMyLjYsMi42LDYuMSw0LDkuNSw0czYuOS0xLjMsOS41LTRsODUuNi04NS42bDg1LjYsODUuNmMyLjYsMi42LDYuMSw0LDkuNSw0ICAgIGMzLjUsMCw2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xbC04NS40LTg1LjZsODUuNi04NS42QzM0Ny42LDE0Ni43LDM0Ny42LDEzOC4yLDM0Mi4zLDEzMi45eiIgZmlsbD0iI0ZGRkZGRiIvPjwvZz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.refresh-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4OS43MTEgNDg5LjcxMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDg5LjcxMSA0ODkuNzExOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48Zz48cGF0aCBkPSJNMTEyLjE1Niw5Ny4xMTFjNzIuMy02NS40LDE4MC41LTY2LjQsMjUzLjgtNi43bC01OC4xLDIuMmMtNy41LDAuMy0xMy4zLDYuNS0xMywxNGMwLjMsNy4zLDYuMywxMywxMy41LDEzICAgIGMwLjIsMCwwLjMsMCwwLjUsMGw4OS4yLTMuM2M3LjMtMC4zLDEzLTYuMiwxMy0xMy41di0xYzAtMC4yLDAtMC4zLDAtMC41di0wLjFsMCwwbC0zLjMtODguMmMtMC4zLTcuNS02LjYtMTMuMy0xNC0xMyAgICBjLTcuNSwwLjMtMTMuMyw2LjUtMTMsMTRsMi4xLDU1LjNjLTM2LjMtMjkuNy04MS00Ni45LTEyOC44LTQ5LjNjLTU5LjItMy0xMTYuMSwxNy4zLTE2MCw1Ny4xYy02MC40LDU0LjctODYsMTM3LjktNjYuOCwyMTcuMSAgICBjMS41LDYuMiw3LDEwLjMsMTMuMSwxMC4zYzEuMSwwLDIuMS0wLjEsMy4yLTAuNGM3LjItMS44LDExLjctOS4xLDkuOS0xNi4zQzM2LjY1NiwyMTguMjExLDU5LjA1NiwxNDUuMTExLDExMi4xNTYsOTcuMTExeiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik00NjIuNDU2LDE5NS41MTFjLTEuOC03LjItOS4xLTExLjctMTYuMy05LjljLTcuMiwxLjgtMTEuNyw5LjEtOS45LDE2LjNjMTYuOSw2OS42LTUuNiwxNDIuNy01OC43LDE5MC43ICAgIGMtMzcuMywzMy43LTg0LjEsNTAuMy0xMzAuNyw1MC4zYy00NC41LDAtODguOS0xNS4xLTEyNC43LTQ0LjlsNTguOC01LjNjNy40LTAuNywxMi45LTcuMiwxMi4yLTE0LjdzLTcuMi0xMi45LTE0LjctMTIuMmwtODguOSw4ICAgIGMtNy40LDAuNy0xMi45LDcuMi0xMi4yLDE0LjdsOCw4OC45YzAuNiw3LDYuNSwxMi4zLDEzLjQsMTIuM2MwLjQsMCwwLjgsMCwxLjItMC4xYzcuNC0wLjcsMTIuOS03LjIsMTIuMi0xNC43bC00LjgtNTQuMSAgICBjMzYuMywyOS40LDgwLjgsNDYuNSwxMjguMyw0OC45YzMuOCwwLjIsNy42LDAuMywxMS4zLDAuM2M1NS4xLDAsMTA3LjUtMjAuMiwxNDguNy01Ny40ICAgIEM0NTYuMDU2LDM1Ny45MTEsNDgxLjY1NiwyNzQuODExLDQ2Mi40NTYsMTk1LjUxMXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjwvc3ZnPg==)}.copy{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4OC4zIDQ4OC4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODguMyA0ODguMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTMxNC4yNSw4NS40aC0yMjdjLTIxLjMsMC0zOC42LDE3LjMtMzguNiwzOC42djMyNS43YzAsMjEuMywxNy4zLDM4LjYsMzguNiwzOC42aDIyN2MyMS4zLDAsMzguNi0xNy4zLDM4LjYtMzguNlYxMjQgICAgQzM1Mi43NSwxMDIuNywzMzUuNDUsODUuNCwzMTQuMjUsODUuNHogTTMyNS43NSw0NDkuNmMwLDYuNC01LjIsMTEuNi0xMS42LDExLjZoLTIyN2MtNi40LDAtMTEuNi01LjItMTEuNi0xMS42VjEyNCAgICBjMC02LjQsNS4yLTExLjYsMTEuNi0xMS42aDIyN2M2LjQsMCwxMS42LDUuMiwxMS42LDExLjZWNDQ5LjZ6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTQwMS4wNSwwaC0yMjdjLTIxLjMsMC0zOC42LDE3LjMtMzguNiwzOC42YzAsNy41LDYsMTMuNSwxMy41LDEzLjVzMTMuNS02LDEzLjUtMTMuNWMwLTYuNCw1LjItMTEuNiwxMS42LTExLjZoMjI3ICAgIGM2LjQsMCwxMS42LDUuMiwxMS42LDExLjZ2MzI1LjdjMCw2LjQtNS4yLDExLjYtMTEuNiwxMS42Yy03LjUsMC0xMy41LDYtMTMuNSwxMy41czYsMTMuNSwxMy41LDEzLjVjMjEuMywwLDM4LjYtMTcuMywzOC42LTM4LjYgICAgVjM4LjZDNDM5LjY1LDE3LjMsNDIyLjM1LDAsNDAxLjA1LDB6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=)}\n"]
    }]
  }], () => [{
    type: ConfigService
  }], {
    id: [{
      type: Input
    }],
    currentImage: [{
      type: Input
    }],
    refresh: [{
      type: Output
    }],
    delete: [{
      type: Output
    }],
    navigate: [{
      type: Output
    }],
    download: [{
      type: Output
    }],
    closeButton: [{
      type: Output
    }],
    fullscreen: [{
      type: Output
    }],
    customEmit: [{
      type: Output
    }]
  });
})();
var PreviewsComponent = class _PreviewsComponent extends AccessibleComponent {
  constructor(configService) {
    super();
    this.configService = configService;
    this.clickPreview = new EventEmitter();
    this.clickAction = Action.CLICK;
    this.keyboardAction = Action.KEYBOARD;
    this.previews = [];
    this.defaultPreviewSize = DEFAULT_PREVIEW_SIZE;
  }
  /**
   * Method ´ngOnInit´ to build `configPreview` applying a default value and also to
   * init the `previews` array.
   * This is an angular lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   */
  ngOnInit() {
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig) {
      throw new Error("Internal library error - libConfig must be defined");
    }
    this.accessibilityConfig = libConfig.accessibilityConfig;
    this.slideConfig = libConfig.slideConfig;
    this.previewConfig = libConfig.previewConfig;
    this.initPreviews(this.currentImage, this.images);
  }
  /**
   * Method to check if an image is active (i.e. a preview image).
   * @param InternalLibImage preview is an image to check if it's active or not
   * @returns boolean true if is active, false otherwise
   */
  isActive(preview) {
    if (!preview) {
      return false;
    }
    return preview.id === this.currentImage.id;
  }
  /**
   * Method ´ngOnChanges´ to update `previews` array.
   * Also, both `start` and `end` local variables will be updated accordingly.
   * This is an angular lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called when any data-bound property of a directive changes!!!
   */
  ngOnChanges(changes) {
    let currentImage = changes.currentImage?.currentValue ?? this.currentImage;
    let images = changes.images?.currentValue ?? this.images;
    if (this.previewConfig && currentImage && images) {
      this.initPreviews(currentImage, images);
    }
  }
  /**
   * Method called by events from both keyboard and mouse on a preview.
   * This will trigger the `clickpreview` output with the input preview as its payload.
   * @param InternalLibImage preview that triggered this method
   * @param KeyboardEvent | MouseEvent event payload
   * @param Action action that triggered the source event or `Action.NORMAL` if not specified
   */
  onImageEvent(preview, event, action = Action.NORMAL) {
    event?.stopPropagation();
    if (!this.previewConfig || !this.previewConfig.clickable) {
      return;
    }
    const result = super.handleImageEvent(event);
    if (result === NEXT || result === PREV) {
      this.clickPreview.emit(new ImageModalEvent(this.id, action, getIndex(preview, this.images)));
    }
  }
  /**
   * Method called by events from both keyboard and mouse on a navigation arrow.
   * It also emits an event to specify which arrow.
   * @param string direction of the navigation that can be either 'next' or 'prev'
   * @param KeyboardEvent | MouseEvent event payload
   * @param Action action that triggered the source event or `Action.NORMAL` if not specified
   */
  onNavigationEvent(direction, event, action = Action.NORMAL) {
    const result = super.handleNavigationEvent(direction, event);
    if (result === NEXT) {
      this.next();
    } else if (result === PREV) {
      this.previous();
    }
  }
  /**
   * Method used in the template to track ids in ngFor.
   * @param number index of the array
   * @param Image item of the array
   * @returns number the id of the item
   */
  trackById(index, item) {
    return item.id;
  }
  /**
   * Indicates if the previews 'left arrow' should be displayed or not.
   * @returns
   */
  displayLeftPreviewsArrow() {
    if (this.previewConfig?.number !== void 0 && this.images && this.previewConfig?.number >= this.images?.length) {
      return false;
    }
    return this.previewConfig?.arrows && this.start > 0 || !!this.slideConfig?.infinite;
  }
  /**
   * Indicates if the previews 'right arrow' should be displayed or not.
   * @returns
   */
  displayRightPreviewsArrow() {
    if (this.previewConfig?.number !== void 0 && this.images && this.previewConfig?.number >= this.images?.length) {
      return false;
    }
    return this.previewConfig?.arrows && this.images && this.end < this.images.length || !!this.slideConfig?.infinite;
  }
  /**
   * Private method to init previews based on the currentImage and the full array of images.
   * The current image in mandatory to show always the current preview (as highlighted).
   * @param InternalLibImage currentImage to decide how to show previews, because I always want to see the current image as highlighted
   * @param InternalLibImage[] images is the array of all images.
   */
  initPreviews(currentImage, images) {
    this.setIndexesPreviews(currentImage, images);
    this.previews = images.filter((img, i) => i >= this.start && i < this.end);
  }
  /**
   * Private method to update both `start` and `end` based on the currentImage.
   */
  setIndexesPreviews(currentImage, images) {
    if (!this.previewConfig || !images || !currentImage) {
      throw new Error("Internal library error - previewConfig, currentImage and images must be defined");
    }
    const previewsNumber = this.previewConfig.number;
    let start = getIndex(currentImage, images) - Math.floor(previewsNumber / 2);
    if (start < 0) start = 0;
    let end = start + previewsNumber;
    if (end > images.length) {
      start -= end - images.length;
      if (start < 0) start = 0;
      end = images.length;
    }
    this.start = start;
    this.end = end;
  }
  /**
   * Private method to update the visible previews navigating to the right (next).
   */
  next() {
    if (!this.previewConfig) {
      throw new Error("Internal library error - previewConfig must be defined");
    }
    if (this.end >= this.images.length) {
      const preventSliding = !!this.slideConfig && this.slideConfig.infinite === false;
      if (preventSliding) {
        return;
      }
      this.start = 0;
    } else {
      this.start++;
    }
    this.end = this.start + Math.min(this.previewConfig.number, this.images.length);
    this.previews = this.images.filter((img, i) => i >= this.start && i < this.end);
  }
  /**
   * Private method to update the visible previews navigating to the left (previous).
   */
  previous() {
    if (!this.previewConfig) {
      throw new Error("Internal library error - previewConfig must be defined");
    }
    if (this.start <= 0) {
      const preventSliding = !!this.slideConfig && this.slideConfig.infinite === false;
      if (preventSliding) {
        return;
      }
      this.end = this.images.length;
    } else {
      this.end--;
    }
    this.start = this.end - Math.min(this.previewConfig.number, this.images.length);
    this.previews = this.images.filter((img, i) => i >= this.start && i < this.end);
  }
  static {
    this.ɵfac = function PreviewsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PreviewsComponent)(ɵɵdirectiveInject(ConfigService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PreviewsComponent,
      selectors: [["ks-previews"]],
      inputs: {
        id: "id",
        currentImage: "currentImage",
        images: "images",
        customTemplate: "customTemplate"
      },
      outputs: {
        clickPreview: "clickPreview"
      },
      standalone: false,
      features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
      decls: 2,
      vars: 5,
      consts: [["defaultTemplate", ""], [1, "previews-container", 3, "title"], [4, "ngIf"], ["role", "button", 1, "nav-left", 3, "click", "keyup", "tabIndex"], ["aria-hidden", "true", 3, "title"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "button", 1, "nav-right", 3, "click", "keyup", "tabIndex"], [3, "click", "keyup"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["ksFallbackImage", "", "ksSize", "", "role", "img", 3, "class", "loading", "src", "fallbackImg", "sizeConfig", "title", "alt", "tabIndex", 4, "ngIf"], ["ksFallbackImage", "", "ksSize", "", "role", "img", 3, "loading", "src", "fallbackImg", "sizeConfig", "title", "alt", "tabIndex"]],
      template: function PreviewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "nav", 1);
          ɵɵtemplate(1, PreviewsComponent_ng_container_1_Template, 6, 14, "ng-container", 2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵclassProp("mobile-visible", ctx.previewConfig == null ? null : ctx.previewConfig.mobileVisible);
          ɵɵproperty("title", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.previewsContainerTitle);
          ɵɵattribute("aria-label", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.previewsContainerAriaLabel);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.previewConfig == null ? null : ctx.previewConfig.visible);
        }
      },
      dependencies: [NgForOf, NgIf, NgTemplateOutlet, SizeDirective, FallbackImageDirective],
      styles: ["@media only screen and (max-width: 767px),only screen and (max-device-width: 767px){.previews-container[_ngcontent-%COMP%]{display:none}.previews-container[_ngcontent-%COMP%] > .preview-image[_ngcontent-%COMP%]{display:none}.previews-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]{display:none}.previews-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]{display:none}.previews-container.mobile-visible[_ngcontent-%COMP%]{align-items:center;animation:_ngcontent-%COMP%_fadein-semi-visible08 .8s;display:flex;flex-direction:row;justify-content:center;margin-bottom:15px}.previews-container.mobile-visible[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]{display:flex}.previews-container.mobile-visible[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]{display:flex}.previews-container.mobile-visible[_ngcontent-%COMP%] > .preview-image[_ngcontent-%COMP%]{cursor:pointer;display:flex;margin-left:2px;margin-right:2px;opacity:.7;height:50px}.previews-container.mobile-visible[_ngcontent-%COMP%] > .preview-image.active[_ngcontent-%COMP%]{opacity:1}.previews-container.mobile-visible[_ngcontent-%COMP%] > .preview-image.unclickable[_ngcontent-%COMP%]{cursor:not-allowed}.previews-container.mobile-visible[_ngcontent-%COMP%] > .preview-image[_ngcontent-%COMP%]:hover{opacity:1;transition:all .5s ease;transition-property:opacity}}@media only screen and (min-device-width: 768px){.previews-container[_ngcontent-%COMP%]{align-items:center;animation:_ngcontent-%COMP%_fadein-semi-visible08 .8s;display:flex;flex-direction:row;justify-content:center;margin-bottom:15px}.previews-container[_ngcontent-%COMP%]   .preview-container[_ngcontent-%COMP%]{margin-left:2px;margin-right:2px;cursor:pointer}.previews-container[_ngcontent-%COMP%]   .preview-container.unclickable[_ngcontent-%COMP%]{cursor:not-allowed}.previews-container[_ngcontent-%COMP%]   .preview-container[_ngcontent-%COMP%]   .preview-image[_ngcontent-%COMP%]{opacity:.7;height:50px}.previews-container[_ngcontent-%COMP%]   .preview-container[_ngcontent-%COMP%]   .preview-image.active[_ngcontent-%COMP%]{opacity:1}.previews-container[_ngcontent-%COMP%]   .preview-container[_ngcontent-%COMP%]   .preview-image[_ngcontent-%COMP%]:hover{opacity:1;transition:all .5s ease;transition-property:opacity}.previews-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%], .previews-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%], .previews-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]{color:#919191;cursor:pointer;transition:all .5s}.previews-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]:hover, .previews-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]:hover, .previews-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.previews-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]{margin-right:10px}.previews-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]{margin-left:10px}}@keyframes _ngcontent-%COMP%_fadein-visible{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_fadein-semi-visible05{0%{opacity:0}to{opacity:.5}}@keyframes _ngcontent-%COMP%_fadein-semi-visible08{0%{opacity:0}to{opacity:.8}}@keyframes _ngcontent-%COMP%_fadein-semi-visible09{0%{opacity:0}to{opacity:.9}}", _c8],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreviewsComponent, [{
    type: Component,
    args: [{
      selector: "ks-previews",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<nav class="previews-container"
     [class.mobile-visible]="previewConfig?.mobileVisible"
     [attr.aria-label]="accessibilityConfig?.previewsContainerAriaLabel"
     [title]="accessibilityConfig?.previewsContainerTitle">

  <ng-container *ngIf="previewConfig?.visible">
    <a class="nav-left"
       [attr.aria-label]="accessibilityConfig?.previewScrollPrevAriaLabel"
       [tabIndex]="displayLeftPreviewsArrow() ? 0 : -1" role="button"
       (click)="onNavigationEvent('left', $event)" (keyup)="onNavigationEvent('left', $event)">
      <div class="inside {{ displayLeftPreviewsArrow() ? 'left-arrow-preview-image' : 'empty-arrow-preview-image'}}"
           aria-hidden="true"
           [title]="accessibilityConfig?.previewScrollPrevTitle"></div>
    </a>

    <ng-container *ngFor="let preview of previews; trackBy: trackById; let index = index">

      <div class="preview-container {{!previewConfig?.clickable ? ' unclickable' : ''}}"
        (click)="onImageEvent(preview, $event, clickAction)"
        (keyup)="onImageEvent(preview, $event, keyboardAction)"
      >
        <ng-container 
          *ngTemplateOutlet="!customTemplate ? defaultTemplate : customTemplate ; context:{preview, defaultTemplate}">
        </ng-container>
        <ng-template #defaultTemplate>
          <img *ngIf="preview?.modal?.img"
              class="inside preview-image {{isActive(preview) ? 'active' : ''}}"
              [loading]="preview.loading"
              [attr.fetchpriority]="preview.fetchpriority"
              [src]="preview.plain?.img ? preview.plain?.img! : preview.modal.img"
              ksFallbackImage [fallbackImg]="preview.plain?.fallbackImg ? preview.plain?.fallbackImg : preview.modal.fallbackImg"
              ksSize [sizeConfig]="{width: previewConfig?.size ? previewConfig?.size?.width! : defaultPreviewSize.width,
                                    height: previewConfig?.size ? previewConfig?.size?.height! : defaultPreviewSize.height}"
              [attr.aria-label]="preview.modal.ariaLabel ? preview.modal.ariaLabel : ''"
              [title]="(preview.modal.title || preview.modal.title === '') ? preview.modal.title : ''"
              alt="{{preview.modal.alt ? preview.modal.alt : ''}}"
              [tabIndex]="0" role="img"
          />
        </ng-template>
      </div>

    </ng-container>


    <a class="nav-right"
       [attr.aria-label]="accessibilityConfig?.previewScrollNextAriaLabel"
       [tabIndex]="displayRightPreviewsArrow() ? 0 : -1" role="button"
       (click)="onNavigationEvent('right', $event)" (keyup)="onNavigationEvent('right', $event)">
      <div class="inside {{ displayRightPreviewsArrow() ? 'right-arrow-preview-image' : 'empty-arrow-preview-image'}}"
           aria-hidden="true"
           [title]="accessibilityConfig?.previewScrollNextTitle"></div>
    </a>
  </ng-container>

</nav>
`,
      styles: ["@media only screen and (max-width: 767px),only screen and (max-device-width: 767px){.previews-container{display:none}.previews-container>.preview-image{display:none}.previews-container>.nav-left{display:none}.previews-container>.nav-right{display:none}.previews-container.mobile-visible{align-items:center;animation:fadein-semi-visible08 .8s;display:flex;flex-direction:row;justify-content:center;margin-bottom:15px}.previews-container.mobile-visible>.nav-left{display:flex}.previews-container.mobile-visible>.nav-right{display:flex}.previews-container.mobile-visible>.preview-image{cursor:pointer;display:flex;margin-left:2px;margin-right:2px;opacity:.7;height:50px}.previews-container.mobile-visible>.preview-image.active{opacity:1}.previews-container.mobile-visible>.preview-image.unclickable{cursor:not-allowed}.previews-container.mobile-visible>.preview-image:hover{opacity:1;transition:all .5s ease;transition-property:opacity}}@media only screen and (min-device-width: 768px){.previews-container{align-items:center;animation:fadein-semi-visible08 .8s;display:flex;flex-direction:row;justify-content:center;margin-bottom:15px}.previews-container .preview-container{margin-left:2px;margin-right:2px;cursor:pointer}.previews-container .preview-container.unclickable{cursor:not-allowed}.previews-container .preview-container .preview-image{opacity:.7;height:50px}.previews-container .preview-container .preview-image.active{opacity:1}.previews-container .preview-container .preview-image:hover{opacity:1;transition:all .5s ease;transition-property:opacity}.previews-container .nav,.previews-container>.nav-right,.previews-container>.nav-left{color:#919191;cursor:pointer;transition:all .5s}.previews-container .nav:hover,.previews-container>.nav-right:hover,.previews-container>.nav-left:hover{transform:scale(1.1)}.previews-container>.nav-left{margin-right:10px}.previews-container>.nav-right{margin-left:10px}}@keyframes fadein-visible{0%{opacity:0}to{opacity:1}}@keyframes fadein-semi-visible05{0%{opacity:0}to{opacity:.5}}@keyframes fadein-semi-visible08{0%{opacity:0}to{opacity:.8}}@keyframes fadein-semi-visible09{0%{opacity:0}to{opacity:.9}}\n", ".arrow-preview-image,.right-arrow-preview-image,.left-arrow-preview-image,.empty-arrow-preview-image{width:15px;height:15px;opacity:.5}.empty-arrow-preview-image{background:#000;opacity:0}.left-arrow-preview-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjUgICBjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);background-size:15px;transition:all .5s}.left-arrow-preview-image:hover{transform:scale(1.2)}.right-arrow-preview-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjUgICBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXogICAiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);background-size:15px;transition:all .5s}.right-arrow-preview-image:hover{transform:scale(1.2)}\n"]
    }]
  }], () => [{
    type: ConfigService
  }], {
    id: [{
      type: Input
    }],
    currentImage: [{
      type: Input
    }],
    images: [{
      type: Input
    }],
    customTemplate: [{
      type: Input
    }],
    clickPreview: [{
      type: Output
    }]
  });
})();
var Keyboard = {
  ESC: ESC_CODE,
  LEFT_ARROW: LEFT_ARROW_CODE,
  RIGHT_ARROW: RIGHT_ARROW_CODE,
  UP_ARROW: UP_ARROW_CODE,
  DOWN_ARROW: DOWN_ARROW_CODE
};
var LoadingSpinnerComponent = class _LoadingSpinnerComponent {
  constructor() {
    this.loadingStandard = LoadingType.STANDARD;
    this.loadingBars = LoadingType.BARS;
    this.loadingCircular = LoadingType.CIRCULAR;
    this.loadingDots = LoadingType.DOTS;
    this.loadingCubeFlipping = LoadingType.CUBE_FLIPPING;
    this.loadingCircles = LoadingType.CIRCLES;
    this.loadingExplosingSquares = LoadingType.EXPLOSING_SQUARES;
  }
  static {
    this.ɵfac = function LoadingSpinnerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoadingSpinnerComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _LoadingSpinnerComponent,
      selectors: [["ks-loading-spinner"]],
      inputs: {
        loadingConfig: "loadingConfig",
        accessibilityConfig: "accessibilityConfig"
      },
      standalone: false,
      decls: 9,
      vars: 10,
      consts: [[3, "title"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "cssload-loader"], [1, "cssload-inner", "cssload-one"], [1, "cssload-inner", "cssload-two"], [1, "cssload-inner", "cssload-three"], [1, "loader-bars"], [1, "loader-circular"], [1, "loader-dots"], [1, "cube-wrapper"], [1, "cube-folding"], [1, "leaf1"], [1, "leaf2"], [1, "leaf3"], [1, "leaf4"], ["id", "preloader"], ["id", "loader"], [1, "loader"]],
      template: function LoadingSpinnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵelementContainerStart(1, 1);
          ɵɵtemplate(2, LoadingSpinnerComponent_ng_container_2_Template, 5, 0, "ng-container", 2)(3, LoadingSpinnerComponent_ng_container_3_Template, 2, 0, "ng-container", 2)(4, LoadingSpinnerComponent_ng_container_4_Template, 2, 0, "ng-container", 2)(5, LoadingSpinnerComponent_ng_container_5_Template, 2, 0, "ng-container", 2)(6, LoadingSpinnerComponent_ng_container_6_Template, 7, 0, "ng-container", 2)(7, LoadingSpinnerComponent_ng_container_7_Template, 3, 0, "ng-container", 2)(8, LoadingSpinnerComponent_ng_container_8_Template, 6, 0, "ng-container", 2);
          ɵɵelementContainerEnd();
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("title", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.loadingSpinnerTitle);
          ɵɵattribute("aria-label", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.loadingSpinnerAriaLabel);
          ɵɵadvance();
          ɵɵproperty("ngSwitch", ctx.loadingConfig == null ? null : ctx.loadingConfig.type);
          ɵɵadvance();
          ɵɵproperty("ngSwitchCase", ctx.loadingStandard);
          ɵɵadvance();
          ɵɵproperty("ngSwitchCase", ctx.loadingBars);
          ɵɵadvance();
          ɵɵproperty("ngSwitchCase", ctx.loadingCircular);
          ɵɵadvance();
          ɵɵproperty("ngSwitchCase", ctx.loadingDots);
          ɵɵadvance();
          ɵɵproperty("ngSwitchCase", ctx.loadingCubeFlipping);
          ɵɵadvance();
          ɵɵproperty("ngSwitchCase", ctx.loadingCircles);
          ɵɵadvance();
          ɵɵproperty("ngSwitchCase", ctx.loadingExplosingSquares);
        }
      },
      dependencies: [NgSwitch, NgSwitchCase],
      styles: [".cssload-loader[_ngcontent-%COMP%]{position:absolute;inset:0;margin:auto;width:64px;height:64px;border-radius:50%;-o-border-radius:50%;-ms-border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;perspective:800px}.cssload-inner[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;box-sizing:border-box;-o-box-sizing:border-box;-ms-box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;border-radius:50%;-o-border-radius:50%;-ms-border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%}.cssload-inner.cssload-one[_ngcontent-%COMP%]{left:0%;top:0%;animation:_ngcontent-%COMP%_cssload-rotate-one .6s linear infinite;-o-animation:cssload-rotate-one .6s linear infinite;-ms-animation:cssload-rotate-one .6s linear infinite;-webkit-animation:_ngcontent-%COMP%_cssload-rotate-one .6s linear infinite;-moz-animation:cssload-rotate-one .6s linear infinite;border-bottom:3px solid rgba(255,255,255,.99)}.cssload-inner.cssload-two[_ngcontent-%COMP%]{right:0%;top:0%;animation:_ngcontent-%COMP%_cssload-rotate-two .6s linear infinite;-o-animation:cssload-rotate-two .6s linear infinite;-ms-animation:cssload-rotate-two .6s linear infinite;-webkit-animation:_ngcontent-%COMP%_cssload-rotate-two .6s linear infinite;-moz-animation:cssload-rotate-two .6s linear infinite;border-right:3px solid rgb(255,255,255)}.cssload-inner.cssload-three[_ngcontent-%COMP%]{right:0%;bottom:0%;animation:_ngcontent-%COMP%_cssload-rotate-three .6s linear infinite;-o-animation:cssload-rotate-three .6s linear infinite;-ms-animation:cssload-rotate-three .6s linear infinite;-webkit-animation:_ngcontent-%COMP%_cssload-rotate-three .6s linear infinite;-moz-animation:cssload-rotate-three .6s linear infinite;border-top:3px solid rgb(255,255,255)}@keyframes _ngcontent-%COMP%_cssload-rotate-one{0%{transform:rotateX(35deg) rotateY(-45deg) rotate(0)}to{transform:rotateX(35deg) rotateY(-45deg) rotate(360deg)}}@-o-keyframes cssload-rotate-one{0%{-o-transform:rotateX(35deg) rotateY(-45deg) rotateZ(0deg)}to{-o-transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg)}}@-ms-keyframes cssload-rotate-one{0%{-ms-transform:rotateX(35deg) rotateY(-45deg) rotateZ(0deg)}to{-ms-transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg)}}@-webkit-keyframes _ngcontent-%COMP%_cssload-rotate-one{0%{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotateZ(0deg)}to{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg)}}@-moz-keyframes cssload-rotate-one{0%{-moz-transform:rotateX(35deg) rotateY(-45deg) rotateZ(0deg)}to{-moz-transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg)}}@keyframes _ngcontent-%COMP%_cssload-rotate-two{0%{transform:rotateX(50deg) rotateY(10deg) rotate(0)}to{transform:rotateX(50deg) rotateY(10deg) rotate(360deg)}}@-o-keyframes cssload-rotate-two{0%{-o-transform:rotateX(50deg) rotateY(10deg) rotateZ(0deg)}to{-o-transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg)}}@-ms-keyframes cssload-rotate-two{0%{-ms-transform:rotateX(50deg) rotateY(10deg) rotateZ(0deg)}to{-ms-transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg)}}@-webkit-keyframes _ngcontent-%COMP%_cssload-rotate-two{0%{-webkit-transform:rotateX(50deg) rotateY(10deg) rotateZ(0deg)}to{-webkit-transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg)}}@-moz-keyframes cssload-rotate-two{0%{-moz-transform:rotateX(50deg) rotateY(10deg) rotateZ(0deg)}to{-moz-transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg)}}@keyframes _ngcontent-%COMP%_cssload-rotate-three{0%{transform:rotateX(35deg) rotateY(55deg) rotate(0)}to{transform:rotateX(35deg) rotateY(55deg) rotate(360deg)}}@-o-keyframes cssload-rotate-three{0%{-o-transform:rotateX(35deg) rotateY(55deg) rotateZ(0deg)}to{-o-transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg)}}@-ms-keyframes cssload-rotate-three{0%{-ms-transform:rotateX(35deg) rotateY(55deg) rotateZ(0deg)}to{-ms-transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg)}}@-webkit-keyframes _ngcontent-%COMP%_cssload-rotate-three{0%{-webkit-transform:rotateX(35deg) rotateY(55deg) rotateZ(0deg)}to{-webkit-transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg)}}@-moz-keyframes cssload-rotate-three{0%{-moz-transform:rotateX(35deg) rotateY(55deg) rotateZ(0deg)}to{-moz-transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg)}}", ".loader-dots[_ngcontent-%COMP%]{position:absolute;inset:0;color:#fefcff;font-size:10px;margin:auto;width:1em;height:1em;border-radius:50%;text-indent:-9999em;-webkit-animation:_ngcontent-%COMP%_load4 1.3s infinite linear;animation:_ngcontent-%COMP%_load4 1.3s infinite linear;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0)}@-webkit-keyframes _ngcontent-%COMP%_load4{0%,to{box-shadow:0 -3em 0 .2em,2em -2em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em}12.5%{box-shadow:0 -3em,2em -2em 0 .2em,3em 0,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}25%{box-shadow:0 -3em 0 -.5em,2em -2em,3em 0 0 .2em,2em 2em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}37.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0,2em 2em 0 .2em,0 3em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}50%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em,0 3em 0 .2em,-2em 2em,-3em 0 0 -1em,-2em -2em 0 -1em}62.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em,-2em 2em 0 .2em,-3em 0,-2em -2em 0 -1em}75%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em,-3em 0 0 .2em,-2em -2em}87.5%{box-shadow:0 -3em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em,-3em 0,-2em -2em 0 .2em}}@keyframes _ngcontent-%COMP%_load4{0%,to{box-shadow:0 -3em 0 .2em,2em -2em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em}12.5%{box-shadow:0 -3em,2em -2em 0 .2em,3em 0,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}25%{box-shadow:0 -3em 0 -.5em,2em -2em,3em 0 0 .2em,2em 2em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}37.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0,2em 2em 0 .2em,0 3em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}50%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em,0 3em 0 .2em,-2em 2em,-3em 0 0 -1em,-2em -2em 0 -1em}62.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em,-2em 2em 0 .2em,-3em 0,-2em -2em 0 -1em}75%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em,-3em 0 0 .2em,-2em -2em}87.5%{box-shadow:0 -3em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em,-3em 0,-2em -2em 0 .2em}}", '.loader-bars[_ngcontent-%COMP%], .loader-bars[_ngcontent-%COMP%]:before, .loader-bars[_ngcontent-%COMP%]:after{background:#fefcff;-webkit-animation:_ngcontent-%COMP%_load1 1s infinite ease-in-out;animation:_ngcontent-%COMP%_load1 1s infinite ease-in-out;width:1em;height:4em}.loader-bars[_ngcontent-%COMP%]{position:absolute;inset:0;color:#fefcff;text-indent:-9999em;margin:auto;font-size:11px;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation-delay:-.16s;animation-delay:-.16s}.loader-bars[_ngcontent-%COMP%]:before, .loader-bars[_ngcontent-%COMP%]:after{position:absolute;top:0;content:""}.loader-bars[_ngcontent-%COMP%]:before{left:-1.5em;-webkit-animation-delay:-.32s;animation-delay:-.32s}.loader-bars[_ngcontent-%COMP%]:after{left:1.5em}@-webkit-keyframes _ngcontent-%COMP%_load1{0%,80%,to{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}@keyframes _ngcontent-%COMP%_load1{0%,80%,to{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}', ".loader-circular[_ngcontent-%COMP%], .loader-circular[_ngcontent-%COMP%]:after{border-radius:50%;width:10em;height:10em}.loader-circular[_ngcontent-%COMP%]{position:absolute;inset:0;margin:auto;font-size:10px;text-indent:-9999em;border-top:1.1em solid rgba(255,255,255,.2);border-right:1.1em solid rgba(255,255,255,.2);border-bottom:1.1em solid rgba(255,255,255,.2);border-left:1.1em solid #ffffff;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation:_ngcontent-%COMP%_load8 1.1s infinite linear;animation:_ngcontent-%COMP%_load8 1.1s infinite linear}@-webkit-keyframes _ngcontent-%COMP%_load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes _ngcontent-%COMP%_load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}", '.cube-folding[_ngcontent-%COMP%]{width:50px;height:50px;display:inline-block;-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-webkit-transform:rotate(45deg);transform:rotate(45deg);font-size:0}.cube-folding[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;width:25px;height:25px;-moz-transform:scale(1.1);-ms-transform:scale(1.1);-webkit-transform:scale(1.1);transform:scale(1.1);display:inline-block}.cube-folding[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:"";background-color:#fff;position:absolute;left:0;top:0;display:block;width:25px;height:25px;-moz-transform-origin:100% 100%;-ms-transform-origin:100% 100%;-webkit-transform-origin:100% 100%;transform-origin:100% 100%;-moz-animation:folding 2.5s infinite linear both;-webkit-animation:_ngcontent-%COMP%_folding 2.5s infinite linear both;animation:_ngcontent-%COMP%_folding 2.5s infinite linear both}.cube-folding[_ngcontent-%COMP%]   .leaf2[_ngcontent-%COMP%]{-moz-transform:rotateZ(90deg) scale(1.1);-ms-transform:rotateZ(90deg) scale(1.1);-webkit-transform:rotateZ(90deg) scale(1.1);transform:rotate(90deg) scale(1.1)}.cube-folding[_ngcontent-%COMP%]   .leaf2[_ngcontent-%COMP%]:before{-moz-animation-delay:.3s;-webkit-animation-delay:.3s;animation-delay:.3s;background-color:#f2f2f2}.cube-folding[_ngcontent-%COMP%]   .leaf3[_ngcontent-%COMP%]{-moz-transform:rotateZ(270deg) scale(1.1);-ms-transform:rotateZ(270deg) scale(1.1);-webkit-transform:rotateZ(270deg) scale(1.1);transform:rotate(270deg) scale(1.1)}.cube-folding[_ngcontent-%COMP%]   .leaf3[_ngcontent-%COMP%]:before{-moz-animation-delay:.9s;-webkit-animation-delay:.9s;animation-delay:.9s;background-color:#f2f2f2}.cube-folding[_ngcontent-%COMP%]   .leaf4[_ngcontent-%COMP%]{-moz-transform:rotateZ(180deg) scale(1.1);-ms-transform:rotateZ(180deg) scale(1.1);-webkit-transform:rotateZ(180deg) scale(1.1);transform:rotate(180deg) scale(1.1)}.cube-folding[_ngcontent-%COMP%]   .leaf4[_ngcontent-%COMP%]:before{-moz-animation-delay:.6s;-webkit-animation-delay:.6s;animation-delay:.6s;background-color:#e6e6e6}@-moz-keyframes folding{0%,10%{-moz-transform:perspective(140px) rotateX(-180deg);transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{-moz-transform:perspective(140px) rotateX(0deg);transform:perspective(140px) rotateX(0);opacity:1}90%,to{-moz-transform:perspective(140px) rotateY(180deg);transform:perspective(140px) rotateY(180deg);opacity:0}}@-webkit-keyframes _ngcontent-%COMP%_folding{0%,10%{-webkit-transform:perspective(140px) rotateX(-180deg);transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{-webkit-transform:perspective(140px) rotateX(0deg);transform:perspective(140px) rotateX(0);opacity:1}90%,to{-webkit-transform:perspective(140px) rotateY(180deg);transform:perspective(140px) rotateY(180deg);opacity:0}}@keyframes _ngcontent-%COMP%_folding{0%,10%{-moz-transform:perspective(140px) rotateX(-180deg);-ms-transform:perspective(140px) rotateX(-180deg);-webkit-transform:perspective(140px) rotateX(-180deg);transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{-moz-transform:perspective(140px) rotateX(0deg);-ms-transform:perspective(140px) rotateX(0deg);-webkit-transform:perspective(140px) rotateX(0deg);transform:perspective(140px) rotateX(0);opacity:1}90%,to{-moz-transform:perspective(140px) rotateY(180deg);-ms-transform:perspective(140px) rotateY(180deg);-webkit-transform:perspective(140px) rotateY(180deg);transform:perspective(140px) rotateY(180deg);opacity:0}}.cube-wrapper[_ngcontent-%COMP%]{position:fixed;left:50%;top:50%;margin-top:-50px;margin-left:-50px;width:100px;height:100px;text-align:center}@-moz-keyframes text{to{top:35px}}@-webkit-keyframes _ngcontent-%COMP%_text{to{top:35px}}@keyframes _ngcontent-%COMP%_text{to{top:35px}}@-moz-keyframes shadow{to{bottom:-18px;width:100px}}@-webkit-keyframes _ngcontent-%COMP%_shadow{to{bottom:-18px;width:100px}}@keyframes _ngcontent-%COMP%_shadow{to{bottom:-18px;width:100px}}', '#preloader[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%}#loader[_ngcontent-%COMP%]{display:block;position:relative;left:50%;top:50%;width:100px;height:100px;margin:-75px 0 0 -75px;border-radius:50%;border:3px solid transparent;border-top-color:#b4b4b4;-webkit-animation:_ngcontent-%COMP%_spin 2s linear infinite;animation:_ngcontent-%COMP%_spin 2s linear infinite}#loader[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:5px;border-radius:50%;border:3px solid transparent;border-top-color:#d9d9d9;-webkit-animation:_ngcontent-%COMP%_spin 3s linear infinite;animation:_ngcontent-%COMP%_spin 3s linear infinite}#loader[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:15px;border-radius:50%;border:3px solid transparent;border-top-color:#fff;-webkit-animation:_ngcontent-%COMP%_spin 1.5s linear infinite;animation:_ngcontent-%COMP%_spin 1.5s linear infinite}@-webkit-keyframes _ngcontent-%COMP%_spin{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes _ngcontent-%COMP%_spin{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg)}}', "@keyframes _ngcontent-%COMP%_loader{0%,10%,to{width:60px;height:60px}65%{width:150px;height:150px}}@keyframes _ngcontent-%COMP%_loaderBlock{0%,30%{transform:rotate(0)}55%{background-color:#b4b4b4}to{transform:rotate(90deg)}}@keyframes _ngcontent-%COMP%_loaderBlockInverse{0%,20%{transform:rotate(0)}55%{background-color:#d9d9d9}to{transform:rotate(-90deg)}}.loader[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:60px;height:60px;transform:translate(-50%,-50%) rotate(45deg) translateZ(0);animation:_ngcontent-%COMP%_loader 1.2s infinite ease-in-out}.loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;display:block;width:40px;height:40px;background-color:#fff;animation:_ngcontent-%COMP%_loaderBlock 1.2s infinite ease-in-out both}.loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){top:0;left:0}.loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){top:0;right:0;animation:_ngcontent-%COMP%_loaderBlockInverse 1.2s infinite ease-in-out both}.loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){bottom:0;left:0;animation:_ngcontent-%COMP%_loaderBlockInverse 1.2s infinite ease-in-out both}.loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4){bottom:0;right:0}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingSpinnerComponent, [{
    type: Component,
    args: [{
      selector: "ks-loading-spinner",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: '<div [attr.aria-label]="accessibilityConfig?.loadingSpinnerAriaLabel"\n     [title]="accessibilityConfig?.loadingSpinnerTitle">\n\n  <ng-container [ngSwitch]="loadingConfig?.type">\n    <ng-container *ngSwitchCase="loadingStandard">\n      <div class="cssload-loader">\n        <div class="cssload-inner cssload-one"></div>\n        <div class="cssload-inner cssload-two"></div>\n        <div class="cssload-inner cssload-three"></div>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase="loadingBars">\n      <div class="loader-bars">\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase="loadingCircular">\n      <div class="loader-circular">\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase="loadingDots">\n      <div class="loader-dots">\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase="loadingCubeFlipping">\n      <div class="cube-wrapper">\n        <div class="cube-folding">\n          <span class="leaf1"></span>\n          <span class="leaf2"></span>\n          <span class="leaf3"></span>\n          <span class="leaf4"></span>\n        </div>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase="loadingCircles">\n      <div id="preloader">\n        <div id="loader"></div>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase="loadingExplosingSquares">\n      <div class="loader">\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n      </div>\n    </ng-container>\n  </ng-container>\n</div>\n',
      styles: [".cssload-loader{position:absolute;inset:0;margin:auto;width:64px;height:64px;border-radius:50%;-o-border-radius:50%;-ms-border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;perspective:800px}.cssload-inner{position:absolute;width:100%;height:100%;box-sizing:border-box;-o-box-sizing:border-box;-ms-box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;border-radius:50%;-o-border-radius:50%;-ms-border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%}.cssload-inner.cssload-one{left:0%;top:0%;animation:cssload-rotate-one .6s linear infinite;-o-animation:cssload-rotate-one .6s linear infinite;-ms-animation:cssload-rotate-one .6s linear infinite;-webkit-animation:cssload-rotate-one .6s linear infinite;-moz-animation:cssload-rotate-one .6s linear infinite;border-bottom:3px solid rgba(255,255,255,.99)}.cssload-inner.cssload-two{right:0%;top:0%;animation:cssload-rotate-two .6s linear infinite;-o-animation:cssload-rotate-two .6s linear infinite;-ms-animation:cssload-rotate-two .6s linear infinite;-webkit-animation:cssload-rotate-two .6s linear infinite;-moz-animation:cssload-rotate-two .6s linear infinite;border-right:3px solid rgb(255,255,255)}.cssload-inner.cssload-three{right:0%;bottom:0%;animation:cssload-rotate-three .6s linear infinite;-o-animation:cssload-rotate-three .6s linear infinite;-ms-animation:cssload-rotate-three .6s linear infinite;-webkit-animation:cssload-rotate-three .6s linear infinite;-moz-animation:cssload-rotate-three .6s linear infinite;border-top:3px solid rgb(255,255,255)}@keyframes cssload-rotate-one{0%{transform:rotateX(35deg) rotateY(-45deg) rotate(0)}to{transform:rotateX(35deg) rotateY(-45deg) rotate(360deg)}}@-o-keyframes cssload-rotate-one{0%{-o-transform:rotateX(35deg) rotateY(-45deg) rotateZ(0deg)}to{-o-transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg)}}@-ms-keyframes cssload-rotate-one{0%{-ms-transform:rotateX(35deg) rotateY(-45deg) rotateZ(0deg)}to{-ms-transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg)}}@-webkit-keyframes cssload-rotate-one{0%{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotateZ(0deg)}to{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg)}}@-moz-keyframes cssload-rotate-one{0%{-moz-transform:rotateX(35deg) rotateY(-45deg) rotateZ(0deg)}to{-moz-transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg)}}@keyframes cssload-rotate-two{0%{transform:rotateX(50deg) rotateY(10deg) rotate(0)}to{transform:rotateX(50deg) rotateY(10deg) rotate(360deg)}}@-o-keyframes cssload-rotate-two{0%{-o-transform:rotateX(50deg) rotateY(10deg) rotateZ(0deg)}to{-o-transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg)}}@-ms-keyframes cssload-rotate-two{0%{-ms-transform:rotateX(50deg) rotateY(10deg) rotateZ(0deg)}to{-ms-transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg)}}@-webkit-keyframes cssload-rotate-two{0%{-webkit-transform:rotateX(50deg) rotateY(10deg) rotateZ(0deg)}to{-webkit-transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg)}}@-moz-keyframes cssload-rotate-two{0%{-moz-transform:rotateX(50deg) rotateY(10deg) rotateZ(0deg)}to{-moz-transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg)}}@keyframes cssload-rotate-three{0%{transform:rotateX(35deg) rotateY(55deg) rotate(0)}to{transform:rotateX(35deg) rotateY(55deg) rotate(360deg)}}@-o-keyframes cssload-rotate-three{0%{-o-transform:rotateX(35deg) rotateY(55deg) rotateZ(0deg)}to{-o-transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg)}}@-ms-keyframes cssload-rotate-three{0%{-ms-transform:rotateX(35deg) rotateY(55deg) rotateZ(0deg)}to{-ms-transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg)}}@-webkit-keyframes cssload-rotate-three{0%{-webkit-transform:rotateX(35deg) rotateY(55deg) rotateZ(0deg)}to{-webkit-transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg)}}@-moz-keyframes cssload-rotate-three{0%{-moz-transform:rotateX(35deg) rotateY(55deg) rotateZ(0deg)}to{-moz-transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg)}}\n", ".loader-dots{position:absolute;inset:0;color:#fefcff;font-size:10px;margin:auto;width:1em;height:1em;border-radius:50%;text-indent:-9999em;-webkit-animation:load4 1.3s infinite linear;animation:load4 1.3s infinite linear;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0)}@-webkit-keyframes load4{0%,to{box-shadow:0 -3em 0 .2em,2em -2em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em}12.5%{box-shadow:0 -3em,2em -2em 0 .2em,3em 0,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}25%{box-shadow:0 -3em 0 -.5em,2em -2em,3em 0 0 .2em,2em 2em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}37.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0,2em 2em 0 .2em,0 3em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}50%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em,0 3em 0 .2em,-2em 2em,-3em 0 0 -1em,-2em -2em 0 -1em}62.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em,-2em 2em 0 .2em,-3em 0,-2em -2em 0 -1em}75%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em,-3em 0 0 .2em,-2em -2em}87.5%{box-shadow:0 -3em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em,-3em 0,-2em -2em 0 .2em}}@keyframes load4{0%,to{box-shadow:0 -3em 0 .2em,2em -2em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em}12.5%{box-shadow:0 -3em,2em -2em 0 .2em,3em 0,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}25%{box-shadow:0 -3em 0 -.5em,2em -2em,3em 0 0 .2em,2em 2em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}37.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0,2em 2em 0 .2em,0 3em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}50%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em,0 3em 0 .2em,-2em 2em,-3em 0 0 -1em,-2em -2em 0 -1em}62.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em,-2em 2em 0 .2em,-3em 0,-2em -2em 0 -1em}75%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em,-3em 0 0 .2em,-2em -2em}87.5%{box-shadow:0 -3em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em,-3em 0,-2em -2em 0 .2em}}\n", '.loader-bars,.loader-bars:before,.loader-bars:after{background:#fefcff;-webkit-animation:load1 1s infinite ease-in-out;animation:load1 1s infinite ease-in-out;width:1em;height:4em}.loader-bars{position:absolute;inset:0;color:#fefcff;text-indent:-9999em;margin:auto;font-size:11px;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation-delay:-.16s;animation-delay:-.16s}.loader-bars:before,.loader-bars:after{position:absolute;top:0;content:""}.loader-bars:before{left:-1.5em;-webkit-animation-delay:-.32s;animation-delay:-.32s}.loader-bars:after{left:1.5em}@-webkit-keyframes load1{0%,80%,to{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}@keyframes load1{0%,80%,to{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}\n', ".loader-circular,.loader-circular:after{border-radius:50%;width:10em;height:10em}.loader-circular{position:absolute;inset:0;margin:auto;font-size:10px;text-indent:-9999em;border-top:1.1em solid rgba(255,255,255,.2);border-right:1.1em solid rgba(255,255,255,.2);border-bottom:1.1em solid rgba(255,255,255,.2);border-left:1.1em solid #ffffff;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation:load8 1.1s infinite linear;animation:load8 1.1s infinite linear}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\n", '.cube-folding{width:50px;height:50px;display:inline-block;-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-webkit-transform:rotate(45deg);transform:rotate(45deg);font-size:0}.cube-folding span{position:relative;width:25px;height:25px;-moz-transform:scale(1.1);-ms-transform:scale(1.1);-webkit-transform:scale(1.1);transform:scale(1.1);display:inline-block}.cube-folding span:before{content:"";background-color:#fff;position:absolute;left:0;top:0;display:block;width:25px;height:25px;-moz-transform-origin:100% 100%;-ms-transform-origin:100% 100%;-webkit-transform-origin:100% 100%;transform-origin:100% 100%;-moz-animation:folding 2.5s infinite linear both;-webkit-animation:folding 2.5s infinite linear both;animation:folding 2.5s infinite linear both}.cube-folding .leaf2{-moz-transform:rotateZ(90deg) scale(1.1);-ms-transform:rotateZ(90deg) scale(1.1);-webkit-transform:rotateZ(90deg) scale(1.1);transform:rotate(90deg) scale(1.1)}.cube-folding .leaf2:before{-moz-animation-delay:.3s;-webkit-animation-delay:.3s;animation-delay:.3s;background-color:#f2f2f2}.cube-folding .leaf3{-moz-transform:rotateZ(270deg) scale(1.1);-ms-transform:rotateZ(270deg) scale(1.1);-webkit-transform:rotateZ(270deg) scale(1.1);transform:rotate(270deg) scale(1.1)}.cube-folding .leaf3:before{-moz-animation-delay:.9s;-webkit-animation-delay:.9s;animation-delay:.9s;background-color:#f2f2f2}.cube-folding .leaf4{-moz-transform:rotateZ(180deg) scale(1.1);-ms-transform:rotateZ(180deg) scale(1.1);-webkit-transform:rotateZ(180deg) scale(1.1);transform:rotate(180deg) scale(1.1)}.cube-folding .leaf4:before{-moz-animation-delay:.6s;-webkit-animation-delay:.6s;animation-delay:.6s;background-color:#e6e6e6}@-moz-keyframes folding{0%,10%{-moz-transform:perspective(140px) rotateX(-180deg);transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{-moz-transform:perspective(140px) rotateX(0deg);transform:perspective(140px) rotateX(0);opacity:1}90%,to{-moz-transform:perspective(140px) rotateY(180deg);transform:perspective(140px) rotateY(180deg);opacity:0}}@-webkit-keyframes folding{0%,10%{-webkit-transform:perspective(140px) rotateX(-180deg);transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{-webkit-transform:perspective(140px) rotateX(0deg);transform:perspective(140px) rotateX(0);opacity:1}90%,to{-webkit-transform:perspective(140px) rotateY(180deg);transform:perspective(140px) rotateY(180deg);opacity:0}}@keyframes folding{0%,10%{-moz-transform:perspective(140px) rotateX(-180deg);-ms-transform:perspective(140px) rotateX(-180deg);-webkit-transform:perspective(140px) rotateX(-180deg);transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{-moz-transform:perspective(140px) rotateX(0deg);-ms-transform:perspective(140px) rotateX(0deg);-webkit-transform:perspective(140px) rotateX(0deg);transform:perspective(140px) rotateX(0);opacity:1}90%,to{-moz-transform:perspective(140px) rotateY(180deg);-ms-transform:perspective(140px) rotateY(180deg);-webkit-transform:perspective(140px) rotateY(180deg);transform:perspective(140px) rotateY(180deg);opacity:0}}.cube-wrapper{position:fixed;left:50%;top:50%;margin-top:-50px;margin-left:-50px;width:100px;height:100px;text-align:center}@-moz-keyframes text{to{top:35px}}@-webkit-keyframes text{to{top:35px}}@keyframes text{to{top:35px}}@-moz-keyframes shadow{to{bottom:-18px;width:100px}}@-webkit-keyframes shadow{to{bottom:-18px;width:100px}}@keyframes shadow{to{bottom:-18px;width:100px}}\n', '#preloader{position:fixed;top:0;left:0;width:100%;height:100%}#loader{display:block;position:relative;left:50%;top:50%;width:100px;height:100px;margin:-75px 0 0 -75px;border-radius:50%;border:3px solid transparent;border-top-color:#b4b4b4;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}#loader:before{content:"";position:absolute;inset:5px;border-radius:50%;border:3px solid transparent;border-top-color:#d9d9d9;-webkit-animation:spin 3s linear infinite;animation:spin 3s linear infinite}#loader:after{content:"";position:absolute;inset:15px;border-radius:50%;border:3px solid transparent;border-top-color:#fff;-webkit-animation:spin 1.5s linear infinite;animation:spin 1.5s linear infinite}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg)}}\n', "@keyframes loader{0%,10%,to{width:60px;height:60px}65%{width:150px;height:150px}}@keyframes loaderBlock{0%,30%{transform:rotate(0)}55%{background-color:#b4b4b4}to{transform:rotate(90deg)}}@keyframes loaderBlockInverse{0%,20%{transform:rotate(0)}55%{background-color:#d9d9d9}to{transform:rotate(-90deg)}}.loader{position:absolute;top:50%;left:50%;width:60px;height:60px;transform:translate(-50%,-50%) rotate(45deg) translateZ(0);animation:loader 1.2s infinite ease-in-out}.loader span{position:absolute;display:block;width:40px;height:40px;background-color:#fff;animation:loaderBlock 1.2s infinite ease-in-out both}.loader span:nth-child(1){top:0;left:0}.loader span:nth-child(2){top:0;right:0;animation:loaderBlockInverse 1.2s infinite ease-in-out both}.loader span:nth-child(3){bottom:0;left:0;animation:loaderBlockInverse 1.2s infinite ease-in-out both}.loader span:nth-child(4){bottom:0;right:0}\n"]
    }]
  }], null, {
    loadingConfig: [{
      type: Input
    }],
    accessibilityConfig: [{
      type: Input
    }]
  });
})();
var KeyboardNavigationDirective = class _KeyboardNavigationDirective {
  constructor() {
    this.keyboardNavigation = new EventEmitter();
  }
  /**
   * Listener to catch keyboard's events and call the right method based on the key.
   * For instance, pressing esc, this will call `closeGallery(Action.KEYBOARD)` and so on.
   * If you passed a valid `keyboardConfig` esc, right and left buttons will be customized based on your data.
   * @param e KeyboardEvent caught by the listener.
   */
  onKeyDown(e) {
    if (!this.isOpen) {
      return;
    }
    this.keyboardNavigation.emit(e.code);
  }
  static {
    this.ɵfac = function KeyboardNavigationDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _KeyboardNavigationDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _KeyboardNavigationDirective,
      selectors: [["", "ksKeyboardNavigation", ""]],
      hostBindings: function KeyboardNavigationDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown", function KeyboardNavigationDirective_keydown_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          }, false, ɵɵresolveWindow);
        }
      },
      inputs: {
        isOpen: "isOpen"
      },
      outputs: {
        keyboardNavigation: "keyboardNavigation"
      },
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KeyboardNavigationDirective, [{
    type: Directive,
    args: [{
      selector: "[ksKeyboardNavigation]",
      standalone: false
    }]
  }], null, {
    isOpen: [{
      type: Input
    }],
    keyboardNavigation: [{
      type: Output
    }],
    onKeyDown: [{
      type: HostListener,
      args: ["window:keydown", ["$event"]]
    }]
  });
})();
var SwipeDirective = class _SwipeDirective {
  constructor() {
    this.defaultTouch = {
      x: 0,
      y: 0,
      time: 0
    };
    this.swipeLeft = new EventEmitter();
    this.swipeRight = new EventEmitter();
    this.swipeUp = new EventEmitter();
    this.swipeDown = new EventEmitter();
  }
  /**
   * Method called by Angular itself every click thanks to `@HostListener`.
   * @param event TouchEvent payload received on touch
   */
  handleTouch(event) {
    let touch = event.touches[0] || event.changedTouches[0];
    if (event.type === "touchstart") {
      this.defaultTouch.x = touch.pageX;
      this.defaultTouch.y = touch.pageY;
      this.defaultTouch.time = event.timeStamp;
    } else if (event.type === "touchend") {
      let deltaX = touch.pageX - this.defaultTouch.x;
      let deltaY = touch.pageY - this.defaultTouch.y;
      let deltaTime = event.timeStamp - this.defaultTouch.time;
      if (deltaTime < 500) {
        if (Math.abs(deltaX) > 60) {
          if (deltaX > 0) {
            this.swipeRight.emit();
          } else {
            this.swipeLeft.emit();
          }
        }
        if (Math.abs(deltaY) > 60) {
          if (deltaY > 0) {
            this.swipeDown.emit();
          } else {
            this.swipeUp.emit();
          }
        }
      }
    }
  }
  static {
    this.ɵfac = function SwipeDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SwipeDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _SwipeDirective,
      selectors: [["", "ksSwipe", ""]],
      hostBindings: function SwipeDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("touchstart", function SwipeDirective_touchstart_HostBindingHandler($event) {
            return ctx.handleTouch($event);
          })("touchend", function SwipeDirective_touchend_HostBindingHandler($event) {
            return ctx.handleTouch($event);
          })("touchcancel", function SwipeDirective_touchcancel_HostBindingHandler($event) {
            return ctx.handleTouch($event);
          });
        }
      },
      outputs: {
        swipeLeft: "swipeLeft",
        swipeRight: "swipeRight",
        swipeUp: "swipeUp",
        swipeDown: "swipeDown"
      },
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwipeDirective, [{
    type: Directive,
    args: [{
      selector: "[ksSwipe]",
      standalone: false
    }]
  }], null, {
    swipeLeft: [{
      type: Output
    }],
    swipeRight: [{
      type: Output
    }],
    swipeUp: [{
      type: Output
    }],
    swipeDown: [{
      type: Output
    }],
    handleTouch: [{
      type: HostListener,
      args: ["touchstart", ["$event"]]
    }, {
      type: HostListener,
      args: ["touchend", ["$event"]]
    }, {
      type: HostListener,
      args: ["touchcancel", ["$event"]]
    }]
  });
})();
var CurrentImageComponent = class _CurrentImageComponent extends AccessibleComponent {
  // use public ChangeDetectorRef to be able to call it from spec files to trigger change detection
  // tslint:disable-next-line:no-any
  constructor(platformId, ngZone, ref, configService) {
    super();
    this.platformId = platformId;
    this.ngZone = ngZone;
    this.ref = ref;
    this.configService = configService;
    this.isOpen = false;
    this.loadImage = new EventEmitter();
    this.changeImage = new EventEmitter();
    this.closeGallery = new EventEmitter();
    this.start$ = new Subject();
    this.stop$ = new Subject();
    this.normalAction = Action.NORMAL;
    this.clickAction = Action.CLICK;
    this.keyboardAction = Action.KEYBOARD;
    this.isFirstImage = false;
    this.isLastImage = false;
    this.loading = true;
  }
  /**
   * Listener to stop the gallery when the mouse pointer is over the current image.
   */
  onMouseEnter() {
    if (!this.slideConfig || !this.slideConfig.playConfig) {
      return;
    }
    if (!this.slideConfig.playConfig.pauseOnHover) {
      return;
    }
    this.stopCarousel();
  }
  /**
   * Listener to play the gallery when the mouse pointer leave the current image.
   */
  onMouseLeave() {
    if (!this.slideConfig || !this.slideConfig.playConfig) {
      return;
    }
    if (!this.slideConfig.playConfig.pauseOnHover || !this.slideConfig.playConfig.autoPlay) {
      return;
    }
    this.playCarousel();
  }
  /**
   * Method ´ngOnInit´ to init configuration.
   * This is an angular lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   */
  ngOnInit() {
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig || !libConfig.buttonsConfig) {
      throw new Error("Internal library error - libConfig and buttonsConfig must be defined");
    }
    this.slideConfig = libConfig.slideConfig;
    this.accessibilityConfig = libConfig.accessibilityConfig;
    this.currentImageConfig = libConfig.currentImageConfig;
    this.keyboardConfig = libConfig.keyboardConfig;
  }
  /**
   * Method ´ngOnChanges´ to update `loading` status and emit events.
   * If the gallery is open, then it will also manage boundary arrows and sliding.
   * This is an angular lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called when any data-bound property of a directive changes!!!
   */
  ngOnChanges(changes) {
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig) {
      throw new Error("Internal library error - libConfig must be defined");
    }
    const images = changes.images;
    const currentImage = changes.currentImage;
    if (currentImage && currentImage.previousValue !== currentImage.currentValue) {
      this.updateIndexes();
    } else if (images && images.previousValue !== images.currentValue) {
      this.updateIndexes();
    }
    const slideConfig = changes.slideConfig;
    if (slideConfig && slideConfig.previousValue !== slideConfig.currentValue) {
      this.slideConfig = libConfig.slideConfig;
    }
  }
  /**
   * This is an angular lifecycle hook, so its called automatically by Angular itself.
   */
  ngAfterContentInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.ngZone.runOutsideAngular(() => {
        this.start$.pipe(
          map(() => this.slideConfig && this.slideConfig.playConfig && this.slideConfig.playConfig.autoPlay && this.slideConfig.playConfig.interval),
          // tslint:disable-next-line:no-any
          filter((interval) => interval > 0),
          switchMap((interval) => timer(interval).pipe(takeUntil(this.stop$)))
        ).subscribe(() => this.ngZone.run(() => {
          if (!this.isLastImage) {
            this.nextImage(Action.AUTOPLAY);
          }
          this.ref.markForCheck();
        }));
        this.start$.next();
      });
    }
  }
  /**
   * Method to handle keypress based on the `keyboardConfig` input. It gets the code of
   * the key that triggered the keypress event to navigate between images or to close the modal gallery.
   * @param code string of the key that triggered the keypress event
   */
  onKeyPress(code) {
    const esc = this.keyboardConfig && this.keyboardConfig.esc ? this.keyboardConfig.esc : Keyboard.ESC;
    const right = this.keyboardConfig && this.keyboardConfig.right ? this.keyboardConfig.right : Keyboard.RIGHT_ARROW;
    const left = this.keyboardConfig && this.keyboardConfig.left ? this.keyboardConfig.left : Keyboard.LEFT_ARROW;
    switch (code) {
      case esc:
        this.closeGallery.emit(new ImageModalEvent(this.id, Action.KEYBOARD, true));
        break;
      case right:
        this.nextImage(Action.KEYBOARD);
        break;
      case left:
        this.prevImage(Action.KEYBOARD);
        break;
    }
  }
  /**
   * Method to get the image description based on input params.
   * If you provide a full description this will be the visible description, otherwise,
   * it will be built using the `Description` object, concatenating its fields.
   * @param Image image to get its description. If not provided it will be the current image
   * @returns String description of the image (or the current image if not provided)
   * @throws an Error if description isn't available
   */
  getDescriptionToDisplay(image = this.currentImage) {
    if (!this.currentImageConfig || !this.currentImageConfig.description) {
      throw new Error("Description input must be a valid object implementing the Description interface");
    }
    const imageWithoutDescription = !image.modal || !image.modal.description || image.modal.description === "";
    switch (this.currentImageConfig.description.strategy) {
      case DescriptionStrategy.HIDE_IF_EMPTY:
        return imageWithoutDescription ? "" : image.modal.description + "";
      case DescriptionStrategy.ALWAYS_HIDDEN:
        return "";
      default:
        return this.buildTextDescription(image, imageWithoutDescription);
    }
  }
  /**
   * Method to get `alt attribute`.
   * `alt` specifies an alternate text for an image, if the image cannot be displayed.
   * @param Image image to get its alt description. If not provided it will be the current image
   * @returns String alt description of the image (or the current image if not provided)
   */
  getAltDescriptionByImage(image = this.currentImage) {
    if (!image) {
      return "";
    }
    return image.modal && image.modal.description ? image.modal.description : `Image ${getIndex(image, this.images) + 1}`;
  }
  /**
   * Method to get the title attributes based on descriptions.
   * This is useful to prevent accessibility issues, because if DescriptionStrategy is ALWAYS_HIDDEN,
   * it prevents an empty string as title.
   * @param Image image to get its description. If not provided it will be the current image
   * @returns String title of the image based on descriptions
   * @throws an Error if description isn't available
   */
  getTitleToDisplay(image = this.currentImage) {
    if (!this.currentImageConfig || !this.currentImageConfig.description) {
      throw new Error("Description input must be a valid object implementing the Description interface");
    }
    const imageWithoutDescription = !image.modal || !image.modal.description || image.modal.description === "";
    const description = this.buildTextDescription(image, imageWithoutDescription);
    return description;
  }
  /**
   * Method to get the left side preview image.
   * @returns Image the image to show as size preview on the left
   */
  getLeftPreviewImage() {
    if (!this.slideConfig) {
      throw new Error("Internal library error - slideConfig must be defined");
    }
    const currentIndex = getIndex(this.currentImage, this.images);
    if (currentIndex === 0 && this.slideConfig.infinite) {
      return this.images[this.images.length - 1];
    }
    this.handleBoundaries(currentIndex);
    return this.images[Math.max(currentIndex - 1, 0)];
  }
  /**
   * Method to get the right side preview image.
   * @returns Image the image to show as size preview on the right
   */
  getRightPreviewImage() {
    if (!this.slideConfig) {
      throw new Error("Internal library error - slideConfig must be defined");
    }
    const currentIndex = getIndex(this.currentImage, this.images);
    if (currentIndex === this.images.length - 1 && this.slideConfig.infinite) {
      return this.images[0];
    }
    this.handleBoundaries(currentIndex);
    return this.images[Math.min(currentIndex + 1, this.images.length - 1)];
  }
  /**
   * Method called by events from both keyboard and mouse on an image.
   * This will invoke the nextImage method.
   * @param KeyboardEvent | MouseEvent event payload
   * @param Action action that triggered the event or `Action.NORMAL` if not provided
   */
  onImageEvent(event, action = Action.NORMAL) {
    if (!this.currentImageConfig) {
      throw new Error("Internal library error - currentImageConfig must be defined");
    }
    if (action === Action.CLICK && !this.currentImageConfig.navigateOnClick) {
      return;
    }
    const result = super.handleImageEvent(event);
    if (result === NEXT) {
      this.nextImage(action);
    }
  }
  /**
   * Method called by events from both keyboard and mouse on a navigation arrow.
   * @param string direction of the navigation that can be either 'next' or 'prev'
   * @param KeyboardEvent | MouseEvent event payload
   * @param Action action that triggered the event or `Action.NORMAL` if not provided
   * @param boolean disable to disable navigation
   */
  onNavigationEvent(direction, event, action = Action.NORMAL, disable = false) {
    if (disable) {
      return;
    }
    const result = super.handleNavigationEvent(direction, event);
    if (result === NEXT) {
      this.nextImage(action);
    } else if (result === PREV) {
      this.prevImage(action);
    }
  }
  /**
   * Method to go back to the previous image.
   * @param action Enum of type `Action` that represents the source
   *  action that moved back to the previous image. `Action.NORMAL` by default.
   */
  prevImage(action = Action.NORMAL) {
    if (this.isPreventSliding(0)) {
      return;
    }
    const prevImage = this.getPrevImage();
    this.loading = !prevImage.previouslyLoaded;
    this.changeImage.emit(new ImageModalEvent(this.id, action, getIndex(prevImage, this.images)));
    this.start$.next();
  }
  /**
   * Method to go back to the previous image.
   * @param action Enum of type `Action` that represents the source
   *  action that moved to the next image. `Action.NORMAL` by default.
   */
  nextImage(action = Action.NORMAL) {
    if (this.isPreventSliding(this.images.length - 1)) {
      return;
    }
    const nextImage = this.getNextImage();
    this.loading = !nextImage.previouslyLoaded;
    this.changeImage.emit(new ImageModalEvent(this.id, action, getIndex(nextImage, this.images)));
    this.start$.next();
  }
  /**
   * Method to emit an event as loadImage output to say that the requested image if loaded.
   * This method is invoked by the javascript's 'load' event on an img tag.
   * @param Event event that triggered the load
   */
  onImageLoad(event) {
    const loadImageData = {
      status: true,
      index: getIndex(this.currentImage, this.images),
      id: this.currentImage.id
    };
    this.loadImage.emit(loadImageData);
    this.loading = false;
  }
  /**
   * Method used by SwipeDirective to support touch gestures (you can also invert the swipe direction with configCurrentImage.invertSwipe).
   * @param action String that represent the direction of the swipe action. 'swiperight' by default.
   */
  swipe(action = "swiperight") {
    if (!this.currentImageConfig) {
      throw new Error("Internal library error - currentImageConfig must be defined");
    }
    switch (action) {
      case "swiperight":
        if (this.currentImageConfig.invertSwipe) {
          this.prevImage(Action.SWIPE);
        } else {
          this.nextImage(Action.SWIPE);
        }
        break;
      case "swipeleft":
        if (this.currentImageConfig.invertSwipe) {
          this.nextImage(Action.SWIPE);
        } else {
          this.prevImage(Action.SWIPE);
        }
        break;
    }
  }
  /**
   * Method used in `modal-gallery.component` to get the index of an image to delete.
   * @param Image image to get the index, or the visible image, if not passed
   * @returns number the index of the image
   */
  getIndexToDelete(image = this.currentImage) {
    return getIndex(image, this.images);
  }
  /**
   * Method to play modal gallery.
   */
  playCarousel() {
    this.start$.next();
  }
  /**
   * Stops modal gallery from cycling through items.
   */
  stopCarousel() {
    this.stop$.next();
  }
  /**
   * Method to cleanup resources. In fact, this will stop the modal gallery.
   * This is an angular lifecycle hook that is called when this component is destroyed.
   */
  ngOnDestroy() {
    this.stopCarousel();
  }
  /**
   * Private method to update both `isFirstImage` and `isLastImage` based on
   * the index of the current image.
   * @param number currentIndex is the index of the current image
   */
  handleBoundaries(currentIndex) {
    if (this.images.length === 1) {
      this.isFirstImage = true;
      this.isLastImage = true;
      this.ref.markForCheck();
      return;
    }
    if (!this.slideConfig || this.slideConfig.infinite === true) {
      this.isFirstImage = false;
      this.isLastImage = false;
      this.ref.markForCheck();
    } else {
      switch (currentIndex) {
        case 0:
          this.isFirstImage = true;
          this.isLastImage = false;
          this.ref.markForCheck();
          break;
        case this.images.length - 1:
          this.isFirstImage = false;
          this.isLastImage = true;
          this.ref.markForCheck();
          break;
        default:
          this.isFirstImage = false;
          this.isLastImage = false;
          this.ref.markForCheck();
          break;
      }
    }
  }
  /**
   * Private method to check if next/prev actions should be blocked.
   * It checks if slideConfig.infinite === false and if the image index is equals to the input parameter.
   * If yes, it returns true to say that sliding should be blocked, otherwise not.
   * @param number boundaryIndex that could be either the beginning index (0) or the last index
   *  of images (this.images.length - 1).
   * @returns boolean true if slideConfig.infinite === false and the current index is
   *  either the first or the last one.
   */
  isPreventSliding(boundaryIndex) {
    return !!this.slideConfig && this.slideConfig.infinite === false && getIndex(this.currentImage, this.images) === boundaryIndex;
  }
  /**
   * Private method to get the next index.
   * This is necessary because at the end, when you call next again, you'll go to the first image.
   * That happens because all modal images are shown like in a circle.
   */
  getNextImage() {
    const currentIndex = getIndex(this.currentImage, this.images);
    let newIndex = 0;
    if (currentIndex >= 0 && currentIndex < this.images.length - 1) {
      newIndex = currentIndex + 1;
    } else {
      newIndex = 0;
    }
    return this.images[newIndex];
  }
  /**
   * Private method to get the previous index.
   * This is necessary because at index 0, when you call prev again, you'll go to the last image.
   * That happens because all modal images are shown like in a circle.
   */
  getPrevImage() {
    const currentIndex = getIndex(this.currentImage, this.images);
    let newIndex = 0;
    if (currentIndex > 0 && currentIndex <= this.images.length - 1) {
      newIndex = currentIndex - 1;
    } else {
      newIndex = this.images.length - 1;
    }
    return this.images[newIndex];
  }
  /**
   * Private method to build a text description.
   * This is used also to create titles.
   * @param Image image to get its description. If not provided it will be the current image.
   * @param boolean imageWithoutDescription is a boolean that it's true if the image hasn't a 'modal' description.
   * @returns String description built concatenating image fields with a specific logic.
   */
  buildTextDescription(image, imageWithoutDescription) {
    if (!this.currentImageConfig || !this.currentImageConfig.description) {
      throw new Error("Description input must be a valid object implementing the Description interface");
    }
    if (this.currentImageConfig.description.customFullDescription && this.currentImageConfig.description.customFullDescription !== "") {
      return this.currentImageConfig.description.customFullDescription;
    }
    const currentIndex = getIndex(image, this.images);
    const prevDescription = this.currentImageConfig.description.imageText ? this.currentImageConfig.description.imageText : "";
    const midSeparator = this.currentImageConfig.description.numberSeparator ? this.currentImageConfig.description.numberSeparator : "";
    const middleDescription = currentIndex + 1 + midSeparator + this.images.length;
    if (imageWithoutDescription) {
      return prevDescription + middleDescription;
    }
    const currImgDescription = image.modal && image.modal.description ? image.modal.description : "";
    const endDescription = this.currentImageConfig.description.beforeTextDescription + currImgDescription;
    return prevDescription + middleDescription + endDescription;
  }
  /**
   * Private method to call handleBoundaries when ngOnChanges is called.
   */
  updateIndexes() {
    try {
      if (this.isOpen) {
        const index = getIndex(this.currentImage, this.images);
        this.handleBoundaries(index);
      }
    } catch (err) {
      console.error("Cannot get the current image index in current-image");
      throw err;
    }
  }
  static {
    this.ɵfac = function CurrentImageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CurrentImageComponent)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ConfigService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CurrentImageComponent,
      selectors: [["ks-current-image"]],
      hostBindings: function CurrentImageComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("mouseenter", function CurrentImageComponent_mouseenter_HostBindingHandler() {
            return ctx.onMouseEnter();
          })("mouseleave", function CurrentImageComponent_mouseleave_HostBindingHandler() {
            return ctx.onMouseLeave();
          });
        }
      },
      inputs: {
        id: "id",
        currentImage: "currentImage",
        images: "images",
        isOpen: "isOpen"
      },
      outputs: {
        loadImage: "loadImage",
        changeImage: "changeImage",
        closeGallery: "closeGallery"
      },
      standalone: false,
      features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
      decls: 15,
      vars: 38,
      consts: [["firstImage", ""], ["lastImage", ""], ["ksKeyboardNavigation", "", 1, "main-image-container", 3, "keyboardNavigation", "isOpen", "title"], [1, "left-sub-container"], ["role", "button", 3, "click", "keyup", "tabIndex"], ["aria-hidden", "true", 3, "title"], [4, "ngIf"], ["id", "current-figure"], [1, "current-image"], [4, "ngFor", "ngForOf"], ["ksFallbackImage", "", "role", "img", "ksSwipe", "", 1, "inside", 3, "load", "click", "keyup", "swipeLeft", "swipeRight", "id", "loading", "ngClass", "src", "fallbackImg", "title", "alt", "tabIndex"], ["class", "inside description", "ksDescription", "", 3, "description", "innerHTML", 4, "ngIf"], [1, "right-sub-container"], ["class", "inside current-image-previous", "ksFallbackImage", "", "ksSize", "", "role", "img", 3, "loading", "src", "fallbackImg", "hidden", "sizeConfig", "title", "alt", "tabIndex", "click", "keyup", 4, "ngIf", "ngIfElse"], ["ksFallbackImage", "", "ksSize", "", "role", "img", 1, "inside", "current-image-previous", 3, "click", "keyup", "loading", "src", "fallbackImg", "hidden", "sizeConfig", "title", "alt", "tabIndex"], ["ksSize", "", 1, "current-image-previous", "hidden", 3, "sizeConfig"], [3, "media", "srcset"], ["ksDescription", "", 1, "inside", "description", 3, "description", "innerHTML"], ["class", "inside current-image-next", "ksFallbackImage", "", "ksSize", "", "role", "img", 3, "loading", "src", "fallbackImg", "hidden", "sizeConfig", "title", "alt", "tabIndex", "click", "keyup", 4, "ngIf", "ngIfElse"], ["ksFallbackImage", "", "ksSize", "", "role", "img", 1, "inside", "current-image-next", 3, "click", "keyup", "loading", "src", "fallbackImg", "hidden", "sizeConfig", "title", "alt", "tabIndex"], ["ksSize", "", 1, "current-image-next", "hidden", 3, "sizeConfig"], [3, "loadingConfig", "accessibilityConfig"]],
      template: function CurrentImageComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "main", 2);
          ɵɵlistener("keyboardNavigation", function CurrentImageComponent_Template_main_keyboardNavigation_0_listener($event) {
            return ctx.onKeyPress($event);
          });
          ɵɵelementStart(1, "div", 3)(2, "a", 4);
          ɵɵlistener("click", function CurrentImageComponent_Template_a_click_2_listener($event) {
            return ctx.onNavigationEvent("left", $event);
          })("keyup", function CurrentImageComponent_Template_a_keyup_2_listener($event) {
            return ctx.onNavigationEvent("left", $event);
          });
          ɵɵelement(3, "div", 5);
          ɵɵelementEnd();
          ɵɵtemplate(4, CurrentImageComponent_ng_container_4_Template, 2, 1, "ng-container", 6);
          ɵɵelementEnd();
          ɵɵelementStart(5, "figure", 7)(6, "picture", 8);
          ɵɵtemplate(7, CurrentImageComponent_ng_container_7_Template, 2, 2, "ng-container", 9);
          ɵɵelementStart(8, "img", 10);
          ɵɵlistener("load", function CurrentImageComponent_Template_img_load_8_listener($event) {
            return ctx.onImageLoad($event);
          })("click", function CurrentImageComponent_Template_img_click_8_listener($event) {
            return ctx.onImageEvent($event, ctx.clickAction);
          })("keyup", function CurrentImageComponent_Template_img_keyup_8_listener($event) {
            return ctx.onImageEvent($event, ctx.keyboardAction);
          })("swipeLeft", function CurrentImageComponent_Template_img_swipeLeft_8_listener() {
            return ctx.swipe("swipeleft");
          })("swipeRight", function CurrentImageComponent_Template_img_swipeRight_8_listener() {
            return ctx.swipe("swiperight");
          });
          ɵɵelementEnd()();
          ɵɵtemplate(9, CurrentImageComponent_figcaption_9_Template, 1, 2, "figcaption", 11);
          ɵɵelementEnd();
          ɵɵelementStart(10, "div", 12);
          ɵɵtemplate(11, CurrentImageComponent_ng_container_11_Template, 2, 1, "ng-container", 6)(12, CurrentImageComponent_ng_container_12_Template, 2, 2, "ng-container", 6);
          ɵɵelementStart(13, "a", 4);
          ɵɵlistener("click", function CurrentImageComponent_Template_a_click_13_listener($event) {
            return ctx.onNavigationEvent("right", $event);
          })("keyup", function CurrentImageComponent_Template_a_keyup_13_listener($event) {
            return ctx.onNavigationEvent("right", $event);
          });
          ɵɵelement(14, "div", 5);
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          ɵɵproperty("isOpen", ctx.isOpen)("title", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.mainContainerTitle);
          ɵɵattribute("aria-label", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.mainContainerAriaLabel);
          ɵɵadvance(2);
          ɵɵclassMapInterpolate1("nav-left ", ctx.isFirstImage ? "no-pointer" : "", "");
          ɵɵproperty("tabIndex", ctx.isFirstImage ? -1 : 0);
          ɵɵattribute("aria-label", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.mainPrevImageAriaLabel);
          ɵɵadvance();
          ɵɵclassMapInterpolate1("inside ", ctx.isFirstImage ? "empty-arrow-image" : "left-arrow-image", "");
          ɵɵproperty("title", ctx.isFirstImage ? "" : ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.mainPrevImageTitle);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.slideConfig == null ? null : ctx.slideConfig.sidePreviews == null ? null : ctx.slideConfig.sidePreviews.show);
          ɵɵadvance();
          ɵɵstyleProp("opacity", ctx.loading ? "0" : "1");
          ɵɵadvance(2);
          ɵɵproperty("ngForOf", ctx.currentImage.modal == null ? null : ctx.currentImage.modal.sources);
          ɵɵadvance();
          ɵɵpropertyInterpolate("alt", ctx.currentImage.modal.alt ? ctx.currentImage.modal.alt : ctx.getAltDescriptionByImage());
          ɵɵproperty("id", ctx.currentImage.id)("loading", ctx.currentImage.loading)("ngClass", (ctx.currentImageConfig == null ? null : ctx.currentImageConfig.navigateOnClick) ? "" : "unclickable")("src", ctx.currentImage.modal.img, ɵɵsanitizeUrl)("fallbackImg", ctx.currentImage.modal.fallbackImg)("title", ctx.currentImage.modal.title || ctx.currentImage.modal.title === "" ? ctx.currentImage.modal.title : ctx.getTitleToDisplay())("tabIndex", 0);
          ɵɵattribute("fetchpriority", ctx.currentImage.fetchpriority)("aria-label", ctx.currentImage.modal.ariaLabel);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.getDescriptionToDisplay() !== "");
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.slideConfig == null ? null : ctx.slideConfig.sidePreviews == null ? null : ctx.slideConfig.sidePreviews.show);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.loading && (ctx.currentImageConfig == null ? null : ctx.currentImageConfig.loadingConfig == null ? null : ctx.currentImageConfig.loadingConfig.enable));
          ɵɵadvance();
          ɵɵclassMapInterpolate1("nav-right ", ctx.isFirstImage ? "no-pointer" : "", "");
          ɵɵproperty("tabIndex", ctx.isLastImage ? -1 : 0);
          ɵɵattribute("aria-label", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.mainNextImageAriaLabel);
          ɵɵadvance();
          ɵɵclassMapInterpolate1("inside ", ctx.isLastImage ? "empty-arrow-image" : "right-arrow-image", "");
          ɵɵproperty("title", ctx.isLastImage ? "" : ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.mainNextImageTitle);
        }
      },
      dependencies: [NgClass, NgForOf, NgIf, LoadingSpinnerComponent, SizeDirective, KeyboardNavigationDirective, DescriptionDirective, FallbackImageDirective, SwipeDirective],
      styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:center}.main-image-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between}.main-image-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%], .main-image-container[_ngcontent-%COMP%] > .right-sub-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%], .main-image-container[_ngcontent-%COMP%] > .left-sub-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]{animation:animatezoom 1s;cursor:pointer;transition:all .5s}.main-image-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]:hover, .main-image-container[_ngcontent-%COMP%] > .right-sub-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]:hover, .main-image-container[_ngcontent-%COMP%] > .left-sub-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.main-image-container[_ngcontent-%COMP%] > .left-sub-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;align-items:center}.main-image-container[_ngcontent-%COMP%] > .left-sub-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]{margin-right:5px;margin-left:15px}.main-image-container[_ngcontent-%COMP%] > .left-sub-container[_ngcontent-%COMP%] > .nav-left.no-pointer[_ngcontent-%COMP%]{cursor:default!important}.main-image-container[_ngcontent-%COMP%] > .right-sub-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;align-items:center}.main-image-container[_ngcontent-%COMP%] > .right-sub-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]{margin-right:15px;margin-left:5px}.main-image-container[_ngcontent-%COMP%] > .right-sub-container[_ngcontent-%COMP%] > .nav-right.no-pointer[_ngcontent-%COMP%]{cursor:default!important}.main-image-container[_ngcontent-%COMP%]   #current-figure[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadein-visible .8s;text-align:center;margin:0;position:relative}.main-image-container[_ngcontent-%COMP%]   #current-figure[_ngcontent-%COMP%] > .current-image[_ngcontent-%COMP%]{display:block}.main-image-container[_ngcontent-%COMP%]   #current-figure[_ngcontent-%COMP%] > .current-image[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{max-width:100%;height:auto;display:block}.main-image-container[_ngcontent-%COMP%]   #current-figure[_ngcontent-%COMP%] > .current-image[_ngcontent-%COMP%] > img.unclickable[_ngcontent-%COMP%]{cursor:not-allowed}.main-image-container[_ngcontent-%COMP%]   #current-figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{padding:10px;position:absolute;bottom:0;left:0;right:0}.main-image-container[_ngcontent-%COMP%]   #current-figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-weight:700;text-align:center}.current-image[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{height:auto;max-width:80vw;max-height:60vh;cursor:pointer}@media screen and (min-width: 70vw){.current-image[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{max-width:70vw}}@keyframes _ngcontent-%COMP%_fadein-visible{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_fadein-semi-visible05{0%{opacity:0}to{opacity:.5}}@keyframes _ngcontent-%COMP%_fadein-semi-visible08{0%{opacity:0}to{opacity:.8}}@keyframes _ngcontent-%COMP%_fadein-semi-visible09{0%{opacity:0}to{opacity:.9}}", _c9, "@media only screen and (max-width: 1024px),only screen and (max-device-width: 1024px){.current-image-previous[_ngcontent-%COMP%], .current-image-next[_ngcontent-%COMP%]{display:none}}@media only screen and (min-device-width: 1025px){.current-image-preview[_ngcontent-%COMP%], .current-image-next[_ngcontent-%COMP%], .current-image-previous[_ngcontent-%COMP%]{height:auto;cursor:pointer;opacity:.5;animation:_ngcontent-%COMP%_fadein-semi-visible05 .8s;filter:alpha(opacity=50)}.current-image-preview[_ngcontent-%COMP%]:hover, .current-image-next[_ngcontent-%COMP%]:hover, .current-image-previous[_ngcontent-%COMP%]:hover{opacity:1;transition-property:opacity;transition:all .5s ease}.current-image-previous[_ngcontent-%COMP%]{margin-left:10px;margin-right:5px}.current-image-next[_ngcontent-%COMP%]{margin-right:10px;margin-left:5px}}@keyframes _ngcontent-%COMP%_fadein-semi-visible05{0%{opacity:0}to{opacity:.5}}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrentImageComponent, [{
    type: Component,
    args: [{
      selector: "ks-current-image",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<main class="main-image-container"
      ksKeyboardNavigation [isOpen]="isOpen" (keyboardNavigation)="onKeyPress($event)"
      [attr.aria-label]="accessibilityConfig?.mainContainerAriaLabel"
      [title]="accessibilityConfig?.mainContainerTitle">

  <div class="left-sub-container">
    <a class="nav-left {{isFirstImage ? 'no-pointer' : ''}}"
       [attr.aria-label]="accessibilityConfig?.mainPrevImageAriaLabel"
       [tabIndex]="isFirstImage ? -1 : 0" role="button"
       (click)="onNavigationEvent('left', $event)" (keyup)="onNavigationEvent('left', $event)">
      <div class="inside {{isFirstImage ? 'empty-arrow-image' : 'left-arrow-image'}}"
           aria-hidden="true"
           [title]="isFirstImage ? '' : accessibilityConfig?.mainPrevImageTitle"></div>
    </a>

    <ng-container *ngIf="slideConfig?.sidePreviews?.show">
      <ng-container *ngIf="getLeftPreviewImage() as leftPreview">
        <img *ngIf="!isFirstImage; else firstImage"
             class="inside current-image-previous"
             [loading]="leftPreview.loading"
             [attr.fetchpriority]="leftPreview.fetchpriority"
             [src]="leftPreview.plain?.img ? leftPreview.plain?.img : leftPreview.modal.img"
             ksFallbackImage [fallbackImg]="leftPreview.plain?.fallbackImg ? leftPreview.plain?.fallbackImg : leftPreview.modal.fallbackImg"
             [hidden]="loading"
             ksSize [sizeConfig]="{width: slideConfig?.sidePreviews?.size.width, height: slideConfig?.sidePreviews?.size.height}"
             [attr.aria-label]="leftPreview.modal.ariaLabel"
             [title]="(leftPreview.modal.title || leftPreview.modal.title === '') ? leftPreview.modal.title : getDescriptionToDisplay(leftPreview)"
             alt="{{leftPreview.modal.alt ? leftPreview.modal.alt : getAltDescriptionByImage(leftPreview)}}"
             [tabIndex]="0" role="img"
             (click)="onNavigationEvent('left', $event, clickAction)" (keyup)="onNavigationEvent('left', $event, keyboardAction)"/>
        <ng-template #firstImage>
          <div class="current-image-previous hidden"
               ksSize [sizeConfig]="{width: slideConfig?.sidePreviews?.size.width, height: slideConfig?.sidePreviews?.size.height}"></div>
        </ng-template>
      </ng-container>
    </ng-container>
  </div>


  <figure id="current-figure" [style.opacity]="loading ? '0' : '1'">
    <picture class="current-image">
      <ng-container *ngFor="let source of currentImage.modal?.sources">
        <source [media]="source.media" [srcset]="source.srcset">
      </ng-container>
      <img [id]="currentImage.id"
           [loading]="currentImage.loading"
           [attr.fetchpriority]="currentImage.fetchpriority"
           class="inside"
           [ngClass]="currentImageConfig?.navigateOnClick ? '' : 'unclickable'"
           [src]="currentImage.modal.img"
           ksFallbackImage [fallbackImg]="currentImage.modal.fallbackImg"
           [attr.aria-label]="currentImage.modal.ariaLabel"
           [title]="(currentImage.modal.title || currentImage.modal.title === '') ? currentImage.modal.title : getTitleToDisplay()"
           alt="{{currentImage.modal.alt ? currentImage.modal.alt : getAltDescriptionByImage()}}"
           [tabIndex]="0" role="img"
           (load)="onImageLoad($event)"
           (click)="onImageEvent($event, clickAction)" (keyup)="onImageEvent($event, keyboardAction)"
           ksSwipe
           (swipeLeft)="swipe('swipeleft')"
           (swipeRight)="swipe('swiperight')"/>
    </picture>
    <figcaption *ngIf="getDescriptionToDisplay() !== ''"
                class="inside description"
                ksDescription [description]="currentImageConfig?.description"
                [innerHTML]="getDescriptionToDisplay()">
    </figcaption>
  </figure>

  <div class="right-sub-container">
    <ng-container *ngIf="slideConfig?.sidePreviews?.show">
      <ng-container *ngIf="getRightPreviewImage() as rightPreview">
        <img *ngIf="!isLastImage; else lastImage"
             class="inside current-image-next"
             [loading]="rightPreview.loading"
             [attr.fetchpriority]="rightPreview.fetchpriority"
             [src]="rightPreview.plain?.img ? rightPreview.plain?.img : rightPreview.modal.img"
             ksFallbackImage [fallbackImg]="rightPreview.plain?.fallbackImg ? rightPreview.plain?.fallbackImg : rightPreview.modal.fallbackImg"
             [hidden]="loading"
             ksSize [sizeConfig]="{width: slideConfig?.sidePreviews?.size.width, height: slideConfig?.sidePreviews?.size.height}"
             [attr.aria-label]="rightPreview.modal.ariaLabel"
             [title]="(rightPreview.modal.title || rightPreview.modal.title === '') ? rightPreview.modal.title : getDescriptionToDisplay(rightPreview)"
             alt="{{rightPreview.modal.alt ? rightPreview.modal.alt : getAltDescriptionByImage(rightPreview)}}"
             [tabIndex]="0" role="img"
             (click)="onNavigationEvent('right', $event, clickAction)" (keyup)="onNavigationEvent('right', $event, keyboardAction)"/>
        <ng-template #lastImage>
          <div class="current-image-next hidden"
               ksSize [sizeConfig]="{width: slideConfig?.sidePreviews?.size.width, height: slideConfig?.sidePreviews?.size.height}">
          </div>
        </ng-template>
      </ng-container>
    </ng-container>

    <ng-container *ngIf="loading && currentImageConfig?.loadingConfig?.enable">
      <ks-loading-spinner [loadingConfig]="currentImageConfig?.loadingConfig"
                          [accessibilityConfig]="accessibilityConfig"></ks-loading-spinner>
    </ng-container>

    <a class="nav-right {{isFirstImage ? 'no-pointer' : ''}}"
       [attr.aria-label]="accessibilityConfig?.mainNextImageAriaLabel"
       [tabIndex]="isLastImage ? -1 : 0" role="button"
       (click)="onNavigationEvent('right', $event)" (keyup)="onNavigationEvent('right', $event)">
      <div class="inside {{isLastImage ? 'empty-arrow-image' : 'right-arrow-image'}}"
           aria-hidden="true"
           [title]="isLastImage ? '' : accessibilityConfig?.mainNextImageTitle"></div>
    </a>
  </div>
</main>
`,
      styles: [":host{display:flex;flex-direction:column;justify-content:center}.main-image-container{display:flex;flex-direction:row;align-items:center;justify-content:space-between}.main-image-container .nav,.main-image-container>.right-sub-container>.nav-right,.main-image-container>.left-sub-container>.nav-left{animation:animatezoom 1s;cursor:pointer;transition:all .5s}.main-image-container .nav:hover,.main-image-container>.right-sub-container>.nav-right:hover,.main-image-container>.left-sub-container>.nav-left:hover{transform:scale(1.1)}.main-image-container>.left-sub-container{display:flex;flex-direction:row;justify-content:space-around;align-items:center}.main-image-container>.left-sub-container>.nav-left{margin-right:5px;margin-left:15px}.main-image-container>.left-sub-container>.nav-left.no-pointer{cursor:default!important}.main-image-container>.right-sub-container{display:flex;flex-direction:row;justify-content:space-around;align-items:center}.main-image-container>.right-sub-container>.nav-right{margin-right:15px;margin-left:5px}.main-image-container>.right-sub-container>.nav-right.no-pointer{cursor:default!important}.main-image-container #current-figure{animation:fadein-visible .8s;text-align:center;margin:0;position:relative}.main-image-container #current-figure>.current-image{display:block}.main-image-container #current-figure>.current-image>img{max-width:100%;height:auto;display:block}.main-image-container #current-figure>.current-image>img.unclickable{cursor:not-allowed}.main-image-container #current-figure figcaption{padding:10px;position:absolute;bottom:0;left:0;right:0}.main-image-container #current-figure figcaption .description{font-weight:700;text-align:center}.current-image>img{height:auto;max-width:80vw;max-height:60vh;cursor:pointer}@media screen and (min-width: 70vw){.current-image>img{max-width:70vw}}@keyframes fadein-visible{0%{opacity:0}to{opacity:1}}@keyframes fadein-semi-visible05{0%{opacity:0}to{opacity:.5}}@keyframes fadein-semi-visible08{0%{opacity:0}to{opacity:.8}}@keyframes fadein-semi-visible09{0%{opacity:0}to{opacity:.9}}\n", ".arrow-image,.right-arrow-image,.left-arrow-image,.empty-arrow-image{width:30px;height:30px;background-size:30px}.empty-arrow-image{background:#000;opacity:0}.left-arrow-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjUgICBjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);opacity:.8;transition:all .5s}.left-arrow-image:hover{transform:scale(1.2)}.right-arrow-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjUgICBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXogICAiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);opacity:.8;transition:all .5s}.right-arrow-image:hover{transform:scale(1.2)}\n", "@media only screen and (max-width: 1024px),only screen and (max-device-width: 1024px){.current-image-previous,.current-image-next{display:none}}@media only screen and (min-device-width: 1025px){.current-image-preview,.current-image-next,.current-image-previous{height:auto;cursor:pointer;opacity:.5;animation:fadein-semi-visible05 .8s;filter:alpha(opacity=50)}.current-image-preview:hover,.current-image-next:hover,.current-image-previous:hover{opacity:1;transition-property:opacity;transition:all .5s ease}.current-image-previous{margin-left:10px;margin-right:5px}.current-image-next{margin-right:10px;margin-left:5px}}@keyframes fadein-semi-visible05{0%{opacity:0}to{opacity:.5}}\n"]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: ConfigService
  }], {
    id: [{
      type: Input
    }],
    currentImage: [{
      type: Input
    }],
    images: [{
      type: Input
    }],
    // @ts-ignore
    isOpen: [{
      type: Input
    }],
    loadImage: [{
      type: Output
    }],
    changeImage: [{
      type: Output
    }],
    closeGallery: [{
      type: Output
    }],
    onMouseEnter: [{
      type: HostListener,
      args: ["mouseenter"]
    }],
    onMouseLeave: [{
      type: HostListener,
      args: ["mouseleave"]
    }]
  });
})();
var WrapDirective = class _WrapDirective {
  constructor(renderer, el) {
    this.renderer = renderer;
    this.el = el;
  }
  /**
   * Method ´ngOnInit´ to apply the style of this directive.
   * This is an angular lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   */
  ngOnInit() {
    this.applyStyle();
  }
  /**
   * Method ´ngOnChanges´ to apply the style of this directive.
   * This is an angular lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called when any data-bound property of a directive changes!!!
   */
  ngOnChanges() {
    this.applyStyle();
  }
  /**
   * Private method to change both width and flex-wrap css properties.
   */
  applyStyle() {
    if (!this.wrap) {
      return;
    }
    this.renderer.setStyle(this.el.nativeElement, "width", this.width);
    this.renderer.setStyle(this.el.nativeElement, "flex-wrap", this.wrap ? "wrap" : "nowrap");
  }
  static {
    this.ɵfac = function WrapDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WrapDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _WrapDirective,
      selectors: [["", "ksWrap", ""]],
      inputs: {
        wrap: "wrap",
        width: "width"
      },
      standalone: false,
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WrapDirective, [{
    type: Directive,
    args: [{
      selector: "[ksWrap]",
      standalone: false
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    wrap: [{
      type: Input
    }],
    width: [{
      type: Input
    }]
  });
})();
var DirectionDirective = class _DirectionDirective {
  constructor(renderer, el) {
    this.renderer = renderer;
    this.el = el;
  }
  /**
   * Method ´ngOnInit´ to apply the style of this directive.
   * This is an angular lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   */
  ngOnInit() {
    this.applyStyle();
  }
  /**
   * Method ´ngOnChanges´ to apply the style of this directive.
   * This is an angular lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called when any data-bound property of a directive changes!!!
   */
  ngOnChanges() {
    this.applyStyle();
  }
  /**
   * Private method to change both direction and justify of an element.
   */
  applyStyle() {
    if (!this.direction || !this.justify) {
      return;
    }
    this.renderer.setStyle(this.el.nativeElement, "flex-direction", this.direction);
    this.renderer.setStyle(this.el.nativeElement, "justify-content", this.justify);
  }
  static {
    this.ɵfac = function DirectionDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DirectionDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _DirectionDirective,
      selectors: [["", "ksDirection", ""]],
      inputs: {
        direction: "direction",
        justify: "justify"
      },
      standalone: false,
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DirectionDirective, [{
    type: Directive,
    args: [{
      selector: "[ksDirection]",
      standalone: false
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    direction: [{
      type: Input
    }],
    justify: [{
      type: Input
    }]
  });
})();
var ATagBgImageDirective = class _ATagBgImageDirective {
  constructor(renderer, el) {
    this.renderer = renderer;
    this.el = el;
  }
  /**
   * Method ´ngOnInit´ to apply the style of this directive.
   * This is an angular lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   */
  ngOnInit() {
    this.applyStyle();
  }
  /**
   * Method ´ngOnChanges´ to apply the style of this directive.
   * This is an angular lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called when any data-bound property of a directive changes!!!
   */
  ngOnChanges() {
    this.applyStyle();
  }
  /**
   * Private method to add an image as background of an `<a>` tag.
   */
  applyStyle() {
    if (!this.image || !this.image.plain && !this.image.modal) {
      return;
    }
    const imgPath = this.image.plain && this.image.plain.img ? this.image.plain.img : this.image.modal.img;
    let bg = `url("${imgPath}") ${this.style}`;
    const fallbackImgPath = this.image.plain && this.image.plain.fallbackImg ? this.image.plain.fallbackImg : this.image.modal.fallbackImg;
    if (!!fallbackImgPath) {
      bg += `, url("${fallbackImgPath}") ${this.style}`;
    }
    this.renderer.setStyle(this.el.nativeElement, "background", bg);
  }
  static {
    this.ɵfac = function ATagBgImageDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ATagBgImageDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _ATagBgImageDirective,
      selectors: [["", "ksATagBgImage", ""]],
      inputs: {
        image: "image",
        style: "style"
      },
      standalone: false,
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ATagBgImageDirective, [{
    type: Directive,
    args: [{
      selector: "[ksATagBgImage]",
      standalone: false
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    image: [{
      type: Input
    }],
    style: [{
      type: Input
    }]
  });
})();
var PlainGalleryComponent = class _PlainGalleryComponent extends AccessibleComponent {
  constructor(configService) {
    super();
    this.configService = configService;
    this.images = [];
    this.clickImage = new EventEmitter();
    this.imageGrid = [];
    this.wrapStyle = false;
    this.widthStyle = "";
  }
  /**
   * Method ´ngOnInit´ to init both `configPlainGallery` calling `initPlainGalleryConfig()`
   * and `imageGrid invoking `initImageGrid()`.
   * This is an angular lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   */
  ngOnInit() {
    if (this.id === null || this.id === void 0) {
      throw new Error("Internal library error - id must be defined");
    }
    this.configService.setConfig(this.id, this.config);
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig) {
      throw new Error("Internal library error - libConfig must be defined");
    }
    this.accessibilityConfig = libConfig.accessibilityConfig;
    this.plainGalleryConfig = libConfig.plainGalleryConfig;
    this.initImageGrid();
  }
  /**
   * Method ´ngOnChanges´ to update both `imageGrid` and`plainGalleryConfig`.
   * This is an angular lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called when any data-bound property of a directive changes!!!
   */
  ngOnChanges(changes) {
    if (this.id === null || this.id === void 0) {
      throw new Error("Internal library error - id must be defined");
    }
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig) {
      throw new Error("Internal library error - libConfig must be defined");
    }
    const imagesChange = changes.images;
    const configChange = changes.config;
    if (configChange && !configChange.firstChange && (configChange.previousValue !== configChange.currentValue || !configChange.previousValue && !configChange.currentValue)) {
      this.plainGalleryConfig = libConfig.plainGalleryConfig;
    }
    if (imagesChange && !imagesChange.firstChange && imagesChange.previousValue !== imagesChange.currentValue) {
      this.initImageGrid();
    }
  }
  /**
   * Method called when you click on an image of the plain (or inline) gallery.
   * This will emit the show event with the image as payload.
   * @param Image img is the Image to show
   */
  showModalGalleryByImage(img) {
    const index = this.images.findIndex((val) => val && img && val.id === img.id);
    this.showModalGallery(index);
  }
  /**
   * Method called when you navigate between images.
   * This will emit the show event with the image as payload.
   * @param KeyboardEvent event that triggered the navigation
   * @param Image img is the Image to show
   */
  onNavigationEvent(event, img) {
    const result = super.handleImageEvent(event);
    if (result === NEXT) {
      this.showModalGalleryByImage(img);
    }
  }
  /**
   * Method to get `alt attribute`.
   * `alt` specifies an alternate text for an image, if the image cannot be displayed.
   * @param Image image to get its alt description.
   * @returns string alt description of the image
   */
  getAltPlainDescriptionByImage(image) {
    if (!image) {
      return "";
    }
    return image.plain && image.plain.description ? image.plain.description : `Image ${getIndex(image, this.images) + 1}`;
  }
  /**
   * Method to get the title for an image.
   * @param Image image to get its title
   * @returns string the title of the input image
   */
  getTitleDisplay(image) {
    let description = "";
    if (image.plain && image.plain.description) {
      description = image.plain.description;
    } else if (image.modal && image.modal.description) {
      description = image.modal.description;
    }
    const currentIndex = getIndex(image, this.images);
    const prevDescription = "Image " + (currentIndex + 1) + "/" + this.images.length;
    let currImgDescription = description ? description : "";
    if (currImgDescription !== "") {
      currImgDescription = " - " + currImgDescription;
    }
    return prevDescription + currImgDescription;
  }
  /**
   * Method used in the template to track ids in ngFor.
   * @param number index of the array
   * @param Image item of the array
   * @returns number the id of the item
   */
  trackById(index, item) {
    return item.id;
  }
  /**
   * Method called when you click on an image of the plain (or inline) gallery.
   * This will emit the show event with the index number as payload.
   * @param number index of the clicked image
   */
  showModalGallery(index) {
    this.clickImage.emit(index);
  }
  /**
   * Private method to init both `imageGrid` and other style variables,
   * based on the layout type.
   */
  initImageGrid() {
    if (!this.plainGalleryConfig) {
      throw new Error("Internal library error - plainGalleryConfig must be defined");
    }
    this.imageGrid = [];
    if (this.plainGalleryConfig.layout instanceof LineLayout) {
      const layout = this.plainGalleryConfig.layout;
      const row = this.images.filter((val, i) => i < layout.breakConfig.length || layout.breakConfig.length === -1);
      this.imageGrid = [row];
      this.size = this.plainGalleryConfig.layout.size;
      switch (this.plainGalleryConfig.strategy) {
        case PlainGalleryStrategy.ROW:
          this.directionStyle = "row";
          break;
        case PlainGalleryStrategy.COLUMN:
          this.directionStyle = "column";
          this.wrapStyle = layout.breakConfig.wrap;
          break;
      }
      this.justifyStyle = layout.justify;
    }
    if (this.plainGalleryConfig.layout instanceof GridLayout) {
      const layout = this.plainGalleryConfig.layout;
      const count = Math.ceil(this.images.length / layout.breakConfig.length);
      let start = 0;
      let end = layout.breakConfig.length - 1;
      for (let j = 0; j < count; j++) {
        const row = this.images.filter((val, i) => i >= start && i <= end);
        this.imageGrid.push(row);
        start = end + 1;
        end = start + layout.breakConfig.length - 1;
      }
      this.size = this.plainGalleryConfig.layout.size;
      const pixels = +layout.size.width.replace("px", "");
      this.widthStyle = pixels * layout.breakConfig.length + pixels / 2 + "px";
      this.wrapStyle = layout.breakConfig.wrap;
      this.directionStyle = "row";
    }
  }
  static {
    this.ɵfac = function PlainGalleryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlainGalleryComponent)(ɵɵdirectiveInject(ConfigService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PlainGalleryComponent,
      selectors: [["ks-plain-gallery"]],
      inputs: {
        id: "id",
        images: "images",
        config: "config"
      },
      outputs: {
        clickImage: "clickImage"
      },
      standalone: false,
      features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
      decls: 2,
      vars: 7,
      consts: [["aTags", ""], ["ksWrap", "", "ksDirection", "", 1, "plain-container", 3, "wrap", "width", "direction", "justify", "title"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["ksFallbackImage", "", "class", "image", "ksSize", "", "role", "img", 3, "loading", "src", "fallbackImg", "sizeConfig", "title", "alt", "tabIndex", "click", "keyup", 4, "ngIf"], ["ksFallbackImage", "", "ksSize", "", "role", "img", 1, "image", 3, "click", "keyup", "loading", "src", "fallbackImg", "sizeConfig", "title", "alt", "tabIndex"], ["class", "a-tag-image", "ksATagBgImage", "", "ksSize", "", 3, "image", "style", "sizeConfig", "title", "tabIndex", "click", "keyup", 4, "ngIf"], ["ksATagBgImage", "", "ksSize", "", 1, "a-tag-image", 3, "click", "keyup", "image", "sizeConfig", "title", "tabIndex"]],
      template: function PlainGalleryComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 1);
          ɵɵtemplate(1, PlainGalleryComponent_ng_container_1_Template, 2, 1, "ng-container", 2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("wrap", ctx.wrapStyle)("width", ctx.widthStyle)("direction", ctx.directionStyle)("justify", ctx.justifyStyle)("title", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.plainGalleryContentTitle);
          ɵɵattribute("aria-label", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.plainGalleryContentAriaLabel);
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.imageGrid);
        }
      },
      dependencies: [NgForOf, NgIf, SizeDirective, WrapDirective, DirectionDirective, ATagBgImageDirective, FallbackImageDirective],
      styles: [".plain-container[_ngcontent-%COMP%]{align-items:center;display:flex}.plain-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{cursor:pointer;height:auto;margin:2px;width:50px}.plain-container[_ngcontent-%COMP%]   .a-tag-image[_ngcontent-%COMP%]{cursor:pointer;margin:2px}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlainGalleryComponent, [{
    type: Component,
    args: [{
      selector: "ks-plain-gallery",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div class="plain-container"
     ksWrap [wrap]="wrapStyle" [width]="widthStyle"
     ksDirection [direction]="directionStyle" [justify]="justifyStyle"
     [attr.aria-label]="accessibilityConfig?.plainGalleryContentAriaLabel"
     [title]="accessibilityConfig?.plainGalleryContentTitle">

  <ng-container *ngFor="let imgRow of imageGrid; let i = index">
    <ng-container *ngFor="let imgCol of imgRow; let j = index">

      <ng-container *ngIf="!plainGalleryConfig?.advanced?.aTags; else aTags">
        <img *ngIf="imgCol?.modal?.img"
             [loading]="imgCol.loading"
             [attr.fetchpriority]="imgCol.fetchpriority"
             [src]="imgCol.plain?.img! ? imgCol.plain?.img! : imgCol.modal.img"
             ksFallbackImage [fallbackImg]="imgCol.plain?.fallbackImg ? imgCol.plain?.fallbackImg : imgCol.modal.fallbackImg"
             class="image"
             ksSize [sizeConfig]="{width: size?.width!, height: size?.height!}"
             [attr.aria-label]="imgCol.plain?.ariaLabel"
             [title]="(imgCol.plain?.title || imgCol.plain?.title === '') ? imgCol.plain?.title : getTitleDisplay(imgCol)"
             alt="{{imgCol.plain?.alt! ? imgCol.plain?.alt! : getAltPlainDescriptionByImage(imgCol)}}"
             [tabIndex]="0" role="img"
             (click)="showModalGalleryByImage(imgCol)" (keyup)="onNavigationEvent($event, imgCol)"/>
      </ng-container>

      <!-- Add directive to set background with the image url as param to pass thumb or img-->
      <!-- to do something like this <a style="background: url('path to image') 50% 50%/cover">.-->
      <ng-template #aTags>
        <a *ngIf="imgCol?.modal?.img"
           class="a-tag-image"
           ksATagBgImage [image]="imgCol" [style]="plainGalleryConfig?.advanced?.additionalBackground"
           ksSize [sizeConfig]="{width: size?.width!, height: size?.height!}"
           [attr.aria-label]="imgCol.plain?.ariaLabel"
           [title]="(imgCol.plain?.title || imgCol.plain?.title === '') ? imgCol.plain?.title : getTitleDisplay(imgCol)"
           [tabIndex]="0"
           (click)="showModalGalleryByImage(imgCol)" (keyup)="onNavigationEvent($event, imgCol)"></a>
      </ng-template>

    </ng-container>
  </ng-container>

</div>

`,
      styles: [".plain-container{align-items:center;display:flex}.plain-container .image{cursor:pointer;height:auto;margin:2px;width:50px}.plain-container .a-tag-image{cursor:pointer;margin:2px}\n"]
    }]
  }], () => [{
    type: ConfigService
  }], {
    id: [{
      type: Input
    }],
    images: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    clickImage: [{
      type: Output
    }]
  });
})();
var DIALOG_DATA = new InjectionToken("DIALOG_DATA");
var IdValidatorService = class _IdValidatorService {
  constructor() {
    this.ids = /* @__PURE__ */ new Map();
  }
  /**
   * Method to check and reserve an id for the current instance of the library.
   * In this way, no other instances can use the same id.
   * @param galleryId number or undefined that represents the unique id of the gallery.
   * @return boolean true if success. false is never returned, instead an exception is thrown
   * @throws a error with a message if galleryId is neither unique, < 0 or an integer
   */
  checkAndAdd(galleryId) {
    if (galleryId === void 0 || !Number.isInteger(galleryId) || galleryId < 0) {
      throw new Error('You must provide a valid [id]="unique integer > 0 here" to the gallery/carousel in your template');
    }
    if (this.ids.get(galleryId)) {
      throw new Error(`Cannot create gallery with id=${galleryId} because already used in your application. This must be a unique integer >= 0`);
    }
    this.ids.set(galleryId, galleryId);
    return true;
  }
  /**
   * Method to remove a reserved id. In this way you are able to use the id again for another instance of the library.
   * @param galleryId number or undefined that represents the unique id of the gallery.
   * @return boolean true if success. false is never returned, instead an exception is thrown*
   * @throws a error with a message if galleryId is neither integer or < 0
   * * this should be improved without return true, because it doesn't make sense! :(
   */
  remove(galleryId) {
    if (galleryId === void 0 || !Number.isInteger(galleryId) || galleryId < 0) {
      throw new Error('You must provide a valid [id]="unique integer > 0 here" to the gallery/carousel in your template');
    }
    this.ids.delete(galleryId);
    return true;
  }
  static {
    this.ɵfac = function IdValidatorService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IdValidatorService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _IdValidatorService,
      factory: _IdValidatorService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IdValidatorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ClickOutsideDirective = class _ClickOutsideDirective {
  constructor() {
    this.clickOutside = new EventEmitter();
  }
  /**
   * Method called by Angular itself every click thanks to `@HostListener`.
   * @param event MouseEvent
   */
  onClick(event) {
    event.stopPropagation();
    const target = event.target;
    if (!this.clickOutsideEnable || !target) {
      return;
    }
    let isInside = false;
    let isHidden = false;
    if (typeof target.className !== "string") {
      isInside = true;
    } else {
      isInside = target.className && target.className.includes("inside");
      isHidden = target.className.includes("hidden");
    }
    if (!isInside || isHidden) {
      this.clickOutside.emit(true);
    }
  }
  static {
    this.ɵfac = function ClickOutsideDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClickOutsideDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _ClickOutsideDirective,
      selectors: [["", "ksClickOutside", ""]],
      hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function ClickOutsideDirective_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          });
        }
      },
      inputs: {
        clickOutsideEnable: "clickOutsideEnable"
      },
      outputs: {
        clickOutside: "clickOutside"
      },
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClickOutsideDirective, [{
    type: Directive,
    args: [{
      selector: "[ksClickOutside]",
      standalone: false
    }]
  }], null, {
    clickOutsideEnable: [{
      type: Input
    }],
    clickOutside: [{
      type: Output
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var ModalGalleryComponent = class _ModalGalleryComponent {
  /**
   * HostListener to catch browser's back button and destroy the gallery.
   * This prevents weired behaviour about scrolling.
   * Added to fix this issue: https://github.com/Ks89/angular-modal-gallery/issues/159
   */
  onPopState() {
    this.closeGallery();
  }
  /**
   * HostListener to catch ctrl+s/meta+s and download the current image.
   * Inspired by https://netbasal.com/add-keyboard-shortcuts-to-your-angular-app-9bf2e89862b3
   */
  onSaveListener(event) {
    event.preventDefault();
    this.downloadImage();
  }
  constructor(dialogContent, modalGalleryService, platformId, changeDetectorRef, idValidatorService, configService, sanitizer) {
    this.dialogContent = dialogContent;
    this.modalGalleryService = modalGalleryService;
    this.platformId = platformId;
    this.changeDetectorRef = changeDetectorRef;
    this.idValidatorService = idValidatorService;
    this.configService = configService;
    this.sanitizer = sanitizer;
    this.enableCloseOutside = true;
    this.accessibilityConfig = KS_DEFAULT_ACCESSIBILITY_CONFIG;
    this.showGallery = false;
    this.id = this.dialogContent.id;
    this.images = this.dialogContent.images;
    this.currentImage = this.dialogContent.currentImage;
    this.libConfig = this.dialogContent.libConfig;
    this.customPreviewsTemplate = this.dialogContent.previewsTemplate;
    this.configService.setConfig(this.id, this.libConfig);
    this.updateImagesSubscription = this.modalGalleryService.updateImages$.subscribe((images) => {
      this.images = images.map((image) => {
        const newImage = Object.assign({}, image, {
          previouslyLoaded: false
        });
        return newImage;
      });
      this.initImages();
      this.images.forEach((image) => {
        if (image.id === this.currentImage.id) {
          this.currentImage = image;
        }
      });
      this.changeDetectorRef.markForCheck();
    });
  }
  /**
   * Method ´ngOnInit´ to init images calling `initImages()`.
   * This is an angular lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   */
  ngOnInit() {
    this.idValidatorService.checkAndAdd(this.id);
    if (!this.id && this.id !== 0 || this.id < 0) {
      throw new Error(`'[id]="a number >= 0"' is a mandatory input in angular-modal-gallery.If you are using multiple instances of this library, please be sure to use different ids`);
    }
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig || !libConfig.dotsConfig) {
      throw new Error("Internal library error - libConfig and dotsConfig must be defined");
    }
    this.dotsConfig = libConfig.dotsConfig;
    setTimeout(() => {
      this.initImages();
    }, 0);
  }
  /**
   * Method called by custom upper buttons.
   * @param event ButtonEvent event payload
   */
  onCustomEmit(event) {
    const eventToEmit = this.getButtonEventToEmit(event);
    this.modalGalleryService.emitButtonBeforeHook(eventToEmit);
    this.modalGalleryService.emitButtonAfterHook(eventToEmit);
  }
  /**
   * Method called by the full-screen upper button.
   * @param event ButtonEvent event payload
   */
  onFullScreen(event) {
    const eventToEmit = this.getButtonEventToEmit(event);
    this.modalGalleryService.emitButtonBeforeHook(eventToEmit);
    const doc = document;
    const docEl = document.documentElement;
    const fullscreenDisabled = !doc.fullscreenElement && !doc.webkitFullscreenElement;
    if (fullscreenDisabled) {
      if (docEl.requestFullscreen) {
        docEl.requestFullscreen().then(() => {
        }).catch(() => {
          console.error("Cannot request full screen");
        });
      } else if (docEl.webkitRequestFullscreen) {
        docEl.webkitRequestFullscreen();
      }
    } else {
      if (doc.exitFullscreen) {
        doc.exitFullscreen().then(() => {
        }).catch(() => {
          console.error("Cannot request exit full screen");
        });
      } else if (doc.webkitExitFullscreen) {
        doc.webkitExitFullscreen();
      }
    }
    this.modalGalleryService.emitButtonAfterHook(eventToEmit);
  }
  /**
   * Method called by the delete upper button.
   * @param event ButtonEvent event payload
   */
  onDelete(event) {
    const eventToEmit = this.getButtonEventToEmit(event);
    this.modalGalleryService.emitButtonBeforeHook(eventToEmit);
    if (this.images.length === 1) {
      this.closeGallery();
    }
    if (!this.currentImageComponent) {
      throw new Error("currentImageComponent must be defined");
    }
    const imageIndexToDelete = this.currentImageComponent.getIndexToDelete(event.image);
    if (imageIndexToDelete === this.images.length - 1) {
      this.currentImageComponent.prevImage();
    } else {
      this.currentImageComponent.nextImage();
    }
    this.modalGalleryService.emitButtonAfterHook(eventToEmit);
  }
  /**
   * Method called by the navigate upper button.
   * @param event ButtonEvent event payload
   */
  onNavigate(event) {
    const eventToEmit = this.getButtonEventToEmit(event);
    this.modalGalleryService.emitButtonBeforeHook(eventToEmit);
    if (isPlatformBrowser(this.platformId)) {
      if (eventToEmit.image && eventToEmit.image.modal.extUrl) {
        if (eventToEmit.button && eventToEmit.button.extUrlInNewTab) {
          const newWindow = window.open(eventToEmit.image.modal.extUrl, "noopener,noreferrer,");
          if (newWindow) {
            newWindow.opener = null;
            this.modalGalleryService.emitButtonAfterHook(eventToEmit);
          }
        } else {
          this.updateLocationHref(eventToEmit.image.modal.extUrl);
          this.modalGalleryService.emitButtonAfterHook(eventToEmit);
        }
      }
    }
  }
  /**
   * This method is defined to be spied and replaced in unit testing with a fake method call.
   * It must be public to be able to use jasmine spyOn method.
   * @param newHref string new url
   */
  updateLocationHref(newHref) {
    window.location.href = newHref;
  }
  /**
   * Method called by the download upper button.
   * @param event ButtonEvent event payload
   */
  onDownload(event) {
    const eventToEmit = this.getButtonEventToEmit(event);
    this.modalGalleryService.emitButtonBeforeHook(eventToEmit);
    this.downloadImage();
    this.modalGalleryService.emitButtonAfterHook(eventToEmit);
  }
  /**
   * Method called by the close upper button.
   * @param event ButtonEvent event payload
   * @param action Action that triggered the close method. `Action.NORMAL` by default
   */
  onCloseGalleryButton(event, action = Action.NORMAL) {
    const eventToEmit = this.getButtonEventToEmit(event);
    this.modalGalleryService.emitButtonBeforeHook(eventToEmit);
    this.closeGallery(action, false);
  }
  /**
   * Method called by CurrentImageComponent.
   * @param event ImageModalEvent event payload
   * @param action Action that triggered the close method. `Action.NORMAL` by default
   */
  onCloseGallery(event, action = Action.NORMAL) {
    const buttonEvent = {
      button: {
        type: ButtonType.CLOSE
      },
      image: null,
      action: event.action,
      galleryId: event.galleryId
    };
    this.modalGalleryService.emitButtonBeforeHook(buttonEvent);
    this.closeGallery(action, false);
  }
  /**
   * Method to close the modal gallery specifying the action.
   * @param action Action action type. `Action.NORMAL` by default
   * @param clickOutside boolean that is true if called clicking on the modal background. False by default.
   */
  closeGallery(action = Action.NORMAL, clickOutside = false) {
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig) {
      throw new Error("Internal library error - libConfig must be defined");
    }
    this.modalGalleryService.emitClose(new ImageModalEvent(this.id, action, true));
    this.modalGalleryService.close(this.id, clickOutside);
  }
  /**
   * Method called when the image changes and used to update the `currentImage` object.
   * @param event ImageModalEvent event payload
   */
  onChangeCurrentImage(event) {
    const newIndex = event.result;
    if (newIndex < 0 || newIndex >= this.images.length) {
      return;
    }
    this.currentImage = this.images[newIndex];
    this.modalGalleryService.emitShow(new ImageModalEvent(this.id, event.action, newIndex + 1));
    this.emitBoundaryEvent(event.action, newIndex);
  }
  /**
   * Method called when you click 'outside' (i.e. on the semi-transparent background)
   * to close the modal gallery if `enableCloseOutside` is true.
   * @param event boolean that is true to close the modal gallery, false otherwise
   */
  onClickOutside(event) {
    if (event && this.enableCloseOutside) {
      this.closeGallery(Action.CLICK, true);
    }
  }
  /**
   * Method called when an image is loaded and the loading spinner has gone.
   * It sets the previouslyLoaded flag inside the Image to hide loading spinner when displayed again.
   * @param event ImageLoadEvent event payload
   */
  onImageLoad(event) {
    this.images = this.images.map((img) => {
      if (img && img.id === event.id) {
        return Object.assign({}, img, {
          previouslyLoaded: event.status
        });
      }
      return img;
    });
  }
  /**
   * Method called when a dot is clicked and used to update the current image.
   * @param index number index of the clicked dot
   */
  onClickDot(index) {
    this.currentImage = this.images[index];
  }
  /**
   * Method called when an image preview is clicked and used to update the current image.
   * @param event ImageModalEvent preview image
   */
  onClickPreview(event) {
    this.onChangeCurrentImage(event);
  }
  /**
   * Method to cleanup resources.
   * This is an angular lifecycle hook that is called when this component is destroyed.
   */
  ngOnDestroy() {
    if (this.updateImagesSubscription) {
      this.updateImagesSubscription.unsubscribe();
    }
    this.idValidatorService.remove(this.id);
  }
  /**
   * Method to download the current image, only if `downloadable` is true.
   * @private
   */
  downloadImage() {
    if (this.id === null || this.id === void 0) {
      throw new Error("Internal library error - id must be defined");
    }
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig) {
      throw new Error("Internal library error - libConfig must be defined");
    }
    const currentImageConfig = libConfig.currentImageConfig;
    if (currentImageConfig && !currentImageConfig.downloadable) {
      return;
    }
    this.downloadImageAllBrowsers();
  }
  /**
   * Method to convert a base64 to a Blob
   * @param base64Data string with base64 data
   * @param contentType string with the MIME type
   * @return Blob converted from the input base64Data
   * @private
   */
  base64toBlob(base64Data, contentType = "") {
    const sliceSize = 1024;
    const byteCharacters = atob(base64Data);
    const bytesLength = byteCharacters.length;
    const slicesCount = Math.ceil(bytesLength / sliceSize);
    const byteArrays = new Array(slicesCount);
    for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
      const begin = sliceIndex * sliceSize;
      const end = Math.min(begin + sliceSize, bytesLength);
      const bytes = new Array(end - begin);
      for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
        bytes[i] = byteCharacters[offset].charCodeAt(0);
      }
      byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, {
      type: contentType
    });
  }
  /**
   * Private method to download the current image for all browsers.
   * @private
   */
  downloadImageAllBrowsers() {
    const link = document.createElement("a");
    let isBase64 = false;
    let img;
    if (typeof this.currentImage.modal.img === "string") {
      img = this.currentImage.modal.img;
    } else {
      img = this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, this.currentImage.modal.img);
    }
    if (img.includes("data:image/") || img.includes(";base64,")) {
      const extension = img.replace("data:image/", "").split(";base64,")[0];
      const pureBase64 = img.split(";base64,")[1];
      const blob = this.base64toBlob(pureBase64, "image/" + extension);
      link.href = URL.createObjectURL(blob);
      isBase64 = true;
      link.setAttribute("download", this.getFileName(this.currentImage, isBase64, extension));
    } else {
      link.href = img;
      link.setAttribute("download", this.getFileName(this.currentImage, isBase64));
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  /**
   * Private method to get the `ButtonEvent` to emit, merging the input `ButtonEvent`
   * with the current image.
   * @param event ButtonEvent event payload to return
   * @returns ButtonEvent event payload with the current image included
   * @private
   */
  getButtonEventToEmit(event) {
    return Object.assign(event, {
      image: this.currentImage
    });
  }
  /**
   * Private method to get the file name from an input path.
   * This is used either to get the image's name from its path or from the Image itself,
   * if specified as 'downloadFileName' by the user.
   * @param image Image image to extract its file name
   * @param isBase64 boolean to set if the image is a base64 file or not. False by default.
   * @param base64Extension string to force the extension of the base64 image. Empty string by default.
   * @returns string string file name of the input image.
   * @private
   */
  getFileName(image, isBase64 = false, base64Extension = "") {
    if (!image.modal.downloadFileName || image.modal.downloadFileName.length === 0) {
      if (isBase64) {
        return `Image-${image.id}.${base64Extension !== "" ? base64Extension : "png"}`;
      } else {
        return image.modal.img.replace(/^.*[\\\/]/, "");
      }
    } else {
      return image.modal.downloadFileName;
    }
  }
  /**
   * Private method to initialize `images` as array of `Image`s.
   * Also, it will emit ImageModalEvent to say that images are loaded.
   * @private
   */
  initImages() {
    this.modalGalleryService.emitHasData(new ImageModalEvent(this.id, Action.LOAD, true));
    const currentIndex = this.images.indexOf(this.currentImage);
    this.modalGalleryService.emitShow(new ImageModalEvent(this.id, Action.LOAD, currentIndex + 1));
    this.emitBoundaryEvent(Action.NORMAL, currentIndex);
    this.showGallery = this.images.length > 0;
  }
  /**
   * Private method to emit events when either the last or the first image are visible.
   * @param action Action Enum of type Action that represents the source of the event that changed the
   *  current image to the first one or the last one.
   * @param indexToCheck number is the index number of the image (the first or the last one).
   * @private
   */
  emitBoundaryEvent(action, indexToCheck) {
    switch (indexToCheck) {
      case 0:
        this.modalGalleryService.emitFirstImage(new ImageModalEvent(this.id, action, true));
        break;
      case this.images.length - 1:
        this.modalGalleryService.emitLastImage(new ImageModalEvent(this.id, action, true));
        break;
    }
  }
  static {
    this.ɵfac = function ModalGalleryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ModalGalleryComponent)(ɵɵdirectiveInject(DIALOG_DATA), ɵɵdirectiveInject(ModalGalleryService), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(IdValidatorService), ɵɵdirectiveInject(ConfigService), ɵɵdirectiveInject(DomSanitizer));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ModalGalleryComponent,
      selectors: [["ks-modal-gallery"]],
      viewQuery: function ModalGalleryComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(CurrentImageComponent, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.currentImageComponent = _t.first);
        }
      },
      hostBindings: function ModalGalleryComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("popstate", function ModalGalleryComponent_popstate_HostBindingHandler() {
            return ctx.onPopState();
          }, false, ɵɵresolveWindow)("keydown.code.control.keyS", function ModalGalleryComponent_keydown_code_control_keyS_HostBindingHandler($event) {
            return ctx.onSaveListener($event);
          }, false, ɵɵresolveDocument)("keydown.code.meta.keyS", function ModalGalleryComponent_keydown_code_meta_keyS_HostBindingHandler($event) {
            return ctx.onSaveListener($event);
          }, false, ɵɵresolveDocument);
        }
      },
      standalone: false,
      decls: 8,
      vars: 17,
      consts: [["id", "modal-gallery-wrapper", "ksClickOutside", "", 3, "clickOutside", "title", "clickOutsideEnable"], ["id", "flex-min-height-ie-fix"], ["id", "modal-gallery-container"], [3, "delete", "navigate", "download", "closeButton", "fullscreen", "customEmit", "id", "currentImage"], [3, "loadImage", "changeImage", "closeGallery", "id", "images", "currentImage", "isOpen"], [3, "clickDot", "id", "images", "currentImage", "dotsConfig"], [3, "clickPreview", "id", "images", "currentImage", "customTemplate"]],
      template: function ModalGalleryComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵlistener("clickOutside", function ModalGalleryComponent_Template_div_clickOutside_0_listener($event) {
            return ctx.onClickOutside($event);
          });
          ɵɵelementStart(1, "div", 1)(2, "div", 2)(3, "ks-upper-buttons", 3);
          ɵɵlistener("delete", function ModalGalleryComponent_Template_ks_upper_buttons_delete_3_listener($event) {
            return ctx.onDelete($event);
          })("navigate", function ModalGalleryComponent_Template_ks_upper_buttons_navigate_3_listener($event) {
            return ctx.onNavigate($event);
          })("download", function ModalGalleryComponent_Template_ks_upper_buttons_download_3_listener($event) {
            return ctx.onDownload($event);
          })("closeButton", function ModalGalleryComponent_Template_ks_upper_buttons_closeButton_3_listener($event) {
            return ctx.onCloseGalleryButton($event);
          })("fullscreen", function ModalGalleryComponent_Template_ks_upper_buttons_fullscreen_3_listener($event) {
            return ctx.onFullScreen($event);
          })("customEmit", function ModalGalleryComponent_Template_ks_upper_buttons_customEmit_3_listener($event) {
            return ctx.onCustomEmit($event);
          });
          ɵɵelementEnd();
          ɵɵelementStart(4, "ks-current-image", 4);
          ɵɵlistener("loadImage", function ModalGalleryComponent_Template_ks_current_image_loadImage_4_listener($event) {
            return ctx.onImageLoad($event);
          })("changeImage", function ModalGalleryComponent_Template_ks_current_image_changeImage_4_listener($event) {
            return ctx.onChangeCurrentImage($event);
          })("closeGallery", function ModalGalleryComponent_Template_ks_current_image_closeGallery_4_listener($event) {
            return ctx.onCloseGallery($event);
          });
          ɵɵelementEnd();
          ɵɵelementStart(5, "div")(6, "ks-dots", 5);
          ɵɵlistener("clickDot", function ModalGalleryComponent_Template_ks_dots_clickDot_6_listener($event) {
            return ctx.onClickDot($event);
          });
          ɵɵelementEnd();
          ɵɵelementStart(7, "ks-previews", 6);
          ɵɵlistener("clickPreview", function ModalGalleryComponent_Template_ks_previews_clickPreview_7_listener($event) {
            return ctx.onClickPreview($event);
          });
          ɵɵelementEnd()()()()();
        }
        if (rf & 2) {
          ɵɵproperty("title", ctx.accessibilityConfig.modalGalleryContentTitle)("clickOutsideEnable", ctx.enableCloseOutside);
          ɵɵattribute("aria-label", ctx.accessibilityConfig.modalGalleryContentAriaLabel);
          ɵɵadvance(3);
          ɵɵproperty("id", ctx.id)("currentImage", ctx.currentImage);
          ɵɵadvance();
          ɵɵproperty("id", ctx.id)("images", ctx.images)("currentImage", ctx.currentImage)("isOpen", true);
          ɵɵadvance(2);
          ɵɵproperty("id", ctx.id)("images", ctx.images)("currentImage", ctx.currentImage)("dotsConfig", ctx.dotsConfig);
          ɵɵadvance();
          ɵɵproperty("id", ctx.id)("images", ctx.images)("currentImage", ctx.currentImage)("customTemplate", ctx.customPreviewsTemplate);
        }
      },
      dependencies: [UpperButtonsComponent, DotsComponent, PreviewsComponent, CurrentImageComponent, ClickOutsideDirective],
      styles: ["#flex-min-height-ie-fix[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}#modal-gallery-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;min-width:100vw;min-height:100vh}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalGalleryComponent, [{
    type: Component,
    args: [{
      selector: "ks-modal-gallery",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: '<div id="modal-gallery-wrapper"\n     [attr.aria-label]="accessibilityConfig.modalGalleryContentAriaLabel"\n     [title]="accessibilityConfig.modalGalleryContentTitle"\n     ksClickOutside [clickOutsideEnable]="enableCloseOutside"\n     (clickOutside)="onClickOutside($event)">\n\n  <div id="flex-min-height-ie-fix">\n    <div id="modal-gallery-container">\n\n      <ks-upper-buttons [id]="id"\n                        [currentImage]="currentImage"\n                        (delete)="onDelete($event)"\n                        (navigate)="onNavigate($event)"\n                        (download)="onDownload($event)"\n                        (closeButton)="onCloseGalleryButton($event)"\n                        (fullscreen)="onFullScreen($event)"\n                        (customEmit)="onCustomEmit($event)"></ks-upper-buttons>\n\n      <ks-current-image [id]="id"\n                        [images]="images"\n                        [currentImage]="currentImage"\n                        [isOpen]="true"\n                        (loadImage)="onImageLoad($event)"\n                        (changeImage)="onChangeCurrentImage($event)"\n                        (closeGallery)="onCloseGallery($event)"></ks-current-image>\n\n      <div>\n        <ks-dots [id]="id"\n                 [images]="images"\n                 [currentImage]="currentImage"\n                 [dotsConfig]="dotsConfig"\n                 (clickDot)="onClickDot($event)"></ks-dots>\n\n        <ks-previews [id]="id"\n                     [images]="images"\n                     [currentImage]="currentImage"\n                     [customTemplate]="customPreviewsTemplate"\n                     (clickPreview)="onClickPreview($event)"></ks-previews>\n      </div>\n    </div>\n  </div>\n</div>\n',
      styles: ["#flex-min-height-ie-fix{display:flex;flex-direction:column;justify-content:center}#modal-gallery-container{display:flex;flex-direction:column;justify-content:space-between;min-width:100vw;min-height:100vh}\n"]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DIALOG_DATA]
    }]
  }, {
    type: ModalGalleryService
  }, {
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: ChangeDetectorRef
  }, {
    type: IdValidatorService
  }, {
    type: ConfigService
  }, {
    type: DomSanitizer
  }], {
    currentImageComponent: [{
      type: ViewChild,
      args: [CurrentImageComponent, {
        static: true
      }]
    }],
    onPopState: [{
      type: HostListener,
      args: ["window:popstate"]
    }],
    onSaveListener: [{
      type: HostListener,
      args: ["document:keydown.code.control.keyS", ["$event"]]
    }, {
      type: HostListener,
      args: ["document:keydown.code.meta.keyS", ["$event"]]
    }]
  });
})();
var COMPONENTS = [PlainGalleryComponent, CarouselComponent, CarouselPreviewsComponent, UpperButtonsComponent, DotsComponent, PreviewsComponent, CurrentImageComponent, LoadingSpinnerComponent, AccessibleComponent, ModalGalleryComponent];
var MarginDirective = class _MarginDirective {
  constructor(renderer, el) {
    this.renderer = renderer;
    this.el = el;
  }
  /**
   * Method ´ngOnInit´ to apply the style of this directive.
   * This is an angular lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   */
  ngOnInit() {
    this.applyStyle();
  }
  /**
   * Method ´ngOnChanges´ to apply the style of this directive.
   * This is an angular lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called when any data-bound property of a directive changes!!!
   */
  ngOnChanges() {
    this.applyStyle();
  }
  /**
   * Private method to change both width and height of an element.
   */
  applyStyle() {
    if (this.marginLeft) {
      this.renderer.setStyle(this.el.nativeElement, "margin-left", this.marginLeft);
    }
    if (this.marginRight) {
      this.renderer.setStyle(this.el.nativeElement, "margin-right", this.marginRight);
    }
    if (this.marginTop) {
      this.renderer.setStyle(this.el.nativeElement, "margin-top", this.marginTop);
    }
    if (this.marginBottom) {
      this.renderer.setStyle(this.el.nativeElement, "margin-bottom", this.marginBottom);
    }
  }
  static {
    this.ɵfac = function MarginDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MarginDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _MarginDirective,
      selectors: [["", "ksMargin", ""]],
      inputs: {
        marginLeft: "marginLeft",
        marginRight: "marginRight",
        marginTop: "marginTop",
        marginBottom: "marginBottom"
      },
      standalone: false,
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MarginDirective, [{
    type: Directive,
    args: [{
      selector: "[ksMargin]",
      standalone: false
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    marginLeft: [{
      type: Input
    }],
    marginRight: [{
      type: Input
    }],
    marginTop: [{
      type: Input
    }],
    marginBottom: [{
      type: Input
    }]
  });
})();
var DIRECTIVES = [ClickOutsideDirective, SizeDirective, KeyboardNavigationDirective, WrapDirective, DirectionDirective, ATagBgImageDirective, DescriptionDirective, MarginDirective, MaxSizeDirective, FallbackImageDirective, SwipeDirective];
var AttachToOverlayService = class _AttachToOverlayService {
  constructor(injector, modalGalleryService) {
    this.injector = injector;
    this.modalGalleryService = modalGalleryService;
  }
  /**
   * To be called by a provider with the APP_INITIALIZER token.
   */
  initialize() {
    this.modalGalleryService.triggerAttachToOverlay.subscribe((payload) => this.attachToOverlay(payload));
  }
  /**
   * Private method to attach ModalGalleryComponent to the overlay.
   * @param payload {@link AttachToOverlayPayload} with all necessary information
   * @private
   */
  attachToOverlay(payload) {
    const injector = Injector.create({
      parent: this.injector,
      providers: [{
        provide: ModalGalleryRef,
        useValue: payload.dialogRef
      }, {
        provide: DIALOG_DATA,
        useValue: payload.config
      }]
    });
    const containerPortal = new ComponentPortal(ModalGalleryComponent, null, injector);
    payload.overlayRef.attach(containerPortal);
  }
  static {
    this.ɵfac = function AttachToOverlayService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AttachToOverlayService)(ɵɵinject(Injector), ɵɵinject(ModalGalleryService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AttachToOverlayService,
      factory: _AttachToOverlayService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttachToOverlayService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Injector
  }, {
    type: ModalGalleryService
  }], null);
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
      declarations: [PlainGalleryComponent, CarouselComponent, CarouselPreviewsComponent, UpperButtonsComponent, DotsComponent, PreviewsComponent, CurrentImageComponent, LoadingSpinnerComponent, AccessibleComponent, ModalGalleryComponent, ClickOutsideDirective, SizeDirective, KeyboardNavigationDirective, WrapDirective, DirectionDirective, ATagBgImageDirective, DescriptionDirective, MarginDirective, MaxSizeDirective, FallbackImageDirective, SwipeDirective],
      imports: [CommonModule, OverlayModule],
      exports: [PlainGalleryComponent, CarouselComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [{
        provide: APP_INITIALIZER,
        multi: true,
        deps: [AttachToOverlayService],
        useFactory: (service) => {
          return () => service.initialize();
        }
      }],
      imports: [CommonModule, OverlayModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, OverlayModule],
      declarations: [COMPONENTS, DIRECTIVES],
      providers: [{
        provide: APP_INITIALIZER,
        multi: true,
        deps: [AttachToOverlayService],
        useFactory: (service) => {
          return () => service.initialize();
        }
      }],
      exports: [PlainGalleryComponent, CarouselComponent]
    }]
  }], null, null);
})();
export {
  Action,
  ButtonType,
  ButtonsStrategy,
  CarouselComponent,
  DescriptionStrategy,
  GalleryModule,
  GridLayout,
  Image,
  ImageEvent,
  ImageModalEvent,
  KS_DEFAULT_ACCESSIBILITY_CONFIG,
  KS_DEFAULT_BTN_CLOSE,
  KS_DEFAULT_BTN_DELETE,
  KS_DEFAULT_BTN_DOWNLOAD,
  KS_DEFAULT_BTN_EXTURL,
  KS_DEFAULT_BTN_FULL_SCREEN,
  KS_DEFAULT_SIZE,
  LineLayout,
  LoadingType,
  ModalGalleryComponent,
  ModalGalleryRef,
  ModalGalleryService,
  PlainGalleryComponent,
  PlainGalleryStrategy
};
//# sourceMappingURL=@ks89_angular-modal-gallery.js.map
