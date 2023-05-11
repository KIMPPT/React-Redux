import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeNumber, increaseNumber } from "../modules/counterNumber";
export default function CounterNumber() {
  let dispatch = useDispatch();
  let counterNumber = useSelector((state) => state.counterNumber);

  /*input의 값을 입력받아 올 때는 바로 redux로 접근하지 않고
  useState로 값을 받아온 후 확정되면 redux로 전달
  */
  let [input, setInput] = useState(1);
  return (
    <div>
      <p>conterNumber의 (state)객체에서 값을 가져와서 출력</p>
      <h3>{counterNumber.count}</h3>
      <button
        onClick={() => {
          dispatch(increaseNumber());
        }}
      >
        +{counterNumber.num}
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREASE_NUMBER" });
        }}
      >
        -{counterNumber.num}
      </button>
      <input
        type="number"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
      <button
        onClick={() => {
          dispatch(changeNumber(parseInt(input)));
          setInput(0);
        }}
      >
        숫자입력
      </button>
    </div>
  );
}
