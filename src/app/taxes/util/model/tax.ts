import { DefaultResponse } from "../../../shared/model/response";
import { ValueType } from "../../../shared/model/types";

export interface TaxResponse extends DefaultResponse {
  taxes: Tax[];
}
export interface Tax {
  date: Date;
  id: string;
  name: string;
  type: ValueType;
  value: number;
}