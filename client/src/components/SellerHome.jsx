import { Card } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "../styles/SellerHome.css";
import { Row, Col } from "antd";
// import { useNavigate } from "react-router-dom";
import { Button, Modal } from 'antd';
import Update from "./Update";

function SellerHome({ seller }) {
  const [myProducts, setMyProducts] = useState([]);
  
  useEffect(() => {
    fetch(`/api/products`).then((res) => {
      if (res.ok) {
        res.json().then(setMyProducts);
      } else {
        toast("Something went wrong with your request");
      }
    });
    

    
  }, []);

  return (
    <div className="start" style={{marginTop: "200px"}}>
      <div >
        <h1>My Products</h1>
      </div>
      <hr className="myhr"></hr>
      <div className="art-img">
        {(Array.isArray(myProducts) ? myProducts : [])
          .filter((item) => item.user_id === seller?.id)
          .map((item) => {
            return <ProductsCard product={item} key={item.id} />;
          })}
        <ToastContainer />
      </div>
    </div>
  );
}

function ProductsCard({ product }) {


  function handleDelete() {
    fetch(`/api/products/${product.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => console.log("deleted!"));
  }


  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="my-card">
      <div className="container-fluid">
        <Row gutter={[40, 40]}>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 300 }}
              cover={<img alt="" src={product.image_1} />}
            >
              <div className="cardcontent">
                <h4>{product.name}</h4>
                <p>Location: {product.location}</p>
                <p>Start Price: {product.starting_price}</p>
                <p>Time: {product.time}</p>
                <div>
                  <>
                    <Button className= 'crud'  onClick={showModal} style={{color: "black", backgroundColor: "gold"}}>
                      Update
                    </Button>
                    <Modal
                      open={open}
                      title="Update Product Details"
                      onOk={handleOk}
                      onCancel={handleCancel}
                      footer={[
                        <Button key="back" onClick={handleCancel}>
                          Return
                        </Button>
                       
                      ]}
                    >
                      
                      <div>
						  <Update/>
					  </div>
                    </Modal>
                  </>
                  <button className="crud" onClick={handleDelete}>
                    Delete
                  </button>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default SellerHome;
