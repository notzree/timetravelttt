import Square from "./Square";
import { useState, useEffect, use } from "react";
import { WindSong } from "@next/font/google";

const Board = ({ firstPlayer }) => {
  const [tile, setTile] = useState(Array.apply(" ", Array(9)));

  const [nextMove, setNextMove] = useState(firstPlayer == "X" ? true : false);
  const status = "Next Player: " + (nextMove ? "X" : "O");

  const handleClick = (i) => {
    const tileCopy = tile.map((e, k) => {
      if (k === i) {
        e = nextMove ? "X" : "O";
        setNextMove(!nextMove);
        return e;
      } else return e;
    });
    setTile(tileCopy);
  };

  const resetBoard = () => {
    //since tile is not actually changed because we mapped it to a seperate array using .map, Basically have to remaek the copy and then check the copy. 
    setTile(Array.apply(null, Array(9)));
  };
  const calculateWinner = (tile)=>{
    const winPattern =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    for (let i=0;i<winPattern.length;i++){
        const [a,b,c] = winPattern[i];
      console.log(tile);

     // if (tile[a]&&tile[a]==tile[b] && tile[a]==tile[c]){
     //   return tile[a]
     // } else return null;
      

    }

  }
  //Generate the Board
  const rows = [];
  for (let i = 0; i < tile.length; i += 3) {
    const row = tile.slice(i, i + 3);
    rows.push(
      <div key={i}>
        {row.map((content, j) => (
          <Square
            key={i + j}
            value={content}
            onSmash={() => handleClick(i + j)}
          />
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="px-2 py-8 chat chat-start border bg-base-300 w-40 flex justify-center rounded-lg"><p className="chat-bubble chat-bubble-accent">{status}</p></div>
      <div className="pt-18">{rows}</div>
      <div>
        <button onClick={resetBoard} className= "btn btn-secondary mt-8">Reset</button>
      </div>
      <div>
        <p>Winner is + {calculateWinner()}</p>
      </div>
    </div>
  );
};
export default Board;
