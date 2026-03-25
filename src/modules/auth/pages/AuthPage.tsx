import { useLogin } from "@/modules/auth/hooks";
import { getPageTitle } from "@/shared/utils";
import { LogIn } from "lucide-react";
import { type SyntheticEvent, useState } from "react";
import { Button } from "@/shared/components/Button";
import { InputField } from "@/shared/components/InputField";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";

export function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading } = useLogin();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from.pathname || "/";

  const handleLogin = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(email, password);
    navigate(from, { replace: true });
  };

  return (
    <>
      <Helmet>
        <title>{getPageTitle("Login")}</title>
      </Helmet>

      <main className="bg-background min-h-screen px-4">
        <div className="container mx-auto flex h-screen max-w-4xl flex-col items-center justify-center gap-2">
          <img src="/favicon.svg" alt="Henna Software logo icon" className="size-32 opacity-80" />

          <form onSubmit={handleLogin} className="bg-card flex w-full max-w-md flex-col gap-4 rounded-lg p-6 shadow-lg">
            <InputField
              placeholder={"Email"}
              label={"Email"}
              showLabel={false}
              type={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />

            <InputField
              placeholder={"Password"}
              label={"Password"}
              showLabel={false}
              type={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required={true}
            />

            <hr className="border-card-foreground border opacity-5" />

            <Button
              type={"submit"}
              isLoading={loading}
              disabled={loading}
              loadingText={"Signing in"}
              rightAddon={<LogIn size={20} />}
            >
              Sign In
            </Button>
          </form>
        </div>
      </main>
    </>
  );
}
