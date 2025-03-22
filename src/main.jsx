import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// создаем корневой элемент React-дома
const root = ReactDOM.createRoot(document.getElementById('root'));

// отображаем компонент приложения в корневом элементе DOM
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
