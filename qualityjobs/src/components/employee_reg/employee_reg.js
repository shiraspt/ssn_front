import './employee_reg.css';
import React, {useState} from 'react';
function Employee_reg()
{
    const [formData, setFormData] = useState({
        emp_name: '',
        emp_mob: '',
        emp_email: '',
        emp_address: '',
        emp_pword: ''
      });

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('http://127.0.0.1:8000/client/reg_client', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          if (!response.ok) {
            throw new Error('Failed to register');
          }
          const data = await response.json();
          console.log(data); // Handle successful registration response
        } catch (error) {
          console.error('Error:', error);
          // Handle error
        }
      };
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };


    return (
    
        <div className="employee_reg">
            <div className="reg_form_1">
        <table className="reg_form">
        <tr><td>Name</td><td><input type="text" name="emp_name" id="emp_name" required></input></td></tr>
         <tr><td>Mobile Number</td><td><input type="text" name="emp_mob" id="emp_mob" required></input></td></tr>
         <tr><td>E mail</td><td><input type="text" name="emp_email" id="emp_email" required></input></td></tr>
    
         <tr><td>Gender</td><td>
            <select name="emp_gender" id="emp_gender">
    
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                </select> </td></tr>

                <tr>
            <td>Work Type</td><td>
                <select name="job_category" id="job_category" required>
                    <option value="">Select</option>
           
                  
                </select> 

         </td>
        </tr> 
         <tr>
            <td>Work Location</td><td>
                <select name="work_location" id="work_location" required>
                    <option value="">Select</option>
           
                  
                </select> 

         </td>
        </tr>
        </table>
        <table class="reg_form" >
         <tr><td>Address</td><td rowspan="2"> <textarea name="emp_address" id="emp_address" cols="10" rows="10" required></textarea></td></tr>
         <tr><td></td></tr>
         <tr><td>Photo</td><td><input type="file" name="emp_photo" id="emp_photo"></input></td></tr>

         <tr><td>DOB</td><td><input type="date" name="emp_dob" id="emp_dob"></input></td></tr>
         <tr><td>Password</td><td><input type="text" name="emp_pword" id="emp_pword" required></input></td></tr>
        
        
         </table>
         </div>
         </div>
    )
}

export default Employee_reg;