import React from 'react';
import { Card, Table, Tag, Tooltip } from 'antd';
import { SafetyCertificateOutlined, WarningOutlined, ClockCircleOutlined } from '@ant-design/icons';

const regulations = [
    { key: '1', name: 'EU CBAM', region: 'Europe', deadline: '2026-01-01', risk: 'High', status: 'In Progress' },
    { key: '2', name: 'EU ESPR / DPP', region: 'Europe', deadline: '2027-01-01', risk: 'Medium', status: 'Planning' },
    { key: '3', name: 'India BRSR Core', region: 'India', deadline: '2025-04-01', risk: 'Low', status: 'Compliant' },
    { key: '4', name: 'US Inflation Red. Act', region: 'USA', deadline: 'Immediate', risk: 'Medium', status: 'Partial' },
    { key: '5', name: 'Japan GX League', region: 'Japan', deadline: '2026-04-01', risk: 'Low', status: 'Compliant' },
];

const columns = [
    {
        title: 'Regulation',
        dataIndex: 'name',
        key: 'name',
        render: (text: string) => <span className="font-semibold">{text}</span>
    },
    { title: 'Region', dataIndex: 'region', key: 'region' },
    {
        title: 'Deadline',
        dataIndex: 'deadline',
        key: 'deadline',
        render: (text: string) => <div className="text-xs font-mono"><ClockCircleOutlined className="mr-1" />{text}</div>
    },
    {
        title: 'Risk Level',
        dataIndex: 'risk',
        key: 'risk',
        render: (val: string) => (
            <Tag color={val === 'High' ? 'red' : (val === 'Medium' ? 'orange' : 'green')}>
                {val === 'High' && <WarningOutlined className="mr-1" />}
                {val}
            </Tag>
        )
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (val: string) => (
            <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${val === 'Compliant' ? 'bg-green-500' : (val === 'In Progress' ? 'bg-blue-500' : 'bg-yellow-500')}`}></div>
                {val}
            </div>
        )
    },
];

export const ComplianceMatrix: React.FC = () => {
    return (
        <Card title="Global Regulatory Compliance Monitor" className="shadow-sm h-full">
            <Table dataSource={regulations} columns={columns} pagination={false} size="small" />
        </Card>
    );
}
