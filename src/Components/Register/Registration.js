import { useState } from "react";
import "./Registration.css";

export default  function Registration() {
    // create same form using simple HTML and CSS
    const [registrationData, setRegistrationData] = useState({
        "firstName": '',
        "lastName": '',
        "emailid": '',
        "password": '',
        "gender" : '',
        "mobile": '',
        "fullAdress": '',
        "dob" : '',
        "city" : '',
        "image" : '',
        "skill" : ''
      })
      const [errorMessages, setErrorMessages] = useState({});
      /////////////////////////////////////////
     
    //////////////////////////////////
      const onSubmit = (e)=>{
        e.preventDefault()
        console.log(registrationData)
       
    
      }
     /////////////////////////////////////////////
      const onChange = (e) => {
            setRegistrationData(prev => {
                const cloneState = {...prev};
                cloneState[e.target.name] = e.target.value;  // updating state valus from Form
                return cloneState;
            });
        }
        // Generate JSX code for error message
        const renderErrorMessage = (name) =>
          name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
          );

    return (
        <>
        
               
        <form onSubmit={onSubmit}>
        <div className="container">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr/>
                <label htmlFor="firstName"><b>First Name</b></label>
                <input type="text" placeholder="Enter First Name " name="firstName"  onChange={onChange} required />
                <div> {renderErrorMessage("firstName")}</div>

                <label htmlFor="lastName"><b>Last Name</b></label>
                <input type="text" placeholder="Enter Last Name " name="lastName"  onChange={onChange} required />
                <div> {renderErrorMessage("lastName")}</div>


                <label htmlFor="city"><b>SELECT YOUR CITY</b></label>
                <select name="city" onChange={onChange} onSelect={onChange} >
                    <option>SELECT CITY</option>
                    <option value="KOLKATA">KOLKATA</option>
                    <option value="DELHI">NEW DELHI</option>
                    <option value="MUMBAI">MUMBAI</option>
                </select>
                <div> {renderErrorMessage("city")}</div>


                <hr/>
                <label htmlFor="image"><b>Upload Image</b></label><br/>
                <input type="file" id="myFile" name="image" onChange={onChange} />
                <div> {renderErrorMessage("image")}</div>


                <hr/>
                <label htmlFor="emailid"><b>Email id</b></label>
                <input type="text" placeholder="Email id " name="emailid"  onChange={onChange} required />
                <div> {renderErrorMessage("emailid")}</div>



                <label htmlFor="password"><b>Password</b></label>
                <input type="password" placeholder="password " name="password"  onChange={onChange} required />
                <div> {renderErrorMessage("password")}</div>
                <hr/>


                <label htmlFor="gender"><b>Gender   </b></label> <br/>
               Male <input type="radio" placeholder="Male " name="gender" value="Male" onChange={onChange} required />
                Female <input type="radio" placeholder="Female " name="gender"  value="FeMale" onChange={onChange} required />
                <div> {renderErrorMessage("gender")}</div>
                <hr/>


                <label htmlFor="mobile"><b>mobile</b></label>
                <input type="number" placeholder="Enter number " name="mobile"  onChange={onChange} required />
                <div> {renderErrorMessage("mobile")}</div>
                <hr/>


                <label htmlFor="fullAdress"><b>FullAdress</b></label><br/>
                <textarea rows="5" cols="160" name="fullAdress"  onChange={onChange} required /> 
                <div> {renderErrorMessage("fullAdress")}</div>
                <hr/>


                <label htmlFor="dob"><b>Date Of Birth</b></label>
                <input type="date" placeholder="select dob " name="dob"  onChange={onChange} required />
                <div> {renderErrorMessage("dob")}</div>

                <hr/>
                <label htmlFor="skill"><b>Skills</b> <br/></label> <br/>
                <input type="checkbox"  name="skill" value="Html" />
                    <label >  HTML</label><br/>
                    <input type="checkbox" name="skill" value="CSS" />
                    <label >  CSS</label><br/>
                    <input type="checkbox" name="skill" value="Javscript" />
                    <label >  Javscript</label> <br/>
                    <input type="checkbox" name="skill" value="Reactjs" />
                    <label>   REactJs</label>
                    <br/>
                <div> {renderErrorMessage("skill")}</div>


                <hr/>
                <button type="submit" className="registerbtn">Register</button>
            </div>
         </form>

                
  </>
    )

}
// export default 