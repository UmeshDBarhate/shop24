import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { Highttolow,rating}  from "./atoms"
import { useAtom } from 'jotai'

const Filter = () => {
  const [hightolowprod,setHightolowprod]=useAtom(Highttolow)
  const[productbyrating , setProductbyrating] = useAtom(rating)
  
  
  
 

  return (
    <>
      <ButtonGroup vertical>
        <Button onClick={()=>
          setHightolowprod(!hightolowprod)
        }>{hightolowprod?"High to Low":"Low to High"}</Button>
       
        <Button onClick={()=>{
          setProductbyrating(!productbyrating)
        }}>{productbyrating?"worst to high" :"high to worse"}</Button>
      </ButtonGroup>
    </>
  );
};

export default Filter;
