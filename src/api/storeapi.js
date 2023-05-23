import axios from 'axios'

//create base url
export const api= axios.create({
    baseURL:"https://fakestoreapi.com"
})
//get request from api
export const getapis =async()=>{ 
    const response = await api.get("/products")
    return response.data
}
