import React from 'react';
import { Tabs, Typography } from 'antd';
import { IndiaDashboard } from '@/components/dashboard/regions/IndiaDashboard';

const { Title, Text } = Typography;

export const RegionalOperations: React.FC = () => {
    const items = [
        {
            key: 'india',
            label: 'India',
            children: (
                <div className="pt-2">
                    <IndiaDashboard />
                </div>
            )
        },
        {
            key: 'japan',
            label: 'Japan',
            children: <div className="p-8 text-center text-muted-foreground bg-muted/20 rounded-lg border border-dashed border-border h-64 flex items-center justify-center">Japan Regional Data Placeholder</div>
        },
        {
            key: 'europe',
            label: 'Europe',
            children: <div className="p-8 text-center text-muted-foreground bg-muted/20 rounded-lg border border-dashed border-border h-64 flex items-center justify-center">Europe Regional Data Placeholder</div>
        },
        {
            key: 'mpa',
            label: 'MPA',
            children: <div className="p-8 text-center text-muted-foreground bg-muted/20 rounded-lg border border-dashed border-border h-64 flex items-center justify-center">MPA Regional Data Placeholder</div>
        },
        {
            key: 'asia',
            label: 'Asia',
            children: <div className="p-8 text-center text-muted-foreground bg-muted/20 rounded-lg border border-dashed border-border h-64 flex items-center justify-center">Asia Regional Data Placeholder</div>
        },
        {
            key: 'latam-oceania',
            label: 'LatAM and Oceania',
            children: <div className="p-8 text-center text-muted-foreground bg-muted/20 rounded-lg border border-dashed border-border h-64 flex items-center justify-center">LatAM and Oceania Regional Data Placeholder</div>
        },
    ];

    return (
        <div className="space-y-2">
            <Tabs defaultActiveKey="india" items={items} type="card" className="regional-tabs" />
        </div>
    );
}
