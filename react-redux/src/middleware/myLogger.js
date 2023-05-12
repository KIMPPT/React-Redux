//middleware의 형식으로 작성한 logger
/*특징
모든 dispatch가 호출되고 reducer가 실행되기 전에 먼저 실행되는 중간 함수
1.reducer로 값을 바꾸기 전에 실행되는 내용을 출력 또는 수정 - 예)Logger : redux에 관한 내용 출력
2.비동기 함수를 사용할 때 그 순서를 정해줄 수 있다 - 예) thunck
*/
let myLogger=store=>next=>action=>{
    //action 객체 출력({type:"~"})
    console.log(action);
    //next() action객체를 reducer 또는 middleware에게 전달
    //result는 next()실행한 결과값 : undefined
    let result=next(action);
    return result;
}
export default myLogger;