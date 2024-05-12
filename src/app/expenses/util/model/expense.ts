export interface Expense {
  date: Date;
  id: string;
  name: string;
  type: ExpenseType;
  value: number;
}

export enum ExpenseType {
  'CLOTHING' = 'Clothing',
  'GROCERY' = 'Grocery',
  'MEAL' = 'Meals',
  'TRANSPORT' = 'Transport'
}