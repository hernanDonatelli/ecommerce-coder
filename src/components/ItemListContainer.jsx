import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import GridLoader from "react-spinners/GridLoader";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

const override = {
    display: "block",
    margin: "4rem auto",
};

const ItemListContainer = ({
    greeting,
    items,
    loading,
    categorias,
    productos,
}) => {
    const { id } = useParams();
    const [color, setColor] = useState("#e5097f");
    const [carga, setCarga] = useState(true);
    const [filtrado, setFiltrado] = useState([]);
    const [idURL, setIdURL] = useState(id);

    useEffect(() => {
        setIdURL(Number(id));
        let nameCategory;

        if (id === undefined || id > categorias.length) {
            setCarga(false);
            return;
        } else {
            categorias.map((item) => {
                if (item.id == id) {
                    nameCategory = item.name;
                }
            });
        }

        filteredCategory({ nameCategory });

        setCarga(false);
    }, [id]);

    const filteredCategory = ({ nameCategory }) => {
        let filtered = [];
        productos.filter((item) => {
            if (item.category == nameCategory) {
                filtered.push(item);
            }
        });

        setFiltrado(filtered);
    };

    return (
        <div>
            <h1 className="text-3xl roboto-black h-full flex justify-center items-center p-10">
                {greeting}
            </h1>

            <div className="flex justify-center w-3/4 mx-auto md:w-full lg:w-3/4 2xl:w-full">
                { id === undefined ? (
                    <div>
                        <GridLoader
                            color={color}
                            loading={loading}
                            cssOverride={override}
                            size={20}
                            aria-label="Cargando..."
                            data-testid="loader"
                            speedMultiplier={0.75}
                        />
                        <ItemList productos={items} />
                    </div>
                ) : (
                    <div>
                        <GridLoader
                            color={color}
                            loading={carga}
                            cssOverride={override}
                            size={20}
                            aria-label="Cargando..."
                            data-testid="loader"
                            speedMultiplier={0.75}
                        />
                        { id > categorias.length || isNaN(id) ? (
                            <NotFound />
                        ) : (
                            <ItemList productos={filtrado} />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ItemListContainer;
