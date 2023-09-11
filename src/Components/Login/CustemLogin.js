import { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function CustemLogin(){
    ///////////////js///////////////
    const [loginData,setLoginData] = useState({
        "email" : '',
        "password":''
    });
    const loginUser = (e) => { 
        e.preventDefault();
        console.log(loginData);

    }

     const onChange = (e) => { 
        setLoginData(prev => {
            const cloneState = {...prev};
            cloneState[e.target.name] = e.target.value;  // updating state valus from Form
            return cloneState;
        });

     }
    /////////////////////////
    return(
        <>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <form onSubmit={loginUser}>
                        <div className="container">
                            <h1>Login</h1>

                            <hr/>
                            <label htmlFor="Email"><b>Email</b></label>
                            <input type="text" placeholder="Enter Email " id="email" name="email" onChange={onChange}  required />
                            <hr/>

                            <label htmlFor="password"><b>Password</b></label>
                            <input type="text" placeholder="Enter Password " name="password"  onChange={onChange}  required />
                            <hr/>
                            
                            <button type="submit" className="registerbtn">Login</button>
                            
                        </div>
                    </form>
                </Col>
            </Row>
        </>
    )
}
