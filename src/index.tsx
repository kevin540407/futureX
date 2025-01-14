import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "@/components/layout/header";
import Home from "@/pages/home/home";
import Portfolio from "@/pages/portfolio/portfolio";
import "animate.css";
import "@/assets/styles/anime.css";
import Footer from "@/components/layout/footer";
import Network from "@/pages/network/network";
import Team from "@/pages/team/team";
import Voice from "@/pages/voice/voice";
import Detail from "@/pages/detail/detail";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header></Header>
      <div className="pt-[7.5rem]">
        <Routes>
          <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
          <Route path="/network" element={<Network></Network>}></Route>
          <Route path="/team" element={<Team></Team>}></Route>
          <Route path="/voice" element={<Voice></Voice>}></Route>
          <Route path="/detail/:id" element={<Detail></Detail>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  </React.StrictMode>
);
