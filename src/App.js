import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Basket from './screens/Basket/Basket';
import Details from './screens/Details/Details';

import Dino from './screens/Dino/Dino';
import Flowers from './screens/Flowers/Flowers';
import Fly from './screens/Fly/Fly';

function App() {
  const [basketList, setBasketList] = useState([])
  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout basketList={basketList}/>}>
            <Route path='dino' element={<Dino setBasketList={setBasketList}/>}/>
            <Route path='fly' element={<Fly setBasketList={setBasketList}/>}/>
            <Route path='flowers' element={<Flowers setBasketList={setBasketList}/>}/>
          </Route>
          <Route path='/details/:id' element={<Details/>}/>
          <Route path='/basket' element={<Basket basketList={basketList}/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
