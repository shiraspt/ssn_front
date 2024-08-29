import './job_form.css';


function Job_form()
{
    return
    (
        <div className="job_form">
<table class="reg_form"> 
<tr><td>   Job Description </td><td> <textarea name="job_des" id="job_des"></textarea></td></tr>


<tr><td> Mobile number </td><td><input type="text" name="cce_mob" id="cce_mob"></input>  </td></tr>
<tr><td> E mail </td><td> <input type="text" name="cce_email" id="cce_email"></input>  </td></tr>

<tr><td>   Address </td><td> <textarea name="cce_address" id="cce_address"></textarea></td></tr>

<tr>
            <td>Work Location</td><td>
                <select name="work_location" id="work_location" required>
                    <option value="">Select</option>
           
                  
                </select> 

         </td>
        </tr>

        <tr>
            <td>Work Type</td><td>
                <select name="work_type" id="work_type" required>
                    <option value="">Select</option>
           
                  
                </select> 

         </td>
        </tr> 
        <tr><td> Cost </td><td> <input type="text" name="cost" id="cost"></input>  </td></tr>

<tr><td>  <button class="submit" id="submit">SUBMIT</button>   </td><td></td></tr>

               </table>
        </div>
    )
}
export default Job_form;