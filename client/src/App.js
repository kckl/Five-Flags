import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import StaffView from "./pages/StaffView";
import GuestView from "./pages/GuestView";
import BIView from "./pages/BIView";
import ThingsToDo from "./pages/ThingsToDo";
import PlacesToStay from "./pages/PlacesToStay";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="StaffView" element={<StaffView />} />
          <Route path="GuestView" element={<GuestView />} />
          <Route path="BIDashboard" element={<BIView />} />
          <Route path="ThingsToDo" element={<ThingsToDo />} />
          <Route path="PlacesToStay" element={<PlacesToStay />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;