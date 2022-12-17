import React from "react";
import Layout from "./Layout";
import User from "./User";

export const UserContext = React.createContext();
export const ThemeContext = React.createContext();
const user = { name: "Le nada" };
const theme = { name: "zobir", description: "holidays theme" };

const Page = (props) => {
  return (
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={theme}>
        <Layout />
        <User />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};

export default Page;
