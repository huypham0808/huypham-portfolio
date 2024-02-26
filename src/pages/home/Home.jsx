import MainCarousel from "../../components/MainCarousel";
import Skills from "../../components/Skills";
import '../../style/Home.css';
const Home = () => {
    return (
        <div className="homePage">
            <MainCarousel />
            <Skills />
        </div>
    );
}

export default Home;