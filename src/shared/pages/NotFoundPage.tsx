export function NotFoundPage() {
  return (
    <main className="bg-background min-h-screen px-4">
      <div className="container mx-auto flex h-screen max-w-4xl flex-col items-center justify-center gap-2">
        <p className="text-primary text-base font-semibold">404</p>

        <h1 className="text-foreground mt-4 text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
          Page not found
        </h1>

        <p className="text-muted-foreground mt-6 text-lg font-medium text-pretty sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="bg-primary text-primary-foreground rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-xs transition-all hover:brightness-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Go back home
          </a>

          <a
            href="https://github.com/hennasoftware"
            className="text-primary text-sm font-semibold transition-all hover:brightness-60"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
}
