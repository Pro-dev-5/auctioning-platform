import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
// import "../styles/Seller.css";

function Seller({ seller }) {
  const [formData, setFormData] = useState({
    image_1: "",
    image_2: "",
    image_3: "",
    name: "",
    location: "",
    time: "",
    date: "",
    starting_price: 0,
    category_id: 0,
    seller_id: seller.id
  });
  const [category, setCategory] = useState([])

  useEffect(()=>{
    fetch(`/api/categories`)
    .then(res=>res.json().then(setCategory))
    .catch(err=>toast(err.message))
  }, [])

  function handleSubmit(e){
    e.preventDefault()
    console.log(formData);
    // fetch(`/api/products`,{
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(formData)
    // })
    // .then(r => r.json())
    // .then(data => {
    //     console.log(data)
    // })

    setFormData({
    image_1: "",
    image_2: "",
    image_3: "",
    name: "",
    location: "",
    time: "",
    date: "",
    starting_price: "",
    category_id: 0
    })
}

function handleChange(e){
    setFormData({
        ...formData, [e.target.name]: e.target.value,
    });
}  

  return (
    <>
    <div className="all">
      <div className="input-header">Add New Product</div>

      <form>
        <label>Image 1:</label>
        <input
          type="text"
          name="image_1"
          value={formData.image_1}
          onChange={handleChange}
        />
        <br/>

        <label>Image 2:</label>
        <input
          type="text"
          name="image_2"
          value={formData.image_2}
          onChange={handleChange}
        />
        <br/>

        <label>Image 3:</label>
        <input
          type="text"
          name="image_3"
          value={formData.image_3}
          onChange={handleChange}
        />
        <br/>

        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br/>

        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
        <br/>

        <label>Time:</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
        <br/>

        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <br/>

        <label>Starting Price:</label>
        <input
          type="number"
          name="starting_price"
          value={formData.starting_price}
          onChange={handleChange}
        />
        <br/>

        <select>
          <option value={formData.category_id}>Select--</option>
          {
            (Array.isArray(category) ? category : []).map(cat=>{
              return (
                <option value={cat.id}>{cat.name}</option>
              )
            })
          }
        </select>
        <br/>

        <button className='buttonny' type='submit' onClick={handleSubmit}>Add Product</button>
        <ToastContainer/>
      </form>
      </div>
    </>
  );
}

export default Seller;
