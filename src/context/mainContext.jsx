import React, { createContext } from "react";

const MainContext = createContext({
    displayName: "",
    class: "",
    location: ""
}
);

export default MainContext;