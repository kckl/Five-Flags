import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import StaffLogin from "./pages/StaffLogin";
import GuestView from "./pages/GuestView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="StaffLogin" element={<StaffLogin />} />
          <Route path="GuestView" element={<GuestView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;