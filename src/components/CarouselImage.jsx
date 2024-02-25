import MyProfile from '../image/Profile.jpg';
import '../style/Carousel.css'
const CarouselImage = () => {
    return (
        <div className="carousel--image">
            <img src={MyProfile} alt="imageprofile" />
        </div>
    );
}

export default CarouselImage;