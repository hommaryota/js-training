import React from "react";

export const IncompleteTodo = (props) => {
  const {todo, onClickComplete, onClickDelete} = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {/* 2つ目の引数にindexを記述すると、順番を読み込める */}
        {todo.map((todo, index) => {
          return (
            <li key={todo} className="list-row">
              <div>{todo}</div>
              <button onClick={() => onClickComplete(index)}>完了</button>
              {/* onClick={()=> onClickDelete(index)}にアロー関数を設定しないとレンダリングされた時によみこまれてしまう */}
              <button onClick={() => onClickDelete(index)}>削除</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
