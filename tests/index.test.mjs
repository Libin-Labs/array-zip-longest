import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('zips equal lengths', () => {
  assert.deepEqual(
    api.zipLongest([
      [1, 2],
      ['a', 'b'],
    ]),
    [
      [1, 'a'],
      [2, 'b'],
    ],
  );
});
test('fills missing positions', () => {
  assert.deepEqual(api.zipLongest([[1, 2], ['a']], null), [
    [1, 'a'],
    [2, null],
  ]);
});
test('supports empty inputs', () => {
  assert.deepEqual(api.zipLongest([], 0), []);
});
test('handles empty member', () => {
  assert.deepEqual(api.zipLongest([[], [1, 2]], 0), [
    [0, 1],
    [0, 2],
  ]);
});
test('uses undefined default', () => {
  assert.deepEqual(api.zipLongest([[1], []]), [[1, undefined]]);
});
test('rejects non-array member', () => {
  assert.throws(() => api.zipLongest([[1], 2]), TypeError);
});
