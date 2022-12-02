import { createContext, useState } from "react";
import React from "react";
import roles from "../helpers/roles";
import { useHistory } from "react-router-dom";
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const history = useHistory();
  const [user, setUser] = useState(null);
  //

  const login = (userCredentials, fromLocation) => {
    setUser({
      id: 1,
      name: "juan",
      email: "juanhernandez@gmail.com",
      role: roles.admin,
    });
    if (fromLocation) {
      history.push(fromLocation);
    }
  };

  const logout = () => setUser(null);

  const updateUser = (data) => {
    setUser({
      ...user,
      ...data,
    });
  };

  const isLogged = () => !!user;
  const hasRole = (role) => user?.role === role;

  const contextValue = {
    user,
    isLogged,
    hasRole,
    login,
    logout,
    updateUser,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
