import { signInUser } from "@/services/firebase";
import { useToast } from "@/shared/hooks";
import { useState } from "react";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  async function login(email: string, password: string) {
    setLoading(true);

    try {
      await signInUser(email, password);
    } catch (err) {
      const errMessage = err instanceof Error ? err.message : "Unknown error";
      console.error("Login error:", errMessage);
      addToast({
        message: "Unable to sign in. Please check your credentials and try again.",
        variant: "error",
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  }

  return { loading, login };
}
