import { connect } from "react-redux"
import CartHeader from "./CartHeader"
import './CartPage.css'
import CartSummary from './CartSummary'
import store from "../store"
import {CloseButton} from "react-bootstrap"

import {Link} from "react-router-dom"

function CartPage({ cart }) {
    const RemCart=(idValue)=>{
        store.dispatch({type:"REM_CART",payload:{idV:idValue}})
    }
    const Transfer=(cartVal)=>{
        store.dispatch({type:"transfer",payload:{cart:cartVal}})
    }
    const addQty=(idValue,qty)=>{
        if (qty<10) {
            store.dispatch({type:"ADD_QTY",payload:{idV:idValue}})
        }
       
    }
    const subQty=(idValue,qty)=>{
        if (qty>1) {
            store.dispatch({type:"SUB_QTY",payload:{idV:idValue}})  
        }
        
    }
    return (
        <>      
        <CartHeader  headerName="C A R T " headerName1=" A D D R E S S " headerName2=" P A Y M E N T"/>
        <div className="c101">

            {
                cart.map((c)=>
                <div className="product01">
                    <img src={c.img} className="productImg01" alt="prodImg01"/>
                    <div className="desc01">
                    <h5 ><b>{c.Full_name}</b></h5>
                    <p className="cartp01" style={{"color":"grey",}}>{c.desc}</p>
                    <p className="cartp01" style={{"color":"grey", "marginTop":"-12px", "fontSize":"small"}}>{"Soldby: "}{c.SoldByEmail}</p>

                    
                    
                    {(c.qty == 1) ? (<button onClick={()=>RemCart(c.id)} className="adjbutton02"><CloseButton/></button>):(<button onClick={()=>subQty(c.id,c.qty)} className="adjbutton01">-</button>)}<p className="qtybut01">{c.qty}</p><button onClick={()=>addQty(c.id,c.qty)} className="adjbutton01">+</button><br/><br/>
                   <b>{"₹"} {c.price - c.price*c.discount/100}</b> {"  "}<s style={{"color":"gray"}}>{"₹"}{c.price}</s>{"  "}<b style={{"color":"green"}}>({c.discount}{"% OFF"})</b><br/>
                   <button onClick={()=>RemCart(c.id)} className="rembut01"><CloseButton  /></button>
                    </div>
                    
                </div>
                
                )
            }
                
        </div>
            

                <div className="c201">
                    <CartSummary/>
                   
                    <Link to="/address2"><button className="checkoutButton01" onClick={()=>Transfer(cart)}><b>PLACE ORDER</b></button></Link>

                </div>             
        </>
    )
}




const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(CartPage)