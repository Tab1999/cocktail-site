import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { AppProvider } from './context'
import Home from "./pages/Home"
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
    <App />
    {/* <Home/> */}
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
