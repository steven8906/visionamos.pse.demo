import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from "react-router-dom";
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/owl.theme.min.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>,
)
