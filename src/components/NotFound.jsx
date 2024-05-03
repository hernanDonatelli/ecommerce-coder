const NotFound = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center mt-[-5rem]">
            <h1 className="font-bold text-paragraph items-center text-3xl">
                Error 404 - Pagina no encontrada
            </h1>
            <p className="text-paragraph items-center text-base">
                La pagina que intentas buscar no existe o ha sido eliminada
            </p>
        </div>
    );
};

export default NotFound;
