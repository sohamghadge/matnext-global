import React, { useState } from 'react';
import { Card, Steps, Divider, Tag, Typography, Button, Row, Col } from 'antd';
import { ShareAltOutlined, QrcodeOutlined, FileProtectOutlined, HistoryOutlined } from '@ant-design/icons';


const { Text, Title, Paragraph } = Typography;

const dppSteps = [
    { title: 'Mining', description: 'Lithium (Chile)', status: 'finish' },
    { title: 'Refining', description: 'Jiangxi (China)', status: 'finish' },
    { title: 'Cell Mfg', description: 'CATL (China)', status: 'finish' },
    { title: 'Module Assy', description: 'Suzuki (India)', status: 'process' },
    { title: 'Vehicle Assy', description: 'Manesar (India)', status: 'wait' },
    { title: 'Use Phase', description: 'Customer', status: 'wait' },
    { title: 'Recycling', description: 'Redivivus', status: 'wait' },
];

export const DPPCentral: React.FC = () => {
    const [compareMode, setCompareMode] = useState(false);

    return (
        <Card
            title={
                <div className="flex items-center gap-2">
                    <QrcodeOutlined className="text-primary" />
                    <span>DPP Central - Battery Pack #BAT-2026-X99</span>
                    <Tag color="green" className="ml-2">Verified</Tag>
                </div>
            }
            extra={
                <div className="space-x-2">
                    <Button icon={<HistoryOutlined />} size="small">Provenance</Button>
                    <Button icon={<FileProtectOutlined />} size="small" type="primary" onClick={() => setCompareMode(!compareMode)}>
                        {compareMode ? 'Exit Compare' : 'Compare Model'}
                    </Button>
                </div>
            }
            className="shadow-sm h-full"
        >
            <div className="mb-6 bg-slate-50 p-4 rounded-lg border border-slate-100">
                <Row gutter={24}>
                    <Col span={6}>
                        <div className="text-xs text-muted-foreground uppercase">Total Lifecycle CO₂</div>
                        <div className="text-2xl font-bold text-slate-800">4.2 tCO₂e</div>
                    </Col>
                    <Col span={6}>
                        <div className="text-xs text-muted-foreground uppercase">Recycled Content</div>
                        <div className="text-2xl font-bold text-emerald-600">18%</div>
                    </Col>
                    <Col span={6}>
                        <div className="text-xs text-muted-foreground uppercase">EU ESG Score</div>
                        <div className="text-2xl font-bold text-blue-600">B+</div>
                    </Col>
                    <Col span={6}>
                        <div className="text-xs text-muted-foreground uppercase">Data Completeness</div>
                        <Progress percent={92} size="small" status="active" />
                    </Col>
                </Row>
            </div>

            <Steps
                current={3}
                size="small"
                className="site-navigation-steps"
                items={dppSteps.map(item => ({ title: item.title, description: item.description }))}
            />

            {compareMode && (
                <div className="mt-8 border-t border-dashed border-border pt-4 animate-fade-in">
                    <Title level={5} className="text-muted-foreground mb-4">Comparison: Battery Pack #BAT-2025-GEN1</Title>
                    <Row gutter={24} className="opacity-75">
                        <Col span={6}>
                            <div className="text-xs text-muted-foreground uppercase">Total Lifecycle CO₂</div>
                            <div className="text-xl font-bold text-slate-800">5.1 tCO₂e <span className="text-red-400 text-xs">(+21%)</span></div>
                        </Col>
                        <Col span={6}>
                            <div className="text-xs text-muted-foreground uppercase">Recycled Content</div>
                            <div className="text-xl font-bold text-emerald-600">5% <span className="text-red-400 text-xs">(-13%)</span></div>
                        </Col>
                    </Row>
                </div>
            )}
        </Card>
    );
};

// Simple progress bar replacement since Progress wasn't imported
const Progress = ({ percent }: { percent: number; size?: string; status?: string }) => (
    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: `${percent}%` }}></div>
    </div>
);
