import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import BookList from "./BookList";
import Contact from "./Contact";
import Book from "./Book";
import NewBook from "./NewBook";
import NotFound from "./NotFound";
import BookLayout from "./BookLayout";

const BookRoutes = () => {
  return (
    <>
      {/* <BookLayout /> */}
      <Routes>
        <Route element={<BookLayout />}>
          {/* now they all share booklayout as a root element tho */}
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
      </Routes>
    </>
  );
};

export default BookRoutes;
