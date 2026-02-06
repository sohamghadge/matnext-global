import React from 'react';
import { Card, Row, Col, Statistic, Tag, Typography } from 'antd';
import { AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart, Bar, Line, Legend } from 'recharts';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { Factory, Recycle, Leaf, Users } from 'lucide-react';

const { Title, Text } = Typography;

// Asia includes Indonesia, Thailand, Philippines, Vietnam, Cambodia, Myanmar
const countryData = [
    { country: 'Indonesia', flag: '🇮🇩', recycled: 580, growth: 24, facilities: 8 },
    { country: 'Thailand', flag: '🇹🇭', recycled: 420, growth: 18, facilities: 6 },
    { country: 'Philippines', flag: '🇵🇭', recycled: 280, growth: 32, facilities: 4 },
    { country: 'Vietnam', flag: '🇻🇳', recycled: 195, growth: 45, facilities: 3 },
    { country: 'Cambodia', flag: '🇰🇭', recycled: 85, growth: 28, facilities: 1 },
    { country: 'Myanmar', flag: '🇲🇲', recycled: 65, growth: 22, facilities: 1 },
];

const monthlyTrend = [
    { month: 'Jul', steel: 120, plastic: 45, aluminum: 28 },
    { month: 'Aug', steel: 135, plastic: 52, aluminum: 32 },
    { month: 'Sep', steel: 148, plastic: 58, aluminum: 35 },
    { month: 'Oct', steel: 162, plastic: 65, aluminum: 40 },
    { month: 'Nov', steel: 178, plastic: 72, aluminum: 45 },
    { month: 'Dec', steel: 192, plastic: 78, aluminum: 48 },
    { month: 'Jan', steel: 205, plastic: 85, aluminum: 52 },
];

const materialMix = [
    { name: 'Steel', value: 55, color: '#3B82F6' },
    { name: 'Plastic', value: 25, color: '#10B981' },
    { name: 'Aluminum', value: 12, color: '#F59E0B' },
    { name: 'Others', value: 8, color: '#6B7280' },
];

export const AsiaDashboard: React.FC = () => {
    const totalRecycled = countryData.reduce((sum, c) => sum + c.recycled, 0);
    const totalFacilities = countryData.reduce((sum, c) => sum + c.facilities, 0);

    return (
        <div className="space-y-4 animate-fade-in">
            {/* Header */}
            <div className="mb-4">
                <Title level={4} className="!mb-1 text-foreground">🌏 Asia Operations</Title>
                <Text type="secondary">Southeast Asia Manufacturing & Recycling Network</Text>
            </div>

            {/* KPI Cards */}
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} lg={6}>
                    <Card className="stat-card border-l-4 border-l-blue-500">
                        <Statistic
                            title={<span className="flex items-center gap-2"><Factory className="w-4 h-4" /> Total Recycled</span>}
                            value={totalRecycled}
                            suffix="MT"
                            valueStyle={{ color: '#3B82F6' }}
                        />
                        <div className="mt-2 flex items-center gap-1 text-emerald-600 text-xs">
                            <ArrowUpOutlined /> 26.8% YoY growth
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    <Card className="stat-card border-l-4 border-l-emerald-500">
                        <Statistic
                            title={<span className="flex items-center gap-2"><Recycle className="w-4 h-4" /> Recovery Rate</span>}
                            value={87.4}
                            suffix="%"
                            valueStyle={{ color: '#10B981' }}
                        />
                        <div className="mt-2 flex items-center gap-1 text-emerald-600 text-xs">
                            <ArrowUpOutlined /> 4.2% improvement
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    <Card className="stat-card border-l-4 border-l-amber-500">
                        <Statistic
                            title={<span className="flex items-center gap-2"><Leaf className="w-4 h-4" /> Carbon Avoided</span>}
                            value={3850}
                            suffix="tCO₂e"
                            valueStyle={{ color: '#F59E0B' }}
                        />
                        <div className="mt-2 flex items-center gap-1 text-emerald-600 text-xs">
                            <ArrowUpOutlined /> Strong performance
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    <Card className="stat-card border-l-4 border-l-purple-500">
                        <Statistic
                            title={<span className="flex items-center gap-2"><Users className="w-4 h-4" /> Recycling Facilities</span>}
                            value={totalFacilities}
                            suffix="active"
                            valueStyle={{ color: '#8B5CF6' }}
                        />
                        <div className="mt-2 flex items-center gap-1 text-blue-600 text-xs">
                            6 countries
                        </div>
                    </Card>
                </Col>
            </Row>

            {/* Charts Row */}
            <Row gutter={[16, 16]}>
                <Col xs={24} lg={14}>
                    <Card title="Monthly Material Recovery Trend (MT)" className="h-full">
                        <ResponsiveContainer width="100%" height={280}>
                            <ComposedChart data={monthlyTrend}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                <XAxis dataKey="month" stroke="#6B7280" fontSize={12} />
                                <YAxis stroke="#6B7280" fontSize={12} />
                                <Tooltip contentStyle={{ borderRadius: 8 }} />
                                <Legend />
                                <Bar dataKey="steel" fill="#3B82F6" name="Steel" radius={[2, 2, 0, 0]} />
                                <Bar dataKey="plastic" fill="#10B981" name="Plastic" radius={[2, 2, 0, 0]} />
                                <Bar dataKey="aluminum" fill="#F59E0B" name="Aluminum" radius={[2, 2, 0, 0]} />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
                <Col xs={24} lg={10}>
                    <Card title="Material Mix" className="h-full">
                        <ResponsiveContainer width="100%" height={280}>
                            <PieChart>
                                <Pie
                                    data={materialMix}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={50}
                                    outerRadius={80}
                                    paddingAngle={2}
                                    dataKey="value"
                                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                    labelLine={false}
                                >
                                    {materialMix.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip formatter={(value) => `${value}%`} />
                            </PieChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
            </Row>

            {/* Country Breakdown */}
            <Row gutter={[16, 16]}>
                <Col xs={24}>
                    <Card title="Country-wise Performance">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {countryData.map((country, idx) => (
                                <div key={idx} className="p-4 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl">{country.flag}</span>
                                            <Text strong>{country.country}</Text>
                                        </div>
                                        <Tag color="green">+{country.growth}%</Tag>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 text-sm">
                                        <div>
                                            <Text type="secondary">Recycled</Text>
                                            <div className="text-blue-600 font-semibold">{country.recycled} MT</div>
                                        </div>
                                        <div>
                                            <Text type="secondary">Facilities</Text>
                                            <div className="text-purple-600 font-semibold">{country.facilities}</div>
                                        </div>
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
