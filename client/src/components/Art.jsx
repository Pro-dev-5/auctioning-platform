import React from "react";
import { Card } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "../styles/ArtPage.css";
import { Row, Col } from "antd";



function Art({ url }) {
  const [art, setArt] = useState([]);

  useEffect(() => {
    fetch(`${url}/products`)
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
  return (
    <div className="my-card">
      <div className="container-fluid">
        <Row gutter={[40, 40]}>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 350 }}
              cover={
                <img
                  alt=""
                  src={!item.image_1 ? "../../src/assets/artwork.jpeg" : item.image_1}
                />
              }
            >
              <div className="cardcontent">
                <h4>{item.name}</h4>
                <p>Location: {item.location}</p>
                <p>Start Price: {item.starting_price}</p>
                <p>Time: {item.time}</p>
                <button>Place Bid</button>
              </div>
            </Card>
          </Col>
          
        </Row>
      </div>
    </div>
  )
}
export default Art;
