import { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Account from './pages/Account/Account.jsx';
import Home from './pages/Home/Home.jsx';
import Tools from './pages/Tools/Tools.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Gallery from './pages/Gallery/Gallery.jsx';
import Login from './pages/Login/Login.jsx';
import NoPage from './pages/NoPage/NoPage.jsx';

import ScrollPage from './components/ScrollPage/ScrollPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' index element={<Home />} />
          <Route path='conta' element={<Account />} />

          <Route path='login' element={<Login />} />

          <Route path='ferramentas' element={<Tools />} />

          <Route path='sobre' element={<About />} />

          <Route path='contato' element={<Contact />} />
          
          <Route path='galeria' element={<Gallery />} />

          <Route path="*" element={<NoPage />} />

          
        <Route />
      </Routes>

      <Footer />
      <ScrollPage action='top' />
    </BrowserRouter>
    
  )
}

export default App
