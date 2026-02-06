import React from 'react';
import { Card, Row, Col, Statistic, Tag, Typography, Progress } from 'antd';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from 'recharts';
import { ArrowUpOutlined } from '@ant-design/icons';
import { Factory, Truck, Leaf, Globe2 } from 'lucide-react';

const { Title, Text } = Typography;

// LatAM = Brazil, Mexico, Colombia, Argentina
// Oceania = Australia, New Zealand
const marketData = [
    { region: 'LatAM', countries: ['🇧🇷 Brazil', '🇲🇽 Mexico', '🇨🇴 Colombia', '🇦🇷 Argentina'], recycled: 680, growth: 28 },
    { region: 'Oceania', countries: ['🇦🇺 Australia', '🇳🇿 New Zealand'], recycled: 420, growth: 15 },
];

const monthlyProgress = [
    { month: 'Jul', latam: 85, oceania: 52 },
    { month: 'Aug', latam: 92, oceania: 58 },
    { month: 'Sep', latam: 105, oceania: 62 },
    { month: 'Oct', latam: 118, oceania: 68 },
    { month: 'Nov', latam: 128, oceania: 72 },
    { month: 'Dec', latam: 142, oceania: 78 },
    { month: 'Jan', latam: 155, oceania: 85 },
];

const initiativeData = [
    { name: 'EV Battery Recycling', region: 'Australia', status: 'active', progress: 75 },
    { name: 'Plastic Upcycling', region: 'Brazil', status: 'active', progress: 60 },
    { name: 'Steel Recovery', region: 'Mexico', status: 'active', progress: 85 },
    { name: 'Zero Waste Plant', region: 'New Zealand', status: 'pilot', progress: 40 },
];

const recyclingBreakdown = [
    { name: 'Ferrous', value: 48, color: '#3B82F6' },
    { name: 'Non-Ferrous', value: 22, color: '#8B5CF6' },
    { name: 'Plastics', value: 18, color: '#10B981' },
    { name: 'Glass', value: 7, color: '#F59E0B' },
    { name: 'Others', value: 5, color: '#6B7280' },
];

export const LatAmOceaniaDashboard: React.FC = () => {
    return (
        <div className="space-y-4 animate-fade-in">
            {/* Header */}
            <div className="mb-4">
                <Title level={4} className="!mb-1 text-foreground">🌎 LatAm & Oceania Operations</Title>
                <Text type="secondary">Latin America & Oceania - Emerging Sustainability Programs</Text>
            </div>

            {/* KPI Cards */}
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} lg={6}>
                    <Card className="stat-card border-l-4 border-l-cyan-500">
                        <Statistic
                            title={<span className="flex items-center gap-2"><Factory className="w-4 h-4" /> Total Recycled</span>}
                            value={1100}
                            suffix="MT"
                            valueStyle={{ color: '#06B6D4' }}
                        />
                        <div className="mt-2 flex items-center gap-1 text-emerald-600 text-xs">
                            <ArrowUpOutlined /> 22.4% YoY growth
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    <Card className="stat-card border-l-4 border-l-rose-500">
                        <Statistic
                            title={<span className="flex items-center gap-2"><Truck className="w-4 h-4" /> Active Programs</span>}
                            value={12}
                            suffix="initiatives"
                            valueStyle={{ color: '#F43F5E' }}
                        />
                        <div className="mt-2 flex items-center gap-1 text-emerald-600 text-xs">
                            <ArrowUpOutlined /> 4 new this year
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    <Card className="stat-card border-l-4 border-l-emerald-500">
                        <Statistic
                            title={<span className="flex items-center gap-2"><Leaf className="w-4 h-4" /> Carbon Credits</span>}
                            value={2650}
                            suffix="tCO₂e"
                            valueStyle={{ color: '#10B981' }}
                        />
                        <div className="mt-2 flex items-center gap-1 text-emerald-600 text-xs">
                            <ArrowUpOutlined /> Exceeding targets
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    <Card className="stat-card border-l-4 border-l-amber-500">
                        <Statistic
                            title={<span className="flex items-center gap-2"><Globe2 className="w-4 h-4" /> Countries</span>}
                            value={6}
                            suffix="active"
                            valueStyle={{ color: '#F59E0B' }}
                        />
                        <div className="mt-2 flex items-center gap-1 text-blue-600 text-xs">
                            2 regions covered
                        </div>
                    </Card>
                </Col>
            </Row>

            {/* Charts Row */}
            <Row gutter={[16, 16]}>
                <Col xs={24} lg={14}>
                    <Card title="Monthly Recycling Trend (MT)" className="h-full">
                        <ResponsiveContainer width="100%" height={280}>
                            <LineChart data={monthlyProgress}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                <XAxis dataKey="month" stroke="#6B7280" fontSize={12} />
                                <YAxis stroke="#6B7280" fontSize={12} />
                                <Tooltip contentStyle={{ borderRadius: 8 }} />
                                <Legend />
                                <Line type="monotone" dataKey="latam" stroke="#06B6D4" strokeWidth={2} name="🌎 LatAm" dot={{ fill: '#06B6D4' }} />
                                <Line type="monotone" dataKey="oceania" stroke="#F43F5E" strokeWidth={2} name="🌏 Oceania" dot={{ fill: '#F43F5E' }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
                <Col xs={24} lg={10}>
                    <Card title="Material Breakdown" className="h-full">
                        <ResponsiveContainer width="100%" height={280}>
                            <PieChart>
                                <Pie
                                    data={recyclingBreakdown}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={55}
                                    outerRadius={85}
                                    paddingAngle={2}
                                    dataKey="value"
                                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                    labelLine={false}
                                >
                                    {recyclingBreakdown.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip formatter={(value) => `${value}%`} />
                            </PieChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
            </Row>

            {/* Initiatives Row */}
            <Row gutter={[16, 16]}>
                <Col xs={24} lg={12}>
                    <Card title="Key Sustainability Initiatives">
                        <div className="space-y-4">
                            {initiativeData.map((initiative, idx) => (
                                <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                                    <div className="flex justify-between items-center mb-2">
                                        <div>
                                            <Text strong className="text-sm">{initiative.name}</Text>
                                            <Text type="secondary" className="block text-xs">{initiative.region}</Text>
                                        </div>
                                        <Tag color={initiative.status === 'active' ? 'green' : 'orange'}>
                                            {initiative.status}
                                        </Tag>
                                    </div>
                                    <Progress
                                        percent={initiative.progress}
                                        strokeColor={initiative.status === 'active' ? '#10B981' : '#F59E0B'}
                                        size="small"
                                    />
                                </div>
                            ))}
                        </div>
                    </Card>
                </Col>
                <Col xs={24} lg={12}>
                    <Card title="Regional Summary">
                        <div className="space-y-4">
                            {marketData.map((market, idx) => (
                                <div key={idx} className={`p-4 rounded-lg border ${idx === 0 ? 'bg-cyan-50 border-cyan-200' : 'bg-rose-50 border-rose-200'}`}>
                                    <div className="flex justify-between items-center mb-2">
                                        <Text strong className="text-base">{market.region}</Text>
                                        <Tag color={idx === 0 ? 'cyan' : 'magenta'}>+{market.growth}% growth</Tag>
                                    </div>
                                    <div className="flex flex-wrap gap-1 mb-2">
                                        {market.countries.map((c, i) => (
                                            <Tag key={i} className="text-xs">{c}</Tag>
                                        ))}
                                    </div>
                                    <div className="text-right">
                                        <Text className={`text-lg font-bold ${idx === 0 ? 'text-cyan-600' : 'text-rose-600'}`}>
                                            {market.recycled} MT
                                        </Text>
                                        <Text type="secondary" className="block text-xs">recycled this FY</Text>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};
