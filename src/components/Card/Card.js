import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

function Card({data, setBasketList}) {

   const [pcs, setPcs] = useState(1)

   function addToBasket(item){
      setBasketList((prev) => [...prev, {...item, pcs: pcs}])
   }

   return (
   <div className='card'>
      <div className='card-title'>{data.name}</div>
      <div className='foto-holder'>
         <img className='card-foto' src={data.foto}/>
      </div>
      <div className='add-item'>
         <button className='add-button' onClick={() => {
            if (pcs <= 1) {
               setPcs(1)
            } else {
               setPcs((prev)=> prev - 1)}
            }
         }
         >-</button>
         <div className='item-pcs'>{pcs}</div>
         <button className='add-button'onClick={() => setPcs((prev)=> prev + 1)}>+</button>
      </div>
      <div className='link-holder' >
         <Link className='detail-link' to={`/details/${data.id}`}>опис</Link>  
      </div>
      <div className='link-holder' >
         <div className='basketIcon-link' onClick={() => addToBasket(data)}>
            додати у кошик 
         </div>
      </div>
      <div className='item-price'>{data.price} грн</div>
   </div>
  )
}

export default Card