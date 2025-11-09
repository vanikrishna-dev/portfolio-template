import TechPill from "./TechPill";

const Project = ({title, disc, techUsed}) => {
    return <>
        <div className="p-6 mb-4 max-w-4xl mx-auto bg-slate-100 rounded-xl shadow-xl">
            <h1 className="font-semibold text-xl mb-2 ">
                {title}
            </h1>
            <p className="text-gray-700 mb-4">
                {disc} 
            </p>
            {techUsed.map(tech => <TechPill title={tech} />)}
        </div>
    </>
}

export default Project;