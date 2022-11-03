import { Button, Card, Col, Row } from 'antd'
import React from 'react'

function UserProfile() {
	return (
		<div style={{marginTop: '7em'}}>
			 <Row gutter={[40, 40]}>
            <Col span={8}>
              <Card
                hoverable
                style={{ width: '27em' }}
                cover={
                  <img
                    alt=""
                    src={"/images/artwork.jpeg"}
                    style={{height: '200px'}}
                  />
                }
              >
                <div className="cardcontent">
                  <h4 style={{fontSize: "20px", color: "#F3C180"}}>Content</h4>
                  <p style={{fontSize: "15px", color: "#333333"}}>Content</p>
                  <p style={{fontSize: "12px", color: "#333333"}}>Content</p>
                  <p style={{fontSize: "10px", color: "#333333"}}>Content</p>
                  
                  <Button href="#category" style={{ color: "#585860", fontWeight: "bold", cursor: "pointer", border: "solid 1px #f3c180", borderRadius: "0px", width: '250px' }}>BID</Button>
                </div>
              </Card>
            </Col>
          </Row>
		</div>
	)
}

export default UserProfile