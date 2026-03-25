import { systemName } from "@/config/system";

export function getPageTitle(page: string) {
  return `${systemName} | ${page}`;
}
