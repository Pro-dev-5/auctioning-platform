import React from 'react'
import { Col, Row } from 'antd'

function AppTeam() {
    return (
        <div id='team' className='block aboutBlock' style={{ position: 'relative' }}>
            <div className="container-fluid">
                <div className="titleHolder">
                    Meet our team
                </div>
                <Row gutter={[32, 32]} align="middle" justify='space-between' wrap="true">
                    <div style={{ position: 'absolute', top: '-20px', right: '4%', opacity: '.1' }}>
                        <img src="../../public/images/team.png" alt="" />
                    </div>
                    <Col span={12}>
                        <div style={{ width: '90%', color: '#65676d', fontFamily: 'Nunito' }}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quia ullam fugiat, impedit cumque sit, nulla alias sed ipsam repellendus quisquam illum eos laudantium odit praesentium delectus? Minus, repellat odio.</p>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div>
                            <img src="../../public/images/team.svg" alt="" style={{ width: '70%' }}/>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default AppTeam