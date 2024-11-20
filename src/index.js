/**
 * Pont o de entrada do aplicativo
 *
 * @module src/index
 * @author Marcos Vinicius [marcosvinicius@gmail.com]
 * @requires react
 * @requires react-dom/client
 * @requires ./App
 * @requires ./index.css
 * @example
 * <caption>Renderiza o componente App</caption>
 * const root = ReactDOM.createRoot(document.getElementById('root'));
 * root.render(
 *   <React.StrictMode>
 *     <App />
 *   </React.StrictMode>
 * );
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);