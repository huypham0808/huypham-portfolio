import CarouselContent from "./CarouselContent";
import CarouselImage from "./CarouselImage";
const MainCarousel = () => {
    return (
        <div className="mainCarousel mt-40 flex mx-auto justify-between">
            <CarouselContent />
            <CarouselImage />
        </div>
    );
}

export default MainCarousel;