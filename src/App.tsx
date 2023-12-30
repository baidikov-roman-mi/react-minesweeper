import Header from "./components/header/Header.tsx";
import Body from "./components/body/gameBoard.tsx";
import "./App.scss";

const App = () => {
  return (
    <>
      <h1>React Minesweeper</h1>
      <div id="gameContainer">
        <Header />
        <Body />
      </div>
    </>
  );
};

export default App;
