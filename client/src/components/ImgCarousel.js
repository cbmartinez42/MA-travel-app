import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Container} from '@material-ui/core'
// import xmasWorm from "../assets/xmasWorm"

const ImgCarousel = ({tourData}) => {

  const stockImages = [
    // xmasWorm,
    // "../assets/409317_10150457991871965_782268538_n.jpg",
    "https://media-exp1.licdn.com/dms/image/C4D1BAQHYoIVYG2LEyg/company-background_10000/0/1531232971729?e=2159024400&v=beta&t=A5tLxCGa08ett9ebnNGOMZIMp-OfqhOSYLzZKMPXCwQ",
    "https://www.tfhmagazine.com/-/media/Images/TFH2-NA/US/articles/211_fishing_with_the_piabeiros.jpg",
    "https://www.planetware.com/photos-large/SEY/best-tropical-vacations-bora-bora.jpg",
    "https://gardenvarietynews.files.wordpress.com/2014/06/kukuilia-farm0and-garden-in-kauai-hawaii.jpg"
  ]

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