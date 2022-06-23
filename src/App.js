import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/NavBar/ItemListContainer';
import ItemDetailContainer from './components/NavBar/ItemDetailContainer'
import CartContextProvider from './components/NavBar/CartContext';
import Cart from './components/NavBar/Cart';

const App = () => {

  return (
    <CartContextProvider value={"coder"}>
      <BrowserRouter>
        <NavBarComp/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/categoryId/:id" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/Cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
