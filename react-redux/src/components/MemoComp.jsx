import React from "react";
import { useSelector, useDispatch } from "react-redux";
export default function MemoComp() {
  let memo = useSelector((state) => state.memo);
  return (
    <div>
      <h2>MemoComp</h2>
      {memo.map((m) => (
        <div key={m.id}>
          <p>{m.id}</p>
          <h4>{m.text}</h4>
          <p>{m.date}</p>
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
