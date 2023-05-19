import React from 'react'
import { Container, Row ,Navbar ,Col} from "react-bootstrap"
import "../App.css";

const Footer = () => {
  return (
   <>
   <Container className=" border border-dark  " fluid>
    <Row>
        <Col xs lg="9" className='p-1 footer-1'>
        <Navbar.Brand href="#home">Shop 24</Navbar.Brand>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
              Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam,
              est atque cumque eum delectus sint!</p>
        </Col>
        <Col xs lg="3" className='p-1'>
        <h4>Contact us</h4>
            <p>New York, NY 10012, US</p>
            <p>info@example.com</p>
            <p>+ 01 234 567 88</p>
        </Col>
            
    </Row>
    <Row>

    </Row>
   </Container>
   </>
  )
}

export default Footer