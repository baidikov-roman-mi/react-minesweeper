import { useState } from "react";
import NumberDisplay from "./NumberDisplay.tsx";
import RestartBtn from "./RestartBtn.tsx";
import { BOMBS_AMOUNT } from "../../constants.tsx";
import "../../styles/componentsStyles/_header.scss";

const Header = () => {
  const [gameOverStatus, setGameOverStatus] = useState(false);




  return (
    <>
      <div id="header">
        {/* Bomb Counter */}
        <NumberDisplay value={BOMBS_AMOUNT} />
        <RestartBtn gameOverStatus={gameOverStatus} />
        {/* Time Counter */}
        <NumberDisplay value={0} />
      </div>
    </>
  );
};

export default Header;
