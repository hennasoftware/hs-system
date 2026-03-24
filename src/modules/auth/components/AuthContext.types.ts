import type { User } from "@/modules/auth/types";

export interface AuthContextProps {
  user: User | null;
  loading?: boolean;
}
