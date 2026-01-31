/**
 * War Room Dashboard Interfaces
 * Data models for the Tactical Green War Room Command Center
 */

// Node Types
export type NodeType = 'Hub' | 'Facility' | 'Center' | 'Terminal';
export type NodeStatus = 'OPTIMAL' | 'ONLINE' | 'ACTIVE' | 'OFFLINE';

// Fleet hierarchy levels
export type FleetLevel = 'parent' | 'subsidiary' | 'factory';
export type MapViewMode = FleetLevel;

// Operational status for parent/subsidiary entities
export type OperationalStatus = 'ACTIVE' | 'PAUSED' | 'MAINTENANCE';

// Hub Status Types
export type HubStatus = 'OPTIMAL' | 'ONLINE' | 'ACTIVE' | 'OFFLINE';

// Activity Log Status Types
export type ActivityStatus = 'ACTIVE' | 'INFO' | 'WARNING' | 'ERROR';

// Satellite Types
export type SatelliteType = 'GEO' | 'LEO' | 'MEO';
export type SatelliteConnectionStatus = 'LOCKED' | 'ACQUIRING' | 'OFFLINE';

/**
 * Fleet Metrics - Aggregated counts and stability values
 */
export interface FleetMetrics {
  assetCount: number;
  incidentCount: number;
  syncStability: number; // Percentage (0-100)
}

/**
 * Parent Group - Top level holding entity
 */
export interface ParentGroup {
  id: string;
  name: string;
  status: OperationalStatus;
  metrics: FleetMetrics;
  subsidiaries: SubsidiaryCompany[];
  description?: string;
  logo?: string | ArrayBuffer;
}

/**
 * Subsidiary Company - Operational entity under a parent group
 */
export interface SubsidiaryCompany {
  id: string;
  parentGroupId: string;
  name: string;
  status: OperationalStatus;
  metrics: FleetMetrics;
  factories: FactoryLocation[];
  hubs: Hub[];
  quantumChart: QuantumChartData;
  description?: string;
  location?: string;
  logo?: string | ArrayBuffer;
}

/**
 * Factory Location - Physical site belonging to a subsidiary
 */
export interface FactoryLocation {
  id: string;
  parentGroupId: string;
  subsidiaryId: string;
  name: string;
  city: string;
  country?: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  status: NodeStatus;
  syncStability: number;
  assets: number;
  incidents: number;
  description?: string;
  logo?: string | ArrayBuffer;
}

/**
 * Map Node - Represents a marker on the map (parent, subsidiary, or factory)
 */
export interface Node {
  id: string;
  name: string;
  company: string;
  companyId: string; // Entity id for selection in current map view
  city: string;
  description?: string;
  logo?: string | ArrayBuffer;
  country?: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  type: NodeType;
  status: NodeStatus;
  isHub?: boolean;
  hubCode?: string;
  level?: FleetLevel;
  parentGroupId?: string;
  subsidiaryId?: string;
  factoryId?: string;
}

/**
 * Hub - Operational hub with status and capacity
 */
export interface Hub {
  id: string;
  code: string; // e.g., 'NJN', 'PRM', 'IND'
  companyId: string;
  companyName: string;
  status: HubStatus;
  capacity: string; // e.g., 'MAX FLOW', '78% CAP', '84% CAP'
  capacityPercentage?: number;
  statusColor: string; // CSS class or color value
  capColor: string; // CSS class or color value
}

/**
 * Activity Log Entry - Operational event log
 */
export interface ActivityLog {
  id: string;
  timestamp: Date | string;
  status: ActivityStatus;
  title: string; // e.g., "KARSAN | TURKEY ASSEMBLY"
  description: string; // e.g., "PEAK EFFICIENCY // LOAD BALANCING COMPLETE"
  parentGroupId: string;
  subsidiaryId: string;
  factoryId: string;
  location?: string;
  logo?: string | ArrayBuffer; // Company logo (base64 or data URL)
  /** @deprecated Legacy fields retained for backward compatibility. */
  company?: string;
  /** @deprecated Legacy fields retained for backward compatibility. */
  companyId?: string;
}

/**
 * Network Metrics - Real-time network performance data
 */
export interface NetworkMetrics {
  dataFlowIntegrity: number; // Percentage (0-100)
  fleetSyncRate: number; // Active units count
  networkLatency: number; // Milliseconds
  latencyChange?: number; // Change from previous measurement
  nodeDensity: number; // Percentage (0-100)
  encryptionProtocol: string; // e.g., "QUANTUM-X"
  encryptionStatus: string; // e.g., "ACTIVE"
}

/**
 * Network Throughput - Bar chart data
 */
export interface NetworkThroughput {
  bars: number[]; // Array of bar heights (0-100)
  channelStatus: string; // e.g., "L-CHANNEL: ACTIVE"
  throughput: string; // e.g., "4.8 GBPS"
}

/**
 * Satellite Status - Connection status for satellite links
 */
export interface SatelliteStatus {
  id: string;
  name: string; // e.g., "SAT-01"
  type: SatelliteType;
  status: SatelliteConnectionStatus;
}

/**
 * Geopolitical Heatmap - Activity density grid
 */
export interface GeopoliticalHeatmap {
  grid: number[][]; // 2D array of activity density values (0-100)
  rows: number;
  cols: number;
}

/**
 * Quantum Chart Data - Historical stability data
 */
export interface QuantumChartData {
  dataPoints: number[]; // Array of 6 values (0-100)
  highlightedIndex?: number; // Index of highlighted bar
}

/**
 * Selected entity in the hierarchy
 */
export interface FleetSelection {
  level: FleetLevel;
  id: string;
  parentGroupId?: string;
  subsidiaryId?: string;
  factoryId?: string;
}

/**
 * Transit Route - Connection path between nodes
 */
export interface TransitRoute {
  id: string;
  from: string; // Node ID or name
  to: string; // Node ID or name
  fromCoordinates: {
    latitude: number;
    longitude: number;
  };
  toCoordinates: {
    latitude: number;
    longitude: number;
  };
  animated?: boolean; // Whether to show animated chevrons
  strokeColor?: string; // Line color
  strokeWidth?: number;
  dashArray?: string; // SVG dash array pattern (e.g., '5,5')
}

/**
 * War Room Dashboard State - Complete dashboard state
 */
export interface WarRoomState {
  nodes: Node[];
  transitRoutes: TransitRoute[];
  activityLogs: ActivityLog[];
  networkMetrics: NetworkMetrics;
  networkThroughput: NetworkThroughput;
  geopoliticalHeatmap: GeopoliticalHeatmap;
  satelliteStatuses: SatelliteStatus[];
  parentGroups: ParentGroup[];
  mapViewMode: MapViewMode;
  selectedEntity: FleetSelection | null;
  /** @deprecated Legacy field retained for backward compatibility. */
  selectedCompanyId?: string;
  /** @deprecated Legacy field retained for backward compatibility. */
  companies?: SubsidiaryCompany[];
}

/**
 * Company Data - Company-specific information.
 * @deprecated Legacy alias retained for compatibility with older imports.
 */
export type CompanyData = SubsidiaryCompany;
