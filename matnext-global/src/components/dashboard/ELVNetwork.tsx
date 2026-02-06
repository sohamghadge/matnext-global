import React, { useState } from 'react';
import { Card, Radio, Statistic, Row, Col } from 'antd';
import { EnvironmentOutlined, DollarOutlined, DropboxOutlined } from '@ant-design/icons';

const facilities = [
    { id: 1, name: "Noida Scrapper", type: "Dismantler", co2Avoided: 1500, margin: 120, recovery: 85, lat: 28.53, lng: 77.39 },
    { id: 2, name: "Pune Recycler", type: "Shredder", co2Avoided: 3200, margin: 450, recovery: 92, lat: 18.52, lng: 73.85 },
    { id: 3, name: "Chennai Hub", type: "Smelter", co2Avoided: 5000, margin: 800, recovery: 98, lat: 13.08, lng: 80.27 },
];

export const ELVNetwork: React.FC = () => {
    const [viewMode, setViewMode] = useState('co2');

    return (
        <Card
            title="Global ELV Network"
            extra={
                <Radio.Group value={viewMode} onChange={e => setViewMode(e.target.value)} size="small">
                    <Radio.Button value="co2">CO₂ Avoided</Radio.Button>
                    <Radio.Button value="margin">Net Margin</Radio.Button>
                    <Radio.Button value="rate">Recovery Rate</Radio.Button>
                </Radio.Group>
            }
            className="shadow-sm h-full"
        >
            <div className="h-64 bg-slate-100 rounded-lg flex items-center justify-center border border-dashed border-slate-300 mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="z-10 text-center">
                    <EnvironmentOutlined className="text-4xl text-slate-400 mb-2" />
                    <div className="text-sm text-slate-500">Geospatial ELV Facility Map</div>
                    <div className="text-xs text-slate-400 mt-1">Showing high-density scrappage zones</div>
                </div>
            </div>

            <Row gutter={[16, 16]}>
                <Col span={8}>
                    <Statistic title="Tonnes Processed" value={45200} prefix={<DropboxOutlined />} valueStyle={{ fontSize: '1.25rem' }} />
                </Col>
                <Col span={8}>
                    <Statistic title="Net Margin/Ton" value={340} prefix={<DollarOutlined />} precision={0} valueStyle={{ fontSize: '1.25rem', color: '#10b981' }} />
                </Col>
                <Col span={8}>
                    <Statistic title="Recovery Rate" value={92.4} suffix="%" valueStyle={{ fontSize: '1.25rem', color: '#3b82f6' }} />
                </Col>
            </Row>
        </Card>
    );
}
