import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule, COMPOSITION_BUFFER_MODE } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Ng2DropdownModule } from 'ng2-material-dropdown';
import { HighlightPipe } from './core/pipes/highlight.pipe';
import { DragProvider } from './core/providers/drag-provider';
import { OptionsProvider } from './core/providers/options-provider';
import { TagInputComponent } from './components/tag-input/tag-input';
import { DeleteIconComponent } from './components/icon/icon';
import { TagInputForm } from './components/tag-input-form/tag-input-form.component';
import { TagComponent } from './components/tag/tag.component';
import { TagInputDropdown } from './components/dropdown/tag-input-dropdown.component';
import { TagRipple } from './components/tag/tag-ripple.component';
import * as i0 from "@angular/core";
const optionsProvider = new OptionsProvider();
export class TagInputModule {
    /**
     * @name withDefaults
     * @param options {Options}
     */
    static withDefaults(options) {
        optionsProvider.setOptions(options);
    }
}
TagInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TagInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TagInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TagInputModule, declarations: [TagInputComponent,
        DeleteIconComponent,
        TagInputForm,
        TagComponent,
        HighlightPipe,
        TagInputDropdown,
        TagRipple], imports: [CommonModule,
        ReactiveFormsModule,
        FormsModule,
        Ng2DropdownModule], exports: [TagInputComponent,
        DeleteIconComponent,
        TagInputForm,
        TagComponent,
        HighlightPipe,
        TagInputDropdown,
        TagRipple] });
TagInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TagInputModule, providers: [
        DragProvider,
        { provide: COMPOSITION_BUFFER_MODE, useValue: false },
    ], imports: [[
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            Ng2DropdownModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TagInputModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        FormsModule,
                        Ng2DropdownModule
                    ],
                    declarations: [
                        TagInputComponent,
                        DeleteIconComponent,
                        TagInputForm,
                        TagComponent,
                        HighlightPipe,
                        TagInputDropdown,
                        TagRipple
                    ],
                    exports: [
                        TagInputComponent,
                        DeleteIconComponent,
                        TagInputForm,
                        TagComponent,
                        HighlightPipe,
                        TagInputDropdown,
                        TagRipple
                    ],
                    providers: [
                        DragProvider,
                        { provide: COMPOSITION_BUFFER_MODE, useValue: false },
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWlucHV0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21vZHVsZXMvdGFnLWlucHV0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFXLE1BQU0sbUNBQW1DLENBQUM7QUFDN0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7O0FBRWxFLE1BQU0sZUFBZSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7QUFnQzlDLE1BQU0sT0FBTyxjQUFjO0lBQ3ZCOzs7T0FHRztJQUNJLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBZ0I7UUFDdkMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDOzsyR0FQUSxjQUFjOzRHQUFkLGNBQWMsaUJBdEJuQixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixZQUFZO1FBQ1osYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixTQUFTLGFBWlQsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsaUJBQWlCLGFBWWpCLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLFlBQVk7UUFDWixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLFNBQVM7NEdBT0osY0FBYyxhQUxaO1FBQ1AsWUFBWTtRQUNaLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7S0FDeEQsWUEzQlE7WUFDTCxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLFdBQVc7WUFDWCxpQkFBaUI7U0FDcEI7MkZBd0JRLGNBQWM7a0JBOUIxQixRQUFRO21CQUFDO29CQUNOLE9BQU8sRUFBRTt3QkFDTCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsV0FBVzt3QkFDWCxpQkFBaUI7cUJBQ3BCO29CQUNELFlBQVksRUFBRTt3QkFDVixpQkFBaUI7d0JBQ2pCLG1CQUFtQjt3QkFDbkIsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixTQUFTO3FCQUNaO29CQUNELE9BQU8sRUFBRTt3QkFDTCxpQkFBaUI7d0JBQ2pCLG1CQUFtQjt3QkFDbkIsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixTQUFTO3FCQUNaO29CQUNELFNBQVMsRUFBRTt3QkFDUCxZQUFZO3dCQUNaLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7cUJBQ3hEO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUsIEZvcm1zTW9kdWxlLCBDT01QT1NJVElPTl9CVUZGRVJfTU9ERSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZzJEcm9wZG93bk1vZHVsZSB9IGZyb20gJ25nMi1tYXRlcmlhbC1kcm9wZG93bic7XG5pbXBvcnQgeyBIaWdobGlnaHRQaXBlIH0gZnJvbSAnLi9jb3JlL3BpcGVzL2hpZ2hsaWdodC5waXBlJztcbmltcG9ydCB7IERyYWdQcm92aWRlciB9IGZyb20gJy4vY29yZS9wcm92aWRlcnMvZHJhZy1wcm92aWRlcic7XG5pbXBvcnQgeyBPcHRpb25zUHJvdmlkZXIsIE9wdGlvbnMgfSBmcm9tICcuL2NvcmUvcHJvdmlkZXJzL29wdGlvbnMtcHJvdmlkZXInO1xuaW1wb3J0IHsgVGFnSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGFnLWlucHV0L3RhZy1pbnB1dCc7XG5pbXBvcnQgeyBEZWxldGVJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ljb24vaWNvbic7XG5pbXBvcnQgeyBUYWdJbnB1dEZvcm0gfSBmcm9tICcuL2NvbXBvbmVudHMvdGFnLWlucHV0LWZvcm0vdGFnLWlucHV0LWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IFRhZ0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90YWcvdGFnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWdJbnB1dERyb3Bkb3duIH0gZnJvbSAnLi9jb21wb25lbnRzL2Ryb3Bkb3duL3RhZy1pbnB1dC1kcm9wZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFnUmlwcGxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3RhZy90YWctcmlwcGxlLmNvbXBvbmVudCc7XG5cbmNvbnN0IG9wdGlvbnNQcm92aWRlciA9IG5ldyBPcHRpb25zUHJvdmlkZXIoKTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIE5nMkRyb3Bkb3duTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgVGFnSW5wdXRDb21wb25lbnQsXG4gICAgICAgIERlbGV0ZUljb25Db21wb25lbnQsXG4gICAgICAgIFRhZ0lucHV0Rm9ybSxcbiAgICAgICAgVGFnQ29tcG9uZW50LFxuICAgICAgICBIaWdobGlnaHRQaXBlLFxuICAgICAgICBUYWdJbnB1dERyb3Bkb3duLFxuICAgICAgICBUYWdSaXBwbGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgVGFnSW5wdXRDb21wb25lbnQsXG4gICAgICAgIERlbGV0ZUljb25Db21wb25lbnQsXG4gICAgICAgIFRhZ0lucHV0Rm9ybSxcbiAgICAgICAgVGFnQ29tcG9uZW50LFxuICAgICAgICBIaWdobGlnaHRQaXBlLFxuICAgICAgICBUYWdJbnB1dERyb3Bkb3duLFxuICAgICAgICBUYWdSaXBwbGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBEcmFnUHJvdmlkZXIsXG4gICAgICAgIHsgcHJvdmlkZTogQ09NUE9TSVRJT05fQlVGRkVSX01PREUsIHVzZVZhbHVlOiBmYWxzZSB9LFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgVGFnSW5wdXRNb2R1bGUge1xuICAgIC8qKlxuICAgICAqIEBuYW1lIHdpdGhEZWZhdWx0c1xuICAgICAqIEBwYXJhbSBvcHRpb25zIHtPcHRpb25zfVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgd2l0aERlZmF1bHRzKG9wdGlvbnM6IE9wdGlvbnMpOiB2b2lkIHtcbiAgICAgICAgb3B0aW9uc1Byb3ZpZGVyLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgfVxufVxuIl19