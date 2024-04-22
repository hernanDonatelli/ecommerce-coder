import logo from "../assets/logo.png";

const Logo = () => {
    return (
        <div className="flex justify-start items-center">
            <img
                src={logo}
                alt="logo"
                className="w-12 sm:w-16 block pr-2"
            />
            <h4 className="text-xl font-bold text-paragraph">Paretto</h4>
        </div>
    );
};

export default Logo;
