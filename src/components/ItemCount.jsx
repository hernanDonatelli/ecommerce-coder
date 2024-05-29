import { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const ItemCount = ({ stock, onAdd }) => {
    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [visible, setVisible] = useState(true);

    const increment = () => {
        if (contador < itemStock) {
            setContador(contador + 1);
        } else {
            toast.error( `Solo disponemos de ${itemStock} unidades en estos momentos.`);
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
            toast.success(`Agregaste ${contador} unidades al carrito.`);
        }
    };

    return (
        <div className="flex flex-col items-center mt-5 lg:flex-row">
            <div className="w-full flex justify-between items-center rounded-sm px-8 py-2 mb-3 lg:mb-0 lg:w-1/3 lg:px-4">
                <button
                    onClick={decrement}
                    disabled={itemStock === 0}
                    className={
                        itemStock === 0
                            ? "cursor-not-allowed text-2xl text-gray-400 font-extrabold"
                            : "text-lg cursor-pointer text-links-hover font-extrabold"
                    }
                >
                    -
                </button>

                <span className="text-lg block w-20 text-center">
                    {itemStock === 0 ? 0 : contador}
                </span>

                <button
                    onClick={increment}
                    disabled={itemStock === 0}
                    className={
                        itemStock === 0
                            ? "cursor-not-allowed text-2xl text-gray-400 font-extrabold"
                            : "text-lg cursor-pointer text-links-hover font-extrabold"
                    }
                >
                    +
                </button>
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
