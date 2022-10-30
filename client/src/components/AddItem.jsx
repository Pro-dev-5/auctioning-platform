import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "../styles/AddItem.css";
import { useNavigate } from "react-router-dom";

function Seller({ seller }) {
	const navigate = useNavigate()
	const [category, setCategory] = useState([])
  const [formData, setFormData] = useState({
    image_1: "",
    image_2: "",
    image_3: "",
    name: "",
    location: "",
    time: "",
    date: "",
    starting_price: 0,
    category_id: 0
  });

  useEffect(()=>{
    fetch(`/api/categories`)
    .then(res=>res.json())
    .then(data => setCategory(data))

    .catch(err=>toast(err.message))
  }, [])

  function handleSubmit(e){
    e.preventDefault()
		try {
			fetch(`/api/products`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
					image_1: formData.image_1,
					image_2: formData.image_2,
					image_3: formData.image_3,
					name: formData.name,
					location: formData.location,
					time: formData.time,
					date: formData.date,
					starting_price: formData.starting_price,
					category_id: formData.category_id,
					user_id: seller?.id
				})
    })
    .then(r =>{
			if(r.ok){
				r.json().then(()=>{
					toast("Product added successfully 😊")
					// navigate('/')
				})
			}
		})
		} catch (error) {
			console.log(error.message)
		}

    setFormData({
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
	}
	
	function handleChange(e){
    setFormData({
        ...formData, [e.target.name]: e.target.value,
    });
	}  

  return (
    <>
    <div className="seller-form-all">
      <div><h2>Add New Product</h2></div>
			<ToastContainer/>
      <form className="seller-form" onSubmit={handleSubmit}>
				<label>Which category?</label>
				<select onChange={handleChange} name='category_id' value={formData.category_id}>
          <option >Select--</option>
          {
            (Array.isArray(category) ? category : []).map(cat=>{
              return (
                <option value={cat.id} key={cat.id}>{cat.name}</option>
              )
            })
          }
        </select>
        <label>Image 1</label>
        <input
          type="text"
          name="image_1"
          value={formData.image_1}
          onChange={handleChange}
        />

        <label>Image 2</label>
        <input
          type="text"
          name="image_2"
          value={formData.image_2}
          onChange={handleChange}
        />
        <br/>

        <label>Image 3</label>
        <input
          type="text"
          name="image_3"
          value={formData.image_3}
          onChange={handleChange}
        />
        <br/>

        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
					required={true}
        />
        <br/>

        <label>Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
        <br/>

        <label>Time</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
					required={true}
        />
        <br/>

        <label>Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
					required={true}
        />
        <br/>

        <label>Starting Price</label>
        <input
          type="number"
          name="starting_price"
          value={formData.starting_price}
          onChange={handleChange}
					required={true}
        />
        <br/>

        <input type='submit' />
        
      </form>
			
      </div>
			
    </>
  );
}

export default Seller;
