// Client Tickets and Assets Data
// Stores statistics for tickets and assets per project and per vehicle

export interface VehicleStats {
  vehicleId: string;
  vehicleName: string;
  totalTickets: number;
  totalAssets: number;
  ticketsChangePercentage: number;
  assetsChangePercentage: number;
  ticketsStatus: 'increased' | 'decreased';
  assetsStatus: 'increased' | 'decreased';
}

export interface ProjectStats {
  projectId: string;
  projectName: string;
  totalTickets: number;
  totalAssets: number;
  ticketsChangePercentage: number;
  assetsChangePercentage: number;
  ticketsStatus: 'increased' | 'decreased';
  assetsStatus: 'increased' | 'decreased';
  vehicleName?: string; // Optional: only present when viewing vehicle-specific stats
  vehicles: VehicleStats[]; // Vehicle breakdown for this project
}

// All project statistics for Eric Jolliffe (York Region Transit)
export const projectStats: ProjectStats[] = [
  {
    projectId: 'all',
    projectName: 'Total',
    totalTickets: 156,
    totalAssets: 450,
    ticketsChangePercentage: 8,
    assetsChangePercentage: 5,
    ticketsStatus: 'increased',
    assetsStatus: 'increased',
    vehicles: [
      {
        vehicleId: 'veh1',
        vehicleName: 'Bus-001',
        totalTickets: 28,
        totalAssets: 85,
        ticketsChangePercentage: 6,
        assetsChangePercentage: 4,
        ticketsStatus: 'increased',
        assetsStatus: 'increased'
      },
      {
        vehicleId: 'veh2',
        vehicleName: 'Bus-002',
        totalTickets: 31,
        totalAssets: 92,
        ticketsChangePercentage: 9,
        assetsChangePercentage: 6,
        ticketsStatus: 'increased',
        assetsStatus: 'increased'
      },
      {
        vehicleId: 'veh3',
        vehicleName: 'Bus-003',
        totalTickets: 25,
        totalAssets: 78,
        ticketsChangePercentage: 5,
        assetsChangePercentage: 3,
        ticketsStatus: 'increased',
        assetsStatus: 'increased'
      },
      {
        vehicleId: 'veh4',
        vehicleName: 'Bus-004',
        totalTickets: 36,
        totalAssets: 105,
        ticketsChangePercentage: 12,
        assetsChangePercentage: 8,
        ticketsStatus: 'increased',
        assetsStatus: 'increased'
      },
      {
        vehicleId: 'veh5',
        vehicleName: 'Bus-005',
        totalTickets: 36,
        totalAssets: 90,
        ticketsChangePercentage: 7,
        assetsChangePercentage: 5,
        ticketsStatus: 'increased',
        assetsStatus: 'increased'
      }
    ]
  },
  {
    projectId: 'proj1',
    projectName: 'Alpha',
    totalTickets: 42,
    totalAssets: 120,
    ticketsChangePercentage: 12,
    assetsChangePercentage: 8,
    ticketsStatus: 'increased',
    assetsStatus: 'increased',
    vehicles: [
      {
        vehicleId: 'veh1',
        vehicleName: 'Bus-001',
        totalTickets: 8,
        totalAssets: 25,
        ticketsChangePercentage: 10,
        assetsChangePercentage: 6,
        ticketsStatus: 'increased',
        assetsStatus: 'increased'
      },
      {
        vehicleId: 'veh2',
        vehicleName: 'Bus-002',
        totalTickets: 9,
        totalAssets: 28,
        ticketsChangePercentage: 14,
        assetsChangePercentage: 9,
        ticketsStatus: 'increased',
        assetsStatus: 'increased'
      },
      {
        vehicleId: 'veh3',
        vehicleName: 'Bus-003',
        totalTickets: 7,
        totalAssets: 22,
        ticketsChangePercentage: 8,
        assetsChangePercentage: 5,
        ticketsStatus: 'increased',
        assetsStatus: 'increased'
      },
      {
        vehicleId: 'veh4',
        vehicleName: 'Bus-004',
        totalTickets: 10,
        totalAssets: 30,
        ticketsChangePercentage: 15,
        assetsChangePercentage: 10,
        ticketsStatus: 'increased',
        assetsStatus: 'increased'
      },
      {
        vehicleId: 'veh5',
        vehicleName: 'Bus-005',
        totalTickets: 8,
        totalAssets: 15,
        ticketsChangePercentage: 11,
        assetsChangePercentage: 7,
        ticketsStatus: 'increased',
        assetsStatus: 'increased'
      }
    ]
  },
  {
    projectId: 'proj2',
    projectName: 'Beta',
    totalTickets: 38,
    totalAssets: 95,
    ticketsChangePercentage: 5,
    assetsChangePercentage: 3,
    ticketsStatus: 'increased',
    assetsStatus: 'increased',
    vehicles: [
      {
        vehicleId: 'veh1',
        vehicleName: 'Bus-001',
        totalTickets: 7,
        totalAssets: 20,
        ticketsChangePercentage: 4,
        assetsChangePercentage: 2,
        ticketsStatus: 'increased',
        assetsStatus: 'increased'
      },
      {
        vehicleId: 'veh2',
        vehicleName: 'Bus-002',
        totalTickets: 8,
        totalAssets: 22,
        ticketsChangePercentage: 6,
        assetsChangePercentage: 3,
        ticketsStatus: 'increased',
        assetsStatus: 'increased'
      },
      {
        vehicleId: 'veh3',
        vehicleName: 'Bus-003',
        totalTickets: 6,
        totalAssets: 18,
        ticketsChangePercentage: 3,
        assetsChangePercentage: 1,
        ticketsStatus: 'increased',
        assetsStatus: 'increased'
      },
      {
        vehicleId: 'veh4',
        vehicleName: 'Bus-004',
        totalTickets: 9,
        totalAssets: 25,
        ticketsChangePercentage: 7,
        assetsChangePercentage: 4,
        ticketsStatus: 'increased',
        assetsStatus: 'increased'
      },
      {
        vehicleId: 'veh5',
        vehicleName: 'Bus-005',
        totalTickets: 8,
        totalAssets: 10,
        ticketsChangePercentage: 5,
        assetsChangePercentage: 2,
        ticketsStatus: 'increased',
        assetsStatus: 'increased'
      }
    ]
  },
  {
    projectId: 'proj3',
    projectName: 'Gamma',
    totalTickets: 45,
    totalAssets: 135,
    ticketsChangePercentage: 10,
    assetsChangePercentage: 6,
    ticketsStatus: 'increased',
    assetsStatus: 'increased',
    vehicles: [
      {
        vehicleId: 'veh1',
        vehicleName: 'Bus-001',
        totalTickets: 9,
        totalAssets: 28,
        ticketsChangePercentage: 8,
        assetsChangePercentage: 5,
        ticketsStatus: 'increased',
        assetsStatus: 'increased'
      },
      {
        vehicleId: 'veh2',
        vehicleName: 'Bus-002',
        totalTickets: 9,
        totalAssets: 30,
        ticketsChangePercentage: 11,
        assetsChangePercentage: 7,
        ticketsStatus: 'increased',
        assetsStatus: 'increased'
      },
      {
        vehicleId: 'veh3',
        vehicleName: 'Bus-003',
        totalTickets: 8,
        totalAssets: 26,
        ticketsChangePercentage: 9,
        assetsChangePercentage: 5,
        ticketsStatus: 'increased',
        assetsStatus: 'increased'
      },
      {
        vehicleId: 'veh4',
        vehicleName: 'Bus-004',
        totalTickets: 10,
        totalAssets: 30,
        ticketsChangePercentage: 12,
        assetsChangePercentage: 7,
        ticketsStatus: 'increased',
        assetsStatus: 'increased'
      },
      {
        vehicleId: 'veh5',
        vehicleName: 'Bus-005',
        totalTickets: 9,
        totalAssets: 21,
        ticketsChangePercentage: 10,
        assetsChangePercentage: 6,
        ticketsStatus: 'increased',
        assetsStatus: 'increased'
      }
    ]
  },
  {
    projectId: 'proj4',
    projectName: 'Delta',
    totalTickets: 31,
    totalAssets: 100,
    ticketsChangePercentage: 3,
    assetsChangePercentage: 4,
    ticketsStatus: 'decreased',
    assetsStatus: 'increased',
    vehicles: [
      {
        vehicleId: 'veh1',
        vehicleName: 'Bus-001',
        totalTickets: 4,
        totalAssets: 12,
        ticketsChangePercentage: 2,
        assetsChangePercentage: 2,
        ticketsStatus: 'decreased',
        assetsStatus: 'increased'
      },
      {
        vehicleId: 'veh2',
        vehicleName: 'Bus-002',
        totalTickets: 7,
        totalAssets: 12,
        ticketsChangePercentage: 4,
        assetsChangePercentage: 3,
        ticketsStatus: 'decreased',
        assetsStatus: 'increased'
      },
      {
        vehicleId: 'veh3',
        vehicleName: 'Bus-003',
        totalTickets: 4,
        totalAssets: 12,
        ticketsChangePercentage: 2,
        assetsChangePercentage: 2,
        ticketsStatus: 'decreased',
        assetsStatus: 'increased'
      },
      {
        vehicleId: 'veh4',
        vehicleName: 'Bus-004',
        totalTickets: 7,
        totalAssets: 40,
        ticketsChangePercentage: 5,
        assetsChangePercentage: 6,
        ticketsStatus: 'decreased',
        assetsStatus: 'increased'
      },
      {
        vehicleId: 'veh5',
        vehicleName: 'Bus-005',
        totalTickets: 9,
        totalAssets: 24,
        ticketsChangePercentage: 3,
        assetsChangePercentage: 3,
        ticketsStatus: 'decreased',
        assetsStatus: 'increased'
      }
    ]
  },
];

// Helper function to get stats for a specific project
export function getProjectStats(projectId: string): ProjectStats {
  return projectStats.find(p => p.projectId === projectId) || projectStats[0];
}

// Helper function to get stats for a specific project and vehicle
export function getProjectVehicleStats(projectId: string, vehicleId: string): ProjectStats {
  const project = projectStats.find(p => p.projectId === projectId) || projectStats[0];
  
  if (vehicleId === 'all') {
    // Return project-level stats
    return project;
  }
  
  // Return vehicle-specific stats within the project, but keep project name
  const vehicle = project.vehicles.find(v => v.vehicleId === vehicleId);
  if (vehicle) {
    // Combine vehicle stats with project name
    return {
      ...project,
      totalTickets: vehicle.totalTickets,
      totalAssets: vehicle.totalAssets,
      ticketsChangePercentage: vehicle.ticketsChangePercentage,
      assetsChangePercentage: vehicle.assetsChangePercentage,
      ticketsStatus: vehicle.ticketsStatus,
      assetsStatus: vehicle.assetsStatus,
      vehicleName: vehicle.vehicleName
    };
  }
  
  return project;
}
