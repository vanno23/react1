import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext({
    user: {},
    setUser: () => {}
});

export default UserContext;