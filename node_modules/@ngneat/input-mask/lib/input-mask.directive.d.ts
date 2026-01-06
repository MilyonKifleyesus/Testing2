import { ElementRef, NgZone, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl, ValidationErrors, Validator } from '@angular/forms';
import type Inputmask from 'inputmask';
import { InputmaskOptions } from './types';
import { InputMaskConfig } from './config';
import * as i0 from "@angular/core";
export declare class InputMaskDirective<T = any> implements OnInit, OnDestroy, ControlValueAccessor, Validator {
    private platformId;
    private elementRef;
    private renderer;
    ngControl: NgControl | null;
    private ngZone;
    static ngAcceptInputType_inputMask: InputmaskOptions<any> | null | undefined;
    /**
     * Helps you to create input-mask based on https://github.com/RobinHerbots/Inputmask
     * Supports form-validation out-of-the box.
     * Visit https://github.com/ngneat/input-mask for more info.
     */
    set inputMask(inputMask: InputmaskOptions<T> | null | undefined);
    inputMaskPlugin: Inputmask.Instance | null;
    nativeInputElement: HTMLInputElement | null;
    defaultInputMaskConfig: InputMaskConfig;
    private inputMaskOptions;
    private onChange;
    private mutationObserver;
    constructor(platformId: string, elementRef: ElementRef<HTMLInputElement | any>, renderer: Renderer2, ngControl: NgControl | null, config: InputMaskConfig, ngZone: NgZone);
    onInput: (_: any) => void;
    onTouched: (_: any) => void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    writeValue(value: string): void;
    registerOnChange(onChange: (value: T | null) => void): void;
    registerOnTouched(fn: VoidFunction): void;
    validate: (control: AbstractControl) => ValidationErrors | null;
    setDisabledState(disabled: boolean): void;
    private updateInputMask;
    private createInputMaskPlugin;
    private get control();
    private setNativeInputElement;
    private removeInputMaskPlugin;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputMaskDirective<any>, [null, null, null, { optional: true; self: true; }, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<InputMaskDirective<any>, "[inputMask]", never, { "inputMask": "inputMask"; }, {}, never, never, false>;
}
