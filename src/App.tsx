import { AuthProvider } from "@/modules/auth/components";
import { AuthPage } from "./modules/auth/pages";

export default function App() {
  return (
    <AuthProvider>
      <AuthPage />
    </AuthProvider>
  );
}
