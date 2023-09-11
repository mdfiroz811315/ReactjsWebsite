import { useState } from "react";
import "./Career.js";
function Career({bodyText}) {
   // childToParentData("This Data we are Passing from Career")

   const onChange = (e) => {

   }

   const [registrationData, setRegistrationData] = useState({
    "firstName": '',
    "lastName": '',
    "emailid": '',
    "mobile": '',
    "fullAdress": '',
    "city" : '',
    "file" : ''
    
  })

    return (
        <>
            <form>
            <div>
             <h1>Career</h1>
            
                <hr/>
                <label htmlFor="firstName"><b>First Name</b></label>
                <input type="text" placeholder="Enter First Name " name="firstName"  onChange={onChange} required />
                <hr/>

                <label htmlFor="lastName"><b>Last Name</b></label>
                <input type="text" placeholder="Enter Last Name " name="lastName"  onChange={onChange} required />
                <hr/>


                <label htmlFor="city"><b>SELECT CITY</b></label>
                <select name="city" onChange={onChange} onSelect={onChange} >
                    <option>SELECT CITY</option>
                    <option value="KOLKATA">KOLKATA</option>
                    <option value="DELHI">NEW DELHI</option>
                    <option value="MUMBAI">MUMBAI</option>
                    <option value="Goa">Goa</option>
                    <option value="Bihar">Bihar</option>
                </select>
                

                <hr/>
                <label htmlFor="file"><b>Upload File</b></label>
                <input type="file" id="myFile" name="file" onChange={onChange} />
               


                <hr/>
                <label htmlFor="emailid"><b>Email id</b></label>
                <input type="text" placeholder="Email id " name="emailid"  onChange={onChange} required />
                <hr/>


                <label htmlFor="mobile"><b>mobile</b></label>
                <input type="number" placeholder="Enter number " name="mobile"  onChange={onChange} required />
                <hr/>


                <label htmlFor="fullAdress"><b>FullAdress</b></label><br/>
                <textarea rows="5" cols="160" name="fullAdress"  onChange={onChange} required /> 
                


                <hr/>
                <button type="submit" className="registerbtn">Register</button>
            </div>
         </form>
           
        </>
    )
}
export default  Career
