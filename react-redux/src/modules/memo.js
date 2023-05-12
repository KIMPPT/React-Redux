/*action함수,reducer,state의 초기값
1.메모 추가
2.메모 수정
3.메모 삭제
state : [](여러개),text,date(내용)
action:"ADD_MEMO","MODIFY_MEMO","DELETE_MEMO"
*/

let initalState = [
  {
    id: 1,
    text: "첫번째 메모입니다",
    date: "2023-05-12",
  },
  {
    id: 2,
    text: "두번째 메모입니다",
    date: "2023-05-13",
  },
];

//action 생성 함수
//addMemo는 메모의 값을 추가하기 위해 함수를 통해서 memo의 값을 가져옴
// : {text,date}를 가져와야함 > dispatch사용 때 확인
export let addMemo = (memo) => ({ type: "ADD_MEMO", payload: memo });

//reducer
function memo(state=initalState, action) {
    switch(action.type){
        case("ADD_MEMO"):{
            return
        }
        default:{
            return state;
        }
    }
}
export default memo;
