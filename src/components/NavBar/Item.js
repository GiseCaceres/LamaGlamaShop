import React from "react";
import ItemCount from "./itemCount";
import 'bootstrap/dist/css/bootstrap.min.css';

const Item = ({productos}) => {
    const {name, description, image, stock} = productos;
    return(
        <div className="card" style={{width:'15rem', margin:'2rem'}}>
            <img src={image} className="card-img-top" alt={name}/>
            <div className="card-body">
                <p className="card-text">{name}</p>
                <p className="card-text">{description}</p>
            </div>
            <ItemCount stock={stock}/>   
        </div>
       
    )
}

export default Item;