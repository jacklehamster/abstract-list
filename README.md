# abstract-list
[![npm version](https://badge.fury.io/js/abstract-list.svg)](https://www.npmjs.com/package/abstract-list)

Abstract list for working with arrays that aren't really arrays.

![](https://jacklehamster.github.io/abstract-list/icon.png)


# Usage

```typescript
//   This is an abstract list
const arrayList: List<number> = [1, 2, 3];

//  This is also an abstract list
const aList: List<number> = {
  at(index) {
    return index;
  },
  length: Number.MAX_SAFE_INTEGER,
};

//  This is a giant list for which elem.at(x) === x^2
const squareList: List<number> = {
  at(index) {
    return index * index;
  },
  length: Number.MAX_SAFE_INTEGER,
};
```

In [bun-engine](https://github.com/jacklehamster/bun-engine), abstract lists are used to represent a large number sprites flexibly, without storing each sprite structure.


## Install bun

https://bun.sh/

```bash
curl -fsSL https://bun.sh/install | bash
```
