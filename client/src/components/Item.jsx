import { Image, Button, Descriptions, PageHeader, Card , Statistic, Tag, Tabs } from 'antd';
import React, { useState } from 'react';
import '../styles/Item.css'
const { TabPane } = Tabs;
const renderContent = (column = 2) => (
    <Descriptions size="small" column={column}>
        <Descriptions.Item label="Owner">Jane Doe</Descriptions.Item>
        <Descriptions.Item label="Association">
        <a>Item ID</a>
        </Descriptions.Item>
        <Descriptions.Item label="Start Time">2022-10-13</Descriptions.Item>
        <Descriptions.Item label="End Time">2022-10-14</Descriptions.Item>
        <Descriptions.Item label="Remarks">
        In excellent condition
        </Descriptions.Item>
    </Descriptions>
);
const extraContent = (
    <div
        style={{
        display: 'flex',
        width: 'max-content',
        justifyContent: 'flex-end',
        }}
    >
        <Statistic
        title="Bidding"
        value="Ongoing"
        style={{
            marginRight: 32,
        }}
        />
        <Statistic title="Price" prefix="Ksh." value={5000} />
    </div>
);
const Content = ({ items, extra }) => (
  <div className="content">
    <div className="main">{items}</div>
    <div className="extra">{extra}</div>
  </div>
);

function Item() {
    const [visible, setVisible] = useState(false);
    

    return (
        <div>
                <div className='header1'>
                    <PageHeader
                        className="site-page-header-responsive"
                        onBack={() => window.history.back()}
                        title="Item name"
                        subTitle="Item category"
                        extra={[
                        <Button key="3" type="primary">Place Bid</Button>,
                        <Button key="1" type="danger">
                            Remove bid
                        </Button>,
                        ]}
                    >
                        <Content extra={extraContent}>{renderContent()}</Content>
                    </PageHeader>
                </div>
                <div className='parent'>
                    <div className='child1'>
                        <Image
                            preview={{
                            visible: false,
                            }}
                            width={200}
                            src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                            onClick={() => setVisible(true)}
                        />
                        <div
                            style={{
                            display: 'none',
                            }}
                        >
                        <Image.PreviewGroup
                        preview={{
                            visible,
                            onVisibleChange: (vis) => setVisible(vis),
                        }}
                        >
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
                        </Image.PreviewGroup>
                        </div>
                        <p>Click picture to view</p>

                    <div>

                </div>
                    
                </div>

                <div className='child2'>
                        <Card
                            title="Item name"
                            
                            style={{
                                width: 300,
                            }}
                            >
                            <p>Item description</p>
                        </Card>

                </div>
                </div>
        </div>
    );
}

export default Item;