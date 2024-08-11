import React from 'react'
import { StrictMode } from 'react'
import App from './App'
import { createRoot } from 'react-dom/client'

import './index.css'

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);
root.render( <StrictMode><App /></StrictMode>);



  