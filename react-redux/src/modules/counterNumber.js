/*action,reducer 작성하는 공간
counternumber
증가하는 값,감소하는 값
1. 입력하는 값 만큼 증가
2. 입력하는 값 만큼 감소
3. 증가,감소할 값을 입력받아옴
state:count,num(증가 또는 감소 값)
action:"INCREASE_NUMBER","DECREASE_NUMBER","CHANGE_NUMBER"
*/

//reducer에 들어갈 초기값,값이 여러개 이면 객체형으로
let initalState = {
  count: 0,
  num: 1,
};

//action 생성 함수
export let increaseNumber = (num) => ({ type: "INCREASE_NUMBER", num });
export let decreaseNumber = (num) => ({ type: "DECREASE_NUMBER", num });
//reducer 작성
function counterNumber(state = initalState, action) {
  switch (action.type) {
    case "INCREASE_NUMBER":
      //state의 값의 형태가 객체라면 그 형태를 계속 유지
      return { ...state, count: state.count + state.num };
    case "DECREASE_NUMBER":
      return { ...state, count: state.count - state.num };
    default:
      return state;
  }
}
export default counterNumber;
