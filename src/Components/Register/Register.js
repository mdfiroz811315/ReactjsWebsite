/* eslint-disable no-unused-vars */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Register() {
const [formData, setFormData] = useState({
    "firstName": '',
    "lastName": '',
    "emailid": '',
    "password": '',
    "sex" : '',
    "mobile": '',
    "fullAdress": '',
    "dob" : ''
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
    console.log(formData)
   

  }
 
  const onChange = (e) => {
        setFormData(prev => {
            const cloneState = {...prev};
            cloneState[e.target.name] = e.target.value;
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
                            <Form.Control type="text" placeholder="Enter Last Name" />
                            <Form.Text >
                                {renderErrorMessage("lastName")}
                            </Form.Text>
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="emailid">
                            <Form.Label>Email id</Form.Label>
                            <Form.Control type="text" placeholder=" Enter Email id" />
                            <Form.Text >
                                {renderErrorMessage("emailid")}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>password</Form.Label>
                            <Form.Control type="text" placeholder=" ##### #####" />
                            <Form.Text >
                                {renderErrorMessage("password")}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="sex">
                            <Form.Label>Sex</Form.Label>
                            <Form.Control type="box" placeholder=" Type Sex" />
                            <Form.Text >
                                {renderErrorMessage("sex")}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="mobile">
                            <Form.Label>mobile</Form.Label>
                            <Form.Control type="mobile" placeholder=" Type Number" />
                            <Form.Text >
                                {renderErrorMessage("mobile")}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="fullAdress">
                            <Form.Label>Full Adress</Form.Label>
                            <Form.Control type="fullAdress" placeholder=" Type Adress" />
                            <Form.Text >
                                {renderErrorMessage("fullAdress")}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="dob">
                            <Form.Label>Date Of Birth</Form.Label>
                            <Form.Control type="dob" placeholder=" Type DOB" />
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