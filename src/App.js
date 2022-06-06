import Header from './components/Header';
import './App.css';
import { useEffect, useState } from 'react';
import products from './products.json';
import Product from './components/Product';
import Basket from './components/Basket';

function App() {

  const [money, setMoney] = useState(128000000000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  
  const resetBasket=() =>{
    setBasket([])
  }
  useEffect(() => {
    setTotal(basket.reduce((acc,item) => {
      return acc + (item.amount * ( products.find(product=> product.id === item.id).price ))
    },0),)
  }, [basket])
  

  return (
    <div className="App">

      <Header total={total} money={money}/>
      <div className="container products">
      {
        products.map(product=>(
          <Product key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product={product}/>
        ))}
        </div>
        {total > 0 && (
          <Basket basket={basket} resetBasket={resetBasket} total={total} products={products}/>
        )}

    </div>
  );
}

export default App;
