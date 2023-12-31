import React from "react";
import "../../styles/componentsStyles/_cell.scss";
import { CellState, CellValue } from "../../types";

const Cell = ({
  row,
  col,
  state,
  value,
}: {
  row: number;
  col: number;
  state: CellState;
  value: CellValue;
}) => {
  const renderContent = (): React.ReactNode => {
    if (state === CellState.visible) {
      if (value === CellValue.bomb) {
        return (
          <span role="img" aria-label="bomb">
            💣
          </span>
        );
      } else {
        return value !== CellValue.none ? value : null;
      }
    } else if (state === CellState.flaged) {
      // TODO: Display a flag emoji
    }
    return null;
  };

  return (
    <button className={`cell ${state === CellState.visible ? "visible" : ""}`}>
      {renderContent()}
    </button>
  );
};

export default Cell;
