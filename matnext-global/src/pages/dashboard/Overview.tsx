import React, { Suspense } from 'react';
import { Tabs, Typography, Skeleton } from 'antd';
import { useFilters } from '@/context/FilterContext';

// Lazy load tabs to improve initial load
const MSILTab = React.lazy(() => import('@/components/dashboard/tabs/MSILTab'));
const RVSFTab = React.lazy(() => import('@/components/dashboard/tabs/RVSFTab'));
const RecyclersTab = React.lazy(() => import('@/components/dashboard/tabs/RecyclersTab'));
const SuppliersTab = React.lazy(() => import('@/components/dashboard/tabs/SuppliersTab'));

const { Title, Text } = Typography;

export const Overview: React.FC = () => {
    const { filters } = useFilters();
    const isLoading = false; // You might want to handle global loading state

    const items = [
        {
            key: 'msil',
            label: 'MSIL',
            children: (
                <Suspense fallback={<Skeleton active />}>
                    <MSILTab isLoading={isLoading} filters={filters} />
                </Suspense>
            ),
        },
        {
            key: 'rvsf',
            label: 'RVSF',
            children: (
                <Suspense fallback={<Skeleton active />}>
                    <RVSFTab isLoading={isLoading} filters={filters} />
                </Suspense>
            ),
        },
        {
            key: 'supplier',
            label: 'Supplier',
            children: (
                <Suspense fallback={<Skeleton active />}>
                    <SuppliersTab isLoading={isLoading} filters={filters} />
                </Suspense>
            ),
        },
        {
            key: 'recycler',
            label: 'Recycler',
            children: (
                <Suspense fallback={<Skeleton active />}>
                    <RecyclersTab isLoading={isLoading} filters={filters} />
                </Suspense>
            ),
        },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-end justify-between">
                <div>
                    <Title level={2} className="!mb-0 !mt-0 text-foreground">Global Sustainability Overview</Title>
                    <Text className="text-muted-foreground">Real-time ESG performance across operations and supply chain</Text>
                </div>
                <div className="text-right">
                    <Text className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Last Updated</Text>
                    <div className="font-mono text-sm">Feb 04, 2026 13:15 GMT</div>
                </div>
            </div>

            <Tabs defaultActiveKey="msil" items={items} type="card" className="dashboard-tabs" />
        </div>
    );
}
