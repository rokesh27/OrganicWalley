import Data from '../../../fsd_app/src/assets/DB.json'
import SellerNavbar from './SellerNavbar'
import { connect } from 'react-redux'
function sellerOrders({User}){
    let orderData=[]
    let finalOrders=[]
    Data.orders.forEach(item => {
        for (let index = 0; index < item.length; index++) {
            const element = item[index];
           orderData[orderData.length]=element
        }
    });
   
    
    for (let index = 0; index < orderData.length; index++) {
        const element = orderData[index];
        if(element.SoldBy.email==User.email)
        finalOrders[finalOrders.length]=element  
    }
    return(
        <>
        <SellerNavbar/>
        {
            finalOrders.map((c)=>
            <div className="product01">
                <img src={c.img} className="productImg01" alt="prodImg01"/>
                <div className="desc01">
                <h5 ><b>{c.Full_name}</b></h5>
                <p className="cartp01" style={{"color":"grey",}}>{c.desc}</p>
                <p className="cartp01" style={{"color":"grey", "marginTop":"-12px", "fontSize":"small"}}>{"Soldby: "}{c.SoldBy.UserName}</p>

                
                
                <b>{"₹"} {c.price - c.price*c.discount/100}</b> {"  "}<s style={{"color":"gray"}}>{"₹"}{c.price}</s>{"  "}<b style={{"color":"green"}}>({c.discount}{"% OFF"})</b><br/>
        
               
                </div>
                
            </div>
            
            )

        }
        
        </>
    )
}
const mapStateToProps=(state)=>{
    return{
        User:state.counterReducer1.user
    }
}
export default connect(mapStateToProps)(sellerOrders)