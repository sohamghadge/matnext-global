import React from 'react';
import { Card, Table, Progress } from 'antd';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
    { name: 'Steel', yield: 95, max: 98, price: 120 },
    { name: 'Aluminium', yield: 88, max: 95, price: 180 },
    { name: 'Copper', yield: 92, max: 99, price: 250 },
    { name: 'Plastics', yield: 65, max: 80, price: 80 },
    { name: 'Glass', yield: 85, max: 100, price: 40 },
];

export const MaterialRecovery: React.FC = () => {
    return (
        <Card title="Material Recovery Yields" className="shadow-sm h-full">
            <div className="h-[250px] w-full mb-4">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart layout="vertical" data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <XAxis type="number" domain={[0, 100]} />
                        <YAxis dataKey="name" type="category" width={80} />
                        <Tooltip />
                        <Bar dataKey="yield" fill="#8884d8" barSize={20} name="Current Yield %">
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.yield > 90 ? '#10b981' : (entry.yield > 70 ? '#f59e0b' : '#ef4444')} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="space-y-3">
                <div className="flex justify-between text-xs">
                    <span>Closed Loop Rate (Re-used in new vehicles)</span>
                    <span className="font-bold">42%</span>
                </div>
                <Progress percent={42} strokeColor="#3b82f6" size="small" />
            </div>
        </Card>
    );
}
