import React, { useState, useEffect } from "react";
import { FaBeer, FaQuoteLeft } from "react-icons/fa";
import { AiFillCaretLeft } from "react-icons/ai";
import bigSlider from "./components/slider/bigSlider.module.scss";
import smolSlider from "./components/slider/smolSlider.module.scss";
import "./App.scss";
import datas from "./data";
import Slider from "./components/slider/Slider";

function App() {

  return (
    <div>
      <Slider shift={true} data={datas} styils={bigSlider} />;
      <Slider data={datas} styils={smolSlider} />;
    </div>
  );
}

export default App;
