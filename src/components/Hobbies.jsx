import { Heart } from 'lucide-react';
import Section from "./Section"
import List from './List';

const Hobbies = () => {
    const hobbies= ["Photography", "Hiking", "Playing guitar", "Reading sci-fi novels"];
    return <Section icon={<Heart />} sectionTitle="Hobbies & Interests">
        <List list={hobbies}></List>
    </Section>;
}

export default Hobbies;