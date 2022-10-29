import { Image, Button, Input, Tooltip, PageHeader, Card , Statistic} from 'antd';
import React, { useState, useEffect } from 'react';
import '../styles/Item.css'
import { toast, ToastContainer } from "react-toastify";
import { json, useParams } from 'react-router-dom';


const formatNumber = (value) => new Intl.NumberFormat().format(value);
const NumericInput = (props) => {
  const { value, onChange } = props;
  const handleChange = (e) => {
    const { value: inputValue} = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
      onChange(inputValue);
    }
  };

  // '.' at the end or only '-' in the input box.
  const handleBlur = () => {
    let valueTemp = value;
    if (value.charAt(value.length - 1) === '.' || value === '-') {
      valueTemp = value.slice(0, -1);
    }
    onChange(valueTemp.replace(/0*(\d+)/, '$1'));
  };
  const title = value ? (
    <span className="numeric-input-title">{value !== '-' ? formatNumber(Number(value)) : '-'}</span>
  ) : (
    'Bid must be higher than current bid'
  );
  return (
    <Tooltip trigger={['focus']} title={title} placement="topLeft" overlayClassName="numeric-input">
      <Input
        {...props}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Input bid"
        maxLength={16}
      />
    </Tooltip>
  );
};


const gridStyle = {
    width: '100%',
    textAlign: 'center',
    
  };

function Item() {
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState('');
    const [value1, setValue1] = useState('');
    const[item, setItem] = useState({})
    const {id}= useParams();
    const [bid, setBid] = useState('')

    function handleSubmit(e) {
      e.preventDefault()
      fetch(`/api/bids`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          // buyer_id: buyer.id,
          product_id: item.id,
          starting_price: item.starting.price,
          current_bid: bid
        })
      })
      .then(res => res.json())
      .then(data => {console.log(data)
        setBid('')
      })
      .catch(err => err.message)
      document.querySelector("form").reset()
    }

    useEffect(() => {
    fetch(`/api/products/${id}`)
    .then(response => response.json())
    .then( data => setItem(data))
    

    },[])
        
    console.log(item)

   
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
                marginRight: 20,
            }}
            />
            <Statistic title="Starting Price" prefix="Ksh." value={item.starting_price} style={{
                marginRight: 20,
            }}/>
            <Statistic title="Current Highest Bid" prefix="Ksh." value={item.current_bid} style={{
                marginRight: 20,
            }}/>

            <Statistic title="Bidding Start Time"  value={item.time} style={{
                marginRight: 20,
            }}/>
             <Statistic title="Bidding End Time"  value={item.time} style={{
                marginRight: 20,
            }}/>
             <Statistic title="Timer"  value="" style={{
                marginRight: 20,
            }}/>
        </div>
    );
    const Content = ({ items, extra }) => (
      <div className="content">
        <div className="main">{items}</div>
        <div className="extra"><form >{extra}</form></div>
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
                            <NumericInput style={{ width: 120, }} />,

                        <Button key="3" >Place Bid</Button>,
                        
                       
                        ]}
                    >
                        <Content extra={extraContent}></Content>
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
                    <Card.Grid style={gridStyle}>Current bid price offered: {item.current_bid}</Card.Grid>
                    <Card.Grid style={gridStyle}>Location: {item.location}</Card.Grid>
                    <Card.Grid style={gridStyle}>Start date: {item.date}</Card.Grid>
 
                </Card>
                        <form onSubmit={handleSubmit}>
                          <input  value={bid} onChange={(e) => setBid(e.target.value)} />
                          <button>Submit</button>
                        </form>
                </div>
                </div>
                
        </div>
    );
}

export default Item;