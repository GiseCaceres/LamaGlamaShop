import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getData } from "../../mocks/FakeApi";




const ItemDetailContainer = () =>{
    const [dato, setDato] = useState({});


    useEffect(() => {
        getData
            .then(result => setDato(result[1]))
            .catch(error => console.log(error))
    },  []);
    //console.log(productos)

    return(
        <ItemDetail producto={dato}/>
    )
}

export default ItemDetailContainer;