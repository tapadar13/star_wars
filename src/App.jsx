import { useState, useEffect } from "react";
// import "./App.css";
import Home from "./Components/Home";
import SearchBar from "./Components/SearchBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <SearchBar />
      <Outlet />
    </>
  );
}

export default App;
