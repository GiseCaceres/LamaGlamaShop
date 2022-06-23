import {FaShoppingCart} from "react-icons/fa";
import { Badge, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';



const Icons = ({carrito}) =>{

    return(
        <>
        <Button variant="dark"><Link to='/Cart' style={{textDecoration:'none'}}><FaShoppingCart style={{color:'white',fontSize:'2vw'}}/><Badge bg="secondary">{carrito}2 </Badge></Link></Button>
        </>
    );


}

export default Icons;