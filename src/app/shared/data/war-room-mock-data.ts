import {
  Node,
  Hub,
  ActivityLog,
  ActivityStatus,
  NetworkMetrics,
  NetworkThroughput,
  GeopoliticalHeatmap,
  SatelliteStatus,
  ParentGroup,
  SubsidiaryCompany,
  FactoryLocation,
  TransitRoute,
  WarRoomState,
  FleetMetrics,
} from '../models/war-room.interface';

/**
 * Mock data for War Room Dashboard
 * Multi-tier hierarchy: Parent Group -> Subsidiary -> Factory Location
 */

// Parent Group IDs
const PARENT_GROUP_IDS = {
  NAMG: 'namg',
  TMG: 'tmg',
};

// Subsidiary IDs
const SUBSIDIARY_IDS = {
  NEW_FLYER: 'new-flyer',
  NOVA: 'nova',
  MCI: 'mci',
  PREVOST: 'prevost',
  ARBOC: 'arboc',
  ENC: 'enc',
  TAM: 'tam',
  KARSAN: 'karsan',
  TEMSA: 'temsa',
  FLEETZERO: 'fleetzero',
};

// Factory IDs
const FACTORY_IDS = {
  NEW_FLYER_WINNIPEG: 'new-flyer-winnipeg',
  NEW_FLYER_CROOKSTON: 'new-flyer-crookston',
  NEW_FLYER_ST_CLOUD: 'new-flyer-st-cloud',
  NEW_FLYER_ANNISTON: 'new-flyer-anniston',
  NOVA_ST_EUSTACHE: 'nova-st-eustache',
  NOVA_ST_FRANCOIS: 'nova-saint-francois-du-lac',
  MCI_DES_PLAINES: 'mci-des-plaines',
  MCI_MONTERREY: 'mci-monterrey',
  PREVOST_STE_CLAIRE: 'prevost-sainte-claire',
  ARBOC_MIDDLEBURY: 'arboc-middlebury',
  ARBOC_WINNIPEG: 'arboc-winnipeg',
  ENC_RIVERSIDE: 'enc-riverside',
  ENC_SALINA: 'enc-salina',
  TAM_TURKEY: 'tam-turkey',
  KARSAN_BURSA: 'karsan-bursa',
  TEMSA_ADANA: 'temsa-adana',
  FLEETZERO_TORONTO: 'fleetzero-toronto',
};

const COMPANY_LOGOS: Record<string, string> = {
  NEW_FLYER: '/assets/images/New-Flyer.jpg',
  NOVA: '/assets/images/Nova-Bus.png',
  ARBOC: '/assets/images/ARBOC.jpg',
  TAM: '/assets/images/tam-logo.png',
  KARSAN: '/assets/images/KARSAN.jpg',
  FLEETZERO: '/assets/images/FleetZero.png',
};

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const computeMetricsFromFactories = (factories: FactoryLocation[]): FleetMetrics => {
  const assetCount = factories.reduce((sum, factory) => sum + factory.assets, 0);
  const incidentCount = factories.reduce((sum, factory) => sum + factory.incidents, 0);
  const weightTotal = factories.reduce((sum, factory) => sum + (factory.assets ?? 1), 0);
  const weightedSync = factories.reduce(
    (sum, factory) => sum + factory.syncStability * (factory.assets ?? 1),
    0
  );
  const syncStability = weightTotal > 0 ? Math.round((weightedSync / weightTotal) * 10) / 10 : 0;

  return { assetCount, incidentCount, syncStability };
};

const computeMetricsFromSubsidiaries = (subsidiaries: SubsidiaryCompany[]): FleetMetrics => {
  const assetCount = subsidiaries.reduce((sum, sub) => sum + sub.metrics.assetCount, 0);
  const incidentCount = subsidiaries.reduce((sum, sub) => sum + sub.metrics.incidentCount, 0);
  const weightTotal = subsidiaries.reduce((sum, sub) => sum + (sub.metrics.assetCount ?? 1), 0);
  const weightedSync = subsidiaries.reduce(
    (sum, sub) => sum + sub.metrics.syncStability * (sub.metrics.assetCount ?? 1),
    0
  );
  const syncStability = weightTotal > 0 ? Math.round((weightedSync / weightTotal) * 10) / 10 : 0;

  return { assetCount, incidentCount, syncStability };
};

const createFactory = (factory: FactoryLocation): FactoryLocation => factory;

// Factory locations
const newFlyerFactories: FactoryLocation[] = [
  createFactory({
    id: FACTORY_IDS.NEW_FLYER_WINNIPEG,
    parentGroupId: PARENT_GROUP_IDS.NAMG,
    subsidiaryId: SUBSIDIARY_IDS.NEW_FLYER,
    name: 'Winnipeg Manufacturing',
    city: 'Winnipeg',
    country: 'Canada',
    coordinates: { latitude: 49.8951, longitude: -97.1384 },
    status: 'ONLINE',
    syncStability: 98.1,
    assets: 220,
    incidents: 2,
    description: 'Primary production campus for zero-emission platforms.',
    logo: COMPANY_LOGOS['NEW_FLYER'],
  }),
  createFactory({
    id: FACTORY_IDS.NEW_FLYER_CROOKSTON,
    parentGroupId: PARENT_GROUP_IDS.NAMG,
    subsidiaryId: SUBSIDIARY_IDS.NEW_FLYER,
    name: 'Crookston Assembly',
    city: 'Crookston, Minnesota',
    country: 'United States',
    coordinates: { latitude: 47.7741, longitude: -96.6081 },
    status: 'ACTIVE',
    syncStability: 96.7,
    assets: 140,
    incidents: 3,
    description: 'North central assembly operations.',
    logo: COMPANY_LOGOS['NEW_FLYER'],
  }),
  createFactory({
    id: FACTORY_IDS.NEW_FLYER_ST_CLOUD,
    parentGroupId: PARENT_GROUP_IDS.NAMG,
    subsidiaryId: SUBSIDIARY_IDS.NEW_FLYER,
    name: 'St. Cloud Integration',
    city: 'St. Cloud, Minnesota',
    country: 'United States',
    coordinates: { latitude: 45.5579, longitude: -94.1632 },
    status: 'ONLINE',
    syncStability: 95.6,
    assets: 120,
    incidents: 2,
    description: 'Final integration and validation line.',
    logo: COMPANY_LOGOS['NEW_FLYER'],
  }),
  createFactory({
    id: FACTORY_IDS.NEW_FLYER_ANNISTON,
    parentGroupId: PARENT_GROUP_IDS.NAMG,
    subsidiaryId: SUBSIDIARY_IDS.NEW_FLYER,
    name: 'Anniston Manufacturing',
    city: 'Anniston, Alabama',
    country: 'United States',
    coordinates: { latitude: 33.6598, longitude: -85.8316 },
    status: 'ONLINE',
    syncStability: 97.2,
    assets: 160,
    incidents: 2,
    description: 'Southern US production and retrofit facility.',
    logo: COMPANY_LOGOS['NEW_FLYER'],
  }),
];

const novaFactories: FactoryLocation[] = [
  createFactory({
    id: FACTORY_IDS.NOVA_ST_EUSTACHE,
    parentGroupId: PARENT_GROUP_IDS.NAMG,
    subsidiaryId: SUBSIDIARY_IDS.NOVA,
    name: 'Saint-Eustache Assembly',
    city: 'Saint-Eustache, Quebec',
    country: 'Canada',
    coordinates: { latitude: 45.565, longitude: -73.9055 },
    status: 'ACTIVE',
    syncStability: 97.6,
    assets: 170,
    incidents: 2,
    description: 'Primary platform build and systems integration.',
    logo: COMPANY_LOGOS['NOVA'],
  }),
  createFactory({
    id: FACTORY_IDS.NOVA_ST_FRANCOIS,
    parentGroupId: PARENT_GROUP_IDS.NAMG,
    subsidiaryId: SUBSIDIARY_IDS.NOVA,
    name: 'Saint-Francois-du-Lac Facility',
    city: 'Saint-Francois-du-Lac, Quebec',
    country: 'Canada',
    coordinates: { latitude: 46.0, longitude: -72.95 },
    status: 'ONLINE',
    syncStability: 95.2,
    assets: 90,
    incidents: 1,
    description: 'Component fabrication and test operations.',
    logo: COMPANY_LOGOS['NOVA'],
  }),
];

const mciFactories: FactoryLocation[] = [
  createFactory({
    id: FACTORY_IDS.MCI_DES_PLAINES,
    parentGroupId: PARENT_GROUP_IDS.NAMG,
    subsidiaryId: SUBSIDIARY_IDS.MCI,
    name: 'Des Plaines Facility',
    city: 'Des Plaines, Illinois',
    country: 'United States',
    coordinates: { latitude: 42.0334, longitude: -87.8834 },
    status: 'ONLINE',
    syncStability: 95.1,
    assets: 80,
    incidents: 1,
    description: 'Service and support operations.',
  }),
  createFactory({
    id: FACTORY_IDS.MCI_MONTERREY,
    parentGroupId: PARENT_GROUP_IDS.NAMG,
    subsidiaryId: SUBSIDIARY_IDS.MCI,
    name: 'Monterrey Plant',
    city: 'Monterrey, Nuevo Leon',
    country: 'Mexico',
    coordinates: { latitude: 25.6866, longitude: -100.3161 },
    status: 'OFFLINE',
    syncStability: 84.0,
    assets: 60,
    incidents: 4,
    description: 'Facility location unconfirmed in sources.',
  }),
];

const prevostFactories: FactoryLocation[] = [
  createFactory({
    id: FACTORY_IDS.PREVOST_STE_CLAIRE,
    parentGroupId: PARENT_GROUP_IDS.NAMG,
    subsidiaryId: SUBSIDIARY_IDS.PREVOST,
    name: 'Sainte-Claire Assembly',
    city: 'Sainte-Claire, Quebec',
    country: 'Canada',
    coordinates: { latitude: 46.69, longitude: -70.84 },
    status: 'ONLINE',
    syncStability: 96.3,
    assets: 110,
    incidents: 1,
    description: 'Coach production and finishing lines.',
  }),
];

const arbocFactories: FactoryLocation[] = [
  createFactory({
    id: FACTORY_IDS.ARBOC_MIDDLEBURY,
    parentGroupId: PARENT_GROUP_IDS.NAMG,
    subsidiaryId: SUBSIDIARY_IDS.ARBOC,
    name: 'Middlebury Plant',
    city: 'Middlebury, Indiana',
    country: 'United States',
    coordinates: { latitude: 41.6753, longitude: -85.7064 },
    status: 'ONLINE',
    syncStability: 97.3,
    assets: 120,
    incidents: 2,
    description: 'Low-floor cutaway production and QA site.',
    logo: COMPANY_LOGOS['ARBOC'],
  }),
  createFactory({
    id: FACTORY_IDS.ARBOC_WINNIPEG,
    parentGroupId: PARENT_GROUP_IDS.NAMG,
    subsidiaryId: SUBSIDIARY_IDS.ARBOC,
    name: 'Winnipeg Support Hub',
    city: 'Winnipeg, Manitoba',
    country: 'Canada',
    coordinates: { latitude: 49.8951, longitude: -97.1384 },
    status: 'ACTIVE',
    syncStability: 95.9,
    assets: 70,
    incidents: 1,
    description: 'Regional support and staging.',
    logo: COMPANY_LOGOS['ARBOC'],
  }),
];

const encFactories: FactoryLocation[] = [
  createFactory({
    id: FACTORY_IDS.ENC_RIVERSIDE,
    parentGroupId: PARENT_GROUP_IDS.NAMG,
    subsidiaryId: SUBSIDIARY_IDS.ENC,
    name: 'Riverside Plant',
    city: 'Riverside, California',
    country: 'United States',
    coordinates: { latitude: 33.9806, longitude: -117.3755 },
    status: 'ONLINE',
    syncStability: 96.2,
    assets: 95,
    incidents: 2,
    description: 'West coast build and delivery operations.',
  }),
  createFactory({
    id: FACTORY_IDS.ENC_SALINA,
    parentGroupId: PARENT_GROUP_IDS.NAMG,
    subsidiaryId: SUBSIDIARY_IDS.ENC,
    name: 'Salina Manufacturing',
    city: 'Salina, Kansas',
    country: 'United States',
    coordinates: { latitude: 38.8403, longitude: -97.6114 },
    status: 'ACTIVE',
    syncStability: 95.4,
    assets: 85,
    incidents: 2,
    description: 'Core transit bus production line.',
  }),
];

const tamFactories: FactoryLocation[] = [
  createFactory({
    id: FACTORY_IDS.TAM_TURKEY,
    parentGroupId: PARENT_GROUP_IDS.TMG,
    subsidiaryId: SUBSIDIARY_IDS.TAM,
    name: 'Turkey Operations',
    city: 'Ankara',
    country: 'Turkey',
    coordinates: { latitude: 39.9334, longitude: 32.8597 },
    status: 'OFFLINE',
    syncStability: 82.4,
    assets: 75,
    incidents: 4,
    description: 'City not confirmed in sources; placeholder coordinates.',
    logo: COMPANY_LOGOS['TAM'],
  }),
];

const karsanFactories: FactoryLocation[] = [
  createFactory({
    id: FACTORY_IDS.KARSAN_BURSA,
    parentGroupId: PARENT_GROUP_IDS.TMG,
    subsidiaryId: SUBSIDIARY_IDS.KARSAN,
    name: 'Bursa Manufacturing',
    city: 'Bursa, Bursa Province',
    country: 'Turkey',
    coordinates: { latitude: 40.195, longitude: 29.06 },
    status: 'ONLINE',
    syncStability: 97.0,
    assets: 210,
    incidents: 3,
    description: 'Primary production campus.',
    logo: COMPANY_LOGOS['KARSAN'],
  }),
];

const temsaFactories: FactoryLocation[] = [
  createFactory({
    id: FACTORY_IDS.TEMSA_ADANA,
    parentGroupId: PARENT_GROUP_IDS.TMG,
    subsidiaryId: SUBSIDIARY_IDS.TEMSA,
    name: 'Adana Plant',
    city: 'Adana, Adana Province',
    country: 'Turkey',
    coordinates: { latitude: 37.0, longitude: 35.3213 },
    status: 'ONLINE',
    syncStability: 95.8,
    assets: 140,
    incidents: 2,
    description: 'High-capacity manufacturing and testing.',
  }),
];

const fleetZeroFactories: FactoryLocation[] = [
  createFactory({
    id: FACTORY_IDS.FLEETZERO_TORONTO,
    parentGroupId: PARENT_GROUP_IDS.NAMG,
    subsidiaryId: SUBSIDIARY_IDS.FLEETZERO,
    name: 'FleetZero HQ & Hub',
    city: 'Toronto, Ontario',
    country: 'Canada',
    coordinates: { latitude: 43.6532, longitude: -79.3832 },
    status: 'ACTIVE',
    syncStability: 99.8,
    assets: 500,
    incidents: 0,
    description: 'FleetZero Global Headquarters and Primary Integration Hub.',
    logo: COMPANY_LOGOS['FLEETZERO'],
  }),
];

const createSubsidiary = (options: {
  id: string;
  parentGroupId: string;
  name: string;
  status: 'ACTIVE' | 'PAUSED' | 'MAINTENANCE';
  factories: FactoryLocation[];
  hubs: Hub[];
  quantumChart: { dataPoints: number[]; highlightedIndex?: number };
  logo?: string;
  description?: string;
}): SubsidiaryCompany => ({
  id: options.id,
  parentGroupId: options.parentGroupId,
  name: options.name,
  status: options.status,
  factories: options.factories,
  metrics: computeMetricsFromFactories(options.factories),
  hubs: options.hubs,
  quantumChart: options.quantumChart,
  logo: options.logo,
  description: options.description,
});

// Subsidiary data with hubs and quantum charts
export const mockSubsidiaries: SubsidiaryCompany[] = [
  createSubsidiary({
    id: SUBSIDIARY_IDS.NEW_FLYER,
    parentGroupId: PARENT_GROUP_IDS.NAMG,
    name: 'New Flyer',
    status: 'ACTIVE',
    factories: newFlyerFactories,
    hubs: [
      {
        id: 'hub-new-flyer-wpg',
        code: 'WPG',
        companyId: SUBSIDIARY_IDS.NEW_FLYER,
        companyName: 'New Flyer',
        status: 'ONLINE',
        capacity: '92% CAP',
        capacityPercentage: 92,
        statusColor: 'text-tactical-green',
        capColor: 'text-tactical-green',
      },
    ],
    quantumChart: { dataPoints: [70, 80, 85, 95, 88, 92], highlightedIndex: 3 },
    logo: COMPANY_LOGOS['NEW_FLYER'],
  }),
  createSubsidiary({
    id: SUBSIDIARY_IDS.NOVA,
    parentGroupId: PARENT_GROUP_IDS.NAMG,
    name: 'Nova Bus',
    status: 'ACTIVE',
    factories: novaFactories,
    hubs: [
      {
        id: 'hub-nova-ste',
        code: 'STE',
        companyId: SUBSIDIARY_IDS.NOVA,
        companyName: 'Nova Bus',
        status: 'ONLINE',
        capacity: '81% CAP',
        capacityPercentage: 81,
        statusColor: 'text-tactical-green',
        capColor: 'text-tactical-green',
      },
    ],
    quantumChart: { dataPoints: [62, 74, 79, 90, 84, 88], highlightedIndex: 3 },
    logo: COMPANY_LOGOS['NOVA'],
  }),
  createSubsidiary({
    id: SUBSIDIARY_IDS.MCI,
    parentGroupId: PARENT_GROUP_IDS.NAMG,
    name: 'MCI',
    status: 'PAUSED',
    factories: mciFactories,
    hubs: [
      {
        id: 'hub-mci-dpl',
        code: 'DPL',
        companyId: SUBSIDIARY_IDS.MCI,
        companyName: 'MCI',
        status: 'ONLINE',
        capacity: '62% CAP',
        capacityPercentage: 62,
        statusColor: 'text-zinc-800',
        capColor: 'text-zinc-700',
      },
    ],
    quantumChart: { dataPoints: [48, 60, 65, 75, 68, 70], highlightedIndex: 3 },
  }),
  createSubsidiary({
    id: SUBSIDIARY_IDS.PREVOST,
    parentGroupId: PARENT_GROUP_IDS.NAMG,
    name: 'Prevost',
    status: 'ACTIVE',
    factories: prevostFactories,
    hubs: [
      {
        id: 'hub-prevost-stc',
        code: 'STC',
        companyId: SUBSIDIARY_IDS.PREVOST,
        companyName: 'Prevost',
        status: 'ONLINE',
        capacity: '76% CAP',
        capacityPercentage: 76,
        statusColor: 'text-tactical-green',
        capColor: 'text-tactical-green',
      },
    ],
    quantumChart: { dataPoints: [58, 68, 73, 85, 79, 82], highlightedIndex: 3 },
  }),
  createSubsidiary({
    id: SUBSIDIARY_IDS.ARBOC,
    parentGroupId: PARENT_GROUP_IDS.NAMG,
    name: 'ARBOC',
    status: 'ACTIVE',
    factories: arbocFactories,
    hubs: [
      {
        id: 'hub-arboc-ind',
        code: 'IND',
        companyId: SUBSIDIARY_IDS.ARBOC,
        companyName: 'ARBOC',
        status: 'ONLINE',
        capacity: '84% CAP',
        capacityPercentage: 84,
        statusColor: 'text-tactical-green',
        capColor: 'text-tactical-green',
      },
    ],
    quantumChart: { dataPoints: [65, 78, 82, 92, 87, 88], highlightedIndex: 3 },
    logo: COMPANY_LOGOS['ARBOC'],
  }),
  createSubsidiary({
    id: SUBSIDIARY_IDS.ENC,
    parentGroupId: PARENT_GROUP_IDS.NAMG,
    name: 'ENC',
    status: 'ACTIVE',
    factories: encFactories,
    hubs: [
      {
        id: 'hub-enc-riv',
        code: 'RIV',
        companyId: SUBSIDIARY_IDS.ENC,
        companyName: 'ENC',
        status: 'ONLINE',
        capacity: '73% CAP',
        capacityPercentage: 73,
        statusColor: 'text-tactical-green',
        capColor: 'text-tactical-green',
      },
    ],
    quantumChart: { dataPoints: [54, 66, 72, 84, 78, 80], highlightedIndex: 3 },
  }),
  createSubsidiary({
    id: SUBSIDIARY_IDS.TAM,
    parentGroupId: PARENT_GROUP_IDS.TMG,
    name: 'TAM',
    status: 'PAUSED',
    factories: tamFactories,
    hubs: [
      {
        id: 'hub-tam-trk',
        code: 'TRK',
        companyId: SUBSIDIARY_IDS.TAM,
        companyName: 'TAM',
        status: 'OFFLINE',
        capacity: '41% CAP',
        capacityPercentage: 41,
        statusColor: 'text-zinc-800',
        capColor: 'text-zinc-700',
      },
    ],
    quantumChart: { dataPoints: [40, 52, 57, 68, 60, 64], highlightedIndex: 3 },
    logo: COMPANY_LOGOS['TAM'],
  }),
  createSubsidiary({
    id: SUBSIDIARY_IDS.KARSAN,
    parentGroupId: PARENT_GROUP_IDS.TMG,
    name: 'Karsan',
    status: 'ACTIVE',
    factories: karsanFactories,
    hubs: [
      {
        id: 'hub-karsan-bru',
        code: 'BRU',
        companyId: SUBSIDIARY_IDS.KARSAN,
        companyName: 'Karsan',
        status: 'ONLINE',
        capacity: '71% CAP',
        capacityPercentage: 71,
        statusColor: 'text-tactical-green',
        capColor: 'text-tactical-green',
      },
    ],
    quantumChart: { dataPoints: [58, 72, 77, 89, 82, 85], highlightedIndex: 3 },
    logo: COMPANY_LOGOS['KARSAN'],
  }),
  createSubsidiary({
    id: SUBSIDIARY_IDS.TEMSA,
    parentGroupId: PARENT_GROUP_IDS.TMG,
    name: 'TEMSA',
    status: 'ACTIVE',
    factories: temsaFactories,
    hubs: [
      {
        id: 'hub-temsa-adn',
        code: 'ADN',
        companyId: SUBSIDIARY_IDS.TEMSA,
        companyName: 'TEMSA',
        status: 'ONLINE',
        capacity: '79% CAP',
        capacityPercentage: 79,
        statusColor: 'text-tactical-green',
        capColor: 'text-tactical-green',
      },
    ],
    quantumChart: { dataPoints: [60, 68, 75, 82, 78, 85], highlightedIndex: 3 },
  }),
  createSubsidiary({
    id: SUBSIDIARY_IDS.FLEETZERO,
    parentGroupId: PARENT_GROUP_IDS.NAMG,
    name: 'FleetZero',
    status: 'ACTIVE',
    factories: fleetZeroFactories,
    hubs: [
      {
        id: 'hub-fleetzero-yyz',
        code: 'YYZ',
        companyId: SUBSIDIARY_IDS.FLEETZERO,
        companyName: 'FleetZero',
        status: 'ONLINE',
        capacity: '95% CAP',
        capacityPercentage: 95,
        statusColor: 'text-tactical-green',
        capColor: 'text-tactical-green',
      },
    ],
    quantumChart: { dataPoints: [90, 92, 95, 98, 97, 99], highlightedIndex: 5 },
    logo: COMPANY_LOGOS['FLEETZERO'],
    description: 'FleetZero is the next-generation global logistics and transit hub, specializing in AI-driven fleet management and zero-emission transit solutions.',
  }),
];

/** @deprecated Legacy alias retained for backward compatibility. */
export const mockCompanies: SubsidiaryCompany[] = mockSubsidiaries;

const parentGroupNamgSubsidiaries = mockSubsidiaries.filter(
  (sub) => sub.parentGroupId === PARENT_GROUP_IDS.NAMG
);
const parentGroupTmgSubsidiaries = mockSubsidiaries.filter(
  (sub) => sub.parentGroupId === PARENT_GROUP_IDS.TMG
);

export const mockParentGroups: ParentGroup[] = [
  {
    id: PARENT_GROUP_IDS.NAMG,
    name: 'North America Manufacturing Group',
    status: 'ACTIVE',
    subsidiaries: parentGroupNamgSubsidiaries,
    metrics: computeMetricsFromSubsidiaries(parentGroupNamgSubsidiaries),
    description: 'North American production and service operations.',
  },
  {
    id: PARENT_GROUP_IDS.TMG,
    name: 'Turkey Mobility Group',
    status: 'ACTIVE',
    subsidiaries: parentGroupTmgSubsidiaries,
    metrics: computeMetricsFromSubsidiaries(parentGroupTmgSubsidiaries),
    description: 'Turkey-based manufacturing and R&D operations.',
  },
];

const createFactoryNode = (factory: FactoryLocation, subsidiary: SubsidiaryCompany): Node => ({
  id: factory.id,
  name: slugify(factory.city || factory.name),
  company: subsidiary.name,
  companyId: factory.id,
  city: factory.city,
  description: factory.description,
  logo: factory.logo || subsidiary.logo,
  country: factory.country,
  coordinates: factory.coordinates,
  type: 'Facility',
  status: factory.status,
  isHub: true,
  hubCode: subsidiary.hubs[0]?.code,
  level: 'factory',
  parentGroupId: factory.parentGroupId,
  subsidiaryId: factory.subsidiaryId,
  factoryId: factory.id,
});

export const mockNodes: Node[] = mockSubsidiaries.flatMap((subsidiary) =>
  subsidiary.factories.map((factory) => createFactoryNode(factory, subsidiary))
);

const subsidiaryById = new Map(mockSubsidiaries.map((sub) => [sub.id, sub]));
const factoryById = new Map(
  mockSubsidiaries.flatMap((sub) => sub.factories.map((factory) => [factory.id, factory]))
);

const createLogForFactory = (
  factoryId: string,
  timestamp: string,
  status: ActivityStatus,
  description: string
): ActivityLog => {
  const factory = factoryById.get(factoryId);
  if (!factory) {
    throw new Error(`Factory ${factoryId} not found for activity log.`);
  }
  const subsidiary = subsidiaryById.get(factory.subsidiaryId);
  if (!subsidiary) {
    throw new Error(`Subsidiary ${factory.subsidiaryId} not found for activity log.`);
  }

  const location = factory.city + (factory.country ? `, ${factory.country}` : '');
  return {
    id: `log-${factoryId}`,
    timestamp: new Date(timestamp),
    status,
    title: `${subsidiary.name.toUpperCase()} | ${factory.name.toUpperCase()}`,
    description,
    parentGroupId: factory.parentGroupId,
    subsidiaryId: factory.subsidiaryId,
    factoryId: factory.id,
    location,
    logo: subsidiary.logo,
  };
};

const buildActivityLogs = (): ActivityLog[] => {
  const base = new Date('2026-01-22T16:30:00Z').getTime();
  let index = 0;
  const logs: ActivityLog[] = [];

  for (const subsidiary of mockSubsidiaries) {
    for (const factory of subsidiary.factories) {
      const status: ActivityStatus =
        factory.status === 'OFFLINE' ? 'WARNING' : factory.status === 'ACTIVE' ? 'ACTIVE' : 'INFO';
      const description =
        status === 'WARNING'
          ? 'MAINTENANCE WINDOW // LINE PAUSED'
          : status === 'ACTIVE'
            ? 'SYNC ACTIVE // PRODUCTION RAMPING'
            : 'SYSTEM STABLE // TELEMETRY GREEN';
      const timestamp = new Date(base - index * 4 * 60 * 1000).toISOString();
      logs.push(createLogForFactory(factory.id, timestamp, status, description));
      index += 1;
    }
  }

  return logs;
};

// Activity logs (one per factory)
export const mockActivityLogs: ActivityLog[] = buildActivityLogs();

// Transit routes (connections between nodes)
const FLEET_ZERO_COORDS = { latitude: 43.6532, longitude: -79.3832 }; // Toronto, Ontario

export const mockTransitRoutes: TransitRoute[] = [
  {
    id: 'route-newflyer-to-fleetzero',
    from: FACTORY_IDS.NEW_FLYER_WINNIPEG,
    to: 'FleetZero',
    fromCoordinates: { latitude: 49.8951, longitude: -97.1384 },
    toCoordinates: FLEET_ZERO_COORDS,
    animated: true,
    strokeColor: '#00FF41',
    strokeWidth: 2,
  },
  {
    id: 'route-nova-to-fleetzero',
    from: FACTORY_IDS.NOVA_ST_EUSTACHE,
    to: 'FleetZero',
    fromCoordinates: { latitude: 45.565, longitude: -73.9055 },
    toCoordinates: FLEET_ZERO_COORDS,
    animated: true,
    strokeColor: '#00FF41',
    strokeWidth: 2,
  },
  {
    id: 'route-arboc-to-fleetzero',
    from: FACTORY_IDS.ARBOC_MIDDLEBURY,
    to: 'FleetZero',
    fromCoordinates: { latitude: 41.6753, longitude: -85.7064 },
    toCoordinates: FLEET_ZERO_COORDS,
    animated: true,
    strokeColor: '#00FF41',
    strokeWidth: 2,
  },
  {
    id: 'route-enc-to-fleetzero',
    from: FACTORY_IDS.ENC_RIVERSIDE,
    to: 'FleetZero',
    fromCoordinates: { latitude: 33.9806, longitude: -117.3755 },
    toCoordinates: FLEET_ZERO_COORDS,
    animated: true,
    strokeColor: '#00FF41',
    strokeWidth: 2,
  },
  {
    id: 'route-karsan-to-fleetzero',
    from: FACTORY_IDS.KARSAN_BURSA,
    to: 'FleetZero',
    fromCoordinates: { latitude: 40.195, longitude: 29.06 },
    toCoordinates: FLEET_ZERO_COORDS,
    animated: true,
    strokeColor: '#00FF41',
    strokeWidth: 2,
  },
  {
    id: 'route-temsa-to-fleetzero',
    from: FACTORY_IDS.TEMSA_ADANA,
    to: 'FleetZero',
    fromCoordinates: { latitude: 37.0, longitude: 35.3213 },
    toCoordinates: FLEET_ZERO_COORDS,
    animated: true,
    strokeColor: '#00FF41',
    strokeWidth: 2,
  },
];

// Network metrics
export const mockNetworkMetrics: NetworkMetrics = {
  dataFlowIntegrity: 99.9,
  fleetSyncRate: 1402,
  networkLatency: 4,
  latencyChange: -12.4,
  nodeDensity: 98.8,
  encryptionProtocol: 'QUANTUM-X',
  encryptionStatus: 'ACTIVE',
};

// Network throughput
export const mockNetworkThroughput: NetworkThroughput = {
  bars: [60, 80, 45, 90, 70, 100, 85],
  channelStatus: 'L-CHANNEL: ACTIVE',
  throughput: '4.8 GBPS',
};

// Geopolitical heatmap (4x3 grid)
export const mockGeopoliticalHeatmap: GeopoliticalHeatmap = {
  grid: [
    [20, 10, 40, 10],
    [5, 30, 10, 20],
    [40, 10, 20, 50],
  ],
  rows: 3,
  cols: 4,
};

// Satellite statuses
export const mockSatelliteStatuses: SatelliteStatus[] = [
  { id: 'sat-01', name: 'SAT-01', type: 'GEO', status: 'LOCKED' },
  { id: 'sat-02', name: 'SAT-02', type: 'LEO', status: 'LOCKED' },
  { id: 'sat-03', name: 'SAT-03', type: 'MEO', status: 'ACQUIRING' },
];

// Complete mock war room state
export const mockWarRoomData: WarRoomState = {
  nodes: mockNodes,
  transitRoutes: mockTransitRoutes,
  activityLogs: mockActivityLogs,
  networkMetrics: mockNetworkMetrics,
  networkThroughput: mockNetworkThroughput,
  geopoliticalHeatmap: mockGeopoliticalHeatmap,
  satelliteStatuses: mockSatelliteStatuses,
  companies: mockSubsidiaries,
  parentGroups: mockParentGroups,
  mapViewMode: 'parent',
  selectedEntity: { level: 'parent', id: PARENT_GROUP_IDS.NAMG, parentGroupId: PARENT_GROUP_IDS.NAMG },
  selectedCompanyId: mockSubsidiaries[0]?.id,
};
