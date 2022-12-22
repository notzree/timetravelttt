import { useState, useEffect } from "react";

const Square = ({ value, onSmash }) => {
  return (
    <button class=" btn  text-slate-800 w-10 my-1 mx-2" onClick={onSmash}>
      <p>{value}</p>
    </button>
  );
};
export default Square;
