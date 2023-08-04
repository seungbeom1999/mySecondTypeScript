import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Detail from "../pages/Detail";

type Props = {};

function Router({}: Props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
