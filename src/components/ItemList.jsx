import ItemDetail from "./ItemDetail";

const ItemList = ({ productos }) => {

    return (
        <div className="max-w-7xl mx-auto transition-all duration-300 ease-in">
            <div className="flex justify-center items-center gap-4 flex-wrap">
                {productos.map((item) => (
                    <ItemDetail key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default ItemList;
