import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const CartWidget = () => {
    const cantidad = 0;

    return (
        <NavLink
            to="/cart"
            className={
                cantidad > 0
                    ? "motion-safe:animate-bounce text-lg font-bold text-links-hover flex w-1/8 justify-center  lg:justify-end lg:w-auto my-3 md:ml-8"
                    : "text-lg font-bold my-3 text-paragraph flex w-full md:w-1/8 justify-center lg:justify-end lg:w-auto md:ml-8 hover:text-links-hover transition-all duration-300"
            }
        >
            <FaShoppingCart className="h-8 w-8" />
            <p className="ml-2">{cantidad}</p>
        </NavLink>
    );
};

export default CartWidget;
