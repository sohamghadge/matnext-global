import React from 'react';
import { Card, Statistic, Row, Col, Progress } from 'antd';
import { RiseOutlined, FireOutlined, ThunderboltOutlined, CarOutlined } from '@ant-design/icons';

export const NewBusiness: React.FC = () => {
    return (
        <Card title="New Green Business Ventures" className="shadow-sm h-full">
            <Row gutter={[16, 16]}>
                <Col span={8}>
                    <Card type="inner" title="Biogas Services" size="small" className="bg-green-50/50">
                        <div className="flex justify-between items-center mb-2">
                            <FireOutlined className="text-2xl text-green-600" />
                            <Statistic value={12.5} prefix="€" suffix="M" valueStyle={{ fontSize: '1rem', fontWeight: 'bold' }} />
                        </div>
                        <div className="text-xs text-muted-foreground">Revenue Run-rate</div>
                        <Progress percent={78} strokeColor="#16a34a" size="small" showInfo={false} className="mt-2" />
                        <div className="text-xs text-green-700 mt-1">+15% QoQ Growth</div>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card type="inner" title="Stationary Storage" size="small" className="bg-blue-50/50">
                        <div className="flex justify-between items-center mb-2">
                            <ThunderboltOutlined className="text-2xl text-blue-600" />
                            <Statistic value={4.2} prefix="€" suffix="M" valueStyle={{ fontSize: '1rem', fontWeight: 'bold' }} />
                        </div>
                        <div className="text-xs text-muted-foreground">Revenue Run-rate</div>
                        <Progress percent={45} strokeColor="#2563eb" size="small" showInfo={false} className="mt-2" />
                        <div className="text-xs text-blue-700 mt-1">Pilot Phase</div>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card type="inner" title="Service Mobility" size="small" className="bg-orange-50/50">
                        <div className="flex justify-between items-center mb-2">
                            <CarOutlined className="text-2xl text-orange-600" />
                            <Statistic value={28.1} prefix="€" suffix="M" valueStyle={{ fontSize: '1rem', fontWeight: 'bold' }} />
                        </div>
                        <div className="text-xs text-muted-foreground">Revenue Run-rate</div>
                        <Progress percent={92} strokeColor="#ea580c" size="small" showInfo={false} className="mt-2" />
                        <div className="text-xs text-orange-700 mt-1">Scale-up</div>
                    </Card>
                </Col>
            </Row>

            <div className="mt-6">
                <div className="flex justify-between items-end mb-2">
                    <div className="text-sm font-medium">Total CO₂ Impact from New Ventures</div>
                    <div className="text-2xl font-bold text-emerald-600">-145,000 <span className="text-sm font-normal text-muted-foreground">tCO₂e/yr</span></div>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden flex">
                    <div className="bg-green-500 w-[45%]" title="Biogas"></div>
                    <div className="bg-blue-500 w-[25%]" title="Storage"></div>
                    <div className="bg-orange-500 w-[30%]" title="Mobility"></div>
                </div>
                <div className="flex gap-4 mt-2 text-xs text-muted-foreground justify-center">
                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-500"></div> Biogas 45%</div>
                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500"></div> Storage 25%</div>
                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-orange-500"></div> Mobility 30%</div>
                </div>
            </div>
        </Card>
    );
}
