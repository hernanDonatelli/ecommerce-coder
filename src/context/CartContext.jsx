import { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    // useEffect(() => {
    //     fetch("https://fakestoreapi.com/products")
    //         .then((res) => res.json())
    //         .then((data) => setProductos(data));
    // })

    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (id) => {
        const producto = productos.find((item) => item.id === id);
        setCarrito([...carrito, { ...producto }]);
    };

    const totalProductos = () => {
        return carrito.length;
    };

    return (
        <CartContext.Provider
            value={{ productos, carrito, agregarProducto, totalProductos }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;