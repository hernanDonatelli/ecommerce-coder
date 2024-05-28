import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import BounceLoader from "react-spinners/BounceLoader";
import { useParams } from "react-router-dom";
import {
    collection,
    getDocs,
    getFirestore,
    query,
    where,
} from "firebase/firestore";

const override = {
    display: "block",
    margin: "4rem auto",
};

const ItemListContainer = ({ greeting }) => {
    const color = "#e5097f";
    const { idCategory } = useParams();
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    //Accedo a la coleccion utilizando filtros
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "productos");
        const resultQuery = idCategory ? query(itemsCollection, where("category", "==", idCategory)): itemsCollection;
        getDocs(resultQuery).then(snapShot => {

            if (snapShot.size > 0) {
                setProductos(snapShot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
                setLoading(false);
            } else {
                console.log("No existe el documento!");
                setProductos([]);
                setLoading(false);
            }
        });
    }, [idCategory]);

    return (
        <div>
            <h1 className="text-3xl roboto-black h-full flex justify-center items-center p-10">
                {greeting}
            </h1>

            <div className="flex justify-center w-3/4 mx-auto md:w-full lg:w-3/4 2xl:w-full">
                <div>
                    {loading ? (
                        <BounceLoader
                            color={color}
                            loading={loading}
                            cssOverride={override}
                            size={40}
                            aria-label="Cargando..."
                            data-testid="loader"
                            speedMultiplier={1.5}
                        />
                    ) : (
                        <ItemList productos={productos} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ItemListContainer;
