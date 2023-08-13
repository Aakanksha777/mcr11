import './App.css';
import {Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <h2>MCR-11 on progress.</h2>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/cart'>Cart</NavLink>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
