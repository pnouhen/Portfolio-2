import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Code pour supprimer l'élément h1 de Vercel
const heading = document.querySelector('h1[data-version="v1"].text_wrapper__i87JK');
if (heading) {
  heading.remove();
}