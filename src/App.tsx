import { RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes/routes";
import "swiper/css";
import "swiper/css/pagination";
import "./App.css";

function App() {
  return <RouterProvider router={ROUTES} />;
}

export default App;
