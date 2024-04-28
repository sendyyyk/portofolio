import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/HomePage.jsx';
import About from './Pages/AboutPage.jsx';
import ErrorPage from './Pages/404errorPage.jsx';
import './assets/css-custom/style.css';

function App() {
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'src/assets/javascript/script.js'; // Ganti dengan jalur yang sesuai
  //   script.defer = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
