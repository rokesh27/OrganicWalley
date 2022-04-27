
import './App.css';
import HomePage from './components/HomePage';
import ProfilePic from './components/Login/ProfilePic';
import Fruits from './components/Fruits';
import Vegetables from './components/Vegetables';
import Pulses from './components/Pulses';
import Dairy from './components/Dairy';
import CartPage from './components/CartPage';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import Address from '../src/components/checkOut/Address'
import Payment from '../src/components/checkOut/Payment'
import Credit from './components/checkOut/Credit';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import EmptyCart from './components/EmptyCart';
import { connect } from "react-redux"
import Products from './components/Products';
import SellerNavbar from './sellerInterface/SellerNavbar';
import yourProducts from './sellerInterface/YourProducts';
import AddProductsForm from './sellerInterface/AddProductsForm';
import AdminNavbar from './adminInterface/AdminNavbar';
import Orders from './adminInterface/Orders';
import users from './adminInterface/users';
import sellerOrders from './sellerInterface/sellerOrders';
import SearchBar from './search/SearchBar';
import data from './assets/products.json';
import AdminLogin from './adminInterface/AdminLogin';
import CusOrders from './components/CusOrders';
import address2 from './components/checkOut/address2';
import SellerProducts from './adminInterface/SellerProducts';
import address3 from './components/checkOut/address3';
import ProductsEditForm from 'D:/fsd_app/fsd_app/src/sellerInterface/ProductsEditForm.js'
import ProEdit from './sellerInterface/ProEdit';
function App({state}) {
  
  return (
   <>
   <Router>
     
     <Switch>
       <Route exact path="/"><HomePage/></Route>
        <Route path="/Fruits" component={Fruits}/>
        <Route path="/Vegetables" component={Vegetables}/>
        <Route path="/Pulses" component={Pulses}/>
        {(state.shop.cart.length > 0) ? (
    <Route path ="/CartPage" component={CartPage}/>
    ):<Route path = "/CartPage" component={EmptyCart}/>}
        <Route path="/Login" component={Login}/>
        <Route path="/signUp" component={SignUp}/>
        <Route path="/Dairy" component={Dairy}/>
        <Route path="/Address" component={Address}/>
        <Route path="/address2" component={address2}/>
        <Route path="/address3" component={address3}/>
        <Route path="/Payment" component={Payment}/>
        <Route path="/Credit"  component={Credit}/>
        <Route path="/Products"  component={Products}/>
        {(state.counterReducer1.loginSuccess==true) ? (
     <Route path="/sellerPage"  component={SellerNavbar}/>
    ): <Route path="/sellerPage"  component={Login}/>
        }
        <Route path="/yourProducts"  component={yourProducts}/>
        <Route path="/addProductsForm"  component={AddProductsForm}/>
        <Route path="/adminNavbar" component={AdminNavbar}/>
        <Route path="/Users" component={users}/>
        <Route path="/Orders" component={Orders}/>
        <Route path="/SellerProducts" component={SellerProducts}/>
        <Route path="/CusOrders" component={CusOrders}/>
        <Route path="/sellerOrders" component={sellerOrders}/>
        <Route path="/admin" component={AdminLogin}/>
        <Route path="/Profile" component={ProfilePic}/>
        <Route path="/ProductsEdit" components={ProductsEditForm}/>
        <Route path="/ProEdit" components={ProEdit}/>
        
     </Switch>
   </Router>
   </>
  );
  
}
const mapStateToProps = (state) => {
  return {
     state:state
  };
};

export default connect(mapStateToProps)(App);

