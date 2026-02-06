import React from 'react';
import { Card, Row, Col, Statistic, Progress, Typography } from 'antd';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { Factory, Recycle, Leaf, TrendingUp } from 'lucide-react';

const { Title, Text } = Typography;

// Dummy data for Japan
const monthlyRecyclingData = [
    { month: 'Apr', recycled: 245, target: 260 },
    { month: 'May', recycled: 268, target: 260 },
    { month: 'Jun', recycled: 278, target: 270 },
    { month: 'Jul', recycled: 295, target: 280 },
    { month: 'Aug', recycled: 310, target: 290 },
    { month: 'Sep', recycled: 325, target: 300 },
    { month: 'Oct', recycled: 342, target: 310 },
    { month: 'Nov', recycled: 358, target: 320 },
    { month: 'Dec', recycled: 365, target: 330 },
    { month: 'Jan', recycled: 378, target: 340 },
];

const materialDistribution = [
    { name: 'Steel', value: 42, color: '#4F46E5' },
    { name: 'Aluminum', value: 28, color: '#10B981' },
    { name: 'Plastic', value: 18, color: '#F59E0B' },
    { name: 'Copper', value: 8, color: '#EF4444' },
    { name: 'Others', value: 4, color: '#6B7280' },
];

const factoryPerformance = [
    { factory: 'Suzuki Kosai', efficiency: 94, volume: 1250 },
    { factory: 'Suzuki Sagara', efficiency: 91, volume: 980 },
    { factory: 'Suzuki Hamamatsu', efficiency: 89, volume: 870 },
    { factory: 'Suzuki Iwata', efficiency: 87, volume: 720 },
];

export const JapanDashboard: React.FC = () => {
    return (
        <div className="space-y-4 animate-fade-in">
            {/* Header */}
            <div className="mb-4">
                <Title level={4} className="!mb-1 text-foreground">🇯🇵 Japan Operations</Title>
                <Text type="secondary">Suzuki Motor Corporation - Sustainability Metrics</Text>
            </div>

            {/* KPI Cards */}
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} lg={6}>
                    <Card className="stat-card border-l-4 border-l-indigo-500">
                        <Statistic
                            title={<span className="flex items-center gap-2"><Factory className="w-4 h-4" /> Total Recycled</span>}
                            value={3864}
                            suffix="MT"
                            valueStyle={{ color: '#4F46E5' }}
                        />
                        <div className="mt-2 flex items-center gap-1 text-emerald-600 text-xs">
                            <ArrowUpOutlined /> 12.4% vs last year
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    <Card className="stat-card border-l-4 border-l-emerald-500">
                        <Statistic
                            title={<span className="flex items-center gap-2"><Recycle className="w-4 h-4" /> Recovery Rate</span>}
                            value={96.8}
                            suffix="%"
                            valueStyle={{ color: '#10B981' }}
                        />
                        <div className="mt-2 flex items-center gap-1 text-emerald-600 text-xs">
                            <ArrowUpOutlined /> 2.1% improvement
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    <Card className="stat-card border-l-4 border-l-amber-500">
                        <Statistic
                            title={<span className="flex items-center gap-2"><Leaf className="w-4 h-4" /> Carbon Saved</span>}
                            value={8542}
                            suffix="tCO₂e"
                            valueStyle={{ color: '#F59E0B' }}
                        />
                        <div className="mt-2 flex items-center gap-1 text-emerald-600 text-xs">
                            <ArrowUpOutlined /> 15.2% reduction
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    <Card className="stat-card border-l-4 border-l-blue-500">
                        <Statistic
                            title={<span className="flex items-center gap-2"><TrendingUp className="w-4 h-4" /> Active Partners</span>}
                            value={28}
                            suffix="recyclers"
                            valueStyle={{ color: '#3B82F6' }}
                        />
                        <div className="mt-2 flex items-center gap-1 text-emerald-600 text-xs">
                            <ArrowUpOutlined /> 3 new this quarter
                        </div>
                    </Card>
                </Col>
            </Row>

            {/* Charts Row */}
            <Row gutter={[16, 16]}>
                <Col xs={24} lg={14}>
                    <Card title="Monthly Recycling Performance vs Target" className="h-full">
                        <ResponsiveContainer width="100%" height={280}>
                            <AreaChart data={monthlyRecyclingData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                <XAxis dataKey="month" stroke="#6B7280" fontSize={12} />
                                <YAxis stroke="#6B7280" fontSize={12} />
                                <Tooltip contentStyle={{ borderRadius: 8 }} />
                                <Area type="monotone" dataKey="target" stackId="1" stroke="#E5E7EB" fill="#F3F4F6" name="Target" />
                                <Area type="monotone" dataKey="recycled" stackId="2" stroke="#4F46E5" fill="#818CF8" name="Recycled (MT)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
                <Col xs={24} lg={10}>
                    <Card title="Material Distribution" className="h-full">
                        <ResponsiveContainer width="100%" height={280}>
                            <PieChart>
                                <Pie
                                    data={materialDistribution}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={90}
                                    paddingAngle={3}
                                    dataKey="value"
                                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                    labelLine={false}
                                >
                                    {materialDistribution.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip formatter={(value) => `${value}%`} />
                            </PieChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
            </Row>

            {/* Factory Performance */}
            <Row gutter={[16, 16]}>
                <Col xs={24}>
                    <Card title="Factory Performance - Recycling Efficiency">
                        <ResponsiveContainer width="100%" height={200}>
                            <BarChart data={factoryPerformance} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                <XAxis type="number" domain={[0, 100]} stroke="#6B7280" fontSize={12} />
                                <YAxis dataKey="factory" type="category" stroke="#6B7280" fontSize={11} width={120} />
                                <Tooltip formatter={(value) => `${value}%`} />
                                <Bar dataKey="efficiency" fill="#10B981" radius={[0, 4, 4, 0]} name="Efficiency %" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};
