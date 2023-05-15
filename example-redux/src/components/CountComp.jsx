import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, increaseType } from "../slices/countSlice";
export default function CountComp() {
  //state.count는 store.js에서 지정한 count:countSlice 부분이다
  let count = useSelector((state) => state.count);
  let dispatch = useDispatch();
  let [num, setNum] = useState(1);
  return (
    <div>
      <h1>{count.value}:useSelector로 찾아낸 값</h1>
      <button
        onClick={() => {
          //countSlice.js에서 reducers 부분에 increase 함수 만든 것을 불러냄
          dispatch(increase());
        }}
      >
        +1
      </button>
      <input
        type="number"
        value={num}
        //parseInt를 붙인 이유는 e.target.value 값이 문자열로 받아지기 때문에 숫자로 변환해야 사칙연산이 가능하다
        onChange={(e) => setNum(parseInt(e.target.value))}
      />
      <button
        onClick={() => {
          //increaseType 안의 num 값은 countSlice의 reducers에서 action.payload로 들어간다
          //payload로 들어가는 것은 고정이므로 toolkit으로 짠 경우 임의 변경이 불가능하다
          dispatch(increaseType(num));
        }}
      >
        {num > 0 ? `+${num}` : num}
      </button>
    </div>
  );
}
