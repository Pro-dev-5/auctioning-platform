import React from 'react'
import { Card } from 'antd';


function BidsDataDisplay() {
    
    return (
        <div className='block aboutBlock' style={{ marginTop: "80px", height: "65vh"}}>
            <div className="site-card-border-less-wrapper container-fluid">
                <Card
                title="Card title"
                bordered={true}
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