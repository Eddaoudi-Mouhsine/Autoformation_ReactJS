import { Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import BookList from "./BookList";
import Contact from "./Contact";
import Book from "./Book";
import NewBook from "./NewBook";
import NotFound from "./NotFound";
import BookLayout from "./BookLayout";
import BookRoutes from "./BookRoutes";
import NavLayout from "./NavLayout";
import About from "./About";
import "./active.css";

function App() {
  const location = useLocation();
  console.log(location);
  //   let element = useRoutes([
  //     {
  //       path: "/",
  //       element: <Home />,
  //     },

  //     {
  //       path: "book",
  //       element: <BookList />,
  //       children: [

  //         { path: ":id", element: <Book /> },
  //         { path: "new", element: <NewBook /> },
  //       ],
  //     },
  //   ]);

  return (
    <>
      {location.state}
      {/* {element} */}
      <Routes>
        {/* <Routes location="/book"> Basically hard code the path below wherever page u go the h2 will show */}
        <Route path="/book" element={<h2>Extra Content</h2>} />
      </Routes>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              // style={({ isActive }) => (isActive ? { color: "red" } : {})}
              // state="HI"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/book">Books</NavLink>
          </li>
          <li>
            <NavLink to="/About" state={{ number: 1 }}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
          {/* <BookRoutes/> in case you want the book route section to be moved from app to its own component */}
        </Route>
        {/* <Route path = "/book/*" element ={<BookRoutes/>} */}
        {/* this match any route /book/something as long as its defined in BookRoute component */}

        {/* as i said  the  star after book to match all */}
        {/* </Route> */}
        <Route path="*" element={<NotFound />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
