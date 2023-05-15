//redux toolkit을 사용해서 작성한 redux들을 묶어서 store로 내보냄

//redux에서 createStore 작성하는 부분
import { configureStore } from "@reduxjs/toolkit";
//작성한 reducer를 가져와서 연결
//export default로 가져온 값은 오직 하나임으로 아래와 같이 이름을 바꿔서 들고 올 수 있다
import counterReducer from "./slices/counterSlick";
//counterReducer와 counterSlice는 동일한 내용이다
import counterSlice from "./slices/counterSlick";
//combineReducer를 이용해서 묶어서 store로 내보내는 부분
export default configureStore({ reducer: { counter:counterSlice } });
