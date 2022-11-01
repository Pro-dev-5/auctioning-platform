import React from "react";
import { Card } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "../styles/Ceramics.css";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";



function Ceramics() {
  const [ceramics, setCeramics] = useState([]);
  
  // <button onClick={() => navigate('jewellery')}>View Products</button>

  useEffect(() => {
    fetch(`/api/products`)
      .then((res) => {
        if (res.ok) {
          res.json().then(setCeramics);
        } else {
          toast("Something went wrong with your request");
        }
      })
      .catch((err) => toast(err.message));
  }, []);
  return (
    <>
      <div>
        <h1>Ceramics</h1>
      </div>
	  <hr className="myhr"></hr>
      <div className="art-img">
        {(Array.isArray(ceramics) ? ceramics : [])
          .filter((item) => item.category_id === 2)
          .map((item) => {
            return <CeramicsCard item={item} key={item.id} />;
          })}
        <ToastContainer />
      </div>
    </>
  );
}

function CeramicsCard({ item }) {
  const navigate = useNavigate()
  return (
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
                      ? "../../src/assets/artwork.jpeg"
                      : item.image_1
                  }
                /> 
              }
            >
              <div className="cardcontent">
                <h4>{item.name}</h4>
                <p>Location: {item.location}</p>
                <p>Start Price: {item.starting_price}</p>
                <p>Time: {item.time}</p>
                <button onClick={()=>navigate(`/item/${item.id}`)}>Bid</button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default Ceramics;
