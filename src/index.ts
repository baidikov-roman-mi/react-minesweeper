import { MAX_COLS, MAX_ROWS, BOMBS_AMOUNT } from "./constants";
import { Cell, CellValue, CellState } from "./types";

// generate cells
export const generateCells = (): Cell[][] => {
  let cells: Cell[][] = [];

  for (let row = 0; row < MAX_ROWS; row++) {
    cells.push([]);
    for (let col = 0; col < MAX_COLS; col++) {
      cells[row].push({
        value: CellValue.none,
        state: CellState.visible,
      });
    }
  }

  // generate bombs
  let placedBombs = 0;
  while (placedBombs < BOMBS_AMOUNT) {
    const randomRow = Math.floor(Math.random() * MAX_ROWS);
    const randomColumn = Math.floor(Math.random() * MAX_COLS);
    const currentCell = cells[randomRow][randomColumn]; // Use randomRow and randomColumn here

    if (currentCell.value !== CellValue.bomb) {
      cells = cells.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          if (randomRow === rowIndex && randomColumn === colIndex) {
            return {
              ...cell,
              value: CellValue.bomb,
            };
          }
          return cell;
        })
      );
      placedBombs++;
    }
  }
  console.log("placedBombs :>> ", placedBombs);
  return cells; // Don't forget to return the generated cells
};
