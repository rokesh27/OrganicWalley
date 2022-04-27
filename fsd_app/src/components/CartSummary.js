import { useEffect, useState } from "react"
import { connect } from "react-redux"

import './cartSummary.css'
function CartSummary({cart}){
    const[totalPrice, setTotalPrice] = useState(0)
    useEffect(()=> {
        let price = 0
        cart.forEach(item => {
            price = price + item.qty*item.price;
            
        });
        setTotalPrice(price)
    },[cart, totalPrice])
     
    let Discount = 0
   
    cart.forEach(item => {
        Discount+= (item.price*item.qty*item.discount)/100
        
    });
    let DeliveryFee = 0
    if (totalPrice<1000) {
        DeliveryFee = 50
    } else{
        DeliveryFee = 0
    }
    let TotalAmount = totalPrice - Discount + DeliveryFee



    return(
        <>
           <div className="cartSummary">
               <ul className="cartSummaryUl">
                   <li style={{"borderBottom":"ridge"}}>PRICE DETAILS ({cart.length} items)</li><br/>
                   <li>SUBTOTAL  <span>{totalPrice}</span>
                   </li><br/>
                   <li>DISCOUNT  <span>{Discount}</span></li><br/>
                   <li>Delivery Fee   <span>{DeliveryFee}</span></li><br/>
                   <li style={{"borderBottom":"ridge", "borderTop":"ridge", "padding":"5px"}}>TOTAL   <span>{TotalAmount}</span></li><br/>
                   <li style={{"color":"green"}}><b>You will save ₹ {Discount} on this order</b></li><br/>
                   </ul>
           </div>
             
        </>
    )
}



const mapStateToProps=(state)=>{
    return{
        cart:state.shop.cart
    }
}
export default connect(mapStateToProps)(CartSummary)
