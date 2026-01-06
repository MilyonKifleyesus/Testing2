import { Input, Directive } from '@angular/core';
import { OptionsProvider } from './providers/options-provider';
import * as i0 from "@angular/core";
export function isObject(obj) {
    return obj === Object(obj);
}
export class TagInputAccessor {
    constructor() {
        this._items = [];
        /**
         * @name displayBy
         */
        this.displayBy = OptionsProvider.defaults.tagInput.displayBy;
        /**
         * @name identifyBy
         */
        this.identifyBy = OptionsProvider.defaults.tagInput.identifyBy;
    }
    get items() {
        return this._items;
    }
    set items(items) {
        this._items = items;
        this._onChangeCallback(this._items);
    }
    onTouched() {
        this._onTouchedCallback();
    }
    writeValue(items) {
        this._items = items || [];
    }
    registerOnChange(fn) {
        this._onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this._onTouchedCallback = fn;
    }
    /**
     * @name getItemValue
     * @param item
     * @param fromDropdown
     */
    getItemValue(item, fromDropdown = false) {
        const property = fromDropdown && this.dropdown ? this.dropdown.identifyBy : this.identifyBy;
        return isObject(item) ? item[property] : item;
    }
    /**
     * @name getItemDisplay
     * @param item
     * @param fromDropdown
     */
    getItemDisplay(item, fromDropdown = false) {
        const property = fromDropdown && this.dropdown ? this.dropdown.displayBy : this.displayBy;
        return isObject(item) ? item[property] : item;
    }
    /**
     * @name getItemsWithout
     * @param index
     */
    getItemsWithout(index) {
        return this.items.filter((item, position) => position !== index);
    }
}
TagInputAccessor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TagInputAccessor, deps: [], target: i0.ɵɵFactoryTarget.Directive });
TagInputAccessor.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: TagInputAccessor, inputs: { displayBy: "displayBy", identifyBy: "identifyBy" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TagInputAccessor, decorators: [{
            type: Directive
        }], propDecorators: { displayBy: [{
                type: Input
            }], identifyBy: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9tb2R1bGVzL2NvcmUvYWNjZXNzb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUkvRCxNQUFNLFVBQVUsUUFBUSxDQUFDLEdBQVE7SUFDN0IsT0FBTyxHQUFHLEtBQUssTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQy9CLENBQUM7QUFHRCxNQUFNLE9BQU8sZ0JBQWdCO0lBRDdCO1FBRVksV0FBTSxHQUFlLEVBQUUsQ0FBQztRQU1oQzs7V0FFRztRQUNhLGNBQVMsR0FBVyxlQUFlLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFFaEY7O1dBRUc7UUFDYSxlQUFVLEdBQVcsZUFBZSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO0tBc0RyRjtJQXBERyxJQUFXLEtBQUs7UUFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQVcsS0FBSyxDQUFDLEtBQWlCO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVNLFNBQVM7UUFDWixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU0sVUFBVSxDQUFDLEtBQVk7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTSxnQkFBZ0IsQ0FBQyxFQUFPO1FBQzNCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVNLGlCQUFpQixDQUFDLEVBQU87UUFDNUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFlBQVksQ0FBQyxJQUFjLEVBQUUsWUFBWSxHQUFHLEtBQUs7UUFDcEQsTUFBTSxRQUFRLEdBQUcsWUFBWSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzVGLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNsRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGNBQWMsQ0FBQyxJQUFjLEVBQUUsWUFBWSxHQUFHLEtBQUs7UUFDdEQsTUFBTSxRQUFRLEdBQUcsWUFBWSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFGLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNsRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ08sZUFBZSxDQUFDLEtBQWE7UUFDbkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsS0FBSyxLQUFLLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs2R0FwRVEsZ0JBQWdCO2lHQUFoQixnQkFBZ0I7MkZBQWhCLGdCQUFnQjtrQkFENUIsU0FBUzs4QkFXVSxTQUFTO3NCQUF4QixLQUFLO2dCQUtVLFVBQVU7c0JBQXpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElucHV0LCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9wdGlvbnNQcm92aWRlciB9IGZyb20gJy4vcHJvdmlkZXJzL29wdGlvbnMtcHJvdmlkZXInO1xuaW1wb3J0IHsgVGFnSW5wdXREcm9wZG93biB9IGZyb20gJy4uL2NvbXBvbmVudHMvZHJvcGRvd24vdGFnLWlucHV0LWRyb3Bkb3duLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWdNb2RlbCB9IGZyb20gJy4vdGFnLW1vZGVsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KG9iajogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG9iaiA9PT0gT2JqZWN0KG9iaik7XG59XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGNsYXNzIFRhZ0lucHV0QWNjZXNzb3IgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gICAgcHJpdmF0ZSBfaXRlbXM6IFRhZ01vZGVsW10gPSBbXTtcbiAgICBwcml2YXRlIF9vblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcbiAgICBwcml2YXRlIF9vbkNoYW5nZUNhbGxiYWNrOiAoaXRlbXM6IFRhZ01vZGVsW10pID0+IHZvaWQ7XG5cbiAgICBwdWJsaWMgZHJvcGRvd246IFRhZ0lucHV0RHJvcGRvd247XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBkaXNwbGF5QnlcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZGlzcGxheUJ5OiBzdHJpbmcgPSBPcHRpb25zUHJvdmlkZXIuZGVmYXVsdHMudGFnSW5wdXQuZGlzcGxheUJ5O1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaWRlbnRpZnlCeVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBpZGVudGlmeUJ5OiBzdHJpbmcgPSBPcHRpb25zUHJvdmlkZXIuZGVmYXVsdHMudGFnSW5wdXQuaWRlbnRpZnlCeTtcblxuICAgIHB1YmxpYyBnZXQgaXRlbXMoKTogVGFnTW9kZWxbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGl0ZW1zKGl0ZW1zOiBUYWdNb2RlbFtdKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sodGhpcy5faXRlbXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblRvdWNoZWQoKSB7XG4gICAgICAgIHRoaXMuX29uVG91Y2hlZENhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlVmFsdWUoaXRlbXM6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1zID0gaXRlbXMgfHwgW107XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xuICAgICAgICB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fb25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBnZXRJdGVtVmFsdWVcbiAgICAgKiBAcGFyYW0gaXRlbVxuICAgICAqIEBwYXJhbSBmcm9tRHJvcGRvd25cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0SXRlbVZhbHVlKGl0ZW06IFRhZ01vZGVsLCBmcm9tRHJvcGRvd24gPSBmYWxzZSk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0gZnJvbURyb3Bkb3duICYmIHRoaXMuZHJvcGRvd24gPyB0aGlzLmRyb3Bkb3duLmlkZW50aWZ5QnkgOiB0aGlzLmlkZW50aWZ5Qnk7XG4gICAgICAgIHJldHVybiBpc09iamVjdChpdGVtKSA/IGl0ZW1bcHJvcGVydHldIDogaXRlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBnZXRJdGVtRGlzcGxheVxuICAgICAqIEBwYXJhbSBpdGVtXG4gICAgICogQHBhcmFtIGZyb21Ecm9wZG93blxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRJdGVtRGlzcGxheShpdGVtOiBUYWdNb2RlbCwgZnJvbURyb3Bkb3duID0gZmFsc2UpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IGZyb21Ecm9wZG93biAmJiB0aGlzLmRyb3Bkb3duID8gdGhpcy5kcm9wZG93bi5kaXNwbGF5QnkgOiB0aGlzLmRpc3BsYXlCeTtcbiAgICAgICAgcmV0dXJuIGlzT2JqZWN0KGl0ZW0pID8gaXRlbVtwcm9wZXJ0eV0gOiBpdGVtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGdldEl0ZW1zV2l0aG91dFxuICAgICAqIEBwYXJhbSBpbmRleFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRJdGVtc1dpdGhvdXQoaW5kZXg6IG51bWJlcik6IFRhZ01vZGVsW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoKGl0ZW0sIHBvc2l0aW9uKSA9PiBwb3NpdGlvbiAhPT0gaW5kZXgpO1xuICAgIH1cbn1cbiJdfQ==