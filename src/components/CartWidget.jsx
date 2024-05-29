import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
const CartWidget = () => {
    const { getTotalProducts, getSumProducts } = useContext(CartContext);

    return (
        <NavLink
            to={"/cart"}
            className={
                getTotalProducts() > 0
                    ? "motion-safe:animate-bounce text-lg font-bold  flex w-1/8 justify-center lg:justify-end lg:w-auto my-3 md:ml-8 md:mr-4"
                    : "text-lg font-bold my-3 text-paragraph flex w-full md:w-1/8 justify-center lg:justify-end lg:w-auto md:ml-8 md:mr-4 transition-all duration-300"
            }
        >
            <div className="relative">
                <FaShoppingCart className="h-7 w-7" />
                <p className="absolute -top-2 -right-2 text-xs font-bold text-white bg-pink-500 rounded-full w-5 h-5 flex justify-center items-center">
                    {getTotalProducts()}
                </p>
                <p className="absolute top-7 right-0 text-sm font-bold w-5 h-5 flex justify-center items-center">
                    {getTotalProducts() > 0 && `$${getSumProducts().toFixed(2)}`}
                </p>
            </div>
        </NavLink>
    );
};

export default CartWidget;
