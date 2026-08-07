import { KPIMetric, Recommendation, OrderDelivery, SystemAlert, MapVehicleMarker } from "./types";

export const initialKpis: KPIMetric[] = [
  {
    id: "deliveries",
    title: "TODAY'S DELIVERIES",
    value: "1,245",
    changeText: "12% vs yesterday",
    icon: "shipping",
    trendUp: true,
  },
  {
    id: "drivers",
    title: "ACTIVE DRIVERS",
    value: "432",
    changeText: "8 active routes",
    icon: "driver",
    trendUp: true,
  },
  {
    id: "vehicles",
    title: "VEHICLES",
    value: "98%",
    changeText: "Uptime today",
    icon: "car",
  },
  {
    id: "fuel",
    title: "FUEL SAVED (AI)",
    value: "24%",
    changeText: "Optimal routes active",
    icon: "fuel",
    glow: true,
  },
];

export const initialRecommendations: Recommendation[] = [
  {
    id: "rec-1",
    category: "ROUTE OPTIMIZATION",
    timeAgo: "2m ago",
    description: "Reroute Fleet B to highway I-95 to avoid detected congestion. Estimated time savings: ",
    highlightText: "14m",
    actionText: "Apply Route",
    isPrimaryAction: true,
  },
  {
    id: "rec-2",
    category: "FLEET MAINTENANCE",
    timeAgo: "15m ago",
    description: "Vehicle V-402 showing anomalous tire pressure. Schedule maintenance after current run.",
    actionText: "Schedule",
    isPrimaryAction: false,
  },
  {
    id: "rec-3",
    category: "BATTERY / FUEL OPTIMIZATION",
    timeAgo: "32m ago",
    description: "Route #882 EV fleet can leverage off-peak charging at Hub-4 for ",
    highlightText: "$140 savings",
    actionText: "Enable Auto-Charge",
    isPrimaryAction: false,
  },
];

export const initialOrders: OrderDelivery[] = [
  {
    id: "#ORD-9021",
    destination: "742 Evergreen Terrace",
    driver: "Homer S.",
    status: "IN TRANSIT",
    eta: "14:30",
  },
  {
    id: "#ORD-8834",
    destination: "123 Fake Street",
    driver: "Marge S.",
    status: "LOADING",
    eta: "15:15",
  },
  {
    id: "#ORD-7712",
    destination: "100 Industrial Way",
    driver: "Burns C.",
    status: "DELAYED",
    eta: "16:00",
  },
  {
    id: "#ORD-6549",
    destination: "456 Ocean Drive",
    driver: "Lisa S.",
    status: "IN TRANSIT",
    eta: "16:45",
  },
  {
    id: "#ORD-5411",
    destination: "89 Skyline Boulevard",
    driver: "Bart S.",
    status: "DELIVERED",
    eta: "13:10",
  },
];

export const initialAlerts: SystemAlert[] = [
  {
    id: "alt-1",
    severity: "CRITICAL",
    timeAgo: "10m ago",
    message: "Connectivity lost with Fleet Region C. Retrying connection...",
  },
  {
    id: "alt-2",
    severity: "WARNING",
    timeAgo: "1h ago",
    message: "Weather API syncing delayed. Using cached data for route planning.",
  },
  {
    id: "alt-3",
    severity: "INFO",
    timeAgo: "2h ago",
    message: "System maintenance scheduled for tonight at 02:00 UTC.",
  },
];

export const mapMarkers: MapVehicleMarker[] = [
  {
    id: "TRK-842",
    name: "TRK-842",
    driver: "Alex Mercer",
    locationName: "Midtown Express",
    speed: "45 mph",
    topPercent: "33%",
    leftPercent: "25%",
    status: "active",
    color: "primary",
  },
  {
    id: "TRK-109",
    name: "TRK-109",
    driver: "Sarah Connor",
    locationName: "Queens Boulevard",
    speed: "32 mph",
    topPercent: "50%",
    leftPercent: "66%",
    status: "idle",
    color: "secondary",
  },
  {
    id: "TRK-305",
    name: "TRK-305",
    driver: "Marcus Vance",
    locationName: "FDR Drive South",
    speed: "58 mph",
    topPercent: "72%",
    leftPercent: "42%",
    status: "active",
    color: "primary",
  },
];
