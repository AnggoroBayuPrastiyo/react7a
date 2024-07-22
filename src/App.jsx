import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import ListUser from "./screen/ListUser";
import Latihan from "./screen/Latihan";
import DetailUser from "./screen/DetailUser";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />

      <Route path="/listuser" element={<ListUser />} />

      <Route path="/latihan" element={<Latihan />} />

      <Route path="/detailuser" element={<DetailUser />} />
    </Routes>
  );
};

export default App;
