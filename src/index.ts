export function zipLongest<T>(arrays: readonly (readonly T[])[], fill?: T): T[][] {
  if (!Array.isArray(arrays) || arrays.some((array) => !Array.isArray(array)))
    throw new TypeError('Expected arrays');
  const length = Math.max(0, ...arrays.map((array) => array.length));
  return Array.from({ length }, (_, i) =>
    arrays.map((array) => (i < array.length ? array[i]! : (fill as T))),
  );
}
