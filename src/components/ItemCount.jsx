import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { BiMinus } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const ItemCount = ({ stock, onAdd }) => {
    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [visible, setVisible] = useState(true);

    const increment = () => {
        if (contador < itemStock) {
            setContador(contador + 1);
        } else {
            alert(`No hay suficiente stock disponible en estos momentos.`);
        }
    };

    const decrement = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    };

    const addToCart = () => {
        if (contador <= itemStock) {
            setItemStock(itemStock - contador);
            onAdd(contador);
            setContador(1);
            setVisible(false);
        }
    };

    return (
        <div className="flex flex-col items-center mt-5 lg:flex-row">
            <div className="w-full flex justify-between items-center bg-gray-200 rounded-sm px-8 py-2 mb-3 lg:mb-0 lg:w-1/3 lg:px-4">
                <BiMinus
                    onClick={decrement}
                    className="text-lg cursor-pointer text-links-hover font-extrabold"
                />

                <span className="text-lg block w-20 text-center">
                    {contador}
                </span>

                <IoMdAdd
                    onClick={increment}
                    className="text-lg cursor-pointer text-links-hover font-extrabold"
                />
            </div>
            {visible ? (
                <button
                    onClick={addToCart}
                    className={
                        itemStock === 0
                            ? "button-disabled w-full lg:w-2/3 lg:ml-3"
                            : "button-primary w-full lg:w-2/3 lg:ml-3"
                    }
                    disabled={itemStock === 0}
                >
                    Agregar al Carrito
                </button>
            ) : (
                <button className="button-primary w-full lg:w-2/3 lg:ml-3">
                    <NavLink to={"/cart"}>Finalizar Compra</NavLink>
                </button>
            )}
        </div>
    );
};

export default ItemCount;
