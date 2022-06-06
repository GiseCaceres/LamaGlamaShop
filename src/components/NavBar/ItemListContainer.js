import React from 'react';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getData } from '../../mocks/FakeApi'; // se pone llaves porque importo solo un archivo en particular

const ItemListContainer = () => {
  const [Products, setProducts] = useState ([])
  const [Cargando, setCargando] = useState (false)

    const getProducts = async () => {
      try{
        setCargando(true)
        const respuesta = await getData
        setProducts(respuesta)
      }catch(error){
        console.log(error)
      }finally{
        setCargando(false)
      }
    }

    useEffect(()=>{
      getProducts()

    },[])

  return(
    <div>
      {Cargando ?<h4>Cargando...</h4>:<ItemList Products={Products}/>}
    </div>
  )
}

export default ItemListContainer;
