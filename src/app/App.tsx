import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.title = "HS System | Coming Soon";
  }, []);

  return (
    <main className="bg-background flex min-h-screen flex-col items-center justify-center text-center">
      <div className="container mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-4">
        <div className="flex flex-1 flex-col items-center justify-center gap-8">
          <h1 className="text-foreground text-5xl font-bold">Coming Soon</h1>

          <p className="text-foreground/70 text-xl">
            We're building a better way to manage your customers and orders. Stay tuned — something great is on its way.
          </p>
        </div>

        <p className="text-foreground/70 mb-8 text-sm font-light">
          © {new Date().getFullYear()} · Henna Software - All rights reserved
        </p>
      </div>
    </main>
  );
}
