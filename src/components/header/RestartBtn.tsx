import "../../styles/componentsStyles/_restartBtn.scss";

const RestartBtn = ({ gameOverStatus }: { gameOverStatus: boolean }) => {
  return (
    <>
      <button id="restartBtn">{gameOverStatus == true ? "💥" : "😊"}</button>
      {/* demolution - 💥 */}
    </>
  );
};

export default RestartBtn;
