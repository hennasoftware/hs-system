import type { Role } from "./Role.types";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  roles: Role[];
  createdAt: Date;
  updatedAt: Date;
}
