
export const START = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Section 08: Increase one cell by 1.
export function incrementAt(matrix, row, col) {
  return matrix.map((values, r) =>
    r === row
      ? values.map((value, c) => (c === col ? value + 1 : value))
      : values
  );
}

// Section 09: Calculate statistics from the matrix.
export function stats(matrix) {
  const values = matrix.flat();

  if (values.length === 0) {
    return {
      sum: 0,
      average: 0,
      max: 0,
      nonZero: 0,
    };
  }

  const sum = values.reduce((acc, value) => acc + value, 0);

  const average = sum / values.length;

  const max = Math.max(...values);

  const nonZero = values.filter((value) => value !== 0).length;

  return { sum, average, max, nonZero };
}

// Section 12: Create a matrix with the same shape, filled with zeros.
export function zeros(matrix) {
  throw new Error("TODO");
}

// IN-LAB TASK: Leave this unchanged.
export function decrementAt(matrix, row, col) {
  throw new Error("TODO");
}
