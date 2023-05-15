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
      let newMemo = {
        ...action.payload,
        id: id,
      };
      id++;
      state.push(newMemo);
    },
    deleteSlice: (state, action) => {
      //state값을 바로 수정하기 위해 splice 사용
      state.splice(action.payload, 1);
      //이 경우 문제가 배열의 인덱스 번호가 수시로 변경된다는 점이다.
    },
    //반드시 toolkit에서 자공되는 형태로 해야 할 필요는 없다
    //배열에 관한 값을 사용할 때는 익숙한 메서드 사용 권장
    deleteMemoRedux: (state, action) => {
      //1. id값을 이용하여 제외한 새로운 배열 생성
      let newMemoList = state.filter((m) => m.id !== action.payload);
      //2. return 새로운 배열을 할당
      //3. return을 통해서 할당되는 형태는 state의 형태
      return newMemoList;
    },
  },
});
//화면에 업데이트 되는 변수가 아닌, 코드안에서 사용할 변수
let id = 2;
export let { addMemoRedux, addMemoToolkit, deleteSlice, deleteMemoRedux } =
  memoSlice.actions;
export default memoSlice.reducer;
