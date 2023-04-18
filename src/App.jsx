import { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import Tools from './pages/Tools/Tools.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
import NoPage from './pages/NoPage/NoPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' index element={<Home />} />
          <Route path='ferramentas' element={<Tools />} />

          <Route path='sobre' element={<About />} />

          <Route path='contato' element={<Contact />} />

          <Route path="*" element={<NoPage />} />
        <Route />
      </Routes>

      <Footer />  
    </BrowserRouter>
  )
}

export default App
