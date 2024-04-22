import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <NextUIProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<ItemListContainer greeting={"Hola, bienvenido a la Tienda"} />} />
                </Routes>

                {/* <ItemListContainer greeting="Hola, bienvenido a la Tienda" /> */}
            </BrowserRouter>
        </NextUIProvider>
    );
}

export default App;
