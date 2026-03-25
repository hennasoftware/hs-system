import { useAuth, useLogout } from "@/modules/auth/hooks";

export function DashboardPage() {
  const { logout } = useLogout();
  const { user } = useAuth();

  return (
    <main className="bg-background flex min-h-screen flex-col items-center justify-center px-6 text-center lg:px-8">
      <p className="text-primary text-base font-semibold">
        Hello, {user?.firstName} {user?.lastName}!
      </p>

      <h1 className="text-foreground mt-4 text-5xl font-semibold tracking-tight text-balance sm:text-7xl">Dashboard</h1>

      <p className="text-muted-foreground mt-6 text-lg font-medium text-pretty sm:text-xl/8">
        There's nothing here yet.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <button
          onClick={logout}
          className="text-primary text-sm font-semibold transition-all hover:cursor-pointer hover:brightness-80"
        >
          <span aria-hidden="true">&larr;</span> Sign out
        </button>
      </div>
    </main>
  );
}
