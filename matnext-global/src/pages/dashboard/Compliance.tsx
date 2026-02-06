import React from 'react';
import { Typography, Row, Col } from 'antd';
import { ComplianceMatrix } from '@/components/dashboard/ComplianceMatrix';

const { Title, Text } = Typography;

export const Compliance: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="mb-4">
                <Title level={2} className="!mb-0 !mt-0 text-foreground">Regulatory Compliance</Title>
                <Text className="text-muted-foreground">Global ESG regulations, risks, and audit status</Text>
            </div>

            <Row gutter={[16, 16]}>
                <Col xs={24}>
                    <ComplianceMatrix />
                </Col>
            </Row>
        </div>
    );
};
