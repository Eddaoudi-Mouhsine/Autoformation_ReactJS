import React from "react";
import { useRoutes } from "react-router-dom";
import About from "./About";
import Book from "./Book";
import BookList from "./BookList";
import Contact from "./Contact";
import Home from "./Home";
import NavLayout from "./NavLayout";
import NewBook from "./NewBook";

const RouteHooks = () => {
  let element = useRoutes([
    {
      element: <NavLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "About", element: <About /> },
      ],
    },
    {
      element: <BookList />,
      children: [
        { path: "Book", element: <BookList /> },
        { path: "Book/:id", element: <Book /> },
        { path: "new", element: <NewBook /> },
      ],
    },
  ]);

  return element;
};

export default RouteHooks;
