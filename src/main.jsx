import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/* This was code I've used to generate the first barebones version of the gallery.json file (to prevent manual creation). Considering that...
... the JSON file has over 1000 lines, I think this was a good idea.

// Simple variable declaration, with initial empty values.
let json = {
  "name": "galleryInfo",
  "categories": {
      "animal": [],
      "chara": [],
      "food": [],
      "people": [],
      "places": [],
  }
}

// For each category, this will generate forty objects.
Object.keys(json.categories).forEach((category, index) => {
  // Since the filenames are in uppercase, a simple convertion is needed.
  const categoryName = category.toUpperCase();

  for(let i = 0; i < 40; i++) {
    // Thanks to ChatGPT, I've learned about "padStart". Yes, I wrote an entire function before this...
    const numberID = (i + 1).toString().padStart(4, "0");

    json.categories[category].push({
      "source": `IMG__${categoryName}__SRC--${numberID}`,
      "thumbnail": `IMG__${categoryName}__THUMB--${numberID}`,
      "view": `IMG__${categoryName}__VIEW--${numberID}`,
      "alt": ""
    })
  }
});

console.log(json);

*/