import { Link } from "react-router-dom";
import "../components/Header.css"
import logoF from "../images/logoF.jpeg"

import { connect } from "react-redux";


function SellerNavbar() {
   
    return (

        <>
            <div className="navBar">
                <Link to="/" className="Link3"><img src={logoF} alt="img" className="imglogo"  /></Link>
                <Link to="/yourProducts" style={{ textDecoration: 'none', fontFamily: 'cursive' }} className="Link1"><b>YOUR PRODUCTS</b></Link>
                <Link to="/sellerOrders" style={{ textDecoration: 'none' }} className="Link1"><b>YOUR ORDERS</b></Link>
                </div>

        </>
    )
}



  
  export default SellerNavbar;
  