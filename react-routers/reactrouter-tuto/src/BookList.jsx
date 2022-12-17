import React from "react";
import { Link, Outlet } from "react-router-dom";
import BookLayout from "./BookLayout";

const BookList = () => {
  return (
    <div>
      <h1>Booklist</h1>
      <BookLayout />
      {/* <Link to="/book/1">book 1</Link>
      <br />
      <Link to="/book/2">book 2</Link>
      <br />
      <Link to="/book/new">New Book</Link>
      <Outlet context={{ author: "Chandler" }} /> by the way outlet is the one responsible for rendering any child */}
    </div>
  );
};

export default BookList;
