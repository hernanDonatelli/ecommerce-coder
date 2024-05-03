import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
    AiFillStar,
    AiFillHeart,
    AiOutlineStar,
    AiFillEye,
} from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";

const ItemDetail = ({ item }) => {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div data-aos="zoom-in" data-aos-duration="1000" className="card">
            <img
                className="mx-auto md:w-full object-contain h-60"
                src={item.image}
                alt={item.title}
            />

            <div className="p-5 flex flex-col gap-3">
                {/* Badge */}
                <div className="flex items-center justify-between gap-2">
                    <span
                        className={
                            item.stock > 0
                                ? "badge bg-green-400 text-white"
                                : "badge bg-red-400 text-white"
                        }
                    >
                        {item.stock > 0 ? "Disponible" : "Agotado"}
                    </span>
                    <span className="badge">{item.category}</span>
                </div>

                {/* Product title */}
                <h2 className="product-title">{item.title}</h2>

                {/* Product price */}
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">
                        ${(item.price - item.price * 0.1).toFixed(2)}
                    </span>

                    {/* Discounted price */}
                    {item.price > 300 && (
                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-sm line-through opacity-50">
                                ${item.price}
                            </span>
                            <span className="discount-percent">10% Off</span>
                        </div>
                    )}
                </div>

                {/* product rating */}
                <span className="flex items-center mt-1">
                    {/* Rating stars */}
                    {Array(Math.round(item.rating.rate))
                        .fill(0)
                        .map((_, i) => (
                            <AiFillStar key={i} style={{ color: "orange" }} />
                        ))}
                    {Array(5 - Math.round(item.rating.rate))
                        .fill(0)
                        .map((_, i) => (
                            <AiOutlineStar
                                key={i}
                                style={{ color: "orange" }}
                            />
                        ))}

                    <span className="text-xs ml-2 text-gray-500">
                        {item.rating.count} reviews
                    </span>
                </span>

                {/* Add to cart button */}
                <div className="mt-5 flex gap-2">
                    <button
                        className={
                            item.stock === 0
                                ? "button-disabled"
                                : "button-primary"
                        }
                        disabled={item.stock === 0}
                    >
                        Agregar
                    </button>
                    <button className="opacity-50 text-xl button-icon hover:opacity-100 transition">
                        <AiFillHeart />
                    </button>
                    <button className="opacity-50 text-xl button-icon hover:opacity-100 transition">
                        <NavLink to={`/item/${item.id}`}>
                            <AiFillEye />
                        </NavLink>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
