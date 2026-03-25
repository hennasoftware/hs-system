export function getEnvValue(name: string): string {
  const value = import.meta.env[name];
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value as string;
}
