import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Logo = () => {
    return (
        <NavLink to={"/"}>
            <div className="flex justify-start items-center">
                <img
                    src={logo}
                    alt="logo"
                    className="w-12 sm:w-16 block pr-2"
                />
                <h4 className="text-xl font-bold text-paragraph">FakeStore</h4>
            </div>
        </NavLink>
    );
};

export default Logo;
