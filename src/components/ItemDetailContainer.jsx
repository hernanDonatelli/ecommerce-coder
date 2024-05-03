import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
const ItemDetailContainer = ({ productos }) => {
    const params = useParams();
    const [producto, setProducto] = useState({});

    useEffect(() => {
        const match = productos.find((el) => el.id === parseInt(params.id));
        setProducto(match);
    }, []);

    const onAdd = (count) => {
        console.log(`Se agregaron ${count} unidades al carrito`);
    };

    return (
        <div className="flex flex-col justify-center items-center lg:flex-row gap-4 mt-10 sm:mt-15 h-full md:mt-10 lg:w-3/4 lg:mx-auto lg:mt-20 2xl:w-2/3">
            <div className="flex items-center justify-center h-full w-3/4 lg:w-1/3">
                <img
                    src={producto.image}
                    alt={producto.title}
                    className="w-full object-contain md:h-96 lg:h-80"
                />
            </div>

            <div className="w-full md:w-3/4 lg:w-2/3 p-6 sm:mt-0 2xl:w-1/2 2xl:p-0">
                <h3 className="text-base flex text-links-hover">
                    {producto.category}
                </h3>
                <h1 className="text-2xl font-black pb-3 flex">
                    {producto.title}
                </h1>
                <p className="text-base text-gray-400">
                    {producto.description}
                </p>
                <h1 className="text-3xl font-black pt-3 flex">
                    ${producto.price}
                </h1>
                <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
            </div>
        </div>
    );
};

export default ItemDetailContainer;
