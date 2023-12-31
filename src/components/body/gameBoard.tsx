import React, { useState } from "react";
import Cell from "./Cell.tsx";
import { generateCells } from "../../index.ts";
import "../../styles/componentsStyles/_gameBoard.scss";

const Body = () => {
  const [cells, setCells] = useState(generateCells());

  // render cells
  const renderCells = (): React.ReactNode => {
    return cells.map((row, rowIndex) =>
      row.map((col, colIndex) => (
        <Cell
          key={`${rowIndex}-${colIndex}`}
          state={cells[rowIndex][colIndex].state}
          value={cells[rowIndex][colIndex].value}
          row={rowIndex}
          col={colIndex}
        />
      ))
    );
  };

  console.log("Cells :>> ", cells);
  return (
    <>
      <main id="gameBoard">{renderCells()}</main>
    </>
  );
};

export default Body;
