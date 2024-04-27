import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/HomePage.jsx';
import About from './Pages/AboutPage.jsx';
import ErrorPage from './Pages/404errorPage.jsx';
import './assets/css-custom/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);