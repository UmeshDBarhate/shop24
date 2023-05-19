import React from 'react'
import {Navbar,Form,Button,FormControl,Nav} from "react-bootstrap"
const Header = () => {
  return (
    <>
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      
    </Nav>
    <Form className="d-flex">
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
    </>
  )
}

export default Header