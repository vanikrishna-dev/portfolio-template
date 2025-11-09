import { BookOpen } from 'lucide-react';
import Section from "./Section";
import Graduation from './Graduation';

const Education = () => {

    const eduDetails = [
        {title:"Bachelor of Science in Computer Science", school: "University of Technology", year:"2015-2019"},
        {title:"Full Stack Web Development Bootcamp", school: "Code Academy", year:"2020"}
    ];

    return <Section icon={<BookOpen />} sectionTitle="Education">
        {eduDetails.map(item => <Graduation key={item.title} title={item.title} school= {item.school} year={item.year} />)}
    </Section>;
}

export default Education;