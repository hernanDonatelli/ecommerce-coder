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
    const [nameCategory, setNameCategory] = useState("");

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                if (idCategory === undefined) {
                    setProductos(data);
                } else {
                    switch (idCategory) {
                        case "1":
                            setFiltrado(
                                data.filter(
                                    (element) =>
                                        element.category === "electronics"
                                )
                            );
                            setNameCategory("Electronics");
                            break;

                        case "2":
                            setFiltrado(
                                data.filter(
                                    (element) => element.category === "jewelery"
                                )
                            );
                            setNameCategory("Jewelery");
                            break;

                        case "3":
                            setFiltrado(
                                data.filter(
                                    (element) =>
                                        element.category === "women's clothing"
                                )
                            );
                            setNameCategory("Women's clothing");
                            break;

                        case "4":
                            setFiltrado(
                                data.filter(
                                    (element) =>
                                        element.category === "men's clothing"
                                )
                            );
                            setNameCategory("Men's clothing");
                            break;

                        default:
                            setFiltrado(data);
                            setNameCategory("Todos los productos");
                            break;
                    }
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
                    ) : idCategory < 5 ? (
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
                            <h2 className="text-2xl font-bold text-center mb-4">
                                {nameCategory}
                            </h2>
                            <ItemList productos={filtrado} />
                        </>
                    ) : (
                        <NotFound />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ItemListContainer;
