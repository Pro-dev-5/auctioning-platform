import React from 'react'
import { Col, Row } from 'antd'
import { DownOutlined } from '@ant-design/icons';

function About() {
    return (
        <div id='about' className='block aboutBlock'>
            <div className='container-fluid' style={{ }}>
                <div className='titleHolder'>
                    About Us
                </div>
                <div className='contentHolder'>
                    <Row gutter={[32, 32]} align="middle" justify='space-between' wrap="true">
                        <Col span={12}>
                            <div>
                                <img src="/images/aboutus.svg" alt="about" style={{ width: '70%' }}/>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div style={{ width:'90%' }}>
                                <p>There is this notion that to grow a business,one needs to be ruthless. But we know that there's a better way to grow. One where what's good for the seller is also good for the customers.</p>
                                <p>We believe businesses can grow with a conscience, and succeed with a soul. Also buyers can bid for items without any worry and get the best products.</p>
                                <p>That's why we've created an ecosystem where both buyers and sellers can use the system efficiently to help businesses grow and sellers to find quality products.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default About