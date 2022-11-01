import React from 'react'

function mpesa() {
//     let headers = new Headers();
// headers.append("Content-Type", "application/json");
// headers.append("Authorization", "Bearer yAvG3Twna9Bq5dkkgBkHPG1rDvqT");
// ​
// fetch("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {
//   method: 'POST',
//   headers,
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
//   })
// })
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log(error));
  return (
    // <div>mpesa</div>
    <div className="row">
        <div className="logo">
          <img src= "data:image/png;base64,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"width="100" height="50" />
        </div>
      </div>
    );
  }
    

export default mpesa;