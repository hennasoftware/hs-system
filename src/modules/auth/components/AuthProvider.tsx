import { AuthContext } from "@/modules/auth/components/AuthContext";
import { subscribeToAuth } from "@/modules/auth/service";
import { useToast } from "@/shared/hooks";
import { type ReactNode, useEffect, useState } from "react";
import type { User } from "@/modules/auth/types";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { addToast } = useToast();

  useEffect(() => {
    const unsub = subscribeToAuth((user, error) => {
      if (error && error === "not-authorized") {
        addToast({
          message: "Access restricted. Your account doesn’t have administrator permissions.",
          variant: "error",
          duration: 3000,
        });
      }

      if (!user) {
        setUser(null);
        setLoading(false);
        return;
      }

      setUser(user);
      setLoading(false);
    });

    return () => unsub();
  }, [addToast]);

  return (
    <AuthContext
      value={{
        user,
        loading,
      }}
    >
      {children}
    </AuthContext>
  );
}
