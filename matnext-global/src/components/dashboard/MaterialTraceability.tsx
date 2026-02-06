import React from 'react';
import { Card, Table, Tag } from 'antd';

const materialData = [
    { key: '1', material: 'Steel (Body)', grade: 'HSS-590', supplier: 'Tata Steel', co2: 2.1, recycled: 15, impact: 'High' },
    { key: '2', material: 'Aluminium (Cast)', grade: 'AL-Si-Mg', supplier: 'Hindalco', co2: 4.8, recycled: 65, impact: 'Medium' },
    { key: '3', material: 'Plastic (Bumper)', grade: 'PP-EPDM', supplier: 'Borealis', co2: 1.9, recycled: 20, impact: 'Low' },
    { key: '4', material: 'Copper (Wiring)', grade: 'Cu-ETP', supplier: 'Local Vendor', co2: 3.5, recycled: 40, impact: 'Medium' },
];

const columns = [
    { title: 'Material', dataIndex: 'material', key: 'material', render: (text: string) => <span className="font-medium">{text}</span> },
    { title: 'Supplier', dataIndex: 'supplier', key: 'supplier' },
    { title: 'CO₂ Intensity (t/t)', dataIndex: 'co2', key: 'co2', render: (val: number) => <span className="font-mono">{val}</span> },
    {
        title: 'Recycled %',
        dataIndex: 'recycled',
        key: 'recycled',
        render: (val: number) => (
            <Tag color={val > 50 ? 'green' : (val > 20 ? 'orange' : 'red')}>{val}%</Tag>
        )
    },
];

export const MaterialTraceability: React.FC = () => {
    return (
        <Card title="Material Traceability & Impact" extra={<a href="#">View Global Map</a>} className="shadow-sm h-full">
            <Table dataSource={materialData} columns={columns} pagination={false} size="small" />
        </Card>
    );
}
