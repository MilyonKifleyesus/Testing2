import {
  CdkDrag,
  CdkDragHandle,
  CdkDropList,
  DragDropModule,
  moveItemInArray
} from "./chunk-OJAHSFTK.js";
import "./chunk-DRZBCJZT.js";
import "./chunk-OWWKAO5H.js";
import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
  ScrollDispatcher,
  ScrollingModule
} from "./chunk-EJQER4H7.js";
import "./chunk-2IGW2ZRF.js";
import "./chunk-DXX27NYX.js";
import "./chunk-BDV2V2K5.js";
import {
  CommonModule,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-37IJTNUX.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  EventEmitter,
  HostListener,
  Injectable,
  Input,
  NgModule,
  Output,
  Pipe,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
  setClassMetadata,
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
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-IOBWKMFY.js";
import "./chunk-R46UXVFS.js";
import "./chunk-D6YGKQ4W.js";
import {
  Subject,
  filter,
  from,
  groupBy,
  mergeMap,
  reduce,
  takeUntil,
  throttleTime
} from "./chunk-L5ZQUDYH.js";
import "./chunk-ZYKX7RMX.js";
import {
  __spreadValues
} from "./chunk-AJH3MT3R.js";

// node_modules/ngx-pagination/fesm2020/ngx-pagination.mjs
function PaginationControlsComponent_ul_3_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 12);
    ɵɵlistener("keyup.enter", function PaginationControlsComponent_ul_3_li_1_a_1_Template_a_keyup_enter_0_listener() {
      ɵɵrestoreView(_r2);
      ɵɵnextContext(3);
      const p_r3 = ɵɵreference(1);
      return ɵɵresetView(p_r3.previous());
    })("click", function PaginationControlsComponent_ul_3_li_1_a_1_Template_a_click_0_listener() {
      ɵɵrestoreView(_r2);
      ɵɵnextContext(3);
      const p_r3 = ɵɵreference(1);
      return ɵɵresetView(p_r3.previous());
    });
    ɵɵtext(1);
    ɵɵelementStart(2, "span", 13);
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r3.previousLabel, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r3.screenReaderPageLabel);
  }
}
function PaginationControlsComponent_ul_3_li_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 14);
    ɵɵtext(1);
    ɵɵelementStart(2, "span", 13);
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r3.previousLabel, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r3.screenReaderPageLabel);
  }
}
function PaginationControlsComponent_ul_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 9);
    ɵɵtemplate(1, PaginationControlsComponent_ul_3_li_1_a_1_Template, 4, 2, "a", 10)(2, PaginationControlsComponent_ul_3_li_1_span_2_Template, 4, 2, "span", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const p_r3 = ɵɵreference(1);
    ɵɵclassProp("disabled", p_r3.isFirstPage());
    ɵɵadvance();
    ɵɵproperty("ngIf", 1 < p_r3.getCurrent());
    ɵɵadvance();
    ɵɵproperty("ngIf", p_r3.isFirstPage());
  }
}
function PaginationControlsComponent_ul_3_li_4_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 12);
    ɵɵlistener("keyup.enter", function PaginationControlsComponent_ul_3_li_4_a_1_Template_a_keyup_enter_0_listener() {
      ɵɵrestoreView(_r5);
      const page_r6 = ɵɵnextContext().$implicit;
      ɵɵnextContext(2);
      const p_r3 = ɵɵreference(1);
      return ɵɵresetView(p_r3.setCurrent(page_r6.value));
    })("click", function PaginationControlsComponent_ul_3_li_4_a_1_Template_a_click_0_listener() {
      ɵɵrestoreView(_r5);
      const page_r6 = ɵɵnextContext().$implicit;
      ɵɵnextContext(2);
      const p_r3 = ɵɵreference(1);
      return ɵɵresetView(p_r3.setCurrent(page_r6.value));
    });
    ɵɵelementStart(1, "span", 13);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵpipe(5, "number");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const page_r6 = ɵɵnextContext().$implicit;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", ctx_r3.screenReaderPageLabel, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(page_r6.label === "..." ? page_r6.label : ɵɵpipeBind2(5, 2, page_r6.label, ""));
  }
}
function PaginationControlsComponent_ul_3_li_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 16)(2, "span", 13);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "span");
    ɵɵtext(5);
    ɵɵpipe(6, "number");
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const page_r6 = ɵɵnextContext().$implicit;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵtextInterpolate1("", ctx_r3.screenReaderCurrentLabel, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(page_r6.label === "..." ? page_r6.label : ɵɵpipeBind2(6, 2, page_r6.label, ""));
  }
}
function PaginationControlsComponent_ul_3_li_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵtemplate(1, PaginationControlsComponent_ul_3_li_4_a_1_Template, 6, 5, "a", 10)(2, PaginationControlsComponent_ul_3_li_4_ng_container_2_Template, 7, 5, "ng-container", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const page_r6 = ctx.$implicit;
    ɵɵnextContext(2);
    const p_r3 = ɵɵreference(1);
    ɵɵclassProp("current", p_r3.getCurrent() === page_r6.value)("ellipsis", page_r6.label === "...");
    ɵɵadvance();
    ɵɵproperty("ngIf", p_r3.getCurrent() !== page_r6.value);
    ɵɵadvance();
    ɵɵproperty("ngIf", p_r3.getCurrent() === page_r6.value);
  }
}
function PaginationControlsComponent_ul_3_li_5_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 12);
    ɵɵlistener("keyup.enter", function PaginationControlsComponent_ul_3_li_5_a_1_Template_a_keyup_enter_0_listener() {
      ɵɵrestoreView(_r7);
      ɵɵnextContext(3);
      const p_r3 = ɵɵreference(1);
      return ɵɵresetView(p_r3.next());
    })("click", function PaginationControlsComponent_ul_3_li_5_a_1_Template_a_click_0_listener() {
      ɵɵrestoreView(_r7);
      ɵɵnextContext(3);
      const p_r3 = ɵɵreference(1);
      return ɵɵresetView(p_r3.next());
    });
    ɵɵtext(1);
    ɵɵelementStart(2, "span", 13);
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r3.nextLabel, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r3.screenReaderPageLabel);
  }
}
function PaginationControlsComponent_ul_3_li_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 14);
    ɵɵtext(1);
    ɵɵelementStart(2, "span", 13);
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r3.nextLabel, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r3.screenReaderPageLabel);
  }
}
function PaginationControlsComponent_ul_3_li_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 17);
    ɵɵtemplate(1, PaginationControlsComponent_ul_3_li_5_a_1_Template, 4, 2, "a", 10)(2, PaginationControlsComponent_ul_3_li_5_span_2_Template, 4, 2, "span", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const p_r3 = ɵɵreference(1);
    ɵɵclassProp("disabled", p_r3.isLastPage());
    ɵɵadvance();
    ɵɵproperty("ngIf", !p_r3.isLastPage());
    ɵɵadvance();
    ɵɵproperty("ngIf", p_r3.isLastPage());
  }
}
function PaginationControlsComponent_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 4);
    ɵɵtemplate(1, PaginationControlsComponent_ul_3_li_1_Template, 3, 4, "li", 5);
    ɵɵelementStart(2, "li", 6);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵtemplate(4, PaginationControlsComponent_ul_3_li_4_Template, 3, 6, "li", 7)(5, PaginationControlsComponent_ul_3_li_5_Template, 3, 4, "li", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    const p_r3 = ɵɵreference(1);
    ɵɵclassProp("responsive", ctx_r3.responsive);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.directionLinks);
    ɵɵadvance(2);
    ɵɵtextInterpolate2(" ", p_r3.getCurrent(), " / ", p_r3.getLastPage(), " ");
    ɵɵadvance();
    ɵɵproperty("ngForOf", p_r3.pages)("ngForTrackBy", ctx_r3.trackByIndex);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.directionLinks);
  }
}
var PaginationService = class {
  constructor() {
    this.change = new EventEmitter();
    this.instances = {};
    this.DEFAULT_ID = "DEFAULT_PAGINATION_ID";
  }
  defaultId() {
    return this.DEFAULT_ID;
  }
  /**
   * Register a PaginationInstance with this service. Returns a
   * boolean value signifying whether the instance is new or
   * updated (true = new or updated, false = unchanged).
   */
  register(instance) {
    if (instance.id == null) {
      instance.id = this.DEFAULT_ID;
    }
    if (!this.instances[instance.id]) {
      this.instances[instance.id] = instance;
      return true;
    } else {
      return this.updateInstance(instance);
    }
  }
  /**
   * Check each property of the instance and update any that have changed. Return
   * true if any changes were made, else return false.
   */
  updateInstance(instance) {
    let changed = false;
    for (let prop in this.instances[instance.id]) {
      if (instance[prop] !== this.instances[instance.id][prop]) {
        this.instances[instance.id][prop] = instance[prop];
        changed = true;
      }
    }
    return changed;
  }
  /**
   * Returns the current page number.
   */
  getCurrentPage(id) {
    if (this.instances[id]) {
      return this.instances[id].currentPage;
    }
    return 1;
  }
  /**
   * Sets the current page number.
   */
  setCurrentPage(id, page) {
    if (this.instances[id]) {
      let instance = this.instances[id];
      let maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
      if (page <= maxPage && 1 <= page) {
        this.instances[id].currentPage = page;
        this.change.emit(id);
      }
    }
  }
  /**
   * Sets the value of instance.totalItems
   */
  setTotalItems(id, totalItems) {
    if (this.instances[id] && 0 <= totalItems) {
      this.instances[id].totalItems = totalItems;
      this.change.emit(id);
    }
  }
  /**
   * Sets the value of instance.itemsPerPage.
   */
  setItemsPerPage(id, itemsPerPage) {
    if (this.instances[id]) {
      this.instances[id].itemsPerPage = itemsPerPage;
      this.change.emit(id);
    }
  }
  /**
   * Returns a clone of the pagination instance object matching the id. If no
   * id specified, returns the instance corresponding to the default id.
   */
  getInstance(id = this.DEFAULT_ID) {
    if (this.instances[id]) {
      return this.clone(this.instances[id]);
    }
    return {};
  }
  /**
   * Perform a shallow clone of an object.
   */
  clone(obj) {
    var target = {};
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        target[i] = obj[i];
      }
    }
    return target;
  }
};
var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = class {
  constructor(service) {
    this.service = service;
    this.state = {};
  }
  transform(collection, args) {
    if (!(collection instanceof Array)) {
      let _id = args.id || this.service.defaultId();
      if (this.state[_id]) {
        return this.state[_id].slice;
      } else {
        return collection;
      }
    }
    let serverSideMode = args.totalItems && args.totalItems !== collection.length;
    let instance = this.createInstance(collection, args);
    let id = instance.id;
    let start, end;
    let perPage = instance.itemsPerPage;
    let emitChange = this.service.register(instance);
    if (!serverSideMode && collection instanceof Array) {
      perPage = +perPage || LARGE_NUMBER;
      start = (instance.currentPage - 1) * perPage;
      end = start + perPage;
      let isIdentical = this.stateIsIdentical(id, collection, start, end);
      if (isIdentical) {
        return this.state[id].slice;
      } else {
        let slice = collection.slice(start, end);
        this.saveState(id, collection, slice, start, end);
        this.service.change.emit(id);
        return slice;
      }
    } else {
      if (emitChange) {
        this.service.change.emit(id);
      }
      this.saveState(id, collection, collection, start, end);
      return collection;
    }
  }
  /**
   * Create an PaginationInstance object, using defaults for any optional properties not supplied.
   */
  createInstance(collection, config) {
    this.checkConfig(config);
    return {
      id: config.id != null ? config.id : this.service.defaultId(),
      itemsPerPage: +config.itemsPerPage || 0,
      currentPage: +config.currentPage || 1,
      totalItems: +config.totalItems || collection.length
    };
  }
  /**
   * Ensure the argument passed to the filter contains the required properties.
   */
  checkConfig(config) {
    const required = ["itemsPerPage", "currentPage"];
    const missing = required.filter((prop) => !(prop in config));
    if (0 < missing.length) {
      throw new Error(`PaginatePipe: Argument is missing the following required properties: ${missing.join(", ")}`);
    }
  }
  /**
   * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
   * array for a given id. This means that the next time the pipe is run on this collection & id, we just
   * need to check that the collection, start and end points are all identical, and if so, return the
   * last sliced array.
   */
  saveState(id, collection, slice, start, end) {
    this.state[id] = {
      collection,
      size: collection.length,
      slice,
      start,
      end
    };
  }
  /**
   * For a given id, returns true if the collection, size, start and end values are identical.
   */
  stateIsIdentical(id, collection, start, end) {
    let state = this.state[id];
    if (!state) {
      return false;
    }
    let isMetaDataIdentical = state.size === collection.length && state.start === start && state.end === end;
    if (!isMetaDataIdentical) {
      return false;
    }
    return state.slice.every((element, index) => element === collection[start + index]);
  }
};
PaginatePipe.ɵfac = function PaginatePipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PaginatePipe)(ɵɵdirectiveInject(PaginationService, 16));
};
PaginatePipe.ɵpipe = ɵɵdefinePipe({
  name: "paginate",
  type: PaginatePipe,
  pure: false,
  standalone: false
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginatePipe, [{
    type: Pipe,
    args: [{
      name: "paginate",
      pure: false
    }]
  }], function() {
    return [{
      type: PaginationService
    }];
  }, null);
})();
var DEFAULT_TEMPLATE = `
    <pagination-template  #p="paginationApi"
                         [id]="id"
                         [maxSize]="maxSize"
                         (pageChange)="pageChange.emit($event)"
                         (pageBoundsCorrection)="pageBoundsCorrection.emit($event)">
    <nav role="navigation" [attr.aria-label]="screenReaderPaginationLabel">
    <ul class="ngx-pagination" 
        [class.responsive]="responsive"
        *ngIf="!(autoHide && p.pages.length <= 1)">

        <li class="pagination-previous" [class.disabled]="p.isFirstPage()" *ngIf="directionLinks"> 
            <a tabindex="0" *ngIf="1 < p.getCurrent()" (keyup.enter)="p.previous()" (click)="p.previous()">
                {{ previousLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </a>
            <span *ngIf="p.isFirstPage()" aria-disabled="true">
                {{ previousLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </span>
        </li> 

        <li class="small-screen">
            {{ p.getCurrent() }} / {{ p.getLastPage() }}
        </li>

        <li [class.current]="p.getCurrent() === page.value" 
            [class.ellipsis]="page.label === '...'"
            *ngFor="let page of p.pages; trackBy: trackByIndex">
            <a tabindex="0" (keyup.enter)="p.setCurrent(page.value)" (click)="p.setCurrent(page.value)" *ngIf="p.getCurrent() !== page.value">
                <span class="show-for-sr">{{ screenReaderPageLabel }} </span>
                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span>
            </a>
            <ng-container *ngIf="p.getCurrent() === page.value">
              <span aria-live="polite">
                <span class="show-for-sr">{{ screenReaderCurrentLabel }} </span>
                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span> 
              </span>
            </ng-container>
        </li>

        <li class="pagination-next" [class.disabled]="p.isLastPage()" *ngIf="directionLinks">
            <a tabindex="0" *ngIf="!p.isLastPage()" (keyup.enter)="p.next()" (click)="p.next()">
                 {{ nextLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </a>
            <span *ngIf="p.isLastPage()" aria-disabled="true">
                 {{ nextLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </span>
        </li>

    </ul>
    </nav>
    </pagination-template>
    `;
var DEFAULT_STYLES = `
.ngx-pagination {
  margin-left: 0;
  margin-bottom: 1rem; }
  .ngx-pagination::before, .ngx-pagination::after {
    content: ' ';
    display: table; }
  .ngx-pagination::after {
    clear: both; }
  .ngx-pagination li {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    margin-right: 0.0625rem;
    border-radius: 0; }
  .ngx-pagination li {
    display: inline-block; }
  .ngx-pagination a,
  .ngx-pagination button {
    color: #0a0a0a; 
    display: block;
    padding: 0.1875rem 0.625rem;
    border-radius: 0; }
    .ngx-pagination a:hover,
    .ngx-pagination button:hover {
      background: #e6e6e6; }
  .ngx-pagination .current {
    padding: 0.1875rem 0.625rem;
    background: #2199e8;
    color: #fefefe;
    cursor: default; }
  .ngx-pagination .disabled {
    padding: 0.1875rem 0.625rem;
    color: #cacaca;
    cursor: default; } 
    .ngx-pagination .disabled:hover {
      background: transparent; }
  .ngx-pagination a, .ngx-pagination button {
    cursor: pointer; }

.ngx-pagination .pagination-previous a::before,
.ngx-pagination .pagination-previous.disabled::before { 
  content: '«';
  display: inline-block;
  margin-right: 0.5rem; }

.ngx-pagination .pagination-next a::after,
.ngx-pagination .pagination-next.disabled::after {
  content: '»';
  display: inline-block;
  margin-left: 0.5rem; }

.ngx-pagination .show-for-sr {
  position: absolute !important;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0); }
.ngx-pagination .small-screen {
  display: none; }
@media screen and (max-width: 601px) {
  .ngx-pagination.responsive .small-screen {
    display: inline-block; } 
  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {
    display: none; }
}
  `;
var PaginationControlsDirective = class {
  constructor(service, changeDetectorRef) {
    this.service = service;
    this.changeDetectorRef = changeDetectorRef;
    this.maxSize = 7;
    this.pageChange = new EventEmitter();
    this.pageBoundsCorrection = new EventEmitter();
    this.pages = [];
    this.changeSub = this.service.change.subscribe((id) => {
      if (this.id === id) {
        this.updatePageLinks();
        this.changeDetectorRef.markForCheck();
        this.changeDetectorRef.detectChanges();
      }
    });
  }
  ngOnInit() {
    if (this.id === void 0) {
      this.id = this.service.defaultId();
    }
    this.updatePageLinks();
  }
  ngOnChanges(changes) {
    this.updatePageLinks();
  }
  ngOnDestroy() {
    this.changeSub.unsubscribe();
  }
  /**
   * Go to the previous page
   */
  previous() {
    this.checkValidId();
    this.setCurrent(this.getCurrent() - 1);
  }
  /**
   * Go to the next page
   */
  next() {
    this.checkValidId();
    this.setCurrent(this.getCurrent() + 1);
  }
  /**
   * Returns true if current page is first page
   */
  isFirstPage() {
    return this.getCurrent() === 1;
  }
  /**
   * Returns true if current page is last page
   */
  isLastPage() {
    return this.getLastPage() === this.getCurrent();
  }
  /**
   * Set the current page number.
   */
  setCurrent(page) {
    this.pageChange.emit(page);
  }
  /**
   * Get the current page number.
   */
  getCurrent() {
    return this.service.getCurrentPage(this.id);
  }
  /**
   * Returns the last page number
   */
  getLastPage() {
    let inst = this.service.getInstance(this.id);
    if (inst.totalItems < 1) {
      return 1;
    }
    return Math.ceil(inst.totalItems / inst.itemsPerPage);
  }
  getTotalItems() {
    return this.service.getInstance(this.id).totalItems;
  }
  checkValidId() {
    if (this.service.getInstance(this.id).id == null) {
      console.warn(`PaginationControlsDirective: the specified id "${this.id}" does not match any registered PaginationInstance`);
    }
  }
  /**
   * Updates the page links and checks that the current page is valid. Should run whenever the
   * PaginationService.change stream emits a value matching the current ID, or when any of the
   * input values changes.
   */
  updatePageLinks() {
    let inst = this.service.getInstance(this.id);
    const correctedCurrentPage = this.outOfBoundCorrection(inst);
    if (correctedCurrentPage !== inst.currentPage) {
      setTimeout(() => {
        this.pageBoundsCorrection.emit(correctedCurrentPage);
        this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
      });
    } else {
      this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
    }
  }
  /**
   * Checks that the instance.currentPage property is within bounds for the current page range.
   * If not, return a correct value for currentPage, or the current value if OK.
   */
  outOfBoundCorrection(instance) {
    const totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
    if (totalPages < instance.currentPage && 0 < totalPages) {
      return totalPages;
    } else if (instance.currentPage < 1) {
      return 1;
    }
    return instance.currentPage;
  }
  /**
   * Returns an array of Page objects to use in the pagination controls.
   */
  createPageArray(currentPage, itemsPerPage, totalItems, paginationRange) {
    paginationRange = +paginationRange;
    let pages = [];
    const totalPages = Math.max(Math.ceil(totalItems / itemsPerPage), 1);
    const halfWay = Math.ceil(paginationRange / 2);
    const isStart = currentPage <= halfWay;
    const isEnd = totalPages - halfWay < currentPage;
    const isMiddle = !isStart && !isEnd;
    let ellipsesNeeded = paginationRange < totalPages;
    let i = 1;
    while (i <= totalPages && i <= paginationRange) {
      let label;
      let pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
      let openingEllipsesNeeded = i === 2 && (isMiddle || isEnd);
      let closingEllipsesNeeded = i === paginationRange - 1 && (isMiddle || isStart);
      if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
        label = "...";
      } else {
        label = pageNumber;
      }
      pages.push({
        label,
        value: pageNumber
      });
      i++;
    }
    return pages;
  }
  /**
   * Given the position in the sequence of pagination links [i],
   * figure out what page number corresponds to that position.
   */
  calculatePageNumber(i, currentPage, paginationRange, totalPages) {
    let halfWay = Math.ceil(paginationRange / 2);
    if (i === paginationRange) {
      return totalPages;
    } else if (i === 1) {
      return i;
    } else if (paginationRange < totalPages) {
      if (totalPages - halfWay < currentPage) {
        return totalPages - paginationRange + i;
      } else if (halfWay < currentPage) {
        return currentPage - halfWay + i;
      } else {
        return i;
      }
    } else {
      return i;
    }
  }
};
PaginationControlsDirective.ɵfac = function PaginationControlsDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PaginationControlsDirective)(ɵɵdirectiveInject(PaginationService), ɵɵdirectiveInject(ChangeDetectorRef));
};
PaginationControlsDirective.ɵdir = ɵɵdefineDirective({
  type: PaginationControlsDirective,
  selectors: [["pagination-template"], ["", "pagination-template", ""]],
  inputs: {
    id: "id",
    maxSize: "maxSize"
  },
  outputs: {
    pageChange: "pageChange",
    pageBoundsCorrection: "pageBoundsCorrection"
  },
  exportAs: ["paginationApi"],
  standalone: false,
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationControlsDirective, [{
    type: Directive,
    args: [{
      selector: "pagination-template,[pagination-template]",
      exportAs: "paginationApi"
    }]
  }], function() {
    return [{
      type: PaginationService
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    id: [{
      type: Input
    }],
    maxSize: [{
      type: Input
    }],
    pageChange: [{
      type: Output
    }],
    pageBoundsCorrection: [{
      type: Output
    }]
  });
})();
function coerceToBoolean(input) {
  return !!input && input !== "false";
}
var PaginationControlsComponent = class {
  constructor() {
    this.maxSize = 7;
    this.previousLabel = "Previous";
    this.nextLabel = "Next";
    this.screenReaderPaginationLabel = "Pagination";
    this.screenReaderPageLabel = "page";
    this.screenReaderCurrentLabel = `You're on page`;
    this.pageChange = new EventEmitter();
    this.pageBoundsCorrection = new EventEmitter();
    this._directionLinks = true;
    this._autoHide = false;
    this._responsive = false;
  }
  get directionLinks() {
    return this._directionLinks;
  }
  set directionLinks(value) {
    this._directionLinks = coerceToBoolean(value);
  }
  get autoHide() {
    return this._autoHide;
  }
  set autoHide(value) {
    this._autoHide = coerceToBoolean(value);
  }
  get responsive() {
    return this._responsive;
  }
  set responsive(value) {
    this._responsive = coerceToBoolean(value);
  }
  trackByIndex(index) {
    return index;
  }
};
PaginationControlsComponent.ɵfac = function PaginationControlsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PaginationControlsComponent)();
};
PaginationControlsComponent.ɵcmp = ɵɵdefineComponent({
  type: PaginationControlsComponent,
  selectors: [["pagination-controls"]],
  inputs: {
    id: "id",
    maxSize: "maxSize",
    directionLinks: "directionLinks",
    autoHide: "autoHide",
    responsive: "responsive",
    previousLabel: "previousLabel",
    nextLabel: "nextLabel",
    screenReaderPaginationLabel: "screenReaderPaginationLabel",
    screenReaderPageLabel: "screenReaderPageLabel",
    screenReaderCurrentLabel: "screenReaderCurrentLabel"
  },
  outputs: {
    pageChange: "pageChange",
    pageBoundsCorrection: "pageBoundsCorrection"
  },
  standalone: false,
  decls: 4,
  vars: 4,
  consts: [["p", "paginationApi"], [3, "pageChange", "pageBoundsCorrection", "id", "maxSize"], ["role", "navigation"], ["class", "ngx-pagination", 3, "responsive", 4, "ngIf"], [1, "ngx-pagination"], ["class", "pagination-previous", 3, "disabled", 4, "ngIf"], [1, "small-screen"], [3, "current", "ellipsis", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "pagination-next", 3, "disabled", 4, "ngIf"], [1, "pagination-previous"], ["tabindex", "0", 3, "keyup.enter", "click", 4, "ngIf"], ["aria-disabled", "true", 4, "ngIf"], ["tabindex", "0", 3, "keyup.enter", "click"], [1, "show-for-sr"], ["aria-disabled", "true"], [4, "ngIf"], ["aria-live", "polite"], [1, "pagination-next"]],
  template: function PaginationControlsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "pagination-template", 1, 0);
      ɵɵlistener("pageChange", function PaginationControlsComponent_Template_pagination_template_pageChange_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.pageChange.emit($event));
      })("pageBoundsCorrection", function PaginationControlsComponent_Template_pagination_template_pageBoundsCorrection_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.pageBoundsCorrection.emit($event));
      });
      ɵɵelementStart(2, "nav", 2);
      ɵɵtemplate(3, PaginationControlsComponent_ul_3_Template, 6, 8, "ul", 3);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      const p_r3 = ɵɵreference(1);
      ɵɵproperty("id", ctx.id)("maxSize", ctx.maxSize);
      ɵɵadvance(2);
      ɵɵattribute("aria-label", ctx.screenReaderPaginationLabel);
      ɵɵadvance();
      ɵɵproperty("ngIf", !(ctx.autoHide && p_r3.pages.length <= 1));
    }
  },
  dependencies: [PaginationControlsDirective, NgIf, NgForOf, DecimalPipe],
  styles: ['.ngx-pagination{margin-left:0;margin-bottom:1rem}.ngx-pagination:before,.ngx-pagination:after{content:" ";display:table}.ngx-pagination:after{clear:both}.ngx-pagination li{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin-right:.0625rem;border-radius:0}.ngx-pagination li{display:inline-block}.ngx-pagination a,.ngx-pagination button{color:#0a0a0a;display:block;padding:.1875rem .625rem;border-radius:0}.ngx-pagination a:hover,.ngx-pagination button:hover{background:#e6e6e6}.ngx-pagination .current{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ngx-pagination .disabled{padding:.1875rem .625rem;color:#cacaca;cursor:default}.ngx-pagination .disabled:hover{background:transparent}.ngx-pagination a,.ngx-pagination button{cursor:pointer}.ngx-pagination .pagination-previous a:before,.ngx-pagination .pagination-previous.disabled:before{content:"\\ab";display:inline-block;margin-right:.5rem}.ngx-pagination .pagination-next a:after,.ngx-pagination .pagination-next.disabled:after{content:"\\bb";display:inline-block;margin-left:.5rem}.ngx-pagination .show-for-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.ngx-pagination .small-screen{display:none}@media screen and (max-width: 601px){.ngx-pagination.responsive .small-screen{display:inline-block}.ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next){display:none}}\n'],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationControlsComponent, [{
    type: Component,
    args: [{
      selector: "pagination-controls",
      template: DEFAULT_TEMPLATE,
      styles: [DEFAULT_STYLES],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], null, {
    id: [{
      type: Input
    }],
    maxSize: [{
      type: Input
    }],
    directionLinks: [{
      type: Input
    }],
    autoHide: [{
      type: Input
    }],
    responsive: [{
      type: Input
    }],
    previousLabel: [{
      type: Input
    }],
    nextLabel: [{
      type: Input
    }],
    screenReaderPaginationLabel: [{
      type: Input
    }],
    screenReaderPageLabel: [{
      type: Input
    }],
    screenReaderCurrentLabel: [{
      type: Input
    }],
    pageChange: [{
      type: Output
    }],
    pageBoundsCorrection: [{
      type: Output
    }]
  });
})();
var NgxPaginationModule = class {
};
NgxPaginationModule.ɵfac = function NgxPaginationModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgxPaginationModule)();
};
NgxPaginationModule.ɵmod = ɵɵdefineNgModule({
  type: NgxPaginationModule,
  declarations: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective],
  imports: [CommonModule],
  exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
});
NgxPaginationModule.ɵinj = ɵɵdefineInjector({
  providers: [PaginationService],
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxPaginationModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective],
      providers: [PaginationService],
      exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
    }]
  }], null, null);
})();

// node_modules/ngx-easy-table/fesm2022/ngx-easy-table.mjs
var _c0 = ["paginationDirective"];
var _c1 = ["paginationRange"];
function PaginationComponent_li_5_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 14);
    ɵɵlistener("keyup.enter", function PaginationComponent_li_5_a_1_Template_a_keyup_enter_0_listener() {
      ɵɵrestoreView(_r2);
      ɵɵnextContext(2);
      const paginationDirective_r3 = ɵɵreference(3);
      return ɵɵresetView(paginationDirective_r3.previous());
    })("click", function PaginationComponent_li_5_a_1_Template_a_click_0_listener() {
      ɵɵrestoreView(_r2);
      ɵɵnextContext(2);
      const paginationDirective_r3 = ɵɵreference(3);
      return ɵɵresetView(paginationDirective_r3.previous());
    });
    ɵɵtext(1);
    ɵɵelementStart(2, "span", 15);
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵattribute("aria-label", ctx_r3.previousLabel + " " + ctx_r3.screenReaderPageLabel);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r3.previousLabel, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r3.screenReaderPageLabel);
  }
}
function PaginationComponent_li_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementStart(2, "span", 15);
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r3.previousLabel, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r3.screenReaderPageLabel);
  }
}
function PaginationComponent_li_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 11);
    ɵɵtemplate(1, PaginationComponent_li_5_a_1_Template, 4, 3, "a", 12)(2, PaginationComponent_li_5_span_2_Template, 4, 2, "span", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const paginationDirective_r3 = ɵɵreference(3);
    ɵɵclassProp("disabled", paginationDirective_r3.isFirstPage());
    ɵɵadvance();
    ɵɵproperty("ngIf", 1 < paginationDirective_r3.getCurrent());
    ɵɵadvance();
    ɵɵproperty("ngIf", paginationDirective_r3.isFirstPage());
  }
}
function PaginationComponent_li_8_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 14);
    ɵɵlistener("keyup.enter", function PaginationComponent_li_8_a_1_Template_a_keyup_enter_0_listener() {
      ɵɵrestoreView(_r5);
      const page_r6 = ɵɵnextContext().$implicit;
      ɵɵnextContext();
      const paginationDirective_r3 = ɵɵreference(3);
      return ɵɵresetView(paginationDirective_r3.setCurrent(page_r6.value));
    })("click", function PaginationComponent_li_8_a_1_Template_a_click_0_listener() {
      ɵɵrestoreView(_r5);
      const page_r6 = ɵɵnextContext().$implicit;
      ɵɵnextContext();
      const paginationDirective_r3 = ɵɵreference(3);
      return ɵɵresetView(paginationDirective_r3.setCurrent(page_r6.value));
    });
    ɵɵelementStart(1, "span", 15);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const page_r6 = ɵɵnextContext().$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", ctx_r3.screenReaderPageLabel, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(page_r6.label);
  }
}
function PaginationComponent_li_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 15);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const page_r6 = ɵɵnextContext().$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", ctx_r3.screenReaderCurrentLabel, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(page_r6.label);
  }
}
function PaginationComponent_li_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵtemplate(1, PaginationComponent_li_8_a_1_Template, 5, 2, "a", 12)(2, PaginationComponent_li_8_ng_container_2_Template, 5, 2, "ng-container", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const page_r6 = ctx.$implicit;
    ɵɵnextContext();
    const paginationDirective_r3 = ɵɵreference(3);
    ɵɵclassProp("current", paginationDirective_r3.getCurrent() === page_r6.value)("ellipsis", page_r6.label === "...");
    ɵɵadvance();
    ɵɵproperty("ngIf", paginationDirective_r3.getCurrent() !== page_r6.value);
    ɵɵadvance();
    ɵɵproperty("ngIf", paginationDirective_r3.getCurrent() === page_r6.value);
  }
}
function PaginationComponent_li_9_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 14);
    ɵɵlistener("keyup.enter", function PaginationComponent_li_9_a_1_Template_a_keyup_enter_0_listener() {
      ɵɵrestoreView(_r7);
      ɵɵnextContext(2);
      const paginationDirective_r3 = ɵɵreference(3);
      return ɵɵresetView(paginationDirective_r3.next());
    })("click", function PaginationComponent_li_9_a_1_Template_a_click_0_listener() {
      ɵɵrestoreView(_r7);
      ɵɵnextContext(2);
      const paginationDirective_r3 = ɵɵreference(3);
      return ɵɵresetView(paginationDirective_r3.next());
    });
    ɵɵtext(1);
    ɵɵelementStart(2, "span", 15);
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵattribute("aria-label", ctx_r3.nextLabel + " " + ctx_r3.screenReaderPageLabel);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r3.nextLabel, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r3.screenReaderPageLabel);
  }
}
function PaginationComponent_li_9_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementStart(2, "span", 15);
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r3.nextLabel, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r3.screenReaderPageLabel);
  }
}
function PaginationComponent_li_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 16);
    ɵɵtemplate(1, PaginationComponent_li_9_a_1_Template, 4, 3, "a", 12)(2, PaginationComponent_li_9_span_2_Template, 4, 2, "span", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const paginationDirective_r3 = ɵɵreference(3);
    ɵɵclassProp("disabled", paginationDirective_r3.isLastPage());
    ɵɵadvance();
    ɵɵproperty("ngIf", !paginationDirective_r3.isLastPage());
    ɵɵadvance();
    ɵɵproperty("ngIf", paginationDirective_r3.isLastPage());
  }
}
function PaginationComponent_div_10_ul_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 25);
    ɵɵlistener("click", function PaginationComponent_div_10_ul_7_li_1_Template_li_click_0_listener() {
      const limit_r10 = ɵɵrestoreView(_r9).$implicit;
      const ctx_r3 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r3.changeLimit(limit_r10, false));
    });
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const limit_r10 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext(3);
    ɵɵclassProp("ngx-pagination-range--selected", limit_r10 === ctx_r3.selectedLimit);
    ɵɵadvance(2);
    ɵɵtextInterpolate(limit_r10);
  }
}
function PaginationComponent_div_10_ul_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 23);
    ɵɵtemplate(1, PaginationComponent_div_10_ul_7_li_1_Template, 3, 3, "li", 24);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r3.ranges);
  }
}
function PaginationComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 17, 1)(2, "div", 18)(3, "div", 19)(4, "div", 20);
    ɵɵlistener("click", function PaginationComponent_div_10_Template_div_click_4_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.showRange = !ctx_r3.showRange);
    });
    ɵɵtext(5);
    ɵɵelement(6, "i", 21);
    ɵɵelementEnd();
    ɵɵtemplate(7, PaginationComponent_div_10_ul_7_Template, 2, 1, "ul", 22);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassProp("ngx-table__table--dark-pagination-range", ctx_r3.config.tableLayout.theme === "dark");
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ctx_r3.selectedLimit, " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r3.showRange);
  }
}
var _c2 = ["th"];
var _c3 = ["additionalActionMenu"];
var _c4 = ["headerDropdown"];
var _c5 = ["table-thead", ""];
var _c6 = (a0) => ({
  $implicit: a0
});
function TableTHeadComponent_tr_0_th_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 13);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.selectAllTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c6, ctx_r0.onSelectAllBinded));
  }
}
function TableTHeadComponent_tr_0_th_1_label_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 14)(1, "input", 15);
    ɵɵlistener("change", function TableTHeadComponent_tr_0_th_1_label_2_Template_input_change_1_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.onSelectAll());
    });
    ɵɵelementEnd();
    ɵɵelement(2, "em", 16);
    ɵɵelementEnd();
  }
}
function TableTHeadComponent_tr_0_th_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th");
    ɵɵtemplate(1, TableTHeadComponent_tr_0_th_1_ng_container_1_Template, 1, 4, "ng-container", 11)(2, TableTHeadComponent_tr_0_th_1_label_2_Template, 3, 0, "label", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵstyleProp("width", "3%");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.selectAllTemplate && ctx_r0.config.checkboxes);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.selectAllTemplate && ctx_r0.config.checkboxes);
  }
}
function TableTHeadComponent_tr_0_ng_container_2_em_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "em", 25);
  }
}
function TableTHeadComponent_tr_0_ng_container_2_em_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "em", 26);
  }
}
function TableTHeadComponent_tr_0_ng_container_2_em_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "em", 27);
  }
}
function TableTHeadComponent_tr_0_ng_container_2_div_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 32);
    ɵɵelementContainer(1, 33);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r5 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", column_r5.headerActionTemplate);
  }
}
function TableTHeadComponent_tr_0_ng_container_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 28, 1)(2, "a", 29);
    ɵɵlistener("click", function TableTHeadComponent_tr_0_ng_container_2_div_12_Template_a_click_2_listener() {
      ɵɵrestoreView(_r6);
      const column_r5 = ɵɵnextContext().$implicit;
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.showHeaderActionTemplateMenu(column_r5));
    });
    ɵɵelement(3, "span", 30);
    ɵɵelementEnd();
    ɵɵtemplate(4, TableTHeadComponent_tr_0_ng_container_2_div_12_div_4_Template, 2, 1, "div", 31);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r5 = ɵɵnextContext().$implicit;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance(4);
    ɵɵproperty("ngIf", column_r5.key === ctx_r0.openedHeaderActionTemplate);
  }
}
function TableTHeadComponent_tr_0_ng_container_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 34);
  }
}
function TableTHeadComponent_tr_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "th", 17, 0);
    ɵɵlistener("mousedown", function TableTHeadComponent_tr_0_ng_container_2_Template_th_mousedown_1_listener($event) {
      ɵɵrestoreView(_r3);
      const th_r4 = ɵɵreference(2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onMouseDown($event, th_r4));
    })("mouseup", function TableTHeadComponent_tr_0_ng_container_2_Template_th_mouseup_1_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onMouseUp($event));
    })("mousemove", function TableTHeadComponent_tr_0_ng_container_2_Template_th_mousemove_1_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onMouseMove($event));
    });
    ɵɵelementStart(3, "div", 18);
    ɵɵlistener("click", function TableTHeadComponent_tr_0_ng_container_2_Template_div_click_3_listener() {
      const column_r5 = ɵɵrestoreView(_r3).$implicit;
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.orderBy(column_r5));
    });
    ɵɵelementStart(4, "div", 19);
    ɵɵtext(5);
    ɵɵelementStart(6, "span");
    ɵɵtext(7, " ");
    ɵɵelementEnd();
    ɵɵtemplate(8, TableTHeadComponent_tr_0_ng_container_2_em_8_Template, 1, 0, "em", 20);
    ɵɵelementStart(9, "div");
    ɵɵtemplate(10, TableTHeadComponent_tr_0_ng_container_2_em_10_Template, 1, 0, "em", 21)(11, TableTHeadComponent_tr_0_ng_container_2_em_11_Template, 1, 0, "em", 22);
    ɵɵelementEnd()()();
    ɵɵtemplate(12, TableTHeadComponent_tr_0_ng_container_2_div_12_Template, 5, 1, "div", 23)(13, TableTHeadComponent_tr_0_ng_container_2_div_13_Template, 1, 0, "div", 24);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const column_r5 = ctx.$implicit;
    const colIndex_r7 = ctx.index;
    const last_r8 = ctx.last;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵstyleProp("left", ctx_r0.styleService.pinnedWidth(column_r5.pinned, colIndex_r7))("width", ctx_r0.getColumnWidth(column_r5));
    ɵɵclassProp("pinned-left", column_r5.pinned);
    ɵɵproperty("ngClass", column_r5.cssClass && column_r5.cssClass.includeHeader ? column_r5.cssClass.name : "");
    ɵɵadvance(2);
    ɵɵclassProp("pointer", ctx_r0.isOrderEnabled(column_r5));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", column_r5.title, "");
    ɵɵadvance(3);
    ɵɵproperty("ngIf", column_r5.pinned);
    ɵɵadvance();
    ɵɵstyleProp("display", ctx_r0.config.orderEnabled ? "inline" : "none");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.sortKey === column_r5.key && ctx_r0.sortState.get(ctx_r0.sortKey) === "asc");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.sortKey === column_r5.key && ctx_r0.sortState.get(ctx_r0.sortKey) === "desc");
    ɵɵadvance();
    ɵɵproperty("ngIf", !!column_r5.headerActionTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.config.resizeColumn && !last_r8);
  }
}
function TableTHeadComponent_tr_0_th_3_div_1_ul_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 33);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(5);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.additionalActionsTemplate);
  }
}
function TableTHeadComponent_tr_0_th_3_div_1_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 32);
    ɵɵtemplate(1, TableTHeadComponent_tr_0_th_3_div_1_ul_4_ng_container_1_Template, 1, 1, "ng-container", 37);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.additionalActionsTemplate);
  }
}
function TableTHeadComponent_tr_0_th_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 28, 2)(2, "a", 29);
    ɵɵlistener("click", function TableTHeadComponent_tr_0_th_3_div_1_Template_a_click_2_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.showMenu());
    });
    ɵɵelement(3, "span", 36);
    ɵɵelementEnd();
    ɵɵtemplate(4, TableTHeadComponent_tr_0_th_3_div_1_ul_4_Template, 2, 1, "ul", 31);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance(4);
    ɵɵproperty("ngIf", ctx_r0.menuActive);
  }
}
function TableTHeadComponent_tr_0_th_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 35);
    ɵɵtemplate(1, TableTHeadComponent_tr_0_th_3_div_1_Template, 5, 1, "div", 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.config.additionalActions);
  }
}
function TableTHeadComponent_tr_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr", 8);
    ɵɵtemplate(1, TableTHeadComponent_tr_0_th_1_Template, 3, 4, "th", 9)(2, TableTHeadComponent_tr_0_ng_container_2_Template, 14, 17, "ng-container", 7)(3, TableTHeadComponent_tr_0_th_3_Template, 2, 1, "th", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.config.checkboxes || ctx_r0.config.radio);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r0.columns);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.config.additionalActions || ctx_r0.config.detailsTemplate || ctx_r0.config.collapseAllRows || ctx_r0.config.groupRows);
  }
}
function TableTHeadComponent_tr_1_th_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 13);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.selectAllTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c6, ctx_r0.onSelectAllBinded));
  }
}
function TableTHeadComponent_tr_1_th_1_label_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 14)(1, "input", 39);
    ɵɵlistener("change", function TableTHeadComponent_tr_1_th_1_label_2_Template_input_change_1_listener() {
      ɵɵrestoreView(_r11);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.onSelectAll());
    });
    ɵɵelementEnd();
    ɵɵelement(2, "em", 40);
    ɵɵelementEnd();
  }
}
function TableTHeadComponent_tr_1_th_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th");
    ɵɵtemplate(1, TableTHeadComponent_tr_1_th_1_ng_container_1_Template, 1, 4, "ng-container", 11)(2, TableTHeadComponent_tr_1_th_1_label_2_Template, 3, 0, "label", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵstyleProp("width", "3%");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.selectAllTemplate && ctx_r0.config.checkboxes);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.selectAllTemplate && ctx_r0.config.checkboxes);
  }
}
function TableTHeadComponent_tr_1_ng_container_2_em_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "em", 25);
  }
}
function TableTHeadComponent_tr_1_ng_container_2_em_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "em", 26);
  }
}
function TableTHeadComponent_tr_1_ng_container_2_em_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "em", 27);
  }
}
function TableTHeadComponent_tr_1_ng_container_2_div_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 32);
    ɵɵelementContainer(1, 33);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r14 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", column_r14.headerActionTemplate);
  }
}
function TableTHeadComponent_tr_1_ng_container_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 28, 1)(2, "a", 29);
    ɵɵlistener("click", function TableTHeadComponent_tr_1_ng_container_2_div_12_Template_a_click_2_listener() {
      ɵɵrestoreView(_r15);
      const column_r14 = ɵɵnextContext().$implicit;
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.showHeaderActionTemplateMenu(column_r14));
    });
    ɵɵelement(3, "span", 30);
    ɵɵelementEnd();
    ɵɵtemplate(4, TableTHeadComponent_tr_1_ng_container_2_div_12_div_4_Template, 2, 1, "div", 31);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r14 = ɵɵnextContext().$implicit;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance(4);
    ɵɵproperty("ngIf", column_r14.key === ctx_r0.openedHeaderActionTemplate);
  }
}
function TableTHeadComponent_tr_1_ng_container_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 34);
  }
}
function TableTHeadComponent_tr_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "th", 41, 0);
    ɵɵlistener("mousedown", function TableTHeadComponent_tr_1_ng_container_2_Template_th_mousedown_1_listener($event) {
      ɵɵrestoreView(_r12);
      const th_r13 = ɵɵreference(2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onMouseDown($event, th_r13));
    })("mouseup", function TableTHeadComponent_tr_1_ng_container_2_Template_th_mouseup_1_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onMouseUp($event));
    })("mousemove", function TableTHeadComponent_tr_1_ng_container_2_Template_th_mousemove_1_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onMouseMove($event));
    });
    ɵɵelementStart(3, "div", 42);
    ɵɵlistener("click", function TableTHeadComponent_tr_1_ng_container_2_Template_div_click_3_listener() {
      const column_r14 = ɵɵrestoreView(_r12).$implicit;
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.orderBy(column_r14));
    });
    ɵɵelementStart(4, "div", 19);
    ɵɵtext(5);
    ɵɵelementStart(6, "span");
    ɵɵtext(7, " ");
    ɵɵelementEnd();
    ɵɵtemplate(8, TableTHeadComponent_tr_1_ng_container_2_em_8_Template, 1, 0, "em", 20);
    ɵɵelementStart(9, "div");
    ɵɵtemplate(10, TableTHeadComponent_tr_1_ng_container_2_em_10_Template, 1, 0, "em", 21)(11, TableTHeadComponent_tr_1_ng_container_2_em_11_Template, 1, 0, "em", 22);
    ɵɵelementEnd()()();
    ɵɵtemplate(12, TableTHeadComponent_tr_1_ng_container_2_div_12_Template, 5, 1, "div", 23)(13, TableTHeadComponent_tr_1_ng_container_2_div_13_Template, 1, 0, "div", 24);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const column_r14 = ctx.$implicit;
    const colIndex_r16 = ctx.index;
    const last_r17 = ctx.last;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵstyleProp("left", ctx_r0.styleService.pinnedWidth(column_r14.pinned, colIndex_r16))("width", ctx_r0.getColumnWidth(column_r14));
    ɵɵclassProp("pinned-left", column_r14.pinned);
    ɵɵproperty("cdkDragStartDelay", ctx_r0.config.reorderDelay || 0)("ngClass", column_r14.cssClass && column_r14.cssClass.includeHeader ? column_r14.cssClass.name : "");
    ɵɵadvance(2);
    ɵɵclassProp("pointer", ctx_r0.isOrderEnabled(column_r14));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", column_r14.title, "");
    ɵɵadvance(3);
    ɵɵproperty("ngIf", column_r14.pinned);
    ɵɵadvance();
    ɵɵstyleProp("display", ctx_r0.config.orderEnabled ? "inline" : "none");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.sortKey === column_r14.key && ctx_r0.sortState.get(ctx_r0.sortKey) === "asc");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.sortKey === column_r14.key && ctx_r0.sortState.get(ctx_r0.sortKey) === "desc");
    ɵɵadvance();
    ɵɵproperty("ngIf", !!column_r14.headerActionTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.config.resizeColumn && !last_r17);
  }
}
function TableTHeadComponent_tr_1_th_3_div_1_ul_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 33);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(5);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.additionalActionsTemplate);
  }
}
function TableTHeadComponent_tr_1_th_3_div_1_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 32);
    ɵɵtemplate(1, TableTHeadComponent_tr_1_th_3_div_1_ul_4_ng_container_1_Template, 1, 1, "ng-container", 37);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.additionalActionsTemplate);
  }
}
function TableTHeadComponent_tr_1_th_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 28, 2)(2, "a", 29);
    ɵɵlistener("click", function TableTHeadComponent_tr_1_th_3_div_1_Template_a_click_2_listener() {
      ɵɵrestoreView(_r18);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.showMenu());
    });
    ɵɵelement(3, "span", 36);
    ɵɵelementEnd();
    ɵɵtemplate(4, TableTHeadComponent_tr_1_th_3_div_1_ul_4_Template, 2, 1, "ul", 31);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance(4);
    ɵɵproperty("ngIf", ctx_r0.menuActive);
  }
}
function TableTHeadComponent_tr_1_th_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 35);
    ɵɵtemplate(1, TableTHeadComponent_tr_1_th_3_div_1_Template, 5, 1, "div", 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.config.additionalActions);
  }
}
function TableTHeadComponent_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr", 38);
    ɵɵlistener("cdkDropListDropped", function TableTHeadComponent_tr_1_Template_tr_cdkDropListDropped_0_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.columnDrop($event));
    });
    ɵɵtemplate(1, TableTHeadComponent_tr_1_th_1_Template, 3, 4, "th", 9)(2, TableTHeadComponent_tr_1_ng_container_2_Template, 14, 18, "ng-container", 7)(3, TableTHeadComponent_tr_1_th_3_Template, 2, 1, "th", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.config.checkboxes || ctx_r0.config.radio);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r0.columns);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.config.additionalActions || ctx_r0.config.detailsTemplate || ctx_r0.config.collapseAllRows || ctx_r0.config.groupRows);
  }
}
function TableTHeadComponent_th_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "th");
  }
}
function TableTHeadComponent_ng_container_4_table_header_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "table-header", 45);
    ɵɵlistener("update", function TableTHeadComponent_ng_container_4_table_header_2_Template_table_header_update_0_listener($event) {
      ɵɵrestoreView(_r19);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onSearch($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r20 = ɵɵnextContext().$implicit;
    ɵɵproperty("column", column_r20);
  }
}
function TableTHeadComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "th", 43);
    ɵɵtemplate(2, TableTHeadComponent_ng_container_4_table_header_2_Template, 1, 1, "table-header", 44);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const column_r20 = ctx.$implicit;
    const colIndex_r21 = ctx.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵstyleProp("left", ctx_r0.styleService.pinnedWidth(column_r20.pinned, colIndex_r21));
    ɵɵclassProp("pinned-left", column_r20.pinned);
    ɵɵproperty("ngClass", column_r20.cssClass && column_r20.cssClass.includeHeader ? column_r20.cssClass.name : "");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.getColumnDefinition(column_r20));
  }
}
function TableTHeadComponent_th_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "th");
  }
}
function TableTHeadComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "tr");
    ɵɵelementContainer(2, 33);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.filtersTemplate);
  }
}
var _c7 = ["paginationComponent"];
var _c8 = ["contextMenu"];
var _c9 = ["table"];
var _c10 = (a0, a1) => ({
  position: "absolute",
  top: a0,
  left: a1
});
var _c11 = (a0, a1, a2, a3) => ({
  itemsPerPage: a0,
  currentPage: a1,
  totalItems: a2,
  id: a3
});
var _c12 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
var _c13 = (a0, a1, a2) => ({
  $implicit: a0,
  rowIndex: a1,
  column: a2
});
var _c14 = (a0, a1, a2, a3, a4) => ({
  total: a0,
  key: a1,
  value: a2,
  group: a3,
  index: a4
});
var _c15 = (a0, a1, a2) => ({
  total: a0,
  limit: a1,
  page: a2
});
function BaseComponent_tbody_4_ng_container_1_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 11);
    ɵɵelementContainer(1, 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngStyle", ɵɵpureFunction2(3, _c10, ctx_r1.rowContextMenuPosition.top, ctx_r1.rowContextMenuPosition.left));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.rowContextMenu)("ngTemplateOutletContext", ɵɵpureFunction1(6, _c6, ctx_r1.rowContextMenuPosition.value));
  }
}
function BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_td_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 16);
    ɵɵlistener("click", function BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_td_4_span_1_Template_span_click_0_listener() {
      ɵɵrestoreView(_r5);
      const row_r4 = ɵɵnextContext(2).$implicit;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.collapseRow(ctx_r1.data.indexOf(row_r4)));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const row_r4 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngClass", ctx_r1.isRowCollapsed(ctx_r1.data.indexOf(row_r4)) ? "ngx-icon-arrow-down" : "ngx-icon-arrow-right");
  }
}
function BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_td_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵtemplate(1, BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_td_4_span_1_Template, 1, 1, "span", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.arrowDefinition);
  }
}
function BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_tr_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr")(1, "td");
    ɵɵelementContainer(2, 12);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵattribute("colspan", ctx_r1.columns.length + 1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.detailsTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(3, _c12, row_r4, ctx_r1.data.indexOf(row_r4)));
  }
}
function BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "tr", 14, 2);
    ɵɵlistener("click", function BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_Template_tr_click_1_listener($event) {
      const row_r4 = ɵɵrestoreView(_r3).$implicit;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onClick($event, row_r4, "", null, ctx_r1.data.indexOf(row_r4)));
    })("contextmenu", function BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_Template_tr_contextmenu_1_listener($event) {
      const row_r4 = ɵɵrestoreView(_r3).$implicit;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onRowContextMenu($event, row_r4, "", null, ctx_r1.data.indexOf(row_r4)));
    })("dblclick", function BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_Template_tr_dblclick_1_listener($event) {
      const row_r4 = ɵɵrestoreView(_r3).$implicit;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onDoubleClick($event, row_r4, "", null, ctx_r1.data.indexOf(row_r4)));
    });
    ɵɵelementContainer(3, 12);
    ɵɵtemplate(4, BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_td_4_Template, 2, 1, "td", 6);
    ɵɵelementEnd();
    ɵɵtemplate(5, BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_tr_5_Template, 3, 6, "tr", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵclassProp("ngx-table__table-row--selected", ctx_r1.data.indexOf(row_r4) === ctx_r1.selectedRow && !ctx_r1.config.selectCell);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.rowTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(6, _c12, row_r4, ctx_r1.data.indexOf(row_r4)));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.config.detailsTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.config.detailsTemplate && ctx_r1.selectedDetailsTemplateRowId.has(ctx_r1.data.indexOf(row_r4)) || ctx_r1.config.collapseAllRows);
  }
}
function BaseComponent_tbody_4_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, BaseComponent_tbody_4_ng_container_1_ng_container_2_ng_container_1_Template, 6, 9, "ng-container", 13);
    ɵɵpipe(2, "sort");
    ɵɵpipe(3, "search");
    ɵɵpipe(4, "global");
    ɵɵpipe(5, "paginate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ɵɵpipeBind2(5, 12, ɵɵpipeBind3(4, 8, ɵɵpipeBind3(3, 4, ɵɵpipeBind2(2, 1, ctx_r1.data, ctx_r1.sortBy), ctx_r1.term, ctx_r1.filteredCountSubject), ctx_r1.globalSearchTerm, ctx_r1.filteredCountSubject), ɵɵpureFunction4(15, _c11, ctx_r1.limit, ctx_r1.page, ctx_r1.count, ctx_r1.id)));
  }
}
function BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_td_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 16);
    ɵɵlistener("click", function BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_td_4_span_1_Template_span_click_0_listener() {
      ɵɵrestoreView(_r12);
      const rowIndex_r9 = ɵɵnextContext(2).index;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.collapseRow(rowIndex_r9));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const rowIndex_r9 = ɵɵnextContext(2).index;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngClass", ctx_r1.isRowCollapsed(rowIndex_r9) ? "ngx-icon-arrow-down" : "ngx-icon-arrow-right");
  }
}
function BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_td_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵtemplate(1, BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_td_4_span_1_Template, 1, 1, "span", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.arrowDefinition);
  }
}
function BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_tr_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr")(1, "td");
    ɵɵelementContainer(2, 12);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r12 = ɵɵnextContext();
    const row_r8 = ctx_r12.$implicit;
    const rowIndex_r9 = ctx_r12.index;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵattribute("colspan", ctx_r1.columns.length + 1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.detailsTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(3, _c12, row_r8, rowIndex_r9));
  }
}
function BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "tr", 14, 2);
    ɵɵlistener("click", function BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_Template_tr_click_1_listener($event) {
      const ctx_r6 = ɵɵrestoreView(_r6);
      const row_r8 = ctx_r6.$implicit;
      const rowIndex_r9 = ctx_r6.index;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onClick($event, row_r8, "", null, rowIndex_r9));
    })("contextmenu", function BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_Template_tr_contextmenu_1_listener($event) {
      const ctx_r9 = ɵɵrestoreView(_r6);
      const row_r8 = ctx_r9.$implicit;
      const rowIndex_r9 = ctx_r9.index;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onRowContextMenu($event, row_r8, "", null, rowIndex_r9));
    })("dblclick", function BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_Template_tr_dblclick_1_listener($event) {
      const ctx_r10 = ɵɵrestoreView(_r6);
      const row_r8 = ctx_r10.$implicit;
      const rowIndex_r9 = ctx_r10.index;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onDoubleClick($event, row_r8, "", null, rowIndex_r9));
    });
    ɵɵelementContainer(3, 12);
    ɵɵtemplate(4, BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_td_4_Template, 2, 1, "td", 6);
    ɵɵelementEnd();
    ɵɵtemplate(5, BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_tr_5_Template, 3, 6, "tr", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    const rowIndex_r9 = ctx.index;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵclassProp("ngx-table__table-row--selected", rowIndex_r9 === ctx_r1.selectedRow && !ctx_r1.config.selectCell);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.rowTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(6, _c12, row_r8, rowIndex_r9));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.config.detailsTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.config.detailsTemplate && ctx_r1.selectedDetailsTemplateRowId.has(rowIndex_r9) || ctx_r1.config.collapseAllRows);
  }
}
function BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 17);
    ɵɵtemplate(1, BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_ng_container_1_Template, 6, 9, "ng-container", 18);
    ɵɵpipe(2, "sort");
    ɵɵpipe(3, "search");
    ɵɵpipe(4, "global");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("cdkVirtualForOf", ɵɵpipeBind3(4, 8, ɵɵpipeBind3(3, 4, ɵɵpipeBind2(2, 1, ctx_r1.data, ctx_r1.sortBy), ctx_r1.term, ctx_r1.filteredCountSubject), ctx_r1.globalSearchTerm, ctx_r1.filteredCountSubject));
  }
}
function BaseComponent_tbody_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, BaseComponent_tbody_4_ng_container_1_ul_1_Template, 2, 8, "ul", 9)(2, BaseComponent_tbody_4_ng_container_1_ng_container_2_Template, 6, 20, "ng-container", 6)(3, BaseComponent_tbody_4_ng_container_1_cdk_virtual_scroll_viewport_3_Template, 5, 12, "cdk-virtual-scroll-viewport", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.rowContextMenuPosition.top);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.config.infiniteScroll);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.config.infiniteScroll);
  }
}
function BaseComponent_tbody_4_ng_container_2_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 11);
    ɵɵelementContainer(1, 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngStyle", ɵɵpureFunction2(3, _c10, ctx_r1.rowContextMenuPosition.top, ctx_r1.rowContextMenuPosition.left));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.rowContextMenu)("ngTemplateOutletContext", ɵɵpureFunction1(6, _c6, ctx_r1.rowContextMenuPosition.value));
  }
}
function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td")(1, "label", 19)(2, "input", 20);
    ɵɵlistener("change", function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_td_2_Template_input_change_2_listener($event) {
      ɵɵrestoreView(_r14);
      const row_r15 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onCheckboxSelect($event, row_r15, ctx_r1.data.indexOf(row_r15)));
    });
    ɵɵelementEnd();
    ɵɵelement(3, "em", 21);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const row_r15 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance(2);
    ɵɵpropertyInterpolate1("id", "checkbox-", ctx_r1.data.indexOf(row_r15), "");
    ɵɵproperty("checked", ctx_r1.isSelected || ctx_r1.selectedCheckboxes.has(ctx_r1.data.indexOf(row_r15)));
  }
}
function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_td_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td")(1, "label")(2, "input", 22);
    ɵɵlistener("change", function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_td_3_Template_input_change_2_listener($event) {
      ɵɵrestoreView(_r16);
      const row_r15 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onRadioSelect($event, row_r15, ctx_r1.data.indexOf(row_r15)));
    });
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const row_r15 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance(2);
    ɵɵpropertyInterpolate1("id", "radio-", ctx_r1.data.indexOf(row_r15), "");
  }
}
function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_ng_container_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "render");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r19 = ɵɵnextContext().$implicit;
    const row_r15 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind2(2, 1, row_r15, column_r19.key));
  }
}
function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_ng_container_4_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 12);
  }
  if (rf & 2) {
    const column_r19 = ɵɵnextContext().$implicit;
    const row_r15 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngTemplateOutlet", column_r19.cellTemplate)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c13, row_r15, ctx_r1.data.indexOf(row_r15), column_r19));
  }
}
function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "td", 23, 2);
    ɵɵlistener("click", function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_ng_container_4_Template_td_click_1_listener($event) {
      const ctx_r17 = ɵɵrestoreView(_r17);
      const column_r19 = ctx_r17.$implicit;
      const colIndex_r20 = ctx_r17.index;
      const row_r15 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onClick($event, row_r15, column_r19.key, colIndex_r20, ctx_r1.data.indexOf(row_r15)));
    })("contextmenu", function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_ng_container_4_Template_td_contextmenu_1_listener($event) {
      const ctx_r20 = ɵɵrestoreView(_r17);
      const column_r19 = ctx_r20.$implicit;
      const colIndex_r20 = ctx_r20.index;
      const row_r15 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onRowContextMenu($event, row_r15, column_r19.key, colIndex_r20, ctx_r1.data.indexOf(row_r15)));
    })("dblclick", function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_ng_container_4_Template_td_dblclick_1_listener($event) {
      const ctx_r21 = ɵɵrestoreView(_r17);
      const column_r19 = ctx_r21.$implicit;
      const colIndex_r20 = ctx_r21.index;
      const row_r15 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onDoubleClick($event, row_r15, column_r19.key, colIndex_r20, ctx_r1.data.indexOf(row_r15)));
    });
    ɵɵtemplate(3, BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_ng_container_4_div_3_Template, 3, 4, "div", 6)(4, BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_ng_container_4_ng_container_4_Template, 1, 6, "ng-container", 24);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const column_r19 = ctx.$implicit;
    const colIndex_r20 = ctx.index;
    const row_r15 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵstyleProp("left", ctx_r1.styleService.pinnedWidth(column_r19.pinned, colIndex_r20));
    ɵɵclassProp("pinned-left", column_r19.pinned)("ngx-table__table-col--selected", colIndex_r20 === ctx_r1.selectedCol && !ctx_r1.config.selectCell)("ngx-table__table-cell--selected", colIndex_r20 === ctx_r1.selectedCol && ctx_r1.data.indexOf(row_r15) === ctx_r1.selectedRow && !ctx_r1.config.selectCol && !ctx_r1.config.selectRow);
    ɵɵproperty("ngClass", column_r19.cssClass ? column_r19.cssClass.name : "");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !column_r19.cellTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", column_r19.cellTemplate);
  }
}
function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_td_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 16);
    ɵɵlistener("click", function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_td_5_span_1_Template_span_click_0_listener() {
      ɵɵrestoreView(_r23);
      const row_r15 = ɵɵnextContext(2).$implicit;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.collapseRow(ctx_r1.data.indexOf(row_r15)));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const row_r15 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngClass", ctx_r1.isRowCollapsed(ctx_r1.data.indexOf(row_r15)) ? "ngx-icon-arrow-down" : "ngx-icon-arrow-right");
  }
}
function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_td_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵtemplate(1, BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_td_5_span_1_Template, 1, 1, "span", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.arrowDefinition);
  }
}
function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_tr_6_td_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "td");
  }
}
function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵtemplate(1, BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_tr_6_td_1_Template, 1, 0, "td", 6);
    ɵɵelementStart(2, "td");
    ɵɵelementContainer(3, 12);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const row_r15 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.config.checkboxes || ctx_r1.config.radio);
    ɵɵadvance();
    ɵɵattribute("colspan", ctx_r1.columns.length + 1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.detailsTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(4, _c12, row_r15, ctx_r1.data.indexOf(row_r15)));
  }
}
function BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "tr");
    ɵɵtemplate(2, BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_td_2_Template, 4, 3, "td", 6)(3, BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_td_3_Template, 3, 2, "td", 6)(4, BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_ng_container_4_Template, 5, 11, "ng-container", 13)(5, BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_td_5_Template, 2, 1, "td", 6);
    ɵɵelementEnd();
    ɵɵtemplate(6, BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_tr_6_Template, 4, 7, "tr", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const row_r15 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵclassProp("ngx-table__table-row--selected", ctx_r1.data.indexOf(row_r15) === ctx_r1.selectedRow && !ctx_r1.config.selectCell);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.config.checkboxes);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.config.radio);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.columns);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.config.additionalActions || ctx_r1.config.detailsTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.config.detailsTemplate && ctx_r1.selectedDetailsTemplateRowId.has(ctx_r1.data.indexOf(row_r15)) || ctx_r1.config.collapseAllRows);
  }
}
function BaseComponent_tbody_4_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, BaseComponent_tbody_4_ng_container_2_ng_container_2_ng_container_1_Template, 7, 7, "ng-container", 13);
    ɵɵpipe(2, "sort");
    ɵɵpipe(3, "search");
    ɵɵpipe(4, "global");
    ɵɵpipe(5, "paginate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ɵɵpipeBind2(5, 12, ɵɵpipeBind3(4, 8, ɵɵpipeBind3(3, 4, ɵɵpipeBind2(2, 1, ctx_r1.data, ctx_r1.sortBy), ctx_r1.term, ctx_r1.filteredCountSubject), ctx_r1.globalSearchTerm, ctx_r1.filteredCountSubject), ɵɵpureFunction4(15, _c11, ctx_r1.limit, ctx_r1.page, ctx_r1.count, ctx_r1.id)));
  }
}
function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 26)(1, "label", 19)(2, "input", 20);
    ɵɵlistener("change", function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_td_2_Template_input_change_2_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r24 = ɵɵnextContext();
      const row_r26 = ctx_r24.$implicit;
      const rowIndex_r27 = ctx_r24.index;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onCheckboxSelect($event, row_r26, rowIndex_r27));
    });
    ɵɵelementEnd();
    ɵɵelement(3, "em", 21);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const rowIndex_r27 = ɵɵnextContext().index;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance(2);
    ɵɵpropertyInterpolate1("id", "checkbox-infinite-scroll-", rowIndex_r27, "");
    ɵɵproperty("checked", ctx_r1.isSelected || ctx_r1.selectedCheckboxes.has(rowIndex_r27));
  }
}
function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_td_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 26)(1, "label")(2, "input", 22);
    ɵɵlistener("change", function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_td_3_Template_input_change_2_listener($event) {
      ɵɵrestoreView(_r28);
      const ctx_r24 = ɵɵnextContext();
      const row_r26 = ctx_r24.$implicit;
      const rowIndex_r27 = ctx_r24.index;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onRadioSelect($event, row_r26, rowIndex_r27));
    });
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const rowIndex_r27 = ɵɵnextContext().index;
    ɵɵadvance(2);
    ɵɵpropertyInterpolate1("id", "radio-infinite-scroll-", rowIndex_r27, "");
  }
}
function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_ng_container_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "render");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r31 = ɵɵnextContext().$implicit;
    const row_r26 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind2(2, 1, row_r26, column_r31.key));
  }
}
function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_ng_container_4_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 12);
  }
  if (rf & 2) {
    const column_r31 = ɵɵnextContext().$implicit;
    const ctx_r24 = ɵɵnextContext();
    const row_r26 = ctx_r24.$implicit;
    const rowIndex_r27 = ctx_r24.index;
    ɵɵproperty("ngTemplateOutlet", column_r31.cellTemplate)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c13, row_r26, rowIndex_r27, column_r31));
  }
}
function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "td", 23, 2);
    ɵɵlistener("click", function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_ng_container_4_Template_td_click_1_listener($event) {
      const ctx_r29 = ɵɵrestoreView(_r29);
      const column_r31 = ctx_r29.$implicit;
      const colIndex_r32 = ctx_r29.index;
      const ctx_r24 = ɵɵnextContext();
      const row_r26 = ctx_r24.$implicit;
      const rowIndex_r27 = ctx_r24.index;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onClick($event, row_r26, column_r31.key, colIndex_r32, rowIndex_r27));
    })("contextmenu", function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_ng_container_4_Template_td_contextmenu_1_listener($event) {
      const ctx_r32 = ɵɵrestoreView(_r29);
      const column_r31 = ctx_r32.$implicit;
      const colIndex_r32 = ctx_r32.index;
      const ctx_r24 = ɵɵnextContext();
      const row_r26 = ctx_r24.$implicit;
      const rowIndex_r27 = ctx_r24.index;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onRowContextMenu($event, row_r26, column_r31.key, colIndex_r32, rowIndex_r27));
    })("dblclick", function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_ng_container_4_Template_td_dblclick_1_listener($event) {
      const ctx_r33 = ɵɵrestoreView(_r29);
      const column_r31 = ctx_r33.$implicit;
      const colIndex_r32 = ctx_r33.index;
      const ctx_r24 = ɵɵnextContext();
      const row_r26 = ctx_r24.$implicit;
      const rowIndex_r27 = ctx_r24.index;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onDoubleClick($event, row_r26, column_r31.key, colIndex_r32, rowIndex_r27));
    });
    ɵɵtemplate(3, BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_ng_container_4_div_3_Template, 3, 4, "div", 6)(4, BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_ng_container_4_ng_container_4_Template, 1, 6, "ng-container", 24);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const column_r31 = ctx.$implicit;
    const colIndex_r32 = ctx.index;
    const rowIndex_r27 = ɵɵnextContext().index;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵstyleProp("left", ctx_r1.styleService.pinnedWidth(column_r31.pinned, colIndex_r32));
    ɵɵclassProp("pinned-left", column_r31.pinned)("ngx-table__table-col--selected", colIndex_r32 === ctx_r1.selectedCol && !ctx_r1.config.selectCell)("ngx-table__table-cell--selected", colIndex_r32 === ctx_r1.selectedCol && rowIndex_r27 === ctx_r1.selectedRow && !ctx_r1.config.selectCol && !ctx_r1.config.selectRow);
    ɵɵproperty("ngClass", column_r31.cssClass ? column_r31.cssClass.name : "");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !column_r31.cellTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", column_r31.cellTemplate);
  }
}
function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_td_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 16);
    ɵɵlistener("click", function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_td_5_span_1_Template_span_click_0_listener() {
      ɵɵrestoreView(_r35);
      const rowIndex_r27 = ɵɵnextContext(2).index;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.collapseRow(rowIndex_r27));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const rowIndex_r27 = ɵɵnextContext(2).index;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngClass", ctx_r1.isRowCollapsed(rowIndex_r27) ? "ngx-icon-arrow-down" : "ngx-icon-arrow-right");
  }
}
function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_td_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵtemplate(1, BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_td_5_span_1_Template, 1, 1, "span", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.arrowDefinition);
  }
}
function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_tr_6_td_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "td");
  }
}
function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵtemplate(1, BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_tr_6_td_1_Template, 1, 0, "td", 6);
    ɵɵelementStart(2, "td");
    ɵɵelementContainer(3, 12);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r24 = ɵɵnextContext();
    const row_r26 = ctx_r24.$implicit;
    const rowIndex_r27 = ctx_r24.index;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.config.checkboxes || ctx_r1.config.radio);
    ɵɵadvance();
    ɵɵattribute("colspan", ctx_r1.columns.length + 1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.detailsTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(4, _c12, row_r26, rowIndex_r27));
  }
}
function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "tr");
    ɵɵtemplate(2, BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_td_2_Template, 4, 3, "td", 25)(3, BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_td_3_Template, 3, 2, "td", 25)(4, BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_ng_container_4_Template, 5, 11, "ng-container", 13)(5, BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_td_5_Template, 2, 1, "td", 6);
    ɵɵelementEnd();
    ɵɵtemplate(6, BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_tr_6_Template, 4, 7, "tr", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const rowIndex_r27 = ctx.index;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵclassProp("ngx-table__table-row--selected", rowIndex_r27 === ctx_r1.selectedRow && !ctx_r1.config.selectCell);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.config.checkboxes);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.config.radio);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.columns);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.config.additionalActions || ctx_r1.config.detailsTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.config.detailsTemplate && ctx_r1.selectedDetailsTemplateRowId.has(rowIndex_r27) || ctx_r1.config.collapseAllRows);
  }
}
function BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 17);
    ɵɵtemplate(1, BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_ng_container_1_Template, 7, 7, "ng-container", 18);
    ɵɵpipe(2, "sort");
    ɵɵpipe(3, "search");
    ɵɵpipe(4, "global");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("cdkVirtualForOf", ɵɵpipeBind3(4, 8, ɵɵpipeBind3(3, 4, ɵɵpipeBind2(2, 1, ctx_r1.data, ctx_r1.sortBy), ctx_r1.term, ctx_r1.filteredCountSubject), ctx_r1.globalSearchTerm, ctx_r1.filteredCountSubject));
  }
}
function BaseComponent_tbody_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, BaseComponent_tbody_4_ng_container_2_ul_1_Template, 2, 8, "ul", 9)(2, BaseComponent_tbody_4_ng_container_2_ng_container_2_Template, 6, 20, "ng-container", 6)(3, BaseComponent_tbody_4_ng_container_2_cdk_virtual_scroll_viewport_3_Template, 5, 12, "cdk-virtual-scroll-viewport", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.rowContextMenuPosition.top);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.config.infiniteScroll);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.config.infiniteScroll);
  }
}
function BaseComponent_tbody_4_ng_container_3_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "td")(2, "div");
    ɵɵtext(3);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const group_r36 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵattribute("colspan", ctx_r1.columns.length);
    ɵɵadvance(2);
    ɵɵtextInterpolate2("", group_r36[0][ctx_r1.groupRowsBy], " (", group_r36.length, ")");
  }
}
function BaseComponent_tbody_4_ng_container_3_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 12);
  }
  if (rf & 2) {
    const ctx_r36 = ɵɵnextContext();
    const group_r36 = ctx_r36.$implicit;
    const rowIndex_r38 = ctx_r36.index;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.groupRowsHeaderTemplate)("ngTemplateOutletContext", ɵɵpureFunction5(2, _c14, group_r36.length, ctx_r1.groupRowsBy, group_r36[0] ? group_r36[0][ctx_r1.groupRowsBy] : "", group_r36, rowIndex_r38));
  }
}
function BaseComponent_tbody_4_ng_container_3_ng_container_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 16);
    ɵɵlistener("click", function BaseComponent_tbody_4_ng_container_3_ng_container_1_span_5_Template_span_click_0_listener() {
      ɵɵrestoreView(_r39);
      const rowIndex_r38 = ɵɵnextContext().index;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.collapseRow(rowIndex_r38));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const rowIndex_r38 = ɵɵnextContext().index;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ctx_r1.isRowCollapsed(rowIndex_r38) ? "ngx-icon-arrow-down" : "ngx-icon-arrow-right");
  }
}
function BaseComponent_tbody_4_ng_container_3_ng_container_1_ng_container_6_tr_1_td_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵtext(1);
    ɵɵpipe(2, "render");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r40 = ctx.$implicit;
    const row_r41 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 1, row_r41, column_r40.key), " ");
  }
}
function BaseComponent_tbody_4_ng_container_3_ng_container_1_ng_container_6_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵtemplate(1, BaseComponent_tbody_4_ng_container_3_ng_container_1_ng_container_6_tr_1_td_1_Template, 3, 4, "td", 13);
    ɵɵelement(2, "td");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.columns);
  }
}
function BaseComponent_tbody_4_ng_container_3_ng_container_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, BaseComponent_tbody_4_ng_container_3_ng_container_1_ng_container_6_tr_1_Template, 3, 1, "tr", 13);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const group_r36 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("ngForOf", group_r36);
  }
}
function BaseComponent_tbody_4_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "tr");
    ɵɵtemplate(2, BaseComponent_tbody_4_ng_container_3_ng_container_1_ng_container_2_Template, 4, 3, "ng-container", 6)(3, BaseComponent_tbody_4_ng_container_3_ng_container_1_ng_container_3_Template, 1, 8, "ng-container", 24);
    ɵɵelementStart(4, "td");
    ɵɵtemplate(5, BaseComponent_tbody_4_ng_container_3_ng_container_1_span_5_Template, 1, 1, "span", 15);
    ɵɵelementEnd()();
    ɵɵtemplate(6, BaseComponent_tbody_4_ng_container_3_ng_container_1_ng_container_6_Template, 2, 1, "ng-container", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const rowIndex_r38 = ctx.index;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r1.groupRowsHeaderTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.groupRowsHeaderTemplate);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.arrowDefinition);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.selectedDetailsTemplateRowId.has(rowIndex_r38));
  }
}
function BaseComponent_tbody_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, BaseComponent_tbody_4_ng_container_3_ng_container_1_Template, 7, 4, "ng-container", 13);
    ɵɵpipe(2, "sort");
    ɵɵpipe(3, "search");
    ɵɵpipe(4, "global");
    ɵɵpipe(5, "paginate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ɵɵpipeBind2(5, 14, ɵɵpipeBind3(4, 10, ɵɵpipeBind4(3, 5, ɵɵpipeBind3(2, 1, ctx_r1.grouped, ctx_r1.sortBy, ctx_r1.config), ctx_r1.term, ctx_r1.filteredCountSubject, ctx_r1.config), ctx_r1.globalSearchTerm, ctx_r1.filteredCountSubject), ɵɵpureFunction4(17, _c11, ctx_r1.limit, ctx_r1.page, ctx_r1.count, ctx_r1.id)));
  }
}
function BaseComponent_tbody_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tbody");
    ɵɵtemplate(1, BaseComponent_tbody_4_ng_container_1_Template, 4, 3, "ng-container", 6)(2, BaseComponent_tbody_4_ng_container_2_Template, 4, 3, "ng-container", 6)(3, BaseComponent_tbody_4_ng_container_3_Template, 6, 22, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.rowTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.rowTemplate && !ctx_r1.config.groupRows);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.rowTemplate && ctx_r1.config.groupRows);
  }
}
function BaseComponent_tbody_5_ng_container_1_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td")(1, "label", 19)(2, "input", 20);
    ɵɵlistener("change", function BaseComponent_tbody_5_ng_container_1_ng_container_1_td_2_Template_input_change_2_listener($event) {
      ɵɵrestoreView(_r44);
      const row_r45 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onCheckboxSelect($event, row_r45, ctx_r1.data.indexOf(row_r45)));
    });
    ɵɵelementEnd();
    ɵɵelement(3, "em", 21);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const row_r45 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵpropertyInterpolate1("id", "checkbox-draggable-", ctx_r1.data.indexOf(row_r45), "");
    ɵɵproperty("checked", ctx_r1.isSelected || ctx_r1.selectedCheckboxes.has(ctx_r1.data.indexOf(row_r45)));
  }
}
function BaseComponent_tbody_5_ng_container_1_ng_container_1_td_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td")(1, "label")(2, "input", 22);
    ɵɵlistener("change", function BaseComponent_tbody_5_ng_container_1_ng_container_1_td_3_Template_input_change_2_listener($event) {
      ɵɵrestoreView(_r46);
      const row_r45 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onRadioSelect($event, row_r45, ctx_r1.data.indexOf(row_r45)));
    });
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const row_r45 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵpropertyInterpolate1("id", "radio-draggable-", ctx_r1.data.indexOf(row_r45), "");
  }
}
function BaseComponent_tbody_5_ng_container_1_ng_container_1_ng_container_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "render");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r49 = ɵɵnextContext().$implicit;
    const row_r45 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind2(2, 1, row_r45, column_r49.key));
  }
}
function BaseComponent_tbody_5_ng_container_1_ng_container_1_ng_container_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 12);
  }
  if (rf & 2) {
    const column_r49 = ɵɵnextContext().$implicit;
    const row_r45 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", column_r49.cellTemplate)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c13, row_r45, ctx_r1.data.indexOf(row_r45), column_r49));
  }
}
function BaseComponent_tbody_5_ng_container_1_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "td", 29);
    ɵɵlistener("click", function BaseComponent_tbody_5_ng_container_1_ng_container_1_ng_container_4_Template_td_click_1_listener($event) {
      const ctx_r47 = ɵɵrestoreView(_r47);
      const column_r49 = ctx_r47.$implicit;
      const colIndex_r50 = ctx_r47.index;
      const row_r45 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onClick($event, row_r45, column_r49.key, colIndex_r50, ctx_r1.data.indexOf(row_r45)));
    })("dblclick", function BaseComponent_tbody_5_ng_container_1_ng_container_1_ng_container_4_Template_td_dblclick_1_listener($event) {
      const ctx_r50 = ɵɵrestoreView(_r47);
      const column_r49 = ctx_r50.$implicit;
      const colIndex_r50 = ctx_r50.index;
      const row_r45 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onDoubleClick($event, row_r45, column_r49.key, colIndex_r50, ctx_r1.data.indexOf(row_r45)));
    });
    ɵɵtemplate(2, BaseComponent_tbody_5_ng_container_1_ng_container_1_ng_container_4_div_2_Template, 3, 4, "div", 6)(3, BaseComponent_tbody_5_ng_container_1_ng_container_1_ng_container_4_ng_container_3_Template, 1, 6, "ng-container", 24);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const column_r49 = ctx.$implicit;
    const colIndex_r50 = ctx.index;
    const row_r45 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵclassProp("ngx-table__table-col--selected", colIndex_r50 === ctx_r1.selectedCol && !ctx_r1.config.selectCell)("ngx-table__table-cell--selected", colIndex_r50 === ctx_r1.selectedCol && ctx_r1.data.indexOf(row_r45) === ctx_r1.selectedRow && !ctx_r1.config.selectCol && !ctx_r1.config.selectRow);
    ɵɵadvance();
    ɵɵproperty("ngIf", !column_r49.cellTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", column_r49.cellTemplate);
  }
}
function BaseComponent_tbody_5_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "tr", 28);
    ɵɵlistener("cdkDragStarted", function BaseComponent_tbody_5_ng_container_1_ng_container_1_Template_tr_cdkDragStarted_1_listener($event) {
      ɵɵrestoreView(_r43);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onDragStart($event));
    });
    ɵɵtemplate(2, BaseComponent_tbody_5_ng_container_1_ng_container_1_td_2_Template, 4, 3, "td", 6)(3, BaseComponent_tbody_5_ng_container_1_ng_container_1_td_3_Template, 3, 2, "td", 6)(4, BaseComponent_tbody_5_ng_container_1_ng_container_1_ng_container_4_Template, 4, 6, "ng-container", 13);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("cdkDragStartDelay", ctx_r1.config.reorderDelay || 0);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.config.checkboxes);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.config.radio);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.columns);
  }
}
function BaseComponent_tbody_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, BaseComponent_tbody_5_ng_container_1_ng_container_1_Template, 5, 4, "ng-container", 13);
    ɵɵpipe(2, "sort");
    ɵɵpipe(3, "search");
    ɵɵpipe(4, "global");
    ɵɵpipe(5, "paginate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ɵɵpipeBind2(5, 12, ɵɵpipeBind3(4, 8, ɵɵpipeBind3(3, 4, ɵɵpipeBind2(2, 1, ctx_r1.data, ctx_r1.sortBy), ctx_r1.term, ctx_r1.filteredCountSubject), ctx_r1.globalSearchTerm, ctx_r1.filteredCountSubject), ɵɵpureFunction4(15, _c11, ctx_r1.limit, ctx_r1.page, ctx_r1.count, ctx_r1.id)));
  }
}
function BaseComponent_tbody_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tbody", 27);
    ɵɵlistener("cdkDropListDropped", function BaseComponent_tbody_5_Template_tbody_cdkDropListDropped_0_listener($event) {
      ɵɵrestoreView(_r42);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onDrop($event));
    });
    ɵɵtemplate(1, BaseComponent_tbody_5_ng_container_1_Template, 6, 20, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.rowTemplate && !ctx_r1.config.groupRows);
  }
}
function BaseComponent_tbody_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 32);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.noResultsTemplate);
  }
}
function BaseComponent_tbody_6_td_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td")(1, "div", 33);
    ɵɵtext(2, "No results");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("colspan", ctx_r1.columns && ctx_r1.columns.length + 1);
  }
}
function BaseComponent_tbody_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tbody")(1, "tr", 30);
    ɵɵtemplate(2, BaseComponent_tbody_6_ng_container_2_Template, 1, 1, "ng-container", 31)(3, BaseComponent_tbody_6_td_3_Template, 3, 1, "td", 6);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.noResultsTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.noResultsTemplate);
  }
}
function BaseComponent_tbody_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 32);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.loadingTemplate);
  }
}
function BaseComponent_tbody_7_td_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td")(1, "div", 35);
    ɵɵelement(2, "div", 36);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("colspan", ctx_r1.columns && ctx_r1.columns.length + 1);
    ɵɵadvance();
    ɵɵstyleProp("height", ctx_r1.loadingHeight, "px");
  }
}
function BaseComponent_tbody_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tbody")(1, "tr", 34);
    ɵɵtemplate(2, BaseComponent_tbody_7_ng_container_2_Template, 1, 1, "ng-container", 31)(3, BaseComponent_tbody_7_td_3_Template, 3, 3, "td", 6);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.loadingTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.loadingTemplate);
  }
}
function BaseComponent_tfoot_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tfoot")(1, "tr");
    ɵɵelementContainer(2, 12);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.summaryTemplate)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c15, ctx_r1.data.length, ctx_r1.limit, ctx_r1.page));
  }
}
var STYLE;
(function(STYLE2) {
  STYLE2["TINY"] = "tiny";
  STYLE2["BIG"] = "big";
  STYLE2["NORMAL"] = "normal";
})(STYLE || (STYLE = {}));
var THEME;
(function(THEME2) {
  THEME2["LIGHT"] = "light";
  THEME2["DARK"] = "dark";
})(THEME || (THEME = {}));
var Event;
(function(Event2) {
  Event2["onPagination"] = "onPagination";
  Event2["onOrder"] = "onOrder";
  Event2["onGlobalSearch"] = "onGlobalSearch";
  Event2["onSearch"] = "onSearch";
  Event2["onClick"] = "onClick";
  Event2["onDoubleClick"] = "onDoubleClick";
  Event2["onCheckboxSelect"] = "onCheckboxSelect";
  Event2["onRadioSelect"] = "onRadioSelect";
  Event2["onCheckboxToggle"] = "onCheckboxToggle";
  Event2["onSelectAll"] = "onSelectAll";
  Event2["onInfiniteScrollEnd"] = "onInfiniteScrollEnd";
  Event2["onColumnResizeMouseDown"] = "onColumnResizeMouseDown";
  Event2["onColumnResizeMouseUp"] = "onColumnResizeMouseUp";
  Event2["onRowDrop"] = "onRowDrop";
  Event2["onReorderStart"] = "onReorderStart";
  Event2["onRowCollapsedShow"] = "onRowCollapsedShow";
  Event2["onRowCollapsedHide"] = "onRowCollapsedHide";
  Event2["onRowContextMenu"] = "onRowContextMenu";
})(Event || (Event = {}));
var API;
(function(API2) {
  API2["rowContextMenuClicked"] = "rowContextMenuClicked";
  API2["setInputValue"] = "setInputValue";
  API2["toggleRowIndex"] = "toggleRowIndex";
  API2["toggleCheckbox"] = "toggleCheckbox";
  API2["onGlobalSearch"] = "onGlobalSearch";
  API2["setPaginationCurrentPage"] = "setPaginationCurrentPage";
  API2["getPaginationCurrentPage"] = "getPaginationCurrentPage";
  API2["getPaginationTotalItems"] = "getPaginationTotalItems";
  API2["getNumberOfRowsPerPage"] = "getNumberOfRowsPerPage";
  API2["getPaginationLastPage"] = "getPaginationLastPage";
  API2["setPaginationRange"] = "setPaginationRange";
  API2["setPaginationPreviousLabel"] = "setPaginationPreviousLabel";
  API2["setPaginationNextLabel"] = "setPaginationNextLabel";
  API2["setPaginationDisplayLimit"] = "setPaginationDisplayLimit";
  API2["setTableClass"] = "setTableClass";
  API2["setRowClass"] = "setRowClass";
  API2["setCellClass"] = "setCellClass";
  API2["setRowStyle"] = "setRowStyle";
  API2["setCellStyle"] = "setCellStyle";
  API2["sortBy"] = "sortBy";
})(API || (API = {}));
var DefaultConfig = {
  searchEnabled: false,
  headerEnabled: true,
  orderEnabled: true,
  orderEventOnly: false,
  paginationEnabled: true,
  clickEvent: true,
  selectRow: false,
  selectCol: false,
  selectCell: false,
  rows: 10,
  additionalActions: false,
  serverPagination: false,
  isLoading: false,
  detailsTemplate: false,
  groupRows: false,
  paginationRangeEnabled: true,
  collapseAllRows: false,
  checkboxes: false,
  radio: false,
  resizeColumn: false,
  fixedColumnWidth: true,
  horizontalScroll: false,
  logger: false,
  showDetailsArrow: false,
  showContextMenu: false,
  persistState: false,
  paginationMaxSize: 5,
  threeWaySort: false,
  onDragOver: false,
  tableLayout: {
    style: STYLE.NORMAL,
    theme: THEME.LIGHT,
    borderless: false,
    hover: true,
    striped: false
  }
};
var DefaultConfigService = class _DefaultConfigService {
  static {
    this.config = DefaultConfig;
  }
  static {
    this.ɵfac = function DefaultConfigService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DefaultConfigService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DefaultConfigService,
      factory: _DefaultConfigService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultConfigService, [{
    type: Injectable
  }], null, null);
})();
var GroupRowsService = class _GroupRowsService {
  static doGroupRows(data, groupRowsBy) {
    const grouped = [];
    from(data).pipe(groupBy((row) => row[groupRowsBy]), mergeMap((group) => group.pipe(reduce((acc, curr) => [...acc, curr], [])))).subscribe((row) => grouped.push(row));
    return grouped;
  }
  static {
    this.ɵfac = function GroupRowsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GroupRowsService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _GroupRowsService,
      factory: _GroupRowsService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupRowsService, [{
    type: Injectable
  }], null, null);
})();
var StyleService = class _StyleService {
  setRowClass(val) {
    const selector = `#table > tbody > tr:nth-child(${val.row})`;
    const row = document.querySelector(selector);
    if (row) {
      row.classList.add(val.className);
    }
  }
  setCellClass(val) {
    const selector = `#table > tbody > tr:nth-child(${val.row}) > td:nth-child(${val.cell})`;
    const cell = document.querySelector(selector);
    if (cell) {
      cell.classList.add(val.className);
    }
  }
  setRowStyle(val) {
    const selector = `#table > tbody > tr:nth-child(${val.row})`;
    const row = document.querySelector(selector);
    if (row) {
      row.style[val.attr] = val.value;
    }
  }
  setCellStyle(val) {
    const selector = `#table > tbody > tr:nth-child(${val.row}) > td:nth-child(${val.cell})`;
    const cell = document.querySelector(selector);
    if (cell) {
      cell.style[val.attr] = val.value;
    }
  }
  pinnedWidth(pinned, column) {
    if (pinned) {
      return 150 * column + "px";
    }
  }
  static {
    this.ɵfac = function StyleService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StyleService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _StyleService,
      factory: _StyleService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StyleService, [{
    type: Injectable
  }], null, null);
})();
var PaginationComponent = class _PaginationComponent {
  constructor() {
    this.updateRange = new EventEmitter();
    this.ranges = [5, 10, 25, 50, 100];
    this.showRange = false;
    this.screenReaderPaginationLabel = "Pagination";
    this.screenReaderPageLabel = "page";
    this.screenReaderCurrentLabel = "You are on page";
    this.previousLabel = "";
    this.nextLabel = "";
    this.directionLinks = true;
  }
  onClick(targetElement) {
    if (this.paginationRange && !this.paginationRange.nativeElement.contains(targetElement)) {
      this.showRange = false;
    }
  }
  ngOnChanges(changes) {
    const {
      config
    } = changes;
    if (config && config.currentValue) {
      this.selectedLimit = this.config.rows;
    }
  }
  onPageChange(page) {
    this.updateRange.emit({
      page,
      limit: this.selectedLimit
    });
  }
  changeLimit(limit, callFromAPI) {
    if (!callFromAPI) {
      this.showRange = !this.showRange;
    }
    this.selectedLimit = limit;
    this.updateRange.emit({
      page: 1,
      limit
    });
  }
  static {
    this.ɵfac = function PaginationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaginationComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PaginationComponent,
      selectors: [["pagination"]],
      viewQuery: function PaginationComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 5);
          ɵɵviewQuery(_c1, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.paginationDirective = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.paginationRange = _t.first);
        }
      },
      hostBindings: function PaginationComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function PaginationComponent_click_HostBindingHandler($event) {
            return ctx.onClick($event.target);
          }, false, ɵɵresolveDocument);
        }
      },
      inputs: {
        pagination: "pagination",
        config: "config",
        id: "id"
      },
      outputs: {
        updateRange: "updateRange"
      },
      standalone: false,
      features: [ɵɵNgOnChangesFeature],
      decls: 11,
      vars: 17,
      consts: [["paginationDirective", "paginationApi"], ["paginationRange", ""], [1, "ngx-pagination-wrapper"], [1, "ngx-pagination-steps"], ["id", "pagination-controls", 3, "pageChange", "id", "maxSize"], ["role", "navigation", 1, "ngx-pagination"], ["class", "pagination-previous", 3, "disabled", 4, "ngIf"], [1, "small-screen"], [3, "current", "ellipsis", 4, "ngFor", "ngForOf"], ["class", "pagination-next", 3, "disabled", 4, "ngIf"], ["class", "ngx-pagination-range", 3, "ngx-table__table--dark-pagination-range", 4, "ngIf"], [1, "pagination-previous"], ["tabindex", "0", 3, "keyup.enter", "click", 4, "ngIf"], [4, "ngIf"], ["tabindex", "0", 3, "keyup.enter", "click"], [1, "show-for-sr"], [1, "pagination-next"], [1, "ngx-pagination-range"], ["id", "rowAmount", 1, "ngx-dropdown", "ngx-pagination-range-dropdown"], [1, "ngx-btn-group"], [1, "ngx-pagination-range-dropdown-button", 3, "click"], [1, "ngx-icon", "ngx-icon-arrow-down"], ["class", "ngx-menu", 4, "ngIf"], [1, "ngx-menu"], ["class", "ngx-pagination-range-dropdown-button-item", 3, "ngx-pagination-range--selected", "click", 4, "ngFor", "ngForOf"], [1, "ngx-pagination-range-dropdown-button-item", 3, "click"]],
      template: function PaginationComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "pagination-template", 4, 0);
          ɵɵlistener("pageChange", function PaginationComponent_Template_pagination_template_pageChange_2_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onPageChange($event));
          });
          ɵɵelementStart(4, "ul", 5);
          ɵɵtemplate(5, PaginationComponent_li_5_Template, 3, 4, "li", 6);
          ɵɵelementStart(6, "li", 7);
          ɵɵtext(7);
          ɵɵelementEnd();
          ɵɵtemplate(8, PaginationComponent_li_8_Template, 3, 6, "li", 8)(9, PaginationComponent_li_9_Template, 3, 4, "li", 9);
          ɵɵelementEnd()()();
          ɵɵtemplate(10, PaginationComponent_div_10_Template, 8, 4, "div", 10);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          const paginationDirective_r3 = ɵɵreference(3);
          ɵɵstyleProp("display", ctx.config.paginationEnabled ? "" : "none");
          ɵɵclassProp("ngx-table__table--dark-pagination-wrapper", ctx.config.tableLayout.theme === "dark");
          ɵɵadvance(2);
          ɵɵclassProp("ngx-table__table--dark-pagination", ctx.config.tableLayout.theme === "dark");
          ɵɵproperty("id", ctx.id)("maxSize", ctx.config.paginationMaxSize || 5);
          ɵɵadvance(2);
          ɵɵclassProp("responsive", true);
          ɵɵattribute("aria-label", ctx.screenReaderPaginationLabel);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.directionLinks);
          ɵɵadvance(2);
          ɵɵtextInterpolate2(" ", paginationDirective_r3.getCurrent(), " / ", paginationDirective_r3.getLastPage(), " ");
          ɵɵadvance();
          ɵɵproperty("ngForOf", paginationDirective_r3.pages);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.directionLinks);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.config.paginationRangeEnabled);
        }
      },
      dependencies: [NgForOf, NgIf, PaginationControlsDirective],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationComponent, [{
    type: Component,
    args: [{
      selector: "pagination",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div
  class="ngx-pagination-wrapper"
  [style.display]="config.paginationEnabled ? '' : 'none'"
  [class.ngx-table__table--dark-pagination-wrapper]="config.tableLayout.theme === 'dark'"
>
  <div class="ngx-pagination-steps">
    <pagination-template
      #paginationDirective="paginationApi"
      id="pagination-controls"
      [id]="id"
      [class.ngx-table__table--dark-pagination]="config.tableLayout.theme === 'dark'"
      [maxSize]="config.paginationMaxSize || 5"
      (pageChange)="onPageChange($event)"
    >
      <ul
        class="ngx-pagination"
        role="navigation"
        [attr.aria-label]="screenReaderPaginationLabel"
        [class.responsive]="true"
      >
        <li
          class="pagination-previous"
          [class.disabled]="paginationDirective.isFirstPage()"
          *ngIf="directionLinks"
        >
          <a
            tabindex="0"
            *ngIf="1 < paginationDirective.getCurrent()"
            (keyup.enter)="paginationDirective.previous()"
            (click)="paginationDirective.previous()"
            [attr.aria-label]="previousLabel + ' ' + screenReaderPageLabel"
          >
            {{ previousLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
          </a>
          <span *ngIf="paginationDirective.isFirstPage()">
            {{ previousLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
          </span>
        </li>
        <li class="small-screen">
          {{ paginationDirective.getCurrent() }} / {{ paginationDirective.getLastPage() }}
        </li>
        <li
          [class.current]="paginationDirective.getCurrent() === page.value"
          [class.ellipsis]="page.label === '...'"
          *ngFor="let page of paginationDirective.pages"
        >
          <a
            tabindex="0"
            (keyup.enter)="paginationDirective.setCurrent(page.value)"
            (click)="paginationDirective.setCurrent(page.value)"
            *ngIf="paginationDirective.getCurrent() !== page.value"
          >
            <span class="show-for-sr">{{ screenReaderPageLabel }} </span>
            <span>{{ page.label }}</span>
          </a>
          <ng-container *ngIf="paginationDirective.getCurrent() === page.value">
            <span class="show-for-sr">{{ screenReaderCurrentLabel }} </span>
            <span>{{ page.label }}</span>
          </ng-container>
        </li>
        <li
          class="pagination-next"
          [class.disabled]="paginationDirective.isLastPage()"
          *ngIf="directionLinks"
        >
          <a
            tabindex="0"
            *ngIf="!paginationDirective.isLastPage()"
            (keyup.enter)="paginationDirective.next()"
            (click)="paginationDirective.next()"
            [attr.aria-label]="nextLabel + ' ' + screenReaderPageLabel"
          >
            {{ nextLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
          </a>
          <span *ngIf="paginationDirective.isLastPage()">
            {{ nextLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
          </span>
        </li>
      </ul>
    </pagination-template>
  </div>
  <div
    class="ngx-pagination-range"
    #paginationRange
    [class.ngx-table__table--dark-pagination-range]="config.tableLayout.theme === 'dark'"
    *ngIf="config.paginationRangeEnabled"
  >
    <div class="ngx-dropdown ngx-pagination-range-dropdown" id="rowAmount">
      <div class="ngx-btn-group">
        <div class="ngx-pagination-range-dropdown-button" (click)="showRange = !showRange">
          {{selectedLimit}} <i class="ngx-icon ngx-icon-arrow-down"></i>
        </div>
        <ul class="ngx-menu" *ngIf="showRange">
          <li
            class="ngx-pagination-range-dropdown-button-item"
            [class.ngx-pagination-range--selected]="limit === selectedLimit"
            (click)="changeLimit(limit, false)"
            *ngFor="let limit of ranges"
          >
            <span>{{limit}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
`
    }]
  }], null, {
    paginationDirective: [{
      type: ViewChild,
      args: ["paginationDirective"]
    }],
    paginationRange: [{
      type: ViewChild,
      args: ["paginationRange"]
    }],
    pagination: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    updateRange: [{
      type: Output
    }],
    onClick: [{
      type: HostListener,
      args: ["document:click", ["$event.target"]]
    }]
  });
})();
var HeaderComponent = class _HeaderComponent {
  constructor() {
    this.update = new EventEmitter();
  }
  unifyKey(key) {
    return key.replace(".", "_");
  }
  onSearch(input) {
    this.update.emit([{
      value: input.value,
      key: this.column.key
    }]);
  }
  static {
    this.ɵfac = function HeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeaderComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _HeaderComponent,
      selectors: [["table-header"]],
      inputs: {
        column: "column"
      },
      outputs: {
        update: "update"
      },
      standalone: false,
      decls: 3,
      vars: 5,
      consts: [["input", ""], [3, "for"], ["type", "text", "aria-label", "Search", 1, "ngx-table__header-search", 3, "input", "id", "placeholder"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "label", 1)(1, "input", 2, 0);
          ɵɵlistener("input", function HeaderComponent_Template_input_input_1_listener() {
            ɵɵrestoreView(_r1);
            const input_r2 = ɵɵreference(2);
            return ɵɵresetView(ctx.onSearch(input_r2));
          });
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵpropertyInterpolate1("for", "search_", ctx.unifyKey(ctx.column.key), "");
          ɵɵadvance();
          ɵɵpropertyInterpolate1("id", "search_", ctx.unifyKey(ctx.column.key), "");
          ɵɵpropertyInterpolate("placeholder", ctx.column.placeholder ? ctx.column.placeholder : ctx.column.title);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{
      selector: "table-header",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<label for="search_{{ unifyKey(column.key) }}">\n  <input\n    type="text"\n    id="search_{{ unifyKey(column.key) }}"\n    aria-label="Search"\n    placeholder="{{ column.placeholder ? column.placeholder : column.title }}"\n    class="ngx-table__header-search"\n    #input\n    (input)="onSearch(input)"\n  />\n</label>\n'
    }]
  }], null, {
    column: [{
      type: Input
    }],
    update: [{
      type: Output
    }]
  });
})();
var TableTHeadComponent = class _TableTHeadComponent {
  onClick(targetElement) {
    if (this.additionalActionMenu && !this.additionalActionMenu.nativeElement.contains(targetElement)) {
      this.menuActive = false;
    }
    if (this.openedHeaderActionTemplate && // if no header have the clicked point
    !this.headerDropdown.toArray().some((ref) => ref.nativeElement.contains(targetElement))) {
      this.openedHeaderActionTemplate = null;
    }
  }
  constructor(styleService) {
    this.styleService = styleService;
    this.menuActive = false;
    this.openedHeaderActionTemplate = null;
    this.onSelectAllBinded = this.onSelectAll.bind(this);
    this.filter = new EventEmitter();
    this.order = new EventEmitter();
    this.selectAll = new EventEmitter();
    this.event = new EventEmitter();
  }
  getColumnDefinition(column) {
    return column.searchEnabled || typeof column.searchEnabled === "undefined";
  }
  orderBy(column) {
    this.order.emit(column);
  }
  isOrderEnabled(column) {
    const columnOrderEnabled = column.orderEnabled === void 0 ? true : !!column.orderEnabled;
    return this.config.orderEnabled && columnOrderEnabled;
  }
  columnDrop(event) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }
  onSearch($event) {
    this.filter.emit($event);
  }
  getColumnWidth(column) {
    if (column.width) {
      return column.width;
    }
    return this.config.fixedColumnWidth ? 100 / this.columns.length + "%" : null;
  }
  onSelectAll() {
    this.selectAll.emit();
  }
  onMouseDown(event, th) {
    if (!this.config.resizeColumn) {
      return;
    }
    this.th = th;
    this.startOffset = th.offsetWidth - event.pageX;
    this.event.emit({
      event: Event.onColumnResizeMouseDown,
      value: event
    });
  }
  onMouseMove(event) {
    if (!this.config.resizeColumn) {
      return;
    }
    if (this.th && this.th.style) {
      this.th.style.width = this.startOffset + event.pageX + "px";
      this.th.style.cursor = "col-resize";
      this.th.style["user-select"] = "none";
    }
  }
  onMouseUp(event) {
    if (!this.config.resizeColumn) {
      return;
    }
    this.event.emit({
      event: Event.onColumnResizeMouseUp,
      value: event
    });
    this.th.style.cursor = "default";
    this.th = void 0;
  }
  showHeaderActionTemplateMenu(column) {
    if (!column.headerActionTemplate) {
      console.error("Column [headerActionTemplate] property not defined");
    }
    if (this.openedHeaderActionTemplate === column.key) {
      this.openedHeaderActionTemplate = null;
      return;
    }
    this.openedHeaderActionTemplate = column.key;
  }
  showMenu() {
    if (!this.additionalActionsTemplate) {
      console.error("[additionalActionsTemplate] property not defined");
    }
    this.menuActive = !this.menuActive;
  }
  static {
    this.ɵfac = function TableTHeadComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TableTHeadComponent)(ɵɵdirectiveInject(StyleService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TableTHeadComponent,
      selectors: [["", "table-thead", ""]],
      viewQuery: function TableTHeadComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c2, 5);
          ɵɵviewQuery(_c3, 5);
          ɵɵviewQuery(_c4, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.th = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.additionalActionMenu = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerDropdown = _t);
        }
      },
      hostBindings: function TableTHeadComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function TableTHeadComponent_click_HostBindingHandler($event) {
            return ctx.onClick($event.target);
          }, false, ɵɵresolveDocument);
        }
      },
      inputs: {
        config: "config",
        columns: "columns",
        sortKey: "sortKey",
        sortState: "sortState",
        selectAllTemplate: "selectAllTemplate",
        filtersTemplate: "filtersTemplate",
        additionalActionsTemplate: "additionalActionsTemplate"
      },
      outputs: {
        filter: "filter",
        order: "order",
        selectAll: "selectAll",
        event: "event"
      },
      standalone: false,
      features: [ɵɵProvidersFeature([StyleService])],
      attrs: _c5,
      decls: 7,
      vars: 8,
      consts: [["th", ""], ["headerDropdown", ""], ["additionalActionMenu", ""], ["class", "ngx-table__header", 4, "ngIf"], ["class", "ngx-table__header ngx-table__header--draggable", "cdkDropList", "", "cdkDropListOrientation", "horizontal", 3, "cdkDropListDropped", 4, "ngIf"], [1, "ngx-table__search-header"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "ngx-table__header"], [3, "width", 4, "ngIf"], ["class", "ngx-table__header-cell-additional-actions", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], ["class", "ngx-form-checkbox", "for", "selectAllCheckboxes", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["for", "selectAllCheckboxes", 1, "ngx-form-checkbox"], ["type", "checkbox", "id", "selectAllCheckboxes", 3, "change"], ["id", "selectAllCheckbox", 1, "ngx-form-icon"], [1, "ngx-table__header-cell", 3, "mousedown", "mouseup", "mousemove", "ngClass"], [2, "display", "inline", 3, "click"], [1, "ngx-table__header-title"], ["class", "ngx-icon ngx-icon-pin", 4, "ngIf"], ["class", "ngx-icon ngx-icon-arrow-up", 4, "ngIf"], ["class", "ngx-icon ngx-icon-arrow-down", 4, "ngIf"], ["class", "ngx-dropdown", 4, "ngIf"], ["class", "ngx-table__column-resizer", 4, "ngIf"], [1, "ngx-icon", "ngx-icon-pin"], [1, "ngx-icon", "ngx-icon-arrow-up"], [1, "ngx-icon", "ngx-icon-arrow-down"], [1, "ngx-dropdown"], [1, "ngx-btn", "ngx-btn-link", 3, "click"], [1, "ngx-icon", "ngx-icon-more"], ["class", "ngx-menu ngx-table__table-menu", 4, "ngIf"], [1, "ngx-menu", "ngx-table__table-menu"], [3, "ngTemplateOutlet"], [1, "ngx-table__column-resizer"], [1, "ngx-table__header-cell-additional-actions"], [1, "ngx-icon", "ngx-icon-menu"], [3, "ngTemplateOutlet", 4, "ngIf"], ["cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "ngx-table__header", "ngx-table__header--draggable", 3, "cdkDropListDropped"], ["type", "checkbox", "id", "selectAllCheckboxesDrag", 3, "change"], ["id", "selectAllCheckboxDrag", 1, "ngx-form-icon"], ["cdkDragLockAxis", "x", "cdkDrag", "", 1, "ngx-table__header-cell", "ngx-table__header-cell--draggable", 3, "mousedown", "mouseup", "mousemove", "cdkDragStartDelay", "ngClass"], ["cdkDragHandle", "", 2, "display", "inline", 3, "click"], [3, "ngClass"], [3, "column", "update", 4, "ngIf"], [3, "update", "column"]],
      template: function TableTHeadComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TableTHeadComponent_tr_0_Template, 4, 3, "tr", 3)(1, TableTHeadComponent_tr_1_Template, 4, 3, "tr", 4);
          ɵɵelementStart(2, "tr", 5);
          ɵɵtemplate(3, TableTHeadComponent_th_3_Template, 1, 0, "th", 6)(4, TableTHeadComponent_ng_container_4_Template, 3, 6, "ng-container", 7)(5, TableTHeadComponent_th_5_Template, 1, 0, "th", 6);
          ɵɵelementEnd();
          ɵɵtemplate(6, TableTHeadComponent_ng_container_6_Template, 3, 1, "ng-container", 6);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.config.headerEnabled && !ctx.config.columnReorder);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.config.headerEnabled && ctx.config.columnReorder);
          ɵɵadvance();
          ɵɵstyleProp("display", ctx.config.searchEnabled && !ctx.filtersTemplate ? "table-row" : "none");
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.config.checkboxes || ctx.config.radio);
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.columns);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.config.additionalActions || ctx.config.detailsTemplate);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.filtersTemplate);
        }
      },
      dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, CdkDropList, CdkDrag, CdkDragHandle, HeaderComponent],
      styles: [".cdk-drag-preview[_ngcontent-%COMP%]{text-align:left;padding-top:9px;padding-left:4px;color:#50596c;border:1px solid #e7e9ed}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableTHeadComponent, [{
    type: Component,
    args: [{
      selector: "[table-thead]",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [StyleService],
      template: `<tr class="ngx-table__header" *ngIf="config.headerEnabled && !config.columnReorder">
  <th *ngIf="config.checkboxes || config.radio" [style.width]="'3%'">
    <ng-container
      *ngIf="selectAllTemplate && config.checkboxes"
      [ngTemplateOutlet]="selectAllTemplate"
      [ngTemplateOutletContext]="{ $implicit: onSelectAllBinded }"
    >
    </ng-container>
    <label
      class="ngx-form-checkbox"
      for="selectAllCheckboxes"
      *ngIf="!selectAllTemplate && config.checkboxes"
    >
      <input type="checkbox" id="selectAllCheckboxes" (change)="onSelectAll()" />
      <em class="ngx-form-icon" id="selectAllCheckbox"></em>
    </label>
  </th>
  <ng-container *ngFor="let column of columns; let colIndex = index; let last = last">
    <th
      class="ngx-table__header-cell"
      [class.pinned-left]="column.pinned"
      [ngClass]="column.cssClass && column.cssClass.includeHeader ? column.cssClass.name : ''"
      [style.left]="styleService.pinnedWidth(column.pinned, colIndex)"
      #th
      [style.width]="getColumnWidth(column)"
      (mousedown)="onMouseDown($event, th)"
      (mouseup)="onMouseUp($event)"
      (mousemove)="onMouseMove($event)"
    >
      <div
        (click)="orderBy(column)"
        style="display: inline"
        [class.pointer]="isOrderEnabled(column)"
      >
        <div class="ngx-table__header-title">
          {{ column.title }}<span>&nbsp;</span>
          <em class="ngx-icon ngx-icon-pin" *ngIf="column.pinned"></em>
          <div [style.display]="config.orderEnabled ? 'inline' : 'none'">
            <em
              *ngIf="sortKey === column.key && this.sortState.get(sortKey) === 'asc'"
              class="ngx-icon ngx-icon-arrow-up"
            >
            </em>
            <em
              *ngIf="sortKey === column.key && this.sortState.get(sortKey) === 'desc'"
              class="ngx-icon ngx-icon-arrow-down"
            >
            </em>
          </div>
        </div>
      </div>
      <div class="ngx-dropdown" *ngIf="!!column.headerActionTemplate" #headerDropdown>
        <a class="ngx-btn ngx-btn-link" (click)="showHeaderActionTemplateMenu(column)">
          <span class="ngx-icon ngx-icon-more"></span>
        </a>
        <div
          class="ngx-menu ngx-table__table-menu"
          *ngIf="column.key === openedHeaderActionTemplate"
        >
          <ng-container [ngTemplateOutlet]="column.headerActionTemplate"> </ng-container>
        </div>
      </div>
      <div class="ngx-table__column-resizer" *ngIf="config.resizeColumn && !last"></div>
    </th>
  </ng-container>
  <th
    *ngIf="
      config.additionalActions ||
      config.detailsTemplate ||
      config.collapseAllRows ||
      config.groupRows
    "
    class="ngx-table__header-cell-additional-actions"
  >
    <div class="ngx-dropdown" #additionalActionMenu *ngIf="config.additionalActions">
      <a class="ngx-btn ngx-btn-link" (click)="showMenu()">
        <span class="ngx-icon ngx-icon-menu"></span>
      </a>
      <ul class="ngx-menu ngx-table__table-menu" *ngIf="menuActive">
        <ng-container
          *ngIf="additionalActionsTemplate"
          [ngTemplateOutlet]="additionalActionsTemplate"
        >
        </ng-container>
      </ul>
    </div>
  </th>
</tr>
<tr
  class="ngx-table__header ngx-table__header--draggable"
  *ngIf="config.headerEnabled && config.columnReorder"
  cdkDropList
  cdkDropListOrientation="horizontal"
  (cdkDropListDropped)="columnDrop($event)"
>
  <th *ngIf="config.checkboxes || config.radio" [style.width]="'3%'">
    <ng-container
      *ngIf="selectAllTemplate && config.checkboxes"
      [ngTemplateOutlet]="selectAllTemplate"
      [ngTemplateOutletContext]="{ $implicit: onSelectAllBinded }"
    >
    </ng-container>
    <label
      class="ngx-form-checkbox"
      for="selectAllCheckboxes"
      *ngIf="!selectAllTemplate && config.checkboxes"
    >
      <input type="checkbox" id="selectAllCheckboxesDrag" (change)="onSelectAll()" />
      <em class="ngx-form-icon" id="selectAllCheckboxDrag"></em>
    </label>
  </th>
  <ng-container *ngFor="let column of columns; let colIndex = index; let last = last">
    <th
      class="ngx-table__header-cell ngx-table__header-cell--draggable"
      cdkDragLockAxis="x"
      cdkDrag
      [cdkDragStartDelay]="config.reorderDelay || 0"
      [class.pinned-left]="column.pinned"
      [ngClass]="column.cssClass && column.cssClass.includeHeader ? column.cssClass.name : ''"
      [style.left]="styleService.pinnedWidth(column.pinned, colIndex)"
      #th
      [style.width]="getColumnWidth(column)"
      (mousedown)="onMouseDown($event, th)"
      (mouseup)="onMouseUp($event)"
      (mousemove)="onMouseMove($event)"
    >
      <div
        (click)="orderBy(column)"
        style="display: inline"
        cdkDragHandle
        [class.pointer]="isOrderEnabled(column)"
      >
        <div class="ngx-table__header-title">
          {{ column.title }}<span>&nbsp;</span>
          <em class="ngx-icon ngx-icon-pin" *ngIf="column.pinned"></em>
          <div [style.display]="config.orderEnabled ? 'inline' : 'none'">
            <em
              *ngIf="sortKey === column.key && this.sortState.get(sortKey) === 'asc'"
              class="ngx-icon ngx-icon-arrow-up"
            >
            </em>
            <em
              *ngIf="sortKey === column.key && this.sortState.get(sortKey) === 'desc'"
              class="ngx-icon ngx-icon-arrow-down"
            >
            </em>
          </div>
        </div>
      </div>
      <div class="ngx-dropdown" *ngIf="!!column.headerActionTemplate" #headerDropdown>
        <a class="ngx-btn ngx-btn-link" (click)="showHeaderActionTemplateMenu(column)">
          <span class="ngx-icon ngx-icon-more"></span>
        </a>
        <div
          class="ngx-menu ngx-table__table-menu"
          *ngIf="column.key === openedHeaderActionTemplate"
        >
          <ng-container [ngTemplateOutlet]="column.headerActionTemplate"> </ng-container>
        </div>
      </div>
      <div class="ngx-table__column-resizer" *ngIf="config.resizeColumn && !last"></div>
    </th>
  </ng-container>
  <th
    *ngIf="
      config.additionalActions ||
      config.detailsTemplate ||
      config.collapseAllRows ||
      config.groupRows
    "
    class="ngx-table__header-cell-additional-actions"
  >
    <div class="ngx-dropdown" #additionalActionMenu *ngIf="config.additionalActions">
      <a class="ngx-btn ngx-btn-link" (click)="showMenu()">
        <span class="ngx-icon ngx-icon-menu"></span>
      </a>
      <ul class="ngx-menu ngx-table__table-menu" *ngIf="menuActive">
        <ng-container
          *ngIf="additionalActionsTemplate"
          [ngTemplateOutlet]="additionalActionsTemplate"
        >
        </ng-container>
      </ul>
    </div>
  </th>
</tr>
<tr
  [style.display]="config.searchEnabled && !filtersTemplate ? 'table-row' : 'none'"
  class="ngx-table__search-header"
>
  <th *ngIf="config.checkboxes || config.radio"></th>
  <ng-container *ngFor="let column of columns; let colIndex = index">
    <th
      [ngClass]="column.cssClass && column.cssClass.includeHeader ? column.cssClass.name : ''"
      [class.pinned-left]="column.pinned"
      [style.left]="styleService.pinnedWidth(column.pinned, colIndex)"
    >
      <table-header
        *ngIf="getColumnDefinition(column)"
        (update)="onSearch($event)"
        [column]="column"
      >
      </table-header>
    </th>
  </ng-container>
  <th *ngIf="config.additionalActions || config.detailsTemplate"></th>
</tr>
<ng-container *ngIf="filtersTemplate">
  <tr>
    <ng-container [ngTemplateOutlet]="filtersTemplate"> </ng-container>
  </tr>
</ng-container>
`,
      styles: [".cdk-drag-preview{text-align:left;padding-top:9px;padding-left:4px;color:#50596c;border:1px solid #e7e9ed}\n"]
    }]
  }], () => [{
    type: StyleService
  }], {
    config: [{
      type: Input
    }],
    columns: [{
      type: Input
    }],
    sortKey: [{
      type: Input
    }],
    sortState: [{
      type: Input
    }],
    selectAllTemplate: [{
      type: Input
    }],
    filtersTemplate: [{
      type: Input
    }],
    additionalActionsTemplate: [{
      type: Input
    }],
    filter: [{
      type: Output
    }],
    order: [{
      type: Output
    }],
    selectAll: [{
      type: Output
    }],
    event: [{
      type: Output
    }],
    th: [{
      type: ViewChild,
      args: ["th"]
    }],
    headerDropdown: [{
      type: ViewChildren,
      args: ["headerDropdown"]
    }],
    additionalActionMenu: [{
      type: ViewChild,
      args: ["additionalActionMenu"]
    }],
    onClick: [{
      type: HostListener,
      args: ["document:click", ["$event.target"]]
    }]
  });
})();
var FiltersService = class _FiltersService {
  static getPath(p, o) {
    const result = p.reduce((xs, x) => xs && typeof xs[x] !== "undefined" ? xs[x] : null, o);
    return result;
  }
  static {
    this.ɵfac = function FiltersService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FiltersService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _FiltersService,
      factory: _FiltersService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FiltersService, [{
    type: Injectable
  }], null, null);
})();
var SearchPipe = class _SearchPipe {
  constructor() {
    this.filters = {};
  }
  transform(array, filter2, filteredCountSubject, config) {
    filteredCountSubject.next(0);
    if (typeof array === "undefined") {
      return;
    }
    if (typeof filter2 === "undefined") {
      filteredCountSubject.next(array.length);
      return array;
    }
    filter2.forEach((f) => {
      this.filters[f.key] = f.value.toString().toLocaleLowerCase();
      if (Object.keys(f).length === 0 || f.value === "") {
        delete this.filters[f.key];
      }
    });
    if (config && config.groupRows) {
      return array.map((arr) => this.filterGroup(arr, filteredCountSubject));
    }
    return this.filterGroup(array, filteredCountSubject);
  }
  filterGroup(array, filteredCountSubject) {
    const arr = array.filter((obj) => {
      return Object.keys(this.filters).every((c) => {
        const split = c.split(".");
        const val = FiltersService.getPath(split, obj);
        const element = typeof val === "object" ? JSON.stringify(val) : val.toString().toLocaleLowerCase();
        const strings = this.filters[c].split(",");
        return strings.some((s) => element.indexOf(s.trim()) > -1);
      });
    });
    filteredCountSubject.next(arr.length);
    return arr;
  }
  static {
    this.ɵfac = function SearchPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SearchPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "search",
      type: _SearchPipe,
      pure: true,
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchPipe, [{
    type: Pipe,
    args: [{
      name: "search"
    }]
  }], null, null);
})();
var RenderPipe = class _RenderPipe {
  transform(row, key) {
    const split = key.split(".");
    return FiltersService.getPath(split, row);
  }
  static {
    this.ɵfac = function RenderPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RenderPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "render",
      type: _RenderPipe,
      pure: true,
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RenderPipe, [{
    type: Pipe,
    args: [{
      name: "render"
    }]
  }], null, null);
})();
var GlobalSearchPipe = class _GlobalSearchPipe {
  transform(array, filter2, filteredCountSubject) {
    filteredCountSubject.next(0);
    if (typeof array === "undefined") {
      return;
    }
    if (typeof filter2 === "undefined" || Object.keys(filter2).length === 0 || filter2 === "") {
      filteredCountSubject.next(array.length);
      return array;
    }
    const arr = array.filter((row) => {
      const element = JSON.stringify(Object.values(row));
      const strings = filter2.split(",");
      return strings.some((s) => element.toLocaleLowerCase().indexOf(s.trim().toLocaleLowerCase()) > -1);
    });
    filteredCountSubject.next(arr.length);
    return arr;
  }
  static {
    this.ɵfac = function GlobalSearchPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GlobalSearchPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "global",
      type: _GlobalSearchPipe,
      pure: true,
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalSearchPipe, [{
    type: Pipe,
    args: [{
      name: "global"
    }]
  }], null, null);
})();
var SortPipe = class _SortPipe {
  constructor() {
    this.defaultArray = [];
  }
  static isNaN(aV, bV) {
    return isNaN(parseFloat(aV)) || !isFinite(aV) || isNaN(parseFloat(bV)) || !isFinite(bV);
  }
  static compare(a, b, key) {
    const split = key.split(".");
    const aPath = FiltersService.getPath(split, a);
    const bPath = FiltersService.getPath(split, b);
    const aValue = (aPath + "").toLowerCase();
    const bValue = (bPath + "").toLowerCase();
    if (_SortPipe.isNaN(aPath, bPath)) {
      return aValue.localeCompare(bValue);
    }
    if (parseFloat(aPath) < parseFloat(bPath)) {
      return -1;
    }
    if (parseFloat(aPath) > parseFloat(bPath)) {
      return 1;
    }
    return 0;
  }
  transform(array, filter2, config) {
    if (this.defaultArray.length === 0) {
      this.defaultArray = array;
    }
    if (!filter2.key || filter2.key === "") {
      return array;
    }
    if (filter2.order === "") {
      return this.defaultArray;
    }
    if (filter2.order === "asc") {
      return this.sortAsc(array, filter2, config);
    }
    return this.sortDesc(array, filter2, config);
  }
  sortAsc(array, filter2, config) {
    if (config && config.groupRows) {
      return array.map((arr) => arr.sort((a, b) => _SortPipe.compare(a, b, filter2.key)));
    }
    return array.sort((a, b) => _SortPipe.compare(a, b, filter2.key));
  }
  sortDesc(array, filter2, config) {
    if (config && config.groupRows) {
      return array.map((arr) => arr.sort((a, b) => _SortPipe.compare(b, a, filter2.key)));
    }
    return array.sort((a, b) => _SortPipe.compare(b, a, filter2.key));
  }
  static {
    this.ɵfac = function SortPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SortPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "sort",
      type: _SortPipe,
      pure: true,
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SortPipe, [{
    type: Pipe,
    args: [{
      name: "sort"
    }]
  }], null, null);
})();
var BaseComponent = class _BaseComponent {
  onContextMenuClick(targetElement) {
    if (this.contextMenu && !this.contextMenu.nativeElement.contains(targetElement)) {
      this.rowContextMenuPosition = {
        top: null,
        left: null,
        value: null
      };
    }
  }
  constructor(cdr, scrollDispatcher, styleService) {
    this.cdr = cdr;
    this.scrollDispatcher = scrollDispatcher;
    this.styleService = styleService;
    this.unsubscribe = new Subject();
    this.filterCount = -1;
    this.filteredCountSubject = new Subject();
    this.tableClass = null;
    this.grouped = [];
    this.isSelected = false;
    this.page = 1;
    this.count = 0;
    this.sortState = /* @__PURE__ */ new Map();
    this.sortKey = null;
    this.rowContextMenuPosition = {
      top: null,
      left: null,
      value: null
    };
    this.sortBy = {
      key: "",
      order: "asc"
    };
    this.selectedDetailsTemplateRowId = /* @__PURE__ */ new Set();
    this.selectedCheckboxes = /* @__PURE__ */ new Set();
    this.id = "table";
    this.event = new EventEmitter();
    this.filteredCountSubject.pipe(takeUntil(this.unsubscribe)).subscribe((count) => {
      setTimeout(() => {
        this.filterCount = count;
        this.cdr.detectChanges();
      });
    });
  }
  ngOnInit() {
    if (!this.columns) {
      console.error("[columns] property required!");
    }
    if (this.configuration) {
      this.config = this.configuration;
    } else {
      this.config = DefaultConfigService.config;
    }
    this.limit = this.config.rows;
    if (this.groupRowsBy) {
      this.grouped = GroupRowsService.doGroupRows(this.data, this.groupRowsBy);
    }
    this.doDecodePersistedState();
  }
  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
  ngAfterViewInit() {
    const throttleValue = this.config.infiniteScrollThrottleTime ? this.config.infiniteScrollThrottleTime : 200;
    this.scrollDispatcher.scrolled().pipe(throttleTime(throttleValue), filter((event) => {
      return !!event && this.viewPort && this.viewPort.getRenderedRange().end === this.viewPort.getDataLength();
    }), takeUntil(this.unsubscribe)).subscribe(() => {
      this.emitEvent(Event.onInfiniteScrollEnd, null);
    });
  }
  ngOnChanges(changes) {
    const {
      configuration,
      data,
      pagination,
      groupRowsBy
    } = changes;
    this.toggleRowIndex = changes.toggleRowIndex;
    if (configuration && configuration.currentValue) {
      this.config = configuration.currentValue;
    }
    if (data && data.currentValue) {
      this.doApplyData(data);
    }
    if (pagination && pagination.currentValue) {
      const {
        count,
        limit,
        offset
      } = pagination.currentValue;
      this.count = count;
      this.limit = limit;
      this.page = offset;
    }
    if (groupRowsBy && groupRowsBy.currentValue) {
      this.grouped = GroupRowsService.doGroupRows(this.data, this.groupRowsBy);
    }
    if (this.toggleRowIndex && this.toggleRowIndex.currentValue) {
      const row = this.toggleRowIndex.currentValue;
      this.collapseRow(row.index);
    }
  }
  orderBy(column) {
    if (typeof column.orderEnabled !== "undefined" && !column.orderEnabled) {
      return;
    }
    this.sortKey = column.key;
    if (!this.config.orderEnabled || this.sortKey === "") {
      return;
    }
    this.setColumnOrder(column);
    if (!this.config.orderEventOnly && !column.orderEventOnly) {
      this.sortBy.key = this.sortKey;
      this.sortBy.order = this.sortState.get(this.sortKey);
    } else {
      this.sortBy.key = "";
      this.sortBy.order = "";
    }
    if (!this.config.serverPagination) {
      this.data = [...this.data];
      this.sortBy = __spreadValues({}, this.sortBy);
    }
    const value = {
      key: this.sortKey,
      order: this.sortState.get(this.sortKey)
    };
    this.emitEvent(Event.onOrder, value);
  }
  onClick($event, row, key, colIndex, rowIndex) {
    if (this.config.selectRow) {
      this.selectedRow = rowIndex;
    }
    if (this.config.selectCol && `${colIndex}`) {
      this.selectedCol = colIndex;
    }
    if (this.config.selectCell && `${colIndex}`) {
      this.selectedRow = rowIndex;
      this.selectedCol = colIndex;
    }
    if (this.config.clickEvent) {
      const value = {
        event: $event,
        row,
        key,
        rowId: rowIndex,
        colId: colIndex
      };
      this.emitEvent(Event.onClick, value);
    }
  }
  onDoubleClick($event, row, key, colIndex, rowIndex) {
    const value = {
      event: $event,
      row,
      key,
      rowId: rowIndex,
      colId: colIndex
    };
    this.emitEvent(Event.onDoubleClick, value);
  }
  onCheckboxSelect($event, row, rowIndex) {
    const value = {
      event: $event,
      row,
      rowId: rowIndex
    };
    this.emitEvent(Event.onCheckboxSelect, value);
  }
  onRadioSelect($event, row, rowIndex) {
    const value = {
      event: $event,
      row,
      rowId: rowIndex
    };
    this.emitEvent(Event.onRadioSelect, value);
  }
  onSelectAll() {
    this.isSelected = !this.isSelected;
    this.emitEvent(Event.onSelectAll, this.isSelected);
  }
  onSearch($event) {
    if (!this.config.serverPagination) {
      this.term = $event;
    }
    this.emitEvent(Event.onSearch, $event);
  }
  onGlobalSearch(value) {
    if (!this.config.serverPagination) {
      this.globalSearchTerm = value;
    }
    this.emitEvent(Event.onGlobalSearch, value);
  }
  onPagination(pagination) {
    this.page = pagination.page;
    this.limit = pagination.limit;
    this.config.rows = pagination.limit;
    this.emitEvent(Event.onPagination, pagination);
  }
  toggleCheckbox(rowIndex) {
    this.selectedCheckboxes.has(rowIndex) ? this.selectedCheckboxes.delete(rowIndex) : this.selectedCheckboxes.add(rowIndex);
  }
  collapseRow(rowIndex) {
    if (this.selectedDetailsTemplateRowId.has(rowIndex)) {
      this.selectedDetailsTemplateRowId.delete(rowIndex);
      this.emitEvent(Event.onRowCollapsedHide, rowIndex);
    } else {
      this.selectedDetailsTemplateRowId.add(rowIndex);
      this.emitEvent(Event.onRowCollapsedShow, rowIndex);
    }
  }
  doDecodePersistedState() {
    if (!this.config.persistState) {
      return;
    }
    const pagination = localStorage.getItem(Event.onPagination);
    const sort = localStorage.getItem(Event.onOrder);
    const search = localStorage.getItem(Event.onSearch);
    if (pagination) {
      this.onPagination(JSON.parse(pagination));
    }
    if (sort) {
      const {
        key,
        order
      } = JSON.parse(sort);
      this.bindApi({
        type: API.sortBy,
        value: {
          column: key,
          order
        }
      });
    }
    if (search) {
      this.bindApi({
        type: API.setInputValue,
        value: JSON.parse(search)
      });
    }
  }
  isRowCollapsed(rowIndex) {
    if (this.config.collapseAllRows) {
      return true;
    }
    return this.selectedDetailsTemplateRowId.has(rowIndex);
  }
  get loadingHeight() {
    const table = document.getElementById(this.id);
    if (table && table.rows && table.rows.length > 3) {
      const searchEnabled = this.config.searchEnabled ? 1 : 0;
      const headerEnabled = this.config.headerEnabled ? 1 : 0;
      const borderTrHeight = 1;
      const borderDivHeight = 2;
      return (table.rows.length - searchEnabled - headerEnabled) * (table.rows[3].offsetHeight - borderTrHeight) - borderDivHeight;
    }
    return 30;
  }
  get arrowDefinition() {
    return this.config.showDetailsArrow || typeof this.config.showDetailsArrow === "undefined";
  }
  onRowContextMenu($event, row, key, colIndex, rowIndex) {
    if (!this.config.showContextMenu) {
      return;
    }
    $event.preventDefault();
    const value = {
      event: $event,
      row,
      key,
      rowId: rowIndex,
      colId: colIndex
    };
    this.rowContextMenuPosition = {
      top: `${$event.pageY - 10}px`,
      left: `${$event.pageX - 10}px`,
      value
    };
    this.emitEvent(Event.onRowContextMenu, value);
  }
  doApplyData(data) {
    const order = this.columns.find((c) => !!c.orderBy);
    if (order) {
      this.sortState.set(this.sortKey, order.orderBy === "asc" ? "desc" : "asc");
      this.orderBy(order);
    } else {
      this.data = [...data.currentValue];
    }
  }
  onDragStart(event) {
    this.emitEvent(Event.onReorderStart, event);
  }
  onDrop(event) {
    this.emitEvent(Event.onRowDrop, event);
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
  }
  // DO NOT REMOVE. It is called from parent component. See src/app/demo/api-doc/api-doc.component.ts
  apiEvent(event) {
    return this.bindApi(event);
  }
  /* eslint-disable */
  bindApi(event) {
    switch (event.type) {
      case API.rowContextMenuClicked:
        this.rowContextMenuPosition = {
          top: null,
          left: null,
          value: null
        };
        break;
      case API.toggleRowIndex:
        this.collapseRow(event.value);
        break;
      case API.toggleCheckbox:
        this.toggleCheckbox(event.value);
        break;
      case API.setInputValue:
        if (this.config.searchEnabled) {
          event.value.forEach((input) => {
            const element = document.getElementById(`search_${input.key}`);
            if (!element) {
              console.error(`Column '${input.key}' not available in the DOM. Have you misspelled a name?`);
            } else {
              element.value = input.value;
            }
          });
        }
        this.onSearch(event.value);
        this.cdr.markForCheck();
        break;
      case API.onGlobalSearch:
        this.onGlobalSearch(event.value);
        this.cdr.markForCheck();
        break;
      case API.setRowClass:
        if (Array.isArray(event.value)) {
          event.value.forEach((val) => this.styleService.setRowClass(val));
          break;
        }
        this.styleService.setRowClass(event.value);
        this.cdr.markForCheck();
        break;
      case API.setCellClass:
        if (Array.isArray(event.value)) {
          event.value.forEach((val) => this.styleService.setCellClass(val));
          break;
        }
        this.styleService.setCellClass(event.value);
        break;
      case API.setRowStyle:
        if (Array.isArray(event.value)) {
          event.value.forEach((val) => this.styleService.setRowStyle(val));
          break;
        }
        this.styleService.setRowStyle(event.value);
        break;
      case API.setCellStyle:
        if (Array.isArray(event.value)) {
          event.value.forEach((val) => this.styleService.setCellStyle(val));
          break;
        }
        this.styleService.setCellStyle(event.value);
        break;
      case API.setTableClass:
        this.tableClass = event.value;
        this.cdr.markForCheck();
        break;
      case API.getPaginationTotalItems:
        return this.paginationComponent.paginationDirective.getTotalItems();
      case API.getPaginationCurrentPage:
        return this.paginationComponent.paginationDirective.getCurrent();
      case API.getPaginationLastPage:
        return this.paginationComponent.paginationDirective.getLastPage();
      case API.getNumberOfRowsPerPage:
        return this.paginationComponent.paginationDirective.isLastPage() ? this.paginationComponent.paginationDirective.getTotalItems() % this.limit : this.limit;
      case API.setPaginationCurrentPage:
        this.paginationComponent.paginationDirective.setCurrent(event.value);
        break;
      case API.setPaginationRange:
        this.paginationComponent.ranges = event.value;
        break;
      case API.setPaginationPreviousLabel:
        this.paginationComponent.previousLabel = event.value;
        break;
      case API.setPaginationNextLabel:
        this.paginationComponent.nextLabel = event.value;
        break;
      case API.setPaginationDisplayLimit:
        this.paginationComponent.changeLimit(event.value, true);
        break;
      case API.sortBy:
        const column = {
          title: "",
          key: event.value.column,
          orderBy: event.value.order
        };
        this.orderBy(column);
        this.cdr.detectChanges();
        break;
      default:
        break;
    }
  }
  setColumnOrder(column) {
    const key = column.key;
    switch (this.sortState.get(key)) {
      case "":
      case void 0:
        this.sortState.set(key, column.orderBy || "desc");
        break;
      case "asc":
        this.config.threeWaySort ? this.sortState.set(key, "") : this.sortState.set(key, "desc");
        break;
      case "desc":
        this.sortState.set(key, "asc");
        break;
    }
    if (this.sortState.size > 1) {
      const temp = this.sortState.get(key);
      this.sortState.clear();
      this.sortState.set(key, temp);
    }
  }
  emitEvent(event, value) {
    this.event.emit({
      event,
      value
    });
    if (this.config.persistState) {
      localStorage.setItem(event, JSON.stringify(value));
    }
    if (this.config.logger) {
      console.log({
        event,
        value
      });
    }
  }
  dragEnter($event) {
    $event.preventDefault();
    $event.stopPropagation();
  }
  dragOver($event) {
    $event.preventDefault();
    $event.stopPropagation();
  }
  dragLeave($event) {
    $event.preventDefault();
    $event.stopPropagation();
  }
  drop($event) {
    $event.preventDefault();
    $event.stopPropagation();
    const file = $event.dataTransfer?.files?.[0];
    if (file?.type !== "application/json") {
      console.log("File not allowed");
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      this.data = JSON.parse(event?.target?.result);
      this.cdr.markForCheck();
    };
    fileReader.readAsText(file);
  }
  static {
    this.ɵfac = function BaseComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BaseComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ScrollDispatcher), ɵɵdirectiveInject(StyleService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BaseComponent,
      selectors: [["ngx-table"]],
      contentQueries: function BaseComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TemplateRef, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.rowTemplate = _t.first);
        }
      },
      viewQuery: function BaseComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c7, 5);
          ɵɵviewQuery(_c8, 5);
          ɵɵviewQuery(_c9, 5);
          ɵɵviewQuery(CdkVirtualScrollViewport, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.paginationComponent = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contextMenu = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.table = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.viewPort = _t.first);
        }
      },
      hostBindings: function BaseComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function BaseComponent_click_HostBindingHandler($event) {
            return ctx.onContextMenuClick($event.target);
          }, false, ɵɵresolveDocument);
        }
      },
      inputs: {
        configuration: "configuration",
        data: "data",
        pagination: "pagination",
        groupRowsBy: "groupRowsBy",
        id: "id",
        toggleRowIndex: "toggleRowIndex",
        detailsTemplate: "detailsTemplate",
        summaryTemplate: "summaryTemplate",
        groupRowsHeaderTemplate: "groupRowsHeaderTemplate",
        filtersTemplate: "filtersTemplate",
        selectAllTemplate: "selectAllTemplate",
        noResultsTemplate: "noResultsTemplate",
        loadingTemplate: "loadingTemplate",
        additionalActionsTemplate: "additionalActionsTemplate",
        rowContextMenu: "rowContextMenu",
        columns: "columns"
      },
      outputs: {
        event: "event"
      },
      standalone: false,
      features: [ɵɵProvidersFeature([DefaultConfigService, GroupRowsService, StyleService]), ɵɵNgOnChangesFeature],
      decls: 11,
      vars: 38,
      consts: [["table", ""], ["paginationComponent", ""], ["contextMenu", ""], [1, "ngx-container", 3, "dragenter", "dragover", "dragleave", "drop"], [3, "id", "ngClass"], ["table-thead", "", 3, "selectAll", "filter", "order", "event", "config", "sortKey", "sortState", "selectAllTemplate", "filtersTemplate", "additionalActionsTemplate", "columns"], [4, "ngIf"], ["class", "ngx-draggable-row-area", "cdkDropList", "", 3, "cdkDropListDropped", 4, "ngIf"], [3, "updateRange", "id", "config", "pagination"], ["class", "ngx-table__table-row-context-menu", 3, "ngStyle", 4, "ngIf"], ["itemSize", "50", "class", "ngx-infinite-scroll-viewport", 4, "ngIf"], [1, "ngx-table__table-row-context-menu", 3, "ngStyle"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngFor", "ngForOf"], [3, "click", "contextmenu", "dblclick"], ["class", "ngx-icon", 3, "ngClass", "click", 4, "ngIf"], [1, "ngx-icon", 3, "click", "ngClass"], ["itemSize", "50", 1, "ngx-infinite-scroll-viewport"], [4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "ngx-form-checkbox"], ["type", "checkbox", 3, "change", "id", "checked"], [1, "ngx-form-icon"], ["type", "radio", "name", "radio", 3, "change", "id"], [3, "click", "contextmenu", "dblclick", "ngClass"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], ["width", "3%", 4, "ngIf"], ["width", "3%"], ["cdkDropList", "", 1, "ngx-draggable-row-area", 3, "cdkDropListDropped"], ["cdkDrag", "", "cdkDragLockAxis", "y", 1, "ngx-draggable-row", 3, "cdkDragStarted", "cdkDragStartDelay"], [3, "click", "dblclick"], [1, "ngx-table__body-empty"], [3, "ngTemplateOutlet", 4, "ngIf"], [3, "ngTemplateOutlet"], [1, "ngx-table__table-no-results"], [1, "ngx-table__body-loading"], [1, "ngx-table__table-loader-wrapper"], [1, "ngx-table__table-loader"]],
      template: function BaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "div", 3);
          ɵɵlistener("dragenter", function BaseComponent_Template_div_dragenter_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.dragEnter($event));
          })("dragover", function BaseComponent_Template_div_dragover_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.dragOver($event));
          })("dragleave", function BaseComponent_Template_div_dragleave_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.dragLeave($event));
          })("drop", function BaseComponent_Template_div_drop_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.drop($event));
          });
          ɵɵelementStart(1, "table", 4, 0)(3, "thead", 5);
          ɵɵlistener("selectAll", function BaseComponent_Template_thead_selectAll_3_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onSelectAll());
          })("filter", function BaseComponent_Template_thead_filter_3_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onSearch($event));
          })("order", function BaseComponent_Template_thead_order_3_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.orderBy($event));
          })("event", function BaseComponent_Template_thead_event_3_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.emitEvent($event.event, $event.value));
          });
          ɵɵelementEnd();
          ɵɵtemplate(4, BaseComponent_tbody_4_Template, 4, 3, "tbody", 6)(5, BaseComponent_tbody_5_Template, 2, 1, "tbody", 7)(6, BaseComponent_tbody_6_Template, 4, 2, "tbody", 6)(7, BaseComponent_tbody_7_Template, 4, 2, "tbody", 6)(8, BaseComponent_tfoot_8_Template, 3, 6, "tfoot", 6);
          ɵɵelementEnd();
          ɵɵelementStart(9, "pagination", 8, 1);
          ɵɵlistener("updateRange", function BaseComponent_Template_pagination_updateRange_9_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onPagination($event));
          });
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵclassProp("ngx-container--dark", ctx.config.tableLayout.theme === "dark");
          ɵɵadvance();
          ɵɵclassProp("ngx-table__table--tiny", ctx.config.tableLayout.style === "tiny")("ngx-table__table--normal", ctx.config.tableLayout.style === "normal")("ngx-table__table--big", ctx.config.tableLayout.style === "big")("ngx-table__table--borderless", ctx.config.tableLayout.borderless)("ngx-table__table--dark", ctx.config.tableLayout.theme === "dark")("ngx-table__table--hoverable", ctx.config.tableLayout.hover)("ngx-table__table--striped", ctx.config.tableLayout.striped)("ngx-table__horizontal-scroll", ctx.config.horizontalScroll && !ctx.config.isLoading);
          ɵɵproperty("id", ctx.id)("ngClass", ctx.tableClass === null || ctx.tableClass === "" ? "ngx-table" : ctx.tableClass);
          ɵɵadvance(2);
          ɵɵclassProp("ngx-infinite-scroll-viewport-thead", ctx.config.infiniteScroll);
          ɵɵproperty("config", ctx.config)("sortKey", ctx.sortKey)("sortState", ctx.sortState)("selectAllTemplate", ctx.selectAllTemplate)("filtersTemplate", ctx.filtersTemplate)("additionalActionsTemplate", ctx.additionalActionsTemplate)("columns", ctx.columns);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.data && !ctx.config.isLoading && !ctx.config.rowReorder);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.data && !ctx.config.isLoading && ctx.config.rowReorder);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.filterCount === 0);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.config.isLoading);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.summaryTemplate);
          ɵɵadvance();
          ɵɵproperty("id", ctx.id)("config", ctx.config)("pagination", ctx.pagination);
          ɵɵattribute("id", "pagination" + ctx.id);
        }
      },
      dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, CdkDropList, CdkDrag, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, PaginationComponent, TableTHeadComponent, PaginatePipe, SearchPipe, RenderPipe, GlobalSearchPipe, SortPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseComponent, [{
    type: Component,
    args: [{
      selector: "ngx-table",
      providers: [DefaultConfigService, GroupRowsService, StyleService],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div
  class="ngx-container"
  [class.ngx-container--dark]="config.tableLayout.theme === 'dark'"
  (dragenter)="dragEnter($event)"
  (dragover)="dragOver($event)"
  (dragleave)="dragLeave($event)"
  (drop)="drop($event)"
>
  <table
    [id]="id"
    #table
    [ngClass]="tableClass === null || tableClass === '' ? 'ngx-table' : tableClass"
    [class.ngx-table__table--tiny]="config.tableLayout.style === 'tiny'"
    [class.ngx-table__table--normal]="config.tableLayout.style === 'normal'"
    [class.ngx-table__table--big]="config.tableLayout.style === 'big'"
    [class.ngx-table__table--borderless]="config.tableLayout.borderless"
    [class.ngx-table__table--dark]="config.tableLayout.theme === 'dark'"
    [class.ngx-table__table--hoverable]="config.tableLayout.hover"
    [class.ngx-table__table--striped]="config.tableLayout.striped"
    [class.ngx-table__horizontal-scroll]="config.horizontalScroll && !config.isLoading"
  >
    <thead
      [class.ngx-infinite-scroll-viewport-thead]="config.infiniteScroll"
      table-thead
      [config]="config"
      [sortKey]="sortKey"
      [sortState]="sortState"
      [selectAllTemplate]="selectAllTemplate"
      [filtersTemplate]="filtersTemplate"
      [additionalActionsTemplate]="additionalActionsTemplate"
      [columns]="columns"
      (selectAll)="onSelectAll()"
      (filter)="onSearch($event)"
      (order)="orderBy($event)"
      (event)="emitEvent($event.event, $event.value)"
    ></thead>
    <tbody *ngIf="data && !config.isLoading && !config.rowReorder">
      <ng-container *ngIf="rowTemplate">
        <ul
          class="ngx-table__table-row-context-menu"
          [ngStyle]="{
            position: 'absolute',
            top: rowContextMenuPosition.top,
            left: rowContextMenuPosition.left
          }"
          *ngIf="rowContextMenuPosition.top"
        >
          <ng-container
            [ngTemplateOutlet]="rowContextMenu"
            [ngTemplateOutletContext]="{ $implicit: rowContextMenuPosition.value }"
          >
          </ng-container>
        </ul>
        <ng-container *ngIf="!config.infiniteScroll">
          <ng-container
            *ngFor="
              let row of data
                | sort: sortBy
                | search: term:filteredCountSubject
                | global: globalSearchTerm:filteredCountSubject
                | paginate: { itemsPerPage: limit, currentPage: page, totalItems: count, id: id }
            "
          >
            <tr
              (click)="onClick($event, row, '', null, data.indexOf(row))"
              #contextMenu
              (contextmenu)="onRowContextMenu($event, row, '', null, data.indexOf(row))"
              (dblclick)="onDoubleClick($event, row, '', null, data.indexOf(row))"
              [class.ngx-table__table-row--selected]="
                data.indexOf(row) === selectedRow && !config.selectCell
              "
            >
              <ng-container
                [ngTemplateOutlet]="rowTemplate"
                [ngTemplateOutletContext]="{ $implicit: row, index: data.indexOf(row) }"
              >
              </ng-container>
              <td *ngIf="config.detailsTemplate">
                <span
                  class="ngx-icon"
                  *ngIf="arrowDefinition"
                  [ngClass]="
                    isRowCollapsed(data.indexOf(row))
                      ? 'ngx-icon-arrow-down'
                      : 'ngx-icon-arrow-right'
                  "
                  (click)="collapseRow(data.indexOf(row))"
                >
                </span>
              </td>
            </tr>
            <tr
              *ngIf="
                (config.detailsTemplate && selectedDetailsTemplateRowId.has(data.indexOf(row))) ||
                config.collapseAllRows
              "
            >
              <td [attr.colspan]="columns.length + 1">
                <ng-container
                  [ngTemplateOutlet]="detailsTemplate"
                  [ngTemplateOutletContext]="{ $implicit: row, index: data.indexOf(row) }"
                >
                </ng-container>
              </td>
            </tr>
          </ng-container>
        </ng-container>
        <cdk-virtual-scroll-viewport
          itemSize="50"
          *ngIf="config.infiniteScroll"
          class="ngx-infinite-scroll-viewport"
        >
          <ng-container
            *cdkVirtualFor="
              let row of data
                | sort: sortBy
                | search: term:filteredCountSubject
                | global: globalSearchTerm:filteredCountSubject;
              let rowIndex = index
            "
          >
            <tr
              (click)="onClick($event, row, '', null, rowIndex)"
              #contextMenu
              (contextmenu)="onRowContextMenu($event, row, '', null, rowIndex)"
              (dblclick)="onDoubleClick($event, row, '', null, rowIndex)"
              [class.ngx-table__table-row--selected]="
                rowIndex === selectedRow && !config.selectCell
              "
            >
              <ng-container
                [ngTemplateOutlet]="rowTemplate"
                [ngTemplateOutletContext]="{ $implicit: row, index: rowIndex }"
              >
              </ng-container>
              <td *ngIf="config.detailsTemplate">
                <span
                  class="ngx-icon"
                  *ngIf="arrowDefinition"
                  [ngClass]="
                    isRowCollapsed(rowIndex) ? 'ngx-icon-arrow-down' : 'ngx-icon-arrow-right'
                  "
                  (click)="collapseRow(rowIndex)"
                >
                </span>
              </td>
            </tr>
            <tr
              *ngIf="
                (config.detailsTemplate && selectedDetailsTemplateRowId.has(rowIndex)) ||
                config.collapseAllRows
              "
            >
              <td [attr.colspan]="columns.length + 1">
                <ng-container
                  [ngTemplateOutlet]="detailsTemplate"
                  [ngTemplateOutletContext]="{ $implicit: row, index: rowIndex }"
                >
                </ng-container>
              </td>
            </tr>
          </ng-container>
        </cdk-virtual-scroll-viewport>
      </ng-container>
      <ng-container *ngIf="!rowTemplate && !config.groupRows">
        <ul
          class="ngx-table__table-row-context-menu"
          [ngStyle]="{
            position: 'absolute',
            top: rowContextMenuPosition.top,
            left: rowContextMenuPosition.left
          }"
          *ngIf="rowContextMenuPosition.top"
        >
          <ng-container
            [ngTemplateOutlet]="rowContextMenu"
            [ngTemplateOutletContext]="{ $implicit: rowContextMenuPosition.value }"
          >
          </ng-container>
        </ul>
        <ng-container *ngIf="!config.infiniteScroll">
          <ng-container
            *ngFor="
              let row of data
                | sort: sortBy
                | search: term:filteredCountSubject
                | global: globalSearchTerm:filteredCountSubject
                | paginate: { itemsPerPage: limit, currentPage: page, totalItems: count, id: id }
            "
          >
            <tr
              [class.ngx-table__table-row--selected]="
                data.indexOf(row) === selectedRow && !config.selectCell
              "
            >
              <td *ngIf="config.checkboxes">
                <label class="ngx-form-checkbox">
                  <input
                    type="checkbox"
                    id="checkbox-{{ data.indexOf(row) }}"
                    [checked]="isSelected || selectedCheckboxes.has(data.indexOf(row))"
                    (change)="onCheckboxSelect($event, row, data.indexOf(row))"
                  />
                  <em class="ngx-form-icon"></em>
                </label>
              </td>
              <td *ngIf="config.radio">
                <label>
                  <input
                    type="radio"
                    id="radio-{{ data.indexOf(row) }}"
                    name="radio"
                    (change)="onRadioSelect($event, row, data.indexOf(row))"
                  />
                </label>
              </td>
              <ng-container *ngFor="let column of columns; let colIndex = index">
                <td
                  (click)="onClick($event, row, column.key, colIndex, data.indexOf(row))"
                  #contextMenu
                  (contextmenu)="
                    onRowContextMenu($event, row, column.key, colIndex, data.indexOf(row))
                  "
                  (dblclick)="onDoubleClick($event, row, column.key, colIndex, data.indexOf(row))"
                  [class.pinned-left]="column.pinned"
                  [ngClass]="column.cssClass ? column.cssClass.name : ''"
                  [style.left]="styleService.pinnedWidth(column.pinned, colIndex)"
                  [class.ngx-table__table-col--selected]="
                    colIndex === selectedCol && !config.selectCell
                  "
                  [class.ngx-table__table-cell--selected]="
                    colIndex === selectedCol &&
                    data.indexOf(row) === selectedRow &&
                    !config.selectCol &&
                    !config.selectRow
                  "
                >
                  <div *ngIf="!column.cellTemplate">{{ row | render: column.key }}</div>
                  <ng-container
                    *ngIf="column.cellTemplate"
                    [ngTemplateOutlet]="column.cellTemplate"
                    [ngTemplateOutletContext]="{
                      $implicit: row,
                      rowIndex: data.indexOf(row),
                      column: column
                    }"
                  >
                  </ng-container>
                </td>
              </ng-container>
              <td *ngIf="config.additionalActions || config.detailsTemplate">
                <span
                  class="ngx-icon"
                  *ngIf="arrowDefinition"
                  [ngClass]="
                    isRowCollapsed(data.indexOf(row))
                      ? 'ngx-icon-arrow-down'
                      : 'ngx-icon-arrow-right'
                  "
                  (click)="collapseRow(data.indexOf(row))"
                >
                </span>
              </td>
            </tr>
            <tr
              *ngIf="
                (config.detailsTemplate && selectedDetailsTemplateRowId.has(data.indexOf(row))) ||
                config.collapseAllRows
              "
            >
              <td *ngIf="config.checkboxes || config.radio"></td>
              <td [attr.colspan]="columns.length + 1">
                <ng-container
                  [ngTemplateOutlet]="detailsTemplate"
                  [ngTemplateOutletContext]="{ $implicit: row, index: data.indexOf(row) }"
                >
                </ng-container>
              </td>
            </tr>
          </ng-container>
        </ng-container>
        <!-- infinite scroll -->
        <cdk-virtual-scroll-viewport
          itemSize="50"
          *ngIf="config.infiniteScroll"
          class="ngx-infinite-scroll-viewport"
        >
          <ng-container
            *cdkVirtualFor="
              let row of data
                | sort: sortBy
                | search: term:filteredCountSubject
                | global: globalSearchTerm:filteredCountSubject;
              let rowIndex = index
            "
          >
            <tr
              [class.ngx-table__table-row--selected]="
                rowIndex === selectedRow && !config.selectCell
              "
            >
              <td *ngIf="config.checkboxes" width="3%">
                <label class="ngx-form-checkbox">
                  <input
                    type="checkbox"
                    id="checkbox-infinite-scroll-{{ rowIndex }}"
                    [checked]="isSelected || selectedCheckboxes.has(rowIndex)"
                    (change)="onCheckboxSelect($event, row, rowIndex)"
                  />
                  <em class="ngx-form-icon"></em>
                </label>
              </td>
              <td *ngIf="config.radio" width="3%">
                <label>
                  <input
                    type="radio"
                    id="radio-infinite-scroll-{{ rowIndex }}"
                    name="radio"
                    (change)="onRadioSelect($event, row, rowIndex)"
                  />
                </label>
              </td>
              <ng-container *ngFor="let column of columns; let colIndex = index">
                <td
                  (click)="onClick($event, row, column.key, colIndex, rowIndex)"
                  #contextMenu
                  (contextmenu)="onRowContextMenu($event, row, column.key, colIndex, rowIndex)"
                  (dblclick)="onDoubleClick($event, row, column.key, colIndex, rowIndex)"
                  [class.pinned-left]="column.pinned"
                  [ngClass]="column.cssClass ? column.cssClass.name : ''"
                  [style.left]="styleService.pinnedWidth(column.pinned, colIndex)"
                  [class.ngx-table__table-col--selected]="
                    colIndex === selectedCol && !config.selectCell
                  "
                  [class.ngx-table__table-cell--selected]="
                    colIndex === selectedCol &&
                    rowIndex === selectedRow &&
                    !config.selectCol &&
                    !config.selectRow
                  "
                >
                  <div *ngIf="!column.cellTemplate">{{ row | render: column.key }}</div>
                  <ng-container
                    *ngIf="column.cellTemplate"
                    [ngTemplateOutlet]="column.cellTemplate"
                    [ngTemplateOutletContext]="{
                      $implicit: row,
                      rowIndex: rowIndex,
                      column: column
                    }"
                  >
                  </ng-container>
                </td>
              </ng-container>
              <td *ngIf="config.additionalActions || config.detailsTemplate">
                <span
                  class="ngx-icon"
                  *ngIf="arrowDefinition"
                  [ngClass]="
                    isRowCollapsed(rowIndex) ? 'ngx-icon-arrow-down' : 'ngx-icon-arrow-right'
                  "
                  (click)="collapseRow(rowIndex)"
                >
                </span>
              </td>
            </tr>
            <tr
              *ngIf="
                (config.detailsTemplate && selectedDetailsTemplateRowId.has(rowIndex)) ||
                config.collapseAllRows
              "
            >
              <td *ngIf="config.checkboxes || config.radio"></td>
              <td [attr.colspan]="columns.length + 1">
                <ng-container
                  [ngTemplateOutlet]="detailsTemplate"
                  [ngTemplateOutletContext]="{ $implicit: row, index: rowIndex }"
                >
                </ng-container>
              </td>
            </tr>
          </ng-container>
        </cdk-virtual-scroll-viewport>
      </ng-container>
      <ng-container *ngIf="!rowTemplate && config.groupRows">
        <ng-container
          *ngFor="
            let group of grouped
              | sort: sortBy:config
              | search: term:filteredCountSubject:config
              | global: globalSearchTerm:filteredCountSubject
              | paginate: { itemsPerPage: limit, currentPage: page, totalItems: count, id: id };
            let rowIndex = index
          "
        >
          <tr>
            <ng-container *ngIf="!groupRowsHeaderTemplate">
              <td [attr.colspan]="columns.length">
                <div>{{ group[0][groupRowsBy] }} ({{ group.length }})</div>
              </td>
            </ng-container>
            <ng-container
              *ngIf="groupRowsHeaderTemplate"
              [ngTemplateOutlet]="groupRowsHeaderTemplate"
              [ngTemplateOutletContext]="{
                total: group.length,
                key: groupRowsBy,
                value: group[0] ? group[0][groupRowsBy] : '',
                group: group,
                index: rowIndex
              }"
            >
            </ng-container>
            <td>
              <span
                class="ngx-icon"
                *ngIf="arrowDefinition"
                [ngClass]="
                  isRowCollapsed(rowIndex) ? 'ngx-icon-arrow-down' : 'ngx-icon-arrow-right'
                "
                (click)="collapseRow(rowIndex)"
              >
              </span>
            </td>
          </tr>
          <ng-container *ngIf="selectedDetailsTemplateRowId.has(rowIndex)">
            <tr *ngFor="let row of group">
              <td *ngFor="let column of columns">
                {{ row | render: column.key }}
                <!-- TODO allow users to add groupRowsTemplateRef -->
              </td>
              <td></td>
            </tr>
          </ng-container>
        </ng-container>
      </ng-container>
    </tbody>
    <tbody
      *ngIf="data && !config.isLoading && config.rowReorder"
      class="ngx-draggable-row-area"
      cdkDropList
      (cdkDropListDropped)="onDrop($event)"
    >
      <ng-container *ngIf="!rowTemplate && !config.groupRows">
        <ng-container
          *ngFor="
            let row of data
              | sort: sortBy
              | search: term:filteredCountSubject
              | global: globalSearchTerm:filteredCountSubject
              | paginate: { itemsPerPage: limit, currentPage: page, totalItems: count, id: id }
          "
        >
          <tr
            class="ngx-draggable-row"
            cdkDrag
            (cdkDragStarted)="onDragStart($event)"
            [cdkDragStartDelay]="config.reorderDelay || 0"
            cdkDragLockAxis="y"
          >
            <td *ngIf="config.checkboxes">
              <label class="ngx-form-checkbox">
                <input
                  type="checkbox"
                  id="checkbox-draggable-{{ data.indexOf(row) }}"
                  [checked]="isSelected || selectedCheckboxes.has(data.indexOf(row))"
                  (change)="onCheckboxSelect($event, row, data.indexOf(row))"
                />
                <em class="ngx-form-icon"></em>
              </label>
            </td>
            <td *ngIf="config.radio">
              <label>
                <input
                  type="radio"
                  id="radio-draggable-{{ data.indexOf(row) }}"
                  name="radio"
                  (change)="onRadioSelect($event, row, data.indexOf(row))"
                />
              </label>
            </td>
            <ng-container *ngFor="let column of columns; let colIndex = index">
              <td
                (click)="onClick($event, row, column.key, colIndex, data.indexOf(row))"
                (dblclick)="onDoubleClick($event, row, column.key, colIndex, data.indexOf(row))"
                [class.ngx-table__table-col--selected]="
                  colIndex === selectedCol && !config.selectCell
                "
                [class.ngx-table__table-cell--selected]="
                  colIndex === selectedCol &&
                  data.indexOf(row) === selectedRow &&
                  !config.selectCol &&
                  !config.selectRow
                "
              >
                <div *ngIf="!column.cellTemplate">{{ row | render: column.key }}</div>
                <ng-container
                  *ngIf="column.cellTemplate"
                  [ngTemplateOutlet]="column.cellTemplate"
                  [ngTemplateOutletContext]="{
                    $implicit: row,
                    rowIndex: data.indexOf(row),
                    column: column
                  }"
                >
                </ng-container>
              </td>
            </ng-container>
          </tr>
        </ng-container>
      </ng-container>
    </tbody>
    <tbody *ngIf="filterCount === 0">
      <tr class="ngx-table__body-empty">
        <ng-container *ngIf="noResultsTemplate" [ngTemplateOutlet]="noResultsTemplate">
        </ng-container>
        <td [attr.colspan]="columns && columns.length + 1" *ngIf="!noResultsTemplate">
          <div class="ngx-table__table-no-results">No results</div>
        </td>
      </tr>
    </tbody>
    <tbody *ngIf="config.isLoading">
      <tr class="ngx-table__body-loading">
        <ng-container *ngIf="loadingTemplate" [ngTemplateOutlet]="loadingTemplate"> </ng-container>
        <td [attr.colspan]="columns && columns.length + 1" *ngIf="!loadingTemplate">
          <div [style.height.px]="loadingHeight" class="ngx-table__table-loader-wrapper">
            <div class="ngx-table__table-loader"></div>
          </div>
        </td>
      </tr>
    </tbody>
    <tfoot *ngIf="summaryTemplate">
      <tr>
        <ng-container
          [ngTemplateOutlet]="summaryTemplate"
          [ngTemplateOutletContext]="{ total: data.length, limit: limit, page: page }"
        >
        </ng-container>
      </tr>
    </tfoot>
  </table>
  <pagination
    [attr.id]="'pagination' + id"
    [id]="id"
    #paginationComponent
    [config]="config"
    [pagination]="pagination"
    (updateRange)="onPagination($event)"
  >
  </pagination>
</div>
`
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ScrollDispatcher
  }, {
    type: StyleService
  }], {
    configuration: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    pagination: [{
      type: Input
    }],
    groupRowsBy: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    toggleRowIndex: [{
      type: Input
    }],
    detailsTemplate: [{
      type: Input
    }],
    summaryTemplate: [{
      type: Input
    }],
    groupRowsHeaderTemplate: [{
      type: Input
    }],
    filtersTemplate: [{
      type: Input
    }],
    selectAllTemplate: [{
      type: Input
    }],
    noResultsTemplate: [{
      type: Input
    }],
    loadingTemplate: [{
      type: Input
    }],
    additionalActionsTemplate: [{
      type: Input
    }],
    rowContextMenu: [{
      type: Input
    }],
    columns: [{
      type: Input
    }],
    event: [{
      type: Output
    }],
    rowTemplate: [{
      type: ContentChild,
      args: [TemplateRef]
    }],
    paginationComponent: [{
      type: ViewChild,
      args: ["paginationComponent"]
    }],
    contextMenu: [{
      type: ViewChild,
      args: ["contextMenu"]
    }],
    table: [{
      type: ViewChild,
      args: ["table"]
    }],
    viewPort: [{
      type: ViewChild,
      args: [CdkVirtualScrollViewport]
    }],
    onContextMenuClick: [{
      type: HostListener,
      args: ["document:click", ["$event.target"]]
    }]
  });
})();
var BaseModule = class _BaseModule {
  static {
    this.ɵfac = function BaseModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BaseModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _BaseModule,
      declarations: [
        BaseComponent,
        HeaderComponent,
        PaginationComponent,
        TableTHeadComponent,
        // Pipes
        SearchPipe,
        RenderPipe,
        GlobalSearchPipe,
        SortPipe
      ],
      imports: [CommonModule, NgxPaginationModule, DragDropModule, ScrollingModule],
      exports: [BaseComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, NgxPaginationModule, DragDropModule, ScrollingModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseModule, [{
    type: NgModule,
    args: [{
      declarations: [
        BaseComponent,
        HeaderComponent,
        PaginationComponent,
        TableTHeadComponent,
        // Pipes
        SearchPipe,
        RenderPipe,
        GlobalSearchPipe,
        SortPipe
      ],
      imports: [CommonModule, NgxPaginationModule, DragDropModule, ScrollingModule],
      exports: [BaseComponent]
    }]
  }], null, null);
})();
var TableModule = class _TableModule {
  static {
    this.ɵfac = function TableModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TableModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TableModule,
      imports: [CommonModule, BaseModule],
      exports: [BaseComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, BaseModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, BaseModule],
      exports: [BaseComponent],
      providers: []
    }]
  }], null, null);
})();
export {
  API,
  BaseComponent,
  DefaultConfig,
  Event,
  STYLE,
  THEME,
  TableModule
};
//# sourceMappingURL=ngx-easy-table.js.map
