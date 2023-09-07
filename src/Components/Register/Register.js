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
  const [errorMessages, setErrorMessages] = useState({});
  /////////////////////////////////////////
  const errors = {
    firstName : "Please Enter First Name",
    lastName : "Please Enter Last Name",
    emailid : "Please Enter Emailid",
    password  : "Please Enter Password",
    sex : "Please Enter Sex",     
    mobile : "Please Enter Mobile",
    fullAdress : "Please Enter FullAdress",
    dob : "Please Enter DOB"
  };
//////////////////////////////////
  const [formName, setFormName] = useState("Registration Form")
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
            <Container>
                <Row  className="justify-content-md-center">
                    
                    <Col xs lg="6" > 
                   
                    <Form onSubmit={onSubmit}>
                         <h1> {formName} </h1>
                        <Form.Group className="mb-3" controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name="firstName" placeholder="Enter First Name"  onChange={onChange}/>
                            <Form.Text >
                                {renderErrorMessage("firstName")}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text"  name="lastName"  placeholder="Enter Last Name"   onChange={onChange}/>
                            <Form.Text >
                                {renderErrorMessage("lastName")}
                            </Form.Text>
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
                            <Form.Label>Email id</Form.Label>
                            <Form.Control type="text" placeholder=" Enter Email id"  name="emailid" onChange={onChange} />
                            <Form.Text >
                                {renderErrorMessage("emailid")}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>password</Form.Label>
                            <Form.Control type="password" placeholder=" ***** *****" name="password" onChange={onChange} />
                            <Form.Text >
                                {renderErrorMessage("password")}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Gender</Form.Label>
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
                        </Form.Group>

                       
                        <Form.Group className="mb-3" controlId="mobile">
                            <Form.Label>mobile</Form.Label>
                            <Form.Control type="number" placeholder=" Type Number" name="mobile" onChange={onChange}/>
                            <Form.Text >
                                {renderErrorMessage("mobile")}
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
                                {renderErrorMessage("fullAdress")}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="dob">
                            <Form.Label>Date Of Birth</Form.Label>
                            <Form.Control type="date" placeholder=" Type DOB" name="dob" onChange={onChange}/>
                            <Form.Text >
                                {renderErrorMessage("dob")}
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