import React from 'react'
import { Row, Col, Button, Input } from 'antd'

function Item() {
  return (
    <div className="block aboutBlock" style={{ margin: '0px 15px' }}>
      <div className='container-fluid'>
        <div>
          <Row gutter={[24, 16]} align="middle" style={{ backgroundColor: '' }}>
            <Col span={12}>
              <div>
                <img src="../../public/images/chair.png" alt="" style={{ width: '600px' }}/>
              </div>
            </Col>
            <Col span={12} style={{ backgroundColor: '#fff', padding: '25px' }}>
              <div style={{ backgroundColor: '#f9f9f9', padding: '20px' }}>
                <h1 style={{ fontSize: '32px', fontFamily: 'Nunito' }}>French Louis XVI Style Arched-Back Bergères</h1>
                <div style={{ width: '300px', backgroundColor: '#', padding: '', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3>Time <strong>:</strong></h3>
                    <div>03:00 pm, E.A.T</div>
                  </div>
                  <div style={{ border: 'solid 0.2px #6e7178' }}></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3>Amount <strong>:</strong></h3>
                    <div>Ksh. 300.00</div>
                  </div>
                </div>
                <div style={{ padding: '12px 0' }}>
                  <Input.Group compact>
                    <Input
                      style={{
                        width: 'calc(100% - 200px)',
                      }}
                      defaultValue="Enter amount"
                    />
                    <Button type="" style={{ backgroundColor: '#f3c180', marginRight: '4px' }}>Place Bid</Button>
                    <Button type="" style={{ backgroundColor: '#c09753', color: '#fff' }}>View all</Button>
                  </Input.Group>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <Row gutter={[24, 16]} align="middle" style={{ backgroundColor: '' }}>
            <Col span={12}>
              <div>
                <h2 className='titleHolder'>Descriptions</h2>
              </div>
              <div>
                <p>French carved wood and upholstered bergère chairs</p>
                <ul>
                  <li>Sold as a set of 2.</li>
                  <li>Tall barrel backs with arched top-rails that flow down onto arms fitted with upholstered manchette rests and terminate into curled knuckles</li>
                  <li>Skirt lined with straight molding and flower head accents carved at each front corner.</li>
                  <li>Fluted conical legs taper towards their peg-style feet.</li>
                  <li>Upholstered in khaki and white striped fabric. </li>
                </ul>
              </div>
            </Col>
            <Col span={12} style={{ backgroundColor: '#fff', padding: '25px' }}>
            </Col>
          </Row>
        </div>
      </div>      
    </div>
  )
}

export default Item