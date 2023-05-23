import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Product from "./Product"
import Filter from "./Filter";

const Home = () => {
  return (
    <Container fluid className="p-3  d-flex align-items-stretch">
          <Row>
            <Col xs lg="2">
              <Filter />
            </Col>
            <Col xs lg="10" >
              <Product />
            </Col>
          </Row>
        </Container>
  )
}

export default Home