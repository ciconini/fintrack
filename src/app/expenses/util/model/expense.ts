import { ValueType } from "../../../shared/model/types";

export interface Expense {
  date: Date;
  id: string;
  name: string;
  type: ValueType;
  value: number;
}