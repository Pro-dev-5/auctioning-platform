import { Image, Button, Descriptions, PageHeader, Card , Statistic} from 'antd';
import React, { useState } from 'react';
import '../styles/Item.css'
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useParams } from 'react-router-dom';


const gridStyle = {
    width: '100%',
    textAlign: 'center',
    
  };

function Item({url}) {
    const [visible, setVisible] = useState(false);
    const[item, setItem] = useState({})
    const {id}= useParams();

    useEffect(() => {
    fetch(`${url}/products/${id}`)
    .then(response => response.json())
    .then( data => setItem(data))
    

    },[])
        
    console.log(item)

    const renderContent = (column = 2) => (
        <Descriptions size="small" column={column}>
            <Descriptions.Item label="Owner">{item.name}</Descriptions.Item>
            <Descriptions.Item label="Association">
            <a>{item.category_id}</a>
            </Descriptions.Item>
            <Descriptions.Item label="Start Time">{item.date}</Descriptions.Item>
            <Descriptions.Item label="End Time">{item.date}</Descriptions.Item>
            <Descriptions.Item label="Location">
            {item.location}
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
            <Statistic title="Price" prefix="Ksh." value={item.starting_price} />
        </div>
    );
    const Content = ({ items, extra }) => (
      <div className="content">
        <div className="main">{items}</div>
        <div className="extra">{extra}</div>
      </div>
    );
    

    return (
        <div>
                <div className='header1'>
                    <PageHeader
                        className="site-page-header-responsive"
                        onBack={() => window.history.back()}
                        title={item.name}
                        subTitle={item.category_id}
                        
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
                <Card  title={item.name} >
                    <Card.Grid style={gridStyle}>Category: {item.category_id}</Card.Grid>
                    <Card.Grid style={gridStyle}>Starting Price: 
                    {item.starting_price}
                    </Card.Grid>
                    <Card.Grid style={gridStyle}>Location: {item.location}</Card.Grid>
                    <Card.Grid style={gridStyle}>Start date: {item.date}</Card.Grid>
 
                </Card>

                </div>
                </div>
        </div>
    );
}

export default Item;