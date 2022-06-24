import {useState} from "react";
import Button from 'react-bootstrap/Button';

const ItemCount = ({ stock, addCarrito, onAdd }) => {

    const [contador, setContador] = useState(0);
  
    const increment = () => {
      if (contador < stock) {
  
        setContador(contador + 1);
      }
    };
  
    const decrement = () => {
      if (contador > 0) {
  
        setContador(contador - 1);
  
      }
    };
    
    return (
  
      <div>
  
        <div className="text-center m-2">
          <Button variant="dark"  onClick={increment}>+</Button>
          <span className="m-2">{contador}</span>
          <Button variant="dark"  onClick={decrement}>-</Button>
        </div>
  
        <div className="m-2">
          <Button variant="dark" onClick={() => onAdd(contador)} style={{width:'100%'}}>Agregar al carrito</Button>
        </div>
      
  
      </div>
  
    );
  
  
  };

  export default ItemCount;