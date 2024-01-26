import React from "react";
import SideBar from "./sideBar/SideBar";
import Header from "./HeaderContant/Header";
import Route from "../routes/Route";
import { useAppContext } from "../context";

function App() {
  const { state, actionFunction } = useAppContext();
  const { isDarkMode } = state;
  const handleCloseSideBar=()=>{
    actionFunction.isNavMenu.isSideBarClose()
  }
  return (
    <div className={`dashboard-wraper ${isDarkMode===true?'Dark-Mode':''}`}>
      <SideBar />
      <div className="layout" >
        <Header />
        <div onClick={()=>handleCloseSideBar()}>
        <Route />
        </div>
      </div>
    </div>
  );
}

export default App;
