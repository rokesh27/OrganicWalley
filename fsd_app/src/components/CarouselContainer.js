import {Carousel} from "react-bootstrap"
import banner04 from "../images/banner04.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
const CarouselContainer = () => {
    return (
      <Carousel fade={true} pause={false}>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://www.parasdairy.com/images/WEB-Slider-1000W-X-400H-PX-1.jpg"
            alt="First slide" width={'80%'} height={'400px'}
          />
         
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 "
            src="https://m.media-amazon.com/images/G/31/img18/Fresh/Jan22/Hero/FV_1500X300.jpg"
            alt="Third slide" height={'400px'} width={'80%'}
          />
         
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 "
            src="https://m.media-amazon.com/images/G/31/img18/Fresh/Jan22/Fest/1500x300.gif"
            alt="Third slide" height={'400px'} width={'80%'}
          />
         
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={banner04}
            alt="First slide" width={'80%'} height={'400px'}
          />
        
        </Carousel.Item>
      </Carousel>
    )
  }
  
  export default CarouselContainer;