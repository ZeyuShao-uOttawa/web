import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './routes/home';
import Component from './routes/component';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/component/cpu" element={<Component type='CPU' filter='none'/>} />
      <Route path="/component/cpu_amd" element={<Component type='CPU' filter='amd'/>} />
      <Route path="/component/cpu_intel" element={<Component type='CPU' filter='intel'/>} />
      

      <Route path="/component/gpu" element={<Component type='GPU' filter='none'/>} />
      <Route path="/component/gpu_amd" element={<Component type='GPU' filter='amd'/>} />
      <Route path="/component/gpu_nvidia" element={<Component type='GPU' filter='nvidia'/>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
