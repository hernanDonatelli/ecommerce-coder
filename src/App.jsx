import "./index.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import CartContextProvider from "./context/CartContext";

function App() {
    return (
        <>
            <CartContextProvider>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route
                            exact
                            path={"/"}
                            element={
                                <ItemListContainer
                                    greeting={"Hola, bienvenido a la Tienda"}
                                />
                            }
                        />
                        <Route
                            path={"/category/:idCategory"}
                            element={<ItemListContainer />}
                        />
                        <Route
                            path={"/item/:id"}
                            element={<ItemDetailContainer />}
                        />
                        <Route exact path={"/cart"} element={<Cart />} />
                        <Route
                            exact
                            path={"/checkout"}
                            element={<Checkout />}
                        />
                        <Route path={"*"} element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </CartContextProvider>
        </>
    );
}

export default App;
