import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseNumber } from "../modules/counterNumber";
export default function CounterNumber() {
  let dispatch = useDispatch();
  let counterNumber = useSelector((state) => state.counterNumber);
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
      onClick={(num)=>{
        dispatch({type:"DECREASE_NUMBER",num})
      }}>
        -{counterNumber.num}
      </button>
    </div>
  );
}
