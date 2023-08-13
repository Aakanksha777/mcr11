import './App.css';
import {Routes, Route, NavLink } from 'react-router-dom';
import Card from './components/card/Card';
import Starred from './components/starred/Starred';
import CardDetails from './components/cardDetails/CardDetails';
import Modal from './components/modal/Modal';

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
        <Route path='/modal' element={<Modal/>}/>
      </Routes>
    </div>
  );
}

export default App;
