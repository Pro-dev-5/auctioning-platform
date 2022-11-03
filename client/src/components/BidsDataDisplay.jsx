// import React from 'react'
// import { Card } from 'antd';

// function BidsDataDisplay() {
//     return (
//         <div className='block aboutBlock' style={{ marginTop: "80px", height: "65vh"}}>
//             <div className="site-card-border-less-wrapper container-fluid">
//                 <Card
//                 title="Card title"
//                 bordered={true}
//                 style={{
//                     width: 300,
//                 }}
//                 >
//                 <p>Card content</p>
//                 <p>Card content</p>
//                 <p>Card content</p>
//                 </Card>
//             </div>
//         </div>
//     )
// }

// export default BidsDataDisplay

import React from "react";
import { Card } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
// import "../styles/ArtPage.css";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

function BidsDataDisplay() {
<<<<<<< HEAD

    const navigate = useNavigate();
	const [product, setProduct] = useState([])
  const [formData, setFormData] = useState({
    productName: "",
    latestBidPrice: "",
    currentUser: "",
    category_id: "",
  });

  useEffect(()=>{
    fetch(`/api/categories`)
    .then(res=>res.json())
    .then(data => setProduct(data))

    .catch(err=>toast(err.message))
  }, [])

  function handleSubmit(e){
    e.preventDefault()
		try {
			fetch(`/api/products`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
					productName: formData.productName,
					latestBidPrice: formData.latestBidPrice,
					currentUser: formData.currentUser,
					category_id: formData.category_id,
				})
    })
    .then(r =>{
			if(r.ok){
				r.json().then(()=>{
					toast("Bid placed successiful")
					// navigate('/')
				})
			}
		})
		} catch (error) {
			console.log(error.message)
		}

    setFormData({
    productName: "",
    latestBidPrice: "",
    currentUser: "",
    category_id: "",
    
    })
	}
	
	function handleChange(e){
    setFormData({
        ...formData, [e.target.name]: e.target.value,
    });
	}  

=======
    const [art, setArt] = useState([]);

    useEffect(() => {
        fetch(`/api/products`)
        .then((res) => {
            if (res.ok) {
            res.json().then(setArt);
            } else {
            toast("Something went wrong with your request");
            }
        })
        .catch((err) => toast(err.message));
    }, []);
    return (
        <div className="block aboutBlock" style={{ margin: '80px 0' }}>
        <div className="container-fluid">
            <div className='titleHolder'>
            Art Collections
            </div>
            <div style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
            {(Array.isArray(art) ? art : [])
                .filter((item) => item.category_id === 1)
                .map((item) => {
                return <BidsCard item={item} key={item.id} />;
                })}
            <ToastContainer />
            </div>
        </div>
        </div>
    );
    }

    function BidsCard({ item }) {
    const navigate = useNavigate()
>>>>>>> 68ebff3b66e130155bc8d95e31f00546225f3c82
    return (
        <div style={{ marginBottom: '40px' }}>
        <div>
            <div>
            <Row gutter={[40, 40]}>
                <Col span={8}>
                <Card
<<<<<<< HEAD
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
=======
                    title="Card title"
                    bordered={true}
                    style={{
                        width: 300,
                    }}
                    >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
{/* //                 </Card> */}
                    <div className="cardcontent">
                    <h4 style={{fontSize: "20px", color: "#F3C180"}}>{item.name}</h4>
                    <p style={{fontSize: "15px", color: "#333333"}}>Start Price: {item.starting_price}</p>
                    <p style={{fontSize: "12px", color: "#333333"}}>Location: {item.location}</p>
                    <p style={{fontSize: "10px", color: "#333333"}}>Time: {item.time}</p>
                    
                    </div>
>>>>>>> 68ebff3b66e130155bc8d95e31f00546225f3c82
                </Card>
                </Col>
            </Row>
            </div>
        </div>
        </div>
    );
}
export default BidsDataDisplay;
