import React from 'react';
import { Layout } from 'antd';
import { TopNav } from './TopNav';
import { Sidebar } from './Sidebar';
import { Outlet } from 'react-router-dom';
import { FilterProvider } from '@/context/FilterContext';

const { Content } = Layout;

export const DashboardLayout: React.FC = () => {
    return (
        <FilterProvider>
            <Layout className="min-h-screen">
                <TopNav />
                <Layout>
                    <Sidebar />
                    <Content className="bg-background overflow-y-auto h-[calc(100vh-48px)] overflow-x-hidden">
                        <div className="p-6 max-w-[1600px] mx-auto w-full">
                            <Outlet />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </FilterProvider>
    );
};
