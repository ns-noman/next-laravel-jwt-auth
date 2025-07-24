"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  auth: boolean;
  user: object | null;
  setAuth: (auth: boolean) => void;
  setUser: (user: object | null) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);

  // Fetch user info on mount
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/user", {
          credentials: "include",
        });
        if (res.ok) {
          const content = await res.json();
          setUser(content);
          setAuth(true);
        } else {
          setAuth(false);
          setUser(null);
        }
      } catch (e) {
        setAuth(false);
        setUser(null);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, user, setAuth, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
