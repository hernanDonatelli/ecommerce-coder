import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { BounceLoader } from "react-spinners";
import {
    doc,
    getDoc,
    getFirestore
} from "firebase/firestore";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const color = "#e5097f";
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const override = {
        display: "block",
        margin: "4rem auto",
    };

    //Accedo a un documento de Firestore
    useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, "productos", id);
        getDoc(docRef).then((snapShot) => {
            if (snapShot.exists()) {
                setItem(
                    {id: snapShot.id, ...snapShot.data()}
                );
                setLoading(false);
            } else {
                setItem([]);
                setLoading(false);
            }
        });
    }, [id]);

    return (
        <>
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
                <ItemDetail item={item} />
            )}
        </>
    );
};

export default ItemDetailContainer;
