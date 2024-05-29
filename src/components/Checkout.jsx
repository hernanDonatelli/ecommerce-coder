import { useState, useContext, useRef } from "react";
import emailjs from "@emailjs/browser";
import { CartContext } from "../context/CartContext";
import {
    addDoc,
    collection,
    doc,
    getFirestore,
    updateDoc,
} from "firebase/firestore";
import { NavLink } from "react-router-dom";

const Checkout = () => {
    const { cart, clear, getTotalProducts, getSumProducts } =
        useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const [nombreError, setNombreError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [telefonoError, setTelefonoError] = useState("");
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (nombre === "") {
            setNombreError("Por favor, ingrese su nombre");
            return false;
        } else {
            setNombreError("");
        }

        if (email === "") {
            setEmailError("Por favor, ingrese su email");
            return false;
        } else {
            setEmailError("");
        }

        if (telefono === "") {
            setTelefonoError("Por favor, ingrese su teléfono");
            return false;
        } else {
            setTelefonoError("");
        }

        emailjs
            .sendForm("service_e5bfvfm", "template_2le1vf6", form.current, {
                publicKey: "XcpFl9Ds8mQUrTjD6",
            })
            .then(
                () => {
                    generarOrden();
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );

    };

    const obtenerTotal = () => {
        return cart.reduce((acumulador, item) => (acumulador += item.price), 0);
    };

    const generarOrden = () => {
        const fecha = new Date();
        const date = `${fecha.getDate()}-${
            fecha.getMonth() + 1
        }-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}hs`;

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

        const order = {
            buyer: buyer,
            items: items,
            total: obtenerTotal(),
            date: date,
        };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");

        //Agrego nuevo pedido
        addDoc(ordersCollection, order).then((data) => {
            setOrderId(data.id);
            clear();
        });

        //Actualizo el stock en base al pedido
        cart.forEach((item) => {
            const docRef = doc(db, "productos", item.id);
            updateDoc(docRef, {
                stock: item.stock - item.quantity,
            });
        });
    };

    if (orderId) {
        return (
            <div className="h-screen flex justify-center items-center -mt-20">
                <div className="flex justify-center items-center flex-col bg-slate-100 py-2 w-3/4 mx-auto shadow-sm shadow-slate-300 rounded-md">
                    <p className="text-center">
                        Felicitaciones! Tu codigo de compra es:{" "}
                        <span className="font-bold">{orderId}</span>
                    </p>
                    <p className="text-xs">
                        Orden generada el {new Date().getDate()}-
                        {new Date().getMonth() + 1}-{new Date().getFullYear()} a
                        las {new Date().getHours()}:{new Date().getMinutes()}:
                        {new Date().getSeconds()}
                    </p>
                </div>
            </div>
        );
    }

    if (getTotalProducts() == 0) {
        return (
            <div className="h-screen flex justify-center items-center -mt-20">
                <div className="flex justify-center items-center flex-col">
                    <p className="text-paragraph">
                        No hay productos en el carrito
                    </p>
                    <button className="button-primary mt-8">
                        <NavLink to={"/"}>Volver a la página principal</NavLink>
                    </button>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="flex justify-center items-center mt-16">
                <h2 className="text-3xl font-bold">Checkout</h2>
            </div>

            <div className="w-full px-4 mt-16 mb-8 sm:px-10 md:px-16 flex flex-col lg:flex-row justify-evenly items-center lg:gap-8 2xl:w-3/4 2xl:mx-auto">
                <div className="w-full md:w-full flex flex-col justify-center mb-10 lg:w-1/2 lg:mb-0">
                    <form ref={form} onSubmit={sendEmail}>
                        <label htmlFor="user_name" className="relative my-2">
                            <input
                                id="user_name"
                                name="user_name"
                                onInput={(e) => setNombre(e.target.value)}
                                className={
                                    nombreError == ""
                                        ? "w-full outline-none border-solid border-1 border-gray-200 rounded-lg px-4 py-2 focus:border-links-hover focus:border-opacity-50 transition duration-200 mt-3"
                                        : "w-full outline-none border-solid border-1 border-red-500 rounded-lg px-4 py-2 focus:border-links-hover focus:border-opacity-50 transition duration-200 mt-3"
                                }
                                type="text"
                                placeholder=""
                            />
                            <span
                                className={
                                    nombreError == ""
                                        ? "absolute text-gray-500 bg-white px-2 -top-5 text-xs left-4 transition duration-300 input-text"
                                        : "absolute text-red-500 bg-white px-2 -top-5 text-xs left-4 transition duration-300 input-text"
                                }
                            >
                                Nombre*
                            </span>
                            <div>
                                {nombreError ? (
                                    <p className="text-red-500 text-xs">
                                        {nombreError}
                                    </p>
                                ) : null}
                            </div>
                        </label>
                        <label htmlFor="user_email" className="relative my-2">
                            <input
                                id="user_email"
                                name="user_email"
                                onInput={(e) => setEmail(e.target.value)}
                                className={
                                    emailError == ""
                                        ? "w-full outline-none border-solid border-1 border-gray-200 rounded-lg px-4 py-2 focus:border-links-hover focus:border-opacity-50 transition duration-200 mt-3"
                                        : "w-full outline-none border-solid border-1 border-red-500 rounded-lg px-4 py-2 focus:border-links-hover focus:border-opacity-50 transition duration-200 mt-3"
                                }
                                type="text"
                            />
                            <span
                                className={
                                    emailError == ""
                                        ? "absolute text-gray-500 bg-white px-2 -top-5 text-xs left-4 transition duration-300 input-text"
                                        : "absolute text-red-500 bg-white px-2 -top-5 text-xs left-4 transition duration-300 input-text"
                                }
                            >
                                eMail*
                            </span>
                            <div>
                                {emailError ? (
                                    <p className="text-red-500 text-xs">
                                        {emailError}
                                    </p>
                                ) : null}
                            </div>
                        </label>

                        <label htmlFor="user_phone" className="relative my-2">
                            <input
                                name="user_phone"
                                id="user_phone"
                                onInput={(e) => setTelefono(e.target.value)}
                                className={
                                    telefonoError == ""
                                        ? "w-full outline-none border-solid border-1 border-gray-200 rounded-lg px-4 py-2 focus:border-links-hover focus:border-opacity-50 transition duration-200 mt-3"
                                        : "w-full outline-none border-solid border-1 border-red-500 rounded-lg px-4 py-2 focus:border-links-hover focus:border-opacity-50 transition duration-200 mt-3"
                                }
                                type="text"
                                minLength={10}
                            />
                            <span
                                className={
                                    telefonoError == ""
                                        ? "absolute text-gray-500 bg-white px-2 -top-5 text-xs left-4 transition duration-300 input-text"
                                        : "absolute text-red-500 bg-white px-2 -top-5 text-xs left-4 transition duration-300 input-text"
                                }
                            >
                                Telefono*
                            </span>
                            <div>
                                {telefonoError ? (
                                    <p className="text-red-500 text-xs">
                                        {telefonoError}
                                    </p>
                                ) : null}
                            </div>
                        </label>

                        <span className="text-xs">* Campos obligatorios</span>

                        <input
                            type="submit"
                            className="button-primary mt-4 cursor-pointer w-full"
                            value="Generar Orden"
                        />
                    </form>
                </div>

                <div className="md:w-full mt-4 md:mt-0">
                    {
                        <table className="table-fixed w-full">
                            <tbody>
                                {cart.map((item) => (
                                    <tr key={item.id}>
                                        <td className="border py-2">
                                            <img
                                                className="w-28 block mx-auto md:max-w-12 lg:max-w-20"
                                                src={item.image}
                                                alt={item.title}
                                            />
                                        </td>
                                        <td
                                            colSpan={2}
                                            className="border py-2 px-2 text-sm"
                                        >
                                            <p className="text-center block w-full truncate">
                                                <span className="text-md font-bold">
                                                    {item.quantity}x
                                                </span>{" "}
                                                {item.title}
                                            </p>
                                        </td>
                                        <td className="border py-2">
                                            <span className="w-full text-center block">
                                                ${item.price}
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
        </>
    );
};

export default Checkout;
