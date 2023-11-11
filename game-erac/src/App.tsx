import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Qcm from "./components/Qcm/Qcm";
import Appendicite from "./components/Appendicite/Appendicite";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/appendicite",
        element: <Appendicite />,
      },
      {
        path: "qcm/:id",
        element: <Qcm />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
