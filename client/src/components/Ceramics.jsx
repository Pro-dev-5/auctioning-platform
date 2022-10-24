import React from "react";
import { Card } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "../styles/ArtPage.css";
import { Row, Col } from "antd";

function Ceramics({ url }) {
  const [ceramics, setCeramics] = useState([]);
  useEffect(() => {
    fetch(`${url}/products`).then((res) => {
      console.log(res);
      if (res.ok) {
        res.json().then(setCeramics);
      } else {
        toast("Something went wrong with your request");
      }
    });
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
  return (
    <>
      <hr className="myhr"></hr>
      <div className="my-card">
        <div className="container-fluid">
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
                  <button>Place Bid</button>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
export default Ceramics;
