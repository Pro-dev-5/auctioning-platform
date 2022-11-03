import { Button, Card, Col, Row } from 'antd'
import React from 'react'

function UserProfile() {

	return (
		<div className='block aboutBlock' style={{margin: "8rem 0", padding: "0 40px"}}>
      <div className='titleHolder' style={{ marginBottom: "4rem" }}>
        Welcome, username!
      </div>
      <div className='container-fluid'>
            <Row gutter={[40, 40]}>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{ width: '27em' }}
                  >
                    <div className="cardcontent">
                      <h4 style={{fontSize: "18px", color: "#333333"}}>Name :</h4>
                      <p style={{fontSize: "18px", color: "#333333"}}>Email address :</p>
                      {/* <p style={{fontSize: "12px", color: "#333333"}}>Password</p> */}
                      {/* <p style={{fontSize: "10px", color: "#333333"}}>Content</p> */}
                      
                      <Button href="#category" style={{ color: "#585860", fontWeight: "bold", cursor: "pointer", border: "solid 1px #f3c180", borderRadius: "0px", width: '250px' }}>Edit Details</Button>
                    </div>
                  </Card>
                </Col>
              </Row>
        </div>
      </div>
	)
}

export default UserProfile