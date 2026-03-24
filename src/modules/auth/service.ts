import { hasRole } from "@/modules/auth/utils";
import { getDocument, onAuthChange, signOutUser } from "@/services/firebase";
import type { User } from "@/modules/auth/types";

export function subscribeToAuth(callback: (user: User | null) => void) {
  return onAuthChange(async (fbUser) => {
    if (!fbUser) {
      callback(null);
      return;
    }

    const user = await getDocument<User>("users", fbUser.uid);

    if (!user) {
      callback(null);
      return;
    }

    if (!hasRole(user, "internal")) {
      console.error(`Unauthorized user attempted to log in: ${user.firstName} ${user.lastName}`);
      //TODO: remove debug console.error after toast/router is implemented
      await signOutUser();
      callback(null);
      return;
    }

    callback(user);
  });
}
