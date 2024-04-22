import { AiFillStar, AiFillHeart, AiOutlineStar, AiFillEye } from "react-icons/ai";

const Item = ({ item }) => {

    return (
        <div className="card">
            <img
                className="w-full h-full object-cover"
                src={item.imageURL}
                alt={item.title}
            />

            <div className="p-5 flex flex-col gap-3">
                {/* Badge */}
                <div className="flex items-center justify-between gap-2">
                    <span className={item.stock > 0 ? "badge bg-green-400 text-white" : "badge bg-red-400 text-white"}>
                        {item.stock > 0 ? "Disponible" : "Agotado"}
                    </span>
                    <span className="badge">Categoria</span>
                </div>

                {/* Product title */}
                <h2 className="product-title">{item.title}</h2>

                {/* Product price */}
                <div>
                    <span className="text-xl font-bold">${item.price}</span>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm line-through opacity-50">
                            ${item.price - item.price * 0.1}
                        </span>
                        <span className="discount-percent">10% Off</span>
                    </div>
                </div>

                {/* product rating */}
                <span className="flex items-center mt-1">
                    <AiFillStar style={{ color: "orange" }} />
                    <AiFillStar style={{ color: "orange" }} />
                    <AiFillStar style={{ color: "orange" }} />
                    <AiOutlineStar style={{ color: "orange" }} />
                    <AiOutlineStar style={{ color: "orange" }} />
                    <span className="text-xs ml-2 text-gray-500">
                        458 revisiones
                    </span>
                </span>

                {/* Add to cart button */}
                <div className="mt-5 flex gap-2">
                    <button className={item.stock === 0 ? "button-disabled" : "button-primary"} disabled={item.stock === 0}>Agregar</button>
                    <button className="opacity-50 text-xl button-icon hover:opacity-100 transition">
                        <AiFillHeart />
                    </button>
                    <button className="opacity-50 text-xl button-icon hover:opacity-100 transition">
                        <AiFillEye />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Item;
