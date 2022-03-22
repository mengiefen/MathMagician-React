import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './Pages/Calculator';
import Header from './components/Header/Header';
import Home from './Pages/Home';
import Qoutes from './Pages/Qoutes';

const App = () => (
  <div className="App">
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <Header />
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/qoutes" element={<Qoutes />} />
    </Routes>
  </div>
);

export default App;
