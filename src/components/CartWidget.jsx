import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    const cantidad = 0

    return (
        <>
            <button
                className={
                    cantidad > 0
                        ? "motion-safe:animate-bounce text-lg font-bold text-links-hover flex w-full justify-center my-2 md:ml-8"
                        : "text-lg font-bold my-2 text-paragraph flex w-full justify-center md:ml-8"
                }
            >
                <FaShoppingCart className="h-8 w-8" />
                <p className="ml-2">{cantidad}</p>
            </button>
        </>
    );
};

export default CartWidget;
