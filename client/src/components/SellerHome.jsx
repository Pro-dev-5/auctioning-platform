import { Card } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "../styles/SellerHome.css";
import { Row, Col } from "antd";
// import { useNavigate } from "react-router-dom";
import { Button, Modal } from "antd";
// import Update from "./Update";

function SellerHome({ seller }) {
  const [myProducts, setMyProducts] = useState([]);
  const [category, setCategory] = useState([])
  const [updateProduct, setUpdateProduct] = useState({
    image_1: "",
    image_2: "",
    image_3: "",
    name: "",
    location: "",
    time: "",
    date: "",
    starting_price: 0,
    category_id: 0
  })


  useEffect(() => {
    fetch(`/api/products`).then((res) => {
      if (res.ok) {
        res.json().then(setMyProducts);
      } else {
        toast("Something went wrong with your request");
      }
    });

    fetch(`/api/categories`)
    .then(res=>res.json())
    .then(data => setCategory(data))

    .catch(err=>toast(err.message))
  }, []);

  function handleDelete(deletedProductId) {
    console.log(deletedProductId);
    fetch(`/api/products/${deletedProductId}`, {
      method: "DELETE",
    });
    // .then((r) => r.json())
    // .then(() => console.log("deleted!"));
    const afterDelete = myProducts.filter((prod) => {
      return prod.id !== deletedProductId;
    });
    setMyProducts(afterDelete);
  }
  
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  function handleEdit(product){
    showModal()
    setUpdateProduct(product)
  }

  function handleUpdate(){
    console.log(updateProduct)
  }

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

  // console.log(myProducts);
  return (
    <div style={{ marginTop: "150px" }}>
      <div>
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
                          cover={<img alt="" src={product.image_1}  style={{height: '200px'}}/>}
                        >
                          <div className="cardcontent">
                            <h4>{product.name}</h4>
                            <p>Location: {product.location}</p>
                            <p>Start Price: {product.starting_price}</p>
                            <p>Time: {product.time}</p>
                            <div>
                              <>
                                <Button
                                  className="crud"
                                  onClick={() => handleEdit(product)}
                                  style={{
                                    color: "black",
                                    backgroundColor: "gold",
                                  }}
                                >
                                  Edit
                                </Button>
                                <Modal
                                  open={open}
                                  title="Update Product Details"
                                  onOk={handleOk}
                                  onCancel={handleCancel}
                                  footer={[
                                    <Button key="back" onClick={handleCancel}>
                                      Return
                                    </Button>,
                                  ]}
                                >
                                  <form
                                    className="seller-form"
                                    // onSubmit={handleSubmit}
                                  >
                                    <label>Which category?</label>
                                    <select
                                      // onChange={handleChange}
                                      name="category_id"
                                      value={updateProduct.category_id}
                                    >
                                      <option>Select--</option>
                                      {(Array.isArray(category)
                                        ? category
                                        : []
                                      ).map((cat) => {
                                        return (
                                          <option value={cat.id} key={cat.id}>
                                            {cat.name}
                                          </option>
                                        );
                                      })}
                                    </select>
                                    <label>Image 1</label>
                                    <input
                                      type="text"
                                      name="image_1"
                                      value={updateProduct.image_1}
                                      // onChange={handleChange}
                                    />

                                    <label>Image 2</label>
                                    <input
                                      type="text"
                                      name="image_2"
                                      value={updateProduct.image_2}
                                      // onChange={handleChange}
                                    />
                                    <br />

                                    <label>Image 3</label>
                                    <input
                                      type="text"
                                      name="image_3"
                                      value={updateProduct.image_3}
                                      // onChange={handleChange}
                                    />
                                    <br />

                                    <label>Name</label>
                                    <input
                                      type="text"
                                      name="name"
                                      value={updateProduct.name}
                                      // onChange={handleChange}
                                      required={true}
                                    />
                                    <br />

                                    <label>Location</label>
                                    <input
                                      type="text"
                                      name="location"
                                      value={updateProduct.location}
                                      // onChange={handleChange}
                                    />
                                    <br />

                                    <label>Time</label>
                                    <input
                                      type="time"
                                      name="time"
                                      value={updateProduct.time}
                                      // onChange={handleChange}
                                      required={true}
                                    />
                                    <br />

                                    <label>Date</label>
                                    <input
                                      type="datetime-local"
                                      name="datetime-local"
                                      value={updateProduct.date}
                                      // onChange={handleChange}
                                      // required={true}
                                    />
                                    <br />

                                    <label>Starting Price</label>
                                    <input
                                      type="number"
                                      name="starting_price"
                                      value={updateProduct.starting_price}
                                      // onChange={handleChange}
                                      required={true}
                                    />
                                    <br />

                                    <button>Update</button>
                                  </form>
                                </Modal>
                              </>
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
                  // return <ProductsCard product={product} key={product.id} />;
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
