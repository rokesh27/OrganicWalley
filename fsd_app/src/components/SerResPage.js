import Header from "./Header"
import store from "../store"
function SerResPage(props){
    const addToCart=(idValue)=>{
        store.dispatch({type:"ADD_TO_CART",payload:{id:idValue}})
    }
    return(
        <>
        <Header/>
        <div className="gallery" >
                    <img src={props.resData.img} className="fruitImg" alt="img" />
                    <div className="desc">
                        {props.resData.name}<br/>
                        {props.resData.desc}<br/>
                        {"₹"}{props.resData.price}<br/>
                        <button className="sbutton" onClick={()=>addToCart(props.resData.key)}>ADD TO CART</button>
                    </div>
                </div>

        

        </>
    )
    }
    export default SerResPage