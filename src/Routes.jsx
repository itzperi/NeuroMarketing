import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import MacBookPro160ne from "pages/MacBookPro160ne";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    { path: "macbookpro16one", element: <MacBookPro160ne /> },
  ]);
  return element;
};

export default ProjectRoutes;


