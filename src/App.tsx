import { HelmetProvider } from "react-helmet-async";
import { ToastProvider } from "@/shared/components/Toast";
import { AuthProvider } from "@/modules/auth/components";
import { BrowserRouter } from "react-router-dom";
import { AppRoute } from "@/router";

export default function App() {
  return (
    <HelmetProvider>
      <ToastProvider>
        <AuthProvider>
          <BrowserRouter>
            <AppRoute />
          </BrowserRouter>
        </AuthProvider>
      </ToastProvider>
    </HelmetProvider>
  );
}
