import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease2, increase2 } from "../modules/counter2";
export default function ExCountBox() {
  let counter2 = useSelector((state) => state.counter2);
  console.log(counter2);
  let dispatch = useDispatch();
  return (
    <div>
      <p>countbox에서 한 내용 복습</p>
      <p>useSelector를 이용하여 값 가져오기</p>
      <h3>{counter2}</h3>
      <button
        onClick={() => {
          dispatch(increase2());
        }}
      >
        +2
      </button>
      <button
        onClick={() => {
          dispatch(decrease2());
        }}
      >
        -2
      </button>
    </div>
  );
}
