import React from 'react'
import { Col, Row } from 'antd'
import { DownOutlined } from '@ant-design/icons';

function About() {
    return (
        <div id='about' className='block aboutBlock'>
            <div className='container-fluid'>
                <div className='titleHolder'>
                    About Us
                </div>
                <div className='contentHolder'>
                    <Row gutter={[32, 32]} align="middle" justify='space-between' wrap="true">
                        <Col span={12}>
                            <div>
                                <img src="../../public/images/aboutus.svg" alt="about" style={{ width: '70%' }}/>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div style={{ width:'90%' }}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit ex asperiores omnis in, soluta laboriosam unde nam alias veniam.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit ex asperiores omnis in, soluta laboriosam unde nam alias veniam.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit ex asperiores omnis in, soluta laboriosam unde nam alias veniam.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default About