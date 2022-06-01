import React from 'react';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getData } from '../../mocks/FakeApi'; // se pone llaves porque importo solo un archivo en particular

const ItemListContainer = ({greeting}) => {
  const [Products, setProducts] = useState ([]);
  const [Cargando, setCargando] = useState (false);


  //useState para mostrar array
  useEffect(()=>{
      setCargando(true)
      getData
      .then((res)=>setProducts(res)) //peticion, un pedido por ejemplo
      .catch((error)=>console.log(error)) //rechazo
      .finally(()=>setCargando(false)) //se ejecuta siempre
    },[])
    console.log(Products)

  return(
    <div>
      <h1>{greeting}</h1>
      <ItemList Products={Products}/>
      {Cargando ? <p>Cargando...</p> : <ItemList Products={Products}/>}

    </div>
  )
}

export default ItemListContainer;
