import { Image, Form, Button,  InputNumber , Tooltip, PageHeader, Card , Statistic} from 'antd';
import React, { useState, useEffect } from 'react';
import '../styles/Item.css'
import { toast, ToastContainer } from "react-toastify";
import { json, useNavigate, useParams } from 'react-router-dom';
import 'antd/dist/antd.css';




function Item({ seller }) {
    const [visible, setVisible] = useState(false);
    const[item, setItem] = useState({})
    const {id}= useParams();
    const [bid, setBid] = useState('')
		const navigate = useNavigate()

    var date = new Date();
    var currentDate = date.getTime();
    // function filteredDates(){
    //   parseInt(
    //     (new Date(`${item.date}`.split("-").join("/")).getTime() -
    //       currentDate) /
    //       (1000 * 60 * 60 * 24)
    //   ) > 0
    // }


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
      document.querySelector("form").reset()
    }

    useEffect(() => {
    fetch(`/api/products/${id}`)
    .then(response => response.json())
    .then( data => setItem(data))
    

    },[])
        
    // console.log(item)

   
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
            <Statistic title="Starting Price" prefix="Ksh." value={item.bid_placed} style={{
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
                            src={item.image_1}
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
                        <Image src={item.image_1} />
                        <Image src={item.image_2} />
                        <Image src={item.image_3} />
                        </Image.PreviewGroup>
                        </div>
                        <p>Click picture to view</p>

                    <div>

                </div>
                    
                </div>

                <div className='child2'>
                        {/* <form onSubmit={handleSubmit}>
                          <input  value={bid} onChange={(e) => setBid(e.target.value)} />
                          <button>Submit</button>
                        </form> */}
                         {/* <div >
                          <Form  onSubmit={handleSubmit}>
                          <Form.Item
                            label="Place your bid"
                            rules={[
                              {
                                type: 'integer',
                                // min: 0,
                                // max: 200,
                                message: 'Please input a valid bid.',
                              },
                              {
                                type: 'integer',
                                // min: 5,
                                // max: 200,
                                message: 'Bid needs to be above the current bid.',
                              },
                            ]}
                          >
                            <InputNumber value={bid} onChange={(e) => setBid(e.target.value)}/>
                          </Form.Item>
                                      <Form.Item>
                                        <Button htmlType="submit">Submit</Button>
                                      </Form.Item>
                          </Form>
                        </div> */}
                </div>
               
                </div>

                
                <div className='timer'>
                <Card
                  title="Bidding Time Remaining"
                  style={{
                    width: 300,
                  }}
                >
                   <p style={{color: "#d1410a"}}>{event.time_diff < 0 ?
                              (<p>Event has passed</p>)
                              : (
                                event.time_diff + " days remaining"
                              )
                              }
                            </p>
                </Card>
               
                        </div>
                
        </div>
    );
}

export default Item;