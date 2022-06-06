import {useState} from "react";

const ItemCount = ({ stock, addCarrito  }) => {

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
    


    const agregar = () => {
      addCarrito={contador};
      alert(`se agregaron ${contador} productos al carrito`);
      console.log(agregar);
    };
  
    return (
  
      <div className="flex gap-8 mt-4">
  
        <div className="flex ml-4 text-xl font-semibold">
  
          <button className="w-8 h-8 rounded-md" onClick={increment}>+</button>
  
          <span className="w-8 h-8 flex justify-center items-center">
  
            {contador}
  
          </span>
  
          <button className="w-8 h-8 rounded-md" onClick={decrement}>
  
            -
  
          </button>
  
        </div>
  
        <button className="w-44 h-8 text-white bg-black rounded-md shadow-2xl" onClick={agregar} style={{margin:'1rem'}}>agregar al carrito</button>
      </div>
  
    );
  
  
  };

  export default ItemCount;