import Card from 'react-bootstrap/Card';
function Body({address,name}) {  // destruction
    return (
      <>
        <Card >
            <Card.Title>This Page is Build by {name} who is from {address}</Card.Title>
            <Card.Text>
              <br/>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.


              <br/>
              <div>hhhhhhhhh</div>
              <br/>
              <div>hhhhhhhhh</div> <br/>
              <div>hhhhhhhhh</div> <br/>
              <div>hhhhhhhhh</div> <br/>
              <div>hhhhhhhhh</div> <br/>
              <div>hhhhhhhhh</div> <br/>
              <div>hhhhhhhhh</div> <br/>
              <div>hhhhhhhhh</div> <br/>
              <div>hhhhhhhhh</div> <br/>
              <div>hhhhhhhhh</div> <br/>
              <div>hhhhhhhhh</div> <br/>
              <div>hhhhhhhhh</div>
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
   
        </Card>
      </>
    );
  }
  
  export default Body;