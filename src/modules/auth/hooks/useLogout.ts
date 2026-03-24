import { signOutUser } from "@/services/firebase";
import { useToast } from "@/shared/hooks";
import { useState } from "react";

export function useLogout() {
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  async function logout() {
    setLoading(true);

    try {
      await signOutUser();
    } catch (err) {
      const errMessage = err instanceof Error ? err.message : "Unknown error";
      console.error("Logout error:", errMessage);
      addToast({
        message: "Unable to sign out. Please try again in a moment.",
        variant: "error",
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  }

  return { loading, logout };
}
