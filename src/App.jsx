import NavbarComponent from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";

function App() {
    return (
        <NextUIProvider>
            <NavbarComponent />
            <ItemListContainer greeting="Hola, bienvenido a la Tienda" />
        </NextUIProvider>
    );
}

export default App;
