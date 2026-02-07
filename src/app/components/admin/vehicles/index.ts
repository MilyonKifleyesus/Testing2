/**
 * Vehicle Module Public API
 * 
 * @description
 * Central export point for all vehicle-related models, services, and types.
 * Use this for cleaner imports across the application.
 * 
 * @example
 * // Instead of:
 * import { Vehicle } from './vehicles/models/vehicle.model';
 * import { VehicleService } from './vehicles/services/vehicle.service';
 * 
 * // Use:
 * import { Vehicle, VehicleService } from './vehicles';
 */

// Models
export * from './models/vehicle.model';

// Services
export { VehicleUtilService } from './services/vehicle-util.service';

// Components (if needed for lazy loading)
export { VehicleListComponent } from './vehicle-list/vehicle-list.component';
export { VehicleViewComponent } from './vehicle-view/vehicle-view.component';
