import React from 'react';
import { Typography, Row, Col } from 'antd';
import { LCAModel } from '@/components/dashboard/LCAModel';
import { PartCircularContent } from '@/components/dashboard/PartCircularContent';

const { Title, Text } = Typography;

export const Products: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="mb-4">
                <Title level={2} className="!mb-0 !mt-0 text-foreground">Product Lifecycle & Circularity</Title>
                <Text className="text-muted-foreground">Model-level analysis and part redesign opportunities</Text>
            </div>

            <Row gutter={[16, 16]}>
                <Col xs={24} lg={14}>
                    <LCAModel />
                </Col>
                <Col xs={24} lg={10}>
                    <PartCircularContent />
                </Col>
            </Row>
        </div>
    );
};
