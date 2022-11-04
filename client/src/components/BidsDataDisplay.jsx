import React, { useEffect, useState } from 'react'
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

function BidsDataDisplay({ seller }) {

    const navigate = useNavigate();
	const [pers, setPers] = useState('')
	const [data, setData] = useState({})
  // const [formData, setFormData] = useState({
  //   productName: "",
  //   latestBidPrice: "",
  //   currentUser: "",
  //   category_id: "",
  // });

  useEffect(()=>{
    fetch(`/api/showbuyer`)
    .then(res=>{
			if(res.ok){
				res.json().then(console.log)
			}
			
		})

    .catch(err=>toast(err.message))
  }, [])

	useEffect(()=>{
		// fetch(`/api/`)
	}, [])

  // function handleSubmit(e){
  //   e.preventDefault()
	// 	try {
	// 		fetch(`/api/products`,{
  //       method: "POST",
  //       headers: {
  //           "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({
	// 				productName: formData.productName,
	// 				latestBidPrice: formData.latestBidPrice,
	// 				currentUser: formData.currentUser,
	// 				category_id: formData.category_id,
	// 			})
  //   })
  //   .then(r =>{
	// 		if(r.ok){
	// 			r.json().then(()=>{
	// 				toast("Bid placed successiful")
	// 				// navigate('/')
	// 			})
	// 		}
	// 	})
	// 	} catch (error) {
	// 		console.log(error.message)
	// 	}

  //   setFormData({
  //   productName: "",
  //   latestBidPrice: "",
  //   currentUser: "",
  //   category_id: "",

  //   })
	// }

	// function handleChange(e){
  //   setFormData({
  //       ...formData, [e.target.name]: e.target.value,
  //   });
	// }  

    return (
        <div className='block aboutBlock' style={{ marginTop: "80px", height: "65vh"}}>
            <div className="site-card-border-less-wrapper container-fluid">
                <ToastContainer/>
								<Card
                title="Card title"
                bordered={true}
                style={{
                    width: 300,
                }}
                >
                <p>Product Name</p>
                <p>Latest bid</p>
                <p>Current User</p>
                <p>Category</p>
                </Card>
            </div>
        </div>
    )
}
export default BidsDataDisplay