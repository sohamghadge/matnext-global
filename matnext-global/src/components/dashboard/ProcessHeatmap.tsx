import React from 'react';
import { Card, Table, Tag, Progress, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const processData = [
    { key: '1', step: 'Press Shop', energy: 120, co2: 45, cost: 85, efficiency: 92, status: 'success' },
    { key: '2', step: 'Body Shop', energy: 350, co2: 180, cost: 210, efficiency: 78, status: 'warning' },
    { key: '3', step: 'Paint Shop', energy: 850, co2: 420, cost: 550, efficiency: 65, status: 'exception' },
    { key: '4', step: 'Assembly', energy: 200, co2: 90, cost: 120, efficiency: 88, status: 'success' },
    { key: '5', step: 'Testing', energy: 50, co2: 15, cost: 40, efficiency: 95, status: 'success' },
];

const columns = [
    {
        title: 'Process Step',
        dataIndex: 'step',
        key: 'step',
        render: (text: string) => <span className="font-semibold">{text}</span>,
    },
    {
        title: 'Energy (kWh/unit)',
        dataIndex: 'energy',
        key: 'energy',
        sorter: (a: any, b: any) => a.energy - b.energy,
        render: (value: number) => <div className="font-mono">{value}</div>,
    },
    {
        title: 'CO₂ (kg/unit)',
        dataIndex: 'co2',
        key: 'co2',
        sorter: (a: any, b: any) => a.co2 - b.co2,
        render: (value: number) => (
            <div className="flex items-center gap-2">
                <span className={`font-mono ${value > 200 ? 'text-red-600' : 'text-emerald-700'}`}>{value}</span>
                {value > 200 && <Tooltip title="High Emission Intensity"><InfoCircleOutlined className="text-red-400" /></Tooltip>}
            </div>
        ),
    },
    {
        title: 'Cost (€/unit)',
        dataIndex: 'cost',
        key: 'cost',
        sorter: (a: any, b: any) => a.cost - b.cost,
        render: (value: number) => <div className="font-mono">€{value}</div>,
    },
    {
        title: 'Efficiency',
        dataIndex: 'efficiency',
        key: 'efficiency',
        render: (value: number, record: any) => (
            <div className="w-32">
                <Progress percent={value} size="small" status={record.status === 'exception' ? 'exception' : (record.status === 'warning' ? 'normal' : 'success')} strokeColor={record.status === 'exception' ? '#ef4444' : (record.status === 'warning' ? '#f59e0b' : '#10b981')} />
            </div>
        ),
    },
];

export const ProcessHeatmap: React.FC = () => {
    return (
        <Card title="Plant Process Heatmap (Manesar Plant A)" className="shadow-sm h-full">
            <Table
                dataSource={processData}
                columns={columns}
                pagination={false}
                size="middle"
                rowClassName={(record) => record.co2 > 200 ? 'bg-red-50' : ''}
            />
            <div className="mt-4 flex gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1"><div className="w-3 h-3 bg-red-50 border border-red-200 rounded"></div> High Intensity (&gt;200kg)</div>
                <div className="flex items-center gap-1"><div className="w-3 h-3 bg-white border border-gray-200 rounded"></div> Normal Operations</div>
            </div>
        </Card>
    );
}
