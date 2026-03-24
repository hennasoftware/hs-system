import { AuthContext } from "@/modules/auth/components/AuthContext";
import { subscribeToAuth } from "@/modules/auth/service";
import { type ReactNode, useEffect, useState } from "react";
import type { User } from "@/modules/auth/types";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsub = subscribeToAuth((user) => {
      if (!user) {
        setUser(null);
        setLoading(false);
        return;
      }

      setUser(user);
      setLoading(false);
    });

    return () => unsub();
  }, []);

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
