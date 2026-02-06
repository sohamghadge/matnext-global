import React, { useState } from 'react';
import { Card, Switch, Select } from 'antd';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';

const { Option } = Select;

const co2Data = [
    { name: 'Materials', value: 4.5 },
    { name: 'Production', value: 1.2 },
    { name: 'Logistics', value: 0.3 },
    { name: 'Use Phase (Grid)', value: 8.0 },
    { name: 'Maintenance', value: 0.5 },
    { name: 'ELV/Recycling', value: -1.8 },
    { name: 'Total', value: 12.7, isTotal: true },
];

const costData = [
    { name: 'Materials', value: 8500 },
    { name: 'Production', value: 3200 },
    { name: 'Logistics', value: 800 },
    { name: 'Energy/Fuel', value: 4500 },
    { name: 'Maintenance', value: 1200 },
    { name: 'ELV Value', value: -600 },
    { name: 'Total TCO', value: 17600, isTotal: true },
];

export const LCAModel: React.FC = () => {
    const [viewMode, setViewMode] = useState<'co2' | 'cost'>('co2');
    const data = viewMode === 'co2' ? co2Data : costData;

    return (
        <Card
            title="Lifecycle Assessment (LCA) Model"
            extra={
                <div className="flex items-center gap-4">
                    <Select defaultValue="india" size="small" style={{ width: 120 }}>
                        <Option value="india">India Grid</Option>
                        <Option value="eu">EU Grid</Option>
                    </Select>
                    <Switch
                        checkedChildren="Cost (€)"
                        unCheckedChildren="CO₂ (t)"
                        checked={viewMode === 'cost'}
                        onChange={(chk) => setViewMode(chk ? 'cost' : 'co2')}
                    />
                </div>
            }
            className="shadow-sm h-full"
        >
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <XAxis dataKey="name" interval={0} fontSize={11} />
                        <YAxis />
                        <Tooltip />
                        <ReferenceLine y={0} stroke="#000" />
                        <Bar dataKey="value" fill="#8884d8">
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={
                                        entry.isTotal
                                            ? '#3b82f6'
                                            : (entry.value < 0 ? '#10b981' : (viewMode === 'cost' ? '#f59e0b' : '#ef4444'))
                                    }
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
}
