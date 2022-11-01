import React from 'react'

let headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Authorization", "Bearer yAvG3Twna9Bq5dkkgBkHPG1rDvqT");
​
fetch("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {
  method: 'POST',
  headers,
  body: JSON.stringify({
    "BusinessShortCode": 174379,
    "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjIxMDMxMTUzNjIy",
    "Timestamp": "20221031153622",
    "TransactionType": "CustomerPayBillOnline",
    "Amount": 1,
    "PartyA": 254111465583,
    "PartyB": 174379,
    "PhoneNumber": 254111465583,
    "CallBackURL": "https://mydomain.com/path",
    "AccountReference": "CompanyXLTD",
    "TransactionDesc": "Payment of X" 
  })
})
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log(error));
function mpesa() {
  return (
    // <div>mpesa</div>
    <div className="row">
        <div className="logo">
          <img src= "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.safaricom.co.ke%2Fimages%2FLipanampesa.png&imgrefurl=https%3A%2F%2Fwww.safaricom.co.ke%2Fabout%2Fbrand-toolkit%2Flogos&tbnid=1mlK17z_C9gqmM&vet=12ahUKEwi07YWmxoz7AhUNTRoKHWoDBGMQMygHegUIARDGAQ..i&docid=hUe84UKQw3C5RM&w=1920&h=1080&q=mpesa%20images&hl=en&ved=2ahUKEwi07YWmxoz7AhUNTRoKHWoDBGMQMygHegUIARDGAQ"width="100" height="50" />
        </div>
      </div>
    );
  }
    

export default mpesa;