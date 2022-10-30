import React from "react";
import { Card } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "../styles/ArtPage.css";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

function Art() {
  const [art, setArt] = useState([]);
  // const navigate = useNavigate()
  // <button onClick={() => navigate('jewellery')}>View Products</button>

  useEffect(() => {
    fetch('http://127.0.0.1:3000/api/products')
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
    <>
      <div>
        <h1>Art</h1>
      </div>
	  <hr className="myhr"></hr>
      <div className="art-img">
        {(Array.isArray(art) ? art : [])
          .filter((item) => item.category_id === 1)
          .map((item) => {
            return <ArtCard item={item} key={item.id} />;
          })}
        <ToastContainer />
      </div>
    </>
  );
}

function ArtCard({ item }) {
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
export default Art;
