import { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            const product = cart.find(prod => prod.id === item.id);
            product.quantity += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, { ...item, quantity:quantity }]);
        }
    };

    const removeItem = (id) => {
        const cartUpdated = cart.filter(prod => prod.id !== id);
        setCart([...cartUpdated]);
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id);
    };

    const getTotalProducts = () => {
        return cart.reduce((acumulador, item) => (acumulador += item.quantity), 0);
    };

    const getSumProducts = () => {
        return cart.reduce((acumulador, item) => (acumulador += item.price * item.quantity), 0);
    };

    return (
        <CartContext.Provider
            value={{ cart, addItem, removeItem, clear, getTotalProducts, getSumProducts }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;