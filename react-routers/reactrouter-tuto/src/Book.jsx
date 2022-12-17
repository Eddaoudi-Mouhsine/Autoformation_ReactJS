import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

const Book = () => {
  const { id } = useParams();
  const obj = useOutletContext();
  // console.log(id);
  return (
    <div>
      book {id} and it belongs to {obj.author}
    </div>
  );
};

export default Book;
