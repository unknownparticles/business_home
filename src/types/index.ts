export interface LeadItem {
  id: string;
  company: string;
  country: string;
  industry: string;
  score: number;
  level: 'HIGH' | 'MEDIUM' | 'LOW';
  signal: string;
  matchRate: number;
}

export interface MarketAlert {
  id: string;
  title: string;
  category: 'TARIFF' | 'SUPPLY_CHAIN' | 'EXCHANGE' | 'POLICY';
  impactProduct: string;
  costImpact: string;
  demandImpact: string;
  competitiveness: string;
  recommendations: string[];
}

export interface OrderItem {
  id: string;
  customer: string;
  amount: string;
  progress: number;
  paymentStatus: string;
  logisticsStatus: string;
  eta: string;
  riskAlert?: string;
}

export interface AgentLog {
  id: string;
  time: string;
  content: string;
  status: 'done' | 'processing' | 'alert';
}
