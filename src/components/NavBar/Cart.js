import { useContext } from "react";
import { CartContext } from "./CartContext";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';




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
                            <div className="card text-center" style={{width:'15rem', margin:'2rem'}}>
                                <img src={producto.imgItem} className="card-img-top" alt={producto.nameItem}/>
                                <div className="card-body">
                                    <p className="card-text">{producto.nameItem}</p>
                                    <p className="card-text">Precio por unidad:{producto.costItem}</p>
                                    <p className="card-text">Precio por unidad:{producto.qtyItem}</p>
                                </div>  
                                <Button onClick={() => test.deleteItem(producto.idItem)}>Borrar producto</Button>
                            </div>

                    ):<h1></h1>         
                }
        </div>       
    )   
}    

export default Cart;