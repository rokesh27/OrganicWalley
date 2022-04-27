import { Link } from "react-router-dom";


import axios from "axios";

import Swal from 'sweetalert2';

import AdminNavbar from "./AdminNavbar"

import { useState, useEffect } from "react";
import { getAllProducts, getAllProductsByType } from "../utils/api";
function SellerProducts({User}){
  const [data, setData]=useState([])
  const WAIT_TIME = 1000;
    useEffect(() => {
      Promise.resolve(
        getAllProductsByType('Fruit').then((res)=>res.data).then(
              (i)=>{
                  console.log(i)
                  setData(i.data)
              }
          )
      )}, [])

  

    function OpenPop() {
        Swal.fire(
            'Good job!',
            'You Removed successfully!',
            'success'
        )
    }
    const remove =  (key) => {
        const axios = require('axios');
        
            
                axios.delete(`http://localhost:9000/api/products/${key}`)
            .then(resp => {
                console.log(resp.data)
            }).catch(error => {
                console.log(error);
            });   
    }

    return(
        <>
        <AdminNavbar/>
        <Link to='/addProductsForm'><button className="empButton01">ADD PRODUCTS</button></Link>
                {
                    data.map((c)=>
                    <div className="product01">
                        <img src={c.Image} className="productImg01" alt="prodImg01"/>
                        <div className="desc01">
                        <h5 ><b>{c.Full_name}</b></h5>
                        <p className="cartp01" style={{"color":"grey",}}>{c.desc}</p>
                        <p className="cartp01" style={{"color":"grey", "marginTop":"-12px", "fontSize":"small"}}></p>

                        
                        
                        <b>{"₹"} {c.price - c.price*c.discount/100}</b> {"  "}<s style={{"color":"gray"}}>{"₹"}{c.price}</s>{"  "}<b style={{"color":"green"}}>({c.discount}{"% OFF"})</b><br/>
                      <button onClick={() => {remove(c.id); OpenPop();}} className="empButton01" >REMOVE</button>
                       
                        </div>
                        
                    </div>
                    
                    )
        
                }
                
                
        
     
        </>
    )
}

export default SellerProducts