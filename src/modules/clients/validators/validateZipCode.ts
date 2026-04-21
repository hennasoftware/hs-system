export function validateZipCode(zipCode: string, address?: string, city?: string, state?: string) {
  const cleanZip = zipCode.replace(/\D/g, "");

  if (!cleanZip) {
    return "ZIP Code is required";
  }

  if (cleanZip.length < 8) {
    return "Please enter a valid ZIP Code";
  }

  if (cleanZip.length > 8) {
    return "ZIP Code must have 8 digits";
  }

  if (!address || !city || !state) {
    return "Please enter a valid ZIP Code";
  }

  return "";
}
