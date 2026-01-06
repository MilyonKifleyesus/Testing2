import { Component, ContentChildren, HostListener, Input, TemplateRef, ViewChild } from '@angular/core';
import { filter, first, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Ng2Dropdown } from 'ng2-material-dropdown';
import { defaults } from '../../defaults';
import { TagInputComponent } from '../tag-input/tag-input';
import * as i0 from "@angular/core";
import * as i1 from "ng2-material-dropdown";
import * as i2 from "@angular/common";
import * as i3 from "../../core/pipes/highlight.pipe";
export class TagInputDropdown {
    constructor(injector) {
        this.injector = injector;
        /**
         * @name offset
         */
        this.offset = defaults.dropdown.offset;
        /**
         * @name focusFirstElement
         */
        this.focusFirstElement = defaults.dropdown.focusFirstElement;
        /**
         * - show autocomplete dropdown if the value of input is empty
         * @name showDropdownIfEmpty
         */
        this.showDropdownIfEmpty = defaults.dropdown.showDropdownIfEmpty;
        /**
         * - desc minimum text length in order to display the autocomplete dropdown
         * @name minimumTextLength
         */
        this.minimumTextLength = defaults.dropdown.minimumTextLength;
        /**
         * - number of items to display in the autocomplete dropdown
         * @name limitItemsTo
         */
        this.limitItemsTo = defaults.dropdown.limitItemsTo;
        /**
         * @name displayBy
         */
        this.displayBy = defaults.dropdown.displayBy;
        /**
         * @name identifyBy
         */
        this.identifyBy = defaults.dropdown.identifyBy;
        /**
         * @description a function a developer can use to implement custom matching for the autocomplete
         * @name matchingFn
         */
        this.matchingFn = defaults.dropdown.matchingFn;
        /**
         * @name appendToBody
         */
        this.appendToBody = defaults.dropdown.appendToBody;
        /**
         * @name keepOpen
         * @description option to leave dropdown open when adding a new item
         */
        this.keepOpen = defaults.dropdown.keepOpen;
        /**
         * @name dynamicUpdate
         */
        this.dynamicUpdate = defaults.dropdown.dynamicUpdate;
        /**
         * @name zIndex
         */
        this.zIndex = defaults.dropdown.zIndex;
        /**
         * list of items that match the current value of the input (for autocomplete)
         * @name items
         */
        this.items = [];
        /**
         * @name tagInput
         */
        this.tagInput = this.injector.get(TagInputComponent);
        /**
         * @name _autocompleteItems
         */
        this._autocompleteItems = [];
        /**
         *
         * @name show
         */
        this.show = () => {
            const maxItemsReached = this.tagInput.items.length === this.tagInput.maxItems;
            const value = this.getFormValue();
            const hasMinimumText = value.trim().length >= this.minimumTextLength;
            const position = this.calculatePosition();
            const items = this.getMatchingItems(value);
            const hasItems = items.length > 0;
            const isHidden = this.isVisible === false;
            const showDropdownIfEmpty = this.showDropdownIfEmpty && hasItems && !value;
            const isDisabled = this.tagInput.disable;
            const shouldShow = isHidden && ((hasItems && hasMinimumText) || showDropdownIfEmpty);
            const shouldHide = this.isVisible && !hasItems;
            if (this.autocompleteObservable && hasMinimumText) {
                return this.getItemsFromObservable(value);
            }
            if ((!this.showDropdownIfEmpty && !value) ||
                maxItemsReached ||
                isDisabled) {
                return this.dropdown.hide();
            }
            this.setItems(items);
            if (shouldShow) {
                this.dropdown.show(position);
            }
            else if (shouldHide) {
                this.hide();
            }
        };
        /**
         * @name requestAdding
         * @param item {Ng2MenuItem}
         */
        this.requestAdding = async (item) => {
            const tag = this.createTagModel(item);
            await this.tagInput.onAddingRequested(true, tag).catch(() => { });
        };
        /**
         * @name resetItems
         */
        this.resetItems = () => {
            this.items = [];
        };
        /**
         * @name getItemsFromObservable
         * @param text
         */
        this.getItemsFromObservable = (text) => {
            this.setLoadingState(true);
            const subscribeFn = (data) => {
                // hide loading animation
                this.setLoadingState(false)
                    // add items
                    .populateItems(data);
                this.setItems(this.getMatchingItems(text));
                if (this.items.length) {
                    this.dropdown.show(this.calculatePosition());
                }
                else {
                    this.dropdown.hide();
                }
            };
            this.autocompleteObservable(text)
                .pipe(first())
                .subscribe(subscribeFn, () => this.setLoadingState(false));
        };
    }
    /**
     * @name autocompleteItems
     * @param items
     */
    set autocompleteItems(items) {
        this._autocompleteItems = items;
    }
    /**
     * @name autocompleteItems
     * @desc array of items that will populate the autocomplete
     */
    get autocompleteItems() {
        const items = this._autocompleteItems;
        if (!items) {
            return [];
        }
        return items.map((item) => {
            return typeof item === 'string'
                ? {
                    [this.displayBy]: item,
                    [this.identifyBy]: item
                }
                : item;
        });
    }
    /**
     * @name ngAfterviewInit
     */
    ngAfterViewInit() {
        this.onItemClicked().subscribe((item) => {
            this.requestAdding(item);
        });
        // reset itemsMatching array when the dropdown is hidden
        this.onHide().subscribe(this.resetItems);
        const DEBOUNCE_TIME = 200;
        const KEEP_OPEN = this.keepOpen;
        this.tagInput.onTextChange
            .asObservable()
            .pipe(distinctUntilChanged(), debounceTime(DEBOUNCE_TIME), filter((value) => {
            if (KEEP_OPEN === false) {
                return value.length > 0;
            }
            return true;
        }))
            .subscribe(this.show);
    }
    /**
     * @name updatePosition
     */
    updatePosition() {
        const position = this.tagInput.inputForm.getElementPosition();
        this.dropdown.menu.updatePosition(position, this.dynamicUpdate);
    }
    /**
     * @name isVisible
     */
    get isVisible() {
        return this.dropdown.menu.dropdownState.menuState.isVisible;
    }
    /**
     * @name onHide
     */
    onHide() {
        return this.dropdown.onHide;
    }
    /**
     * @name onItemClicked
     */
    onItemClicked() {
        return this.dropdown.onItemClicked;
    }
    /**
     * @name selectedItem
     */
    get selectedItem() {
        return this.dropdown.menu.dropdownState.dropdownState.selectedItem;
    }
    /**
     * @name state
     */
    get state() {
        return this.dropdown.menu.dropdownState;
    }
    /**
     * @name hide
     */
    hide() {
        this.resetItems();
        this.dropdown.hide();
    }
    /**
     * @name scrollListener
     */
    scrollListener() {
        if (!this.isVisible || !this.dynamicUpdate) {
            return;
        }
        this.updatePosition();
    }
    /**
     * @name onWindowBlur
     */
    onWindowBlur() {
        this.dropdown.hide();
    }
    /**
     * @name getFormValue
     */
    getFormValue() {
        const formValue = this.tagInput.formValue;
        return formValue ? formValue.toString().trim() : '';
    }
    /**
     * @name calculatePosition
     */
    calculatePosition() {
        return this.tagInput.inputForm.getElementPosition();
    }
    /**
     * @name createTagModel
     * @param item
     */
    createTagModel(item) {
        const display = typeof item.value === 'string' ? item.value : item.value[this.displayBy];
        const value = typeof item.value === 'string' ? item.value : item.value[this.identifyBy];
        return {
            ...item.value,
            [this.tagInput.displayBy]: display,
            [this.tagInput.identifyBy]: value
        };
    }
    /**
     *
     * @param value {string}
     */
    getMatchingItems(value) {
        if (!value && !this.showDropdownIfEmpty) {
            return [];
        }
        const dupesAllowed = this.tagInput.allowDupes;
        return this.autocompleteItems.filter((item) => {
            const hasValue = dupesAllowed
                ? false
                : this.tagInput.tags.some(tag => {
                    const identifyBy = this.tagInput.identifyBy;
                    const model = typeof tag.model === 'string' ? tag.model : tag.model[identifyBy];
                    return model === item[this.identifyBy];
                });
            return this.matchingFn(value, item) && hasValue === false;
        });
    }
    /**
     * @name setItems
     */
    setItems(items) {
        this.items = items.slice(0, this.limitItemsTo || items.length);
    }
    /**
     * @name populateItems
     * @param data
     */
    populateItems(data) {
        this.autocompleteItems = data.map(item => {
            return typeof item === 'string'
                ? {
                    [this.displayBy]: item,
                    [this.identifyBy]: item
                }
                : item;
        });
        return this;
    }
    /**
     * @name setLoadingState
     * @param state
     */
    setLoadingState(state) {
        this.tagInput.isLoading = state;
        return this;
    }
}
TagInputDropdown.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TagInputDropdown, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
TagInputDropdown.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: TagInputDropdown, selector: "tag-input-dropdown", inputs: { offset: "offset", focusFirstElement: "focusFirstElement", showDropdownIfEmpty: "showDropdownIfEmpty", autocompleteObservable: "autocompleteObservable", minimumTextLength: "minimumTextLength", limitItemsTo: "limitItemsTo", displayBy: "displayBy", identifyBy: "identifyBy", matchingFn: "matchingFn", appendToBody: "appendToBody", keepOpen: "keepOpen", dynamicUpdate: "dynamicUpdate", zIndex: "zIndex", autocompleteItems: "autocompleteItems" }, host: { listeners: { "window:scroll": "scrollListener()", "window:blur": "onWindowBlur()" } }, queries: [{ propertyName: "templates", predicate: TemplateRef }], viewQueries: [{ propertyName: "dropdown", first: true, predicate: Ng2Dropdown, descendants: true }], ngImport: i0, template: "<ng2-dropdown [dynamicUpdate]=\"dynamicUpdate\">\n    <ng2-dropdown-menu [focusFirstElement]=\"focusFirstElement\"\n                       [zIndex]=\"zIndex\"\n                       [appendToBody]=\"appendToBody\"\n                       [offset]=\"offset\">\n        <ng2-menu-item *ngFor=\"let item of items; let index = index; let last = last\"\n                       [value]=\"item\"\n                       [ngSwitch]=\"!!templates.length\">\n\n            <span *ngSwitchCase=\"false\"\n                  [innerHTML]=\"item[displayBy] | highlight : tagInput.inputForm.value.value\">\n            </span>\n\n            <ng-template *ngSwitchDefault\n                      [ngTemplateOutlet]=\"templates.first\"\n                      [ngTemplateOutletContext]=\"{ item: item, index: index, last: last }\">\n            </ng-template>\n        </ng2-menu-item>\n    </ng2-dropdown-menu>\n</ng2-dropdown>\n", components: [{ type: i1.Ng2Dropdown, selector: "ng2-dropdown", inputs: ["dynamicUpdate"], outputs: ["onItemClicked", "onItemSelected", "onShow", "onHide"] }, { type: i1.Ng2DropdownMenu, selector: "ng2-dropdown-menu", inputs: ["width", "focusFirstElement", "offset", "appendToBody", "zIndex"] }, { type: i1.Ng2MenuItem, selector: "ng2-menu-item", inputs: ["preventClose", "value"] }], directives: [{ type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i2.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i2.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], pipes: { "highlight": i3.HighlightPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TagInputDropdown, decorators: [{
            type: Component,
            args: [{ selector: 'tag-input-dropdown', template: "<ng2-dropdown [dynamicUpdate]=\"dynamicUpdate\">\n    <ng2-dropdown-menu [focusFirstElement]=\"focusFirstElement\"\n                       [zIndex]=\"zIndex\"\n                       [appendToBody]=\"appendToBody\"\n                       [offset]=\"offset\">\n        <ng2-menu-item *ngFor=\"let item of items; let index = index; let last = last\"\n                       [value]=\"item\"\n                       [ngSwitch]=\"!!templates.length\">\n\n            <span *ngSwitchCase=\"false\"\n                  [innerHTML]=\"item[displayBy] | highlight : tagInput.inputForm.value.value\">\n            </span>\n\n            <ng-template *ngSwitchDefault\n                      [ngTemplateOutlet]=\"templates.first\"\n                      [ngTemplateOutletContext]=\"{ item: item, index: index, last: last }\">\n            </ng-template>\n        </ng2-menu-item>\n    </ng2-dropdown-menu>\n</ng2-dropdown>\n" }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; }, propDecorators: { dropdown: [{
                type: ViewChild,
                args: [Ng2Dropdown]
            }], templates: [{
                type: ContentChildren,
                args: [TemplateRef]
            }], offset: [{
                type: Input
            }], focusFirstElement: [{
                type: Input
            }], showDropdownIfEmpty: [{
                type: Input
            }], autocompleteObservable: [{
                type: Input
            }], minimumTextLength: [{
                type: Input
            }], limitItemsTo: [{
                type: Input
            }], displayBy: [{
                type: Input
            }], identifyBy: [{
                type: Input
            }], matchingFn: [{
                type: Input
            }], appendToBody: [{
                type: Input
            }], keepOpen: [{
                type: Input
            }], dynamicUpdate: [{
                type: Input
            }], zIndex: [{
                type: Input
            }], autocompleteItems: [{
                type: Input
            }], scrollListener: [{
                type: HostListener,
                args: ['window:scroll']
            }], onWindowBlur: [{
                type: HostListener,
                args: ['window:blur']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWlucHV0LWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vZHVsZXMvY29tcG9uZW50cy9kcm9wZG93bi90YWctaW5wdXQtZHJvcGRvd24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vbW9kdWxlcy9jb21wb25lbnRzL2Ryb3Bkb3duL3RhZy1pbnB1dC1kcm9wZG93bi50ZW1wbGF0ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsZUFBZSxFQUVmLFlBQVksRUFFWixLQUFLLEVBRUwsV0FBVyxFQUNYLFNBQVMsRUFFVixNQUFNLGVBQWUsQ0FBQztBQUl2QixPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRixPQUFPLEVBQUUsV0FBVyxFQUFlLE1BQU0sdUJBQXVCLENBQUM7QUFDakUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7OztBQU8zRCxNQUFNLE9BQU8sZ0JBQWdCO0lBaUkzQixZQUE2QixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBckgvQzs7V0FFRztRQUNhLFdBQU0sR0FBVyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUUxRDs7V0FFRztRQUNhLHNCQUFpQixHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUM7UUFFeEU7OztXQUdHO1FBQ2Esd0JBQW1CLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQztRQVE1RTs7O1dBR0c7UUFDYSxzQkFBaUIsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDO1FBRXhFOzs7V0FHRztRQUNhLGlCQUFZLEdBQVcsUUFBUSxD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QU07c0JBQXJCLEtBQUs7Z0JBOEJjLGlCQUFpQjtzQkFBcEMsS0FBSztnQkFrSkMsY0FBYztzQkFEcEIsWUFBWTt1QkFBQyxlQUFlO2dCQWF0QixZQUFZO3NCQURsQixZQUFZO3VCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgUXVlcnlMaXN0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBBZnRlclZpZXdJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyByeFxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBmaXJzdCwgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTmcyRHJvcGRvd24sIE5nMk1lbnVJdGVtIH0gZnJvbSAnbmcyLW1hdGVyaWFsLWRyb3Bkb3duJztcbmltcG9ydCB7IGRlZmF1bHRzIH0gZnJvbSAnLi4vLi4vZGVmYXVsdHMnO1xuaW1wb3J0IHsgVGFnSW5wdXRDb21wb25lbnQgfSBmcm9tICcuLi90YWctaW5wdXQvdGFnLWlucHV0JztcbmltcG9ydCB7VGFnTW9kZWx9IGZyb20gJy4uLy4uL2NvcmUvdGFnLW1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFnLWlucHV0LWRyb3Bkb3duJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhZy1pbnB1dC1kcm9wZG93bi50ZW1wbGF0ZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUYWdJbnB1dERyb3Bkb3duIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIC8qKlxuICAgKiBAbmFtZSBkcm9wZG93blxuICAgKi9cbiAgQFZpZXdDaGlsZChOZzJEcm9wZG93bikgcHVibGljIGRyb3Bkb3duOiBOZzJEcm9wZG93bjtcblxuICAvKipcbiAgICogQG5hbWUgbWVudVRlbXBsYXRlXG4gICAqIEBkZXNjIHJlZmVyZW5jZSB0byB0aGUgdGVtcGxhdGUgaWYgcHJvdmlkZWQgYnkgdGhlIHVzZXJcbiAgICovXG4gIEBDb250ZW50Q2hpbGRyZW4oVGVtcGxhdGVSZWYpIHB1YmxpYyB0ZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAvKipcbiAgICogQG5hbWUgb2Zmc2V0XG4gICAqL1xuICBASW5wdXQoKSBwdWJsaWMgb2Zmc2V0OiBzdHJpbmcgPSBkZWZhdWx0cy5kcm9wZG93bi5vZmZzZXQ7XG5cbiAgLyoqXG4gICAqIEBuYW1lIGZvY3VzRmlyc3RFbGVtZW50XG4gICAqL1xuICBASW5wdXQoKSBwdWJsaWMgZm9jdXNGaXJzdEVsZW1lbnQgPSBkZWZhdWx0cy5kcm9wZG93bi5mb2N1c0ZpcnN0RWxlbWVudDtcblxuICAvKipcbiAgICogLSBzaG93IGF1dG9jb21wbGV0ZSBkcm9wZG93biBpZiB0aGUgdmFsdWUgb2YgaW5wdXQgaXMgZW1wdHlcbiAgICogQG5hbWUgc2hvd0Ryb3Bkb3duSWZFbXB0eVxuICAgKi9cbiAgQElucHV0KCkgcHVibGljIHNob3dEcm9wZG93bklmRW1wdHkgPSBkZWZhdWx0cy5kcm9wZG93bi5zaG93RHJvcGRvd25JZkVtcHR5O1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gb2JzZXJ2YWJsZSBwYXNzZWQgYXMgaW5wdXQgd2hpY2ggcG9wdWxhdGVzIHRoZSBhdXRvY29tcGxldGUgaXRlbXNcbiAgICogQG5hbWUgYXV0b2NvbXBsZXRlT2JzZXJ2YWJsZVxuICAgKi9cbiAgQElucHV0KCkgcHVibGljIGF1dG9jb21wbGV0ZU9ic2VydmFibGU6ICh0ZXh0OiBzdHJpbmcpID0+IE9ic2VydmFibGU8YW55PjtcblxuICAvKipcbiAgICogLSBkZXNjIG1pbmltdW0gdGV4dCBsZW5ndGggaW4gb3JkZXIgdG8gZGlzcGxheSB0aGUgYXV0b2NvbXBsZXRlIGRyb3Bkb3duXG4gICAqIEBuYW1lIG1pbmltdW1UZXh0TGVuZ3RoXG4gICAqL1xuICBASW5wdXQoKSBwdWJsaWMgbWluaW11bVRleHRMZW5ndGggPSBkZWZhdWx0cy5kcm9wZG93bi5taW5pbXVtVGV4dExlbmd0aDtcblxuICAvKipcbiAgICogLSBudW1iZXIgb2YgaXRlbXMgdG8gZGlzcGxheSBpbiB0aGUgYXV0b2NvbXBsZXRlIGRyb3Bkb3duXG4gICAqIEBuYW1lIGxpbWl0SXRlbXNUb1xuICAgKi9cbiAgQElucHV0KCkgcHVibGljIGxpbWl0SXRlbXNUbzogbnVtYmVyID0gZGVmYXVsdHMuZHJvcGRvd24ubGltaXRJdGVtc1RvO1xuXG4gIC8qKlxuICAgKiBAbmFtZSBkaXNwbGF5QnlcbiAgICovXG4gIEBJbnB1dCgpIHB1YmxpYyBkaXNwbGF5QnkgPSBkZWZhdWx0cy5kcm9wZG93bi5kaXNwbGF5Qnk7XG5cbiAgLyoqXG4gICAqIEBuYW1lIGlkZW50aWZ5QnlcbiAgICovXG4gIEBJbnB1dCgpIHB1YmxpYyBpZGVudGlmeUJ5ID0gZGVmYXVsdHMuZHJvcGRvd24uaWRlbnRpZnlCeTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIGEgZnVuY3Rpb24gYSBkZXZlbG9wZXIgY2FuIHVzZSB0byBpbXBsZW1lbnQgY3VzdG9tIG1hdGNoaW5nIGZvciB0aGUgYXV0b2NvbXBsZXRlXG4gICAqIEBuYW1lIG1hdGNoaW5nRm5cbiAgICovXG4gIEBJbnB1dCgpIHB1YmxpYyBtYXRjaGluZ0ZuOiAodmFsdWU6IHN0cmluZywgdGFyZ2V0OiBUYWdNb2RlbCkgPT4gYm9vbGVhbiA9XG4gICAgZGVmYXVsdHMuZHJvcGRvd24ubWF0Y2hpbmdGbjtcblxuICAvKipcbiAgICogQG5hbWUgYXBwZW5kVG9Cb2R5XG4gICAqL1xuICBASW5wdXQoKSBwdWJsaWMgYXBwZW5kVG9Cb2R5ID0gZGVmYXVsdHMuZHJvcGRvd24uYXBwZW5kVG9Cb2R5O1xuXG4gIC8qKlxuICAgKiBAbmFtZSBrZWVwT3BlblxuICAgKiBAZGVzY3JpcHRpb24gb3B0aW9uIHRvIGxlYXZlIGRyb3Bkb3duIG9wZW4gd2hlbiBhZGRpbmcgYSBuZXcgaXRlbVxuICAgKi9cbiAgQElucHV0KCkgcHVibGljIGtlZXBPcGVuID0gZGVmYXVsdHMuZHJvcGRvd24ua2VlcE9wZW47XG5cbiAgLyoqXG4gICAqIEBuYW1lIGR5bmFtaWNVcGRhdGVcbiAgICovXG4gIEBJbnB1dCgpIHB1YmxpYyBkeW5hbWljVXBkYXRlID0gZGVmYXVsdHMuZHJvcGRvd24uZHluYW1pY1VwZGF0ZTtcblxuICAvKipcbiAgICogQG5hbWUgekluZGV4XG4gICAqL1xuICBASW5wdXQoKSBwdWJsaWMgekluZGV4ID0gZGVmYXVsdHMuZHJvcGRvd24uekluZGV4O1xuXG4gIC8qKlxuICAgKiBsaXN0IG9mIGl0ZW1zIHRoYXQgbWF0Y2ggdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGlucHV0IChmb3IgYXV0b2NvbXBsZXRlKVxuICAgKiBAbmFtZSBpdGVtc1xuICAgKi9cbiAgcHVibGljIGl0ZW1zOiBUYWdNb2RlbFtdID0gW107XG5cbiAgLyoqXG4gICAqIEBuYW1lIHRhZ0lucHV0XG4gICAqL1xuICBwdWJsaWMgdGFnSW5wdXQ6IFRhZ0lucHV0Q29tcG9uZW50ID0gdGhpcy5pbmplY3Rvci5nZXQoVGFnSW5wdXRDb21wb25lbnQpO1xuXG4gIC8qKlxuICAgKiBAbmFtZSBfYXV0b2NvbXBsZXRlSXRlbXNcbiAgICovXG4gIHByaXZhdGUgX2F1dG9jb21wbGV0ZUl0ZW1zOiBUYWdNb2RlbFtdID0gW107XG5cbiAgLyoqXG4gICAqIEBuYW1lIGF1dG9jb21wbGV0ZUl0ZW1zXG4gICAqIEBwYXJhbSBpdGVtc1xuICAgKi9cbiAgcHVibGljIHNldCBhdXRvY29tcGxldGVJdGVtcyhpdGVtczogVGFnTW9kZWxbXSkge1xuICAgIHRoaXMuX2F1dG9jb21wbGV0ZUl0ZW1zID0gaXRlbXM7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgYXV0b2NvbXBsZXRlSXRlbXNcbiAgICogQGRlc2MgYXJyYXkgb2YgaXRlbXMgdGhhdCB3aWxsIHBvcHVsYXRlIHRoZSBhdXRvY29tcGxldGVcbiAgICovXG4gIEBJbnB1dCgpIHB1YmxpYyBnZXQgYXV0b2NvbXBsZXRlSXRlbXMoKTogVGFnTW9kZWxbXSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLl9hdXRvY29tcGxldGVJdGVtcztcblxuICAgIGlmICghaXRlbXMpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbXMubWFwKChpdGVtOiBUYWdNb2RlbCkgPT4ge1xuICAgICAgcmV0dXJuIHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJ1xuICAgICAgICA/IHtcbiAgICAgICAgICAgIFt0aGlzLmRpc3BsYXlCeV06IGl0ZW0sXG4gICAgICAgICAgICBbdGhpcy5pZGVudGlmeUJ5XTogaXRlbVxuICAgICAgICAgIH1cbiAgICAgICAgOiBpdGVtO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IpIHt9XG5cbiAgLyoqXG4gICAqIEBuYW1lIG5nQWZ0ZXJ2aWV3SW5pdFxuICAgKi9cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMub25JdGVtQ2xpY2tlZCgpLnN1YnNjcmliZSgoaXRlbTogTmcyTWVudUl0ZW0pID0+IHtcbiAgICAgIHRoaXMucmVxdWVzdEFkZGluZyhpdGVtKTtcbiAgICB9KTtcblxuICAgIC8vIHJlc2V0IGl0ZW1zTWF0Y2hpbmcgYXJyYXkgd2hlbiB0aGUgZHJvcGRvd24gaXMgaGlkZGVuXG4gICAgdGhpcy5vbkhpZGUoKS5zdWJzY3JpYmUodGhpcy5yZXNldEl0ZW1zKTtcblxuICAgIGNvbnN0IERFQk9VTkNFX1RJTUUgPSAyMDA7XG4gICAgY29uc3QgS0VFUF9PUEVOID0gdGhpcy5rZWVwT3BlbjtcblxuICAgIHRoaXMudGFnSW5wdXQub25UZXh0Q2hhbmdlXG4gICAgICAuYXNPYnNlcnZhYmxlKClcbiAgICAgIC5waXBlKFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICBkZWJvdW5jZVRpbWUoREVCT1VOQ0VfVElNRSksXG4gICAgICAgIGZpbHRlcigodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgIGlmIChLRUVQX09QRU4gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUodGhpcy5zaG93KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSB1cGRhdGVQb3NpdGlvblxuICAgKi9cbiAgcHVibGljIHVwZGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy50YWdJbnB1dC5pbnB1dEZvcm0uZ2V0RWxlbWVudFBvc2l0aW9uKCk7XG5cbiAgICB0aGlzLmRyb3Bkb3duLm1lbnUudXBkYXRlUG9zaXRpb24ocG9zaXRpb24sIHRoaXMuZHluYW1pY1VwZGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgaXNWaXNpYmxlXG4gICAqL1xuICBwdWJsaWMgZ2V0IGlzVmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kcm9wZG93bi5tZW51LmRyb3Bkb3duU3RhdGUubWVudVN0YXRlLmlzVmlzaWJsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbkhpZGVcbiAgICovXG4gIHB1YmxpYyBvbkhpZGUoKTogRXZlbnRFbWl0dGVyPE5nMkRyb3Bkb3duPiB7XG4gICAgcmV0dXJuIHRoaXMuZHJvcGRvd24ub25IaWRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uSXRlbUNsaWNrZWRcbiAgICovXG4gIHB1YmxpYyBvbkl0ZW1DbGlja2VkKCkge1xuICAgIHJldHVybiB0aGlzLmRyb3Bkb3duLm9uSXRlbUNsaWNrZWQ7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc2VsZWN0ZWRJdGVtXG4gICAqL1xuICBwdWJsaWMgZ2V0IHNlbGVjdGVkSXRlbSgpOiBOZzJNZW51SXRlbSB7XG4gICAgcmV0dXJuIHRoaXMuZHJvcGRvd24ubWVudS5kcm9wZG93blN0YXRlLmRyb3Bkb3duU3RhdGUuc2VsZWN0ZWRJdGVtO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHN0YXRlXG4gICAqL1xuICBwdWJsaWMgZ2V0IHN0YXRlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuZHJvcGRvd24ubWVudS5kcm9wZG93blN0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBuYW1lIHNob3dcbiAgICovXG4gIHB1YmxpYyBzaG93ID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IG1heEl0ZW1zUmVhY2hlZCA9XG4gICAgICB0aGlzLnRhZ0lucHV0Lml0ZW1zLmxlbmd0aCA9PT0gdGhpcy50YWdJbnB1dC5tYXhJdGVtcztcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0Rm9ybVZhbHVlKCk7XG4gICAgY29uc3QgaGFzTWluaW11bVRleHQgPSB2YWx1ZS50cmltKCkubGVuZ3RoID49IHRoaXMubWluaW11bVRleHRMZW5ndGg7XG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmNhbGN1bGF0ZVBvc2l0aW9uKCk7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmdldE1hdGNoaW5nSXRlbXModmFsdWUpO1xuICAgIGNvbnN0IGhhc0l0ZW1zID0gaXRlbXMubGVuZ3RoID4gMDtcbiAgICBjb25zdCBpc0hpZGRlbiA9IHRoaXMuaXNWaXNpYmxlID09PSBmYWxzZTtcbiAgICBjb25zdCBzaG93RHJvcGRvd25JZkVtcHR5ID0gdGhpcy5zaG93RHJvcGRvd25JZkVtcHR5ICYmIGhhc0l0ZW1zICYmICF2YWx1ZTtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gdGhpcy50YWdJbnB1dC5kaXNhYmxlO1xuXG4gICAgY29uc3Qgc2hvdWxkU2hvdyA9XG4gICAgICBpc0hpZGRlbiAmJiAoKGhhc0l0ZW1zICYmIGhhc01pbmltdW1UZXh0KSB8fCBzaG93RHJvcGRvd25JZkVtcHR5KTtcbiAgICBjb25zdCBzaG91bGRIaWRlID0gdGhpcy5pc1Zpc2libGUgJiYgIWhhc0l0ZW1zO1xuXG4gICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlT2JzZXJ2YWJsZSAmJiBoYXNNaW5pbXVtVGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0SXRlbXNGcm9tT2JzZXJ2YWJsZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgKCF0aGlzLnNob3dEcm9wZG93bklmRW1wdHkgJiYgIXZhbHVlKSB8fFxuICAgICAgbWF4SXRlbXNSZWFjaGVkIHx8XG4gICAgICBpc0Rpc2FibGVkXG4gICAgKSB7XG4gICAgICByZXR1cm4gdGhpcy5kcm9wZG93bi5oaWRlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRJdGVtcyhpdGVtcyk7XG5cbiAgICBpZiAoc2hvdWxkU2hvdykge1xuICAgICAgdGhpcy5kcm9wZG93bi5zaG93KHBvc2l0aW9uKTtcbiAgICB9IGVsc2UgaWYgKHNob3VsZEhpZGUpIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQG5hbWUgaGlkZVxuICAgKi9cbiAgcHVibGljIGhpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5yZXNldEl0ZW1zKCk7XG4gICAgdGhpcy5kcm9wZG93bi5oaWRlKCk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc2Nyb2xsTGlzdGVuZXJcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpzY3JvbGwnKVxuICBwdWJsaWMgc2Nyb2xsTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzVmlzaWJsZSB8fCAhdGhpcy5keW5hbWljVXBkYXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uV2luZG93Qmx1clxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmJsdXInKVxuICBwdWJsaWMgb25XaW5kb3dCbHVyKCk6IHZvaWQge1xuICAgIHRoaXMuZHJvcGRvd24uaGlkZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGdldEZvcm1WYWx1ZVxuICAgKi9cbiAgcHJpdmF0ZSBnZXRGb3JtVmFsdWUoKTogc3RyaW5nIHtcbiAgICBjb25zdCBmb3JtVmFsdWUgPSB0aGlzLnRhZ0lucHV0LmZvcm1WYWx1ZTtcbiAgICByZXR1cm4gZm9ybVZhbHVlID8gZm9ybVZhbHVlLnRvU3RyaW5nKCkudHJpbSgpIDogJyc7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgY2FsY3VsYXRlUG9zaXRpb25cbiAgICovXG4gIHByaXZhdGUgY2FsY3VsYXRlUG9zaXRpb24oKTogQ2xpZW50UmVjdCB7XG4gICAgcmV0dXJuIHRoaXMudGFnSW5wdXQuaW5wdXRGb3JtLmdldEVsZW1lbnRQb3NpdGlvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHJlcXVlc3RBZGRpbmdcbiAgICogQHBhcmFtIGl0ZW0ge05nMk1lbnVJdGVtfVxuICAgKi9cbiAgcHJpdmF0ZSByZXF1ZXN0QWRkaW5nID0gYXN5bmMgKGl0ZW06IE5nMk1lbnVJdGVtKSA9PiB7XG4gICAgY29uc3QgdGFnID0gdGhpcy5jcmVhdGVUYWdNb2RlbChpdGVtKTtcbiAgICBhd2FpdCB0aGlzLnRhZ0lucHV0Lm9uQWRkaW5nUmVxdWVzdGVkKHRydWUsIHRhZykuY2F0Y2goKCkgPT4ge30pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbmFtZSBjcmVhdGVUYWdNb2RlbFxuICAgKiBAcGFyYW0gaXRlbVxuICAgKi9cbiAgcHJpdmF0ZSBjcmVhdGVUYWdNb2RlbChpdGVtOiBOZzJNZW51SXRlbSk6IFRhZ01vZGVsIHtcbiAgICBjb25zdCBkaXNwbGF5ID1cbiAgICAgIHR5cGVvZiBpdGVtLnZhbHVlID09PSAnc3RyaW5nJyA/IGl0ZW0udmFsdWUgOiBpdGVtLnZhbHVlW3RoaXMuZGlzcGxheUJ5XTtcbiAgICBjb25zdCB2YWx1ZSA9XG4gICAgICB0eXBlb2YgaXRlbS52YWx1ZSA9PT0gJ3N0cmluZycgPyBpdGVtLnZhbHVlIDogaXRlbS52YWx1ZVt0aGlzLmlkZW50aWZ5QnldO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLml0ZW0udmFsdWUsXG4gICAgICBbdGhpcy50YWdJbnB1dC5kaXNwbGF5QnldOiBkaXNwbGF5LFxuICAgICAgW3RoaXMudGFnSW5wdXQuaWRlbnRpZnlCeV06IHZhbHVlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWUge3N0cmluZ31cbiAgICovXG4gIHByaXZhdGUgZ2V0TWF0Y2hpbmdJdGVtcyh2YWx1ZTogc3RyaW5nKTogVGFnTW9kZWxbXSB7XG4gICAgaWYgKCF2YWx1ZSAmJiAhdGhpcy5zaG93RHJvcGRvd25JZkVtcHR5KSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgZHVwZXNBbGxvd2VkID0gdGhpcy50YWdJbnB1dC5hbGxvd0R1cGVzO1xuXG4gICAgcmV0dXJuIHRoaXMuYXV0b2NvbXBsZXRlSXRlbXMuZmlsdGVyKChpdGVtOiBUYWdNb2RlbCkgPT4ge1xuICAgICAgY29uc3QgaGFzVmFsdWUgPSBkdXBlc0FsbG93ZWRcbiAgICAgICAgPyBmYWxzZVxuICAgICAgICA6IHRoaXMudGFnSW5wdXQudGFncy5zb21lKHRhZyA9PiB7XG4gICAgICAgICAgICBjb25zdCBpZGVudGlmeUJ5ID0gdGhpcy50YWdJbnB1dC5pZGVudGlmeUJ5O1xuICAgICAgICAgICAgY29uc3QgbW9kZWwgPVxuICAgICAgICAgICAgICB0eXBlb2YgdGFnLm1vZGVsID09PSAnc3RyaW5nJyA/IHRhZy5tb2RlbCA6IHRhZy5tb2RlbFtpZGVudGlmeUJ5XTtcblxuICAgICAgICAgICAgcmV0dXJuIG1vZGVsID09PSBpdGVtW3RoaXMuaWRlbnRpZnlCeV07XG4gICAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB0aGlzLm1hdGNoaW5nRm4odmFsdWUsIGl0ZW0pICYmIGhhc1ZhbHVlID09PSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzZXRJdGVtc1xuICAgKi9cbiAgcHJpdmF0ZSBzZXRJdGVtcyhpdGVtczogVGFnTW9kZWxbXSk6IHZvaWQge1xuICAgIHRoaXMuaXRlbXMgPSBpdGVtcy5zbGljZSgwLCB0aGlzLmxpbWl0SXRlbXNUbyB8fCBpdGVtcy5sZW5ndGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHJlc2V0SXRlbXNcbiAgICovXG4gIHByaXZhdGUgcmVzZXRJdGVtcyA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gIH07XG5cbiAgLyoqXG4gICAqIEBuYW1lIHBvcHVsYXRlSXRlbXNcbiAgICogQHBhcmFtIGRhdGFcbiAgICovXG4gIHByaXZhdGUgcG9wdWxhdGVJdGVtcyhkYXRhOiBhbnkpOiBUYWdJbnB1dERyb3Bkb3duIHtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZUl0ZW1zID0gZGF0YS5tYXAoaXRlbSA9PiB7XG4gICAgICByZXR1cm4gdHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnXG4gICAgICAgID8ge1xuICAgICAgICAgICAgW3RoaXMuZGlzcGxheUJ5XTogaXRlbSxcbiAgICAgICAgICAgIFt0aGlzLmlkZW50aWZ5QnldOiBpdGVtXG4gICAgICAgICAgfVxuICAgICAgICA6IGl0ZW07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBnZXRJdGVtc0Zyb21PYnNlcnZhYmxlXG4gICAqIEBwYXJhbSB0ZXh0XG4gICAqL1xuICBwcml2YXRlIGdldEl0ZW1zRnJvbU9ic2VydmFibGUgPSAodGV4dDogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgdGhpcy5zZXRMb2FkaW5nU3RhdGUodHJ1ZSk7XG5cbiAgICBjb25zdCBzdWJzY3JpYmVGbiA9IChkYXRhOiBhbnlbXSkgPT4ge1xuICAgICAgLy8gaGlkZSBsb2FkaW5nIGFuaW1hdGlvblxuICAgICAgdGhpcy5zZXRMb2FkaW5nU3RhdGUoZmFsc2UpXG4gICAgICAgIC8vIGFkZCBpdGVtc1xuICAgICAgICAucG9wdWxhdGVJdGVtcyhkYXRhKTtcblxuICAgICAgdGhpcy5zZXRJdGVtcyh0aGlzLmdldE1hdGNoaW5nSXRlbXModGV4dCkpO1xuXG4gICAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5kcm9wZG93bi5zaG93KHRoaXMuY2FsY3VsYXRlUG9zaXRpb24oKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRyb3Bkb3duLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5hdXRvY29tcGxldGVPYnNlcnZhYmxlKHRleHQpXG4gICAgICAucGlwZShmaXJzdCgpKVxuICAgICAgLnN1YnNjcmliZShzdWJzY3JpYmVGbiwgKCkgPT4gdGhpcy5zZXRMb2FkaW5nU3RhdGUoZmFsc2UpKTtcbiAgfTtcblxuICAvKipcbiAgICogQG5hbWUgc2V0TG9hZGluZ1N0YXRlXG4gICAqIEBwYXJhbSBzdGF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBzZXRMb2FkaW5nU3RhdGUoc3RhdGU6IGJvb2xlYW4pOiBUYWdJbnB1dERyb3Bkb3duIHtcbiAgICB0aGlzLnRhZ0lucHV0LmlzTG9hZGluZyA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsIjxuZzItZHJvcGRvd24gW2R5bmFtaWNVcGRhdGVdPVwiZHluYW1pY1VwZGF0ZVwiPlxuICAgIDxuZzItZHJvcGRvd24tbWVudSBbZm9jdXNGaXJzdEVsZW1lbnRdPVwiZm9jdXNGaXJzdEVsZW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICBbekluZGV4XT1cInpJbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgIFthcHBlbmRUb0JvZHldPVwiYXBwZW5kVG9Cb2R5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgW29mZnNldF09XCJvZmZzZXRcIj5cbiAgICAgICAgPG5nMi1tZW51LWl0ZW0gKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXM7IGxldCBpbmRleCA9IGluZGV4OyBsZXQgbGFzdCA9IGxhc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwiaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgIFtuZ1N3aXRjaF09XCIhIXRlbXBsYXRlcy5sZW5ndGhcIj5cblxuICAgICAgICAgICAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgIFtpbm5lckhUTUxdPVwiaXRlbVtkaXNwbGF5QnldIHwgaGlnaGxpZ2h0IDogdGFnSW5wdXQuaW5wdXRGb3JtLnZhbHVlLnZhbHVlXCI+XG4gICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAqbmdTd2l0Y2hEZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwidGVtcGxhdGVzLmZpcnN0XCJcbiAgICAgICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyBpdGVtOiBpdGVtLCBpbmRleDogaW5kZXgsIGxhc3Q6IGxhc3QgfVwiPlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9uZzItbWVudS1pdGVtPlxuICAgIDwvbmcyLWRyb3Bkb3duLW1lbnU+XG48L25nMi1kcm9wZG93bj5cbiJdfQ==