import { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
function Form (){
     /* const registration =  {
        "email" : '',
        "password" : '',
        "mobile" : ''
    }

     registration.email = "curentEmail"
     
     registration["email"] = "curentEmail"

     to update Dynamically with dynamic key i.e formName will be dynamic
     registration[formName] = "curentEmail"
    */
   
     // crete hook to use form value in react state 
    const [registrationData, setRegistrationData] = useState({
        "firstName": '',
        "lastName": '',
        "mobile": '',
        "fullAdress": '',
        "city" : ''
      })

      const [firstNameError,setFirstNameError] = useState();
      const [mobileError,setmobileError] = useState();

      let errorMessage = {
        "firstNameErrorMsg" : "Please Enter First Name",
        "mobileError"       : "Please Enter Your Mobile Number"
      }
    //  const 

    //function to update react state value(registrationData) onChenge event 
    const changeText =(e)=>{ // "e" is the event which contain DOM property(name,value,type) from where it fired
        // to picup current value from where this funtion fire
        let currentValue = e.target.value;
        // to picup text name from where this function fire
        let formName = e.target.name;
        // update error message
        console.log("mobile num",currentValue)
        if(currentValue !== ''){
            if(formName === 'firstName'){
                setFirstNameError("");
            }
            if(formName === 'mobile'){
                setmobileError("");
            }
        }
        if(currentValue === ''){
            if(formName === 'firstName'){
                setFirstNameError(errorMessage.firstNameErrorMsg);
            }
            if(formName === 'mobile'){
                setmobileError(errorMessage.mobileError);
            }
        }
        // to updte state value(registrationData)
        setRegistrationData(
             cur  => {  // a way to pick current value
                // to create copy of current state (registrationData)
                const cloneState = {...cur}; // (... is call spread operator)

                // checking formName is the key of cloneState if it is them hasOwnProperty return true else fals
                if(cloneState.hasOwnProperty(formName)){
                    cloneState[formName] = currentValue; // updation your clone object
                }
                return cloneState;  // returning freash data to update
            }
        );
        /*
         setRegistrationData(
             prev  => {
                    prev contain json of registrationData with current value

             }
            )

          setRegistrationData(
             prev  => {
                    prev contain json of registrationData with current value

                    const cloneState = {...prev};  // copy prev json 
                    
             }
            )

        */
    }

    // submit funtion to register user 
    const registerUser = (e)=>{
        // to stop page reload on submit
        e.preventDefault();
        /*

        validation

        */
       if(registrationData.firstName === ''){
        setFirstNameError(errorMessage.firstNameErrorMsg);
       // return
       }
       if(registrationData.mobile === ''){
        setmobileError(errorMessage.mobileError);
    //    return
       }

    }

    return(
        <>
            <Container>
                <form onSubmit={registerUser}>
                    <h1>Registration Form</h1>

                    <Row>
                    <Col>
                        <label htmlFor="firstName"><b>First Name </b></label><span className="text-danger"> * </span>
                        <input type="text" placeholder="Enter First Name " name="firstName" onChange={changeText} />
                        <span className="text-danger"> {firstNameError} </span>
                    </Col>
                    <Col>
                        <label htmlFor="lastName"><b>Last Name</b></label>
                        <input type="text" placeholder="Enter Last Name " name="lastName" onChange={changeText} />
                    </Col>
                    </Row>
                    <Row>
                    <Col >
                        <label htmlFor="mobile"><b>mobile </b></label><span className="text-danger"> * </span>
                        <input type="number" placeholder="Enter phone number " name="mobile" onChange={changeText} />
                        <div className="text-danger"> {mobileError} </div>
                    </Col>
                    <Col>
                        <label htmlFor="city"><b>SELECT CITY</b></label>
                            <select name="city" onChange={changeText} onSelect={changeText} >
                                <option>SELECT CITY</option>
                                <option value="KOLKATA">KOLKATA</option>
                                <option value="DELHI">NEW DELHI</option>
                                <option value="MUMBAI">MUMBAI</option>
                                <option value="Goa">Goa</option>
                                <option value="Bihar">Bihar</option>
                            </select>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <label htmlFor="Adress"><b>FullAdress</b></label><br/>
                            <textarea className="form-control"  name="fullAdress" onChange={changeText} />
                        </Col>
                    </Row>
                    <Row>
                    <Col md={{ span: 2, offset: 5 }}>
                        <Button variant="success" className="form-control heght30 mrgintop30" type="submit">Register</Button>
                        
                    </Col>
                    </Row>
                </form>
            </Container>
        </>
    )
}
export default Form    