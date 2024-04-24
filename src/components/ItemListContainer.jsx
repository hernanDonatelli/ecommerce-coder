// import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import GridLoader from "react-spinners/GridLoader";

const override = {
    display: "block",
    margin: "4rem auto",
};

const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#e5097f");

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
                setLoading(false);
            })


    }, []); //lo dejo vacio para que haga la carga inicial

    return (
        <div>
            <h1 className="text-3xl roboto-black h-full flex justify-center items-center p-10">
                {greeting}
            </h1>

            {/* <ItemCount stock={stock} initial={1} onAdd={onAdd} /> */}

            <div className="flex justify-center">
                {loading ? (
                    <GridLoader
                        color={color}
                        loading={loading}
                        cssOverride={override}
                        size={20}
                        aria-label="Cargando..."
                        data-testid="loader"
                        speedMultiplier={0.75}
                    />
                ) : (
                    <ItemList items={items} />
                )}
            </div>
        </div>
    );
};

export default ItemListContainer;
