import { Link } from "react-router-dom";
import "./Header.css"
import Cart from "./Cart";
import SearchBar from '../search/SearchBar';
// import data from '../assets/products.json'
import { useEffect,useState } from "react";
import { FaShoppingCart } from "react-icons/fa"
import { BiUser } from "react-icons/bi"
import logoF from "../images/logoF.jpeg"
import { connect } from "react-redux";
import { getAllProductsByType } from "../utils/api";
function Header({ state }) {

    const [data, setData]=useState([])
    const WAIT_TIME = 1000;
      useEffect(() => {
        Promise.resolve(
            getAllProductsByType().then((res)=>res.data).then(
                (i)=>{
                    console.log(i)
                    setData(i.data)
                }
            )
        )}, [])
  


    return (

        <>
            <div className="navBar">

                <Link to="/" className="Link3"><img src={logoF} className="imglogo" /></Link>
                <Link to="/Fruits" style={{ textDecoration: 'none', fontFamily: 'cursive' }} className="Link1"><b>FRUITS</b></Link>
                <Link to="/Vegetables" style={{ textDecoration: 'none' }} className="Link1"><b>VEGETABLES</b></Link>
                <Link to="/Pulses" style={{ textDecoration: 'none' }} className="Link1"><b>PULSES</b></Link>
                <Link to="/Dairy" style={{ textDecoration: 'none' }} className="Link1"><b>DAIRY</b></Link>


            <SearchBar data={data.products} className="Link2" style={{ Width: "100%" }} />

                <div class="dropdown">
                    <button class="dropbtn"> <BiUser className="proimg" /></button>
                    <div class="dropdown-content">
                        {
                            (state.counterReducer1.loginSuccess==true)?(<Link to='/Profile' className="linkstyle"><a>Welcome {state.counterReducer1.user.UserName}</a></Link>):(<Link className="linkstyle">  <a href="">Welcome...!!<br />
                            To access account and manage orders
                            <Link to="/Login" >
                                <button className="empButton1"><b><h6>Login / SignUp</h6></b></button></Link>
                        </a></Link>)
                        }


                     
<Link to="/CusOrders" className="linkstyle">  <a href="">Your Orders</a></Link>
                       <Link to="/address3" className="linkstyle"> <a href="#">Your Adresses</a></Link>
                     <Link className="linkstyle">   <a href="#">Coupons</a></Link>
                     <Link className="linkstyle">   <a href="#">Gift Cards</a></Link>
                     <Link to='/sellerPage' className="linkstyle">    <a href="#">Sell On Organic Life</a></Link>
                    </div>
                </div>
                <Link to="/CartPage" className="cartLink"><FaShoppingCart style={{ color: "white" }} className="cartimg" />   <sup className="cartNumber"><Cart /></sup></Link>









            </div>

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        state: state
    };
};





export default connect(mapStateToProps)(Header);
