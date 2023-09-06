import Card from 'react-bootstrap/Card';
import Career from './Career';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
function Body({address,name}) {  // destruction
  let txt = "this is my text"
  const [parentData, setParentData] = useState('');
  setParentData("Data Got Updated In Parent Components");
  const parentToChild =()=>{
    alert("api got called")
    setParentData("Data Got Updated In Parent Components")
  }
 
    return (
      <>
        <Card >
            <Card.Title>This Page is Build by {name} who is from {address}</Card.Title>
            <Card.Text>
              <p>Data from Child Component {parentData} </p>
              <Career parentToChild={parentData} />

              <Button primary onClick={()=>parentToChild()} >Click Me</Button>
              <br/>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.

              <input type="text" value={txt} />
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