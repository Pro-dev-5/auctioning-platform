import React from 'react'
import { Col, Row, Card } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

function Home() {
    return (
        <div>
            <div>
                <div style={{ position: 'relative' }}>
                    <h1 className="" style={{ paddingBottom: '20px' }}>Categories</h1>
                    {/* Underline */}
                    <div style={{ height: '4px', backgroundColor: '#ECC13B', width: '80px', position: 'absolute', top: '40px', left: '60px'}} />
                    
                    {/* Content */}
                    
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32, }}>
                        <Col className="gutter-row" span={8}>
                            <Card
                            hoverable
                                style={{ width: '90%' }}
                                cover={
                                <img
                                    alt="example"
                                    src="../../public/images/art.webp"
                                />
                                }
                                actions={[
                                <SettingOutlined key="setting" />,
                                <EditOutlined key="edit" />,
                                <EllipsisOutlined key="ellipsis" />,
                                ]}
                            >
                                <Meta
                                title="Arts Collection"
                                description="This is the description"
                                />
                            </Card>
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <Card
                            hoverable
                                style={{ width: '90%' }}
                                cover={
                                <img
                                    alt="example"
                                    src="../../public/images/jewel.webp"
                                />
                                }
                                actions={[
                                <SettingOutlined key="setting" />,
                                <EditOutlined key="edit" />,
                                <EllipsisOutlined key="ellipsis" />,
                                ]}
                            >
                                <Meta
                                title="Jewels Collection"
                                description="This is the description"
                                />
                            </Card>
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <Card
                            hoverable
                                style={{ width: '90%' }}
                                cover={
                                <img
                                    alt="example"
                                    src="../../public/images/ceramic.webp"
                                />
                                }
                                actions={[
                                <SettingOutlined key="setting" />,
                                <EditOutlined key="edit" />,
                                <EllipsisOutlined key="ellipsis" />,
                                ]}
                            >
                                <Meta
                                title="Ceramics Collection"
                                description="This is the description"
                                />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Home