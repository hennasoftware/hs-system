import type { User, Role } from "@/modules/auth/types";

export function hasRole(user: User, role: Role) {
  return !!user?.roles?.includes(role);
}
