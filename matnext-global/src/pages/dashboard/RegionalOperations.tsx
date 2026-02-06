import React from 'react';
import { Tabs, Typography } from 'antd';
import { IndiaDashboard } from '@/components/dashboard/regions/IndiaDashboard';
import { JapanDashboard } from '@/components/dashboard/regions/JapanDashboard';
import { EuropeDashboard } from '@/components/dashboard/regions/EuropeDashboard';
import { MPADashboard } from '@/components/dashboard/regions/MPADashboard';
import { AsiaDashboard } from '@/components/dashboard/regions/AsiaDashboard';
import { LatAmOceaniaDashboard } from '@/components/dashboard/regions/LatAmOceaniaDashboard';

const { Title, Text } = Typography;

export const RegionalOperations: React.FC = () => {
    const items = [
        {
            key: 'india',
            label: '🇮🇳 India',
            children: (
                <div className="pt-2">
                    <IndiaDashboard />
                </div>
            )
        },
        {
            key: 'japan',
            label: '🇯🇵 Japan',
            children: (
                <div className="pt-2">
                    <JapanDashboard />
                </div>
            )
        },
        {
            key: 'europe',
            label: '🇪🇺 Europe',
            children: (
                <div className="pt-2">
                    <EuropeDashboard />
                </div>
            )
        },
        {
            key: 'mpa',
            label: '🌍 MEA',
            children: (
                <div className="pt-2">
                    <MPADashboard />
                </div>
            )
        },
        {
            key: 'asia',
            label: '🌏 Asia',
            children: (
                <div className="pt-2">
                    <AsiaDashboard />
                </div>
            )
        },
        {
            key: 'latam-oceania',
            label: '🌎 LatAM & Oceania',
            children: (
                <div className="pt-2">
                    <LatAmOceaniaDashboard />
                </div>
            )
        },
    ];

    return (
        <div className="space-y-2">
            <Tabs defaultActiveKey="india" items={items} type="card" className="regional-tabs" />
        </div>
    );
}

