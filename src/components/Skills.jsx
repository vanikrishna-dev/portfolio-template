import { Code } from 'lucide-react';
import Section from "./Section"
import Pills from './Pills';

const Skills = () => {
    const skillTitles = ["Javascript", "React", "Node.js", "Python", "SQL", "Git", "AWS", "Docker"];
    return <Section icon={<Code />} sectionTitle="Skills">
        <div className="flex flex-wrap gap-2">
            {skillTitles.map(title => <Pills title={title} /> )}
        </div>
    </Section>;
}

export default Skills;