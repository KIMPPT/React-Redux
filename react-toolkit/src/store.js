//redux toolkit을 사용해서 작성한 redux들을 묶어서 store로 내보냄

//redux에서 createStore 작성하는 부분
import { configureStore } from "@reduxjs/toolkit";
//작성한 reducer를 가져와서 연결
//export default로 가져온 값은 오직 하나임으로 아래와 같이 이름을 바꿔서 들고 올 수 있다
import counterReducer from "./slices/counterSlice";
//counterReducer와 counterSlice는 동일한 내용이다
import counterSlice from "./slices/counterSlice";
//combineReducer를 이용해서 묶어서 store로 내보내는 부분
export default configureStore({
  reducer: {
    //useSelector에서 state의 어디로 접근할 지에 대한 이름.
    //state.counter로 접근
    counter: counterSlice,
    //state.counterReducer로 접근(값은 위의 내용과 동일)
    counterReducer,
  },
});
