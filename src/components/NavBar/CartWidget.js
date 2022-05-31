import {FaShoppingCart} from "react-icons/fa";
import React, {Component} from 'react';
import { Badge, Button } from "react-bootstrap";



const Icons = ({carrito}) =>{

    return(
        <>
        <Button variant="dark"><FaShoppingCart style={{color:'white',fontSize:'2vw'}}/>{carrito} <Badge bg="secondary"></Badge></Button>
        </>
    );


}

export default Icons;