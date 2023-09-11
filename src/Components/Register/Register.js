/* eslint-disable no-unused-vars */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';



function Register() {
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
    "image" : ''
  })
  // declaring state to validate fields
  const [errorMessages, setErrorMessages] = useState({
    "firstName": '',
    "emailid": '',
    "password": '',
    "gender" : '',
    "mobile": '',
    "dob" : ''
  });

  // error message to display if field is blank
  const errors = {
    firstName : "Please Enter First Name",
    emailid : "Please Enter Emailid",
    password  : "Please Enter Password",
    gender : "Please Enter Sex",     
    mobile : "Please Enter Mobile",
    dob : "Please Enter DOB"
  };
//////////////////////////////////
  const [formName, setFormName] = useState("Registration Form")


  const onSubmit = (e)=>{
    e.preventDefault()
    console.log(registrationData)

    let errorCopy = {...errorMessages};
    if(registrationData.firstName === ''){
        errorCopy.firstName = errors.firstName
    }
    if(registrationData.emailid === ''){
        errorCopy.emailid = errors.emailid
    }
    if(registrationData.password === ''){
        errorCopy.password = errors.password
    }
    if(registrationData.gender === ''){
        errorCopy.gender = errors.gender

    }
    if(registrationData.mobile === ''){
        errorCopy.mobile = errors.mobile
    }
    if(registrationData.dob === ''){
        errorCopy.dob = errors.dob
    }
    setErrorMessages(errorCopy);

  }
 /////////////////////////////////////////////
  const onChange = (e) => {
        let name = e.target.name;
        let val = e.target.value;
        console.log(errorMessages);
        let cloneError = {...errorMessages};
        // we will do validation for the text which we added for validation
        if(cloneError.hasOwnProperty(name)){
            if(val  === ''){
                let errorMsg = errors[name];

                cloneError[name] = errorMsg

                setErrorMessages(cloneError)
            }else{
                let errorMsg = "";
                cloneError[name] = errorMsg

                setErrorMessages(cloneError)
            }

        }

        setRegistrationData(prev => {
            const cloneState = {...prev};
            if(cloneState.hasOwnProperty(e.target.name))
            {
                cloneState[e.target.name] = e.target.value;  // updating state valus from Form
            }
            return cloneState;
        });
    }

    return (
      <>
            <Container>
                <Row  className="justify-content-md-center">
                    
                    <Col xs lg="6" > 
                   
                    <Form onSubmit={onSubmit}>
                         <h1> {formName} </h1>
                        <Form.Group className="mb-3" controlId="firstName">
                            <Form.Label>First Name <span className="text-danger"> * </span></Form.Label>
                            <Form.Control type="text" name="firstName" placeholder="Enter First Name"  onChange={onChange}/>
                            <Form.Text className="text-danger">
                                {errorMessages["firstName"]}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text"  name="lastName"  placeholder="Enter Last Name"   onChange={onChange}/>
                           
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="city">
                            <Form.Label>SELECT YOUR CITY</Form.Label>
                            <Form.Select aria-label="Select City" name="city" onChange={onChange} onSelect={onChange}> 
                                <option>SELECT CITY</option>
                                <option value="KOLKATA">KOLKATA</option>
                                <option value="DELHI">NEW DELHI</option>
                                <option value="MUMBAI">MUMBAI</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="image" name="image" className="mb-3">
                            <Form.Label>Upload Image</Form.Label>
                            <Form.Control type="file" multiple  name="image" onChange={onChange} />
                        </Form.Group>
                   

                        <Form.Group className="mb-3" controlId="emailid">
                            <Form.Label>Email id <span className="text-danger"> * </span></Form.Label>
                            <Form.Control type="text" placeholder=" Enter Email id"  name="emailid" onChange={onChange} />
                            <Form.Text className="text-danger">
                                {errorMessages.emailid}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>password <span className="text-danger"> * </span></Form.Label>
                            <Form.Control type="password" placeholder=" ***** *****" name="password" onChange={onChange} />
                            <Form.Text className="text-danger">
                                {errorMessages.password}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Gender <span className="text-danger"> * </span></Form.Label>
                            <Form.Text >
                                <Form.Check // prettier-ignore
                                    type='radio'
                                    id="male"
                                    label="Male"
                                    name="gender"
                                    value="Male"
                                    onChange={onChange}
                                />
                                <Form.Check // prettier-ignore
                                    type='radio'
                                    id="Female"
                                    label="Female"
                                    name="gender"
                                    value="Female"
                                    onChange={onChange}
                                />

                            </Form.Text>
                            <Form.Text className="text-danger">
                                {errorMessages.gender}
                            </Form.Text>
                        </Form.Group>

                       
                        <Form.Group className="mb-3" controlId="mobile">
                            <Form.Label>mobile <span className="text-danger"> * </span></Form.Label>
                            <Form.Control type="number" placeholder=" Type Number" name="mobile" onChange={onChange}/>
                            <Form.Text className="text-danger">
                                {errorMessages.mobile}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="fullAdress">
                            <Form.Label>Full Adress</Form.Label>
                            <Form.Control name="fullAdress" onChange={onChange}
                            as="textarea"
                            placeholder="Enter Your Address here"
                            style={{ height: '100px' }}
                            />
                            <Form.Text >
                              
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="dob">
                            <Form.Label>Date Of Birth</Form.Label>
                            <Form.Control type="date" placeholder=" Type DOB" name="dob" onChange={onChange}/>
                            <Form.Text >
                              
                            </Form.Text>
                        </Form.Group>

                        
                        <Button variant="primary center"  size="lg" type="submit">
                            Submit
                        </Button>
                        </Form>

                     </Col>
                   
                </Row>
            </Container>
      </>
    );
}
  
  export default Register;