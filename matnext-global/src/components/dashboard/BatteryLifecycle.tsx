import React from 'react';
import { Card, Steps, Tag } from 'antd';
import { ThunderboltOutlined, SyncOutlined, DeleteOutlined } from '@ant-design/icons';


const items = [
    {
        title: 'First Life',
        description: 'EV Mobility (8-10 yrs)',
        status: 'finish' as const,
        icon: <ThunderboltOutlined />,
    },
    {
        title: 'Second Life',
        description: 'Grid Storage (5-7 yrs)',
        status: 'process' as const,
        icon: <SyncOutlined spin />,
    },
    {
        title: 'Recycling',
        description: 'Material Recovery',
        status: 'wait' as const,
        icon: <DeleteOutlined />,
    },
];

export const BatteryLifecycle: React.FC = () => {
    return (
        <Card title="Battery Value Pathway Analyzer (Pack #BAT-202X)" className="shadow-sm h-full">
            <div className="py-8 px-4">
                <Steps items={items} />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                    <div className="text-xs text-muted-foreground uppercase mb-1">Total CO₂e Lifetime</div>
                    <div className="text-xl font-bold text-emerald-800">42 kg/kWh</div>
                    <div className="text-xs text-emerald-600 mt-1">-58% vs Scrap after 1st life</div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <div className="text-xs text-muted-foreground uppercase mb-1">Residual Value</div>
                    <div className="text-xl font-bold text-blue-800">$45/kWh</div>
                    <div className="text-xs text-blue-600 mt-1">Ready for resale market</div>
                </div>
            </div>
        </Card>
    );
}
