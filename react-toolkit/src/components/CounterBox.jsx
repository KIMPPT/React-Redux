import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../slices/counterSlick";
export default function CounterBox() {
  let counter = useSelector((state) => state.counter.value);
  let dispatch = useDispatch();
  console.log(counter);
  return (
    <div>
      <h1>CounterBox</h1>
      <p>{counter}</p>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
    </div>
  );
}
