import { test } from 'node:test';
import { sum } from './index.js';

test('sum dari 1 dan 2 = 3', (t) => {
  if (sum(1, 2) !== 3) {
    throw new Error('jika error sum(1, 2) = 3');
  }
});