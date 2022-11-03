import React, { Component, useEffect } from 'react'
import Countdown from 'react-countdown';
import { Row, Col, Button, Input } from 'antd'



//render(<Timer date={Date.now() + 2000}/>, document.getElementById('root'));
class Timer extends Component{
 


  constructor() {
    super();
    this.state = {
      showForm: true,
      // bid:""
    };
  }

  handleComplete = () => {
    this.setState({showForm: false});
  }

  // onChange= e =>
  // {
  //   console.log(e.target.value)
  //   this.setState({bid: e.target.value})
  // }

  // onSubmit= e =>{
  //   e.preventDefault();
  //   console.log("Bid has been submitted")
  //   console.log(this.state)
  //   this.setState({bid:""});
  //   fetch(`/api/bids`,{
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       product_id: item.id,
  //       bid_placed: bid,
  //       user_id: seller.id
  //     })
  //   },this.state)
  //   .then(res => {
  //     if(res.status === 401){
  //       res.json().then(mes=>toast(mes?.errors[0]))
  //       navigate('/login')
  //     }
  //     if(res.ok){
  //       res.json().then(()=>{
  //         setItem({...item, [item.current_bid]: bid})
  //         toast(`Bid placed successfully, and is now ${bid}`)
  //       })
  //     }
  //     if(res.status === 500){
  //       res.json().then(()=>toast("Field cannot be empty"))
  //     }
  //     if(res.status === 422){
  //       res.json().then((err)=>toast(err.errors[0]))
  //     }
  //   })
    
  // }
  



  render() {
    // const{bid}=this.state;

    return (
      <>
        <Countdown  date={this.props.date}>
          <p>Bidding Over !</p>
        </Countdown>
        {/* {this.state.showForm && (
          <div>

          <form >
          <Input.Group compact>
            <Input
              style={{
                width: 'calc(100% - 200px)',
              }}
              placeholder="Enter amount" 
              value={bid} onChange={this.onChange}
            />
            <Button style={{ backgroundColor: '#f3c180', marginRight: '4px' }} onClick={this.onSubmit}>Place Bid</Button>
          </Input.Group>
          </form>
          </div>
        )} */}
      </>
    );
  }
  
}

export default Timer