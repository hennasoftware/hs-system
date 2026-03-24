export function LoadingPage() {
  return (
    <main className="bg-background flex min-h-screen items-center justify-center px-4">
      <div className="flex flex-col items-center gap-4 text-center">
        <span
          className="border-primary size-12 animate-spin rounded-full border-4 border-t-transparent"
          aria-hidden="true"
        />

        <p className="text-primary animate-pulse text-sm font-medium">Loading...</p>
      </div>
    </main>
  );
}
