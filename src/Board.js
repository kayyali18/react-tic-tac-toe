import React from "react";
import Square from "./Square";

// class Board extends Component {
//   renderSquare(i) {
//     return <Square />;
//   }

//   render() {
//     const status = "Next player: X";

//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

function Board(props) {
  const { squares, onClick } = props;

  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => {
          onClick(i);
        }}
      />
    );
  };

  let render = () => {
    return (
      <div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    );
  };

  return render();
}

export default Board;
