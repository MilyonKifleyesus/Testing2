// Client Profile Data
// This file stores client-specific profile information

export interface ClientProfile {
  id: string;
  name: string;
  clientId: string;
  vehicle: string;
  logoUrl: string;
  company?: string;
  email?: string;
  phone?: string;
}

// Hardcoded client profiles
export const clientProfiles: ClientProfile[] = [
  {
    id: 'client-001',
    name: 'Eric Jolliffe',
    clientId: 'CL-001',
    vehicle: 'York Region Transit',
    logoUrl: './assets/images/pngs/York_Region_Transit_logo.png',
    company: 'York Region Transit',
    email: 'eric.jolliffe@yrt.ca',
    phone: '(905) 555-0123'
  },
  {
    id: 'client-002',
    name: 'John Smith',
    clientId: 'CL-002',
    vehicle: 'Toronto Transit Commission',
    logoUrl: './assets/images/pngs/TTC_logo.png',
    company: 'TTC',
    email: 'john.smith@ttc.ca',
    phone: '(416) 555-0456'
  }
  // Add more clients as needed
];

// Get client by ID
export function getClientById(id: string): ClientProfile | undefined {
  return clientProfiles.find(client => client.id === id);
}

// Get client by clientId
export function getClientByClientId(clientId: string): ClientProfile | undefined {
  return clientProfiles.find(client => client.clientId === clientId);
}

// Default client (Eric Jolliffe)
export const defaultClientProfile: ClientProfile = clientProfiles[0];
