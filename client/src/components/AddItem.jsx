import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "../styles/AddItem.css";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

function AddItem({ seller }) {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
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

  useEffect(() => {
    fetch(`/api/categories`)
      .then((res) => res.json())
      .then((data) => setCategory(data))

      .catch((err) => toast(err.message));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    try {
      fetch(`/api/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image_1: formData.image_1,
          image_2: formData.image_2,
          image_3: formData.image_3,
          name: formData.name,
          location: formData.location,
          time: formData.time,
          date: formData.date,
          description: formData.description,
          starting_price: formData.starting_price,
          category_id: formData.category_id,
          user_id: seller?.id,
        }),
      }).then((r) => {
        if (r.ok) {
          r.json().then(() => {
            toast("Product added successfully 😊");
            navigate("/sellerhome");
          });
        }
      });
    } catch (error) {
      console.log(error.message);
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
      category_id: 0,
      description: "",
    });
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
     <div style={{ marginLeft: '50px', marginTop: '100px'}}>
            <h2>Add New Product</h2>
          </div>
          <hr></hr>
      <div className="mother" style={{ display: "flex" }}>
        <div>
          <img
            src="../public/images/undraw_add_post_re_174w.svg"
            style={{ marginTop: "160px" }}
          />
        </div>
        <div>
         
          <div className="seller-form-all">
            <ToastContainer />

            <form
              onSubmit={handleSubmit}
              style={{ marginLeft: "200px", textAlign: "right" }}
            >
              <label>Select category: </label>

              <select
                onChange={handleChange}
                name="category_id"
                value={formData.category_id}
                style={{ width: "70%" }}
              >
                <option>Select--</option>
                {(Array.isArray(category) ? category : []).map((cat) => {
                  return (
                    <option value={cat.id} key={cat.id}>
                      {cat.name}
                    </option>
                  );
                })}
              </select>
              <br />

              <label>Image 1: </label>
              <input
                type="text"
                name="image_1"
                value={formData.image_1}
                onChange={handleChange}
                style={{ width: "70%", marginTop: "20px" }}
              />
              <br />

              <label>Image 2: </label>
              <input
                type="text"
                name="image_2"
                value={formData.image_2}
                onChange={handleChange}
                style={{ width: "70%", marginTop: "20px" }}
              />
              <br />

              <label>Image 3: </label>
              <input
                type="text"
                name="image_3"
                value={formData.image_3}
                onChange={handleChange}
                style={{ width: "70%", marginTop: "20px" }}
              />
              <br />

              <label>Name: </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required={true}
                style={{ width: "70%", marginTop: "20px" }}
              />
              <br />

              <label>Location: </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                style={{ width: "70%", marginTop: "20px" }}
              />
              <br />

              <label>Bid Start Date: </label>
              <input
                type="datetime-local"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required={true}
                style={{ width: "70%", marginTop: "20px" }}
              />
              <br />

              <label>Bid End Date: </label>
              <input
                type="datetime-local"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required={true}
                style={{ width: "70%", marginTop: "20px" }}
              />

              <br />
              <label>Starting Price: </label>
              <input
                type="number"
                name="starting_price"
                value={formData.starting_price}
                onChange={handleChange}
                required={true}
                style={{ width: "70%", marginTop: "20px" }}
              />
              <br />

              <label>Description: </label>
              <textarea
                rows="4"
                cols="50"
                name="description"
                form="usrform"
                onChange={handleChange}
                style={{ width: "70%", marginTop: "20px" }}
                value={formData.description}
              >
                Enter text here...
              </textarea>
              <br />
              <Button
                type="submit"
                htmlType="submit"
                onClick={handleSubmit}
                style={{ backgroundColor: "#c09753", marginRight: "100px" }}
              >
                Submit
              </Button>
              <Button
                // type="submit"
                // htmlType="submit"
                // onClick={handleSubmit}
                style={{ backgroundColor: "#c09753", marginRight: "50px" }}
                onClick={() => navigate("/sellerhome")}
              >
                Back
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddItem;

{
  /* <form className="seller-form" onSubmit={handleSubmit}>
				<label>Select category?</label>
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
          type="datetime-local"
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
        
      </form> */
}
