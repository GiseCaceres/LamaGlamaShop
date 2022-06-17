import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getData } from "../../mocks/FakeApi";
import { useParams } from "react-router-dom";




const ItemDetailContainer = () =>{
    const [dato, setDato] = useState({});
    const {id} = useParams();

    useEffect(() => {
        getData
            .then(result => setDato(result.find(item => item.id === parseInt(id))))
            .catch(error => console.log(error))
    },  []);
    //console.log(productos)

    return(
        <ItemDetail producto={dato}/>
    )
}

export default ItemDetailContainer;