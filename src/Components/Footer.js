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



  const loginUser = (e)=>{
    e.preventDefault()
    console.log(footerData);
    alert(footerData.emailId);

  }

  const changeText = (e)=>{
    let value =e.target.value;
    let name =e.target.name;
      setFooterData(current =>{
          const cloneData = {...current}
          if(cloneData.hasOwnProperty(name))
          {
            cloneData[name] = value
          }
          return cloneData;

        }

      )

  }

  const onChange = (e)=>{

  }

  ///////////////////
  return (
      <>
      <Container>
          <form  onSubmit={loginUser}>
            <h1 className="text-center">footer form Example <br/><hr/></h1>
            <Row>
          <Col>
            <label htmlFor="FirstName"><b>First Name</b></label>
            <input type="text" placeholder="Enter First Name " name="firstName"onChange={changeText} />
          </Col>
          <Col>
            <label htmlFor="LastName"><b>Last Name</b></label>
            <input type="text" placeholder="Enter Last Name " name="lastName"onChange={changeText} />
          </Col>
          </Row>
          <hr/>
          <Row>
          <Col>
            <label htmlFor="Email id"><b>Email</b></label>
            <input type="text" placeholder="Enter Email " name="emailId"onChange={changeText} />
          </Col>
          <Col>
            <label htmlFor="Password"><b>Password</b></label>
            <input type="password" placeholder="Password " name="password"onChange={changeText} />
          </Col>
          </Row>
          <hr/>
         
          <Row>
          
          <Col>
            <label htmlFor="Mobile"><b>Mobile</b></label>
            <input type="number" placeholder="Enter number " name="mobile"onChange={changeText} />
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
                <label htmlFor="DOB"><b>Date Of Birth</b></label>
                <Form.Control type="date" placeholder=" Type DOB" name="dob" onChange={changeText}/>
          </Col>
          <Col>
                <label htmlFor="Gender"><b>Gender</b></label>
                <br/><br/>
                  <Form.Text >
                  <Form.Check 
                        inline
                        type='radio'
                        id="male"
                        label="Male"
                        name="gender"
                        value="Male"
                        onChange={onChange}/>
                  <Form.Check 
                        inline
                        type='radio'
                        id="Female"
                        label="Female"
                        name="gender"
                        value="Female"
                        onChange={onChange}/>
                  </Form.Text>
            </Col>
            </Row>
            <hr/>
            <Row>
            <Col>
                  <Form.Label><b>Upload file</b></Form.Label>
                  <Form.Control type="file" multiple  name="file" onChange={onChange} />
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
 
