import { NgModule } from '@angular/core';
import { InputMaskConfig, INPUT_MASK_CONFIG } from './config';
import { InputMaskDirective } from './input-mask.directive';
import * as i0 from "@angular/core";
export class InputMaskModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbWFzay5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ25lYXQvaW5wdXQtbWFzay9zcmMvbGliL2lucHV0LW1hc2subW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBWTVELE1BQU0sT0FBTyxlQUFlO0lBQzFCLE1BQU0sQ0FBQyxPQUFPLENBQ1osTUFBaUM7UUFFakMsT0FBTztZQUNMLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQztTQUM5RCxDQUFDO0lBQ0osQ0FBQzs7NEdBUlUsZUFBZTs2R0FBZixlQUFlLGlCQVRYLGtCQUFrQixhQUN2QixrQkFBa0I7NkdBUWpCLGVBQWUsYUFQZjtRQUNUO1lBQ0UsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixRQUFRLEVBQUUsZUFBZTtTQUMxQjtLQUNGOzJGQUVVLGVBQWU7a0JBVjNCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7b0JBQ2xDLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO29CQUM3QixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsUUFBUSxFQUFFLGVBQWU7eUJBQzFCO3FCQUNGO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0TWFza0NvbmZpZywgSU5QVVRfTUFTS19DT05GSUcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBJbnB1dE1hc2tEaXJlY3RpdmUgfSBmcm9tICcuL2lucHV0LW1hc2suZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbSW5wdXRNYXNrRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW0lucHV0TWFza0RpcmVjdGl2ZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IElOUFVUX01BU0tfQ09ORklHLFxuICAgICAgdXNlQ2xhc3M6IElucHV0TWFza0NvbmZpZyxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dE1hc2tNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChcbiAgICBjb25maWc/OiBQYXJ0aWFsPElucHV0TWFza0NvbmZpZz5cbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxJbnB1dE1hc2tNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IElucHV0TWFza01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogSU5QVVRfTUFTS19DT05GSUcsIHVzZVZhbHVlOiBjb25maWcgfV0sXG4gICAgfTtcbiAgfVxufVxuIl19