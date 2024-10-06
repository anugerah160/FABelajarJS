import sum from './index.js';
import assert from 'node:assert';
import test from 'node:test';

test('sum() harus mengembalikan hasil yang benar untuk angka yang valid', () => {
  // Kasus uji 1: Angka positif
  assert.strictEqual(sum(2, 3), 5, 'sum(2, 3) harus mengembalikan 5');
  
  // Kasus uji 2: Nol dan angka positif
  assert.strictEqual(sum(0, 5), 5, 'sum(0, 5) harus mengembalikan 5');
  
  // Kasus uji 3: Kedua nol
  assert.strictEqual(sum(0, 0), 0, 'sum(0, 0) harus mengembalikan 0');
});

test('sum() harus mengembalikan 0 untuk angka negatif', () => {
  // Kasus uji 4: Angka negatif
  assert.strictEqual(sum(-1, 5), 0, 'sum(-1, 5) harus mengembalikan 0');
  assert.strictEqual(sum(3, -2), 0, 'sum(3, -2) harus mengembalikan 0');
  assert.strictEqual(sum(-2, -3), 0, 'sum(-2, -3) harus mengembalikan 0');
});

test('sum() harus mengembalikan 0 untuk input non-numerik', () => {
  // Kasus uji 5: Input non-numerik
  assert.strictEqual(sum('a', 5), 0, 'sum("a", 5) harus mengembalikan 0');
  assert.strictEqual(sum(3, 'b'), 0, 'sum(3, "b") harus mengembalikan 0');
  assert.strictEqual(sum('a', 'b'), 0, 'sum("a", "b") harus mengembalikan 0');
  assert.strictEqual(sum({}, []), 0, 'sum({}, []) harus mengembalikan 0');
});

test('sum() harus mengembalikan 0 untuk input NaN', () => {
  // Kasus uji 6: NaN sebagai input
  assert.strictEqual(sum(NaN, 5), 0, 'sum(NaN, 5) harus mengembalikan 0');
  assert.strictEqual(sum(3, NaN), 0, 'sum(3, NaN) harus mengembalikan 0');
});
