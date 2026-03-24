import { signOutUser } from "@/services/firebase";
import { useState } from "react";

export function useLogout() {
  const [loading, setLoading] = useState(false);

  async function logout() {
    setLoading(true);

    try {
      await signOutUser();
      console.log("User logged out successfully!");
      //TODO: remove debug console.log after toast/router is implemented
    } catch (err) {
      const errMessage = err instanceof Error ? err.message : "Unknown error";
      console.error("Logout error:", errMessage);
    } finally {
      setLoading(false);
    }
  }

  return { loading, logout };
}
