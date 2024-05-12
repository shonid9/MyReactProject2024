import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import type { User } from "../@types/types";
import { LoginUser } from "../@types/types";

export const useAuth = (): { user: User | null; isLoggedIn: boolean; login: (jwt: string, data: LoginUser) => void; logout: () => void } => {
    const { user, isLoggedIn, login, logout } = useContext(AuthContext);

    return { user, isLoggedIn, login, logout };
};
