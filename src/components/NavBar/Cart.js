import { useContext } from "react";
import { CartContext } from "./CartContext";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const Cart = () => {

  const test = useContext(CartContext);

  return (

    <div>

      <h2 style={{ textAlign: "center" }}>Tus productos seleccionados</h2>

      <Container className="d-flex justify-content-around" >

        <Link to="/">

          <Button variant="dark" className="p-2 col-example text-left">Continuar comprando</Button>

        </Link>

        {test.cartList.length > 0 ? (

          <Button variant="danger" onClick={test.removeList} className="p-2 col-example text-left">Borrar productos</Button>

        ) : (

          <p>TU CARRITO DE COMPRAS ESTA VACIO</p>

        )}

      </Container>

        <div style={{ display: "flex", margin:'3%'}}>

            {test.cartList.length > 0 ? (

            test.cartList.map((producto) => (

                <div className="card text-center" style={{ width: "15rem"}}>
                    <img src={producto.imgItem} className="card-img-top" alt={producto.nameItem}/>
                    <div className="card-body">
                        <p className="card-text">{producto.nameItem}</p>
                        <p className="card-text">Cantidad:{producto.costItem}</p>
                        <p className="card-text">Precio por unidad:{producto.qtyItem}</p>
                    </div>

                    <Button onClick={() => test.deleteItem(producto.idItem)}>Borrar producto</Button>
                </div>
                
            ))

            ) : (

            <h1></h1>

            )}
        </div>

        <div>
            {
                test.cartList.length > 0 &&
                <div className="card text-center" style={{width:'15rem', margin:'3%'}}>
                    <h4>DETALLE DE COMPRA </h4>
                    <p className="card-text">Catidad</p>
                    <p className="card-text">Subtotal</p>
                    <p>{parseInt(test.calcSubTotal())}</p>
                    <p className="card-text">Total</p>
                </div>
            }
        </div>
    </div>
  );
};

export default Cart;