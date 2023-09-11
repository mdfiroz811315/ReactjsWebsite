import { Container } from "react-bootstrap"

export default function Footer() {
  ////////////////

  const loginUser = (e)=>{
    e.preventDefault()
  }


  ///////////////////
  return (
      <>
      <Container>
          <form  onSubmit={loginUser}>
            <h1>footer form Example </h1>


          add your fields here


          <button type="submit" className="registerbtn">Submit</button>
          </form>
        </Container>
      </>
  )
}
 
