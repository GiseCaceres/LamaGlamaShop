import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from './components/NavBar/NavBar';
//import ItemCount from './components/NavBar/ItemListContainer';
//import { useState } from "react";
//import ItemListContainer from './components/NavBar/ItemListContainer';
import ItemDetailContainer from './components/NavBar/ItemDetailContainer';



const App = () => {
  //const [carrito, setCarrito]=useState(0);

  // const addCarrito=(number)=>{
  //   return setCarrito(number)
  // }


  return (
    <div className="App">
      
      <NavBarComp/>
      <h1>LamaGlama</h1>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
