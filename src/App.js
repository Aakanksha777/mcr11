import './App.css';
import {Routes, Route, NavLink } from 'react-router-dom';
import Card from './components/card/Card';
import Starred from './components/starred/Starred';
import CardDetails from './components/cardDetails/CardDetails';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
      <NavLink to='/' className='links'>Movies</NavLink>
      <NavLink to='/star' className='links'>Star</NavLink>
      </div>

      <Routes>
        <Route path='/' element={<Card/>}/>
        <Route path='/:id' element={<CardDetails/>}/>
        <Route path='/star' element={<Starred/>}/>
      </Routes>
    </div>
  );
}

export default App;
