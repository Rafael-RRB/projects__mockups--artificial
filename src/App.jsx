import { useState, useEffect } from 'react';
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
  // Moved some localStorage data creation to here, which I assume is the correct thing to do.
  let loginList;
  let loginUser;
  let loginUserIndex;
  let loginUserData;
  // This creates a basic 'loginList' object for localStorage.
  if(localStorage.getItem('loginList') === null) {
    // If there is no localStorage data, create it.
    console.log('No login list exists in local storage. Login list with Admin account will be created now. Email: admin, Password: admin.');
    let myObject = [{
      "user": "admin",
      "pwd": "admin",
      "imgBase64": "data:image/webp;base64,UklGRh4DAABXRUJQVlA4WAoAAAAwAAAAMQAAMQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZBTFBIdQAAAAFHIBBI4SYXEREGOLFta1k+nOjQSUzAossQiC6R+A3glzPvT/67/gQtov8TYP6ADzsUXcBWNQkw1uTASQPwkXScs8Q4S00CtDVroKoxDzsw5V49ZpPHviro5LhHwRd/vVgaGBfLA9NiBE8lygLLYrdAvdjPHQBWUDggsgAAAPAGAJ0BKjIAMgA+bTSWR6QjIiEoFAoAgA2JYwB4g3AHqA2wG4A3gDeTMj5LFTYxWWRCwClFanUrvcQQfMvl9gAA/vyuMf7TL//+XT2BvBgLoSZF7rMcjcb44jKM2q//puf6XjvSPy0xl4Fy846i9uOcv3olai4BUPepbV3FzxTQ1fcO2Ev7n0Gy6WOxTqD5/nWvA1PXkW5TMVhFuUW0COJkvtOhUf4xtGgZCliP5bsAAAA=",
      'favorites': []
    }];
    let userObject = {
      'user': 'anonymous',
      'status': 'no-acc'
    }
    localStorage.setItem('loginList', JSON.stringify(myObject));
    localStorage.setItem('loginStatus', JSON.stringify(userObject));
    loginList = myObject;
    loginUser = 'anonymous';
    loginUserIndex = -1;
    loginUserData = [];
  } else {
    // If there is localStorage data, retrieve it.
    if(localStorage.getItem('loginList') !== null) {
      loginList = JSON.parse(localStorage.loginList);
      loginUser = JSON.parse(localStorage.loginStatus).user;
      loginUserIndex = loginList.findIndex(user => user.user === loginUser);
      loginUserData = loginList[loginUserIndex];
    }
  }

  // Gallery related functions
  const [galleryJSON, setGalleryJSON] = useState(null);
      
  // function to fetch the gallery and update state
  async function fetchGallery() {
    let parsedJSON;
    if(localStorage.getItem('gallery') !== null) {
      console.log('Gallery exists in localStorage. Retrieving data...');
      parsedJSON = JSON.parse(localStorage.getItem('gallery'));
      setGalleryJSON(parsedJSON);
    } else {
      const gallery = await fetch('./gallery.json');
      const galleryConvertion = await gallery.json();
      localStorage.setItem('gallery', JSON.stringify(galleryConvertion));
      parsedJSON = galleryConvertion;
      setGalleryJSON(galleryConvertion);
    }

    // Which image should appear when the Gallery page is opened.
    if(localStorage.lastViewed === undefined && localStorage.gallery !== undefined) {
      localStorage.setItem('lastViewed', JSON.stringify({
        source: parsedJSON.categories.animal[0].source,
        view: parsedJSON.categories.animal[0].view,
        alt: parsedJSON.categories.animal[0].alt
      }));
    }
  }  
  
  // This feels a bit sloppy, but I'm not sure what's the best way to do this.
  const [refreshCounter, setRefreshCounter] = useState(0);
  function forceRefresh() {
    setRefreshCounter(refreshCounter + 1);
  }  

  // Runs once, when APP is mounted
  useEffect(() => {
    fetchGallery();
  }, []);

  return (
    <BrowserRouter>
      <Header loginData={{loginList, loginUser, loginUserIndex, loginUserData}} />

      <Routes>
        <Route path='/' index element={<Home gallery={galleryJSON} />} />
          <Route path='conta' element={<Account refresh={forceRefresh} />} />

          <Route path='login' element={<Login loginData={{loginList, loginUser, loginUserIndex, loginUserData}} />} />

          <Route path='ferramentas' element={<Tools />} />

          <Route path='sobre' element={<About />} />

          <Route path='contato' element={<Contact />} />
          
          <Route path='galeria' element={<Gallery gallery={galleryJSON} />} />

          <Route path="*" element={<NoPage />} />

          
        <Route />
      </Routes>

      <Footer />
      <ScrollPage action='top' />
    </BrowserRouter>
    
  )
}

export default App
