/**
 * Vehicle Model
 * Represents a vehicle entity in the fleet management system
 */
export interface Vehicle {
  id: number;
  client: string;
  fleetNumber: string;
  make: string;
  model: string;
  vin: string;
  mileageType: string;
  propulsion: string;
  status: VehicleStatus;
  imageUrl: string;
  inspectionDate?: string;
  inspector?: string | Inspector;
}

/**
 * Detailed Vehicle Model
 * Extended vehicle information for detail view
 */
export interface VehicleDetail {
  id: number;
  client: string;
  fleetNumber: string;
  make: string;
  model: string;
  vin: string;
  mileageType: string;
  propulsion: string;
  status: VehicleStatus;
  imageUrl: string;
  inspectionDate?: string;
  frameNumber: string;
  year: number;
  color: string;
  licensePlate: string;
  inspector: Inspector;
  shippingDetail: ShippingDetail;
  media: MediaFiles;
  images: VehicleImages;
  inspectionData: InspectionData;
  defects: Defect[];
  tickets: Ticket[];
  snags: Snag[];
}

/**
 * Inspector Information
 */
export interface Inspector {
  name: string;
  email: string;
  avatar: string;
}

/**
 * Shipping Location Details
 */
export interface ShippingDetail {
  frontCurb: string;
  backStreet: string;
}

/**
 * Media Files (Videos)
 */
export interface MediaFiles {
  interiorVideo: string;
  exteriorVideo: string;
}

/**
 * Vehicle Image Collection
 */
export interface VehicleImages {
  front: string;
  back: string;
  left: string;
  right: string;
  interior: string;
}

/**
 * Inspection Data
 */
export interface InspectionData {
  date: string;
  duration: string;
  mileage: number;
}

/**
 * Defect by Area
 */
export interface Defect {
  area: string;
  count: number;
  severity: DefectSeverity;
}

/**
 * Ticket Information
 */
export interface Ticket {
  id: string;
  title: string;
  priority: TicketPriority;
  status: TicketStatus;
  createdDate: string;
}

/**
 * Snag Information
 */
export interface Snag {
  id: string;
  description: string;
  location: string;
  severity: DefectSeverity;
  status: SnagStatus;
}

/**
 * Timeline Event
 */
export interface TimelineEvent {
  date: string;
  time?: string;
  event: string;
  user: string;
  icon: string;
  color: string;
  avatar?: string;
  status?: string;
  description?: string;
}

/**
 * Gallery Image
 */
export interface GalleryImage {
  url: string;
  label: string;
}

/**
 * Vehicle Status Enum
 */
export type VehicleStatus = 'completed' | 'in-progress' | 'pending';

/**
 * Defect Severity Enum
 */
export type DefectSeverity = 'low' | 'medium' | 'high';

/**
 * Ticket Priority Enum
 */
export type TicketPriority = 'low' | 'medium' | 'high';

/**
 * Ticket Status Enum
 */
export type TicketStatus = 'open' | 'in-progress' | 'resolved' | 'closed';

/**
 * Snag Status Enum
 */
export type SnagStatus = 'open' | 'in-progress' | 'resolved' | 'closed';

/**
 * Vehicle Filter Criteria
 */
export interface VehicleFilter {
  searchTerm?: string;
  client?: string;
  propulsion?: string;
  status?: VehicleStatus;
}
