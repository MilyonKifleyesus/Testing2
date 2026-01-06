import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AsyncValidatorFn, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class TagInputForm implements OnInit, OnChanges {
    /**
     * @name onSubmit
     */
    onSubmit: EventEmitter<any>;
    /**
     * @name onBlur
     */
    onBlur: EventEmitter<any>;
    /**
     * @name onFocus
     */
    onFocus: EventEmitter<any>;
    /**
     * @name onKeyup
     */
    onKeyup: EventEmitter<any>;
    /**
     * @name onKeydown
     */
    onKeydown: EventEmitter<any>;
    /**
     * @name inputTextChange
     */
    inputTextChange: EventEmitter<string>;
    /**
     * @name placeholder
     */
    placeholder: string;
    /**
     * @name validators
     */
    validators: ValidatorFn[];
    /**
     * @name asyncValidators
     * @desc array of AsyncValidator that are used to validate the tag before it gets appended to the list
     */
    asyncValidators: AsyncValidatorFn[];
    /**
     * @name inputId
     */
    inputId: string;
    /**
     * @name inputClass
     */
    inputClass: string;
    /**
     * @name tabindex
     * @desc pass through the specified tabindex to the input
     */
    tabindex: string;
    /**
     * @name disabled
     */
    disabled: boolean;
    /**
     * @name input
     */
    input: any;
    /**
     * @name form
     */
    form: FormGroup;
    /**
     * @name inputText
     */
    get inputText(): string;
    /**
     * @name inputText
     * @param text {string}
     */
    set inputText(text: string);
    private readonly item;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @name value
     */
    get value(): FormControl;
    /**
     * @name isInputFocused
     */
    isInputFocused(): boolean;
    /**
     * @name getErrorMessages
     * @param messages
     */
    getErrorMessages(messages: {
        [key: string]: string;
    }): string[];
    /**
     * @name hasErrors
     */
    hasErrors(): boolean;
    /**
     * @name focus
     */
    focus(): void;
    /**
     * @name blur
     */
    blur(): void;
    /**
     * @name getElementPosition
     */
    getElementPosition(): ClientRect;
    /**
     * - removes input from the component
     * @name destroy
     */
    destroy(): void;
    /**
     * @name onKeyDown
     * @param $event
     */
    onKeyDown($event: any): void;
    /**
     * @name onKeyUp
     * @param $event
     */
    onKeyUp($event: any): void;
    /**
     * @name submit
     */
    submit($event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TagInputForm, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TagInputForm, "tag-input-form", never, { "placeholder": "placeholder"; "validators": "validators"; "asyncValidators": "asyncValidators"; "inputId": "inputId"; "inputClass": "inputClass"; "tabindex": "tabindex"; "disabled": "disabled"; "inputText": "inputText"; }, { "onSubmit": "onSubmit"; "onBlur": "onBlur"; "onFocus": "onFocus"; "onKeyup": "onKeyup"; "onKeydown": "onKeydown"; "inputTextChange": "inputTextChange"; }, never, never>;
}
