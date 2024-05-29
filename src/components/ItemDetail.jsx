import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import NotFound from "./NotFound";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    };



    return (
        <>
            <ToastContainer position="top-right" transition={Slide} hideProgressBar={false} pauseOnHover={true} closeOnClick={true} limit={3} theme="colored" autoClose={2000} />

            {item.length !== 0 ? (
                <div className="flex flex-col justify-center items-center lg:flex-row gap-4 mt-10 sm:mt-15 h-full md:mt-10 lg:w-3/4 lg:mx-auto lg:mt-20 2xl:w-2/3">
                    <div className="flex items-center justify-center h-full w-3/4 lg:w-1/3">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full object-contain md:h-96 lg:h-80"
                        />
                    </div>

                    <div className="w-full md:w-3/4 lg:w-2/3 p-6 sm:mt-0 2xl:w-1/2 2xl:p-0">
                        <h3 className="text-base flex text-links-hover">
                            {item.category}
                        </h3>
                        <h1 className="text-2xl font-black pb-3 flex">
                            {item.title}
                        </h1>
                        <p className="text-base text-gray-500">
                            {item.description}
                        </p>
                        <p className="text-3xl font-black pt-3 flex">
                            ${item.price}
                        </p>
                        <p>
                            {item.stock > 0
                                ? <span className="text-gray-400 text-sm">Stock disponible: {item.stock}u</span>
                                : <span className="text-red-600 font-bold text-sm">Sin stock</span>}
                        </p>
                        <ItemCount stock={item.stock} onAdd={onAdd} />
                    </div>
                </div>
            ) : (
                <NotFound />
            )}
        </>
    );
};

export default ItemDetail;
