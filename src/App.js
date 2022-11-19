import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Details from './screens/Details/Details';

import Dino from './screens/Dino/Dino';
import Flowers from './screens/Flowers/Flowers';
import Fly from './screens/Fly/Fly';

function App() {
  return (
    <>
      
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='dino' element={<Dino/>}/>
            <Route path='fly' element={<Fly/>}/>
            <Route path='flowers' element={<Flowers/>}/>
          </Route>
          <Route path='/details/:id' element={<Details/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
