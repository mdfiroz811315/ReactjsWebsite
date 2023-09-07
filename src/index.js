import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';
import LeftBar from './Components/LeftBar';
import Menu from './Components/Menu';
import Career from './Components/Career';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Registration from './Components/Register/Registration';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import  '../node_modules/bootstrap/dist/css/bootstrap.css'
function AppRoot() {
  return (
    <>
    <BrowserRouter>
    
      <Routes>
          <Route path="/" element={<Menu />}>
          <Route index element={<App />} />
          <Route path="Header" element={<Header />} />
          <Route path="Body" element={<Body />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="LaftBar" element={<LeftBar />} />
          <Route path="Footer" element={<Footer />} />
          <Route path="Career" element={<Career />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="registration" element={<Registration />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppRoot />);
