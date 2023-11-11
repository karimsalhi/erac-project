import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Qcm from "./components/Qcm/Qcm";
import Appendicite from "./components/Appendicite/Appendicite";
import Anxiety from "./components/Qcm/Anxiety";
import AnxietyLast from "./components/Qcm/AnxietyLast";
import Result from "./components/Appendicite/Result/Result";
import LoadingStart from "./components/LoadingStart/LoadingStart";
import Layout from "./components/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
        path: "/loading-start",
        element: <LoadingStart />,
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
        path: "qcm/anxiety-last",
        element: <AnxietyLast />,
      },
      {
        path: "result",
        element: <Result />,
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
