import React from "react";
//reducer에 있는 값을 꺼내서 사용 : useSelector
//reducer에 있는 값을 수정 : useDispatch
import { useDispatch, useSelector } from "react-redux";
//dispatch에서 사용할 action 함수
import { increase, decrease, change, change2 } from "../modules/counter";
import ExCountBox from "./ExCountBox";
export default function CounterBox() {
  //useSelector로 값 가져오기
  //state는 modules의 index.js에서 작성한 rootReducer
  //state.counter는 rootReducer안에 객체로 묶인 counter
  //>counter를 속성이름으로 사용
  //reducer함수만 전달해도 useSelector에서 자동으로 state를 뽑아줌
  /*
    1. modules의 counter.js에 action,action생성함수,reducer함수를 작성함
    2. 그것을 modules의 index.js에서 conbineReduce로 모듈들을 묶어줄 수 있음
    3. 그 묶은 것들을 src의 index.js에서 createScore를 이용해 가져옴
    4. 그 가져온 값을 Provider로 App.js를 감싸서 안에서 쓸 수 있도록 함
    5. Provider로 받아온 값을 counterbox에서 state를 이용해 받아옴
    */
  let counter = useSelector((state) => state.counter);
  //useDispatch()를 통해서 사용할 함수를 들고 옴
  let dispatch = useDispatch();
  return (
    <div>
      <h3>{counter}</h3>
      <button
        onClick={() => {
          //값을 수정하기 위해서 dispatch와 action함수 사용
          //action함수는 return값이 객체인 함수 : reducer에 작성
          //increase()으로 작성해서 실행하는 이유 : return값 전달을 위해
          dispatch(increase());
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch(decrease());
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          dispatch(change(5));
        }}
      >
        +5
      </button>
      <button
        onClick={() => {
          dispatch(change2(30));
        }}
      >
        +30
      </button>
      <br />
      <ExCountBox />
    </div>
  );
}
