import React, { useState } from "react";
import Board from "./Board";
import calculateWinner from "./calculate-winner";

// class Game extends Component {
//   render() {}
// }

function Game(props) {
  const [xIsNext, flipX] = useState(true);
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNum, setStepNum] = useState(0);

  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNum + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) return;

    squares[i] = xIsNext ? "X" : "O";

    setHistory(newHistory.concat([{ squares }]));
    setStepNum(newHistory.length);
    flipX(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNum(step);
    const newHistory = history.slice(0, step + 1);
    console.log(newHistory);
    setHistory(newHistory);
    flipX(step % 2 === 0);
  };

  const render = () => {
    const current = history[stepNum];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (!winner) status = `Next player: ${xIsNext ? "X" : "O"}`;
    else status = `Winner:\t${winner}`;

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            xIsNext={xIsNext}
            onClick={handleClick}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  };

  return render();
}

export default Game;
