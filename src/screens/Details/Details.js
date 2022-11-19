import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import { dataToy } from '../../ToyData/ToyData'
import './Details.css'

function Details() {
  const {id} = useParams()
  const navigate = useNavigate();
  const goBack = () => navigate(-1)
  
  const data = dataToy.find((item) => item.id === id)
 
  return (
    <div className='details'>
      <div className='details-title'>{data.name}</div>
      <div className='details-foto'><img src={data.foto}/></div>
      <div className='details-discription'>{data.discription}</div>
      
      <div className='details-size-title'>Розмір</div>
      <div className='details-size'>{data.size.width} x {data.size.hight}</div>

      <button onClick={() => goBack()}>ДО КАТАЛОГУ</button>
    </div>
  )
}

export default Details