import React from "react";
import SingleProduct from "./SingleProduct";
import { getapis } from "../api/storeapi";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import "../App.css"

const Product = () => {
  const{data,isError,isLoading}=useQuery(['products'],getapis)
  if (isError){
    return <h1>{Error.message}</h1>
  }
  if (isLoading){
    return <h1>Loading...</h1>
  }
  console.log(data)
  return (
    <>
    <div className="container-product">
      {data.map((prod)=>{return(
        <SingleProduct key={prod.id} apidata={prod}/>
      )})}
      </div>
    </>
  );
};

export default Product;
