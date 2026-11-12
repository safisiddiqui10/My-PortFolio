import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Order matters: custom CSS first, Tailwind last (see src/styles/global.css).
import './styles/variables.css';
import './styles/global.css';
import './styles/tailwind.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
