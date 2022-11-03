import { Card } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "../styles/SellerHome.css";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";


function SellerHome({ seller }) {
  const [myProducts, setMyProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/products`)
      .then((res) => {
        if (res.ok) {
          res.json().then(setMyProducts);
        } else {
          toast("Something went wrong with your request");
        }
      })
      .catch((error) => console.log(error));
  }, []);

  function handleDelete(deletedProductId) {
    console.log(deletedProductId);
    fetch(`/api/products/${deletedProductId}`, {
      method: "DELETE",
    });
    const afterDelete = myProducts.filter((prod) => {
      return prod.id !== deletedProductId;
    });
    setMyProducts(afterDelete);
  }

  return (
    <div style={{ marginTop: "150px" }}>
      <div>
        <button onClick={()=>navigate('/add-item')}>Add New Products</button>
        <h1>My Products</h1>
      </div>

      <div className="art-img">
        <div className="my-card">
          <div className="container-fluid">
            <Row gutter={[40, 40]}>
              {(Array.isArray(myProducts) ? myProducts : [])
                .filter((product) => product.user_id === seller?.id)
                .map((product) => {
                  return (
                    <>
                      <Col span={8}>
                        <Card
                          hoverable
                          style={{ width: 300 }}
                          cover={
                            <img
                              alt=""
                              src={product.image_1}
                              style={{ height: "200px" }}
                            />
                          }
                        >
                          <div className="cardcontent">
                            <h4>{product.name}</h4>
                            <p>Location: {product.location}</p>
                            <p>Start Price: {product.starting_price}</p>
                            <p>Time: {product.time}</p>
                            <p>Description: {product.description}</p>
                            <div>
                              <button
                                className="crud"
                                onClick={() => navigate("/update")}
                              >
                                Edit Product Details
                              </button>
                              <button
                                className="crud"
                                onClick={() => handleDelete(product.id)}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </Card>
                      </Col>
                    </>
                  );
                })}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

// function ProductsCard({ product }) {

//   function handleDelete() {
//     console.log(product.id)
//     fetch(`/api/products/${product.id}`, {
//       method: "DELETE",
//     })
//       // .then((r) => r.json())
//       // .then(() => console.log("deleted!"));
//       const afterDelete = myProducts.filter((prod)=>{
//         return(prod.id !== product.id)
//       })
//       setMyProducts(afterDelete)
//   }

//   const [loading, setLoading] = useState(false);
//   const [open, setOpen] = useState(false);

//   const showModal = () => {
//     setOpen(true);
//   };

//   const handleOk = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       setOpen(false);
//     }, 3000);
//   };

//   const handleCancel = () => {
//     setOpen(false);
//   };

//   return (
//     <div className="my-card">
//       <div className="container-fluid">
//         <Row gutter={[40, 40]}>
//           <Col span={8}>
//             <Card
//               hoverable
//               style={{ width: 300 }}
//               cover={<img alt="" src={product.image_1} />}
//             >
//               <div className="cardcontent">
//                 <h4>{product.name}</h4>
//                 <p>Location: {product.location}</p>
//                 <p>Start Price: {product.starting_price}</p>
//                 <p>Time: {product.time}</p>
//                 <div>
//                   <>
//                     <Button
//                       className="crud"
//                       onClick={showModal}
//                       style={{ color: "black", backgroundColor: "gold" }}
//                     >
//                       Update
//                     </Button>
//                     <Modal
//                       open={open}
//                       title="Update Product Details"
//                       onOk={handleOk}
//                       onCancel={handleCancel}
//                       footer={[
//                         <Button key="back" onClick={handleCancel}>
//                           Return
//                         </Button>,
//                       ]}
//                     >
//                       <div>{/* <Update/> */}</div>
//                     </Modal>
//                   </>
//                   <button className="crud" onClick={handleDelete}>
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </Card>
//           </Col>
//         </Row>
//       </div>
//     </div>
//   );
// }
export default SellerHome;
