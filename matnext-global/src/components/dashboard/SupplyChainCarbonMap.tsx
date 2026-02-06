import React from 'react';
import { Card, Badge, List, Avatar, Button } from 'antd';
import { EnvironmentOutlined, WarningOutlined } from '@ant-design/icons';

const suppliers = [
    { name: 'Jindal Steel', location: 'Hisar, India', co2: 'High', material: 'Steel' },
    { name: 'Posco', location: 'Pohang, Korea', co2: 'Medium', material: 'Steel' },
    { name: 'Vedanta', location: 'Jharsuguda, India', co2: 'High', material: 'Aluminium' },
    { name: 'Denso', location: 'Kariya, Japan', co2: 'Low', material: 'Components' },
];

export const SupplyChainCarbonMap: React.FC = () => {
    return (
        <Card title="Supply Chain Carbon Mapping" className="shadow-sm h-full" extra={<Button size="small">Switch Scenarios</Button>}>
            <div className="h-48 bg-emerald-50 rounded-lg flex items-center justify-center border border-dashed border-emerald-200 mb-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-400 via-gray-100 to-gray-100"></div>
                <div className="z-10 text-center">
                    <EnvironmentOutlined className="text-3xl text-emerald-600 mb-2" />
                    <div className="text-xs text-muted-foreground">Interactive Map Visualization</div>
                </div>
            </div>

            <List
                itemLayout="horizontal"
                dataSource={suppliers}
                size="small"
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar icon={<EnvironmentOutlined />} className={item.co2 === 'High' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'} />}
                            title={<span className="text-sm font-medium">{item.name}</span>}
                            description={<span className="text-xs text-muted-foreground">{item.location} • {item.material}</span>}
                        />
                        {item.co2 === 'High' && <Badge status="error" text="High Risk" />}
                    </List.Item>
                )}
            />
        </Card>
    );
}
