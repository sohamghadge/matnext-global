import React from 'react';
import { Card, Table, Tag, Button } from 'antd';
import { SwapOutlined } from '@ant-design/icons';

const partsData = [
    { key: '1', part: 'Door Panel (Inner)', material: 'Steel', co2: 12.5, recycled: 15, cost: 45, status: 'redesign' },
    { key: '2', part: 'Hood', material: 'Aluminium', co2: 8.2, recycled: 45, cost: 78, status: 'good' },
    { key: '3', part: 'Bumper Front', material: 'Polypropylene', co2: 4.1, recycled: 20, cost: 32, status: 'warning' },
    { key: '4', part: 'Suspension Arm', material: 'Forged Steel', co2: 15.8, recycled: 10, cost: 55, status: 'redesign' },
];

const columns = [
    { title: 'Part Name', dataIndex: 'part', key: 'part', render: (text: string) => <span className="font-semibold">{text}</span> },
    { title: 'Material', dataIndex: 'material', key: 'material' },
    { title: 'CO₂ Impact', dataIndex: 'co2', key: 'co2', sorter: (a: any, b: any) => a.co2 - b.co2 },
    {
        title: 'Recycled %',
        dataIndex: 'recycled',
        key: 'recycled',
        render: (val: number) => <Tag color={val > 40 ? 'green' : 'orange'}>{val}%</Tag>
    },
    {
        title: 'Action',
        key: 'action',
        render: (_: any, record: any) => (
            record.status === 'redesign'
                ? <Button size="small" type="primary" danger icon={<SwapOutlined />}>Redesign</Button>
                : <Button size="small" disabled>Optimized</Button>
        )
    }
];

export const PartCircularContent: React.FC = () => {
    return (
        <Card title="Part-Level Circular Impact Analysis" className="shadow-sm h-full" extra={<Button>Simulate Material Switch</Button>}>
            <Table
                dataSource={partsData}
                columns={columns}
                pagination={false}
                size="middle"
                rowClassName={(record) => record.status === 'redesign' ? 'bg-red-50' : ''}
            />
            <div className="mt-4 flex gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1"><div className="w-3 h-3 bg-red-50 border border-red-200 rounded"></div> High CO₂ / Low Recyclability Target</div>
            </div>
        </Card>
    );
}
