import React from 'react'
import Card from '../../components/Card/Card.js';
import {fly} from '../../ToyData/ToyData.js'
import './Fly.css'

function Fly() {
  return (
    <div className='fly'>
      {
        fly.map((item) => <Card key={item.id} data = {item}/>)
      }
    </div>
  )
}

export default Fly;