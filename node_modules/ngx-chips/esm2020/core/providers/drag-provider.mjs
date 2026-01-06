import { Injectable } from '@angular/core';
import { DRAG_AND_DROP_KEY } from '../../core/constants';
import * as i0 from "@angular/core";
export class DragProvider {
    constructor() {
        this.state = {
            dragging: false,
            dropping: false,
            index: undefined
        };
    }
    /**
     * @name setDraggedItem
     * @param event
     * @param tag
     */
    setDraggedItem(event, tag) {
        if (event && event.dataTransfer) {
            event.dataTransfer.setData(DRAG_AND_DROP_KEY, JSON.stringify(tag));
        }
    }
    /**
     * @name getDraggedItem
     * @param event
     */
    getDraggedItem(event) {
        if (event && event.dataTransfer) {
            const data = event.dataTransfer.getData(DRAG_AND_DROP_KEY);
            try {
                return JSON.parse(data);
            }
            catch {
                return;
            }
        }
    }
    /**
     * @name setSender
     * @param sender
     */
    setSender(sender) {
        this.sender = sender;
    }
    /**
     * @name setReceiver
     * @param receiver
     */
    setReceiver(receiver) {
        this.receiver = receiver;
    }
    /**
     * @name onTagDropped
     * @param tag
     * @param indexDragged
     * @param indexDropped
     */
    onTagDropped(tag, indexDragged, indexDropped) {
        this.onDragEnd();
        this.sender.onRemoveRequested(tag, indexDragged);
        this.receiver.onAddingRequested(false, tag, indexDropped);
    }
    /**
     * @name setState
     * @param state
     */
    setState(state) {
        this.state = { ...this.state, ...state };
    }
    /**
     * @name getState
     * @param key
     */
    getState(key) {
        return key ? this.state[key] : this.state;
    }
    /**
     * @name onDragEnd
     */
    onDragEnd() {
        this.setState({
            dragging: false,
            dropping: false,
            index: undefined
        });
    }
}
DragProvider.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DragProvider, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
DragProvider.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DragProvider });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DragProvider, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vZHVsZXMvY29yZS9wcm92aWRlcnMvZHJhZy1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQVd6RCxNQUFNLE9BQU8sWUFBWTtJQUR6QjtRQUtXLFVBQUssR0FBVTtZQUNsQixRQUFRLEVBQUUsS0FBSztZQUNmLFFBQVEsRUFBRSxLQUFLO1lBQ2YsS0FBSyxFQUFFLFNBQVM7U0FDbkIsQ0FBQztLQW1GTDtJQWpGRzs7OztPQUlHO0lBQ0ksY0FBYyxDQUFDLEtBQWdCLEVBQUUsR0FBZTtRQUNuRCxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsWUFBWSxFQUFFO1lBQzdCLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN0RTtJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSSxjQUFjLENBQUMsS0FBZ0I7UUFDbEMsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLFlBQVksRUFBRTtZQUM3QixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQzNELElBQUk7Z0JBQ0EsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBZSxDQUFDO2FBQ3pDO1lBQUMsTUFBTTtnQkFDSixPQUFPO2FBQ1Y7U0FDSjtJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSSxTQUFTLENBQUMsTUFBeUI7UUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFdBQVcsQ0FBQyxRQUEyQjtRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxZQUFZLENBQUMsR0FBYSxFQUFFLFlBQW9CLEVBQUUsWUFBcUI7UUFDMUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWpCLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksUUFBUSxDQUFDLEtBQTBDO1FBQ3RELElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksUUFBUSxDQUFDLEdBQW1CO1FBQy9CLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQzlDLENBQUM7SUFFRDs7T0FFRztJQUNJLFNBQVM7UUFDWixJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ1YsUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsS0FBSztZQUNmLEtBQUssRUFBRSxTQUFTO1NBQ25CLENBQUMsQ0FBQztJQUNQLENBQUM7O3lHQTFGUSxZQUFZOzZHQUFaLFlBQVk7MkZBQVosWUFBWTtrQkFEeEIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhZ0lucHV0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90YWctaW5wdXQvdGFnLWlucHV0JztcbmltcG9ydCB7IFRhZ01vZGVsIH0gZnJvbSAnLi4vdGFnLW1vZGVsJztcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgRHJhZ2dlZFRhZyB7XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgICB0YWc6IFRhZ01vZGVsO1xuICAgIHpvbmU6IHN0cmluZztcbn1cblxuaW1wb3J0IHsgRFJBR19BTkRfRFJPUF9LRVkgfSBmcm9tICcuLi8uLi9jb3JlL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBTdGF0ZSB7XG4gICAgZHJhZ2dpbmc6IGJvb2xlYW47XG4gICAgZHJvcHBpbmc6IGJvb2xlYW47XG4gICAgaW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGRlY2xhcmUgdHlwZSBTdGF0ZVByb3BlcnR5ID0ga2V5b2YgU3RhdGU7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEcmFnUHJvdmlkZXIge1xuICAgIHB1YmxpYyBzZW5kZXI6IFRhZ0lucHV0Q29tcG9uZW50O1xuICAgIHB1YmxpYyByZWNlaXZlcjogVGFnSW5wdXRDb21wb25lbnQ7XG5cbiAgICBwdWJsaWMgc3RhdGU6IFN0YXRlID0ge1xuICAgICAgICBkcmFnZ2luZzogZmFsc2UsXG4gICAgICAgIGRyb3BwaW5nOiBmYWxzZSxcbiAgICAgICAgaW5kZXg6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZXREcmFnZ2VkSXRlbVxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqIEBwYXJhbSB0YWdcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0RHJhZ2dlZEl0ZW0oZXZlbnQ6IERyYWdFdmVudCwgdGFnOiBEcmFnZ2VkVGFnKTogdm9pZCB7XG4gICAgICAgIGlmIChldmVudCAmJiBldmVudC5kYXRhVHJhbnNmZXIpIHtcbiAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKERSQUdfQU5EX0RST1BfS0VZLCBKU09OLnN0cmluZ2lmeSh0YWcpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGdldERyYWdnZWRJdGVtXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICovXG4gICAgcHVibGljIGdldERyYWdnZWRJdGVtKGV2ZW50OiBEcmFnRXZlbnQpOiBEcmFnZ2VkVGFnIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LmRhdGFUcmFuc2Zlcikge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKERSQUdfQU5EX0RST1BfS0VZKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSkgYXMgRHJhZ2dlZFRhZztcbiAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHNldFNlbmRlclxuICAgICAqIEBwYXJhbSBzZW5kZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0U2VuZGVyKHNlbmRlcjogVGFnSW5wdXRDb21wb25lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZW5kZXIgPSBzZW5kZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2V0UmVjZWl2ZXJcbiAgICAgKiBAcGFyYW0gcmVjZWl2ZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0UmVjZWl2ZXIocmVjZWl2ZXI6IFRhZ0lucHV0Q29tcG9uZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVjZWl2ZXIgPSByZWNlaXZlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvblRhZ0Ryb3BwZWRcbiAgICAgKiBAcGFyYW0gdGFnXG4gICAgICogQHBhcmFtIGluZGV4RHJhZ2dlZFxuICAgICAqIEBwYXJhbSBpbmRleERyb3BwZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgb25UYWdEcm9wcGVkKHRhZzogVGFnTW9kZWwsIGluZGV4RHJhZ2dlZDogbnVtYmVyLCBpbmRleERyb3BwZWQ/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbkRyYWdFbmQoKTtcblxuICAgICAgICB0aGlzLnNlbmRlci5vblJlbW92ZVJlcXVlc3RlZCh0YWcsIGluZGV4RHJhZ2dlZCk7XG4gICAgICAgIHRoaXMucmVjZWl2ZXIub25BZGRpbmdSZXF1ZXN0ZWQoZmFsc2UsIHRhZywgaW5kZXhEcm9wcGVkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZXRTdGF0ZVxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRTdGF0ZShzdGF0ZTogeyBbSyBpbiBTdGF0ZVByb3BlcnR5XT86IFN0YXRlW0tdIH0pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBnZXRTdGF0ZVxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0U3RhdGUoa2V5PzogU3RhdGVQcm9wZXJ0eSk6IFN0YXRlIHwgU3RhdGVbU3RhdGVQcm9wZXJ0eV0ge1xuICAgICAgICByZXR1cm4ga2V5ID8gdGhpcy5zdGF0ZVtrZXldIDogdGhpcy5zdGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvbkRyYWdFbmRcbiAgICAgKi9cbiAgICBwdWJsaWMgb25EcmFnRW5kKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGRyb3BwaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGluZGV4OiB1bmRlZmluZWRcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19