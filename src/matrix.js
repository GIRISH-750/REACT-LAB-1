
export const START = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Section 08: Increase one cell by 1 without modifying the original matrix.
export function incrementAt(matrix, row, col) {
  return matrix.map((values, r) =>
    r === row
      ? values.map((value, c) => (c === col ? value + 1 : value))
      : values
  );
}

// Section 09: Calculate statistics from the matrix.
export function stats(matrix) {
  throw new Error("TODO");
}

// Section 12: Create a matrix with the same shape, filled with zeros.
export function zeros(matrix) {
  throw new Error("TODO");
}

// IN-LAB TASK: Leave this unchanged.
export function decrementAt(matrix, row, col) {
  throw new Error("TODO");
}
