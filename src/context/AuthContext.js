import React, { createContext, useState, useEffect } from "react";
import { login } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginUser = async (email, password) => {
    try {
      const data = await login({ email, password });
      setUser(data.user);
      localStorage.setItem("token", data.token);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};

