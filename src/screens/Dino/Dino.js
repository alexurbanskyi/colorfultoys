import React from 'react'
import Card from '../../components/Card/Card.js';
import {dino} from '../../ToyData/ToyData.js'
import './Dino.css'


function Dino() {
  return (
    <div className='dino'>
      {
        dino.map((item) => <Card  key={item.id} data = {item}/>)
      }
    </div>
  )
}

export default Dino;