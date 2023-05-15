//createSlice 메서드 불러오기
import { createSlice } from "@reduxjs/toolkit";
export let countSlice = createSlice({
  //지정해줄 이름 : 필수
  name: "counter",
  //초기값 : 필수
  initialState: {
    value: 0,
  },
  //reducer : 필수
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    increaseType: (state, action) => {
      state.value += action.payload;
    },
  },
});
//action 생성함수를 내보내기
export let { increase, increaseType } = countSlice.actions;
export default countSlice.reducer;
