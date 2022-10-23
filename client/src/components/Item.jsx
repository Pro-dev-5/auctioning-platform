import { Image, Button, Descriptions, PageHeader, Badge , Statistic, Tag, Tabs } from 'antd';
import React, { useState } from 'react';
import '../styles/Item.css'
const { TabPane } = Tabs;
const renderContent = (column = 2) => (
    <Descriptions size="small" column={column}>
        <Descriptions.Item label="Owner">Jane Doe</Descriptions.Item>
        <Descriptions.Item label="Association">
        <a>421421</a>
        </Descriptions.Item>
        <Descriptions.Item label="Start Time">2022-10-13</Descriptions.Item>
        <Descriptions.Item label="End Time">2022-10-14</Descriptions.Item>
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

                <div className=''>
                <Descriptions title="User Info" layout="vertical" bordered>
    <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
    <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
    <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
    <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>
    <Descriptions.Item label="Usage Time" span={2}>
      2019-04-24 18:00:00
    </Descriptions.Item>
    <Descriptions.Item label="Status" span={3}>
      <Badge status="processing" text="Running" />
    </Descriptions.Item>
    <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
    <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
    <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
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
      Region: East China 1<br />
    </Descriptions.Item>
  </Descriptions>
);
                </div>
                </div>
        </div>
    );
}

export default Item;