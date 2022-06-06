import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getData } from "../../mocks/FakeApi";
const {productos} = require ("../../mocks/FakeApi");



const ItemDetailContainer = () =>{
    const [Dato, setDato] = useState({});


    useEffect(() => {
        getData(2000, productos)
            .then(result => setDato(result[2]))
            .catch(error => console.log(error))
    },  []);
    //console.log(productos)

    return(
        <ItemDetail producto={Dato}/>
    )
}

export default ItemDetailContainer;