import { Link } from "react-router-dom"
import "./EmptyCart.css"
import Header from "./Header"
import CartHeader from "./CartHeader"
function EmptyCart(){
    return(
        <>
         <CartHeader  headerName="C A R T " headerName1=" A D D R E S S " headerName2=" P A Y M E N T"/>
<div className="posfix"> <Header /></div>
       
        <div className="container1">
            
            <img className="empImg" src="https://i1.wp.com/www.huratips.com/wp-content/uploads/2019/04/empty-cart.png?resize=603%2C288&ssl=1" alt="empImg"/>
          <div className="empDes">  <h4>Hey, it feels so light</h4>
            <p style={{"color":"grey"}}>There is nothing in your cart. Let's add some healthy items</p>
           <Link to="/"> <button className="empButton"><b>ADD ITEMS FROM FAVOURITES</b></button></Link></div>
        </div>
        
        </>
    )
}
export default EmptyCart