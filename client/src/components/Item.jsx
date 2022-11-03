import React, { useState, useEffect } from 'react';
import '../styles/Item.css'
import { Row, Col, Button, Input } from 'antd'
import { json, useNavigate, useParams } from 'react-router-dom';

import Timer from './Timer'


function Item({ seller }) {
const[item, setItem] = useState({})
const {id}= useParams();
const [bid, setBid] = useState('')
var date1 = new Date('9/11/2022');
console.log(Date.now())
     function handleSubmit(e) {
       e.preventDefault()
       fetch(`/api/bids`,{
         method: "POST",
         headers: {
           "Content-Type": "application/json"
         },
         body: JSON.stringify({
           product_id: item.id,
           bid_placed: bid,
           user_id: seller.id
         })
       })
       .then(res => {
		 		if(res.status === 401){
		 			res.json().then(mes=>toast(mes?.errors[0]))
		 			navigate('/login')
		 		}
		 		if(res.ok){
		 			res.json().then(()=>{
		 				setItem({...item, [item.current_bid]: bid})
		 				toast(`Bid placed successfully, and is now ${bid}`)
		 			})
		 		}
		 		if(res.status === 500){
		 			res.json().then(()=>toast("Field cannot be empty"))
		 		}
		 		if(res.status === 422){
		 			res.json().then((err)=>toast(err.errors[0]))
		 		}
		 	})
       document.querySelector("Input.Group").reset()
     }

    useEffect(() => {
    fetch(`/api/products/${id}`)
    .then(response => response.json())
    .then( data => setItem(data))
    

    },[])


  return (
    <div className='header1'>
    <div className="block aboutBlock" style={{ margin: 'px 15px' }}>
      <div className='container-fluid'>
        <div>
          <Row gutter={[24, 16]} align="middle" style={{ backgroundColor: '' }}>
            <Col span={12}>
              <div>
                <img src= {item.image_1} alt="" style={{ width: '600px' }}/>
              </div>
            </Col>
            <Col span={12} style={{ backgroundColor: '#fff', padding: '25px' }}>
              <div style={{ backgroundColor: '#f9f9f9', padding: '20px' }}>
                <h1 style={{ fontSize: '32px', fontFamily: 'Nunito' }}>{item.name}</h1>
                <div style={{ width: '300px', backgroundColor: '#', padding: '', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3>Time <strong>:</strong></h3>
                    <div>{item.time}  E.A.T</div>
                  </div>
                  <div style={{ border: 'solid 0.2px #6e7178' }}></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3>Initial Amount <strong>:</strong></h3>
                    <div>Ksh. {item.starting_price}</div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3>Current Highest Bid <strong>:</strong></h3>
                    <div>Ksh. {item.current_bid}</div>
                  </div>
                  
                </div>

                <div style={{ padding: '12px 0' }}>
                  <h3>Bidding Time Remaining </h3>
                  <p>Days:Hours:Minutes:Seconds</p>
                  <Timer date={Date.now() +500000000}/>
                </div>

                <div style={{ padding: '12px 0' }}>
               

                  

                 <form onSubmit={handleSubmit}>
                  <Input.Group compact>
                    <Input
                      style={{
                        width: 'calc(100% - 200px)',
                      }}
                      placeholder="Enter amount" 
                      value={bid} onChange={(e) => setBid(e.target.value)}
                    />
                    <Button  style={{ backgroundColor: '#f3c180', marginRight: '4px' }} onClick={handleSubmit}>Place Bid</Button>
                  </Input.Group>
                  </form> 

                  <br/>
                  <Button type="" style={{ backgroundColor: '#c09753', color: '#fff' }}>View all bids</Button> 
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <Row gutter={[24, 16]} align="middle" style={{ backgroundColor: '' }}>
            <Col span={12}>
              <div>
                <h2 className='titleHolder'>Descriptions</h2>
              </div>
              <div>
                <p>French carved wood and upholstered bergère chairs</p>
                <p>{item.description}</p>
              </div>
            </Col>
            <Col span={12} style={{ backgroundColor: '#fff', padding: '25px' }}>
            </Col>
          </Row>
        </div>
      </div>      
    </div>
    
    </div>
  )
}

export default Item