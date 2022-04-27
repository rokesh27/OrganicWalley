import Header from "./Header"
import Footer from "./Footer";
import "./Product.css"
import { connect } from "react-redux";
import store from "../store";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import { FaAngleDown } from "react-icons/fa";
import { getAllProducts, getAllProductsByType } from "../utils/api";

// import { useEffect,useState } from "react";
function Fruits({userDetails,userLogin }) {

  const [finalData, setUsersData1] = useState([]);
  useEffect(() => {
    Promise.resolve(
        getAllProductsByType('Fruit').then((res)=>res.data).then(
            (i)=>{
                console.log(i)
                setUsersData1(i.data)
            }
        )
    )}, [])

    
//    const morethan100= ({fruitsinfo}) =>{
//        let finalData= []
//        fruitsinfo.forEach(element => {
//            if (element.price >100) {
//             finalData[finalData.length]=element
//            }
//         setFinalData(finalData)   
//        });
//    }
//    const discount10= ({fruitsinfo}) =>{
//     let finalData= []
//     fruitsinfo.forEach(element => {
//         if (element.discount >=10 && element.discount<=20) {
//          finalData[finalData.length]=element
//         }
//      setFinalData(finalData)   
//     });
// }
// const discount20= ({fruitsinfo}) =>{
//     let finalData= []
//     fruitsinfo.forEach(element => {
//         if (element.discount >20 && element.discount<=30) {
//          finalData[finalData.length]=element
//         }
//      setFinalData(finalData)   
//     });
// }
// const low2high= ({fruitsinfo}) =>{
//     let finalData= fruitsinfo
    
//     let temp=[]
    
//     for (let i = 0; i < finalData.length; i++) {     
//         for (let j = i+1; j < finalData.length; j++) { 
//             console.log("this is"+ finalData[i].price) 
//             temp=[]   
//            if(finalData[i].price > finalData[j].price) {  
//                  console.log("this is if")
//                temp[0] = finalData[i];    
//                console.log("this is" +temp[0])
//                finalData[i] = finalData[j];    
//                finalData[j] = temp[0];    
//            }     
//         }     
//     } 

//      setFinalData(finalData)   
//      console.log( finalData)
// }
// const discount30= ({fruitsinfo}) =>{
//     let finalData= []
//     fruitsinfo.forEach(element => {
//         if (element.discount >30) {
//          finalData[finalData.length]=element
//         }
//      setFinalData(finalData)   
//     });
// }
//    const lessthan100= ({fruitsinfo}) =>{
//     let finalData= []
//     fruitsinfo.forEach(element => {
//         if (element.price <=100) {
//          finalData[finalData.length]=element
//         }
//      setFinalData(finalData)   
//     });
// }




    const addToCart=(idValue,userDet)=>{
        store.dispatch({type:"ADD_TO_CART",payload:{idV:idValue,userInfo:userDet}})
    }

    return (
        <>
            <div className="posfix"> <Header /></div>

           {/*} <div className="colum1">
      
            <div className="container-fulid   mx-2" style={{ width: '100%', background: 'white' }}>
        <div className="row mt-5 mx-2" style={{ width: '100%', background: 'white' }}>
          
<div className="headi1"><b>Filters</b></div>
          <div className="col-md-3"  style={{ width: '90%', background: 'white' }} >
            <div className=" btn btn-warning w-100 mb-2" id="dropdown1" style={{ width: '100%', background: 'white' }}>
              <a

               

                role="button"
                id="dropdown1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ width: '100%', color: 'black', background: 'white', border: "none", textAlign: 'left' }}
              >
               <b> Price </b><FaAngleDown className="iconpos"/>
              </a>
              <div id="dropdown-content1" >
                <ul>
                  <li>
                    <button
                      className="dropdown-item btn btn-warning"
                      onClick={() => lessthan100({fruitsinfo})}
                    >
                      Less than 100/-
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item btn btn-warning"  onClick={() => morethan100({fruitsinfo})}>
                      More than 100/-
                    </button>
                  </li>
                </ul></div>
            </div>
            <div className=" btn btn-warning w-100 mb-2" id="dropdown1" style={{ width: '100%', background: 'white' }}>
              <a

               

                role="button"
                id="dropdown1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ width: '100%', color: 'black', background: 'white', border: "none", textAlign: 'left' }}
              >
               <b> Price </b><FaAngleDown className="iconpos"/>
              </a>
              <div id="dropdown-content1" >
                <ul>
                  <li>
                    <button
                      className="dropdown-item btn btn-warning"
                      onClick={() => low2high({fruitsinfo})}
                    >
                      Lowest to Highest
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item btn btn-warning">
                      Highest to Lowest
                    </button>
                  </li>
                </ul></div>
            </div>
            


            <div className=" btn btn-warning w-100 mb-2" id="dropdown2" style={{ width: '100%', background: 'white' }} >
              <a
               
                style={{ width: '100%', color: 'black', background: 'white', border: "none", textAlign: 'left' }}
                role="button"
                id="#dropdown2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              <b>  Discount Range</b> <FaAngleDown className="iconpos"/>
              </a>
              <div id="dropdown-content2">              <ul

                aria-labelledby="dropdownMenuLink"
              >
                <li>
                  <button
                    className="dropdown-item btn btn-warning"
                    onClick={() => discount10({fruitsinfo})}
                    href="/#"
                  >
                    10% - 20%
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item btn btn-warning"
                    onClick={() =>discount20({fruitsinfo})}
                    href="/#"
                  >
                    20% - 30%
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item "
                    onClick={() =>discount30({fruitsinfo})}
                    href="/#"
                  >
                    30% and above
                  </button>
                </li>
              </ul></div>

            </div>

            <div className=" btn btn-warning w-100 mb-2" id="dropdown3" style={{ width: '100%', background: 'white', textAlign: 'left' }}>
              <a
                style={{ width: '100%', color: 'black', background: 'white', border: "none", textAlign: 'left' }}
                
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              
               <b> Category</b>   <FaAngleDown className="iconpos"/>
              </a>
              <div id="dropdown-content3">
                <ul

                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <button
                      className="dropdown-item btn btn-warning"
                      
                     
                    >
                    Fruits
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item btn btn-warning"
                      onClick={() =>morethan100({fruitsinfo})}
                     
                    >
                      Vegetables
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item "
                      onClick={() => morethan100({fruitsinfo})}
                     
                    >
                      Pulses
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item "
                      onClick={() => morethan100({fruitsinfo})}
                    
                    >
                   <Link to="/Dairy">  Dairy</Link> 
                    </button>
                  </li>
                </ul></div>
            </div>

            <button style={{ width: '100%', color: 'black', background: 'white', textAlign: 'left', paddingLeft: '25px' }}
              className="btn btn-warning w-100 mb-2"
              id="dropdown2"
              onClick={() => setFinalData(fruitsinfo)}
            >
             <b> All</b>
            </button>

          </div>
        </div>
      </div>



    </div> */}
            <div className="colum2">
            {finalData.map((f) =>
                <div className="gallery" >

                   <Link to={{
              pathname: "/Products",
              state: { product:f },
            }}> <img src={f.Image} className="fruitImg" alt="fruitImg" /></Link>
                    <div className="desc">
                        {f.Full_name}<br/>
                        {f.desc}<br/>
                        
<b>{"₹"} {f.price - f.price*f.discount/100}</b> {"  "}<s>{f.price}</s>({f.discount}{"% OFF"})
{(userLogin==true)?(<button className="sbutton" onClick={()=>addToCart(f.id,{userDetails})}>ADD TO CART</button>):(<Link to='/Login'><button className="sbutton">ADD TO CART</button></Link>)}    
                    </div>
                </div>
            )  }
            </div>
            <Footer/>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        userLogin:state.counterReducer1.loginSuccess,
        userDetails:state.counterReducer1.user,
      //  fruitsinfo: state.shop.fruits
    };
};

export default connect(mapStateToProps)(Fruits);