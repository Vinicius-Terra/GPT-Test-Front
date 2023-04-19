import React from "react";
import HomePage from "../Home/index";
import { Route, Routes } from "react-router-dom";

export default function RouterNavigator() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
