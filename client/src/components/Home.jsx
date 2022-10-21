import React from 'react'
import { Col, Row, Card, Divider } from 'antd'
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

                    {/* About us */}
                    <div style={{ paddingTop: '80px' }}>
                        <Divider orientation="left" className='divider' style={{ marginBottom: '80px' }}>What we do</Divider>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                                <div flex={3} style={{ marginRight: '60px' }}>
                                    <img src="../../public/images/aboutus.svg" alt="" style={{ width: '500px' }} />
                                </div>
                                <div flex={3} className="about-text">
                                    <img src="../../public/images/ceramic.jpg" alt="" style={{ width: '300px', position: 'absolute', bottom: '10px', right: '200px', zIndex: '-1', opacity: '.1' }}/>
                                    <Meta 
                                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, reprehenderit esse dolorum consectetur autem similique ex fuga repellat quos vitae a tempore? Quisquam ab dolore pariatur, excepturi ratione aut ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, reprehenderit esse dolorum consectetur autem similique ex fuga repellat quos vitae a tempore? Quisquam ab dolore pariatur, excepturi ratione aut ipsum."
                                    />

                                    <Meta style={{ marginBottom: '30px', marginTop: '20px' }}
                                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, reprehenderit esse dolorum consectetur autem similique ex fuga repellat quos vitae a tempore? Quisquam ab dolore pariatur, excepturi ratione aut ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, reprehenderit esse dolorum consectetur autem similique ex fuga repellat quos vitae a tempore? Quisquam ab dolore pariatur, excepturi ratione aut ipsum."
                                    />
                                    {/* <Meta className='about-text' style={{ zIndex: '1' }}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, reprehenderit esse dolorum consectetur autem similique ex fuga repellat quos vitae a tempore? Quisquam ab dolore pariatur, excepturi ratione aut ipsum.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, reprehenderit esse dolorum consectetur autem similique ex fuga repellat quos vitae a tempore? Quisquam ab dolore pariatur, excepturi ratione aut ipsum.</p>
                                    </Meta> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home