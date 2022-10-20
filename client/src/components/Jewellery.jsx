import React, { useState, useEffect } from "react";
import "../styles/Jewellery.css";
import { Row, Col } from "antd";
import { Card } from "antd";

const { Meta } = Card;

function Jewellery() {
const [products, setProducts] = useState([]);

useEffect(() => {
  fetch("/api/products")
    .then((r) => r.json())
    .then((data) => {
      console.log(data);
      setProducts(data);
    });
}, []);


  return (
    <div>
      <div>
        <h3 className="jewel">Jewellery</h3>
        <hr id="myhr"></hr>
      </div>
      <div>
      {products.map((product) => (
         <div className="block-feature">
         <div className="container-fluid">
           <Row gutter={[32, 40]}>
             <Col span={8}>
               <Card
                 hoverable
                 style={{ width: 240 }}
                 cover={
                   <img
                     alt="example"
                     src={product.image}
                   />
                 }
               >
                 <Meta
                   title="Europe Street beat"
                   description="www.instagram.com"
                 />
               </Card>
             </Col>
           </Row>
         </div>
       </div>
      ))}
     </div>
    </div>
  );
}

export default Jewellery;
