import React from 'react';
import { Card, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom'

const { Meta } = Card;

function AppCategory({name, description, image, path, ind}) {
    const navigate = useNavigate()

    return (
        <div>
            <Row gutter={[48, 16]} justify="space-between" align='middle'>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} onClick={()=>navigate(path[ind])}>
                    <Card
                        style={{ width: '30vw' }}
                        hoverable
                        cover={<img alt="example" src={ image } />}
                    >
                        <Meta title={ name } description={ description } />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default AppCategory