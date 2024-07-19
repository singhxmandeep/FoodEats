import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Sidebar from "./Component/Sidebar/Sidebar";
import Add from "./Pages/Add/Add"
import List from "./Pages/List/List"
import Orders from "./Pages/Orders/Orders"
import { Routes, Route , Navigate } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url = "http://localhost:4000"
  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path= "/add" element={<Add url = {url}/>}/>
          <Route path= "/list" element={<List url = {url}/>}/>
          <Route path= "/orders" element={<Orders url = {url}/>}/>
        <Route path="*" element={<Navigate to="/add" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
