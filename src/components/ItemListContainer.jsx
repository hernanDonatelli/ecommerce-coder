const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <h1 className="text-3xl roboto-black h-full flex justify-center items-center p-10">
                {greeting}
            </h1>
        </div>
    );
};

export default ItemListContainer;
