import React from "react";
import "../styles/Mpesa.css";
import { Input } from "antd";
import { Button } from "antd";
// import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

function mpesa() {
  const [contact, setContact] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        contact,
        BusinessShortCode: 174379,
        Password:
          "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjIxMDMxMTUzNjIy",
        Timestamp: "20221031153622",
        TransactionType: "CustomerPayBillOnline",
        Amount: 1,
        PartyA: 254111465583,
        PartyB: 174379,
        PhoneNumber: 254111465583,
        CallBackURL: "https://mydomain.com/path",
        AccountReference: "CompanyXLTD",
        TransactionDesc: "Payment of X",
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then(() => {
          set;
        });
      }
    });

    //   .then(r =>{
    // 		if(r.ok){
    // 			r.json().then(()=>{
    // 				toast("Product added successfully 😊")
    // 				// navigate('/')
    // 			})
    // 		}
    // 	})
    // 	} catch (error) {
    // 		console.log(error.message)
    // 	}
  }
  // ​useEffect(() => {
  // fetch("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {
  //   method: 'POST',
  //   headers : { "Content-type": "application/json"},
  //   body: JSON.stringify({
  //     "BusinessShortCode": 174379,
  //     "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjIxMDMxMTUzNjIy",
  //     "Timestamp": "20221031153622",
  //     "TransactionType": "CustomerPayBillOnline",
  //     "Amount": 1,
  //     "PartyA": 254111465583,
  //     "PartyB": 174379,
  //     "PhoneNumber": 254111465583,
  //     "CallBackURL": "https://mydomain.com/path",
  //     "AccountReference": "CompanyXLTD",
  //     "TransactionDesc": "Payment of X"
  // })})
  // .then(response => response.text())
  // .then(result => console.log(result))
  // .catch(error => console.log(error));
  // })

  return (
    // <div>mpesa</div>

    <div className="row">
      <div className="container-fluid"></div>
      <img
        src="https://www.safaricom.co.ke/images/Lipanampesa.png"
        width="500"
        height="250"
      />
      <div>
        <form>
          <label>
            Pay now ?
            <Input
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Type contact"
            />
            <Button type="submit" onSubmit={handleSubmit}>
              Submit
            </Button>
          </label>
        </form>
      </div>
      {/* <div>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
      <input {...register("firstName")} />
      <button type="submit">Submit</button>
    </form> */}
    </div>
  );
}

export default mpesa;
