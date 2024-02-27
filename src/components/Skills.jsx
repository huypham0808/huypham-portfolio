import SkillBE from "./SkillBE";
import SkillFE from "./SkillFE";

const Skills = () => {
    return (
        <div className="mt-20">
            <h1 className="myName text-5xl font-bold text-white">
                Skills
            </h1>
            <h3 className="text-xl font-bold text-gray-500 mt-3 mb-10">Here are some of my skills on which I have been working on for the past 3 years</h3>
            <div className="skill--Main flex justify-between">
                <SkillFE />
                <SkillBE />
            </div>
        </div>
    );
}

export default Skills;