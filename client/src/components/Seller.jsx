import React, { useState, useEffect } from "react";

function Seller({url}) {
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
  });

  function handleSubmit(e){
    e.preventDefault()
    fetch(`${url}/products`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(data => {
        console.log(data)
    })

    setFormData({
    image_1: "",
    image_2: "",
    image_3: "",
    name: "",
    location: "",
    time: "",
    date: "",
    starting_price: "",
    category_id: ""
    })
}

function handleChange(e){
    setFormData({
        ...formData, [e.target.name]: e.target.value,
    });
}  

  return (
    <>
      <div>Add New Product</div>

      <form>
        <label>Image 1:</label>
        <input
          type="text"
          name="image_1"
          value={formData.image_1}
          onChange={handleChange}
        />

        <label>Image 2:</label>
        <input
          type="text"
          name="image_2"
          value={formData.image_2}
          onChange={handleChange}
        />

        <label>Image 3:</label>
        <input
          type="text"
          name="image_3"
          value={formData.image_3}
          onChange={handleChange}
        />

        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />

        <label>Time:</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />

        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />

        <label>Starting Price:</label>
        <input
          type="number"
          name="starting_price"
          value={formData.starting_price}
          onChange={handleChange}
        />

        <input type="radio" id="art" name="category" value="art" />
        <label>Art</label>
        <br />

        <input type="radio" id="ceramics" name="category" value="ceramics" />
        <label>Ceramics</label>
        <br />

        <input type="radio" id="jewellery" name="category" value="jewellery" />
        <label>Jewellery</label>

        <button type='submit' onClick={handleSubmit}>Add Product</button>
      </form>
    </>
  );
}

export default Seller;
