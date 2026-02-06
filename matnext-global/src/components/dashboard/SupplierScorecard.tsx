import React from 'react';
import { Card, Table, Tag } from 'antd';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
    { name: 'Supplier A (Steel)', x: 80, y: 150, z: 1000, fill: '#ef4444' }, // x: Cost Index, y: CO2 Index, z: Volume
    { name: 'Supplier B (Alu)', x: 120, y: 80, z: 800, fill: '#10b981' },
    { name: 'Supplier C (Plastic)', x: 60, y: 60, z: 400, fill: '#3b82f6' },
    { name: 'Supplier D (Battery)', x: 180, y: 200, z: 1200, fill: '#f59e0b' },
];

export const SupplierScorecard: React.FC = () => {
    return (
        <Card
            title="Supplier Scorecard (Cost vs Carbon Trade-off)"
            className="shadow-sm h-full"
            bodyStyle={{ paddingTop: 0 }}
        >
            <div className="text-xs text-muted-foreground mb-4 text-center mt-4">Bubble Size = Procurement Volume</div>
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" dataKey="x" name="Cost Index" unit="%" label={{ value: 'Cost Index (100 = Market)', position: 'bottom', offset: 0 }} />
                        <YAxis type="number" dataKey="y" name="CO₂ Index" unit="%" label={{ value: 'CO₂ Index (100 = Benchmark)', angle: -90, position: 'insideLeft' }} />
                        <ZAxis type="number" dataKey="z" range={[100, 1000]} name="Volume" />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                        <Legend />
                        <Scatter name="Suppliers" data={data} fill="#8884d8" />
                    </ScatterChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};
