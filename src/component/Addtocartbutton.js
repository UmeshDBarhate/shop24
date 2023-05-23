import React from 'react'
import { addedincart,cart } from './atoms';
import { useAtom } from 'jotai';
import { Button } from 'react-bootstrap';

const Addtocartbutton = (apidata) => {
const[add,setAdd]=useAtom(addedincart)
const[addtocart,setAddtocart]=useAtom(cart)


const item= {
    "id":apidata.id,
    "itemName":apidata.title,
    "itemPrice":apidata.price,
  }
  return (
    <Button variant="primary" className="d-fex align-item-center" id="addtocart" disabled={add} onClick={()=>{

        setAddtocart([...addtocart,item]);
        setAdd(true)
    }}>{add?'Added to cart':"Add To Cart"}</Button>
  )
}

export default Addtocartbutton