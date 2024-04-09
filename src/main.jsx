import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/QrCode.css'
import QrCode from './components/QrCode.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QrCode />
  </React.StrictMode>,
)
