import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";

const Item = ({ item }) => {
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

                {/* Titulo */}
                <h2 className="product-title">{item.title}</h2>

                {/* Precio */}
                <div className="flex flex-col">
                    <span className="text-2xl font-bold">${item.price}</span>
                    <span className="text-sm text-gray-500">
                        Stock: {item.stock}u
                    </span>
                </div>

                {/* Rating */}
                <span className="flex items-center mt-1">
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

                {/* Botón */}
                <div className="mt-5 gap-2">
                    <button className="button-primary w-full">
                        <NavLink to={`/item/${item.id}`}>Ver Producto</NavLink>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Item;
