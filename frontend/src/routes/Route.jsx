import React, { Suspense } from "react";
import { routerConfig } from "./RouterConfig";
import { Route as ReactRouter, Routes } from "react-router-dom";
import Loading from "../components/Loading/Loading";

function Route() {
  return (
    <Suspense fallback={<Loading/>}>
    <Routes>
      {routerConfig.map((rout, index) => (
        <ReactRouter key={index} path={rout.path} element={rout.components} />
      ))}
    </Routes>
    </Suspense>

  );
}

export default Route;
