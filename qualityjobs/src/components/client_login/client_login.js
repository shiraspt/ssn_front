import './style.css';
import './client_login.css';
import React, { useState } from 'react';
// import Client_reg from '../client_reg/client_reg';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
function Client_login()
{
    const handleSubmit = (event) => {
        event.preventDefault();
    // const [formData, setFormData] = useState({
    //     client_username: '',
    //     client_password: ''
    //   });
    
    //   const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //       const response = await fetch('http://127.0.0.1:8000/client/client_login', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(formData),
    //       });
    // console.log(formData)
    //       if (!response.ok) {
    //         throw new Error('Failed to log in');
    //       }
    
    //       const data = await response.json();
    //       console.log(data); 
    //     } catch (error) {
    //       console.error('Error:', error);
         
    //     }
    //   };
    
    //   const handleChange = (e) => {
    //     setFormData({
    //       ...formData,
    //       [e.target.name]: e.target.value,
    //     });
    //   };
const formdata = new FormData();
formdata.append("client_username", event.target.client_username.value);
formdata.append("client_password", event.target.client_password.value);

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow"
};

fetch("http://127.0.0.1:8000/client/client_login", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
    };

return (

<div className="client_login">
   

<form onSubmit={handleSubmit}>
      <input type="text" name="client_username" placeholder="Username"   />
      <input type="password" name="client_password" placeholder="Password"   />
      <button type="submit">Login</button>
    </form>
       
</div>


)
}
export default Client_login;