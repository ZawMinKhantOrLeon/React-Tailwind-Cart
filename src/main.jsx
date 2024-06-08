import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StatContextProvider } from './contexts/StatContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

   
      <StatContextProvider>
         <BrowserRouter>
          <App />
          </BrowserRouter>
      </StatContextProvider>
   
    
)
