import React from 'react'
import './Card.css'
// import foto from '../../images/dino/id1.jpg'

function Card({data}) {
  return (
   <div className='card'>
      <div className='card-title'>{data.name}</div>
      <div className='foto-holder'>
         <img className='card-foto' src={data.foto}/>
      </div>
   </div>
  )
}

export default Card