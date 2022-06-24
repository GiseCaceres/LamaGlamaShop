import { useContext } from "react";
import { CartContext } from "./CartContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Cart = () => {
    const test = useContext(CartContext);

    return (
        
        <div> 
                <h2 style={{textAlign:'center'}}>Tus productos seleccionados</h2>
                <Container  className= "d-flex justify-content-around">
                    <Link to='/'><Button variant="dark" className="p-2 col-example text-left">Continuar comprando</Button></Link>
                    {
                        (test.cartList.length > 0)
                        ? <Button variant="danger" onClick={test.removeList} className="p-2 col-example text-left">Borrar productos</Button>
                        : <p>TU CARRITO DE COMPRAS ESTA VACIO</p>
                    }
                </Container>
        
                {
                    test.cartList.length > 0 ? 
                    test.cartList.map(producto=> 
                        <Container className= "d-flex justify-left" style={{margin:'3%'}}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Body >
                                            <Card.Img variant="top" src={producto.imgItem} />
                                            <Card.Title>{producto.nameItem}</Card.Title>
                                            <Card.Text>{producto.descriptionItem}</Card.Text>
                                            <Card.Text>Precio por unidad: {producto.costItem}</Card.Text>
                                            <Card.Text>Cantidad: {producto.qtyItem}</Card.Text>
                                            <Button onClick={() => test.deleteItem(producto.idItem)}>Borrar producto</Button>
                                        </Card.Body>
                                    </Card>            
                        </Container>               
                        )
                    :<h1></h1>
                        
                }
          
        </div>
            
              
    )   
}    

export default Cart;