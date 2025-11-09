import { Award } from 'lucide-react';
import Section from "./Section";
import List from './List';


const Extracurricular = () => {
    const curricularItems = ["Volunteer at local coding bootcamp for underprivileged youth", "Organizer of city-wide hackathon event", "Member of the University Chess Club"];
    return <Section icon={<Award />} sectionTitle="Extracurricular">
        <List list={curricularItems}></List>
    </Section>;
}

export default Extracurricular;