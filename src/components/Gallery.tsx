import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Gallery = () => {

   return (
      <CarouselProvider
         naturalSlideWidth={350}
         naturalSlideHeight={350}
         totalSlides={4}
         orientation="vertical"
         dragEnabled={true}
      >
         <ButtonBack>Prev</ButtonBack>
         <Slider>
            <Slide index={0}><img src="../assets/image1.png" /></Slide>
            <Slide index={1}><img src="../assets/image2.png" /></Slide>
            <Slide index={2}><img src="../assets/image3.png" /></Slide>
            <Slide index={3}><img src="../assets/image4.png" /></Slide>
         </Slider>
         <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
   );
};

export default Gallery;