import { PipeTransform } from '@angular/core';
import { Config } from '..';
import * as i0 from "@angular/core";
export declare class SortPipe implements PipeTransform {
    private defaultArray;
    private static isNaN;
    private static compare;
    transform(array: any[], filter: {
        order: string;
        key: string;
    }, config?: Config): any[];
    private sortAsc;
    private sortDesc;
    static ɵfac: i0.ɵɵFactoryDeclaration<SortPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<SortPipe, "sort", false>;
}
//# sourceMappingURL=sort.pipe.d.ts.map