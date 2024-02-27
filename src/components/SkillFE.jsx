import { ReactComponent as ReactLogo } from '../image/ReactIcons.svg';
import TailwindLogo from '../image/Tailwind CSS.svg';
const SkillFE = () => {
    return (
        <div className="skill-Items shadow-lg shadow-blue-500/50">
            <h2 className="title">Frontend</h2>
            <div className="skill--Content grid grid-rows-2 gap-4 grid-flow-col">
                <div className='flex items-center skill--Tech'><ReactLogo width="30" height="30" /><span className='ml-2 text-lg skill--Tech__name'>React JS</span></div>
                <div className='flex items-center skill--Tech'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" alt="JsLogo" className='skill--Content__logo' /><span className='ml-2 text-lg skill--Tech__name'>CSS</span></div>
                <div className='flex items-center skill--Tech'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="JsLogo" className='skill--Content__logo' /><span className='ml-2 text-lg skill--Tech__name'>Javascript</span></div>
                <div className='flex items-center skill--Tech'><img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" alt="JsLogo" className='skill--Content__logo' /><span className='ml-2 text-lg skill--Tech__name'>HTML</span></div>
                <div className='flex items-center skill--Tech'><img src={TailwindLogo} alt="JsLogo" className='skill--Content__logo' /><span className='ml-2 text-lg skill--Tech__name'>Tailwind CSS</span></div>
                <div className='flex items-center skill--Tech'><img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="JsLogo" className='skill--Content__logo' /><span className='ml-2 text-lg skill--Tech__name'>Bootstrap</span></div>
            </div>
        </div>
    );
}

export default SkillFE;