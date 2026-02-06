import React, { useState, useCallback } from 'react';
import { Tabs, ConfigProvider } from 'antd';
import { Building2, Recycle, Factory, Truck } from 'lucide-react';
import MSILTab from '../tabs/MSILTab';
import RVSFTab from '../tabs/RVSFTab';
import RecyclersTab from '../tabs/RecyclersTab';
import SuppliersTab from '../tabs/SuppliersTab';
import { FilterState } from '@/data/dashboardData';

import { useFilters } from '@/context/FilterContext';

export const IndiaDashboard: React.FC = () => {
    const { filters } = useFilters();
    const [activeTab, setActiveTab] = useState('msil'); // Set Corporate (MSIL) as default
    const [isLoading, setIsLoading] = useState(false);

    const tabItems = [
        {
            key: 'msil',
            label: (
                <span className="flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    Corporate (MSIL)
                </span>
            ),
            children: <MSILTab isLoading={isLoading} filters={filters} />,
        },
        {
            key: 'rvsf',
            label: (
                <span className="flex items-center gap-2">
                    <Recycle className="w-4 h-4" />
                    RVSFs Overview
                </span>
            ),
            children: <RVSFTab isLoading={isLoading} filters={filters} />,
        },
        {
            key: 'recyclers',
            label: (
                <span className="flex items-center gap-2">
                    <Factory className="w-4 h-4" />
                    Recyclers Overview
                </span>
            ),
            children: <RecyclersTab isLoading={isLoading} filters={filters} />,
        },
        {
            key: 'suppliers',
            label: (
                <span className="flex items-center gap-2">
                    <Truck className="w-4 h-4" />
                    Suppliers Overview
                </span>
            ),
            children: <SuppliersTab isLoading={isLoading} filters={filters} />,
        },
    ];

    return (
        <div className="bg-background animate-fade-in">
            <Tabs
                activeKey={activeTab}
                onChange={setActiveTab}
                items={tabItems}
                type="card"
                size="middle"
                className="dashboard-tabs"
            />
        </div>
    );
};
