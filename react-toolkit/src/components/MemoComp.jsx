import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMemoRedux, addMemoToolkit } from "../slices/memoSlice";
export default function MemoComp() {
  let memo = useSelector((state) => state.memo);
  let dispatch = useDispatch();
  let [memotext, setMemotext] = useState("");
  let [memotext2, setMemotext2] = useState("");
  console.log(memotext);
  return (
    <div>
      {memo.map((m) => (
        <div key={m.id}>
          <h3>{m.text}</h3>
          <p>{m.date}</p>
        </div>
      ))}
      <button
        onClick={() => {
          dispatch(addMemoRedux({ text: "추가", date: "2023-05-15" }));
        }}
      >
        addMemoRedux로 메모 추가
      </button>
      <br />
      {/*
      memo redux 내용 확인 후, slice와 비교
      input태그를 이용해서 입력받아와서 수정하기
      */}
      <input
        type="text"
        value={memotext}
        onChange={(e) => setMemotext(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(addMemoRedux({ text: memotext, date: "2023-05-15" }));
        }}
      >
        addMemoRedux로 메모 추가
      </button>
      {/*addMemoToolkit를 사용한 메모추가 */}
      <br />
      <input
        type="text"
        value={memotext2}
        onChange={(e) => setMemotext2(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(addMemoToolkit({ text: memotext2, date: "2023-05-15" }));
        }}
      >
        addMemoToolkit로 메모 추가
      </button>
    </div>
  );
}
