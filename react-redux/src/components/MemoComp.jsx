import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addMemo, deleteMemo } from "../modules/memo";
export default function MemoComp() {
  let memo = useSelector((state) => state.memo);
  let dispatch = useDispatch();
  let onAddMemo = () => {
    dispatch(addMemo({ text: input, date: "2023-05-12" }));
    setInput(""); //버튼 클릭시 dispatch후 input 값을 초기화
  };
  let [input, setInput] = useState("");
  return (
    <div>
      <h2>MemoComp</h2>
      {/*form으로 만들어서 submit으로 실행 - form의 경우 Enter키를 눌려도 된다*/}
      <form
        onSubmit={(e) => {
          //밑에 식이 없어서 버튼을 누르면 계속해서 새로고침이 되었음
          e.preventDefault();
          //이벤트에 바로 작성할 때는 함수자체를 넣어야 하기 때문에 onAddMemo로 넣어주지만, 지금 onSubmit에서 화살표 함수 안에 작성되고 있기에 onAddMemo()로 넣어야 한다
          onAddMemo();
        }}
      >
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button type="submit">form으로 메모 추가</button>
      </form>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={onAddMemo}>메모추가</button>
      {memo.map((m) => (
        <div key={m.id}>
          <p>{m.id}</p>
          <h4>{m.text}</h4>
          <p>{m.date}</p>
          <button
          //클릭했을 때 m.id를 action생성함수로 전달하여 reducer에서 filter를 통해 새 배열 만들기
          onClick={()=>{dispatch(deleteMemo(m.id))}}>X</button>
        </div>
      ))}
      {/*
      <p>{memo[0].id}</p>
      <h4>{memo[0].text}</h4>
      <p>{memo[0].date}</p>
      */}
    </div>
  );
}
