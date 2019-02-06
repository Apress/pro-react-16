import React from "react";

export const AuthContext = React.createContext({
    isAuthenticated: false, 
    webToken: null,
    authenticate: (username, password) => {},
    signout: () => {}
})
