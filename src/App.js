import React from 'react';
import './assets/global.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/index';
import About from './pages/about/about';
import Blog from './pages/blog/blog';
import Contact from './pages/contact/contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
      <Navbar />
    </Router>
  );
}

export default App;
