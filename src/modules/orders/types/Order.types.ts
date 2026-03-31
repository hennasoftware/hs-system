export interface Order {
  id: string;
  clientId: string;
  vendorId: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  canceledAt: string;
  cancelReason: string;
  subtotal: string;
  discount: string;
  total: string;
  discountCode: string;
  paymentMethod: string;
  paymentStatus: string;
  paymentDueDate: string;
  invoiceNumber: string;
  invoiceUrl: string;
  invoiceIssuedAt: string;
  invoiceTaxId: string;
  [key: string]: string;
}
