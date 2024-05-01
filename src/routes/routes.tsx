import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home";

const ROUTES = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export { ROUTES };
