import { Navigate } from "react-router-dom";
import { LoadingPage } from "@/shared/pages";
import { useAuth } from "@/modules/auth/hooks";

export function RootRedirect() {
  const { user, loading } = useAuth();

  if (loading) return <LoadingPage />;

  return user ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />;
}
