import { useLocation } from "react-router-dom";
import Header from "./Header";
import "./productsPage.css"
import store from "../store";
import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import MultiCarousel from "./MultiCarousel";
function Products(props){
    const location = useLocation()
    const ProductInfo = location.state.product
    const addToCart=(idValue)=>{
        store.dispatch({type:"ADD_TO_CART",payload:{idV:idValue}})
    }
    return(
        <>
       <div className="posfix"> <Header /></div>

        
        <div class="container-product">
        <Carousel className="main-slide">
                <div>
                    <img src={ProductInfo.img} className="childone" height="300px" width="100px" />
                  
                </div>
                <div>
                    <img src={ProductInfo.img} height="300px" width="100px" />
                 
                </div>
                <div>
                    <img src={ProductInfo.img} height="300px" width="100px" />
                   
                </div>
                <div>
                    <img src={ProductInfo.img} height="300px" width="100px" />
                   
                </div>
            </Carousel>
      
        </div>

        <div class="col2">
        <h1>{ProductInfo.Full_name}</h1>
        
            <p>Price:<b>{"₹"} {ProductInfo.price - ProductInfo.price*ProductInfo.discount/100}</b> {"  "}<s>{ProductInfo.price}</s>({ProductInfo.discount}{"% OFF"})</p>
        
            <p className="cartp" style={{"color":"grey",}}>{ProductInfo.desc}</p>
                    <p className="cartp" style={{"color":"grey", "marginTop":"-12px", "fontSize":"small"}}>{"Soldby: "}{ProductInfo.SoldBy.UserName}</p>
        <button onClick={()=>addToCart(ProductInfo.key)} className="sbutton">Add to cart</button>
        <Link to="/Address"  ><button className="sbutton">  BUY NOW </button></Link>
        </div>
        <div className="cssadjuster">
    <MultiCarousel className="corousel2"/></div>
        </>

    )
}
export default Products;
