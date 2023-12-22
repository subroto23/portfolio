import { createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import Home from "./Pages/Home";
import Root from "./components/Root";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Skill from "./Pages/Skill";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skill",
        element: <Skill />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
export default router;
