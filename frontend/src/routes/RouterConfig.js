import { lazy } from "react";

const Dashboard = lazy(() => import("../Pages/Dashboard"));
const Support = lazy(() => import("../Pages/Support"));
const Plugins = lazy(() => import("../Pages/Plugins"));
const Help = lazy(() => import("../Pages/Help"));

export const routerConfig = [
  {
    path: "/",
    components: <Dashboard />,
  },
  {
    path: "/support",
    components: <Support />,
  },
  {
    path: "/plugin",
    components: <Plugins />,
  },
  {
    path: "/help",
    components: <Help />,
  },
];
