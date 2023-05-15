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
      state.value -= 1;
    },
  },
});
//action 생성함수를 slice를 통해서 내보내기
export let { increment, decrement } = counterSlice.actions;
//reducer 함수를 slice를 통해서 내보내기
export default counterSlice.reducer;
