import { Link } from "react-router-dom";
import CartHeader from "../CartHeader";

function Payment(){
    return(
      <>
      <CartHeader  headerName="cart" headerName1="address" headerName2="payment"/>
      <div className="payment">
            <Link to="/Credit" className ="Link">CREDIT CARDS</Link>
            <Link to="/" className ="Link" ></Link>
            <Link to="/"className ="Link" ></Link>
            <Link to="/" className ="Link"></Link>
      </div>


      </>
    );
}

export default Payment;