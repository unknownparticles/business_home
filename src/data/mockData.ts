import { LeadItem, MarketAlert, OrderItem, AgentLog } from '../types';

export const INITIAL_COMMAND_CENTER = {
  leads: 1284,
  qualified: 326,
  opportunities: 47,
  orders: 12,
  pipeline: 284000,
};

export const MOCK_LEADS: LeadItem[] = [
  { id: 'LD-801', company: 'Nordic Lightings AB', country: 'SE', industry: 'Commercial Luminaire', score: 94, level: 'HIGH', signal: 'RFQ Released on LinkedIn', matchRate: 98 },
  { id: 'LD-802', company: 'Apex Hardware Group', country: 'US', industry: 'Industrial Electrical', score: 87, level: 'HIGH', signal: 'Expanding Supply Chain to APAC', matchRate: 92 },
  { id: 'LD-803', company: 'Vanguard Retailers BV', country: 'NL', industry: 'Smart Lighting Distribution', score: 82, level: 'HIGH', signal: 'CEO Visited Canton Fair Portal', matchRate: 89 },
  { id: 'LD-804', company: 'Helios Architectural', country: 'DE', industry: 'Facade Systems', score: 71, level: 'MEDIUM', signal: 'Annual Vendor Audit', matchRate: 74 },
  { id: 'LD-805', company: 'Pacific Source Co.', country: 'AU', industry: 'Wholesale Trade', score: 42, level: 'LOW', signal: 'Generic Inquiry Form', matchRate: 46 },
];

export const MOCK_MARKET_ALERT: MarketAlert = {
  id: 'ALT-2026-08',
  title: 'US announces new tariff adjustment for Section 301 list',
  category: 'TARIFF',
  impactProduct: 'LED Commercial Lighting Systems',
  costImpact: '+7.2%',
  demandImpact: '-1.4%',
  competitiveness: '-3.8%',
  recommendations: [
    'Prioritize high-margin smart control models to offset margin squeeze',
    'Accelerate distributor outreach in Canada & Mexico corridors',
    'Adjust bonded warehouse FOB staging schedule by 14 calendar days',
    'Trigger automated email sequence offering DDP fixed rates'
  ]
};

export const MOCK_ORDER: OrderItem = {
  id: 'ORD-10482',
  customer: 'ABC Corp (North America)',
  amount: '$48,200',
  progress: 82,
  paymentStatus: '70% Paid (LC Confirmed)',
  logisticsStatus: 'Customs Clearance Prepared',
  eta: 'Sep 14',
  riskAlert: 'Production delay flagged: +4 days estimated variance'
};

export const INITIAL_AGENT_LOGS: AgentLog[] = [
  { id: '1', time: '10:42:18', content: 'Scanning US & EU commercial lighting distributors...', status: 'done' },
  { id: '2', time: '10:42:24', content: '428 target companies verified with custom compliance check.', status: 'done' },
  { id: '3', time: '10:43:02', content: '86 high-fit buyers identified & matched with product SKU-92.', status: 'done' },
  { id: '4', time: '10:43:18', content: '12 purchase intent signals detected via B2B trade platforms.', status: 'done' },
  { id: '5', time: '10:44:03', content: '214 personalized localized outreach dispatched in parallel.', status: 'done' },
  { id: '6', time: '10:44:21', content: '3 high-intent RFQ responses received. Auto-translated & parsed.', status: 'alert' },
  { id: '7', time: '10:44:23', content: 'Sales Director alerted. Meeting slot tentatively reserved.', status: 'processing' },
];

export const PAIN_POINTS = [
  { key: '获客', sub: '精准度断层', desc: '不知道真正的海外买家是谁，更无法预判谁正处于采购决策周期。' },
  { key: '社媒', sub: '内容无法常态化', desc: '平台碎片化（LinkedIn/X/Meta），缺乏具备本地商业语境的长期运营团队。' },
  { key: '筛选', sub: '销售精力空转', desc: '团队将70%的时间浪费在无效垃圾线索中，高净值询盘被严重延误。' },
  { key: '市场', sub: '研判滞后性', desc: '关税变化、汇率波动、原材料上涨，知晓时往往已被动吞噬了订单利润。' },
  { key: '维护', sub: '客户资产流失', desc: '线索与订单散落在各业务员聊天记录和本地表格中，没有生命周期复购机制。' },
  { key: '订单', sub: '履约链路失控', desc: '工厂、货代、报关行与客户多方割裂，生产与物流风险缺乏前置预警机制。' }
];
