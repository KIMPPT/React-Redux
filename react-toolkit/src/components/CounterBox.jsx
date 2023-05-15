import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../slices/counterSlice";
export default function CounterBox() {
  let counter = useSelector((state) => state.counter.value);
  let counter2 = useSelector((state) => state.counterReducer.value);
  let dispatch = useDispatch();
  //임의로 증가할 값을 useState로 받아옴
  let [num, setNum] = useState(1);
  console.log(counter);
  return (
    <div>
      <h1>CounterBox</h1>
      <p>{counter}:counter</p>
      <p>{counter2}:counter2</p>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      {/*num값을 바꾸기 위한 input 태그 작성 */}
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value))}
      />
      <button
        //매개변수로 전달되는 값은 payload로 사용 할 수 있다
        onClick={() => dispatch(incrementByAmount(num))}
      >
        {num > 0 ? `+${num}` : num}
      </button>
    </div>
  );
}
