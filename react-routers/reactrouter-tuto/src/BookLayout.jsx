import React, { useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

const BookLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams({ n: 3 });
  console.log(searchParams.get("n"));
  const [number] = searchParams.get("n");
  // const [number, setNumber] = useState(3);
  return (
    <div>
      <Link to="/book/1">book 1</Link>
      <br />
      <Link to="/book/2">book 2</Link>
      <br />
      {/* <Link to={`/book/${number}`}>book {number}</Link> */}
      <br />
      <Link to="/book/new">New Book</Link>
      <Outlet context={{ author: "Chandler" }} />
      <input
        type="number"
        value={number}
        // onChange={(e) => setNumber(e.target.value)}
        onChange={(e) => setSearchParams({ n: e.target.value })}
      />
    </div>
  );
};

export default BookLayout;
