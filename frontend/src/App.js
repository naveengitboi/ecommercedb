import React from 'react';
import './App.css';
import {Routes , Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Product from './Components/Product';
import Footer from './Components/Footer';
import Signup from './Components/Signup';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
