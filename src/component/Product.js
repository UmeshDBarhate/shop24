import React from "react";
import SingleProduct from "./SingleProduct";
import { getapis } from "../api/storeapi";
import {
  useQuery,
} from "@tanstack/react-query";
import "../App.css"
import { Highttolow, rating ,searchbyquery} from "./atoms";
import {  useAtom } from 'jotai'

const Product = () => {
  const{data,isError,isLoading}=useQuery(['products'],getapis)
  const [hightolowprod]=useAtom(Highttolow)
  const[productbyrating ]= useAtom(rating)
  const [searchprod ]= useAtom(searchbyquery)
 

  const cond=hightolowprod
  const Filterbycondition =()=>{
    let filterproducts= data
    
    if (cond){
      console.log("low to high")
      //high to low
      filterproducts = filterproducts.map((prod)=>prod).sort((a,b)=>a.price - b.price)
      if (productbyrating){
        filterproducts = filterproducts.map((prod)=>prod).sort((a,b)=>a.rating.rate - b.rating.rate)
      }else{
        filterproducts = filterproducts.map((prod)=>prod).sort((a,b)=>b.rating.rate - a.rating.rate)
      }
      
    }else{
      console.log("high to low")
      //low to high
      filterproducts = filterproducts.map((prod)=>prod).sort((a,b)=>b.price - a.price)
      if (productbyrating){
        filterproducts = filterproducts.map((prod)=>prod).sort((a,b)=>a.rating.rate - b.rating.rate)
      }else{
        filterproducts = filterproducts.map((prod)=>prod).sort((a,b)=>b.rating.rate - a.rating.rate)
      }
      
    }
    if (searchprod){
      console.log(searchprod)
      filterproducts = filterproducts.filter((prod)=>prod.title.toLowerCase().includes(searchprod))
    }
    return filterproducts
  }
   
  if (isError){
    return <h1>{Error.message}</h1>
  }
  if (isLoading){
    return <h1>Loading...</h1>
  }
  console.log(Highttolow)

  return(
    <>
    
    <div className="container-product">
      {Filterbycondition().map((prod)=>{return(
        <SingleProduct key={prod.id} apidata={prod}/>
      )})}
      </div>
    
    </>
  )
  }
export default Product;
