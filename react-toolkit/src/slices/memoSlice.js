//createSlice를 통해서 이름,초기값,reducer 작성
//action과 reducer export
import { createSlice } from "@reduxjs/toolkit";
//memoSlice에서 배열을 어떻게 업데이트 하는지
export let memoSlice = createSlice({
  name: "memo",
  initialState: [{ id: 1, text: "첫번째 메모입니다", date: "2023-05-16" }],
  reducers: {
    addMemoRedux: (state, action) => {
      //새로운 메모
      let newMemo = {
        ...action.payload,
        id: id,
      };
      id++;
      //새로운 메모가 있는 배열 생성
      let newMemoList = state.concat(newMemo);
      //return으로 새로운 배열로 전달
      return newMemoList;
    },
    //값을 직접 수정해서 쓰는 방법
    addMemoToolkit: (state, action) => {
        //배열의 메서드 중 push()
        //push()는 원본 배열에 값을 추가해서 사용한다
        let newMemo={
            ...action.payload,
            id:id,
        }
        id++;
        state.push(newMemo);
    },
  },
});
//화면에 업데이트 되는 변수가 아닌, 코드안에서 사용할 변수
let id = 2;
export let { addMemoRedux,addMemoToolkit } = memoSlice.actions;
export default memoSlice.reducer;
