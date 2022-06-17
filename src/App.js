import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/NavBar/ItemListContainer';
import ItemDetailContainer from './components/NavBar/ItemDetailContainer'

const App = () => {

  return (
    <BrowserRouter>
      <NavBarComp/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/categoryId/:id" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
