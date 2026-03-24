import { useContext } from "react";
import { AuthContext } from "@/modules/auth/components";

export function useAuth() {
  return useContext(AuthContext);
}
