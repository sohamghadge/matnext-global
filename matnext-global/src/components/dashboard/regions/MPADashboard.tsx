import React from 'react';
import { Card, Row, Col, Statistic, Tag, Typography, Progress } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { ArrowUpOutlined } from '@ant-design/icons';
import { Factory, Truck, Leaf, Globe } from 'lucide-react';

const { Title, Text } = Typography;

// MPA = Middle East, Pakistan, Africa
const regionPerformance = [
    { region: 'Pakistan', recycled: 450, growth: 22 },
    { region: 'Saudi Arabia', recycled: 280, growth: 18 },
    { region: 'UAE', recycled: 185, growth: 25 },
    { region: 'South Africa', recycled: 165, growth: 15 },
    { region: 'Egypt', recycled: 120, growth: 28 },
];

const sustainabilityMetrics = [
    { subject: 'Recycling Rate', A: 85, fullMark: 100 },
    { subject: 'Carbon Reduction', A: 78, fullMark: 100 },
    { subject: 'Waste Diversion', A: 92, fullMark: 100 },
    { subject: 'Supplier Compliance', A: 68, fullMark: 100 },
    { subject: 'Local Sourcing', A: 74, fullMark: 100 },
    { subject: 'Community Impact', A: 88, fullMark: 100 },
];

const partnershipData = [
    { name: 'Pak Suzuki', country: '🇵🇰', status: 'active', materials: ['Steel', 'Plastic'] },
    { name: 'Al-Jomaih', country: '🇸🇦', status: 'active', materials: ['Aluminum', 'Steel'] },
    { name: 'Al-Futtaim', country: '🇦🇪', status: 'active', materials: ['Steel', 'Copper'] },
    { name: 'Unitrans Motors', country: '🇿🇦', status: 'pilot', materials: ['Steel'] },
];

export const MPADashboard: React.FC = () => {
    return (
        <div className="space-y-4 animate-fade-in">
            {/* Header */}
            <div className="mb-4">
                <Title level={4} className="!mb-1 text-foreground">🌍 MEA Region Operations</Title>
                <Text type="secondary">Middle East & Africa - Emerging Markets Sustainability</Text>
            </div>

            {/* KPI Cards */}
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} lg={6}>
                    <Card className="stat-card border-l-4 border-l-orange-500">
                        <Statistic
                            title={<span className="flex items-center gap-2"><Factory className="w-4 h-4" /> Total Recycled</span>}
                            value={1200}
                            suffix="MT"
                            valueStyle={{ color: '#F97316' }}
                        />
                        <div className="mt-2 flex items-center gap-1 text-emerald-600 text-xs">
                            <ArrowUpOutlined /> 21.5% YoY growth
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    <Card className="stat-card border-l-4 border-l-teal-500">
                        <Statistic
                            title={<span className="flex items-center gap-2"><Truck className="w-4 h-4" /> Active Partners</span>}
                            value={24}
                            suffix="facilities"
                            valueStyle={{ color: '#14B8A6' }}
                        />
                        <div className="mt-2 flex items-center gap-1 text-emerald-600 text-xs">
                            <ArrowUpOutlined /> 6 new this year
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    <Card className="stat-card border-l-4 border-l-emerald-500">
                        <Statistic
                            title={<span className="flex items-center gap-2"><Leaf className="w-4 h-4" /> Carbon Saved</span>}
                            value={2840}
                            suffix="tCO₂e"
                            valueStyle={{ color: '#10B981' }}
                        />
                        <div className="mt-2 flex items-center gap-1 text-emerald-600 text-xs">
                            <ArrowUpOutlined /> Exceeding targets
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    <Card className="stat-card border-l-4 border-l-violet-500">
                        <Statistic
                            title={<span className="flex items-center gap-2"><Globe className="w-4 h-4" /> Countries</span>}
                            value={5}
                            suffix="active"
                            valueStyle={{ color: '#8B5CF6' }}
                        />
                        <div className="mt-2 flex items-center gap-1 text-blue-600 text-xs">
                            2 pilot programs
                        </div>
                    </Card>
                </Col>
            </Row>

            {/* Charts Row */}
            <Row gutter={[16, 16]}>
                <Col xs={24} lg={12}>
                    <Card title="Regional Recycling Performance (MT)" className="h-full">
                        <ResponsiveContainer width="100%" height={280}>
                            <BarChart data={regionPerformance} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                <XAxis type="number" stroke="#6B7280" fontSize={12} />
                                <YAxis dataKey="region" type="category" stroke="#6B7280" fontSize={11} width={100} />
                                <Tooltip contentStyle={{ borderRadius: 8 }} formatter={(value) => `${value} MT`} />
                                <Bar dataKey="recycled" fill="#F97316" radius={[0, 4, 4, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
                <Col xs={24} lg={12}>
                    <Card title="Sustainability Scorecard" className="h-full">
                        <ResponsiveContainer width="100%" height={280}>
                            <RadarChart outerRadius={90} data={sustainabilityMetrics}>
                                <PolarGrid stroke="#E5E7EB" />
                                <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11 }} />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} fontSize={10} />
                                <Radar name="MPA Region" dataKey="A" stroke="#14B8A6" fill="#14B8A6" fillOpacity={0.5} />
                            </RadarChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
            </Row>

            {/* Partners Row */}
            <Row gutter={[16, 16]}>
                <Col xs={24}>
                    <Card title="Key Recycling Partnerships">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {partnershipData.map((partner, idx) => (
                                <div key={idx} className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-100">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xl">{partner.country}</span>
                                            <Text strong className="text-sm">{partner.name}</Text>
                                        </div>
                                        <Tag color={partner.status === 'active' ? 'green' : 'orange'}>
                                            {partner.status}
                                        </Tag>
                                    </div>
                                    <div className="flex flex-wrap gap-1 mt-2">
                                        {partner.materials.map((mat, i) => (
                                            <Tag key={i} className="text-xs">{mat}</Tag>
                                        ))}
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
