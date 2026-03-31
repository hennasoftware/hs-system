export interface Client {
  id: string;
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
  createdAt: string;
  updatedAt: string;
  [key: string]: string;
}
