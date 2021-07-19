import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import xmasWorm from "../assets/xmasWorm"
import booby from '../assets/booby.JPG';
import boatsDepart from '../assets/boatsDepart.jpg';
import daysEnd from '../assets/daysEnd.jpg';
import garifunaDrum from '../assets/garifunaDrum.jpg';
import livingMaya from '../assets/livingMaya.jpg';
import palmsPier from '../assets/palmsPier.jpg';
import turtle from '../assets/turtle.jpg';
import toucan from '../assets/toucan.jpg';



const ImgCarousel = ({tourData}) => {

  const stockImages = [booby, boatsDepart, daysEnd, garifunaDrum, livingMaya, palmsPier, turtle, toucan]

    return (
        <Carousel
          autoPlay='true'
          interval='3000'
          infiniteLoop='true'
        >
        {tourData?.image?.map(image => (
        // <Container>
            <img key={image} className="tour-image-full" alt="Tour details" src={image} />
          // </Container>
        )) || stockImages.map(images => (
          <img key={images} className="tour-image-full" alt="Tour details" src={images} />
        ))}
      </Carousel>
    )
}

export default ImgCarousel;