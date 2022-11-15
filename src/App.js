import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';

import Dino from './screens/Dino/Dino';
import Fly from './screens/Fly/Fly';

function App() {
  return (
    <>
      
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='dino' element={<Dino/>}/>
            <Route path='fly' element={<Fly/>}/>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
