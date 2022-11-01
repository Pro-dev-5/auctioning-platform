import React from "react";
import { Card } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "../styles/ArtPage.css";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

function Jewellery() {
  const [jewellery, setJewellery] = useState([]);

  useEffect(() => {
    fetch(`/api/products`)
      .then((res) => {
        if (res.ok) {
          res.json().then(setJewellery);
        } else {
          toast("Something went wrong with your request");
        }
      })
      .catch((err) => toast(err.message));
  }, []);
  return (
    <div style={{marginTop: "140px", padding: "0 40px"}}>
    <div className='titleHolder'>
       Jewellery Collections
    </div>
	  {/* <hr className="myhr"></hr> */}
      <div className="art-img" style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
        {(Array.isArray(jewellery) ? jewellery : [])
          .filter((item) => item.category_id === 1)
          .map((item) => {
            return <JewelleryCard item={item} key={item.id} />;
          })}
        <ToastContainer />
      </div>
    </div>
  );
}

function JewelleryCard({ item }) {
  const navigate = useNavigate()
  return (
    <div>
      <div className="my-card">
        <div className="container">
          <Row gutter={[40, 40]}>
            <Col span={8}>
              <Card
                hoverable
                style={{ width: 300 }}
                cover={
                  <img
                    alt=""
                    src={
                      !item.image_1
                        ? "/images/artwork.jpeg"
                        : item.image_1
                    }
                  />
                }
              >
                <div className="cardcontent">
                  <h4 style={{fontSize: "20px", color: "#F3C180"}}>{item.name}</h4>
                  <p style={{fontSize: "15px", color: "#333333"}}>Start Price: {item.starting_price}</p>
                  <p style={{fontSize: "12px", color: "#333333"}}>Location: {item.location}</p>
                  <p style={{fontSize: "10px", color: "#333333"}}>Time: {item.time}</p>
                  {/* <button onClick={()=>navigate(`/item/${item.id}`)}>Bid</button> */}
                  {/* <a href="#category"> */}
                  <button onClick={()=>navigate(`/item/${item.id}`)} style={{ color: "white", backgroundColor: "#F3C180", fontWeight: "semi-bold", cursor: "pointer", border: "none", borderRadius: "5px"}}>
                      BID
                  </button>
              {/* </a> */}
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
export default Jewellery;
