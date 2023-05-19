import React from 'react'
import { Card,Button, } from "react-bootstrap";

const SingleProduct = ({apidata}) => {
    console.log(apidata)
  return (
    <>
    <Card style={{ width: "18rem" }} >
    <Card.Img variant="top" src={apidata.image} />
    <Card.Body>
      <Card.Title>{apidata.title}</Card.Title>
      <Card.Text>
        {apidata.description}
      </Card.Text>
      
      <Button variant="primary" className="d-fex align-item-center">Add To Cart</Button>
     
    </Card.Body>
  </Card> 


    </>
    
  )
}

export default SingleProduct

