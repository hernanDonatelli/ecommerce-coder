import "./index.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
                setLoading(false);
            });
    }, []); //lo dejo vacio para que haga la carga inicial

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then((res) => res.json())
            .then((data) => {
                let obj = [];

                for (let i = 0; i < data.length; i++) {
                    obj.push({ id: i + 1, name: data[i] });
                }

                setCategorias(obj);
            });
    });

    // for (let i = 0; i < items.length; i++) {
    //     const el = items[i];

    //     if (i % 2 == 0) {
    //         el.stock = 10;
    //     } else {
    //         if (i % 3 == 0) {
    //             el.stock = 5;
    //         } else {
    //             el.stock = 0;
    //         }
    //     }
    // }

    return (
        <>
            <Navbar categorias={categorias} />
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        <ItemListContainer
                            greeting={"Hola, bienvenido a la Tienda"}
                            items={items}
                            loading={loading}
                            categorias={categorias}
                            />
                        }
                        />
                <Route
                    path="/category/:id"
                    element={
                        <ItemListContainer
                        productos={items}
                        categorias={categorias}
                        />
                    }
                />
                <Route
                    path="/item/:id"
                    element={<ItemDetailContainer productos={items} />}
                />

                <Route exact path="/cart" element={<Cart />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
