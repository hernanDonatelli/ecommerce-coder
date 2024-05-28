import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    };

    return (
        <div className="flex flex-col justify-center items-center lg:flex-row gap-4 mt-10 sm:mt-15 h-full md:mt-10 lg:w-3/4 lg:mx-auto lg:mt-20 2xl:w-2/3">
            <div className="flex items-center justify-center h-full w-3/4 lg:w-1/3">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full object-contain md:h-96 lg:h-80"
                />
            </div>

            <div className="w-full md:w-3/4 lg:w-2/3 p-6 sm:mt-0 2xl:w-1/2 2xl:p-0">
                <h3 className="text-base flex text-links-hover">
                    {item.category}
                </h3>
                <h1 className="text-2xl font-black pb-3 flex">{item.title}</h1>
                <p className="text-base text-gray-400">{item.description}</p>
                <h1 className="text-3xl font-black pt-3 flex">${item.price}</h1>
                <ItemCount stock={10} onAdd={onAdd} />
            </div>
        </div>
    );
};

export default ItemDetail;
