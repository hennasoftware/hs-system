import type { ReactNode } from "react";
import { LoadingPage } from "@/shared/pages";
import { useAuth } from "@/modules/auth/hooks";
import { Navigate, useLocation } from "react-router-dom";

type AuthRedirectProps = {
  children: ReactNode;
};

export function AuthRedirect({ children }: AuthRedirectProps) {
  const { user, loading } = useAuth();
  const location = useLocation();
  const from = location.state?.from.pathname || "/dashboard";

  if (loading && user) return <LoadingPage />;

  if (user) return <Navigate to={from} replace />;

  return <>{children}</>;
}
