import { List } from "../List";

export function forEach<T>(list: List<T> | undefined, callback: (value: T | undefined, index: number) => void): void {
  if (list) {
    const length = list.length.valueOf();
    for (let i = 0; i < length; i++) {
      callback(list.at(i), i);
    }
  }
}

export function map<T, R>(
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

export function any<T>(list: List<T> | undefined, condition: (value: T, index: number) => boolean): boolean {
  return find(list, condition) >= 0;
}


export function find<T>(list: List<T> | undefined, condition: (value: T, index: number) => boolean): number {
  if (list) {
    const length = list.length.valueOf();
    for (let i = 0; i < length; i++) {
      const elem = list.at(i);
      if (elem !== undefined && condition(elem, i)) {
        return i;
      }
    }
  }
  return -1;
}
