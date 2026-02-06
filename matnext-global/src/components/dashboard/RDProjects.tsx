import React from 'react';
import { Card, Table, Tag, Progress, Avatar } from 'antd';
import { ExperimentOutlined, UserOutlined } from '@ant-design/icons';

const projects = [
    { key: '1', name: 'Solid State Battery', phase: 'Proto', progress: 65, npv: '€1.2B', co2: '-15%', lead: 'Dr. Rao' },
    { key: '2', name: 'Hydrogen ICE', phase: 'Validation', progress: 85, npv: '€0.8B', co2: '-100%', lead: 'T. Suzuki' },
    { key: '3', name: 'Bio-Composite Body', phase: 'Research', progress: 30, npv: '€0.3B', co2: '-8%', lead: 'A. Gupta' },
    { key: '4', name: 'Direct Air Capture', phase: 'Concept', progress: 15, npv: 'TBD', co2: 'Net Neg', lead: 'M. Chen' },
];

const columns = [
    {
        title: 'Project',
        dataIndex: 'name',
        key: 'name',
        render: (text: string) => <div className="font-medium"><ExperimentOutlined className="mr-2 text-blue-500" />{text}</div>
    },
    {
        title: 'Phase',
        dataIndex: 'phase',
        key: 'phase',
        render: (text: string) => <Tag color="blue">{text}</Tag>
    },
    {
        title: 'Progress',
        dataIndex: 'progress',
        key: 'progress',
        render: (val: number) => <Progress percent={val} size="small" />
    },
    { title: 'Proj. NPV', dataIndex: 'npv', key: 'npv', align: 'right' as const },
    { title: 'CO₂ Impact', dataIndex: 'co2', key: 'co2', align: 'right' as const, render: (val: string) => <span className="text-emerald-600 font-bold">{val}</span> },
    { title: 'Lead', dataIndex: 'lead', key: 'lead', width: 100, render: (val: string) => <div className="flex items-center gap-1"><Avatar size="small" icon={<UserOutlined />} /> <span className="text-xs">{val}</span></div> },
];

export const RDProjects: React.FC = () => {
    return (
        <Card title="R&D Portfolio: Decarbonization Tech" className="shadow-sm h-full">
            <Table dataSource={projects} columns={columns} pagination={false} size="small" />
        </Card>
    );
}
