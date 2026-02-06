import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout } from 'antd';
import {
    GlobalOutlined,
    EnvironmentOutlined,
    CodeSandboxOutlined,
    PartitionOutlined,
    SyncOutlined,
    ExperimentOutlined,
    SafetyCertificateOutlined,
} from '@ant-design/icons';
import { cn } from '@/lib/utils';

const { Header } = Layout;

const navItems = [
    { path: '/', label: 'Overview', icon: <GlobalOutlined /> },
    { path: '/regions', label: 'Regions', icon: <EnvironmentOutlined /> },
    { path: '/products', label: 'Products', icon: <CodeSandboxOutlined /> },
    { path: '/supply-chain', label: 'Supply Chain', icon: <PartitionOutlined /> },
    { path: '/circularity', label: 'Circularity', icon: <SyncOutlined /> },
    { path: '/r-and-d', label: 'R&D', icon: <ExperimentOutlined /> },
    { path: '/compliance', label: 'Compliance', icon: <SafetyCertificateOutlined /> },
];

export const TopNav: React.FC = () => {
    return (
        <Header className="dashboard-header flex items-center px-4 h-12 sticky top-0 z-50 shadow-sm border-b border-white/10">
            <nav className="flex items-center gap-1">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => cn(
                            "px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-2",
                            isActive
                                ? "bg-white/15 text-white shadow-sm"
                                : "text-white/70 hover:text-white hover:bg-white/5"
                        )}
                    >
                        {item.icon}
                        {item.label}
                    </NavLink>
                ))}
            </nav>
        </Header>
    );
};
