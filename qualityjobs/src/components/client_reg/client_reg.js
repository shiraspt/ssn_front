import './client_reg.css';
import React, { useState } from 'react';
function Client_reg()

{
    const [formData, setFormData] = useState({
        client_name: '',
        client_mob: '',
        client_email: '',
        client_address: '',
        client_pword: ''
      });

      
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

return (

<div className="client_reg">

<table className="reg_form"> 
<tbody>
<tr><td> Name </td><td><input type="text" name="client_name" id="client_name"></input> </td></tr>
<tr><td> Mobile number </td><td><input type="text" name="client_mob" id="client_mob"></input>  </td></tr>
<tr><td> E mail </td><td> <input type="text" name="client_email" id="client_email"></input>  </td></tr>

<tr><td>   Address </td><td> <textarea name="client_address" id="client_address"></textarea></td></tr>



<tr><td>  Password </td><td><input type="password" name="client_pword" id="client_pword"></input></td></tr>
{/* <tr><td>  Confirm Password  </td><td><input type="password" name="cce_cpword" id="cce_cpword"></input></td></tr> */}
<tr><td>  <button className="submit" id="submit">SUBMIT</button>   </td><td></td></tr>
</tbody>
               </table>
        

            
</div>


)
}
export default Client_reg;