import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
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
        <div className="flex justify-center items-center">
            <div className="flex justify-center items-center border-1 border-slate-200 py-1 px-8">
                <BiMinus
                    style={{ color: "#212121" }}
                    onClick={decrement}
                    className="text-2xl cursor-pointer"
                />

                <span className="text-xl block w-20 text-center">{count}</span>

                <IoMdAdd
                    style={{ color: "#212121" }}
                    onClick={increment}
                    className="text-2xl cursor-pointer"
                />
                <Button
                className="ml-8"
                    onClick={addToCart}
                    color="primary"
                    variant="bordered"
                    isDisabled={stock == 0}
                >
                    Agregar al Carrito
                </Button>
            </div>

        </div>
    );
};

export default ItemCount;
