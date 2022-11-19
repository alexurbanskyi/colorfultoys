import React from 'react'
import Card from '../../components/Card/Card.js';
import {dino} from '../../ToyData/ToyData.js'
import './Dino.css'


function Dino({setBasketList}) {
  return (
    <div className='dino'>
      {
        dino.map((item) => <Card  key={item.id} data = {item} setBasketList={setBasketList}/>)
      }
    </div>
  )
}

export default Dino;