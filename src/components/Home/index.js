import { Carousel } from '@mantine/carousel';
import CarouselElement from '../CarouselElement.js';



const Home = () => {
    return (
        <Carousel
            withIndicators
            className='w-screen h-screen'
        // loop
        >
            <Carousel.Slide className='w-screen h-screen'>
                <CarouselElement />
            </Carousel.Slide>
            <Carousel.Slide className='w-screen h-screen'>
                <CarouselElement />
            </Carousel.Slide>
            <Carousel.Slide className='w-screen h-screen'>
                <CarouselElement />
            </Carousel.Slide>
            {/* ...other slides */}
        </Carousel >
    );
}

export default Home;