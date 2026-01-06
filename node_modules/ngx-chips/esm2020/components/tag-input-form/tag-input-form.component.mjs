import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
export class TagInputForm {
    constructor() {
        /**
         * @name onSubmit
         */
        this.onSubmit = new EventEmitter();
        /**
         * @name onBlur
         */
        this.onBlur = new EventEmitter();
        /**
         * @name onFocus
         */
        this.onFocus = new EventEmitter();
        /**
         * @name onKeyup
         */
        this.onKeyup = new EventEmitter();
        /**
         * @name onKeydown
         */
        this.onKeydown = new EventEmitter();
        /**
         * @name inputTextChange
         */
        this.inputTextChange = new EventEmitter();
        /**
         * @name validators
         */
        this.validators = [];
        /**
         * @name asyncValidators
         * @desc array of AsyncValidator that are used to validate the tag before it gets appended to the list
         */
        this.asyncValidators = [];
        /**
         * @name tabindex
         * @desc pass through the specified tabindex to the input
         */
        this.tabindex = '';
        /**
         * @name disabled
         */
        this.disabled = false;
        this.item = new FormControl({ value: '', disabled: this.disabled });
    }
    /**
     * @name inputText
     */
    get inputText() {
        return this.item.value;
    }
    /**
     * @name inputText
     * @param text {string}
     */
    set inputText(text) {
        this.item.setValue(text);
        this.inputTextChange.emit(text);
    }
    ngOnInit() {
        this.item.setValidators(this.validators);
        this.item.setAsyncValidators(this.asyncValidators);
        // creating form
        this.form = new FormGroup({
            item: this.item
        });
    }
    ngOnChanges(changes) {
        if (changes.disabled && !changes.disabled.firstChange) {
            if (changes.disabled.currentValue) {
                this.form.controls['item'].disable();
            }
            else {
                this.form.controls['item'].enable();
            }
        }
    }
    /**
     * @name value
     */
    get value() {
        return this.form.get('item');
    }
    /**
     * @name isInputFocused
     */
    isInputFocused() {
        const doc = typeof document !== 'undefined' ? document : undefined;
        return doc ? doc.activeElement === this.input.nativeElement : false;
    }
    /**
     * @name getErrorMessages
     * @param messages
     */
    getErrorMessages(messages) {
        return Object.keys(messages)
            .filter(err => this.value.hasError(err))
            .map(err => messages[err]);
    }
    /**
     * @name hasErrors
     */
    hasErrors() {
        const { dirty, value, valid } = this.form;
        return dirty && value.item && !valid;
    }
    /**
     * @name focus
     */
    focus() {
        this.input.nativeElement.focus();
    }
    /**
     * @name blur
     */
    blur() {
        this.input.nativeElement.blur();
    }
    /**
     * @name getElementPosition
     */
    getElementPosition() {
        return this.input.nativeElement.getBoundingClientRect();
    }
    /**
     * - removes input from the component
     * @name destroy
     */
    destroy() {
        const input = this.input.nativeElement;
        input.parentElement.removeChild(input);
    }
    /**
     * @name onKeyDown
     * @param $event
     */
    onKeyDown($event) {
        this.inputText = this.value.value;
        if ($event.key === 'Enter') {
            this.submit($event);
        }
        else {
            return this.onKeydown.emit($event);
        }
    }
    /**
     * @name onKeyUp
     * @param $event
     */
    onKeyUp($event) {
        this.inputText = this.value.value;
        return this.onKeyup.emit($event);
    }
    /**
     * @name submit
     */
    submit($event) {
        $event.preventDefault();
        this.onSubmit.emit($event);
    }
}
TagInputForm.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TagInputForm, deps: [], target: i0.ɵɵFactoryTarget.Component });
TagInputForm.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: TagInputForm, selector: "tag-input-form", inputs: { placeholder: "placeholder", validators: "validators", asyncValidators: "asyncValidators", inputId: "inputId", inputClass: "inputClass", tabindex: "tabindex", disabled: "disabled", inputText: "inputText" }, outputs: { onSubmit: "onSubmit", onBlur: "onBlur", onFocus: "onFocus", onKeyup: "onKeyup", onKeydown: "onKeydown", inputTextChange: "inputTextChange" }, viewQueries: [{ propertyName: "input", first: true, predicate: ["input"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<!-- form -->\n<form (ngSubmit)=\"submit($event)\" [formGroup]=\"form\">\n    <input #input\n\n           type=\"text\"\n           class=\"ng2-tag-input__text-input\"\n           autocomplete=\"off\"\n           tabindex=\"{{ disabled ? -1 : tabindex ? tabindex : 0 }}\"\n           minlength=\"1\"\n           formControlName=\"item\"\n\n           [ngClass]=\"inputClass\"\n           [attr.id]=\"inputId\"\n           [attr.placeholder]=\"placeholder\"\n           [attr.aria-label]=\"placeholder\"\n           [attr.tabindex]=\"tabindex\"\n           [attr.disabled]=\"disabled ? disabled : null\"\n\n           (focus)=\"onFocus.emit($event)\"\n           (blur)=\"onBlur.emit($event)\"\n           (keydown)=\"onKeyDown($event)\"\n           (keyup)=\"onKeyUp($event)\"\n    />\n</form>\n", styles: [".dark tag:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;box-shadow:none;outline:none;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{box-shadow:inset 0 1px 1px #0006;border:1px solid #ccc}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{box-shadow:inset 0 1px 1px #d9534f}.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:all .25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196F3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.dark.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px #00000013;border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}.ng2-tag-input__text-input{display:inline;vertical-align:middle;border:none;padding:0 .5rem;height:38px;font-size:1em;font-family:Roboto,Helvetica Neue,sans-serif}.ng2-tag-input__text-input:focus{outline:0}.ng2-tag-input__text-input[disabled=true]{opacity:.5;background:#fff}\n"], directives: [{ type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1.MinLengthValidator, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: ["minlength"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TagInputForm, decorators: [{
            type: Component,
            args: [{ selector: 'tag-input-form', template: "<!-- form -->\n<form (ngSubmit)=\"submit($event)\" [formGroup]=\"form\">\n    <input #input\n\n           type=\"text\"\n           class=\"ng2-tag-input__text-input\"\n           autocomplete=\"off\"\n           tabindex=\"{{ disabled ? -1 : tabindex ? tabindex : 0 }}\"\n           minlength=\"1\"\n           formControlName=\"item\"\n\n           [ngClass]=\"inputClass\"\n           [attr.id]=\"inputId\"\n           [attr.placeholder]=\"placeholder\"\n           [attr.aria-label]=\"placeholder\"\n           [attr.tabindex]=\"tabindex\"\n           [attr.disabled]=\"disabled ? disabled : null\"\n\n           (focus)=\"onFocus.emit($event)\"\n           (blur)=\"onBlur.emit($event)\"\n           (keydown)=\"onKeyDown($event)\"\n           (keyup)=\"onKeyUp($event)\"\n    />\n</form>\n", styles: [".dark tag:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;box-shadow:none;outline:none;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{box-shadow:inset 0 1px 1px #0006;border:1px solid #ccc}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{box-shadow:inset 0 1px 1px #d9534f}.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:all .25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196F3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.dark.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px #00000013;border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}.ng2-tag-input__text-input{display:inline;vertical-align:middle;border:none;padding:0 .5rem;height:38px;font-size:1em;font-family:Roboto,Helvetica Neue,sans-serif}.ng2-tag-input__text-input:focus{outline:0}.ng2-tag-input__text-input[disabled=true]{opacity:.5;background:#fff}\n"] }]
        }], propDecorators: { onSubmit: [{
                type: Output
            }], onBlur: [{
                type: Output
            }], onFocus: [{
                type: Output
            }], onKeyup: [{
                type: Output
            }], onKeydown: [{
                type: Output
            }], inputTextChange: [{
                type: Output
            }], placeholder: [{
                type: Input
            }], validators: [{
                type: Input
            }], asyncValidators: [{
                type: Input
            }], inputId: [{
                type: Input
            }], inputClass: [{
                type: Input
            }], tabindex: [{
                type: Input
            }], disabled: [{
                type: Input
            }], input: [{
                type: ViewChild,
                args: ['input']
            }], inputText: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWlucHV0LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbW9kdWxlcy9jb21wb25lbnRzL3RhZy1pbnB1dC1mb3JtL3RhZy1pbnB1dC1mb3JtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL21vZHVsZXMvY29tcG9uZW50cy90YWctaW5wdXQtZm9ybS90YWctaW5wdXQtZm9ybS50ZW1wbGF0ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFpQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxFQUFvQixXQUFXLEVBQUUsU0FBUyxFQUFlLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFPdkYsTUFBTSxPQUFPLFlBQVk7SUFMekI7UUFNSTs7V0FFRztRQUNjLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVsRTs7V0FFRztRQUNjLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVoRTs7V0FFRztRQUNjLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVqRTs7V0FFRztRQUNjLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVqRTs7V0FFRztRQUNjLGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuRTs7V0FFRztRQUNjLG9CQUFlLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFTNUU7O1dBRUc7UUFDYSxlQUFVLEdBQWtCLEVBQUUsQ0FBQztRQUUvQzs7O1dBR0c7UUFDYSxvQkFBZSxHQUF1QixFQUFFLENBQUM7UUFZekQ7OztXQUdHO1FBQ2EsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUU5Qjs7V0FFRztRQUNhLGFBQVEsR0FBRyxLQUFLLENBQUM7UUE4QmhCLFNBQUksR0FBZ0IsSUFBSSxXQUFXLENBQUMsRUFBRSxL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VSxVQUFVO3NCQUF6QixLQUFLO2dCQU1VLGVBQWU7c0JBQTlCLEtBQUs7Z0JBS1UsT0FBTztzQkFBdEIsS0FBSztnQkFLVSxVQUFVO3NCQUF6QixLQUFLO2dCQU1VLFFBQVE7c0JBQXZCLEtBQUs7Z0JBS1UsUUFBUTtzQkFBdkIsS0FBSztnQkFLcUIsS0FBSztzQkFBL0IsU0FBUzt1QkFBQyxPQUFPO2dCQVdQLFNBQVM7c0JBRG5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXN5bmNWYWxpZGF0b3JGbiwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9yRm4gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndGFnLWlucHV0LWZvcm0nLFxuICAgIHN0eWxlVXJsczogWycuL3RhZy1pbnB1dC1mb3JtLnN0eWxlLnNjc3MnXSxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGFnLWlucHV0LWZvcm0udGVtcGxhdGUuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVGFnSW5wdXRGb3JtIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uU3VibWl0XG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvblN1Ym1pdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvbkJsdXJcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIG9uQmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvbkZvY3VzXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbkZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uS2V5dXBcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIG9uS2V5dXA6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25LZXlkb3duXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbktleWRvd246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaW5wdXRUZXh0Q2hhbmdlXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBpbnB1dFRleHRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgLy8gaW5wdXRzXG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBwbGFjZWhvbGRlclxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdmFsaWRhdG9yc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB2YWxpZGF0b3JzOiBWYWxpZGF0b3JGbltdID0gW107XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBhc3luY1ZhbGlkYXRvcnNcbiAgICAgKiBAZGVzYyBhcnJheSBvZiBBc3luY1ZhbGlkYXRvciB0aGF0IGFyZSB1c2VkIHRvIHZhbGlkYXRlIHRoZSB0YWcgYmVmb3JlIGl0IGdldHMgYXBwZW5kZWQgdG8gdGhlIGxpc3RcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgYXN5bmNWYWxpZGF0b3JzOiBBc3luY1ZhbGlkYXRvckZuW10gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlucHV0SWRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgaW5wdXRJZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaW5wdXRDbGFzc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBpbnB1dENsYXNzOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSB0YWJpbmRleFxuICAgICAqIEBkZXNjIHBhc3MgdGhyb3VnaCB0aGUgc3BlY2lmaWVkIHRhYmluZGV4IHRvIHRoZSBpbnB1dFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB0YWJpbmRleCA9ICcnO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZGlzYWJsZWRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlucHV0XG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnaW5wdXQnKSBwdWJsaWMgaW5wdXQ7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBmb3JtXG4gICAgICovXG4gICAgcHVibGljIGZvcm06IEZvcm1Hcm91cDtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlucHV0VGV4dFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpbnB1dFRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbS52YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBpbnB1dFRleHRcbiAgICAgKiBAcGFyYW0gdGV4dCB7c3RyaW5nfVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgaW5wdXRUZXh0KHRleHQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLml0ZW0uc2V0VmFsdWUodGV4dCk7XG5cbiAgICAgICAgdGhpcy5pbnB1dFRleHRDaGFuZ2UuZW1pdCh0ZXh0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGl0ZW06IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKHsgdmFsdWU6ICcnLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCB9KTtcblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLml0ZW0uc2V0VmFsaWRhdG9ycyh0aGlzLnZhbGlkYXRvcnMpO1xuICAgICAgICB0aGlzLml0ZW0uc2V0QXN5bmNWYWxpZGF0b3JzKHRoaXMuYXN5bmNWYWxpZGF0b3JzKTtcblxuICAgICAgICAvLyBjcmVhdGluZyBmb3JtXG4gICAgICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgICAgICAgaXRlbTogdGhpcy5pdGVtXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNoYW5nZXMuZGlzYWJsZWQgJiYgIWNoYW5nZXMuZGlzYWJsZWQuZmlyc3RDaGFuZ2UpIHtcbiAgICAgICAgICAgIGlmIChjaGFuZ2VzLmRpc2FibGVkLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snaXRlbSddLmRpc2FibGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydpdGVtJ10uZW5hYmxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSB2YWx1ZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgdmFsdWUoKTogRm9ybUNvbnRyb2wge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtLmdldCgnaXRlbScpIGFzIEZvcm1Db250cm9sO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlzSW5wdXRGb2N1c2VkXG4gICAgICovXG4gICAgcHVibGljIGlzSW5wdXRGb2N1c2VkKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBkb2MgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnID8gZG9jdW1lbnQgOiB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBkb2MgPyBkb2MuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50IDogZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZ2V0RXJyb3JNZXNzYWdlc1xuICAgICAqIEBwYXJhbSBtZXNzYWdlc1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRFcnJvck1lc3NhZ2VzKG1lc3NhZ2VzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMobWVzc2FnZXMpXG4gICAgICAgICAgICAuZmlsdGVyKGVyciA9PiB0aGlzLnZhbHVlLmhhc0Vycm9yKGVycikpXG4gICAgICAgICAgICAubWFwKGVyciA9PiBtZXNzYWdlc1tlcnJdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBoYXNFcnJvcnNcbiAgICAgKi9cbiAgICBwdWJsaWMgaGFzRXJyb3JzKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCB7IGRpcnR5LCB2YWx1ZSwgdmFsaWQgfSA9IHRoaXMuZm9ybTtcbiAgICAgICAgcmV0dXJuIGRpcnR5ICYmIHZhbHVlLml0ZW0gJiYgIXZhbGlkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGZvY3VzXG4gICAgICovXG4gICAgcHVibGljIGZvY3VzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBibHVyXG4gICAgICovXG4gICAgcHVibGljIGJsdXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZ2V0RWxlbWVudFBvc2l0aW9uXG4gICAgICovXG4gICAgcHVibGljIGdldEVsZW1lbnRQb3NpdGlvbigpOiBDbGllbnRSZWN0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAtIHJlbW92ZXMgaW5wdXQgZnJvbSB0aGUgY29tcG9uZW50XG4gICAgICogQG5hbWUgZGVzdHJveVxuICAgICAqL1xuICAgIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgaW5wdXQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChpbnB1dCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25LZXlEb3duXG4gICAgICogQHBhcmFtICRldmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBvbktleURvd24oJGV2ZW50KSB7XG4gICAgICAgIHRoaXMuaW5wdXRUZXh0ID0gdGhpcy52YWx1ZS52YWx1ZTtcbiAgICAgICAgaWYgKCRldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIHRoaXMuc3VibWl0KCRldmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMub25LZXlkb3duLmVtaXQoJGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uS2V5VXBcbiAgICAgKiBAcGFyYW0gJGV2ZW50XG4gICAgICovXG4gICAgcHVibGljIG9uS2V5VXAoJGV2ZW50KSB7XG4gICAgICAgIHRoaXMuaW5wdXRUZXh0ID0gdGhpcy52YWx1ZS52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMub25LZXl1cC5lbWl0KCRldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc3VibWl0XG4gICAgICovXG4gICAgcHVibGljIHN1Ym1pdCgkZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5vblN1Ym1pdC5lbWl0KCRldmVudCk7XG4gICAgfVxufVxuIiwiPCEtLSBmb3JtIC0tPlxuPGZvcm0gKG5nU3VibWl0KT1cInN1Ym1pdCgkZXZlbnQpXCIgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gICAgPGlucHV0ICNpbnB1dFxuXG4gICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgY2xhc3M9XCJuZzItdGFnLWlucHV0X190ZXh0LWlucHV0XCJcbiAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgdGFiaW5kZXg9XCJ7eyBkaXNhYmxlZCA/IC0xIDogdGFiaW5kZXggPyB0YWJpbmRleCA6IDAgfX1cIlxuICAgICAgICAgICBtaW5sZW5ndGg9XCIxXCJcbiAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiaXRlbVwiXG5cbiAgICAgICAgICAgW25nQ2xhc3NdPVwiaW5wdXRDbGFzc1wiXG4gICAgICAgICAgIFthdHRyLmlkXT1cImlucHV0SWRcIlxuICAgICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgICAgICBbYXR0ci50YWJpbmRleF09XCJ0YWJpbmRleFwiXG4gICAgICAgICAgIFthdHRyLmRpc2FibGVkXT1cImRpc2FibGVkID8gZGlzYWJsZWQgOiBudWxsXCJcblxuICAgICAgICAgICAoZm9jdXMpPVwib25Gb2N1cy5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAoYmx1cik9XCJvbkJsdXIuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIlxuICAgICAgICAgICAoa2V5dXApPVwib25LZXlVcCgkZXZlbnQpXCJcbiAgICAvPlxuPC9mb3JtPlxuIl19