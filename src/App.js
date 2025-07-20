
import './App.css';
import React from 'react';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Go_shopping from './pages/Go_shopping/Go_shopping';
import { Route, Routes } from 'react-router-dom';
import Nav from "./component/Nav/Nav"
import Search from './pages/Search/Search';
import Footer from './component/Footer/Footer';




function App() {


  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Go_shopping' element={<Go_shopping />} />
        <Route path='/Search' element={<Search />} />
      </Routes>
      <Footer />

    </>
  );
}


export default App;
