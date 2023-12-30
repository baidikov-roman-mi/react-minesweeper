import React, { useState } from "react";
import Cell from "./Cell.tsx";
import { generateCells } from "../../index.ts";
import "../../styles/componentsStyles/_gameBoard.scss";
const Body = () => {
  const [cells, setCells] = useState(generateCells());
  console.log("cells :>> ", cells);

  const renderCells = (): React.ReactNode => {
    return cells.map((row, rowIndex) =>
      row.map((col, colIndex) => <Cell key={`${colIndex}${rowIndex}`} />)
    );
  };

  return (
    <>
      <main id="gameBoard">{renderCells()}</main>
    </>
  );
};

export default Body;
