
import Cell from "./Cell.jsx";

// Section 06 — render the matrix as a table.

export default function Matrix({ matrix, onIncrement }) {
  return (
    <table className="matrix">
      <tbody>
        {matrix.map((values, r) => (
          <tr key={r}>
            {values.map((value, c) => (
              <td key={c}>
                <Cell
                  row={r}
                  col={c}
                  value={value}
                  onClick={() => onIncrement(r, c)}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
