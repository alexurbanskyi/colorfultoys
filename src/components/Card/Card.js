import React, { useState } from 'react'
import './Card.css'



function Card({data}) {

  const [pcs, setPcs] = useState(1)
  
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
   </div>
  )
}

export default Card