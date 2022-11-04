import React, { useState, useEffect } from 'react';
import '../styles/Item.css'
import { Row, Col, Button, Input } from 'antd'
import { json, useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'
import Timer from './Timer'
import Countdown from 'react-countdown';


function Item({ seller }) {
const[item, setItem] = useState({})
const {id}= useParams();
const [bid, setBid] = useState('')
const status = (Date.now() + 10800000) >= Date.parse(item?.date)
const [currentBid, setCurrentBid] = useState(null)


     function handleSubmit(e) {
       e.preventDefault()
       fetch(`/api/bids`,{
         method: "POST",
         headers: {
           "Content-Type": "application/json"
         },
         body: JSON.stringify({
           product_id: item.id,
           bid_placed: parseInt(bid),
           user_id: seller.id
         })
       })
       .then(res => {
		 		if(res.status === 401){
		 			res.json().then(mes=>toast(mes?.errors[0]))
		 			navigate('/login')
		 		}
		 		if(res.ok){
		 			res.json().then((data)=>{
		 				setItem({...item, [item.current_bid]: bid})
						setCurrentBid(data?.bid_placed)
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
    .then( data => {
      setItem(data)
			setCurrentBid(data?.current_bid)
    })
    
    },[])

		useEffect(()=>{
			(function(){
				if (item.sold_to === null) {
					if (status) {
						fetch('/api/sell',{
							method: "POST",
							headers: {"content-type": "application/json"},
							body: JSON.stringify({
								product_id: item?.id
							})
						})
						.then(res=>{
							if (res.ok) {
								res.json().then(stat=>toast(stat.Success))
							}else{
								res.json().then(err=>toast(err.errors[0] || err.message))
							}
						})
					}
				}
			}())
		}, [status])


    let date = item?.date
    let time = date?.slice(11, 16)
    let date1 = date?.slice(0, 10).split('-').reverse().join('-')

    let description1= item?.description
    let description2 = description1?.slice(0, 20)

		const switchTime = status ? "none" : "block"
		const switchOver = status ? "block" : "none"

    // console.log(Date.now(), '  ', Date.parse(item.date));
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
                    <div>Ksh. {currentBid}</div>
                  </div>
                  </div>
                  
                
                <div style={{ padding: '12px 0' }}>
                  <h3>Bidding Time Ends at: </h3>
                
                  <p style={{display: switchTime}}>Date: {date1}<br/>Time: {time} hrs</p>
									<p style={{display: switchOver}}>Bidding is over</p>
                  

                <div style={{ padding: '12px 0' }}>

                 <form onSubmit={handleSubmit} style={{display: switchTime}}>
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
                  {/* <Button type="" style={{ backgroundColor: '#c09753', color: '#fff' }}>View all bids</Button>  */}
                </div>
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