import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./assets/components/Home/Home";
import Qcm from "./assets/components/Qcm/Qcm";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "qcm",
        element: <Qcm />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
