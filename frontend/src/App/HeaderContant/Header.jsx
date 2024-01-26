import React from "react";
import Avatar from "../../styles/images/Rectangle 10.png";
import { useAppContext } from "../../context";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

function Header() {
  const { state, actionFunction } = useAppContext();
  const { isDarkMode,isSideBarIsOpen } = state;
  const { isNavMenu } = actionFunction;

  const handleDarkMode = () => {
    isNavMenu.isOpen();
  };
  const handleLightMode = () => {
    isNavMenu.isClose();
  };

  const openSideBar=()=>[
    isNavMenu.isSideBarOpen()
  ]

  return (
    <header>
      <div className="header-menu">
        <span onClick={()=>openSideBar()}>
          <MenuRoundedIcon />
        </span>
      </div>
      <div className="avatar-section">
        <div
          className={`dark-mode ${isDarkMode === true ? "dark-mode-icon" : ""}`}
        >
          {isDarkMode ? (
            <span onClick={() => handleLightMode()}>
              <LightModeIcon />
            </span>
          ) : (
            <span onClick={() => handleDarkMode()}>
              <NightlightRoundIcon />
            </span>
          )}
        </div>
        <div
          className={`avatar ${isDarkMode === true ? "avatar-dark-mode" : ""}`}
        >
          <div className="name-section">
            <h5>John Deo</h5>
            <p>john@deo.com</p>
          </div>
          <div className="avatar-image">
            <img src={Avatar} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
