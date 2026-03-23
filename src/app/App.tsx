import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.title = "HS System | Coming Soon";
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-linear-to-r from-blue-500 via-blue-700 to-blue-900 text-center">
      <div className="container mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-4">
        <div className="flex flex-1 flex-col items-center justify-center gap-8">
          <h1 className="text-5xl font-bold text-white">Coming Soon</h1>

          <p className="text-xl text-white/70">
            We're building a better way to manage your customers and orders. Stay tuned — something great is on its way.
          </p>
        </div>

        <p className="mb-8 text-sm font-light text-white/70">
          © {new Date().getFullYear()} · Henna Software - All rights reserved
        </p>
      </div>
    </main>
  );
}
