import React from 'react';
import { Typography, Row, Col } from 'antd';
import { SupplierScorecard } from '@/components/dashboard/SupplierScorecard';
import { DPPCentral } from '@/components/dashboard/DPPCentral';
import { LogisticsDistribution } from '@/components/dashboard/LogisticsDistribution';

const { Title, Text } = Typography;

export const SupplyChain: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="mb-4">
                <Title level={2} className="!mb-0 !mt-0 text-foreground">Supply Chain & Traceability</Title>
                <Text className="text-muted-foreground">End-to-end visibility from mine to market</Text>
            </div>

            <Row gutter={[16, 16]}>
                <Col xs={24} lg={12}>
                    <DPPCentral />
                </Col>
                <Col xs={24} lg={12}>
                    <SupplierScorecard />
                </Col>
            </Row>

            <Row gutter={[16, 16]}>
                <Col xs={24}>
                    <LogisticsDistribution />
                </Col>
            </Row>
        </div>
    );
};
