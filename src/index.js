import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppRoutes from './routes';
import { Route,  BrowserRouter as Routes} from "react-router-dom";
import Home from './pages/Home';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
     <Routes>
     <Route path="/home" element={<Home />}></Route>

     </Routes>
    {/* <AppRoutes /> */}
  </React.StrictMode>
);
