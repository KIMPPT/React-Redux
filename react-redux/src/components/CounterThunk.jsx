import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { addNmThunk, addNum } from "../modules/counterThunk";
export default function CounterThunk() {
  let counterThunk=useSelector((state)=>(state.counterThunk))
  let dispatch=useDispatch();
  return (
    <div>
      <h2>CounterThunk</h2>
      <p>{counterThunk.num},{counterThunk.thunkNum}</p>
      <button
      onClick={()=>{dispatch(addNum())}}>redux-action함수</button>
      <button
      onClick={()=>{dispatch(addNmThunk())}}>redux-thunk함수</button>
    </div>
  );
}
