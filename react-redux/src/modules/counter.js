/*counter의 공간은 redux를 사용하면서 action과 reducer 함수를 작성하는 공간
action : 어떤 내용을 실행할지 정함
reducer함수 : 액션의 타입을 받아와서 실행(변화)*/

/*counter에서 할 일
1. 값을 1씩 증가
2. 값을 1씩 감소
state:0
action:"INCREASE","DECREASE"
action 생성 함수로 만들어서 사용 (return값이 객체)
*/

//action 객체를 반환하는 action 생성 함수
export let increase = () => ({ type: "INCREASE" });
export let decrease = () => ({ type: "DECREASE" });
//state의 기본값 작성
let initalState = 0;
//action과 state를 받아와서 state를 바꾸는 reducer함수
//매개변수에 =을 통해서 값을 미리 넣어 둘 수 있다
function counter(state = initalState, action) {
  //switch를 통해 action의 타입 확인
  switch (action.type) {
    case "INCREASE": {
      return state + 1;
    }
    case "DECREASE": {
      return state - 1;
    }
    default: {
      return state;
    }
  }
}

export default counter;
