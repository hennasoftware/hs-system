import { LogIn } from "lucide-react";
import { type SyntheticEvent, useEffect, useState } from "react";
import { Button } from "../../../../shared/components/Button";
import { InputField } from "../../../../shared/components/InputField";

export function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    document.title = "HS System | Login";
  }, []);

  return (
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
            placeholder={"Senha"}
            label={"Senha"}
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
            loadingText={"Entrando"}
            rightAddon={<LogIn size={20} />}
          >
            Entrar
          </Button>
        </form>
      </div>
    </main>
  );
}
