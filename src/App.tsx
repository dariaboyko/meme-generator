import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./global.scss";
import { StartPage } from "./pages/StartPage";
import { GeneratingPage } from "./pages/GeneratingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: "/generator",
    element: <GeneratingPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
