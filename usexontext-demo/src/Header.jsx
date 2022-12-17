import React from "react";
import User from "./User";
const Header = (props) => {
  return <div>
        <User username = {props.username}/>

  </div>;
};

export default Header;
