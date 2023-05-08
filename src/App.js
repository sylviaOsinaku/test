import React from "react";
import Home from "./Pages/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Routes, Route } from "react-router-dom";
// import Stateful from "./Components/Stateful";
import About from "./Components/About";
import MainNavigation from "./Components/MainLayout";
import MainDashBoard from "./AssignmentCompo/MainDashBoard";
import Shop from "./Pages/Shop";
import Products from "./Pages/Product";
const App = () => {
  return (
    <Routes>
      <Route path="" element={<MainNavigation />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />}></Route>
        <Route path="shop/:product" element={<Products />}></Route>
      </Route>
      {/* <Route path="" element={<MainDashBoard />}></Route> */}
    </Routes>
  );
};
export default App;
