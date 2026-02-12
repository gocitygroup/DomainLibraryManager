import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ProgrammingLanguageManager from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProgrammingLanguageManager />
  </StrictMode>
);