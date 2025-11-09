import { User } from 'lucide-react';

const Section = () => {
    return <div className="m-4">
        <div className="flex mb-2">
            <User />
            <div className="font-bold text-xl">About Me</div>
        </div>   
        <div>
        <p>I'm a passionate full stack developer with 5 years of experience in building web applications. I love creating efficient, scalable, and user-friendly solutions to complex problems.</p>
        </div>
    </div>


}

export default Section;