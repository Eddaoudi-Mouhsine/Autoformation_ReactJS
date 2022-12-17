import React from "react";
import { UserContext } from "./Page";
import { ThemeContext } from "./Page";
import { useContext } from "react";
const User = (props) => {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);

  return (
    // <UserContext.Consumer>
    //   {(user) => (
    //     <ThemeContext.Consumer>
    //       {(t) => (
    //         <h1>
    //           {" "}
    <div>
      {user.name} and {theme.name} favourite {theme.description}
    </div>
    //         </h1>
    //       )}
    //     </ThemeContext.Consumer>
    //   )}
    // </UserContext.Consumer>
  );
};

export default User;
