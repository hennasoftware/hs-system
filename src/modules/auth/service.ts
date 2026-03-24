import { hasRole } from "@/modules/auth/utils";
import { getDocument, onAuthChange, signOutUser } from "@/services/firebase";
import type { User } from "@/modules/auth/types";

export function subscribeToAuth(callback: (user: User | null, error?: string) => void) {
  return onAuthChange(async (fbUser) => {
    if (!fbUser) {
      callback(null);
      return;
    }

    const user = await getDocument<User>("users", fbUser.uid);

    if (!user) {
      callback(null, "user-not-found");
      return;
    }

    if (!hasRole(user, "internal")) {
      await signOutUser();
      callback(null, "not-authorized");
      return;
    }

    callback(user);
  });
}
