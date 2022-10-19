import { Image, Button, Descriptions, PageHeader, Radio , Statistic, Tag, Tabs } from 'antd';
import React, { useState } from 'react';
import '../styles/Item.css'
const { TabPane } = Tabs;
const renderContent = (column = 2) => (
    <Descriptions size="small" column={column}>
        <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
        <Descriptions.Item label="Association">
        <a>421421</a>
        </Descriptions.Item>
        <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
        <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
        <Descriptions.Item label="Remarks">
        Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
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
        title="Status"
        value="Pending"
        style={{
            marginRight: 32,
        }}
        />
        <Statistic title="Price" prefix="$" value={568.08} />
    </div>
);
const Content = ({ children, extra }) => (
  <div className="content">
    <div className="main">{children}</div>
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
                        title="Title"
                        subTitle="This is a subtitle"
                        extra={[
                        <Button key="3">Operation</Button>,
                        <Button key="2">Operation</Button>,
                        <Button key="1" type="primary">
                            Primary
                        </Button>,
                        ]}
                        footer={
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="Details" key="1" />
                            <TabPane tab="Rule" key="2" />
                        </Tabs>
                        }
                    >
                        <Content extra={extraContent}>{renderContent()}</Content>
                    </PageHeader>
                </div>
                <div className='parent'>
                <div className='child'>
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

                <div>

                </div>
                    
                </div>

                <div className='child'>
                    <Descriptions
                        title="Responsive Descriptions"
                        bordered
                        column={{
                            xxl: 4,
                            xl: 3,
                            lg: 3,
                            md: 3,
                            sm: 2,
                            xs: 1,
                        }}
                        >
                        <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
                        <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
                        <Descriptions.Item label="time">18:00:00</Descriptions.Item>
                        <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
                        <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
                        <Descriptions.Item label="Official">$60.00</Descriptions.Item>
                        <Descriptions.Item label="Config Info">
                            Data disk type: MongoDB
                            <br />
                            Database version: 3.4
                            <br />
                            Package: dds.mongo.mid
                            <br />
                            Storage space: 10 GB
                            <br />
                            Replication factor: 3
                            <br />
                            Region: East China 1
                        </Descriptions.Item>
                    </Descriptions>
                </div>
                </div>
        </div>
    );
}

export default Item;