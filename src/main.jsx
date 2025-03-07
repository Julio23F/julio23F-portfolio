import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import './styles/home.css';
import './styles/about.css';
import './styles/projects.css';
import './styles/infoContact.css';
import './styles/animatedCursor.css';
import './index.css';
import './styles/navBar.css';
import './styles/animatedLetter.css';
import './App.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
