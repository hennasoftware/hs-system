import { AuthProvider } from "@/modules/auth/components";
import { AppRoute } from "@/router";
import { ToastProvider } from "@/shared/components/Toast";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <BrowserRouter>
          <AppRoute />
        </BrowserRouter>
      </AuthProvider>
    </ToastProvider>
  );
}
