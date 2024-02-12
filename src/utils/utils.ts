import { List } from "../List";

export function forEach<T>(list: List<T> | undefined, callback: (value: T | undefined, index: number) => void): void {
  if (list) {
    const length = list.length.valueOf();
    for (let i = 0; i < length; i++) {
      const elem = list.at(i);
      callback(elem, i);
    }
  }
} export function map<T, R>(
  list: List<T>,
  callback: (value: T | undefined, index: number) => R,
  array: (R | undefined)[] = []): (R | undefined)[] {
  const r: (R | undefined)[] = array ?? [];
  const length = list.length.valueOf();
  r.length = length;
  for (let i = 0; i < length; i++) {
    const elem = list.at(i);
    r[i] = callback(elem, i);
  }
  return r;
}
