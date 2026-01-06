import { __rest } from 'tslib';
import { isPlatformServer } from '@angular/common';
import * as i0 from '@angular/core';
import { InjectionToken, PLATFORM_ID, Directive, Inject, Optional, Self, Input, HostListener, NgModule } from '@angular/core';
import _Inputmask from 'inputmask';
import * as i1 from '@angular/forms';

class InputMaskConfig {
    constructor() {
        this.isAsync = false;
        this.inputSelector = 'input';
    }
}
const INPUT_MASK_CONFIG = new InjectionToken('InputMaskConfig');

// The initial issue: https://github.com/ngneat/input-mask/issues/40
// Webpack 5 has module resolution changes. Libraries should configure the `output.export`
// (https://webpack.js.org/configuration/output/#outputlibraryexport) property when published in
// a UMD format, to tell Webpack that there's a default export.
// The `_Inputmask` is an object with 2 properties: `{ __esModule: true, default: Inputmask }`.
// But we want to be backwards-compatible, so we try to read the `default` property first; otherwise, we fall back to `_Inputmask`.
// eslint-disable-next-line @typescript-eslint/naming-convention
const InputmaskConstructor = _Inputmask.default ||
    _Inputmask;
class InputMaskDirective {
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
        /* The original `onChange` function coming from the `setUpControl`. */
        this.onChange = () => { };
        this.mutationObserver = null;
        this.onInput = (_) => { };
        this.onTouched = (_) => { };
        this.validate = (control) => !control.value || !this.inputMaskPlugin || this.inputMaskPlugin.isValid()
            ? null
            : { inputMask: true };
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
            this.control.setValidators(this.control.validator
                ? [this.control.validator, this.validate]
                : [this.validate]);
            this.control.updateValueAndValidity();
        }
    }
    ngOnDestroy() {
        var _a;
        this.removeInputMaskPlugin();
        (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    writeValue(value) {
        var _a;
        const formatter = (_a = this.inputMaskOptions) === null || _a === void 0 ? void 0 : _a.formatter;
        if (this.nativeInputElement) {
            this.renderer.setProperty(this.nativeInputElement, 'value', formatter && value ? formatter(value) : value !== null && value !== void 0 ? value : '');
        }
    }
    registerOnChange(onChange) {
        var _a;
        this.onChange = onChange;
        const parser = (_a = this.inputMaskOptions) === null || _a === void 0 ? void 0 : _a.parser;
        this.onInput = (value) => {
            this.onChange(parser && value ? parser(value) : value);
        };
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(disabled) {
        if (this.nativeInputElement) {
            this.renderer.setProperty(this.nativeInputElement, 'disabled', disabled);
        }
    }
    updateInputMask() {
        this.removeInputMaskPlugin();
        this.createInputMaskPlugin();
        // This re-creates the `onInput` function since `inputMaskOptions` might be changed and the `parser`
        // property now differs.
        this.registerOnChange(this.onChange);
    }
    createInputMaskPlugin() {
        const { nativeInputElement, inputMaskOptions } = this;
        if (isPlatformServer(this.platformId) ||
            !nativeInputElement ||
            inputMaskOptions === null ||
            Object.keys(inputMaskOptions).length === 0) {
            return;
        }
        const { parser, formatter } = inputMaskOptions, options = __rest(inputMaskOptions, ["parser", "formatter"]);
        this.inputMaskPlugin = this.ngZone.runOutsideAngular(() => new InputmaskConstructor(options).mask(nativeInputElement));
        if (this.control) {
            setTimeout(() => {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                this.control.updateValueAndValidity();
            });
        }
    }
    get control() {
        var _a;
        return (_a = this.ngControl) === null || _a === void 0 ? void 0 : _a.control;
    }
    setNativeInputElement(config) {
        if (this.elementRef.nativeElement.tagName === 'INPUT') {
            this.nativeInputElement = this.elementRef.nativeElement;
        }
        else {
            this.defaultInputMaskConfig = Object.assign(Object.assign({}, this.defaultInputMaskConfig), config);
            if (this.defaultInputMaskConfig.isAsync) {
                // Create an observer instance linked to the callback function
                this.mutationObserver = new MutationObserver((mutationsList) => {
                    var _a;
                    for (const mutation of mutationsList) {
                        if (mutation.type === 'childList') {
                            const nativeInputElement = this.elementRef.nativeElement.querySelector(this.defaultInputMaskConfig.inputSelector);
                            if (nativeInputElement) {
                                this.nativeInputElement = nativeInputElement;
                                (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
                                this.createInputMaskPlugin();
                            }
                        }
                    }
                });
                // Start observing the target node for configured mutations
                this.mutationObserver.observe(this.elementRef.nativeElement, {
                    childList: true,
                    subtree: true,
                });
            }
            else {
                this.nativeInputElement = this.elementRef.nativeElement.querySelector(this.defaultInputMaskConfig.inputSelector);
            }
        }
    }
    removeInputMaskPlugin() {
        var _a;
        (_a = this.inputMaskPlugin) === null || _a === void 0 ? void 0 : _a.remove();
        this.inputMaskPlugin = null;
    }
}
InputMaskDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: InputMaskDirective, deps: [{ token: PLATFORM_ID }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.NgControl, optional: true, self: true }, { token: INPUT_MASK_CONFIG }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive });
InputMaskDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.8", type: InputMaskDirective, selector: "[inputMask]", inputs: { inputMask: "inputMask" }, host: { listeners: { "input": "onInput($event.target.value)", "blur": "onTouched($event.target.value)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: InputMaskDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[inputMask]',
                }]
        }], ctorParameters: function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: [PLATFORM_ID]
                    }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.NgControl, decorators: [{
                        type: Optional
                    }, {
                        type: Self
                    }] }, { type: InputMaskConfig, decorators: [{
                        type: Inject,
                        args: [INPUT_MASK_CONFIG]
                    }] }, { type: i0.NgZone }];
    }, propDecorators: { inputMask: [{
                type: Input
            }], onInput: [{
                type: HostListener,
                args: ['input', ['$event.target.value']]
            }], onTouched: [{
                type: HostListener,
                args: ['blur', ['$event.target.value']]
            }] } });

class InputMaskModule {
    static forRoot(config) {
        return {
            ngModule: InputMaskModule,
            providers: [{ provide: INPUT_MASK_CONFIG, useValue: config }],
        };
    }
}
InputMaskModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: InputMaskModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
InputMaskModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.8", ngImport: i0, type: InputMaskModule, declarations: [InputMaskDirective], exports: [InputMaskDirective] });
InputMaskModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: InputMaskModule, providers: [
        {
            provide: INPUT_MASK_CONFIG,
            useClass: InputMaskConfig,
        },
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: InputMaskModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [InputMaskDirective],
                    exports: [InputMaskDirective],
                    providers: [
                        {
                            provide: INPUT_MASK_CONFIG,
                            useClass: InputMaskConfig,
                        },
                    ],
                }]
        }] });

const createMask = (options) => typeof options === 'string' ? { mask: options } : options;

/*
 * Public API Surface of input-mask
 */

/**
 * Generated bundle index. Do not edit.
 */

export { InputMaskDirective, InputMaskModule, createMask };
//# sourceMappingURL=ngneat-input-mask.mjs.map
