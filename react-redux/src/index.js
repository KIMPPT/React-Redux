import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//redux provider 추가 : 컴포넌트로 들고옴
import { Provider } from "react-redux";

//store를 만들기 위한 createStore 추가
//줄이 그어진 이유 : toolkit을 사용 권장
//applyMiddleware : middleware 적용하기위해 들고옴
import { createStore ,applyMiddleware} from "redux";
//rootReducer 가져옴
import rootReducer from "./modules";
import myLogger from "./middleware/myLogger";
import logger from "redux-logger";
//thunk 들고오기
import ReduxThunk from 'redux-thunk'
//createStore를 통해 store 생성 + applyMiddleware를 쓰고자 한다면 아래와 같이 ()에 쓰고자하는 middleware js를 들고옴
let store = createStore(rootReducer,applyMiddleware(myLogger,ReduxThunk));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
