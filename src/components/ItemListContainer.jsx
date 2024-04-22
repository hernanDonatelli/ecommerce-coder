// import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import products from "../productos.json";
import { useState, useEffect } from "react";

const ItemListContainer = ({ greeting }) => {
    const stock = 10;
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const onAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} productos al carrito`);
    };

    useEffect(() => {
        setTimeout(() => {
            setItems(products);

            setLoading(false);
        }, 2000);
    }, []); //lo dejo vacio para que haga la carga inicial

    return (
        <div>
            <h1 className="text-3xl roboto-black h-full flex justify-center items-center p-10">
                {greeting}
            </h1>

            {/* <ItemCount stock={stock} initial={1} onAdd={onAdd} /> */}

            {loading ? <h2>Cargando...</h2> : <ItemList items={items} />}
        </div>
    );
};

export default ItemListContainer;
