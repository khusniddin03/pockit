import { RouterProvider } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./routes/routes";

function App() {
  return <RouterProvider router={ROUTES} />;
}

export default App;
