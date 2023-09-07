import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
function RightBar() {
    return (
      <>
          <ListGroup>
            <ListGroup.Item>No style</ListGroup.Item>
            <ListGroup.Item variant="primary">Primary</ListGroup.Item>
            <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
            <ListGroup.Item variant="success">Success</ListGroup.Item>
            <ListGroup.Item variant="danger">Danger</ListGroup.Item>
            <ListGroup.Item variant="warning">Warning</ListGroup.Item>
            <ListGroup.Item variant="info">Info</ListGroup.Item>
            <ListGroup.Item variant="light">Light</ListGroup.Item>
            <ListGroup.Item variant="dark">Dark</ListGroup.Item>
        </ListGroup>
        
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

      </>
    );
  }
  
  export default RightBar;