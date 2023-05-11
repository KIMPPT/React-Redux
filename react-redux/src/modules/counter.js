/*counter의 공간은 redux를 사용하면서 action과 reducer 함수를 작성하는 공간
action : 어떤 내용을 실행할지 정함
reducer함수 : 액션의 타입을 받아와서 실행(변화)*/

/*counter에서 할 일
1. 값을 1씩 증가
2. 값을 1씩 감소
state:0
action:"INCREASE","DECREASE"
action 생성 함수로 만들어서 사용 (return값이 객체)
action 중에서 외부에서 값을 가져와서 추가, 수정 하는 action
>action 생성 함수의 매개변수를 통해서 외부의 값을 들고 옴
*/

//action 객체를 반환하는 action 생성 함수
export let increase = () => ({ type: "INCREASE" });
export let decrease = () => ({ type: "DECREASE" });
/*매개변수를 통해서 값을 받아와서 사용
num:dispatch에서 change 함수를 불러와서 사용했을 때 정해짐
num에는 숫자값을 넣겠다 해서, num 이름으로 붙여줌
*/
export let change = num => ({ type: "CHANGE",num });
export let change2 = num => ({ type: "CHANGE2",num });

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
    case "CHANGE":{
      //action에 다른 속성이 있다면 접근해서 사용 가능
      //action.payload 라는 속성이름을 값으로 전달해서 사용함
      return state+action.num;
    }
    case "CHANGE2":{
      //이렇게 짠 경우 change2(num)의 num 값이 state값으로 들어간다
      return action.num;
    }
    default: {
      return state;
    }
  }
}

export default counter;
