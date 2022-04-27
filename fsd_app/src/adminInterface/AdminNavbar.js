import { Link } from "react-router-dom";
import "../components/Header.css"
import logoF from '../images/logoF.jpeg'

import { connect } from "react-redux";


function adminNavbar() {
   
    return (

        <>
            <div className="navBar">
                <Link to="/" className="Link3"><img src={logoF} className="imglogo" /></Link>
                <Link to="/Users" style={{ textDecoration: 'none', fontFamily: 'cursive' }} className="Link1"><b>USERS</b></Link>
                <Link to="/Orders" style={{ textDecoration: 'none' }} className="Link1"><b>ORDERS</b></Link>
                <Link to="/SellerProducts" style={{ textDecoration: 'none' }} className="Link1"><b>SELLER PRODUCTS</b></Link>
               
            </div>

        </>
    )
}



  
  export default adminNavbar;
  