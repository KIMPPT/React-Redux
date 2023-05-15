//Slice를 이용하여 이름,초기값,reducer를 작성
import { createSlice } from "@reduxjs/toolkit";

export let counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    //객체 안에서 함수(메서드)작성
    increment: (state) => {
      //toolkit은 state의 값에 직접 접근하여 값을 바로 수정가능. =을 통한 값 할당
      state.value += 1;
    },
    //감소하는 함수(메서드)작성
    decrement: (state) => {
      //return을 이용하면 이전 방식으로 값을 저장 할 수 있다.
      //이전 방식 : state의 값을 통째로 할당
      state.value -= 1;
    },
    //값을 입력받아와서 증가하는 함수
    //action은 redux에서 값을 전달한 action객체
    //action의 payload는 redux toolkit에서 고정해서 사용
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
//action 생성함수를 slice를 통해서 내보내기
export let { increment, decrement, incrementByAmount } = counterSlice.actions;
//reducer 함수를 slice를 통해서 내보내기
export default counterSlice.reducer;
