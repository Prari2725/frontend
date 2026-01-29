import { createContext, useState } from "react";
import api from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("access") ? true : false
  );

  const login = async (username, password) => {
    const res = await api.post("auth/login/", { username, password });
    localStorage.setItem("access", res.data.access);
    localStorage.setItem("refresh", res.data.refresh);
    setUser(true);
  };

  const logout = () => {
    localStorage.clear();
    setUser(false);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
