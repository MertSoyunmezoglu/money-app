import React from 'react'
import BasketItem from './BasketItem'

 function Basket({basket, total, products , resetBasket}) {
  return (
    <>
    <div className="basket-container container">
    <h2>Alışveriş Detayları</h2>
    {
      basket.map(item => ( 
      <BasketItem item={item} product={products.find(p => p.id === item.id)} />
      ))}
     
          <div className='total'>
          Toplam : ${total}
          </div>

          <button className='basket-reset-btn' onClick={resetBasket}>Sepeti Sıfırla</button>
</div>
    </>
     
  )
}
export default Basket