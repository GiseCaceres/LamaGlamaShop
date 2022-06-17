import React from "react";
import Item from "./Item";

const ItemList = ({Products}) => { //recibe props
    return(
        <div className="d-flex justify-content-center flex-wrap">
            {Products.map((productos)=><Item key={productos.id} productos={productos} id={productos.id}/>)}
        </div>
    )
} 

export default ItemList;