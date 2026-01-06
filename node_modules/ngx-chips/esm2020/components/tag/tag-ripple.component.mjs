import { Component, Input } from '@angular/core';
import { animate, trigger, style, transition, keyframes, state } from '@angular/animations';
import * as i0 from "@angular/core";
export class TagRipple {
    constructor() {
        this.state = 'none';
    }
}
TagRipple.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TagRipple, deps: [], target: i0.ɵɵFactoryTarget.Component });
TagRipple.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: TagRipple, selector: "tag-ripple", inputs: { state: "state" }, ngImport: i0, template: `
        <div class="tag-ripple" [@ink]="state"></div>
    `, isInline: true, styles: [":host{width:100%;height:100%;left:0;overflow:hidden;position:absolute}.tag-ripple{background:rgba(0,0,0,.1);top:50%;left:50%;height:100%;transform:translate(-50%,-50%);position:absolute}\n"], animations: [
        trigger('ink', [
            state('none', style({ width: 0, opacity: 0 })),
            transition('none => clicked', [
                animate(300, keyframes([
                    style({ opacity: 1, offset: 0, width: '30%', borderRadius: '100%' }),
                    style({ opacity: 1, offset: 0.5, width: '50%' }),
                    style({ opacity: 0.5, offset: 1, width: '100%', borderRadius: '16px' })
                ]))
            ])
        ])
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TagRipple, decorators: [{
            type: Component,
            args: [{
                    selector: 'tag-ripple',
                    styles: [`
        :host {
            width: 100%;
            height: 100%;
            left: 0;
            overflow: hidden;
            position: absolute;
        }

        .tag-ripple {
            background: rgba(0, 0, 0, 0.1);
            top: 50%;
            left: 50%;
            height: 100%;
            transform: translate(-50%, -50%);
            position: absolute;
        }
    `],
                    template: `
        <div class="tag-ripple" [@ink]="state"></div>
    `,
                    animations: [
                        trigger('ink', [
                            state('none', style({ width: 0, opacity: 0 })),
                            transition('none => clicked', [
                                animate(300, keyframes([
                                    style({ opacity: 1, offset: 0, width: '30%', borderRadius: '100%' }),
                                    style({ opacity: 1, offset: 0.5, width: '50%' }),
                                    style({ opacity: 0.5, offset: 1, width: '100%', borderRadius: '16px' })
                                ]))
                            ])
                        ])
                    ]
                }]
        }], propDecorators: { state: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLXJpcHBsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9tb2R1bGVzL2NvbXBvbmVudHMvdGFnL3RhZy1yaXBwbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsS0FBSyxFQUNSLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFDSCxPQUFPLEVBQ1AsT0FBTyxFQUNQLEtBQUssRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULEtBQUssRUFDUixNQUFNLHFCQUFxQixDQUFDOztBQXNDN0IsTUFBTSxPQUFPLFNBQVM7SUFwQ3RCO1FBcUNvQixVQUFLLEdBQUcsTUFBTSxDQUFDO0tBQ2xDOztzR0FGWSxTQUFTOzBGQUFULFNBQVMsOEVBaEJSOztLQUVULHdPQUNXO1FBQ1IsT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNYLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUM1QyxVQUFVLENBQUMsaUJBQWlCLEVBQUU7Z0JBQzFCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDO29CQUNuQixLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFDLENBQUM7b0JBQ2xFLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUM7b0JBQzlDLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUMsQ0FBQztpQkFDeEUsQ0FBQyxDQUFDO2FBQ04sQ0FBQztTQUNMLENBQUM7S0FDTDsyRkFFUSxTQUFTO2tCQXBDckIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsTUFBTSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBaUJSLENBQUM7b0JBQ0YsUUFBUSxFQUFFOztLQUVUO29CQUNELFVBQVUsRUFBRTt3QkFDUixPQUFPLENBQUMsS0FBSyxFQUFFOzRCQUNYLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQzs0QkFDNUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFO2dDQUMxQixPQUFPLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQztvQ0FDbkIsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBQyxDQUFDO29DQUNsRSxLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDO29DQUM5QyxLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFDLENBQUM7aUNBQ3hFLENBQUMsQ0FBQzs2QkFDTixDQUFDO3lCQUNMLENBQUM7cUJBQ0w7aUJBQ0o7OEJBRW1CLEtBQUs7c0JBQXBCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBJbnB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5pbXBvcnQge1xuICAgIGFuaW1hdGUsXG4gICAgdHJpZ2dlcixcbiAgICBzdHlsZSxcbiAgICB0cmFuc2l0aW9uLFxuICAgIGtleWZyYW1lcyxcbiAgICBzdGF0ZVxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0YWctcmlwcGxlJyxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIH1cblxuICAgICAgICAudGFnLXJpcHBsZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB9XG4gICAgYF0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInRhZy1yaXBwbGVcIiBbQGlua109XCJzdGF0ZVwiPjwvZGl2PlxuICAgIGAsXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCdpbmsnLCBbXG4gICAgICAgICAgICBzdGF0ZSgnbm9uZScsIHN0eWxlKHt3aWR0aDogMCwgb3BhY2l0eTogMH0pKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ25vbmUgPT4gY2xpY2tlZCcsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIG9mZnNldDogMCwgd2lkdGg6ICczMCUnLCBib3JkZXJSYWRpdXM6ICcxMDAlJ30pLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMSwgb2Zmc2V0OiAwLjUsIHdpZHRoOiAnNTAlJ30pLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMC41LCBvZmZzZXQ6IDEsIHdpZHRoOiAnMTAwJScsIGJvcmRlclJhZGl1czogJzE2cHgnfSlcbiAgICAgICAgICAgICAgICBdKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBUYWdSaXBwbGUge1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdGF0ZSA9ICdub25lJztcbn1cbiJdfQ==