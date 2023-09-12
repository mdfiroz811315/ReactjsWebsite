import { Container } from "react-bootstrap"
import { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Footer() {
  ////////////////
  const [footerData, setFooterData] = useState({
    "emailId": '',
    "password": '',
    "firstName": '',
    "lastName": '',
    "mobile": '',
    "city" : '',
    "dob": '',
    "gender" : '',
    "fullAdress" : '',
    "file" : '',
    "country" : ''
  })

  const [errorMessages, setErrorMessages] = useState({
    "firstName": '',
    "emailid": '',
    "password": '',
    "gender" : '',
    "mobile": '',
    "dob" : ''
  });

  const errors = {
    firstName : "Please Enter First Name",
    emailid : "Please Enter Emailid",
    password  : "Please Enter Password",
    gender : "Please Enter Gender",     
    mobile : "Please Enter Mobile",
    dob : "Please Enter DOB"
  };

  const loginUser = (e)=>{
    e.preventDefault()
    console.log(footerData);
    let error = 0;
    let errorCopy = {...errorMessages};
    if(footerData.firstName === ''){
        errorCopy.firstName = errors.firstName;
        error = 1;
    }
    if(footerData.emailid === ''){
        errorCopy.emailid = errors.emailid;
        error = 1;
    }
    if(footerData.password === ''){
        errorCopy.password = errors.password;
        error = 1;
    }
    if(footerData.gender === ''){
        errorCopy.gender = errors.gender;
        error = 1;

    }
    if(footerData.mobile === ''){
        errorCopy.mobile = errors.mobile;
        error = 1;
    }
    if(footerData.dob === ''){
        errorCopy.dob = errors.dob;
        error = 1;
    }
    setErrorMessages(errorCopy);
    if(error === 1){  // code has any validation error
      return  // not allow to execute further stop here
    }
    alert("all data are correct");
    /// api call to save data
  }

  const changeText = (e)=>{
    let value =e.target.value;
    let name =e.target.name;
    console.log(errorMessages);
    ///// to update error message //////
    let cloneError = {...errorMessages};
    if(cloneError.hasOwnProperty(name)){//do we need to validate given field with this name
      if(value  === ''){ // to show error message
          let errorMsg = errors[name];
          cloneError[name] = errorMsg
          setErrorMessages(cloneError)
      }else{ // to remove error message as value been added
          cloneError[name] = ""
          setErrorMessages(cloneError)

      }
    }
    //// to update error message end /////
    //// to update data which we get from form into state footerData///
    setFooterData(current =>{
        const cloneData = {...current}
        if(cloneData.hasOwnProperty(name))
        {
          cloneData[name] = value
        }
        return cloneData;
      }
    )
     //// to update data which we get from form into state footerData end///

  }

  

  ///////////////////
  return (
      <>
      <Container>
          <form  onSubmit={loginUser}>
            <h1 className="text-center">footer form Example <br/><hr/></h1>
            <Row>
              <Col>
                <label htmlFor="FirstName"><b>First Name <span className="text-danger"> * </span></b></label>
                <input type="text" placeholder="Enter First Name " name="firstName" onChange={changeText} />
                <Form.Text className="text-danger">
                  {errorMessages["firstName"]}
                </Form.Text>
              </Col>
              <Col>
                <label htmlFor="LastName"><b>Last Name</b></label>
                <input type="text" placeholder="Enter Last Name " name="lastName" onChange={changeText} />
              </Col>
          </Row>
          <hr/>
          <Row>
          <Col>
            <label htmlFor="Email id"><b>Email <span className="text-danger"> * </span></b></label>
            <input type="text" placeholder="Enter Email " name="emailId" onChange={changeText} />
            <Form.Text className="text-danger">
                  {errorMessages["emailId"]}
            </Form.Text>
          </Col>
          <Col>
            <label htmlFor="Password"><b>Password <span className="text-danger"> * </span></b></label>
            <input type="password" placeholder="Password " name="password" onChange={changeText} />
            <Form.Text className="text-danger">
                  {errorMessages["password"]}
            </Form.Text>
          </Col>
          </Row>
          <hr/>
         
          <Row>
          
          <Col>
            <label htmlFor="Mobile"><b>Mobile <span className="text-danger"> * </span></b></label>
            <input type="number" placeholder="Enter number " name="mobile" onChange={changeText} />
            <Form.Text className="text-danger">
                  {errorMessages["mobile"]}
            </Form.Text>
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
          <hr/>
          <Row>
          <Col>
                <label htmlFor="DOB"><b>Date Of Birth <span className="text-danger"> * </span></b></label>
                <Form.Control type="date" placeholder=" Type DOB" name="dob" onChange={changeText}/>
                <Form.Text className="text-danger">
                  {errorMessages["dob"]}
            </Form.Text>
          </Col>
          <Col>
                <label htmlFor="Gender"><b>Gender <span className="text-danger"> * </span></b></label>
                <br/><br/>
                  <Form.Text >
                  <Form.Check 
                        inline
                        type='radio'
                        id="male"
                        label="Male"
                        name="gender"
                        value="Male"
                        onChange={changeText}/>
                  <Form.Check 
                        inline
                        type='radio'
                        id="Female"
                        label="Female"
                        name="gender"
                        value="Female"
                        onChange={changeText}/>
                  </Form.Text>
                  <Form.Text className="text-danger">
                    <br/>{errorMessages["gender"]}
                  </Form.Text>
            </Col>
            </Row>
            <hr/>
            <Row>
            <Col>
                  <Form.Label><b>Upload file</b></Form.Label>
                  <Form.Control type="file" multiple  name="file" onChange={changeText} />
            </Col>
            <Col>
            
                  <label htmlFor="country"><b>Citizenship</b></label>
                  <select name="country" onChange={changeText} onSelect={changeText} >
                        <option>COUNTRY </option>
                        <option value="India">India</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Dubai">Dubai</option>
                        <option value="China">China</option>
                        <option value="UAE">UAE</option>
                  </select>
            </Col>
            </Row>    
            <hr/>
            <Row>
            <Col md={6}>
                  <label htmlFor="Adress"><b>Full Adress</b></label><br/>
                  <textarea className="form-control"   name="fullAdress"  style={{ height: '100px' }} onChange={changeText} />
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
 
