import { ValueType } from "../../../shared/model/types";


export interface ExpenseResponse {
  totalCount: number;
  count: number;
  expenses: Expense[];
  status: number;
  success: boolean;
}
export interface Expense {
  date: Date;
  id: string;
  name: string;
  type: ValueType;
  value: number;
}