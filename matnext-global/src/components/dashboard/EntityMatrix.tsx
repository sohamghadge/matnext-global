import React from 'react';
import { Card } from 'antd';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
    { name: 'India Plant A', x: 120, y: 250, z: 200, fill: '#8884d8' }, // x: Revenue/Vehicle, y: CO2/Vehicle, z: Carbon Cost
    { name: 'India Plant B', x: 150, y: 220, z: 260, fill: '#8884d8' },
    { name: 'Japan Plant X', x: 200, y: 150, z: 400, fill: '#82ca9d' },
    { name: 'EU Plant Y', x: 250, y: 100, z: 500, fill: '#ffc658' },
    { name: 'ASEAN Plant Z', x: 110, y: 300, z: 150, fill: '#ff7300' },
];

export const EntityMatrix: React.FC = () => {
    return (
        <Card title="Entity Performance Matrix (CO₂ Intensity vs Economic Efficiency)" className="shadow-sm h-full">
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" dataKey="x" name="Revenue/Vehicle" unit="k" label={{ value: 'Revenue per Vehicle (€)', position: 'bottom', offset: 0 }} />
                        <YAxis type="number" dataKey="y" name="CO₂/Vehicle" unit="kg" label={{ value: 'CO₂ per Vehicle (kg)', angle: -90, position: 'insideLeft' }} />
                        <ZAxis type="number" dataKey="z" range={[60, 400]} name="Carbon Tax Exposure" unit="k€" />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                        <Legend />
                        <Scatter name="Manufacturing Plants" data={data} fill="#8884d8" shape="circle" />
                    </ScatterChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};
