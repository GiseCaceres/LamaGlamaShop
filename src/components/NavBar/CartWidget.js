import {FaShoppingCart} from "react-icons/fa";
import { Badge, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';



const Icons = ({carrito}) =>{

    const test = useContext(CartContext);

    return(
        <div>
            <Button variant="dark"><Link to='/Cart' style={{textDecoration:'none'}}><FaShoppingCart style={{color:'white',fontSize:'2vw'}}/><Badge bg="secondary" >{test.calcItemsQty()}</Badge></Link></Button>
        </div>
    );

}

export default Icons;