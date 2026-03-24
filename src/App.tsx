import { AuthProvider } from "@/modules/auth/components";
import { ToastProvider } from "@/shared/components/Toast";
import { AuthPage } from "@/modules/auth/pages";

export default function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <AuthPage />
      </AuthProvider>
    </ToastProvider>
  );
}
