import React from 'react'
import { Card } from 'antd';

function BidsDataDisplay() {
    return (
        <div style={{ marginTop: "80px" }}>
            <div className="site-card-border-less-wrapper">
                <Card
                title="Card title"
                bordered={false}
                style={{
                    width: 300,
                }}
                >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
                </Card>
            </div>
        </div>
    )
}

export default BidsDataDisplay