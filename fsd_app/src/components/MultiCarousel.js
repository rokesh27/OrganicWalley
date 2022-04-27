import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Product.css'
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import store from "../store"

import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";


const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: 3,
  // infinite={false}
  // slidesToScroll={3}
  centerMode: true,
  centerPadding: "170px",
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

function MultiItemCarousel ({pulsesInfo,userDetails,userLogin}) {
    const addToCart=(idValue,userDet)=>{
        store.dispatch({type:"ADD_TO_CART",payload:{id:idValue,userInfo:userDet}})
    }
  return (
    <div style={{ margin: "" }} className="carousel">
      <h1>Basic carousel</h1>
      <Slider {...carouselProperties}>
      {pulsesInfo.map((f)=>
        <div className="gallery" style={{width:"200px"}}>
        <Link to={{
              pathname: "/Products",
              state: { product:f },
            }}><img src={f.img} className="fruitImg" alt="fruitItem"  /></Link>
        <div className="desc">
        {f.name}<br/>
                        {f.description}<br/>
                        
<b>{"₹"} {f.price - f.price*f.discount/100}</b> {"  "}<s>{f.price}</s>({f.discount}{"% OFF"})
{(userLogin==true)?(<button className="sbutton" onClick={()=>addToCart(f.key,{userDetails})}>ADD TO ART</button>):(<button className="sbutton"><Link to='/Login'>ADD TO CART</Link></button>)}
        
        </div>
        
        </div>
        )}
      </Slider>
    </div>
  );
};

const mapStateToProps = (state) =>{
    return {
        userDetails:state.counterReducer1.user,
        pulsesInfo:state.shop.fruits
    };
  };
  export default connect(mapStateToProps)(MultiItemCarousel);