import React from 'react'
import { Col, Row } from 'antd'

function Home() {
    return (
        <div>
            <div>
                <div style={{ position: 'relative' }}>
                    <h1 className="" style={{ paddingBottom: '20px' }}>Categories</h1>
                    <div style={{ height: '4px', backgroundColor: '#ECC13B', width: '80px', position: 'absolute', top: '40px', left: '60px'}}></div>
                    <Row>
                        <Col span={8}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi corporis provident rem iure, commodi amet!</Col>
                        <Col span={8}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi distinctio dolorem accusamus quod tenetur consequuntur.</Col>
                        <Col span={8}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, sint? Distinctio doloremque architecto deleniti accusamus.</Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Home