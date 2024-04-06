import React from 'react';

import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// Importar páginas

const rootElement = document.getElementById('root');

const renderApp = () => {
  createRoot(rootElement).render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<ConnectPage/>} />
          <Route path="/visualizar-cotação" element={<CotationPage/>} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

renderApp();

reportWebVitals();