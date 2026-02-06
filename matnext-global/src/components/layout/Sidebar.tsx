import React, { useState } from 'react';
import { Layout, Select, DatePicker, Switch, Divider, Button, Card, Typography } from 'antd';
import { FilterOutlined, ArrowLeftOutlined, ArrowRightOutlined, SyncOutlined, ExperimentOutlined } from '@ant-design/icons';
import { cn } from '@/lib/utils';
import { useLocation } from 'react-router-dom';
import { useFilters } from '@/context/FilterContext';
import { filterOptions } from '@/data/dashboardData';

const { Sider } = Layout;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { Text, Title } = Typography;

export const Sidebar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();
    const { filters, updateFilter, setFilters } = useFilters();

    // Determine context based on route
    const getContextTitle = () => {
        const path = location.pathname;
        if (path.includes('regions')) return 'Regional Filters';
        if (path.includes('products')) return 'Product Filters';
        return 'Global Context';
    };

    const handleTimeHorizonChange = (value: string) => {
        let newDateFrom = filters.dateFrom;
        let newDateTo = filters.dateTo;
        const today = new Date();

        if (value === 'fy2026') {
            newDateFrom = new Date('2025-04-01');
            newDateTo = new Date('2026-03-31');
        } else if (value === 'fy2025') {
            newDateFrom = new Date('2024-04-01');
            newDateTo = new Date('2025-03-31');
        } else if (value === 'l12m') {
            newDateFrom = new Date();
            newDateFrom.setFullYear(today.getFullYear() - 1);
            newDateTo = today;
        }

        updateFilter('dateFrom', newDateFrom);
        updateFilter('dateTo', newDateTo);
    };

    const handleApplyFilters = () => {
        // Trigger data reload by updating a timestamp in filters
        setFilters((prev: any) => ({
            ...prev,
            lastApplied: Date.now()
        }));
    };

    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            width={220}
            collapsedWidth={50}
            theme="light"
            className="border-r border-border bg-sidebar-background"
            trigger={null}
            style={{
                background: 'var(--sidebar-background)',
                height: 'calc(100vh - 48px)',
                position: 'sticky',
                top: 48,
                left: 0,
                overflowY: 'auto'
            }}
        >
            <div className="flex flex-col h-full p-3 gap-4">
                {/* Toggle Button */}
                <div className="flex items-center justify-between mb-1">
                    {!collapsed && <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                        <FilterOutlined />
                        <span>Filters</span>
                    </div>}
                    <Button
                        type="text"
                        icon={collapsed ? <FilterOutlined /> : <ArrowLeftOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        size="small"
                        className="text-muted-foreground hover:text-primary"
                    />
                </div>

                {!collapsed && (
                    <div className="space-y-4 animate-fade-in">
                        {/* Context Section */}
                        <div className="space-y-2">
                            <Text type="secondary" className="text-xs uppercase tracking-wider font-bold">Time Horizon</Text>
                            <Select
                                defaultValue="fy2026"
                                className="w-full"
                                variant="filled"
                                size="small"
                                onChange={handleTimeHorizonChange}
                            >
                                <Option value="fy2026">FY 2025-26</Option>
                                <Option value="fy2025">FY 2024-25</Option>
                                <Option value="l12m">Last 12 Months</Option>
                                <Option value="custom">Custom Range</Option>
                            </Select>
                        </div>

                        <Divider className="my-1" />

                        <div className="space-y-2">
                            <Text type="secondary" className="text-xs uppercase tracking-wider font-bold">Geography</Text>
                            <Select defaultValue="global" className="w-full" mode="multiple" variant="filled" placeholder="Select Regions" size="small">
                                <Option value="global">All Regions</Option>
                                <Option value="india">India</Option>
                                <Option value="japan">Japan</Option>
                                <Option value="europe">Europe</Option>
                                <Option value="asia">Asia</Option>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Text type="secondary" className="text-xs uppercase tracking-wider font-bold">Business Unit</Text>
                            <Select defaultValue="all" className="w-full" variant="filled" size="small">
                                <Option value="all">All Units</Option>
                                <Option value="auto">Automobile</Option>
                                <Option value="moto">Motorcycle</Option>
                                <Option value="marine">Marine</Option>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Text type="secondary" className="text-xs uppercase tracking-wider font-bold">Material</Text>
                            <Select
                                mode="multiple"
                                className="w-full"
                                variant="filled"
                                placeholder="Select Materials"
                                size="small"
                                value={filters.materials}
                                onChange={(value) => updateFilter('materials', value)}
                                options={filterOptions.allMaterials.map(m => ({ value: m, label: m }))}
                                maxTagCount={1}
                            />
                        </div>

                        <Divider className="my-1" />

                        {/* Scenarios Section */}
                        <div className="p-2 bg-white/50 rounded-lg border border-border space-y-2 shadow-none">
                            <div className="flex items-center gap-2 text-amber-700">
                                <ExperimentOutlined className="text-sm" />
                                <span className="font-semibold text-xs">Scenario Modeling</span>
                            </div>

                            <div className="space-y-1">
                                <div className="flex justify-between text-xs">
                                    <span>Carbon Price</span>
                                    <span className="font-mono">€50/t</span>
                                </div>
                                <input type="range" className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-600" />
                            </div>

                            <div className="space-y-1">
                                <div className="flex justify-between text-xs">
                                    <span>Grid Renewable %</span>
                                    <span className="font-mono">40%</span>
                                </div>
                                <input type="range" className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600" />
                            </div>
                        </div>

                        <Button
                            type="primary"
                            block
                            icon={<SyncOutlined />}
                            className="mt-2 bg-primary hover:bg-primary/90"
                            onClick={handleApplyFilters}
                        >
                            Apply Filters
                        </Button>
                    </div>
                )}
            </div>
        </Sider>
    );
};
