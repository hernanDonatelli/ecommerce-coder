import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import NotFound from "./NotFound";
import { GridLoader } from "react-spinners";

const ItemDetailContainer = () => {
    const params = useParams();
    const [color, setColor] = useState("#e5097f");
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const override = {
        display: "block",
        margin: "4rem auto",
    };

    useEffect(() => {
        setLoading(true);

        fetch(`https://fakestoreapi.com/products`)
            .then((res) => res.json())
            .then((data) => {
                const match = data.filter((i) => i.id === Number(params.id));
                setItem(match[0]);
            });

        setLoading(false);
    }, [params.id]);

    const onAdd = (count) => {
        console.log(`Se agregaron ${count} unidades al carrito`);
    };

    return (
        <>
            <GridLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={20}
                aria-label="Cargando..."
                data-testid="loader"
                speedMultiplier={0.75}
            />
            {item ? (
                <div>
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
                            <h1 className="text-2xl font-black pb-3 flex">
                                {item.title}
                            </h1>
                            <p className="text-base text-gray-400">
                                {item.description}
                            </p>
                            <h1 className="text-3xl font-black pt-3 flex">
                                ${item.price}
                            </h1>
                            <ItemCount stock={10} initial={1} onAdd={onAdd} />
                        </div>
                    </div>
                </div>
            ) : (
                <NotFound />
            )}
        </>
    );
};

export default ItemDetailContainer;
