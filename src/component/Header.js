import React from "react";
import {
  Navbar,
  Form,
  Button,
  FormControl,
  Nav,
  Badge,
  Row,
  Container,
  Col,
} from "react-bootstrap";
import { cart, searchbyquery } from "./atoms";
import { useAtom } from "jotai";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const Header = () => {
  const [searchprod, setSearchprod] = useAtom(searchbyquery);
  const[total]=useAtom(cart)
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home" className="">
          Navbar
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/"><Button>Home</Button></Link>
          <Link to="/cart">
           <Button variant="success">Cart <Badge variant="light">{total.length}</Badge></Button>
        </Link>
        </Nav>

        <Form className="d-flex">
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={searchprod}
            onChange={(e) => setSearchprod(e.target.value)}
          />
          <Button variant="outline-light">Search</Button>
        </Form>

        
      </Navbar>
    </>
  );
};

export default Header;
