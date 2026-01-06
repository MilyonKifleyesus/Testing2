import { Component, Input, Output, EventEmitter, HostListener, HostBinding, ViewChild } from '@angular/core';
import { TagRipple } from '../tag/tag-ripple.component';
import * as i0 from "@angular/core";
import * as i1 from "../icon/icon";
import * as i2 from "./tag-ripple.component";
import * as i3 from "@angular/common";
// mocking navigator
const navigator = typeof window !== 'undefined' ? window.navigator : {
    userAgent: 'Chrome',
    vendor: 'Google Inc'
};
const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
export class TagComponent {
    constructor(element, renderer, cdRef) {
        this.element = element;
        this.renderer = renderer;
        this.cdRef = cdRef;
        /**
         * @name disabled
         */
        this.disabled = false;
        /**
         * @name onSelect
         */
        this.onSelect = new EventEmitter();
        /**
         * @name onRemove
         */
        this.onRemove = new EventEmitter();
        /**
         * @name onBlur
         */
        this.onBlur = new EventEmitter();
        /**
         * @name onKeyDown
         */
        this.onKeyDown = new EventEmitter();
        /**
         * @name onTagEdited
         */
        this.onTagEdited = new EventEmitter();
        /**
         * @name editing
         */
        this.editing = false;
        /**
         * @name rippleState
         */
        this.rippleState = 'none';
    }
    /**
     * @name readonly {boolean}
     */
    get readonly() {
        return typeof this.model !== 'string' && this.model.readonly === true;
    }
    /**
     * @name select
     */
    select($event) {
        if (this.readonly || this.disabled) {
            return;
        }
        if ($event) {
            $event.stopPropagation();
        }
        this.focus();
        this.onSelect.emit(this.model);
    }
    /**
     * @name remove
     */
    remove($event) {
        $event.stopPropagation();
        this.onRemove.emit(this);
    }
    /**
     * @name focus
     */
    focus() {
        this.element.nativeElement.focus();
    }
    move() {
        this.moving = true;
    }
    /**
     * @name keydown
     * @param event
     */
    keydown(event) {
        if (this.editing) {
            if (event.keyCode === 13) {
                return this.disableEditMode(event);
            }
        }
        else {
            this.onKeyDown.emit({ event, model: this.model });
        }
    }
    /**
     * @name blink
     */
    blink() {
        const classList = this.element.nativeElement.classList;
        classList.add('blink');
        setTimeout(() => classList.remove('blink'), 50);
    }
    /**
     * @name toggleEditMode
     */
    toggleEditMode() {
        if (this.editable) {
            return this.editing ? undefined : this.activateEditMode();
        }
    }
    /**
     * @name onBlurred
     * @param event
     */
    onBlurred(event) {
        // Checks if it is editable first before handeling the onBlurred event in order to prevent
        // a bug in IE where tags are still editable with onlyFromAutocomplete set to true
        if (!this.editable) {
            return;
        }
        this.disableEditMode();
        const value = event.target.innerText;
        const result = typeof this.model === 'string'
            ? value
            : { ...this.model, [this.displayBy]: value };
        this.onBlur.emit(result);
    }
    /**
     * @name getDisplayValue
     * @param item
     */
    getDisplayValue(item) {
        return typeof item === 'string' ? item : item[this.displayBy];
    }
    /**
     * @desc returns whether the ripple is visible or not
     * only works in Chrome
     * @name isRippleVisible
     */
    get isRippleVisible() {
        return !this.readonly && !this.editing && isChrome && this.hasRipple;
    }
    /**
     * @name disableEditMode
     * @param $event
     */
    disableEditMode($event) {
        const classList = this.element.nativeElement.classList;
        const input = this.getContentEditableText();
        this.editing = false;
        classList.remove('tag--editing');
        if (!input) {
            this.setContentEditableText(this.model);
            return;
        }
        this.storeNewValue(input);
        this.cdRef.detectChanges();
        if ($event) {
            $event.preventDefault();
        }
    }
    /**
     * @name isDeleteIconVisible
     */
    isDeleteIconVisible() {
        return (!this.readonly && !this.disabled && this.removable && !this.editing);
    }
    /**
     * @name getContentEditableText
     */
    getContentEditableText() {
        const input = this.getContentEditable();
        return input ? input.innerText.trim() : '';
    }
    /**
     * @name setContentEditableText
     * @param model
     */
    setContentEditableText(model) {
        const input = this.getContentEditable();
        const value = this.getDisplayValue(model);
        input.innerText = value;
    }
    /**
     * @name
     */
    activateEditMode() {
        const classList = this.element.nativeElement.classList;
        classList.add('tag--editing');
        this.editing = true;
    }
    /**
     * @name storeNewValue
     * @param input
     */
    storeNewValue(input) {
        const exists = (tag) => {
            return typeof tag === 'string'
                ? tag === input
                : tag[this.displayBy] === input;
        };
        const hasId = () => {
            return this.model[this.identifyBy] !== this.model[this.displayBy];
        };
        // if the value changed, replace the value in the model
        if (exists(this.model)) {
            return;
        }
        const model = typeof this.model === 'string'
            ? input
            : {
                index: this.index,
                [this.identifyBy]: hasId()
                    ? this.model[this.identifyBy]
                    : input,
                [this.displayBy]: input
            };
        if (this.canAddTag(model)) {
            this.onTagEdited.emit({ tag: model, index: this.index });
        }
        else {
            this.setContentEditableText(this.model);
        }
    }
    /**
     * @name getContentEditable
     */
    getContentEditable() {
        return this.element.nativeElement.querySelector('[contenteditable]');
    }
}
TagComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TagComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
TagComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: TagComponent, selector: "tag", inputs: { model: "model", removable: "removable", editable: "editable", template: "template", displayBy: "displayBy", identifyBy: "identifyBy", index: "index", hasRipple: "hasRipple", disabled: "disabled", canAddTag: "canAddTag" }, outputs: { onSelect: "onSelect", onRemove: "onRemove", onBlur: "onBlur", onKeyDown: "onKeyDown", onTagEdited: "onTagEdited" }, host: { listeners: { "keydown": "keydown($event)" }, properties: { "class.moving": "this.moving" } }, viewQueries: [{ propertyName: "ripple", first: true, predicate: TagRipple, descendants: true }], ngImport: i0, template: "<div (click)=\"select($event)\"\n     (dblclick)=\"toggleEditMode()\"\n     (mousedown)=\"rippleState='clicked'\"\n     (mouseup)=\"rippleState='none'\"\n     [ngSwitch]=\"!!template\"\n     [class.disabled]=\"disabled\"\n     [attr.tabindex]=\"-1\"\n     [attr.aria-label]=\"getDisplayValue(model)\">\n\n    <div *ngSwitchCase=\"true\" [attr.contenteditable]=\"editing\">\n        <!-- CUSTOM TEMPLATE -->\n        <ng-template\n            [ngTemplateOutletContext]=\"{ item: model, index: index }\"\n            [ngTemplateOutlet]=\"template\">\n        </ng-template>\n    </div>\n\n    <div *ngSwitchCase=\"false\" class=\"tag-wrapper\">\n        <!-- TAG NAME -->\n        <div [attr.contenteditable]=\"editing\"\n             [attr.title]=\"getDisplayValue(model)\"\n             class=\"tag__text inline\"\n             spellcheck=\"false\"\n             (keydown.enter)=\"disableEditMode($event)\"\n             (keydown.escape)=\"disableEditMode($event)\"\n             (click)=\"editing ? $event.stopPropagation() : undefined\"\n             (blur)=\"onBlurred($event)\">\n            {{ getDisplayValue(model) }}\n        </div>\n\n        <!-- 'X' BUTTON -->\n        <delete-icon\n            aria-label=\"Remove tag\"\n            role=\"button\"\n            (click)=\"remove($event)\"\n            *ngIf=\"isDeleteIconVisible()\">\n        </delete-icon>\n    </div>\n</div>\n\n<tag-ripple [state]=\"rippleState\"\n            [attr.tabindex]=\"-1\"\n            *ngIf=\"isRippleVisible\">\n</tag-ripple>\n", styles: [":host,:host>div,:host>div:focus{outline:0;overflow:hidden;transition:opacity 1s;z-index:1}:host{max-width:400px}:host.blink{-webkit-animation:blink .3s normal forwards ease-in-out;animation:blink .3s normal forwards ease-in-out}@-webkit-keyframes blink{0%{opacity:.3}}@keyframes blink{0%{opacity:.3}}:host .disabled{cursor:not-allowed}:host [contenteditable=true]{outline:0}.tag-wrapper{flex-direction:row;display:flex}.tag__text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n"], components: [{ type: i1.DeleteIconComponent, selector: "delete-icon" }, { type: i2.TagRipple, selector: "tag-ripple", inputs: ["state"] }], directives: [{ type: i3.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i3.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i3.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TagComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tag', template: "<div (click)=\"select($event)\"\n     (dblclick)=\"toggleEditMode()\"\n     (mousedown)=\"rippleState='clicked'\"\n     (mouseup)=\"rippleState='none'\"\n     [ngSwitch]=\"!!template\"\n     [class.disabled]=\"disabled\"\n     [attr.tabindex]=\"-1\"\n     [attr.aria-label]=\"getDisplayValue(model)\">\n\n    <div *ngSwitchCase=\"true\" [attr.contenteditable]=\"editing\">\n        <!-- CUSTOM TEMPLATE -->\n        <ng-template\n            [ngTemplateOutletContext]=\"{ item: model, index: index }\"\n            [ngTemplateOutlet]=\"template\">\n        </ng-template>\n    </div>\n\n    <div *ngSwitchCase=\"false\" class=\"tag-wrapper\">\n        <!-- TAG NAME -->\n        <div [attr.contenteditable]=\"editing\"\n             [attr.title]=\"getDisplayValue(model)\"\n             class=\"tag__text inline\"\n             spellcheck=\"false\"\n             (keydown.enter)=\"disableEditMode($event)\"\n             (keydown.escape)=\"disableEditMode($event)\"\n             (click)=\"editing ? $event.stopPropagation() : undefined\"\n             (blur)=\"onBlurred($event)\">\n            {{ getDisplayValue(model) }}\n        </div>\n\n        <!-- 'X' BUTTON -->\n        <delete-icon\n            aria-label=\"Remove tag\"\n            role=\"button\"\n            (click)=\"remove($event)\"\n            *ngIf=\"isDeleteIconVisible()\">\n        </delete-icon>\n    </div>\n</div>\n\n<tag-ripple [state]=\"rippleState\"\n            [attr.tabindex]=\"-1\"\n            *ngIf=\"isRippleVisible\">\n</tag-ripple>\n", styles: [":host,:host>div,:host>div:focus{outline:0;overflow:hidden;transition:opacity 1s;z-index:1}:host{max-width:400px}:host.blink{-webkit-animation:blink .3s normal forwards ease-in-out;animation:blink .3s normal forwards ease-in-out}@-webkit-keyframes blink{0%{opacity:.3}}@keyframes blink{0%{opacity:.3}}:host .disabled{cursor:not-allowed}:host [contenteditable=true]{outline:0}.tag-wrapper{flex-direction:row;display:flex}.tag__text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { model: [{
                type: Input
            }], removable: [{
                type: Input
            }], editable: [{
                type: Input
            }], template: [{
                type: Input
            }], displayBy: [{
                type: Input
            }], identifyBy: [{
                type: Input
            }], index: [{
                type: Input
            }], hasRipple: [{
                type: Input
            }], disabled: [{
                type: Input
            }], canAddTag: [{
                type: Input
            }], onSelect: [{
                type: Output
            }], onRemove: [{
                type: Output
            }], onBlur: [{
                type: Output
            }], onKeyDown: [{
                type: Output
            }], onTagEdited: [{
                type: Output
            }], moving: [{
                type: HostBinding,
                args: ['class.moving']
            }], ripple: [{
                type: ViewChild,
                args: [TagRipple]
            }], keydown: [{
                type: HostListener,
                args: ['keydown', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vZHVsZXMvY29tcG9uZW50cy90YWcvdGFnLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL21vZHVsZXMvY29tcG9uZW50cy90YWcvdGFnLnRlbXBsYXRlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFHWixZQUFZLEVBQ1osV0FBVyxFQUNYLFNBQVMsRUFHWixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7O0FBRXhELG9CQUFvQjtBQUNwQixNQUFNLFNBQVMsR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLFNBQVMsRUFBRSxRQUFRO0lBQ25CLE1BQU0sRUFBRSxZQUFZO0NBQ3ZCLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQU8zRixNQUFNLE9BQU8sWUFBWTtJQXdIckIsWUFDVyxPQUFtQixFQUNuQixRQUFtQixFQUNsQixLQUF3QjtRQUZ6QixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUExRXBDOztXQUVHO1FBRUksYUFBUSxHQUFHLEtBQUssQ0FBQztRQVF4Qjs7V0FFRztRQUVJLGFBQVEsR0FBMkIsSUFBSSxZQUFZLEVBQVksQ0FBQztRQUV2RTs7V0FFRztRQUVJLGFBQVEsR0FBMkIsSUFBSSxZQUFZLEVBQVksQ0FBQztRQUV2RTs7V0FFRztRQUVJ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QkFEZixLQUFLO2dCQU9DLFFBQVE7c0JBRGQsS0FBSztnQkFPQyxRQUFRO3NCQURkLEtBQUs7Z0JBT0MsU0FBUztzQkFEZixLQUFLO2dCQU9DLFVBQVU7c0JBRGhCLEtBQUs7Z0JBT0MsS0FBSztzQkFEWCxLQUFLO2dCQU9DLFNBQVM7c0JBRGYsS0FBSztnQkFPQyxRQUFRO3NCQURkLEtBQUs7Z0JBT0MsU0FBUztzQkFEZixLQUFLO2dCQU9DLFFBQVE7c0JBRGQsTUFBTTtnQkFPQSxRQUFRO3NCQURkLE1BQU07Z0JBT0EsTUFBTTtzQkFEWixNQUFNO2dCQU9BLFNBQVM7c0JBRGYsTUFBTTtnQkFPQSxXQUFXO3NCQURqQixNQUFNO2dCQW1CQSxNQUFNO3NCQURaLFdBQVc7dUJBQUMsY0FBYztnQkFZcEIsTUFBTTtzQkFEWixTQUFTO3VCQUFDLFNBQVM7Z0JBa0RiLE9BQU87c0JBRGIsWUFBWTt1QkFBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBJbnB1dCxcbiAgICBPdXRwdXQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIFRlbXBsYXRlUmVmLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSG9zdExpc3RlbmVyLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIFZpZXdDaGlsZCxcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRhZ01vZGVsIH0gZnJvbSAnLi4vLi4vY29yZS90YWctbW9kZWwnO1xuaW1wb3J0IHsgVGFnUmlwcGxlIH0gZnJvbSAnLi4vdGFnL3RhZy1yaXBwbGUuY29tcG9uZW50JztcblxuLy8gbW9ja2luZyBuYXZpZ2F0b3JcbmNvbnN0IG5hdmlnYXRvciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93Lm5hdmlnYXRvciA6IHtcbiAgICB1c2VyQWdlbnQ6ICdDaHJvbWUnLFxuICAgIHZlbmRvcjogJ0dvb2dsZSBJbmMnXG59O1xuXG5jb25zdCBpc0Nocm9tZSA9IC9DaHJvbWUvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgL0dvb2dsZSBJbmMvLnRlc3QobmF2aWdhdG9yLnZlbmRvcik7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndGFnJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGFnLnRlbXBsYXRlLmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3RhZy1jb21wb25lbnQuc3R5bGUuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRhZ0NvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogQG5hbWUgbW9kZWwge1RhZ01vZGVsfVxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1vZGVsOiBUYWdNb2RlbDtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHJlbW92YWJsZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyByZW1vdmFibGU6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBlZGl0YWJsZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBlZGl0YWJsZTogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHRlbXBsYXRlIHtUZW1wbGF0ZVJlZjxhbnk+fVxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZGlzcGxheUJ5IHtzdHJpbmd9XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZGlzcGxheUJ5OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBpZGVudGlmeUJ5IHtzdHJpbmd9XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaWRlbnRpZnlCeTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaW5kZXgge251bWJlcn1cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpbmRleDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaGFzUmlwcGxlXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaGFzUmlwcGxlOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZGlzYWJsZWRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgY2FuQWRkVGFnXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY2FuQWRkVGFnOiAodGFnOiBUYWdNb2RlbCkgPT4gYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uU2VsZWN0XG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uU2VsZWN0OiBFdmVudEVtaXR0ZXI8VGFnTW9kZWw+ID0gbmV3IEV2ZW50RW1pdHRlcjxUYWdNb2RlbD4oKTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uUmVtb3ZlXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uUmVtb3ZlOiBFdmVudEVtaXR0ZXI8VGFnTW9kZWw+ID0gbmV3IEV2ZW50RW1pdHRlcjxUYWdNb2RlbD4oKTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uQmx1clxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkJsdXI6IEV2ZW50RW1pdHRlcjxUYWdNb2RlbD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRhZ01vZGVsPigpO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25LZXlEb3duXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uS2V5RG93bjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uVGFnRWRpdGVkXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uVGFnRWRpdGVkOiBFdmVudEVtaXR0ZXI8VGFnTW9kZWw+ID0gbmV3IEV2ZW50RW1pdHRlcjxUYWdNb2RlbD4oKTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHJlYWRvbmx5IHtib29sZWFufVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgcmVhZG9ubHkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5tb2RlbCAhPT0gJ3N0cmluZycgJiYgdGhpcy5tb2RlbC5yZWFkb25seSA9PT0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBlZGl0aW5nXG4gICAgICovXG4gICAgcHVibGljIGVkaXRpbmcgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG1vdmluZ1xuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MubW92aW5nJylcbiAgICBwdWJsaWMgbW92aW5nOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgcmlwcGxlU3RhdGVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmlwcGxlU3RhdGUgPSAnbm9uZSc7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSByaXBwbGUge1RhZ1JpcHBsZX1cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKFRhZ1JpcHBsZSlcbiAgICBwdWJsaWMgcmlwcGxlOiBUYWdSaXBwbGU7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuICAgICkge31cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHNlbGVjdFxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3QoJGV2ZW50PzogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5yZWFkb25seSB8fCB0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZvY3VzKCk7XG5cbiAgICAgICAgdGhpcy5vblNlbGVjdC5lbWl0KHRoaXMubW9kZWwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHJlbW92ZVxuICAgICAqL1xuICAgIHB1YmxpYyByZW1vdmUoJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5vblJlbW92ZS5lbWl0KHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGZvY3VzXG4gICAgICovXG4gICAgcHVibGljIGZvY3VzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBtb3ZlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1vdmluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUga2V5ZG93blxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBrZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmVkaXRpbmcpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRpc2FibGVFZGl0TW9kZShldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uS2V5RG93bi5lbWl0KHsgZXZlbnQsIG1vZGVsOiB0aGlzLm1vZGVsIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgYmxpbmtcbiAgICAgKi9cbiAgICBwdWJsaWMgYmxpbmsoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNsYXNzTGlzdCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdDtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgnYmxpbmsnKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGNsYXNzTGlzdC5yZW1vdmUoJ2JsaW5rJyksIDUwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSB0b2dnbGVFZGl0TW9kZVxuICAgICAqL1xuICAgIHB1YmxpYyB0b2dnbGVFZGl0TW9kZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZWRpdGFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVkaXRpbmcgPyB1bmRlZmluZWQgOiB0aGlzLmFjdGl2YXRlRWRpdE1vZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uQmx1cnJlZFxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBvbkJsdXJyZWQoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICAvLyBDaGVja3MgaWYgaXQgaXMgZWRpdGFibGUgZmlyc3QgYmVmb3JlIGhhbmRlbGluZyB0aGUgb25CbHVycmVkIGV2ZW50IGluIG9yZGVyIHRvIHByZXZlbnRcbiAgICAgICAgLy8gYSBidWcgaW4gSUUgd2hlcmUgdGFncyBhcmUgc3RpbGwgZWRpdGFibGUgd2l0aCBvbmx5RnJvbUF1dG9jb21wbGV0ZSBzZXQgdG8gdHJ1ZVxuICAgICAgICBpZiAoIXRoaXMuZWRpdGFibGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGlzYWJsZUVkaXRNb2RlKCk7XG5cbiAgICAgICAgY29uc3QgdmFsdWU6IHN0cmluZyA9IGV2ZW50LnRhcmdldC5pbm5lclRleHQ7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9XG4gICAgICAgICAgICB0eXBlb2YgdGhpcy5tb2RlbCA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICA/IHZhbHVlXG4gICAgICAgICAgICAgICAgOiB7IC4uLnRoaXMubW9kZWwsIFt0aGlzLmRpc3BsYXlCeV06IHZhbHVlIH07XG5cbiAgICAgICAgdGhpcy5vbkJsdXIuZW1pdChyZXN1bHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGdldERpc3BsYXlWYWx1ZVxuICAgICAqIEBwYXJhbSBpdGVtXG4gICAgICovXG4gICAgcHVibGljIGdldERpc3BsYXlWYWx1ZShpdGVtOiBUYWdNb2RlbCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycgPyBpdGVtIDogaXRlbVt0aGlzLmRpc3BsYXlCeV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGRlc2MgcmV0dXJucyB3aGV0aGVyIHRoZSByaXBwbGUgaXMgdmlzaWJsZSBvciBub3RcbiAgICAgKiBvbmx5IHdvcmtzIGluIENocm9tZVxuICAgICAqIEBuYW1lIGlzUmlwcGxlVmlzaWJsZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgaXNSaXBwbGVWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIXRoaXMucmVhZG9ubHkgJiYgIXRoaXMuZWRpdGluZyAmJiBpc0Nocm9tZSAmJiB0aGlzLmhhc1JpcHBsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBkaXNhYmxlRWRpdE1vZGVcbiAgICAgKiBAcGFyYW0gJGV2ZW50XG4gICAgICovXG4gICAgcHVibGljIGRpc2FibGVFZGl0TW9kZSgkZXZlbnQ/OiBFdmVudCk6IHZvaWQge1xuICAgICAgICBjb25zdCBjbGFzc0xpc3QgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3Q7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5nZXRDb250ZW50RWRpdGFibGVUZXh0KCk7XG5cbiAgICAgICAgdGhpcy5lZGl0aW5nID0gZmFsc2U7XG4gICAgICAgIGNsYXNzTGlzdC5yZW1vdmUoJ3RhZy0tZWRpdGluZycpO1xuXG4gICAgICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udGVudEVkaXRhYmxlVGV4dCh0aGlzLm1vZGVsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RvcmVOZXdWYWx1ZShpbnB1dCk7XG4gICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgIGlmICgkZXZlbnQpIHtcbiAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaXNEZWxldGVJY29uVmlzaWJsZVxuICAgICAqL1xuICAgIHB1YmxpYyBpc0RlbGV0ZUljb25WaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIXRoaXMucmVhZG9ubHkgJiYgIXRoaXMuZGlzYWJsZWQgJiYgdGhpcy5yZW1vdmFibGUgJiYgIXRoaXMuZWRpdGluZ1xuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGdldENvbnRlbnRFZGl0YWJsZVRleHRcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldENvbnRlbnRFZGl0YWJsZVRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmdldENvbnRlbnRFZGl0YWJsZSgpO1xuXG4gICAgICAgIHJldHVybiBpbnB1dCA/IGlucHV0LmlubmVyVGV4dC50cmltKCkgOiAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZXRDb250ZW50RWRpdGFibGVUZXh0XG4gICAgICogQHBhcmFtIG1vZGVsXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXRDb250ZW50RWRpdGFibGVUZXh0KG1vZGVsOiBUYWdNb2RlbCkge1xuICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuZ2V0Q29udGVudEVkaXRhYmxlKCk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXREaXNwbGF5VmFsdWUobW9kZWwpO1xuXG4gICAgICAgIGlucHV0LmlubmVyVGV4dCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lXG4gICAgICovXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZUVkaXRNb2RlKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBjbGFzc0xpc3QgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3Q7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ3RhZy0tZWRpdGluZycpO1xuXG4gICAgICAgIHRoaXMuZWRpdGluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc3RvcmVOZXdWYWx1ZVxuICAgICAqIEBwYXJhbSBpbnB1dFxuICAgICAqL1xuICAgIHByaXZhdGUgc3RvcmVOZXdWYWx1ZShpbnB1dDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGV4aXN0cyA9ICh0YWc6IFRhZ01vZGVsKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIHRhZyA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICA/IHRhZyA9PT0gaW5wdXRcbiAgICAgICAgICAgICAgICA6IHRhZ1t0aGlzLmRpc3BsYXlCeV0gPT09IGlucHV0O1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGhhc0lkID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxbdGhpcy5pZGVudGlmeUJ5XSAhPT0gdGhpcy5tb2RlbFt0aGlzLmRpc3BsYXlCeV07XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gaWYgdGhlIHZhbHVlIGNoYW5nZWQsIHJlcGxhY2UgdGhlIHZhbHVlIGluIHRoZSBtb2RlbFxuICAgICAgICBpZiAoZXhpc3RzKHRoaXMubW9kZWwpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtb2RlbCA9XG4gICAgICAgICAgICB0eXBlb2YgdGhpcy5tb2RlbCA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICA/IGlucHV0XG4gICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgW3RoaXMuaWRlbnRpZnlCeV06IGhhc0lkKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLm1vZGVsW3RoaXMuaWRlbnRpZnlCeV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpbnB1dCxcbiAgICAgICAgICAgICAgICAgICAgICBbdGhpcy5kaXNwbGF5QnldOiBpbnB1dFxuICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5jYW5BZGRUYWcobW9kZWwpKSB7XG4gICAgICAgICAgICB0aGlzLm9uVGFnRWRpdGVkLmVtaXQoeyB0YWc6IG1vZGVsLCBpbmRleDogdGhpcy5pbmRleCB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udGVudEVkaXRhYmxlVGV4dCh0aGlzLm1vZGVsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGdldENvbnRlbnRFZGl0YWJsZVxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0Q29udGVudEVkaXRhYmxlKCk6IEhUTUxJbnB1dEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignW2NvbnRlbnRlZGl0YWJsZV0nKTtcbiAgICB9XG59XG4iLCI8ZGl2IChjbGljayk9XCJzZWxlY3QoJGV2ZW50KVwiXG4gICAgIChkYmxjbGljayk9XCJ0b2dnbGVFZGl0TW9kZSgpXCJcbiAgICAgKG1vdXNlZG93bik9XCJyaXBwbGVTdGF0ZT0nY2xpY2tlZCdcIlxuICAgICAobW91c2V1cCk9XCJyaXBwbGVTdGF0ZT0nbm9uZSdcIlxuICAgICBbbmdTd2l0Y2hdPVwiISF0ZW1wbGF0ZVwiXG4gICAgIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgIFthdHRyLnRhYmluZGV4XT1cIi0xXCJcbiAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJnZXREaXNwbGF5VmFsdWUobW9kZWwpXCI+XG5cbiAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCJ0cnVlXCIgW2F0dHIuY29udGVudGVkaXRhYmxlXT1cImVkaXRpbmdcIj5cbiAgICAgICAgPCEtLSBDVVNUT00gVEVNUExBVEUgLS0+XG4gICAgICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgaXRlbTogbW9kZWwsIGluZGV4OiBpbmRleCB9XCJcbiAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRlbXBsYXRlXCI+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCJmYWxzZVwiIGNsYXNzPVwidGFnLXdyYXBwZXJcIj5cbiAgICAgICAgPCEtLSBUQUcgTkFNRSAtLT5cbiAgICAgICAgPGRpdiBbYXR0ci5jb250ZW50ZWRpdGFibGVdPVwiZWRpdGluZ1wiXG4gICAgICAgICAgICAgW2F0dHIudGl0bGVdPVwiZ2V0RGlzcGxheVZhbHVlKG1vZGVsKVwiXG4gICAgICAgICAgICAgY2xhc3M9XCJ0YWdfX3RleHQgaW5saW5lXCJcbiAgICAgICAgICAgICBzcGVsbGNoZWNrPVwiZmFsc2VcIlxuICAgICAgICAgICAgIChrZXlkb3duLmVudGVyKT1cImRpc2FibGVFZGl0TW9kZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAoa2V5ZG93bi5lc2NhcGUpPVwiZGlzYWJsZUVkaXRNb2RlKCRldmVudClcIlxuICAgICAgICAgICAgIChjbGljayk9XCJlZGl0aW5nID8gJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpIDogdW5kZWZpbmVkXCJcbiAgICAgICAgICAgICAoYmx1cik9XCJvbkJsdXJyZWQoJGV2ZW50KVwiPlxuICAgICAgICAgICAge3sgZ2V0RGlzcGxheVZhbHVlKG1vZGVsKSB9fVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tICdYJyBCVVRUT04gLS0+XG4gICAgICAgIDxkZWxldGUtaWNvblxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlJlbW92ZSB0YWdcIlxuICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAoY2xpY2spPVwicmVtb3ZlKCRldmVudClcIlxuICAgICAgICAgICAgKm5nSWY9XCJpc0RlbGV0ZUljb25WaXNpYmxlKClcIj5cbiAgICAgICAgPC9kZWxldGUtaWNvbj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuXG48dGFnLXJpcHBsZSBbc3RhdGVdPVwicmlwcGxlU3RhdGVcIlxuICAgICAgICAgICAgW2F0dHIudGFiaW5kZXhdPVwiLTFcIlxuICAgICAgICAgICAgKm5nSWY9XCJpc1JpcHBsZVZpc2libGVcIj5cbjwvdGFnLXJpcHBsZT5cbiJdfQ==