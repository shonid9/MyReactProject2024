/*import { createContext, useContext, useEffect, useState } from "react";
import type { User } from "../@types/types";
import { LoginUser } from "../@types/types";

// Define the type for the context value
type AuthContextType = {
  user: User | null;
  isLoggedIn: boolean;
  login: (jwt: string, data: LoginUser) => void;
  logout: () => void;
};

 Create the context with initial values
export const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoggedIn: false,
  login: (jwt: string) => {},
  logout: () => {},
});

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoggedIn: false,
  login: (jwt: string, data: LoginUser) => {}, // Add 'data' parameter
  logout: () => {},
});

// Define the AuthContextProvider component
export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      //TODO: 
      // Fetch user details and set it to the state
      // Example: setUser(fetchUserDetails());
    }
  }, []);

  const login = (jwt: string, data: LoginUser) => {
    setIsLoggedIn(true);
    localStorage.setItem("token", jwt);
    setUser({
      email: data.email,
      role: "regular"
    } as User)
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    // Clear user details from state
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};*/
import { createContext, useEffect, useState } from "react";
import type { User } from "../@types/types";
import { LoginUser } from "../@types/types";
import { userDetails, login as loginApi } from "../services/auth";

// Define the type for the context value
type AuthContextType = {
  user: User | null;
  isLoggedIn: boolean;
  login: (jwt: string, data: LoginUser) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoggedIn: false,
  login: (jwt: string, data: LoginUser) => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      fetchUserDetails(token);
    }
  }, []);

  const login = (jwt: string, data: LoginUser) => {
    setIsLoggedIn(true);
    localStorage.setItem("token", jwt);
    fetchUserDetails(jwt);
    setUser({
      email: data.email,
      role: "regular"
    } as User)
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    setUser(null);
  };

  const fetchUserDetails = (token: string) => {
    userDetails(token)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error("Error fetching user details:", error);
      });
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
