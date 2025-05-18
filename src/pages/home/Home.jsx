// import Experience from "../../components/Experience";
import MainCarousel from "../../components/MainCarousel";
import Project from "../../components/Project";
import Skills from "../../components/Skills";
import '../../style/Home.css';
const Home = () => {
    return (
        <div className="homePage">
            <MainCarousel />
            <Skills />
            {/* <Experience /> */}
            <Project />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
}

export default Home;