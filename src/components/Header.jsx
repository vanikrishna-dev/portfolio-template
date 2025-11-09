import passportPhoto from '../assets/photo.png'

const Header = () => {
    return <header className="bg-blue-600 flex justify-between items-center text-white font-bold rounded-lg p-6 text-xl">
        <div>
            <div>Vani Krishna</div>
            <div>Full Stack Developer</div>
        </div>
        <img className=" rounded-full w-20" src={passportPhoto} />
    </header>
}

export default Header;