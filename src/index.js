import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Task1 from './Task1/Task1';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="task1" element={<Task1 />} />
              <Route path="task2" element={<Task1 />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
