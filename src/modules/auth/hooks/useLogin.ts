import { signInUser } from "@/services/firebase";
import { useState } from "react";

export function useLogin() {
  const [loading, setLoading] = useState(false);

  async function login(email: string, password: string) {
    setLoading(true);

    try {
      await signInUser(email, password);
      console.log("User logged in successfully!");
      //TODO: remove debug console.log after toast/router is implemented
    } catch (err) {
      const errMessage = err instanceof Error ? err.message : "Unknown error";
      console.error("Login error:", errMessage);
    } finally {
      setLoading(false);
    }
  }

  return { loading, login };
}
