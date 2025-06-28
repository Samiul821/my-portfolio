import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/Home/About/About";
import LoadingSpinner from "../Pages/Shared/LoadingSpinner";
import ProjectDetails from "../Pages/Home/Projects/ProjectsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("./skils.json"),
        fallbackElement: <LoadingSpinner />,
      },
      {
        path: "/projects/:id",
        Component: ProjectDetails,
      },
    ],
  },
]);
