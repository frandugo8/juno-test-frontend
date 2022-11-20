import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.component'
import './scss/index.scss'

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);