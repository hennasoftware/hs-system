export function validateClientForm(form: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  taxId: string;
  birthDate: string;
  gender: string;
  city: string;
  state: string;
  address: string;
  zipCode: string;
  number: string;
}) {
  function isValidCPF(cpf: string) {
    const clean = cpf.replace(/\D/g, "");

    if (clean.length !== 11 || /^(\d)\1+$/.test(clean)) return false;

    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += Number(clean[i]) * (10 - i);
    }

    let firstDigit = (sum * 10) % 11;
    if (firstDigit === 10) firstDigit = 0;
    if (firstDigit !== Number(clean[9])) return false;

    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += Number(clean[i]) * (11 - i);
    }

    let secondDigit = (sum * 10) % 11;
    if (secondDigit === 10) secondDigit = 0;

    return secondDigit === Number(clean[10]);
  }

  const errors: Record<string, string> = {};

  if (!form.firstName.trim()) {
    errors.firstName = "First name is required";
  }

  if (!form.lastName.trim()) {
    errors.lastName = "Last name is required";
  }

  if (!form.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = "Invalid email";
  }

  if (!form.taxId.trim()) {
    errors.taxId = "Tax ID is required";
  } else if (!isValidCPF(form.taxId)) {
    errors.taxId = "Invalid Tax ID";
  }

  if (!form.birthDate) {
    errors.birthDate = "Birth date is required";
  }

  if (!form.gender) {
    errors.gender = "Gender is required";
  }

  if (!form.zipCode || !form.address || !form.city || !form.state) {
    errors.zipCode = "Please enter a valid ZIP Code";
  }

  if (!form.number.trim()) {
    errors.number = "Number is required";
  }

  return errors;
}
