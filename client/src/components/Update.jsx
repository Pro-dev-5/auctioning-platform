import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function Update({ seller }) {
const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const { id } = useParams();
  const [data, setData] = useState({
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

  function handleChange(e) {
    setData({ ...setData, [e.target.id]: e.target.value });
  }

  useEffect(() => {
    fetch(`/api/products`).then((res) => {
      if (res.ok) {
        res.json().then(console.log);
      } else {
        toast("Something went wrong with your request");
      }
    });

    fetch(`/api/categories`)
      .then((res) => res.json())
      .then((data) => setCategory(data))

      .catch((err) => toast(err.message));

    fetch(`/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/api/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }

  return (
    <>
      <div>Update</div>
      <button onClick={() => navigate(`/sellerhome/${seller.id}`)}>Back</button>
    </>
  );
}

export default Update;
