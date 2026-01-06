import { PipeTransform } from '@angular/core';
import { Config } from '..';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class SearchPipe implements PipeTransform {
    private filters;
    transform(array: any[], filter: Array<{
        value: string;
        key: string;
    }>, filteredCountSubject: Subject<number>, config?: Config): any;
    private filterGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<SearchPipe, "search", false>;
}
//# sourceMappingURL=search-pipe.d.ts.map