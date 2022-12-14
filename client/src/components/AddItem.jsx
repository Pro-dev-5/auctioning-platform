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
		fetch('/api/auth')
		.then(res=>{
			if(res.status === 401 || res.status === 404){
				navigate('/')
				res.json().then(err=> toast(err.errors[0]))
			}
		})

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
            navigate(`/sellerhome/${seller.id}`);
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
     <div style={{ marginTop: '10em'}}>
            <h2>Add New Product</h2>
          </div>
          <hr></hr>
         
          <div className="seller-form-all container">
            

            <form
              onSubmit={handleSubmit}
							style={{ display: "flex", flexDirection: 'column', alignItems: 'center', backgroundColor: '#f5f5f5'}}
							className='rounded py-3 mb-3'
            >
              <label>Select category: </label>
							
              <select
                onChange={handleChange}
                name="category_id"
                value={formData.category_id}
				className="form-control seller-form"
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
								className="seller-form form-control"
              />
              <br />

              <label>Image 2: </label>
              <input
                type="text"
                name="image_2"
                value={formData.image_2}
                onChange={handleChange}
								className="seller-form form-control"
              />
              <br />

              <label>Image 3: </label>
              <input
                type="text"
                name="image_3"
                value={formData.image_3}
                onChange={handleChange}
								className="seller-form form-control"
              />
              <br />

              <label>Name: </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required={true}
								className="seller-form form-control"
              />
              <br />

              <label>Location: </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
								className="seller-form form-control"
              />
              <br />

              <label>Bid End Date: </label>
              <input
                type="datetime-local"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required={true}
								className="seller-form form-control"
              />

              <br />
              <label>Starting Price: </label>
              <input
                type="number"
                name="starting_price"
                value={formData.starting_price}
                onChange={handleChange}
                required={true}
								className="seller-form form-control"
              />
              <br />

              <label>Description: </label>
              <input
                onChange={handleChange}
                value={formData.description}
								className="seller-form form-control"
              />
              <br />
              <Button
                type="submit"
                htmlType="submit"
                onClick={handleSubmit}
                style={{ backgroundColor: "#f3c180"}}
              >
                Submit
              </Button>
            </form>
						<ToastContainer />
      </div>
    </>
  );
}

export default AddItem;