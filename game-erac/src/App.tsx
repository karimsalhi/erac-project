import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Qcm from "./components/Qcm/Qcm";
import Appendicite from "./components/Appendicite/Appendicite";
import Anxiety from "./components/Qcm/Anxiety";
import QcmForm from "./components/Qcm/QcmForm";

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
      {
        path: "qcm/anxiety",
        element: <Anxiety />,
      },
      {
        path: "qcm/form",
        element: <QcmForm />,
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
