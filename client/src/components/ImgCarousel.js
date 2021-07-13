import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Container} from '@material-ui/core'

const ImgCarousel = ({tourData}) => {

  const stockImages = [
    "https://www.proceilingtiles.com/images/D/tropical-beach-ceiling-tile.jpg",
    "https://media-exp1.licdn.com/dms/image/C4D1BAQHYoIVYG2LEyg/company-background_10000/0/1531232971729?e=2159024400&v=beta&t=A5tLxCGa08ett9ebnNGOMZIMp-OfqhOSYLzZKMPXCwQ",
    "https://www.tfhmagazine.com/-/media/Images/TFH2-NA/US/articles/211_fishing_with_the_piabeiros.jpg",
    "https://lh3.googleusercontent.com/proxy/OVUCHJ0G41-UQLKeHyZJf4HLw8pEqccWkXT2C4aoO1b0tBieRq4xhlpqOBi1V2_NofBOVArxbiGieh9ousBRiljq39VjyMXYJA_nntFt3VThqcRr",
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