
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftBar from './LeftBar';
import Body from './Body';
import RightBar from './RightBar';
import Breadcom from './Breadcom';

// hook 
//props properties parent to child
let name = "MD Firoz";
let address = "Kolkata";
function Dashboard() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col sm={2}> 
                        <Breadcom  />
                        <LeftBar/> 
                    </Col>
                    <Col sm={8}>
                        <Body name={name} address={address}/>
                    </Col>
                    <Col sm={2}>
                        <RightBar />
                    </Col>
                </Row>
            </Container>
           
        </>
    )
}
export default  Dashboard
