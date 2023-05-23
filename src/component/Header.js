import React from 'react'
import {Navbar,Form,Button,FormControl,Nav} from "react-bootstrap"
import { searchbyquery } from './atoms'
import { useAtom } from 'jotai'
import { Link } from 'react-router-dom'

const Header = () => {
  const [searchprod , setSearchprod]= useAtom(searchbyquery)
  return (
    <>
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      
    </Nav>
    <Form className="d-flex">
      <FormControl type="text" placeholder="Search" className="mr-sm-2" value={searchprod} onChange={(e)=>setSearchprod(e.target.value)}/>
      <Button variant="outline-light">Search</Button>
    </Form>
    <Link to='/cart'><Button variant="outline-success">Cart</Button></Link>
  </Navbar>
    </>
  )
}

export default Header