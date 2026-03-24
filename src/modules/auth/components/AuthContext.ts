import { createContext } from "react";
import type { AuthContextProps } from "./AuthContext.types";

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: true,
});
