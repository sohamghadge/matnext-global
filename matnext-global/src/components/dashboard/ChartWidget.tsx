import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { Maximize2 } from 'lucide-react';

interface ChartWidgetProps {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    headerAction?: React.ReactNode;
    height?: number | string;
}

export const ChartWidget: React.FC<ChartWidgetProps> = ({
    title,
    subtitle,
    children,
    className = '',
    headerAction,
    height = 300
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <div className={`bg-card rounded-xl p-5 shadow-card border border-border flex flex-col ${className}`}>
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">{title}</h3>
                        {subtitle && <div className="text-sm text-muted-foreground mt-1">{subtitle}</div>}
                    </div>
                    <div className="flex items-center gap-2">
                        {headerAction}
                        <Button
                            type="text"
                            size="small"
                            icon={<Maximize2 className="w-4 h-4" />}
                            onClick={() => setIsExpanded(true)}
                            className="text-muted-foreground hover:text-primary"
                            title="Expand View"
                        />
                    </div>
                </div>
                {/* Container for the chart content */}
                <div style={{ height: typeof height === 'number' ? `${height}px` : height }}>
                    {children}
                </div>
            </div>

            <Modal
                title={<span className="text-xl font-bold">{title}</span>}
                open={isExpanded}
                onCancel={() => setIsExpanded(false)}
                footer={null}
                width="90vw"
                centered
                className="chart-expand-modal"
                styles={{ body: { height: '80vh', padding: '24px' } }}
            >
                <div className="h-full w-full">
                    {children}
                </div>
            </Modal>
        </>
    );
};
