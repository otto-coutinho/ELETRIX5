import React from 'react';

import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// Importar páginas
import Home from './pages/Home/home';

const rootElement = document.getElementById('root');

const renderApp = () => {
  createRoot(rootElement).render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

renderApp();

reportWebVitals();