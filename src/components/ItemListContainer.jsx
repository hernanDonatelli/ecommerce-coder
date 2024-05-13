import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import GridLoader from "react-spinners/GridLoader";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

const override = {
    display: "block",
    margin: "4rem auto",
};

const ItemListContainer = ({ greeting }) => {
    const { idCategory } = useParams();
    const [color, setColor] = useState("#e5097f");
    const [productos, setProductos] = useState([]);
    const [filtrado, setFiltrado] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                data.map((i) => {
                    i.category = i.category.replace(" ", "-");
                });

                if (idCategory === undefined) {
                    setProductos(data);
                } else {
                    const match = data.filter((i) => i.category === idCategory);

                    setFiltrado(match);
                }
                setLoading(false);
            });
    }, [idCategory]);

    return (
        <div>
            <h1 className="text-3xl roboto-black h-full flex justify-center items-center p-10">
                {greeting}
            </h1>

            <div className="flex justify-center w-3/4 mx-auto md:w-full lg:w-3/4 2xl:w-full">
                <div>
                    {idCategory === undefined ? (
                        <>
                            <h2 className="text-2xl font-bold text-center mb-4">
                                Todos los productos
                            </h2>
                            <GridLoader
                                color={color}
                                loading={loading}
                                cssOverride={override}
                                size={20}
                                aria-label="Cargando..."
                                data-testid="loader"
                                speedMultiplier={0.75}
                            />
                            <ItemList productos={productos} />
                        </>
                    ) :
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

                            <ItemList productos={filtrado} />
                        </>
                    }

                    {
                        filtrado.length === 0 && idCategory !== undefined ? <NotFound /> : null
                    }
                </div>
            </div>
        </div>
    );
};

export default ItemListContainer;
