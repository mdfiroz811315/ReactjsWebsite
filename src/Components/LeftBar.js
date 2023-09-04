import Nav from 'react-bootstrap/Nav';
function LeftBar() {
    return (
      <>
         <Nav defaultActiveKey="/dashboard" className="flex-column">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav>
      </>
    );
  }
  
  export default LeftBar;