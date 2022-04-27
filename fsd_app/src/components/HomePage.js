import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Carousel from "./CarouselContainer"
import "./Product.css"
import icon1 from "../images/icon1.png"
import icon2 from "../images/icon2.png"
import icon3 from "../images/icon3.png"
import icon4 from "../images/icon4.png"
import bcimg from "../images/bcimg.jpg"
import NavBar from "./NavBar";
import { Navbar } from "react-bootstrap";
import NavBar1 from "./NavBar1";

function HomePage(){
    return(
        <>
        
      <div className="posfix"> <Header /></div>
        <div className="rokesh">
        
      
        <Carousel/>
        <div className="deal-of-the-day">
        <h2 className="heading-home1">DEALS OF THE DAY</h2>
        <div class="conatainer-home">

	<div class="column1-home" style={{ 
      backgroundImage: `url("https://www.healthifyme.com/blog/wp-content/uploads/2021/03/Seasonal-Fruits-in-India-and-its-Benefits.jpg")` ,  backgroundSize:'cover'
    }}>
		<div class="things-home">
			
			
			<p><h5>winter fruits</h5>70% OFF </p><Link to="/Fruits" ><button>Shop Now</button></Link></div>
		</div>

        <div class="column1-home"  style={{ 
      backgroundImage: `url("https://vegsoc.org/wp-content/uploads/2019/03/vegetable-box-750x580.jpg")` , backgroundSize:'cover' 
    }}>
		<div class="things-home">
			
			
			<p><h5>winter fruits</h5>70% OFF </p><Link to="/Vegetables" ><button>Shop Now</button></Link></div>
		</div>
        <div class="column1-home"  style={{ 
      backgroundImage: `url("https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/2/11/pulses.jpg")` , backgroundSize:'cover'
    }}>
		<div class="things-home">
			
		
			<p><h5>winter fruits</h5>70% OFF </p><Link to="/Pulses" ><button>Shop Now</button></Link></div>
		</div>
        <div class="column1-home"  style={{ 
      backgroundImage: `url("https://media.gettyimages.com/photos/dairy-products-shot-on-rustic-wooden-table-picture-id910881428?s=612x612")` ,  backgroundSize:'cover'
    }}>
		<div class="things-home">
			
			
			<p><h5>winter fruits</h5>70% OFF </p><Link to="/Dairy" ><button>Shop Now</button></Link></div>
		</div>
        <div class="column1-home"  style={{ 
      backgroundImage: `url("https://www.healthifyme.com/blog/wp-content/uploads/2021/03/Seasonal-Fruits-in-India-and-its-Benefits.jpg")` 
    }}>
		<div class="things-home">
			
			
			<p><h5>winter fruits</h5>70% OFF </p><Link to="/" ><button>Shop Now</button></Link></div>
		</div>
  
</div>
           
        </div>
       
<div className="text-highlight">
    <h1 className="text-background">ORGANIC PRODUCTS <br/> FOR EVERYONE</h1>
</div>


        <div class="farm-information">
	<div className="info-one"> <div className="farm-icon"><img src={icon1}/></div> <div className="farm-info"><h1 className="font-change"><b>19500</b></h1><p>Tons of harvesta</p></div>           </div>
    <div className="info-two">  <div className="farm-icon"><img src={icon2}/></div> <div className="farm-info"><h1 className="font-change"><b>19500</b></h1><p>Units of Cattle</p></div> </div>
    <div className="info-three">  <div className="farm-icon"><img  src={icon3}/></div> <div className="farm-info"><h1 className="font-change"><b>19500</b></h1><p>Hectares of farm</p></div> </div>
    <div className="info-four">  <div className="farm-icon"><img src={icon4}/></div> <div className="farm-info"><h1 className="font-change"><b>19500</b></h1 ><p>Units of Technique</p></div> </div>
</div>

<div className="" ><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/Oct20/UNREC/1500x150_strip.jpg"/></div>


<div className="deal-of-the-day">
        <h2 className="heading-home1">RECOMENDED FOR YOU </h2>
        <div class="conatainer-home">

	<div class="column1-home" style={{ 
      backgroundImage: `url("https://www.healthifyme.com/blog/wp-content/uploads/2021/03/Seasonal-Fruits-in-India-and-its-Benefits.jpg")` ,  backgroundSize:'cover'
    }}>
		<div class="things-home">
			
			
			<p><h5>winter fruits</h5>70% OFF </p><Link to="/Fruits" ><button>Shop Now</button></Link></div>
		</div>

        <div class="column1-home"  style={{ 
      backgroundImage: `url("https://vegsoc.org/wp-content/uploads/2019/03/vegetable-box-750x580.jpg")` , backgroundSize:'cover' 
    }}>
		<div class="things-home">
			
			
			<p><h5>winter fruits</h5>70% OFF </p><Link to="/Vegetables" ><button>Shop Now</button></Link></div>
		</div>
        <div class="column1-home"  style={{ 
      backgroundImage: `url("https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/2/11/pulses.jpg")` , backgroundSize:'cover'
    }}>
		<div class="things-home">
			
		
			<p><h5>winter fruits</h5>70% OFF </p><Link to="/Pulses" ><button>Shop Now</button></Link></div>
		</div>
        <div class="column1-home"  style={{ 
      backgroundImage: `url("https://media.gettyimages.com/photos/dairy-products-shot-on-rustic-wooden-table-picture-id910881428?s=612x612")` ,  backgroundSize:'cover'
    }}>
		<div class="things-home">
			
			
			<p><h5>winter fruits</h5>70% OFF </p><Link to="/Dairy" ><button>Shop Now</button></Link></div>
		</div>
        <div class="column1-home"  style={{ 
      backgroundImage: `url("https://www.healthifyme.com/blog/wp-content/uploads/2021/03/Seasonal-Fruits-in-India-and-its-Benefits.jpg")` 
    }}>
		<div class="things-home">
			
			
			<p><h5>winter fruits</h5>70% OFF </p><Link to="/" ><button>Shop Now</button></Link></div>
		</div>
  
</div>
           
        </div>





        <Footer/>
        </div>
        </>
    )
}
export default HomePage;