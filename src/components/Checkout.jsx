import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Checkout = () => {
    const { cart, getTotalProducts, getSumProducts } = useContext(CartContext);
    const [loading, setLoading] = useState(true);
    const override = {
        display: "block",
        margin: "4rem auto",
    };
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const obtenerTotal = () => {
        return cart.reduce((acumulador, item) => (acumulador += item.price), 0);
    };

    const generarOrden = () => {
        const buyer = {
            name: nombre,
            email: email,
            phone: telefono,
        };

        const items = cart.map((item) => ({
            id: item.id,
            title: item.title,
            price: item.price,
        }));

        const order = { buyer: buyer, items: items, total: obtenerTotal(), date: `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}` };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");

        //Agrego nuevo pedido
        addDoc(ordersCollection, order).then((data) => {
            setOrderId(data.id);
        });
    };

    return (
        <>
            <div className="flex justify-center items-center mt-16">
                <h2 className="text-3xl font-bold">Checkout</h2>
            </div>

            <div className="w-full px-16 mt-16 mb-8 flex flex-col lg:flex-row justify-evenly items-center lg:gap-8 2xl:w-3/4 2xl:mx-auto">
                <div className="w-full md:w-full flex flex-col justify-center mb-10 lg:w-1/2 lg:mb-0">
                    <label className="relative my-2">
                        <input
                            onInput={(e) => setNombre(e.target.value)}
                            className="w-full outline-none border-solid border-1 border-gray-200 rounded-lg px-4 py-2 focus:border-links-hover focus:border-opacity-50 transition duration-200"
                            type="text"
                            placeholder=""
                        />
                        <span className="absolute text-gray-500 bg-white px-2 -top-2 text-xs left-4 transition duration-300 input-text">
                            Nombre
                        </span>
                    </label>
                    <label className="relative my-2">
                        <input
                            onInput={(e) => setEmail(e.target.value)}
                            className="w-full outline-none border-solid border-1 border-gray-200 rounded-lg px-4 py-2 focus:border-links-hover focus:border-opacity-50 transition duration-200"
                            type="text"
                        />
                        <span className="absolute text-gray-500 bg-white px-2 -top-2 text-xs left-4 transition duration-300 input-text">
                            eMail
                        </span>
                    </label>

                    <label className="relative my-2">
                        <input
                            onInput={(e) => setTelefono(e.target.value)}
                            className="w-full outline-none border-solid border-1 border-gray-200 rounded-lg px-4 py-2 focus:border-links-hover focus:border-opacity-50 transition duration-200 peer"
                            type="text"
                        />
                        <span className="absolute text-gray-500 bg-white px-2 -top-2 text-xs left-4 transition duration-300 input-text">
                            Telefono
                        </span>
                    </label>

                    <button
                        onClick={generarOrden}
                        type="button"
                        className="button-primary mt-4"
                    >
                        Generar Orden
                    </button>
                </div>

                <div className="md:w-full mt-4 md:mt-0">
                    {
                        <table className="table-fixed w-full">
                            <tbody>
                                {cart.map((item) => (
                                    <tr key={item.id}>
                                        <td className="border py-2">
                                            <img
                                                className="w-28 block mx-auto md:w-12 lg:w-24"
                                                src={item.image}
                                                alt={item.title}
                                            />
                                        </td>
                                        <td className="border py-2 px-2">
                                            <span className="text-center block w-full truncate">
                                                {item.title}
                                            </span>
                                        </td>
                                        <td className="border py-2">
                                            <span className="w-full text-center block">
                                                ${item.price}
                                            </span>
                                        </td>
                                        <td className="border py-2">
                                            <span className="w-full text-center block">
                                                x{item.quantity}
                                            </span>
                                        </td>
                                        <td className="border py-2">
                                            <span className="w-full text-center block">
                                                ${item.quantity * item.price}
                                            </span>
                                        </td>
                                    </tr>
                                ))}

                                <tr className="border border-l-0 border-r-0">
                                    <td
                                        colSpan={4}
                                        className="py-2 pr-4 text-right"
                                    >
                                        <span className="font-bold text-xl">
                                            Total
                                        </span>
                                    </td>
                                    <td>
                                        <span className="font-bold text-lg text-center block">
                                            ${getSumProducts().toFixed(2)}
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    }
                </div>
            </div>

            <div className="mb-10">
                {orderId ? (
                    <div className="flex justify-center items-center flex-col bg-slate-100 py-2 w-3/4 mx-auto shadow-sm shadow-slate-300 rounded-md">
                        <p className="text-center">
                            Felicitaciones! Tu codigo de compra es:{" "}
                            <span className="font-bold">{orderId}</span>
                        </p>
                        <p className="text-xs">
                            Orden generada el {new Date().getDate()}-
                            {new Date().getMonth() + 1}-
                            {new Date().getFullYear()} a las {new Date().getHours()}:{new Date().getMinutes()}:{new Date().getSeconds()}
                        </p>
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default Checkout;
