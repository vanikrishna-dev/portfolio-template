import { Globe } from 'lucide-react';
import Section from "./Section"
import { Linkedin, Github, Twitter } from 'lucide-react';
import SocialMedia from './SocialMedia';

const Contact = () => {

    const socialLink = [
        {icon:<Linkedin />, title:"Linkedin", url:"https://www.linkedin.com/login"},
        {icon:<Github />, title:"GitHub", url:"https://github.com/login"},
        {icon:<Twitter />, title:"Twitter", url:"https://x.com/i/flow/login"}
    ];

    return <div className='pb-6'>
        <Section icon={<Globe />} sectionTitle="Contact & Social Media">
            <p className="  text-gray-700 mb-4">
                 Email: vanikrishna02@gmail.com <br />
                Phone: (123) 456-7890
            </p>
            {socialLink.map(social => <SocialMedia key={social.title} title={social.title} icon= {social.icon} url={social.url} />)}
            
        </Section>
    </div>
}

export default Contact;