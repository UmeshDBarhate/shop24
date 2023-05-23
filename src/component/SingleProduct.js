import React from 'react'
import { Card,Button, } from "react-bootstrap";
import { cart } from './atoms';
import { Atom,useAtom } from 'jotai';

const SingleProduct = ({apidata}) => {
  const[addtocart,setAddtocart]=useAtom(cart)

  const item= {
    "id":apidata.id,
    "itemName":apidata.title,
    "itemPrice":apidata.price,
  }
    
  return (
    <>
    <Card style={{ width: "18rem" }} >
    <Card.Img variant="top" src={apidata.image} />
    <Card.Body>
      <Card.Title>{apidata.title}</Card.Title>
      
      <Card.Text>{apidata.price}</Card.Text>
      <Card.Text>{apidata.rating.rate}</Card.Text>
      
      <Button variant="primary" className="d-fex align-item-center" onClick={()=>setAddtocart([...addtocart,item])}>Add To Cart</Button>
     
    </Card.Body>
  </Card> 


    </>
    
  )
}

export default SingleProduct

