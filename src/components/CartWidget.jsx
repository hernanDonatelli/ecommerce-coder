import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    const cantidad = 0

    return (
        <>
            <button
                className={
                    cantidad > 0
                        ? "motion-safe:animate-bounce text-lg font-bold sm:mr-8 text-red-400 flex"
                        : "text-lg font-bold text-slate-300 sm:mr-8 flex"
                }
            >
                <FaShoppingCart className="h-8 w-8" />
                <p className="ml-2">{cantidad}</p>
            </button>
        </>
    );
};

export default CartWidget;
