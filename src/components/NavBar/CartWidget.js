import {FaShoppingCart} from "react-icons/fa";
import { Badge, Button } from "react-bootstrap";



const Icons = ({carrito}) =>{

    return(
        <>
        <Button variant="dark"><FaShoppingCart style={{color:'white',fontSize:'2vw'}}/> {carrito}2 <Badge bg="secondary"></Badge></Button>
        </>
    );


}

export default Icons;