import React from 'react'
import { Link } from 'react-router-dom';
import './Basket.css'

function Basket({basketList}) {
    console.log('BASKET --->',  basketList)
    let totalCoast = 0;

    if (basketList.length > 0 ){
      totalCoast = basketList.reduce((acc, item) => {
        acc = acc*1 + (item.pcs*item.price)
        return acc
      },[])
      console.log('TOTAL --->',totalCoast)
    }

  return (
    <div className='basket'>
      {
        !(basketList.length <= 0) 
        ?
        <>
        <div className='basket-title'>Ваше замовлення</div>
        <div>
          {
            basketList.map((item) => <div key={item.id} className='order-item'>
              <div className='order-image-holder'><img className='order-image' src={item.foto}/></div>
              <div>{item.pcs} шт</div>
              <div>{item.pcs*item.price} грн</div>
            </div> )
          }
        </div>
        <div className='totalCoast'>Загальна сума - <span className='coast'>{totalCoast}</span> грн</div>
        </>
        :
        <div className='empty-order'>
          <div className='empty-order-title'>Ваша корзина замовлень пуста! Перейдить до каталогу!</div>
          <div>
            <Link className='empty-order-link' to='/dino'> ДО КАТАЛОГУ</Link>
          </div>
        </div>
      }


    </div>
  )
}

export default Basket