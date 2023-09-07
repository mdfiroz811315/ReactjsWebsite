
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import Breadcom from './Breadcom';
import RightBar from './RightBar';
// hook 
//props properties parent to child
let name = "MD Firoz";
let address = "Kolkata";
function Dashboard() {
    const [count, setCount] = useState(0);

    const add = ()=>{
        setCount(count + 1)
    }
    const subtract = ()=>{
        setCount(count - 1)
    }
    return (
        <>
            <Container fluid>
                <Row>
                    <Col sm={2}> 
                    Created By : {name}
                        <Breadcom  />
                       
                    </Col>
                    <Col sm={8}>
                        <div>
                            <p>You clicked {count} times</p>
                            <button onClick={() =>add() }>
                                Click me to add 
                            </button>
                            <button onClick={() => subtract()}>
                                Click me to Substract
                            </button>
                        </div>
                    </Col>
                    <Col sm={2}>
                       <RightBar/>
                    </Col>
                </Row>
            </Container>
           
        </>
    )
}
export default  Dashboard
