import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl text-center roboto-black mb-4">Lista de Productos</h2>
            <div className="flex justify-center items-center gap-4 flex-wrap">
                {items.map((item) => (
                    <Item key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default ItemList;
