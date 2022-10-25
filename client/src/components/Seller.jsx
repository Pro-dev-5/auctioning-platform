import React, { useState, useEffect } from "react";

function NewProduct() {
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
  

 function handleChange(e){
     setFormData({
         ...formData,
         [e.target.id]: e.target.value
     });
 }

  return (
    <>
      <div>Add New Product</div>
      <form>
        <label htmlFor="image_1">Image 1:</label>
        <input
          type="url"
          id="image_1"
          value={formData.image_1}
          onChange={handleChange}
        />
        <label htmlFor="image_2">Image 2:</label>
        <input
          type="url"
          id="image_2"
          value={formData.image_2}
          onChange={handleChange}
        />
        <label htmlFor="image_3">Image 3:</label>
        <input
          type="url"
          id="image_3"
          value={formData.image_3}
          onChange={handleChange}
        />
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={formData.location}
          onChange={handleChange}
        />
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          value={formData.time}
          onChange={handleChange}
        />
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={formData.date}
          onChange={handleChange}
        />
        <label htmlFor="starting_price">Starting Price:</label>
        <input
          type="number"
          id="starting_price"
          value={formData.starting_price}
          onChange={handleChange}
        />
        <button type="submit">Add Product</button>
      </form>
    </>
  );
}

export default NewProduct;
