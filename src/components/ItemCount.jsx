import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { BiMinus } from "react-icons/bi";

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        } else {
            alert(
                `Nuestro stock disponible en estos momentos es de ${stock} unidades`
            );
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const addToCart = () => {
        if (count > 0 && count <= stock) {
            onAdd(count);
            setCount(initial);
        }
    };

    return (
        <div className="flex flex-col items-center mt-5 lg:flex-row">
            <div className="w-full flex justify-between items-center bg-gray-200 rounded-sm px-8 py-2 mb-3 lg:mb-0 lg:w-1/3 lg:px-4">
                <BiMinus
                    onClick={decrement}
                    className="text-lg cursor-pointer text-links-hover font-extrabold"
                />

                <span className="text-lg block w-20 text-center">{count}</span>

                <IoMdAdd
                    onClick={increment}
                    className="text-lg cursor-pointer text-links-hover font-extrabold"
                />
            </div>
            <button
                onClick={addToCart}
                className={
                    stock === 0
                        ? "button-disabled w-full lg:w-2/3 lg:ml-3"
                        : "button-primary w-full lg:w-2/3 lg:ml-3"
                }
                disabled={stock === 0}
            >
                Agregar al Carrito
            </button>
        </div>
    );
};

export default ItemCount;
