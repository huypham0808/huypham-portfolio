import { ReactComponent as ReactLogo } from '../image/ReactIcons.svg';

const SkillFE = () => {
    return (
        <div className="skill-Items">
            <h2 className="title">Frontend</h2>
            <div className="skill--Body">
                <div className='flex'><ReactLogo /><span>React JS</span></div>
            </div>
        </div>
    );
}

export default SkillFE;