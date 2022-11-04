import { Card } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "../styles/SellerHome.css";
import { Row, Col } from "antd";
import { useNavigate, useParams } from "react-router-dom";

function SellerHome() {
  const [myProducts, setMyProducts] = useState({});
  const navigate = useNavigate();
	const {id} = useParams()

  useEffect(() => {
		fetch('/api/auth')
		.then(res=>{
			if(res.status === 401 || res.status === 404){
				navigate('/')
				res.json().then(err=> toast(err.errors[0]))
			}
		})

			fetch(`/api/users/${id}`)
				.then((res) => {
					if (res.ok) {
						res.json().then(setMyProducts);
					} else {
						res.json().then(err=> toast((err.errors[0] || err.message)))
					}
				})
				.catch((error) => console.log(error));
    
  }, []);

  function handleDelete(deletedProductId) {
    console.log(deletedProductId);
    fetch(`/api/products/${deletedProductId}`, {
      method: "DELETE",
    })
		.then(res=>{
			if(res.ok){
				toast("Product has been deleted successfully")
			}else{
				res.json().then(err=> toast(err.errors[0]))
			}
		})
    const afterDelete = myProducts.filter((prod) => {
      return prod.id !== deletedProductId;
    });
    setMyProducts(afterDelete);
  }

	function closeBid(id){
		fetch('/api/sell',{
			method: "POST", headers:{"content-type": "application/json"}, 
			body: JSON.stringify({
				product_id: id
			})
		})
		.then(res=>{
			if(res.ok){
				res.json().then(stat=> toast(stat.Success))
			}else{
				res.json().then(err=> toast(err.errors[0]))
			}
		})
		.catch(err=> toast(err.message))
	}

  return (
    <>
      <div style={{ float: "right", marginTop: "100px" }}>
        <div>
          <button
            style={{ color: "#f3c180", marginRight: '20px', backgroundColor: "#fff", fontWeight: 800 }}
            onClick={() => navigate("/add-item")}
          >
            Add New Products
          </button>
        </div>
        {/* <div>
          <img src="../public/images/add.svg" style={{ height: "150px" }} />
        </div> */}
      </div>
      <hr></hr>
      <div style={{ marginTop: "150px", marginBottom: "50px" }}>
        <div className="art-img">
          <div className="my-card">
            <div className="container-fluid">
              <Row gutter={[40, 40]}>
                {(Array.isArray(myProducts.products) ? myProducts.products : []).map((product) => {
									console.log(product);
                    return (
                      <div key={product.id}>
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
															<p>Date: {product.date.slice(0, 10).split('-').reverse().join('-')}</p>
                              <p>Time: {product.date.slice(11, 16)}</p>
                              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                {/* <a
                                  className="crud"
                                  href={`/update/${product.id}`}
                                >
                                  Edit Product Details
                                </a> */}
			    											<button onClick={()=>closeBid(product.id)} style={{color: "#f3c180", backgroundColor: "#fff", fontWeight: 800}}>
			    											Close bid
			    											</button><br/>
                                <button
                                  className="crud"
                                  onClick={() => handleDelete(product.id)}
																	style={{color: "#f3c180", backgroundColor: "#fff", fontWeight: 800}}
                                >
																	Delete
                                </button>
																<ToastContainer/>
                              </div>
                            </div>
                          </Card>
                        </Col>
                      </div>
                    );
                  })}
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
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
