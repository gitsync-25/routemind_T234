export interface NavItem {
  id: string;
  label: string;
  iconName: string;
  href: string;
  active?: boolean;
}

export interface KPIMetric {
  id: string;
  title: string;
  value: string;
  changeText: string;
  icon: 'shipping' | 'driver' | 'car' | 'fuel';
  trendUp?: boolean;
  glow?: boolean;
}

export interface Recommendation {
  id: string;
  category: string;
  timeAgo: string;
  description: string;
  highlightText?: string;
  actionText: string;
  isPrimaryAction?: boolean;
  applied?: boolean;
}

export interface OrderDelivery {
  id: string;
  destination: string;
  driver: string;
  status: 'IN TRANSIT' | 'LOADING' | 'DELAYED' | 'DELIVERED';
  eta: string;
}

export interface SystemAlert {
  id: string;
  severity: 'CRITICAL' | 'WARNING' | 'INFO';
  timeAgo: string;
  message: string;
}

export interface MapVehicleMarker {
  id: string;
  name: string;
  driver: string;
  locationName: string;
  speed: string;
  topPercent: string;
  leftPercent: string;
  status: 'active' | 'idle' | 'delayed';
  color: 'primary' | 'secondary' | 'error';
}
