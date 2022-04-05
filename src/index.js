import React from 'react';
import './index.css';
import App from './App/App';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);