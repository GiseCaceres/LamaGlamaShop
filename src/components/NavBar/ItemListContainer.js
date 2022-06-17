import React from 'react';
import { useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ItemList from './ItemList';
import { getData } from '../../mocks/FakeApi'; // se pone llaves porque importo solo un archivo en particular

const ItemListContainer = () => {
  const [products, setProducts] = useState ([])
  const [cargando, setCargando] = useState (false)
  const {id} = useParams();
  console.log(id);
  useEffect(()=>{
    setCargando(true);
 
    getData
    .then((res)=>{
      if(id===undefined){
        setProducts(res)
      }else{
        setProducts(res.filter(item =>item.categoryId === parseInt(id)))
      }
    })
    .catch((error)=>console.log(error))
    .finally(()=>setCargando(false))
  },[id])

  return(
    <div className="d-flex justify-content-center flex-wrap">
      {cargando ?<h4>Cargando...</h4>:<ItemList Products={products}/>}
    </div>
  )
}

export default ItemListContainer;
