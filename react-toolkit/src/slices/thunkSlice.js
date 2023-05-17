/*toolkit에서 제공하는 thunk middleware 기능 사용
thunk를 이용하여 작성하는 여러가지 방법
1. 비동기 함수를 사용
2. 여러개의 action을 순서대로 사용*/

//1초 뒤에 숫자값을 증가시키는 slice

import { createSlice } from "@reduxjs/toolkit";

export let thunkSlice = createSlice({
  name: "thunk",
  initialState: {
    value: 4,
  },
  reducers: {
    addValue: (state) => {
      state.value += 1;
    },
  },
});
/*toolkit에는 thunk가 내장되어 있기에 설치하지않고 사용 할 수 있다
redux에서 사용할 방식과 동일하게 사용>redux에서 action함수를 만들어준 것처럼 사용 
함수의 return 값에 함수 return
next/dispatch라는 이름으로 함수를 받아와서 사용 > reducer를 호출하는 함수*/
export let addValueAsync = () => (dispatch) => {
  //thunk를 사용해서, 원하는 reducer 호출해서 사용
  setTimeout(() => {
    dispatch(addValue());
  }, 1000);
};
export let { addValue } = thunkSlice.actions;
export default thunkSlice.reducer;
