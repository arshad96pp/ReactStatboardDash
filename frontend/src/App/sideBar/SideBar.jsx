import React, { useState } from "react";
import DashBoardLogo from "../../styles/images/Briefcase.png";
import StatBoard from "../../styles/images/StatBoard.png";
import CiecledMenu from "../../styles/images/Circled Menu.png";
import Support from "../../styles/images/Support.png";
import Pluggin from "../../styles/images/Puzzle.png";
import HelpIcon from "../../styles/images/Help.png";
import ShuttDown from "../../styles/images/Shutdown.png";

import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";

import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context";

function SideBar() {
  const [active, setActive] = useState(null);

  const { state, actionFunction } = useAppContext();
  const { isDarkMode, isSideBarIsOpen } = state;

  const navMenuContant = [
    { icon: CiecledMenu, name: "Dashboard", path: "/" },
    { icon: Support, name: "Support", path: "/support" },
    { icon: Pluggin, name: "Plugin", path: "/plugin" },
    { icon: HelpIcon, name: "Help", path: "/help" },
  ];
  const navigate = useNavigate();
  const handleActive = (index) => {
    setActive(index);
  };

  const sideBarCloseHandler = () => {
    actionFunction.isNavMenu.isSideBarClose();
  };

  return (
    <nav
      className={`${isSideBarIsOpen === true ? "openSideBar" : "sidebar"} ${
        isDarkMode === true ? "Dark-Mode-sidebar" : ""
      }`}
    >
      <div className="closeSideBar" onClick={() => sideBarCloseHandler()}>
        <span>
          <KeyboardBackspaceRoundedIcon />
        </span>
      </div>
      <div className="navWraper">
        <div className="nav-top">
          <div className="logo">
            <img src={DashBoardLogo} width={75} alt="" />
            <img src={StatBoard} width={80} alt="" />
          </div>
        </div>

        <div className="nav-center">
          {navMenuContant.map((item, index) => (
            <li
              onClick={() => {
                navigate(item.path);
                handleActive(index);
              }}
              className={`${index === active ? "activeMenu" : ""}`}
              key={index}
            >
              <img src={item.icon} alt="" />
              {item.name}
            </li>
          ))}
        </div>

        <div className="nav-bottom">
          <div className="logoutBtn">
            <button>Logout</button>
            <span>
              <img src={ShuttDown} alt="" />
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SideBar;
