import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import Cv from './components/Cv/Cv';
import Layout from './components/Layout';
import NotFound from './components/NotFound/NotFound';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Cv />} />
          <Route path="contacto" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
