import React from 'react';
import { Card } from 'antd';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';

const data = [
    { name: 'Renewable PPA', cost: -20, potential: 100 }, // Negative cost = savings
    { name: 'Energy Efficiency', cost: -5, potential: 50 },
    { name: 'Biogas Switch', cost: 10, potential: 80 },
    { name: 'Logistics Opt', cost: 15, potential: 40 },
    { name: 'Recycled Steel', cost: 40, potential: 120 },
    { name: 'Green Hydrogen', cost: 120, potential: 60 },
];

export const FinancialImpact: React.FC = () => {
    return (
        <Card title="Global Abatement Cost Curve" className="shadow-sm h-full">
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis label={{ value: 'Cost (¥/tCO₂e)', angle: -90, position: 'insideLeft' }} />
                        <Tooltip cursor={{ fill: 'transparent' }} />
                        <Legend />
                        <ReferenceLine y={0} stroke="#000" />
                        <Bar
                            dataKey="cost"
                            fill="#8884d8"
                            activeBar={{ stroke: 'none', fillOpacity: 1, style: { filter: 'drop-shadow(0px 0px 6px rgba(0,0,0,0.4))' } }}
                        >
                            {data.map((entry, index) => (
                                <Cell cursor="pointer" fill={entry.cost < 0 ? '#82ca9d' : '#ff7300'} key={`cell-${index}`} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
}
