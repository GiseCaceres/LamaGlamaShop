import React from "react";
import Item from "./Item";

const ItemList = (Products) => { //recibe props
    return(
        <div className="d-flex justify-content-between flex-wrap">
            {Products.map((productos)=><Item key={productos.id} productos={productos}/>)}
        </div>
    )
} 

export default ItemList;