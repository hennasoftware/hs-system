import { ClientsPage } from "@/modules/clients/pages";
import { OrdersPage } from "@/modules/orders/pages";
import { NewServicePage, ServicesPage } from "@/modules/services/pages";
import { NotFoundPage } from "@/shared/pages";
import { Routes, Route } from "react-router-dom";
import { AuthPage } from "@/modules/auth/pages";
import { ProtectedRoute } from "./ProtectedRoute";
import { AuthRedirect } from "./AuthRedirect";
import { RootRedirect } from "./RootRedirect";
import { DashboardPage } from "@/modules/dashboard/pages";

export function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<RootRedirect />} />

      <Route
        path="/login"
        element={
          <AuthRedirect>
            <AuthPage />
          </AuthRedirect>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <OrdersPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/clients"
        element={
          <ProtectedRoute>
            <ClientsPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/services"
        element={
          <ProtectedRoute>
            <ServicesPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/services/new"
        element={
          <ProtectedRoute>
            <NewServicePage />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
