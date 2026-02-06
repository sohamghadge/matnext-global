import React from 'react';
import { Card, Statistic, Row, Col, Progress } from 'antd';
import { FireOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
    { name: 'Grid Power', value: 45, color: '#94a3b8' },
    { name: 'Solar', value: 30, color: '#fbbf24' },
    { name: 'Biogas (CBG)', value: 25, color: '#10b981' },
];

export const BiogasTracker: React.FC = () => {
    return (
        <Card title="Biogas & Energy Mix" className="shadow-sm h-full">
            <Row gutter={16}>
                <Col span={12}>
                    <div className="h-[200px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    innerRadius={50}
                                    outerRadius={70}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </Col>
                <Col span={12} className="flex flex-col justify-center space-y-4">
                    <Statistic
                        title="Net CO₂ Avoided (Daily)"
                        value={12.5}
                        suffix="tCO₂e"
                        valueStyle={{ color: '#10b981', fontWeight: 'bold' }}
                        prefix={<ArrowUpOutlined />}
                    />
                    <div>
                        <div className="text-xs text-muted-foreground mb-1">Methane Capture Efficiency</div>
                        <Progress percent={94} size="small" strokeColor="#10b981" />
                    </div>
                </Col>
            </Row>
            <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                {data.map(item => (
                    <div key={item.name} className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                        <span className="text-muted-foreground">{item.name}: {item.value}%</span>
                    </div>
                ))}
            </div>
        </Card>
    );
}
