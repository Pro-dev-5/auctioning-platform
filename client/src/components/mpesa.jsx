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
    <div>mpesa</div>
    
  )
}

export default mpesa