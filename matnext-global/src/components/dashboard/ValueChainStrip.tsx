import React from 'react';
import { Card, Badge, Typography } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

const { Text } = Typography;

const stages = [
    { id: 'mining', label: 'Mining', co2: '2.4 Mt', cost: '€1.2B', color: 'bg-stone-200' },
    { id: 'processing', label: 'Material Conversion', co2: '3.1 Mt', cost: '€2.1B', color: 'bg-orange-100' },
    { id: 'manufacturing', label: 'Parts Mfg', co2: '1.8 Mt', cost: '€3.5B', color: 'bg-blue-100' },
    { id: 'assembly', label: 'Vehicle Assembly', co2: '0.9 Mt', cost: '€1.5B', color: 'bg-indigo-100' },
    { id: 'logistics', label: 'Logistics', co2: '0.4 Mt', cost: '€0.8B', color: 'bg-cyan-100' },
    { id: 'use', label: 'Use Phase', co2: '8.5 Mt', cost: 'N/A', color: 'bg-emerald-100' },
    { id: 'elv', label: 'ELV Collection', co2: '-0.2 Mt', cost: '€0.1B', color: 'bg-rose-100' },
    { id: 'recycling', label: 'Recycling', co2: '-1.5 Mt', cost: '-€0.3B', color: 'bg-green-200' },
];

export const ValueChainStrip: React.FC = () => {
    return (
        <Card title="Global Value Chain Impact" extra={<Badge status="processing" text="Real-time" />} className="shadow-sm">
            <div className="flex items-center justify-between overflow-x-auto pb-4 gap-2">
                {stages.map((stage, index) => (
                    <div key={stage.id} className="flex items-center shrink-0">
                        <div className={`p-4 rounded-lg w-36 h-28 flex flex-col justify-between border border-border ${stage.color} hover:shadow-md transition-shadow cursor-pointer`}>
                            <Text strong className="text-xs uppercase tracking-wide opacity-75 block mb-1">{stage.label}</Text>
                            <div>
                                <div className="text-lg font-bold text-slate-800">{stage.co2}</div>
                                <div className="text-xs text-slate-600">{stage.cost}</div>
                            </div>
                        </div>
                        {index < stages.length - 1 && (
                            <ArrowRightOutlined className="mx-2 text-slate-400" />
                        )}
                    </div>
                ))}
            </div>
        </Card>
    );
}
