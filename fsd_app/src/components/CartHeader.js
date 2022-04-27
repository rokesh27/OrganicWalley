import {useLocation} from 'react-router-dom'

import { Link } from 'react-router-dom';

import "./CartHeader.css"
import React from 'react';
function CartHeader(props){
    const location = useLocation();
    return(
        <div className='cart-header-container'><h6 style={{marginTop:"10px", marginBottom:"0px"}}>
    {(location.pathname === '/CartPage') && (<div ><div className='cart-header'>{props.headerName}</div>{' --------------- '}<div className='cart1-header'>{props.headerName1}</div>{' --------------- '}<div className='cart1-header'>{props.headerName2}</div></div>)}
    {(location.pathname === '/address2') && (<div ><Link to="/CartPage" className='linkdecoration'>{props.headerName}</Link>{' --------------- '}<div className='address-header'>{props.headerName1}</div>{' --------------- '}<div className='cart1-header'>{props.headerName2}</div></div>)}
    {(location.pathname === '/Credit') && (<div ><Link to="/CartPage" className='linkdecoration'>{props.headerName}</Link><Link to="/address2" className='linkdecoration'>{' --------------- '}{props.headerName1}</Link>{' --------------- '}<div className='payment-header'>{props.headerName2}</div></div>)}
    
    </h6>
    
    </div>
    )
}
export default CartHeader;