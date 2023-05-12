/*action함수와 reducer함수를 작성하는 공간
redux의 middleware인 thunk 사용방법
1. action함수를 사용해서 1씩 증가하는 방법
2. thunk를 사용하여 1씩 증가하는 방법
state:num,thunknum
action:"ADD_NUM",thunk 사용하여 작성
*/
let initalState = {
  num: 0,
  thunkNum: 0,
};
//action함수 > return 값 action 객체
export let addNum = () => ({ type: "ADD_NUM" });
/*thunk middleware를 사용한 action 함수 > return 값 함수
dispatch를 이용하셔 action 값을 reducer에 전달 할 때 action 객체가 아닌 함수일 경우 실행된다
return 값에 들어가는 함수의 매개변수로 next 또는 dispatch를 사용
*/
export let addNmThunk = () => (next) => {
    //thunk를 사용하면 원하는 action객체를 전달하여 순서에 맞춰 실행 할 수 있다
  next({ type: "ADD_THUNKNUM" });
  console.log("Thunk를 이용하여 실행");
  next({ type: "ADD_NUM" });
};

//thunk를 이용한 action 함수 작성
//next()를 이용하여 ADD_NUM 을 2번 실행하기

//reducer
function counterThunk(state = initalState, action) {
  switch (action.type) {
    case "ADD_NUM": {
      return { ...state, num: state.num + 1 };
    }
    case "ADD_THUNKNUM": {
      return { ...state, thunkNum: state.thunkNum + 1 };
    }
    default: {
      return state;
    }
  }
}
export default counterThunk;
