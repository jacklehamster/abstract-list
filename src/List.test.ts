import { expect, it, describe } from 'bun:test';
import { List, forEach, map } from "./List"

describe('List', () => {
  it('iterates a list through forEach', () => {
    const list: List<number> = [1, 2, 3];
    const result: number[] = [];
    forEach(list, num => result.push(num!));
    expect(result).toEqual([1, 2, 3]);
  });

  it('iterates a list through map', () => {
    const list: List<number> = [1, 2, 3];
    const result = map(list, num => `id-${num}`);
    expect(result).toEqual(["id-1", "id-2", "id-3"]);
  });
});
