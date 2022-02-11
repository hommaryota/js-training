import React from "react";

export const CompleteTodo = (props) => {
  const {todo, onClickBack} = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {todo.map((todo, index) => {
          return (
            <li key={todo} className="list-row">
              <div>{todo}</div>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
