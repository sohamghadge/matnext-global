import React from 'react';
import { Typography, Row, Col } from 'antd';
import { RDProjects } from '@/components/dashboard/RDProjects';
import { NewBusiness } from '@/components/dashboard/NewBusiness';

const { Title, Text } = Typography;

export const RAndD: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="mb-4">
                <Title level={2} className="!mb-0 !mt-0 text-foreground">R&D & New Business</Title>
                <Text className="text-muted-foreground">Innovation pipeline and green business growth</Text>
            </div>

            <Row gutter={[16, 16]}>
                <Col xs={24} lg={14}>
                    <RDProjects />
                </Col>
                <Col xs={24} lg={10}>
                    <NewBusiness />
                </Col>
            </Row>
        </div>
    );
};
