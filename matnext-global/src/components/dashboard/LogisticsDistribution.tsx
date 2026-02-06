import React, { useState } from 'react';
import { Card, InputNumber, Select, Descriptions, Tag } from 'antd';
import { TruckOutlined, RocketOutlined } from '@ant-design/icons';

const { Option } = Select;

export const LogisticsDistribution: React.FC = () => {
    const [distance, setDistance] = useState(1200);

    return (
        <Card title="Logistics Route Calculator" className="shadow-sm h-full">
            <div className="flex gap-4 mb-6">
                <div className="flex-1">
                    <div className="text-xs font-semibold mb-1 uppercase text-muted-foreground">Origin</div>
                    <Select defaultValue="manesar" className="w-full">
                        <Option value="manesar">Manesar, India</Option>
                        <Option value="mundra">Mundra Port</Option>
                    </Select>
                </div>
                <div className="flex-1">
                    <div className="text-xs font-semibold mb-1 uppercase text-muted-foreground">Destination</div>
                    <Select defaultValue="mumbai" className="w-full">
                        <Option value="mumbai">Mumbai Port</Option>
                        <Option value="rotterdam">Rotterdam</Option>
                    </Select>
                </div>
                <div className="w-32">
                    <div className="text-xs font-semibold mb-1 uppercase text-muted-foreground">Distance (km)</div>
                    <InputNumber value={distance} onChange={(val) => setDistance(val || 0)} className="w-full" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg bg-orange-50 border-orange-100 relative overflow-hidden">
                    <div className="flex justify-between items-start mb-2">
                        <TruckOutlined className="text-lg text-orange-600" />
                        <Tag color="orange">Road</Tag>
                    </div>
                    <div className="text-2xl font-bold text-slate-800">{(distance * 0.062).toFixed(1)} kg</div>
                    <div className="text-xs text-muted-foreground">CO₂ per unit</div>
                    <div className="mt-2 text-sm font-semibold text-slate-700">€{(distance * 0.8).toFixed(0)}</div>
                </div>

                <div className="p-4 border rounded-lg bg-emerald-50 border-emerald-100 relative overflow-hidden">
                    <div className="flex justify-between items-start mb-2">
                        <RocketOutlined className="text-lg text-emerald-600" />
                        <Tag color="green">Rail</Tag>
                    </div>
                    <div className="text-2xl font-bold text-slate-800">{(distance * 0.022).toFixed(1)} kg</div>
                    <div className="text-xs text-muted-foreground">CO₂ per unit (-65%)</div>
                    <div className="mt-2 text-sm font-semibold text-slate-700">€{(distance * 0.5).toFixed(0)}</div>
                </div>

                <div className="p-4 border rounded-lg bg-blue-50 border-blue-100 relative overflow-hidden opacity-50">
                    <div className="mb-2"><Tag>Sea</Tag></div>
                    <div className="text-sm italic">Not applicable for inland route</div>
                </div>
            </div>
        </Card>
    );
}
