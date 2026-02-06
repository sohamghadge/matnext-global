import React from 'react';
import { Typography, Row, Col } from 'antd';
import { ELVNetwork } from '@/components/dashboard/ELVNetwork';
import { MaterialRecovery } from '@/components/dashboard/MaterialRecovery';
import { BatteryLifecycle } from '@/components/dashboard/BatteryLifecycle';

const { Title, Text } = Typography;

export const Circularity: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="mb-4">
                <Title level={2} className="!mb-0 !mt-0 text-foreground">Circular Economy & ELV</Title>
                <Text className="text-muted-foreground">Closing the loop: From end-of-life back to production</Text>
            </div>

            <Row gutter={[16, 16]}>
                <Col xs={24} lg={14}>
                    <ELVNetwork />
                </Col>
                <Col xs={24} lg={10}>
                    <BatteryLifecycle />
                </Col>
            </Row>

            <Row gutter={[16, 16]}>
                <Col xs={24}>
                    <MaterialRecovery />
                </Col>
            </Row>
        </div>
    );
};
