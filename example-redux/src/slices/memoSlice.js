import { createSlice } from "@reduxjs/toolkit";
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let now = `${year}-${month}-${day}-${hour}:${minute}:${second}`;
export let memoSlice = createSlice({
  name: "memo",
  initialState: [
    {
      id: 1,
      text: "첫번째 메모입니다",
      date: now,
    },
  ],
  reducers: {
    addMemo: (state, action) => {
      let newMemo = {
        ...action.payload,
        id: id,
      };
      id++;
      state.push(newMemo);
    },
    deleteMemo: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});
//표시는 되지 않을 값이지만 안에서 변하는 값
let id = 2;

export let { addMemo, deleteMemo } = memoSlice.actions;
export default memoSlice.reducer;
