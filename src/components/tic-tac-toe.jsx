/* eslint-disable no-unused-vars */

import useTicTacToe from "../hooks/tic-tac-toe";

const PlayerX = () => {
  return (
    <div>
      <svg
        className="draw"
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 191.01 154.13"
      >
        <polygon
          className="cls-1"
          points="72.89 80.89 17.81 9.57 61.77 11.16 94.52 56.81 126.25 11.82 172.7 9.45 116.19 80.89 162.91 145.28 118.75 145.6 94.52 107.79 70.38 145.45 26.45 145.45 72.89 80.89"
        />
      </svg>
    </div>
  );
};

const PlayerO = () => {
  return (
    <div>
      <svg
        className="draw1"
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 176.5 176.5"
      >
        <circle cx="88.25" cy="88.25" r="79.75" />
      </svg>
    </div>
  );
};

function TicTacToe() {
  const { board, getStatusMessage, handleClick, resetGame } = useTicTacToe();

  return (
    <div className="w-full grid place-items-center h-screen">
      <div className="min-w-[calc(3_*_100px)] h-fit border p-4 rounded-lg bg-white shadow-md">
        <div className="flex justify-between items-center gap-5 mb-12">
          <h2 className="text-lg min-w-[150px] font-semibold uppercase">
            {getStatusMessage()}
          </h2>
          <button
            className="py-1 border rounded-md p-2 text-lg"
            onClick={resetGame}
          >
            Reset Game
          </button>
        </div>

        <div className="w-full grid grid-cols-3 relative">
          <div className="absolute top-[60px] animate-customping left-0 w-full h-[4px] bg-slate-300"></div>
          <div className="absolute top-[120px] animate-customping left-0 w-full h-[4px] bg-slate-300"></div>
          <div className="absolute top-[0px] animate-customping left-[95px] w-[4px] h-full bg-slate-300 "></div>
          <div className="absolute top-[0px] animate-customping right-[95px] w-[4px] h-full bg-slate-300 "></div>
          {board.map((b, index) => {
            return (
              <button
                key={index}
                onClick={() => handleClick(index)}
                disabled={b !== null}
                className="min-h-[60px] px-6 transition-all grid place-items-center"
              >
                {b === null ? "" : b === "X" ? <PlayerX /> : <PlayerO />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TicTacToe;

// w@AYPMbaY4BMeXc
