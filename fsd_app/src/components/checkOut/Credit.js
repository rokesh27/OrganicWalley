
import './Payment.css'
import CartHeader from '../CartHeader';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
function Credit({OrderInfo}){
  
let history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault(); 
    fetch('http://localhost:8001/orders',{
        method:'POST',
        headers:{'Content-Type':"application/json"},
        body:JSON.stringify(OrderInfo)
    }).then(()=>{
        console.log('new address added')
    })
    history.push("/CusOrders")
    }
    return(

      <>
       <CartHeader  headerName="C A R T " headerName1=" A D D R E S S " headerName2=" P A Y M E N T"/>
      <div className="credit" onSubmit={handleSubmit}>
        <form>
         <h2>ACCEPTED CARDS</h2>
           
           <label for="cname">Name on Card</label><br></br>
           <input className="pay" type="text" id="cname" name="cardname" placeholder="ENTER NAME"/><br></br>
           <label for="ccnum">Credit card number</label><br></br>
           <input className="pay" type="text" id="ccnum" name="cardnumber" placeholder="ENTER CARD NUMBER"/><br></br>
           <label for="expmonth">Exp Month</label><br></br>
           <input className="pay" type="text" id="expmonth" name="expmonth" placeholder="Enter expire month"/><br></br>

           <div class="row">
             <div class="column">
                 
               <label  for="expyear">Exp Year</label><br></br>
               <input className="pay" type="text" id="expyear" name="expyear" placeholder="expire year"/>
             </div>
             <div class="column">
                 
               <label for="cvv">CVV</label><br></br>
               <input className="pay"  type="text" id="cvv" name="cvv" placeholder="CVV NUMBER"/><br></br>
               
                 
             </div>
           </div>
          
       <button  className="paymentbtn" type="submit">PAY NOW</button>
       </form>
           </div>
           
      </>
    )
}
const mapStateToProps = (state) =>{
   
  return {
    
   OrderInfo:state.shop.orders,
  
  }
};
export default connect(mapStateToProps)(Credit)