import { DefaultResponse } from "../../../shared/model/response";
import { ValueType } from "../../../shared/model/types";


export interface ExpenseResponse extends DefaultResponse {
  expenses: Expense[];
}
export interface Expense {
  date: Date;
  id: string;
  name: string;
  type: ValueType;
  value: number;
}