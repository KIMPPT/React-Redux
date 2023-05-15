import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMemo, deleteMemo } from "../slices/memoSlice";
export default function MemoComp() {
  let memo = useSelector((state) => state.memo);
  let dispatch = useDispatch();
  //텍스트 값을 받아올 공간 마려해줌
  let [input, setInput] = useState("");
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let now = `${year}-${month}-${day}-${hour}:${minute}:${second}`;
  return (
    <div>
      <hr />
      <h3>MemoComp</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {/*onclick 시 push로 메모를 추가하는데 text값은 input, date는 현재 임의로 작성된 문자열을 보내줌 */}
      <button
        onClick={() => (
          dispatch(addMemo({ text: input, date: now })),
          //추가했다면 input 값을 비워줌
          setInput("")
        )}
      >
        메모 추가
      </button>
      <table>
        <tbody>
          {memo.map((m, index) => (
            //map에 index를 넣은 이유 : memoslice에서 splice에 쓰기 위함-인덱스 번호로 추가,수정,삭제를 씀
            <tr key={m.id}>
              <td>{m.text}</td>
              <td>{m.date}</td>
              <td>
                <button
                  //deleteMemo reducer를 쓰기 위해서 action.payload에 해당 index 값을 보냄
                  onClick={() => dispatch(deleteMemo(index))}
                >
                  x
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
