import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Task1 from "./Task1/Task1";
import Task2 from "./Task2/Task2";
import Task3 from "./Task3/Task3";
import Task4 from "./Task4/Task4";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="task1" element={<Task1 />} />
        <Route path="task2" element={<Task2 />} />
        <Route path="task3" element={<Task3 />} />
        <Route path="task4" element={<Task4 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
