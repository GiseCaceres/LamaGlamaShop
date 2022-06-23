import { useContext } from "react";
import { CartContext } from "./CartContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

const Cart = () => {
    const test = useContext(CartContext);

    return (
        <>
            <div>
                <h1>Tu carrito de compras</h1>
            
                    <Link to='/'><Button>CONTINUAR COMPRANDO</Button></Link>
                    {
                        (test.cartList.length > 0)
                        ? <Button type="filled" onClick={test.removeList}>Borrar productos</Button>
                        : <p>TU CARRITO DE COMPRAS ESTA VACIO</p>
                    }

           
                {
                    test.cartList.length > 0 ? 
                    test.cartList.map(producto=> 
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Img variant="top" src={producto.image} />
                            <Card.Title>{producto.name}</Card.Title>
                            <Card.Text>{producto.description}</Card.Text>
                            <Card.Text>{producto.cost}</Card.Text>
                            <Button onClick={() => test.deleteItem(producto.id)}>Borrar producto</Button>
                        </Card.Body>
                    </Card>
                    )
                    :<h1></h1>
    
                }
                </div>
                

        </>        
    )   
}    

export default Cart;