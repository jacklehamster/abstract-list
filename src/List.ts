import { Val } from "dok-types";

export interface List<T> {
  length: Val<number>;
  at(index: number): T | undefined;
}
