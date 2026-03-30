export type OrderStatus = "delivered" | "production" | "payment" | "review";

export interface Order {
  id: string;
  title: string;
  client: string;
  status: OrderStatus;
}

export interface RecentOrdersProps {
  loading?: boolean;
  orders: Order[];
}
