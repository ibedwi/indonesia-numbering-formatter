import idx from '../index';

test('should return default value', () => {
  expect(idx.formatCurrency(3000)).toBe('Rp3.000')
})

test('given 3000 with decimal 2, should return "Rp3.000,00"', () => {
  expect(idx.formatCurrency(3000, 2)).toBe('Rp3.000,00')
})
