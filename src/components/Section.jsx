const Section = ({icon, children, sectionTitle}) => {
    return <div className="mb-12 mx-5">
        <div className="flex my-3 mb-6 items-center">
             {icon}
            <h1 className="font-bold text-2xl mx-2">{sectionTitle}</h1>
        </div>   
        {children}
    </div>


}

export default Section;