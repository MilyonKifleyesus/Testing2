// Client Projects and Vehicles Data
// Each client can have their own projects and vehicles assigned

export interface ClientProject {
  id: string;
  name: string;
}

export interface ClientVehicle {
  id: string;
  name: string;
}

// Projects specific to Eric Jolliffe (York Region Transit)
export const clientProjects: ClientProject[] = [
  { id: 'all', name: 'All Projects' },
  { id: 'proj1', name: 'Project Alpha' },
  { id: 'proj2', name: 'Project Beta' },
  { id: 'proj3', name: 'Project Gamma' },
  { id: 'proj4', name: 'Project Delta' },
];

// Vehicles specific to Eric Jolliffe (York Region Transit)
export const clientVehicles: ClientVehicle[] = [
  { id: 'all', name: 'All Vehicles' },
  { id: 'veh1', name: 'Bus-001' },
  { id: 'veh2', name: 'Bus-002' },
  { id: 'veh3', name: 'Bus-003' },
  { id: 'veh4', name: 'Bus-004' },
  { id: 'veh5', name: 'Bus-005' },
];
