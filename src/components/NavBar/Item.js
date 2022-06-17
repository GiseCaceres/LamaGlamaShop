import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

const Item = ({productos}) => {
    const {id, name, description, image} = productos;
    return(
        <div className="card" style={{width:'15rem', margin:'2rem'}}>
            <img src={image} className="card-img-top" alt={name}/>
            <div className="card-body">
                <p className="card-text">{name}</p>
                <p className="card-text">{description}</p>
            </div>  
            <Button variant="dark" type="submit"><Link to={`/item/${id}`}  style={{color: 'white', textDecoration: 'none'}}>Comprar</Link></Button>
        </div>
       
    )
}

export default Item;