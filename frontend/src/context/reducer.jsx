import * as actionType from "./type";

export const initalState = {
  isDarkMode: false,
  isSideBarIsOpen: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionType.IS_DARK_MODE:
      return {
        ...state,
        isDarkMode: true,
      };
    case actionType.IS_LIGHT_MODE:
      return {
        ...state,
        isDarkMode: false,
      };
    case actionType.IS_SIDEBAR_OPEN:
      return {
        ...state,
        isSideBarIsOpen: true,
      };
    case actionType.IS_SIDEBAR_CLOSE:
      return {
        ...state,
        isSideBarIsOpen: false,
      };
    default:
      return state;
  }
};
