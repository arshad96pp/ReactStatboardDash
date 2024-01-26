import * as actionType from "./type";

export const AppContextAction = (dispatch) => {
  return {
    isNavMenu: {
      isOpen: () => {
        dispatch({ type: actionType.IS_DARK_MODE });
      },
      isClose: () => {
        dispatch({ type: actionType.IS_LIGHT_MODE });
      },
      isSideBarOpen: () => {
        dispatch({ type: actionType.IS_SIDEBAR_OPEN });
      },
      isSideBarClose: () => {
        dispatch({ type: actionType.IS_SIDEBAR_CLOSE });
      },
    },
  };
};
