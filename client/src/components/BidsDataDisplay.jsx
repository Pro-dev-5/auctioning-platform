import React from "react";
import { Card } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

function BidsDataDisplay() {
    const [BidsDataDisplay, setBidsDataDisplay] = useState([]);

    useEffect(() => {
        fetch(`/api/products`)
        .then((res) => {
            if (res.ok) {
            res.json().then(setBidsDataDisplay);
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
            My Bids
            </div>
            <div style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
            {(Array.isArray(BidsDataDisplay) ? BidsDataDisplay : [])
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
    const [BidsCard, setBidsCard] = useState([]);
    return (
        <div style={{ marginBottom: '40px' }}>
        <div>
            <div>
            <Row gutter={[40, 40]}>
                <Col span={8}>
                <Card
                title={item.name}
                bordered={true}
                style={{
                    width: 300,
                }}

                

                
                >
                {/* <p>Product Name</p>
                <p>Latest Bid</p>
                <p>Current User</p>
                <p>Category</p> */}

                <div className="cardcontent">
                  <h4 style={{fontSize: "20px", color: "#F3C180"}}>Item Category</h4>
                  <p style={{fontSize: "15px", color: "#333333"}}>Latest Highest Bid</p>
                  <p style={{fontSize: "12px", color: "#333333"}}>Bid Placed</p>

                  {/* <option>Select--</option>
              {(Array.isArray(category) ? category : []).map((cat) => {
                return (
                  <option value={cat.id} key={cat.id}>
                    {cat.name}
                  </option>
                );
              })} */}

                  
                  
                  
                  {/* <Button onClick={()=>navigate(`/item/${item.id}`)} href="#category" style={{ color: "#585860", fontWeight: "bold", cursor: "pointer", border: "solid 1px #f3c180", borderRadius: "0px", width: '250px' }}>BID</Button> */}
                </div>
                </Card>
                </Col>
            </Row>
            </div>
        </div>
        </div>
    );
}
export default BidsDataDisplay;
