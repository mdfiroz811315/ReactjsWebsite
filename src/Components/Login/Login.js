import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

function Login() {
    /*
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
*/
const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  let loginUser = {
    'email' : "mdfiroz@gmail.com",
    'password' : "12345"

  }
  const [formName, setFormName] = useState("Login Form")
  const onSubmit = (e)=>{
    e.preventDefault()
    console.log(formData)
    if(formData.email === loginUser.email && formData.password === loginUser.password){
        alert(" Login Success");
    }
    else{
        alert(" Login Error");
    }
    

  }
 
  const onChange = (e) => {
        setFormData(prev => {
            const cloneState = {...prev};
            cloneState[e.target.name] = e.target.value;
            return cloneState;
        });
    }
    return (
      <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="3" > 

                    <form onSubmit={onSubmit}>
                        <h1> {formName} </h1>
                        <label htmlFor="title">Email</label>
                        <input type="text" name="email" id="email" onChange={onChange}
                        />
                        <br/><br/>

                        <label htmlFor="body">Password</label>
                        <input type="password" name="password" id="password"  onChange={onChange}/><br/><br/>

                        <input type="submit" value="Submit" />
                    </form>
                     </Col>
                   
                </Row>
            </Container>
      </>
    );
  }
  
  export default Login;