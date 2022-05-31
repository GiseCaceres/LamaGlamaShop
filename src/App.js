import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from './components/NavBar/NavBar';
import ItemCount from './components/NavBar/ItemListContainer';
import { useState } from "react";
import ItemListContainer from './components/NavBar/ItemListContainer';


const App = () => {
  const [carrito, setCarrito]=useState(0);

  const addCarrito=(number)=>{
    return setCarrito(number)
  }
  
  const greeting="Lama Glama Shop";

  return (
    <div className="App">
      <NavBarComp carrito={carrito}/>
      <ItemListContainer greeting={greeting} />
      <ItemCount addCarrito={addCarrito} stock={10} initial={0}/>
    </div>
  );
}

export default App;
