import '../style/Common.css';
import { TypeAnimation } from 'react-type-animation';
const CarouselContent = () => {
    return (
        <div className="carousel--content">
            <h1 className="myName text-5xl font-bold text-white">
                Hi there, I am <span className='text-red-500'>Huy</span> Pham
            </h1>
            <h2 className="title">
                <TypeAnimation
                    sequence={[
                        "Web Developer",
                        1000,
                        "Bim CAD Application Developer",
                        1000,
                    ]}
                    wrapper='span'
                    speed={50}
                    repeat={Infinity}
                />
            </h2>
            <p className="text-white font-thin leading-loose text-lg">I am an engineer with a passion for creating innovative solutions to resolve complex problems. I have five years of experience in construction domain, two years as <span style={{ fontWeight: "bold", color: "rgb(239 68 68)" }}>application developer</span>, more than one year of experience in <span style={{ fontWeight: "bold", color: "rgb(239 68 68)" }}>front – end technologies</span>  and started delving into back-end development. I'm enthusiastic about working in a dynamic environment, actively participating in real projects, and improving my skills.  My goal is to make a meaningful
                contribution while keeping up with the latest technology trends. </p>
            <a href='/' target='_blank' className='btn--Detail'>Check Resume</a>
        </div>
    );
}

export default CarouselContent;