import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './pages/app';
import { GlobalStyle } from './styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
);
