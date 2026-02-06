import React from 'react';
import { Card, Row, Col, Statistic, Tag, Typography } from 'antd';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts';
import { ArrowUpOutlined, ArrowDownOutlined, EuroOutlined } from '@ant-design/icons';
import { Car, Factory, Leaf, MapPin } from 'lucide-react';

const { Title, Text } = Typography;

// Dummy data for Europe (Hungary, UK, Germany operations)
const quarterlyData = [
    { quarter: 'Q1 FY24', hungary: 180, uk: 120, germany: 95 },
    { quarter: 'Q2 FY24', hungary: 195, uk: 135, germany: 108 },
    { quarter: 'Q3 FY24', hungary: 210, uk: 148, germany: 115 },
    { quarter: 'Q4 FY24', hungary: 225, uk: 162, germany: 128 },
    { quarter: 'Q1 FY25', hungary: 242, uk: 175, germany: 140 },
    { quarter: 'Q2 FY25', hungary: 258, uk: 188, germany: 152 },
];

const euComplianceData = [
    { metric: 'ELV Recycling', current: 92, target: 95, status: 'on-track' },
    { metric: 'Material Recovery', current: 87, target: 85, status: 'achieved' },
    { metric: 'Hazardous Waste', current: 98, target: 100, status: 'on-track' },
    { metric: 'Carbon Reduction', current: 78, target: 80, status: 'at-risk' },
];

const countryStats = [
    { country: 'Hungary', flag: '🇭🇺', plants: 1, recycled: 1245, rate: 94.2 },
    { country: 'UK', flag: '🇬🇧', plants: 2, recycled: 892, rate: 91.8 },
    { country: 'Germany', flag: '🇩🇪', plants: 1, recycled: 645, rate: 95.1 },
];

const carbonCreditsData = [
    { month: 'Jul', credits: 45, price: 52 },
    { month: 'Aug', credits: 52, price: 48 },
    { month: 'Sep', credits: 48, price: 55 },
    { month: 'Oct', credits: 61, price: 58 },
    { month: 'Nov', credits: 58, price: 62 },
    { month: 'Dec', credits: 65, price: 68 },
    { month: 'Jan', credits: 72, price: 72 },
];

export const EuropeDashboard: React.FC = () => {
    return (
        <div className="space-y-4 animate-fade-in">
            {/* Header */}
            <div className="mb-4">
                <Title level={4} className="!mb-1 text-foreground">🇪🇺 Europe Operations</Title>
                <Text type="secondary">Suzuki EU - Circular Economy & ELV Compliance</Text>
            </div>

            {/* KPI Cards */}
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} lg={6}>
                    <Card className="stat-card border-l-4 border-l-blue-500">
                        <Statistic
                            title={<span className="flex items-center gap-2"><Factory className="w-4 h-4" /> Total Recycled</span>}
                            value={2782}
                            suffix="MT"
                            valueStyle={{ color: '#3B82F6' }}
                        />
                        <div className="mt-2 flex items-center gap-1 text-emerald-600 text-xs">
                            <ArrowUpOutlined /> 18.6% YoY growth
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    <Card className="stat-card border-l-4 border-l-emerald-500">
                        <Statistic
                            title={<span className="flex items-center gap-2"><Car className="w-4 h-4" /> ELVs Processed</span>}
                            value={12450}
                            suffix="units"
                            valueStyle={{ color: '#10B981' }}
                        />
                        <div className="mt-2 flex items-center gap-1 text-emerald-600 text-xs">
                            <ArrowUpOutlined /> On track for targets
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    <Card className="stat-card border-l-4 border-l-amber-500">
                        <Statistic
                            title={<span className="flex items-center gap-2"><Leaf className="w-4 h-4" /> Carbon Credits</span>}
                            value={329}
                            suffix="earned"
                            valueStyle={{ color: '#F59E0B' }}
                        />
                        <div className="mt-2 flex items-center gap-1 text-emerald-600 text-xs">
                            <EuroOutlined /> €23,680 value
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    <Card className="stat-card border-l-4 border-l-purple-500">
                        <Statistic
                            title={<span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Active Facilities</span>}
                            value={4}
                            suffix="plants"
                            valueStyle={{ color: '#8B5CF6' }}
                        />
                        <div className="mt-2 flex items-center gap-1 text-blue-600 text-xs">
                            3 countries covered
                        </div>
                    </Card>
                </Col>
            </Row>

            {/* Charts Row */}
            <Row gutter={[16, 16]}>
                <Col xs={24} lg={14}>
                    <Card title="Quarterly Recycling by Country (MT)" className="h-full">
                        <ResponsiveContainer width="100%" height={280}>
                            <AreaChart data={quarterlyData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                <XAxis dataKey="quarter" stroke="#6B7280" fontSize={11} />
                                <YAxis stroke="#6B7280" fontSize={12} />
                                <Tooltip contentStyle={{ borderRadius: 8 }} />
                                <Legend />
                                <Area type="monotone" dataKey="hungary" stackId="1" stroke="#3B82F6" fill="#93C5FD" name="🇭🇺 Hungary" />
                                <Area type="monotone" dataKey="uk" stackId="1" stroke="#10B981" fill="#6EE7B7" name="🇬🇧 UK" />
                                <Area type="monotone" dataKey="germany" stackId="1" stroke="#8B5CF6" fill="#C4B5FD" name="🇩🇪 Germany" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
                <Col xs={24} lg={10}>
                    <Card title="EU Compliance Status" className="h-full">
                        <div className="space-y-4">
                            {euComplianceData.map((item, idx) => (
                                <div key={idx} className="space-y-1">
                                    <div className="flex justify-between items-center">
                                        <Text className="text-sm">{item.metric}</Text>
                                        <Tag color={item.status === 'achieved' ? 'green' : item.status === 'on-track' ? 'blue' : 'orange'}>
                                            {item.status === 'achieved' ? '✓ Achieved' : item.status === 'on-track' ? '→ On Track' : '⚠ At Risk'}
                                        </Tag>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex-1 bg-gray-100 rounded-full h-2">
                                            <div
                                                className={`h-2 rounded-full ${item.status === 'achieved' ? 'bg-emerald-500' : item.status === 'on-track' ? 'bg-blue-500' : 'bg-amber-500'}`}
                                                style={{ width: `${item.current}%` }}
                                            />
                                        </div>
                                        <Text className="text-xs font-mono">{item.current}% / {item.target}%</Text>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </Col>
            </Row>

            {/* Bottom Row */}
            <Row gutter={[16, 16]}>
                <Col xs={24} lg={12}>
                    <Card title="Carbon Credits & Pricing Trend">
                        <ResponsiveContainer width="100%" height={200}>
                            <LineChart data={carbonCreditsData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                <XAxis dataKey="month" stroke="#6B7280" fontSize={12} />
                                <YAxis yAxisId="left" stroke="#10B981" fontSize={12} />
                                <YAxis yAxisId="right" orientation="right" stroke="#F59E0B" fontSize={12} />
                                <Tooltip contentStyle={{ borderRadius: 8 }} />
                                <Legend />
                                <Line yAxisId="left" type="monotone" dataKey="credits" stroke="#10B981" strokeWidth={2} name="Credits Earned" />
                                <Line yAxisId="right" type="monotone" dataKey="price" stroke="#F59E0B" strokeWidth={2} name="Price (€/t)" />
                            </LineChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
                <Col xs={24} lg={12}>
                    <Card title="Country-wise Performance">
                        <div className="space-y-3">
                            {countryStats.map((country, idx) => (
                                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">{country.flag}</span>
                                        <div>
                                            <Text strong>{country.country}</Text>
                                            <Text type="secondary" className="block text-xs">{country.plants} plant(s)</Text>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <Text strong className="text-blue-600">{country.recycled} MT</Text>
                                        <Text type="secondary" className="block text-xs">{country.rate}% recovery</Text>
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
