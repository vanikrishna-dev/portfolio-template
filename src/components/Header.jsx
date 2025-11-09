import passportPhoto from '../assets/photo.png'

const Header = () => {
    return <header className="bg-blue-600 flex justify-between items-center text-white rounded-lg p-5">
        <div>
            <div className="font-bold text-3xl">Vani Krishna</div>
            <div className="text-xl">Full Stack Developer</div>
        </div>
        <img className=" rounded-full w-20" src={passportPhoto} />
    </header>
}

export default Header;