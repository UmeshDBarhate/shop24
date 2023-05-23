import React from "react";
import { Card, Button } from "react-bootstrap";
import { cart } from "./atoms";
import { useAtom } from "jotai";

const Cart = () => {
  const [cartitem,setCartitem] = useAtom(cart);
   console.log(cartitem)
  
   const deleteitem=(id)=>{
    const filteritem = cartitem.filter((item)=>{return item.id !== id})
    setCartitem(filteritem)
  }
  return (
    <>
      {cartitem.map((prod) => {
        return (
          
          <Card key={prod.id}>
            <Card.Header>{prod.id}</Card.Header>
            <Card.Body>
              <Card.Title>{prod.itemName}</Card.Title>
              <Card.Text>
                {prod.itemPrice}
              </Card.Text>
              <Button variant="primary" onClick={()=>
                deleteitem(prod.id)}>Delete</Button>
            </Card.Body>
          </Card>
          
        );
      })}
    </>
  );
};

export default Cart;

