import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { MyContextObjProvider } from './MyContext/MyContextAPI.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyContextObjProvider>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </MyContextObjProvider>
  </React.StrictMode>,
)

