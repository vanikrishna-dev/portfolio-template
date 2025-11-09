import { BookOpen } from 'lucide-react';
import Section from "./Section";
import Graduation from './Graduation';

const Education = () => {
    return <Section icon={<BookOpen />} sectionTitle="Education">
        <Graduation title="Bachelor of Science in Computer Science" school= "University of Technology" year="2015-2019"></Graduation>
        <Graduation title="Full Stack Web Development Bootcamp" school= "Code Academy" year="2020"></Graduation>
    </Section>;
}

export default Education;