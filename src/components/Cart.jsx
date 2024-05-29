import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaRegTrashCan } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Cart = () => {
    const { cart, removeItem, clear, getTotalProducts, getSumProducts } =
        useContext(CartContext);

    return (
        <div className="mt-8">
            <h1 className="flex justify-center text-3xl font-bold text-paragraph items-center mb-8">
                Cart
            </h1>

            {getTotalProducts() == 0 ? (
                <div className="flex justify-center items-center flex-col">
                    <p className="text-paragraph">
                        No hay productos en el carrito
                    </p>
                    <button className="button-primary mt-8">
                        <NavLink to={"/"}>Volver a la página principal</NavLink>
                    </button>
                </div>
            ) : (
                <div className="w-[95%] lg:w-[85%] 2xl:w-2/3 mx-auto overflow-x-auto">
                    <table className="table-fixed w-full mx-auto">
                        <tbody>
                            <tr className="border-l-0 border-r-0">
                                <td colSpan={6} className="py-2 text-right">
                                    <button
                                        onClick={clear}
                                        className="button-primary"
                                    >
                                        Vaciar Carrito
                                    </button>
                                </td>
                            </tr>

                            {cart.map((item) => (
                                <tr key={item.id}>
                                    <td className="border py-2">
                                        <img
                                            className="w-28 block mx-auto md:w-12 lg:w-20"
                                            src={item.image}
                                            alt={item.title}
                                        />
                                    </td>
                                    <td colSpan={2} className="border py-2 px-2 text-sm">
                                        <p className="text-center block w-full truncate">
                                           <span className="text-md font-bold">{item.quantity}x</span> {item.title}
                                        </p>
                                    </td>
                                    <td className="border py-2 text-sm">
                                        <span className="w-full text-center block">
                                            ${item.price}
                                        </span>
                                    </td>
                                    <td className="border py-2 text-sm">
                                        <span className="w-full text-center block">
                                            ${item.quantity * item.price}
                                        </span>
                                    </td>
                                    <td className="border py-4">
                                        <FaRegTrashCan
                                            className="text-red-400 hover:text-red-600 cursor-pointer transition-all duration-300 text-xl block w-full"
                                            title="Eliminar producto"
                                            onClick={() => removeItem(item.id)}
                                        />
                                    </td>
                                </tr>
                            ))}
                            <tr className="border border-l-0 border-r-0">
                                <td colSpan={3} className="py-2 text-center">
                                    <span className="font-bold text-xl">
                                        Total
                                    </span>
                                </td>
                                <td colSpan={3}>
                                    <span className="font-bold text-lg text-right block md:text-center">
                                        ${getSumProducts().toFixed(2)}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={6} className="py-2 text-center">
                                    <button className="button-primary w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
                                        <NavLink to={"/checkout"}>
                                            Checkout
                                        </NavLink>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Cart;
